const IconLink = ({ iconInfo }) => {
  return (
    <ul className="hidden md:flex md:flex-row justify-evenly mt-10">
      {iconInfo.map(({ icon, url }) => (
        <li key={icon}>
          <a target="_blank" href={url}>
            <i
              className={`${icon} fa-xl md:fa-2xl hover:opacity-50 active:opacity-100`}
              style={{ color: "whitesmoke" }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IconLink;
