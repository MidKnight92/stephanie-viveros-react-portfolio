import useDocumentTitle from "../useDocumentTitle";
import { useState } from "react";
import { formspreeUrl } from "../constants";

export default ({ title }) => {
  useDocumentTitle({ title });
  const [formData, setFormData] = useState({});
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowForm(false);
    try {
      const reponse = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (reponse.ok) {
        setShowForm(false);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formBody = (
    <form onSubmit={handleSubmit}>
      <label for="senderName">Name:{" "}</label>
      <input
        name="name"
        id="senderName"
        type="text"
        placeholder="Full Name"
        required
      />
      <label for="sender">Email:{" "}</label>
      <input
        name="_replyto"
        type="email"
        id="sender"
        placeholder="Email"
        required
      />
      <label for="textArea">Message:{" "}</label>
      <textarea
        name="message"
        id="textArea"
        placeholder="Enter text here..."
        maxlength="500"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );

  const thankYouMessage = (
    <p>
      Thanks for your message! I’m looking forward to connecting and exploring
      how we can build something great together! Talk to you soon.
    </p>
  );

  return (
    <>
      <h1>Contact Me</h1>
      {showForm ? formBody : thankYouMessage}
    </>
  );
};
