const validate = values => {
  const errors = {};
  const requiredFields = ['submissionTitle', 'submissionBody'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  // need to grab the validation rules from the existing front-end

  return errors;
};

export default validate;
