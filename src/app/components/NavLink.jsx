// NavLink.jsx
import React from "react";

const NavLink = ({ href, title }) => {
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 64, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (event) => {
    event.preventDefault();

    // Get the target section's id from the href attribute
    const targetId = href.substring(1);

    // Scroll to the target section
    smoothScroll(targetId);
  };

  return (
    <a
      href={href}
      onClick={handleLinkClick}
      className="block mt-4 text-lg md:inline-block md:mt-0 text-white hover:text-purple-500 mr-4"
    >
      {title}
    </a>
  );
};

export default NavLink;
