import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <section id="contact" className="m-3">
        <h1 className="font-color text-center" data-testid="h1tag">
          Contact me
        </h1>
        <form
          className="container form-group"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="row p-2">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input
              className="w-100"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group row p-2">
            <label className="label" htmlFor="email">
              Email address:
            </label>
            <input
              className="w-100"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group row p-2">
            <label className="label" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-100"
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div className="row">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button
            id="contact-btn"
            className="row text-center"
            data-testid="button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
