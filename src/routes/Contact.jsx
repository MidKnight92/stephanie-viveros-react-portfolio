import useDocumentTitle from "../useDocumentTitle";
import { useState } from "react";
import { Filter } from "bad-words";

const Contact = ({ title }) => {
  useDocumentTitle({ title });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const filter = new Filter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isProfane()) {
      const form = e.target;
      try {
        const reponse = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(new FormData(form)).toString(),
        });
        if (reponse.ok) {
          setMessage(thankYouMessage);
          setFormData({ name: "", email: "", message: "" });
        } else {
          setMessage(errorMessage);
          throw new Error(`${reponse.status}: ${reponse.statusText}`);
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

  const isProfane = () => {
    const hasProfanity = Object.values(formData).some((input) =>
      filter.isProfane(input)
    );
    setShowMessage(hasProfanity);
    hasProfanity && setMessage(profanityMessage);
    return hasProfanity;
  };

  const formBody = (
    <form
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Name:
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={formData.name}
            required
          />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input
            onChange={handleChange}
            name="email"
            type="email"
            value={formData.email}
            required
          />{" "}
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea
            onChange={handleChange}
            name="message"
            value={formData.message}
            maxLength="500"
            required
          ></textarea>{" "}
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );

  const thankYouMessage =
    "Thanks for your message! I’m looking forward to connecting and exploring how we can build something great together! Talk to you soon.";

  const errorMessage =
    "Oops! Something went wrong while sending your message. Please try again, or feel free to reach out to me directly (312) 883-3708. I’m excited to connect and I will get in touch soon!";

  const profanityMessage =
    "Your input contains language that is not allowed. Please revise your entry and try again.";

  return (
    <>
      <h1>Contact Me</h1>
      <div style={{ height: "30px" }}>{showMessage && <p>{message}</p>}</div>
      {formBody}
    </>
  );
};

export default Contact;
