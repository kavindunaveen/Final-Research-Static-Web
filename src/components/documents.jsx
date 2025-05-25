
import React from "react";

export const Documents = (props) => {
  const renderSection = (title, docs) => (
    <div className="container text-center" style={{ marginBottom: "50px" }}>
      <div className="section-title">
        <h3>{title}</h3>
        <div
          className="green-bar"
          style={{
            height: "6px",
            width: "200px",
            background: "linear-gradient(to right, #006400, #228B22)",
            margin: "20px auto",
            borderRadius: "4px"
          }}
        ></div>
      </div>
      <div className="row">
        {docs && docs.length > 0 ? (
          docs.map((doc, i) => (
            <div key={i} className="col-xs-12 col-sm-6 col-md-3 mb-4">
              <div
                className="doc-card"
                style={{
                  padding: "15px",
                  background: "#f9f9f9",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  maxHeight: "300px",        // <-- limit card height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"  // <-- compact content
                }}
              >
                <img
                  src={doc.smallImage}
                  alt="Document Icon"
                  style={{ width: "60px", marginBottom: "10px" }}
                />
                <h5 style={{ fontSize: "14px", marginBottom: "10px" }}>{doc.title}</h5>
                <a href={doc.url} target="_blank" rel="noreferrer">
                  <button className="btn btn-outline-dark mt-2">Download PDF</button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );

  return (
    <div id="documents" className="text-center" style={{ paddingBottom: "50px" }}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Documents</h2>
          <hr />
        </div>
      </div>
      {renderSection("Project Proposal Documents", props.data.ProjectProposalDocuments)}
      {renderSection("Progress Presentation 1", props.data.ProgressPresOne)}
      {renderSection("Progress Presentation 2", props.data.ProgressPresTwo)}
      {renderSection("Research Paper", props.data.ResearchPaper)}
      {renderSection("Final Reports", props.data.FinalReps)}
    </div>
  );
};
