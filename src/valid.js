const NAME = "name";
const EMAIL = "email";

const isValid = (name, value) => {
  if (name === EMAIL) {
    return !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value)
  } else if (name === NAME) {
   return  !/^(?!\d+$)[\p{L}'’-]{2,50}$/u.test(value);
  } else {
    return !/^(?!\s*$).+/.test(value);
  }
};

export default isValid;
