import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form >
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOptions="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors}
      />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}
      />

    </form>
  )
};

export default CourseForm;
