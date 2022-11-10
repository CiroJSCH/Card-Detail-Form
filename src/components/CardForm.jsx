import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

import "../styles/form.css";

const cardNumbers = (value) => /^[0-9 ]+$/.test(value);

const onlyNumbers = (value) => /^\d+$/.test(value);

const validationSchema = yup.object({
  name: yup.string().required("Required"),
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

const initialValues = {
  name: "",
  cardNumber: "",
  dateM: "",
  dateY: "",
  cvc: "",
};

const CardForm = ({ setCardData, cardData }) => {
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        onSubmit={() => console.log("caca")}
        validationSchema={validationSchema}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form
            className="form-container"
            onChange={(e) =>
              setCardData({ ...cardData, [e.target.id]: e.target.value })
            }
          >
            <div className="form-field">
              <label htmlFor="name">Cardholder Name</label>
              <Field
                id="name"
                name="name"
                placeholder="e.g. Jane Appleseed"
                className="field"
              />
              <ErrorMessage name="name" component={"span"} className="error" />
            </div>

            <div className="form-field">
              <label htmlFor="cardNumber">Card Number</label>
              <Field
                id="cardNumber"
                name="cardNumber"
                placeholder="e.g. 1234 5678 9123 0000 "
                className="field large-field"
                maxLength={19}
                onChange={(e) =>
                  setFieldValue(
                    "cardNumber",
                    e.target.value
                      .replace(/\s/g, "")
                      .replace(/(.{4})/g, "$1 ")
                      .trim()
                  )
                }
              />
              <ErrorMessage
                name="cardNumber"
                component={"span"}
                className="error"
              />
            </div>

            <div className="form-number">
              <div className="form-number-field form-short">
                <label htmlFor="dateM">Exp. Date</label>
                <Field
                  id="dateM"
                  name="dateM"
                  placeholder="MM"
                  className="field"
                  maxLength={2}
                />
                <ErrorMessage
                  name="dateM"
                  component={"span"}
                  className="error"
                />
              </div>
              <div className="form-number-field form-short">
                <label htmlFor="dateY">(MM/YY)</label>
                <Field
                  id="dateY"
                  name="dateY"
                  placeholder="YY"
                  className="field"
                  maxLength={2}
                />
                <ErrorMessage
                  name="dateY"
                  component={"span"}
                  className="error"
                />
              </div>
              <div className="form-number-field form-medium">
                <label htmlFor="cvc">CVC</label>
                <Field
                  id="cvc"
                  name="cvc"
                  placeholder="e.g. 123"
                  className="field"
                  maxLength={3}
                />
                <ErrorMessage name="cvc" component={"span"} className="error" />
              </div>
            </div>

            <button type="submit">Confirm</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardForm;
