# ConnectEd - Student-Teacher Appointment Booking System

This is a Next.js application for a student-teacher appointment booking system. This document provides a comprehensive overview of the application, its features, design, and technical details.

## 🚀 Project Overview

**ConnectEd** is a web platform designed to streamline communication and scheduling between students, teachers, and administrators in an educational institution. The system provides tailored dashboards for each role, ensuring a seamless and efficient experience for all users.

---

## ✨ Core Features

| Feature                         | Admin Dashboard | Teacher Dashboard | Student Dashboard |
| ------------------------------- | :-------------: | :---------------: | :---------------: |
| **User Authentication**         |        ✅       |         ✅        |         ✅        |
| **Role-Based Dashboards**       |        ✅       |         ✅        |         ✅        |
| **Manage Teacher Profiles**     |        ✅       |                   |                   |
| **Approve Student Accounts**    |        ✅       |                   |                   |
| **View All Users**              |        ✅       |                   |                   |
| **Book Appointments**           |                 |                   |         ✅        |
| **View & Manage Appointments**  |                 |         ✅        |         ✅        |
| **Approve/Cancel Appointments** |                 |         ✅        |                   |
| **Real-time Messaging**         |                 |         ✅        |         ✅        |
| **Secure Logout**               |        ✅       |         ✅        |         ✅        |

---

## 🔧 Implementation and Design

The application is built using a modern, component-based architecture with **Next.js** and the **App Router**.

*   **Frontend:** The user interface is created with **React** and styled using **Tailwind CSS**. Reusable UI components are sourced from the **ShadCN/UI** library, which allows for consistent and professional design.
*   **Routing:** The App Router in Next.js is used to create distinct routes for different user roles (e.g., `/admin`, `/teacher`, `/student`), with each route having its own dedicated layout and dashboard.
*   **State Management:** Component-level state is managed using React Hooks (`useState`, `useEffect`). For shared data (like teacher and appointment lists), state is "lifted up" to parent components to ensure data consistency across the UI.
*   **Authentication Flow:** The app includes a full authentication system with login and registration pages. User roles are handled to direct users to the correct dashboard upon login.

---

## 💻 Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation

---

## 🎯 Results & Current State

The result of this project is a high-fidelity, interactive prototype of the **ConnectEd** application. It successfully demonstrates the core user flows, responsive design, and functionality of the system. Key outcomes include:

*   **Role-Specific Dashboards:** Fully functional interfaces for admins, teachers, and students.
*   **Interactive Components:** Users can add/edit teachers, approve students, and book/manage appointments within the UI.
*   **Proof of Concept:** The prototype validates the design and user experience, serving as a strong foundation for a full production build.

---

## 🚧 Limitations

This is a prototype application and has the following limitations:

*   **No Database Connection:** The app uses placeholder data (`/src/lib/placeholder-data.ts`) instead of a persistent database like Firebase Firestore. All changes are stored in memory and will be reset on a page refresh.
*   **No Real Authentication:** The login and registration forms are functional from a UI perspective, but they do not connect to a real authentication service (like Firebase Authentication).
*   **No Backend Logic:** All state management is handled on the client-side. There are no backend API endpoints.

---

## Firebase Setup (For Future Development)

To connect this prototype to a live backend, you will need to set up a Firebase project.

1.  **Create a Firebase Project**: Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Enable Firebase Services**:
    *   **Authentication**: Enable Email/Password sign-in method.
    *   **Firestore**: Create a new Firestore database and define collections for `users`, `appointments`, and `messages`.
3.  **Environment Variables**: Create a `.env.local` file in the root of the project and add your Firebase configuration:

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
