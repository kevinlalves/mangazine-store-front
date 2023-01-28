const validateSchema = (object, schema) => {
  const { error } = schema.validate(object, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    window.alert(errorMessages);

    return false;
  }

  return true;
}

export default validateSchema;
