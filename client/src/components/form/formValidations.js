const validateEmptyFields = (fields) => {
  return (
    Array.isArray(fields) &&
    fields.length > 0 &&
    fields.every((field) => {
      return String(field).trim().length > 0;
    })
  );
};
const validateDni = (dni) => {
  const isValidDni =
    !isNaN(parseInt(dni)) &&
    parseInt(dni) >= 10000000 &&
    parseInt(dni) == parseFloat(dni) &&
    parseInt(dni) < 100000000;
  return isValidDni;
};
const validateDate = (date) => {
  const validDateFormatYearMonthDay =
    /(^\d{4}.\d{2}.\d{2}$)|(^\d{2}.\d{2}.\d{4}$)/;

  if (
    !date ||
    isNaN(new Date(date).getTime()) ||
    !validDateFormatYearMonthDay.test(date)
  ) {
    return false;
  }
  const selectedDate = new Date(date);
  const today = new Date();
  const isValidDate =
    selectedDate < today && new Date("1900-01-01") < selectedDate;
  return isValidDate;
};

export { validateEmptyFields, validateDni, validateDate };
