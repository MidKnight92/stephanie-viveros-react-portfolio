import useDocumentTitle from "../useDocumentTitle";
import { useState } from "react";
import { Filter } from "bad-words";
import { email, location } from "../constants";

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
      className="font-medium"
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <p className="my-2">
        <label htmlFor="name">
          <span className="hidden">Name</span>
          <input
            aria-label="Enter your name"
            aria-required="true"
            className="form-input"
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            required
          />
        </label>
      </p>
      <p className="my-5">
        <label htmlFor="email">
          <span className="hidden">Email</span>
          <input
            aria-label="Enter your email"
            aria-required="true"
            className="form-input"
            onChange={handleChange}
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email"
            required
          />
        </label>
      </p>
      <p className="my-5">
        <label htmlFor="message">
          <span className="hidden">Message</span>
          <textarea
            aria-label="Enter your message"
            aria-required="true"
            className="form-input"
            onChange={handleChange}
            name="message"
            value={formData.message}
            maxLength="500"
            placeholder="Message"
            required
          ></textarea>
        </label>
      </p>
      <p className="my-5">
        <button role="submit" aria-label="Send" className="btn" type="submit">
          Send
        </button>
      </p>
    </form>
  );

  const contact = (
    <address className="mt-10 md:mt-0">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-3xl lg:text-2xl mt-1">
        Contact
      </h2>
      <p className="text-gray-600 my-1">{email}</p>
      <p className="text-gray-600">312.883.3708</p>
      <h2 className="text-2xl font-semibold sm:text-xl md:text-3xl lg:text-2xl mt-8">
        Based in
      </h2>
      <p className="text-gray-600 my-1">{location}</p>
    </address>
  );

  const thankYouMessage =
    "Thanks for your message! I’m looking forward to connecting and exploring how we can build something great together! Talk to you soon.";

  const errorMessage =
    "Oops! Something went wrong while sending your message. Please try again, or feel free to reach out to me directly. I’m excited to connect and I will get in touch soon!";

  const profanityMessage =
    "Your input contains language that is not allowed. Please revise your entry and try again.";

  return (
    <div className="flex-col mt-20 md:mt-2 p-2 text-pretty md:fixed md:w-3/4 md:right-0 md:p-6 md:flex-none">
      <h1 className="text-center">Contact Me</h1>
      <div className="text-center my-4">
        {showMessage && (
          <p aria-errormessage={message} className="max-w-screen">
            {message}
          </p>
        )}
      </div>
      <div className="md:flex mt-6 md:gap-x-40 justify-center md:mt-28">
        {formBody}
        {contact}
      </div>
    </div>
  );
};

export default Contact;
