# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## To Do List React App

This is a simple To Do List application built with React.

### Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks by status (All, Completed, Incomplete)
- Reorder tasks

### Testing

There are two main approaches to testing this React application:

#### Manual Testing

You can manually test the application by running it locally and interacting with the UI. Here are some steps to manually test the application:

1. **Add a new task** and verify that it is displayed in the list.
2. **Mark a task as completed** and verify that the UI reflects the change.
3. **Delete a task** and verify that it is removed from the list.
4. **Filter tasks by status** (All, Completed, Incomplete) and verify that only the expected tasks are displayed.
5. **Reorder tasks** using the up and down buttons and verify that the order is updated correctly.

#### Automated Testing

You can use a testing library like Jest and React Testing Library to write automated tests for the application. Automated tests can help ensure that the application continues to work as expected as you make changes to the code. Setting up automated tests is beyond the scope of this README, but there are many resources available online to help you get started.

**Note**: It is recommended to use a combination of manual and automated testing to thoroughly test your React application.

### Running the Application

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-username/react-to-do-list.git
   cd react-to-do-list
2. **Install the dependencies**:
   ```bash
   npm install
3. **Start the development server:**:
   ```bash
   npm start

The application will start at http://localhost:3000/ in your web browser.
