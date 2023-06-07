import React from "react";

import "./InnerFooter.css";

export const InnerFooter = () => {
  return (
    <div className="inner_footer_parent_div">
      <div className="inner_footer_div">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github font_awsome_logo" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin font_awsome_logo" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram font_awsome_logo" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter font_awsome_logo" />
        </a>
      </div>

      <div className="inner_footer_text">
      </div>
    </div>
  );
};
