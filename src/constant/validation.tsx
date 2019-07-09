import { required, email, numericality } from "redux-form-validators";

const emailFormat = email({ message: "Wrong format email" });
const requiredField = required({ message: "This field is required" });
const mustBeNumber = numericality({
  int: true,
  message: "Must be a number"
});

const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export { composeValidators, requiredField, mustBeNumber, emailFormat };
