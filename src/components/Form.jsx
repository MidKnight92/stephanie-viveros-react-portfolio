import FormField from "./FormField";
import { invalidNameMessage, invalidEmailMessage, invalidTextMessage } from "../constants";

const Form = ({ onSubmit, onChange, onBlur, formData, isFormDataInvalid }) => {
  return (
    <form
      className="font-medium"
      name="contact"
      method="POST"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <FormField label="name" error={invalidNameMessage} isFormDataInvalid={isFormDataInvalid.name}>
        <input
          aria-label="Enter your name"
          aria-required="true"
          className="form-input"
          onChange={onChange}
          onBlur={onBlur}
          name="name"
          type="text"
          minLength="2"
          maxLength="50"
          placeholder="Name"
          value={formData.name}
          required
        />
      </FormField>
      <FormField label="email" error={invalidEmailMessage} isFormDataInvalid={isFormDataInvalid.email}>
        <input
          aria-label="Enter your email"
          aria-required="true"
          className="form-input"
          onChange={onChange}
          onBlur={onBlur}
          name="email"
          type="email"
          value={formData.email}
          placeholder="Email"
          required
        />
      </FormField>
      <FormField label="message" error={invalidTextMessage} isFormDataInvalid={isFormDataInvalid.message}>
        <textarea
          aria-label="Enter your message"
          aria-required="true"
          className="form-input"
          onChange={onChange}
          onBlur={onBlur}
          name="message"
          value={formData.message}
          maxLength="500"
          placeholder="Message"
          style={{marginBottom: "-0.5rem"}}
          required
        ></textarea>
      </FormField>
      <p className="my-5">
        <button role="submit" aria-label="Send" className="btn" type="submit">
          Send
        </button>
      </p>
    </form>
  );
};

export default Form;
