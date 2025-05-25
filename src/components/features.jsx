import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data && props.data.length > 0 ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-md-4">
                <i className={d.icon} style={{ fontSize: "2em", marginBottom: "10px" }}></i>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};
