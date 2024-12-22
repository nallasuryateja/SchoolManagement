import React from "react";
import ClassAnalytics from "./ClassAnalytics";
import IncomeExpenseAnalytics from "./IncomeExpenseAnalytics";

function AnalyticsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="bg-white p-4 rounded shadow">
        {/* <h2 className="text-xl font-semibold mb-2">
          Student Performance Overview
        </h2>
        <p>
          This page displays analytics related to student performance,
          attendance, and other metrics.
        </p> */}
        <ClassAnalytics />
        <IncomeExpenseAnalytics />
      </div>
    </div>
  );
}

export default AnalyticsPage;
