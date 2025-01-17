import { useState } from "react";
import { Filter } from "bad-words";
import SEO from "../seo/SEO";
import Form from "../components/Form";
import { errorMessage, thankYouMessage, profanityMessage } from "../constants";
import ContactInfo from "../components/ContactInfo";
import isValid from "../valid";

const Contact = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormDataInvalid, setIsFormDataInvalid] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const filter = new Filter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isProfane()) {
      const form = e.target;
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(new FormData(form)).toString(),
        });
        if (response.ok) {
          setMessage(thankYouMessage);
          setFormData({ name: "", email: "", message: "" });
        } else {
          setMessage(errorMessage);
          throw new Error(`${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
    setShowMessage(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    setIsFormDataInvalid((prevIsFormDataInvalid) => ({
      ...prevIsFormDataInvalid,
      [e.target.name]: isValid(e.target.name, e.target.value),
    }));
  };

  const isProfane = () => {
    const hasProfanity = Object.values(formData).some((input) =>
      filter.isProfane(input)
    );
    setShowMessage(hasProfanity);
    hasProfanity && setMessage(profanityMessage);
    return hasProfanity;
  };

  return (
    <div className="flex-col mt-20 md:mt-2 p-2 text-pretty md:fixed md:w-3/4 md:right-0 md:p-6 md:flex-none">
      <SEO
        title={title}
        description="Contact Stephanie Viveros."
        keywords="Contact"
        path="contact"
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Me",
          description: "Contact Stephanie Viveros.",
          url: "https://www.stephanieviveros.com/contact",
        })}
      />
      <h1 className="text-center">Contact Me</h1>
      <div className="text-center my-4">
        {showMessage && (
          <p aria-errormessage={message} className="max-w-screen">
            {message}
          </p>
        )}
      </div>
      <div className="md:flex mt-6 md:gap-x-40 justify-center md:mt-28">
        <Form
          isFormDataInvalid={isFormDataInvalid}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
          onChange={handleChange}
          formData={formData}
        />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
