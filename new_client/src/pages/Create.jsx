import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";


const SubmitIssue = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await apiCreate(data);
      alert(response.data.message);
      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Page>
      <Header />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form style={formContainer} onSubmit={handleSubmit}>
          <h5>Issue</h5>
          {/* email */}
          <div style={inputContainer}>
            <label htmlFor="issue_type">Issue</label>
            <input type="text" name="email" id="email" />
          </div>
          {/* username */}
          <div style={inputContainer}>
            <label htmlFor="reported_by">Reported by</label>
            <input type="text" name="reported_by" id="reported_by" />
          </div>
          {/* password */}
          <div style={inputContainer}>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
          </div>
          <div style={inputContainer}>
            <label htmlFor="status">Status</label>
            <input type="text" name="status" id="status" />
          </div>
          <div style={inputContainer}>
            <label htmlFor="commencement_by">Commencement by</label>
            <input type="text" name="commencement_by" id="commencement_by" />
          </div>
          <button type="submit">Submit</button>
          <button type="button" className="btn-secondary">
            SubmitIssue
          </button>
        </form>
      </Container>
    </Page>
  );
};

const formContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
  gap: "1rem",
};

const inputContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
  gap: "0.5rem",
};

export default SubmitIssue;
