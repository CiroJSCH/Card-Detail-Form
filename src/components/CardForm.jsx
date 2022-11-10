import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

import "../styles/form.css";

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  cardNumber: yup.string().required("Required"),
  dateM: yup.string().required("Required"),
  dateY: yup.string().required("Required"),
  cvc: yup.number().required("Required"),
});

const initialValues = {
  name: "",
  cardNumber: "",
  dateM: "",
  dateY: "",
  cvc: "",
};

const CardForm = () => {
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        onSubmit={() => console.log("caca")}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className="form-container">
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
