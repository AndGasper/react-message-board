import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { compose } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import renderInput from 'utils/renderInput';
import validate from './validate';

const CreatePostForm = props => {
  const { handleSubmit, reset, pristine, submitting } = this.props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="submissionTitle"
        label="submissionTitle"
        component={renderInput}
      />
      <Field
        name="submissionBody"
        label="submissionTitle"
        component={renderInput}
      />
      <div>
        <RaisedButton type="submit" label="Submit" />
        <FlatButton type="reset" label="reset" />
      </div>
    </form>
  );
};
const withReduxForm = reduxForm({
  form: 'CreatePostForm',
  validate,
});
CreatePostForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
};

export default compose(withReduxForm)(CreatePostForm);
