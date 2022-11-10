import * as yup from "yup";

const cardNumbers = (value) => /^[0-9 ]+$/.test(value);
const cardName = (value) => /^[A-Za-z ]+$/.test(value);
const onlyNumbers = (value) => /^\d+$/.test(value);

export const validationSchema = yup.object({
    name: yup
      .string()
      .required("Required")
      .test("Only Letters", "Only Letters", cardName),
    cardNumber: yup
      .string()
      .required("Required")
      .test("Only Numbers", "Only numbers", cardNumbers)
      .min(19, "16 numbers required"),
    dateM: yup
      .string()
      .required("Required")
      .length(2, "2 digits")
      .test("Only Numbers", "Only numbers", onlyNumbers),
    dateY: yup
      .string()
      .required("Required")
      .length(2, "2 digits")
      .test("Only Numbers", "Only numbers", onlyNumbers),
    cvc: yup
      .string()
      .required("Required")
      .length(3, "3 digits")
      .test("Only Numbers", "Only numbers", onlyNumbers),
  });