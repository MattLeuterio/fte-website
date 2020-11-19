import React from 'react';
import PropTypes from 'prop-types';

const iconsLib = {
  "test": "M21.375 3.375H16.6725C16.2 2.07 14.9625 1.125 13.5 1.125C12.0375 1.125 10.8 2.07 10.3275 3.375H5.625C4.3875 3.375 3.375 4.3875 3.375 5.625V21.375C3.375 22.6125 4.3875 23.625 5.625 23.625H21.375C22.6125 23.625 23.625 22.6125 23.625 21.375V5.625C23.625 4.3875 22.6125 3.375 21.375 3.375ZM13.5 3.375C14.1187 3.375 14.625 3.88125 14.625 4.5C14.625 5.11875 14.1187 5.625 13.5 5.625C12.8813 5.625 12.375 5.11875 12.375 4.5C12.375 3.88125 12.8813 3.375 13.5 3.375ZM15.75 19.125H7.875V16.875H15.75V19.125ZM19.125 14.625H7.875V12.375H19.125V14.625ZM19.125 10.125H7.875V7.875H19.125V10.125Z"
}



const Icon = ({ size, color, icon, className, viewBox, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={`#${color}`}d={iconsLib[icon]} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 16,
  color: "#fff",
  viewBox: "0 0 24 24",
  className: "",
};

Icon.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;