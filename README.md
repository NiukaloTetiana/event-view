# Event-View

"Event-View" is a dynamic and user-friendly web application designed to help users discover, register for, and manage events. It offers a seamless experience with user authentication, responsive design, and interactive features to ensure that users can easily find and participate in events of interest.

### Pages

**1. Home**

- Welcomes users with a site title, company slogan, and a call-to-action button redirecting to the "Events" page.

![Home Page](./public/1.png)

**2. Events**

- Each event card includes essential details, a "Register" button for users to sign up for the event, and a "View" button to see who has registered for that event.
- Detailed information about each event is available, including the event title, date, description, and organizer.
- Supports sorting of events by date (newest/oldest), title (A-Z/Z-A), and organizer (A-Z/Z-A).
- Implements infinite scrolling to load events dynamically as the user scrolls down the page.

![Events Page](./public/2.png)

**Registration page**:

- Provides a user-friendly form for event registration.
- Form validation ensures accurate and complete user input.

![Registration](./public/3.png)

**Participants page**:

- Allows users to view a list of registered participants for each event.
- Enables search by full name or email for easy navigation.
- Presents bar charts showing registrations per last week, offering insights into event popularity trends.

  ![Participants](./public/4.png)

**3. Schedule**

- Private page accessible to authenticated users.
- Displays a schedule of all events the user has registered for.

![Schedule Page](./public/5.png)

## Features

- **User Authentication**: Secure login, registration, and logout functionalities powered by Node.js.
- **Adaptive Design**: Fluid layout for breakpoints at 320px, 375px, 768px, and 1440px. Ensures compatibility and usability across various devices.
- **Modal Dialogs**: Enhanced interaction through modal dialogs for login, registration, and scheduling.
- **Form Validation**: Implemented using React Hook Form and Yup for client-side validation.
- **Dark/Light Mode Toggle**: Switch between light and dark themes for a comfortable viewing experience in different lighting conditions.

<div align="center" style="display: flex; gap: 10px; width: 100%;"> 
<img src="./public/6.png" alt="Feature Registration" width="45%" />
<img src="./public/7.png" alt="Feature Login" width="45%" />
</div>

## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Deployment

- This project is deployed on Vercel. Check it out: [**Event-View**](https://event-view.vercel.app/)
- Here you can see back-end part of website: [**Event-View backend**](https://event-view.vercel.app/)

Experience a seamless way to manage your events with "Event-View," your go-to platform for discovering and registering for exciting events.
