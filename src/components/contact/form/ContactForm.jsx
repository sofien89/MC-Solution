import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from 'emailjs-com'

const ContactForm = () => {
  // for validation
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("FullName is required"),
    phone: Yup.string().required("Phone number is required"),
    companyName: Yup.string().required("Company name is required"),
    message: Yup.string().required("Please,leave us a message."),
    subject: Yup.string().required("Please,leave us a subject."),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(e) {
    // display form data on success
    e.preventDefault();
    emailjs.sendForm('service_awsqzcp', 'template_yw1y8gr', e.target, 'OtgLHGXwNRu_hTUmj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    console.log("Message submited: " );
    e.target.reset();

  }

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Nom compléte</label>
            <input
              type="text"
              placeholder="Nom compléte"
              name="fullName"
              {...register("fullName")}
              className={`${errors.fullName ? "is-invalid" : ""}`}
              required
            />
            {errors.fullName && (
              <div className="invalid-feedback">
                {errors.fullName?.message}
              </div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Nom Entreprise</label>
            <input
              type="text"
              placeholder="Nom Entreprise"
              name="companyName"
              {...register("companyName")}
              className={`${errors.companyName ? "is-invalid" : ""}`}
              required
            />
            {errors.companyName && (
              <div className="invalid-feedback">{errors.companyName?.message}</div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Email Address</label>
            <input
              placeholder="Entrer votre Email"
              name="email"
              type="email"
              {...register("email")}
              className={` ${errors.email ? "is-invalid" : ""}`}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email?.message}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Télèphone</label>
            <input
              type="text"
              placeholder="Télèphone"
              name="phone"
              {...register("phone")}
              className={`${errors.phone ? "is-invalid" : ""}`}
              required
            />
            {errors.phone && (
              <div className="invalid-feedback">
                {errors.phone?.message}
              </div>
            )}
          </div>
        </div><div className="col-md-6">
          <div className="input-group-meta form-group mb-60">
            <label>Objet</label>
            <input
              type="text"
              placeholder="Objet"
              name="subject"
              {...register("subject")}
              className={`${errors.subject ? "is-invalid" : ""}`}
              required
            />
            {errors.subject && (
              <div className="invalid-feedback">
                {errors.subject?.message}
              </div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="input-group-meta form-group lg mb-40">
            <label>Message</label>
            <textarea
              placeholder="Votre message.."
              name="message"
              type="text"
              {...register("message")}
              className={`${errors.message ? "is-invalid" : ""}`}
              required
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">
                {errors.message?.message}
              </div>
            )}
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <button type="submit" className="theme-btn-two">
            Envoyer le message
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ContactForm;
