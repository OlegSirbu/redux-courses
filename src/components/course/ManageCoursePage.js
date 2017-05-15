import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            error: {} 
        }
    }

    render() {
        return (
            <div>
                <h1>Manage course</h1>
                <CourseForm 
                    allAuthors={[]}
                    course={this.state.course} 
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {};

function mapStateToProps(state, ownProps) {
    let course = { id: '', title: '', watchHref: '', authorId: '', length: '', category: '' }
    return {
        course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
