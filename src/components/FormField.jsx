const FormField = ({ label, error, isFormDataInvalid, children }) => {
  return (
    <>
      <p className={label === "name" ? "mt-2" : ""}>
        <label htmlFor={label}>
          <span className="hidden">{label}</span>
          {children}
        </label>
      </p>
      <p
        className={`text-xs mb-4 mt-2  tracking-tight font-light md:mb-10 md:text-sm text-red-600 text-pretty ${
          isFormDataInvalid ? "visible" : "invisible"
        }`}
      >
        {error}
      </p>
    </>
  );
};

export default FormField;
