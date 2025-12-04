# HR by AI - Multi-Agent LangGraph System

![HR Agent Workflow](./workflow.png)

## Project Overview

**HR by AI** is an intelligent, multi-agent Human Resources automation system built with **LangGraph**. This project demonstrates how to orchestrate multiple AI agents to handle complex HR workflows including recruitment, employee management, leave requests, payroll processing, and terminations.

## What We're Building

This system implements **8 specialized HR agents** that work together in a coordinated graph-based workflow:

### Active Agents (Currently Implemented)

1. **Resume Screener Agent** - Analyzes incoming resumes and scores candidates
2. **Interview Scheduler Agent** - Coordinates interview slots after resume approval
3. **Interviewer Bot Agent** - Conducts automated interviews with candidates
4. **Offer Maker Agent** - Generates and sends offer letters to successful candidates
5. **Onboarding Agent** - Manages the onboarding process for new hires
6. **Leave Manager Agent** - Processes and approves/denies leave requests
7. **Payroll Agent** - Generates payslips and processes salary payments
8. **Exit Agent** - Handles employee termination and offboarding

### Agent Workflows

#### **Recruitment Pipeline** (Agents 1-5)
```
Resume Arrives → Resume Screener (1) → [pass] → Interview Scheduler (2) 
→ Interviewer Bot (3) → [hire] → Offer Maker (4) → Onboarding Agent (5)
```

#### **Leave Management** (Agent 6)
```
Employee Requests Leave → Leave Manager (6) → Approve/Deny based on balance
```

#### **Payroll Processing** (Agent 7)
```
End of Month Trigger → Payroll Agent (7) → Generate payslip PDF
Termination Trigger → Payroll Agent (7) → Generate final payout
```

#### **Employee Termination** (Agent 8 → 7)
```
Terminate Command → Exit Agent (8) → Generate termination letter 
→ Trigger Payroll Agent (7) → Final payout
```

## Key LangGraph Features Demonstrated

- **Conditional Routing** - Router node analyzes input and directs to appropriate agent  
- **Shared State** - All agents access centralized employee database  
- **Agent-to-Agent Communication** - Exit Agent automatically triggers Payroll Agent  
- **State Annotations** - Proper state management with reducers and defaults  
- **Graph Compilation** - Nodes, edges, and conditional routing compiled into executable workflow  
- **Parallelism Potential** - Architecture supports parallel agent execution  
- **Cycles & Triggers** - Support for recurring events (monthly payroll, etc.)  
- **Observability** - Message tracking for debugging production workflows

## Technical Architecture

### State Management
```javascript
HRStateAnnotation = {
  employee_id: employee identifier
  action: current action being performed
  input: user command/request
  leave_days: days requested for leave
  messages: activity log across agents
  nextAgent: routing control for workflow
}
```

### Graph Structure
- **Entry Point**: Router Node
- **Nodes**: 4 specialized agents (router, leave_manager, exit_agent, payroll_agent)
- **Edges**: Conditional routing based on state.nextAgent
- **End State**: Workflow terminates at END node

## Features

- **PDF Generation** - Automatic creation of termination letters and payslips
- **In-Memory Database** - Employee records with salary, leave balance, status
- **Chained Workflows** - Multi-step processes (termination → payroll)
- **State Tracking** - Complete audit trail of all agent actions
- **Interactive CLI** - Natural language command interface

## Usage

### Commands
```bash
# Request leave
"I need 3 days off"
Employee ID: john_doe

# Terminate employee
"Terminate John Doe"

# Run payroll
"Run payroll"
Employee ID: jane_smith

# Exit
"quit"
```

### Running the System
```bash
npm install
node index.js
```

## Sample Employees
- **john_doe**: John Doe (15 days leave, $5000 salary)
- **jane_smith**: Jane Smith (20 days leave, $6000 salary)

## Future Enhancements

- Full recruitment pipeline implementation (Agents 1-5)
- Scheduled triggers for recurring payroll
- Web interface for HR management
- Email/notification integration
- Persistent database (PostgreSQL/MongoDB)
- Analytics and reporting dashboard
- Authentication and role-based access control

## Technologies

- **LangGraph** - Multi-agent orchestration framework
- **Node.js** - Runtime environment
- **PDFKit** - PDF document generation
- **Faker.js** - Test data generation (future use)

---

*This project showcases the power of LangGraph for building production-grade, multi-agent AI systems with complex workflow orchestration.*
