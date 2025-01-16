![logo](https://github.com/user-attachments/assets/cb173f37-f937-4da2-b989-d094c1281e8a)

![start_page](https://github.com/user-attachments/assets/c7e30b4d-416c-4558-9945-4da82e0c5356)

# Smart Home

Smart Home is a modern and minimalist frontend application built with React. It provides an intuitive interface for controlling home resources, such as blinds and temperature sensors. The application is designed to integrate seamlessly with smart home systems, offering real-time monitoring and centralized control.

## Description

- The application enables the collection of data from sensors (currently temperature and humidity) and the control of devices such as blinds (not yet implemented).
- Allows comfortable analysis of collected data through easy-to-read graphs.
- Supports adding rooms and assigning sensors to each room.
- Offers convenient registration of new sensors directly from the application.
- Includes options for changing the language and theme.

## Features

- **Blinds Control**: Adjust the position of your blinds with ease.
- **Sensor Monitoring**: View temperature and humidity data in real time.
- **Data Analysis**: Analyze collected data with intuitive graphs.
- **Room Management**: Add rooms and assign sensors to specific rooms.
- **Sensor Registration**: Register new sensors conveniently within the application.
- **Internationalization**: Change the language to suit your preference.
- **Theme Customization**: Switch between light and dark themes for optimal comfort.
- **Minimalist Design**: A user-friendly interface with a focus on simplicity and efficiency.
- **Responsive UI**: Optimized for desktops, tablets, and mobile devices.

## Tech Stack

- **React**: For building the user interface.
- **TypeScript**: Ensures type safety and code quality.
- **Tailwind CSS**: Used for styling and creating a modern look.
- **shadcn/ui**: Provides reusable and customizable components.
- **react-hook-form**: Manages forms efficiently with validation.
- **zod**: Validates data schemas.
- **tanstack/react-query**: Handles API state management.
- **axios**: For making HTTP requests.
- **react-intl**: Enables internationalization and localization support.
- **recharts**: For building responsive and customizable charts.
- **zustand**: A lightweight state management library.
- **vitest**: Used for testing (no tests are implemented yet).
- **eslint, prettier, husky, lint-staged**: Ensures code quality, formatting, and pre-commit checks.
- **Docker**: Containerizes the application for deployment.
- **GitHub Actions**: Automates deployment to the VPS.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v20 or newer)
- **npm** or **yarn** (for managing dependencies)
- A backend service compatible with the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kaczorowskid/smart-home-frontend-react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd smart-home-frontend-react
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

## Running the Application

### Development Server

Run the application locally:

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

### Production Build

Build the application for production:

```bash
npm run build
# or
yarn build
```

Serve the built files locally to verify:

```bash
npm run preview
# or
yarn preview
```

## Docker

1. Build the Docker image:
   ```bash
   docker build --build-arg VITE_API=<BACKEND_API_URL> -t smart-home-frontend .
   ```
2. Run the container:
   ```bash
   docker run -d --name frontend -p 5173:5173 smart-home-fontend
   ```

## Environment Variables

The app uses environment variables to connect to the backend service. Create a `.env` file in the project root and configure the following variables:

```env
VITE_API=<BACKEND_API_URL>
```

## Galerry

Start page:
![start_page](https://github.com/user-attachments/assets/c7e30b4d-416c-4558-9945-4da82e0c5356)

Login screen:
![login_screen](https://github.com/user-attachments/assets/2c453ea4-ede5-4468-9438-c83107ad44fa)

Register (verify) screen:
![register_screen](https://github.com/user-attachments/assets/e808d973-8c50-49ad-abd6-d9fe4c1722c1)

Dashboard screen:
![dashboard](https://github.com/user-attachments/assets/c40b0ca6-a9a5-4e71-9a71-e5c891b2ec34)

Graphs screen:
![graphs](https://github.com/user-attachments/assets/034e7852-d5c9-4b8b-b5a4-8b92a432b474)

Rooms screen:
![rooms](https://github.com/user-attachments/assets/518c19fd-000d-4aba-b876-be11776e7c40)

Options screen:
![options](https://github.com/user-attachments/assets/582adfca-f835-4755-ae5b-681eeaa05d32)

Settings screen:
![settings](https://github.com/user-attachments/assets/04974f97-a624-4a80-bb1a-c3da4b618170)
