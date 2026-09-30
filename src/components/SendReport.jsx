//SendReport.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SendReport = () => {
  const [reportContent, setReportContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your logic to send the report
      await sendReport(reportContent);
      alert('Report sent successfully!');
      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Failed to send report:', error);
    }
  };

  const sendReport = async (content) => {
    // Replace with your logic to send the report to the admin
    console.log('Report content:', content);
    // Example API call
    await fetch('/api/send-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
  };

  return (
    <div className="send-report-container">
      <h1>Send Report</h1>
      <form onSubmit={handleSubmit} className="send-report-form">
        <textarea
          value={reportContent}
          onChange={(e) => setReportContent(e.target.value)}
          placeholder="Write your report here..."
          rows="10"
          className="report-textarea"
        />
        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default SendReport;
