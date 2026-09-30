// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get reports from local storage
    const fetchReports = () => {
      const reports = JSON.parse(localStorage.getItem('reports')) || [];
      setReports(reports);
      setLoading(false);
    };

    fetchReports();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <h2>View Reports</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {reports.length > 0 ? (
            <ul>
              {reports.map((report, index) => (
                <li key={index}>
                  <p>Report by ({report.username}): {report.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reports available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
