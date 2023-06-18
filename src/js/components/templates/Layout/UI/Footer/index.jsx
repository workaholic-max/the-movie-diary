import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gl-footer">
      &copy; {currentYear} The Movie Diary. All rights reserved. Designed by Maksym Lukian.
    </footer>
  );
};

export default Footer;
