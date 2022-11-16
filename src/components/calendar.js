import React, { useCallback } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  age: yup.number().required().positive().integer(),
});

const Calendar = () => {
  const handleOnSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <form onSubmit={formik.handleSubmit} className="form__container">
      <div className="form__item">
        <input
          placeholder="Type your First Name"
          value={formik.values.firstName}
          onChange={(e) => setInputValue("firstName", e.target.value)}
        />
        <small>{formik.errors.firstName}</small>
      </div>
      <div className="form__item">
        <input
          placeholder="Type your Last Name"
          value={formik.values.lastName}
          onChange={(e) => setInputValue("lastName", e.target.value)}
        />
        <small>{formik.errors.lastName}</small>
      </div>
      <div className="form__item">
        <input
          placeholder="Type your age"
          value={formik.values.age}
          onChange={(e) => setInputValue("age", e.target.value)}
        />
        <small>{formik.errors.age}</small>
      </div>
      {!!formik.errors.age && <br />}
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </form>
  );
};

export default Calendar;
