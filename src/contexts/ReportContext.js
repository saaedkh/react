//contexts/ReportContext
import React, { createContext, useState, useContext } from 'react';

// Create a context for reports
const ReportContext = createContext();

// Create a provider component
export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports((prevReports) => [...prevReports, report]);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};

// Custom hook to use the report context
export const useReports = () => useContext(ReportContext);
