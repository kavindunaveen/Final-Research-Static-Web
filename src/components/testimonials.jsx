import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Tools & Technologies</h2>
        </div>
        <div className="tools-wrapper">
          {props.data
            ? props.data.map((tool, i) => (
                <a
                  href={tool.link}
                  className="tool-pill"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                >
                  <img src={tool.logo} alt={tool.name} />
                  <span>{tool.name}</span>
                </a>
              ))
            : "loading..."}
        </div>
      </div>
    </div>
  );
};
