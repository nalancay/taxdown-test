export const isValidData = (formValue) => {
  const { name, surname, age } = formValue;
  let isValid = name !== "" && surname !== "" && age !== "";
  return isValid;
};
