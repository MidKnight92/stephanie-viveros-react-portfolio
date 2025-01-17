const IconLink = ({ iconInfo, ulStyle, ...props }) => {
  return (
    <ul className={ulStyle}>
      {iconInfo.map(({ icon, url }) => (
        <li key={icon}>
          <a target="_blank" href={url}>
            <i
              className={`${icon} fa-xl md:fa-2xl hover:opacity-50 active:opacity-100`}
              {...props}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IconLink;
