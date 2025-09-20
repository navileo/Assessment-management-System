# Assessment Management System

This project is a full-stack web application for managing assessments and generating PDF reports. It includes user authentication, a configurable report generation system, and a React frontend.

## Features

- User Authentication (Login, Signup)
- Configurable PDF Report Generation
- Dynamic data display in reports

## Technologies Used

- **Backend:** Node.js, Express.js, Puppeteer
- **Frontend:** React.js, Tailwind CSS

## Setup and Installation

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Backend Setup

1.  Navigate to the project root directory:
    ```bash
    cd Assessment-management-System
    ```
2.  Install backend dependencies:
    ```bash
    npm install
    ```
3.  Start the backend server:
    ```bash
    node index.js
    ```
    The backend server will run on `http://localhost:3001`.

### Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install frontend dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm start
    ```
    The frontend application will be available at `http://localhost:3000`.

## Usage

1.  **Register/Login:** Access the frontend application and register a new user or log in with existing credentials.
2.  **Generate Report:** Navigate to the `/report` page, enter a session ID (e.g.,'sess_001', `sess_002`), and click "Generate Report". A PDF report will be generated and downloaded.

## Project Structure

```
. 
├── authController.js
├── config.js
├── data.js
├── frontend/
│   ├── public/
│   ├── src/
│   └── ...
├── health_fitness_report_template.html
├── index.js
├── package.json
├── reportController.js
└── reports/
```

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
