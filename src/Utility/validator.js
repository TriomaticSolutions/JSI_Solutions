import validator from "validator";

const validate = (value) => {
  if (
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  )
    return true;
  else return false;
};

export default validate;
