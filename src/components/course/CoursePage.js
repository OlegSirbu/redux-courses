import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: '' }
        };
    }

    onTitleChange(e){
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({ course:course });
    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
        this.state.course.title = '';
    }

    render(){
        return (
            <div>
                <h1>Courses page</h1>
                <CourseList courses={this.props.courses}/>

                <h2>Add course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

CoursePage.propTypes =  {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
