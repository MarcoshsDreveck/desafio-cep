const errorsMessage = {
  maxLength: ({ max }) => `Favor informe até ${max} digitos`,
  onlyDigit: "Favor informe apenas números"
};

export const getValidatorMessages = validator => {
  const params = Object.keys(validator.$params);
  const errors = params
    .filter(param => {
      return !validator[param];
    })
    .map(param => {
      const error = errorsMessage[param];
      if (typeof error === "function") {
        return error(validator.$params[param]);
      }
      return error;
    });
  return errors;
};
