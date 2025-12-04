const { StateGraph, END, Annotation } = require("@langchain/langgraph");

// Shared employee "DB" (in-memory)
let employees = {
  john_doe: {
    name: "John Doe",
    leaveBalance: 15,
    salary: 5000,
    status: "active",
    overtimeHours: 10,
    deductions: 200,
  },
  jane_smith: {
    name: "Jane Smith",
    leaveBalance: 20,
    salary: 6000,
    status: "active",
    overtimeHours: 5,
    deductions: 150,
  },
};
