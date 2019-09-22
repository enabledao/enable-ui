/**
 * TODO(Dan): This should be in a folder with the `formatters.js` file
 */

import {
    required,
    email,
    numericality,
    acceptance
} from "redux-form-validators";

const emailFormat = email({ message: "Wrong format email" });
const requiredField = required({ message: "This field is required" });
const mustBeNumber = numericality({
    int: true,
    message: "Must be a number"
});
const requiredChecked = acceptance({
    message: "You should be agree with our requirement"
});

const composeValidators = (...validators: any[]) => (value: any) =>
    validators.reduce(
        (error, validator) => error || validator(value),
        undefined
    );

export {
    composeValidators,
    requiredField,
    mustBeNumber,
    emailFormat,
    requiredChecked
};
