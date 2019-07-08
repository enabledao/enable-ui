const required = (value: string) =>
  typeof value === "undefined" || value === null || value === ""
    ? "This field is required"
    : undefined;

const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);

const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export { composeValidators, required, mustBeNumber };
