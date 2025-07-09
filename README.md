# ConnectEd - Student-Teacher Appointment Booking System

This is a Next.js application for a student-teacher appointment booking system, built with Firebase.

## 🚀 Project Overview

**ConnectEd** is a web platform designed to streamline communication and scheduling between students, teachers, and administrators in an educational institution.

### ✨ Core Features:

*   **Role-Based Access**: Separate, tailored dashboards for Admins, Teachers, and Students.
*   **User Authentication**: Secure login and registration powered by Firebase Authentication.
*   **Teacher Management**: Admins can easily add, update, and remove teacher profiles.
*   **Student Approval System**: Admins review and approve new student registrations, ensuring a secure user base.
*   **Appointment Booking**: Students can search for teachers and book appointments based on availability.
*   **Appointment Management**: Teachers can view their schedule, and approve or cancel upcoming appointments.
*   **Real-time Messaging**: A built-in communication system for students and teachers to connect.
*   **Action Logging**: Key user actions are logged for monitoring and debugging purposes.

## 💻 Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
*   **Backend & DB**: [Firebase](https://firebase.google.com/) (Authentication & Firestore)

## Firebase Setup

To run this project, you will need to create a Firebase project and configure the application.

1.  **Create a Firebase Project**: Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Enable Firebase Services**:
    *   **Authentication**: Enable Email/Password sign-in method.
    *   **Firestore**: Create a new Firestore database.
3.  **Get Config Keys**: In your Firebase project settings, find your web app's configuration keys.
4.  **Environment Variables**: Create a `.env.local` file in the root of the project and add your Firebase configuration:

    ```sh
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
    ```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.
