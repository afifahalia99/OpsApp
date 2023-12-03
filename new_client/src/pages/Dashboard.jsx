import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";
import { issueList } from "../utils/api/issue"


const Dashboard = () => {
  const [data, setData] = useState([]);
  const fetchIssue = async () => {
    try {
      const response = await issueList();
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchIssue();
  }, []);
  return (
    <Page>
      <Header />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h5>Issue Dashboard</h5>
          <button>New Issue</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Issue ID</th>
              <th>Issue</th>
              <th>Reported_by</th>
              <th>Description</th>
              <th>Status</th>
              <th>Commencement By</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {/* LOOP HERE */}
            {data?.map((issue, index) => (
              <tr key={index}>
                <td>{issue.id}</td>
                <td>{issue.issue_type}</td>
                <td>{issue.reported_by}</td>
                <td>{issue.description}</td>
                <td>{issue.status}</td>
                <td>{issue.commencement_by}</td>
                <td>{issue.createdAt}</td>
                <td>{issue.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Page>
  );
};

export default Dashboard;
