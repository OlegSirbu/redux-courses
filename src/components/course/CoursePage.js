import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
        course: { title: '' }
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course')
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            Courses page
          </div>
          <div className="panel-body">
            <input
              type="submit"
              value="Add Course"
              className="btn btn-primary col-xs-2"
              onClick={this.redirectToAddCoursePage}
            />

            <CourseList courses={this.props.courses}/>
          </div>
        </div>
        
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
