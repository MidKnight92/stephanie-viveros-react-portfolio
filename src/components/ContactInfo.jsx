import { email, location } from "../constants";
const ContactInfo = () => {
  return (
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
};

export default ContactInfo;
