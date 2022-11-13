import { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { validationSchema } from "../util/validationSchema";

import Thanks from "./Thanks";

import "../styles/form.css";

const initialValues = {
  name: "",
  cardNumber: "",
  dateM: "",
  dateY: "",
  cvc: "",
};

const CardForm = ({ setCardData, cardData }) => {

  const [complete, setComplete] = useState(false)

  return (
    complete ? <Thanks setCardData={setCardData} setComplete={setComplete}/> :
    <div className="form">
      <Formik
        initialValues={initialValues}
        onSubmit={() => setComplete(!complete)}
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
                maxLength={30}
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
                  onBlur={(e) => {
                    if (e.target.value > 12) setFieldValue("dateM", 12);
                  }}
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
