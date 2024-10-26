# Travel Trucks - Camper Rental App

Welcome to **Travel Trucks**, a web application that provides users with a comprehensive catalog of campervans available for rent. This project enables users to explore a variety of campers with detailed specifications, filter based on features, save favorites, and make bookings directly through the platform.

## Project Overview

Travel Trucks is designed to offer users a seamless experience in finding and booking campers. The app includes the following core pages:

- **Home Page**: Introduces the service with highlights of available campers.
- **Catalog Page**: Displays all campers with filter options by location, type, and equipment.
- **Camper Details Page**: Provides detailed information on each camper, including customer reviews and a booking form.

## Features

- **Camper Catalog**: Browse available campers and filter by features like location, type, and equipment.
- **Favorites List**: Add and remove campers from a personal favorites list, which is persisted using `localStorage`.
- **Detailed Camper Information**: View specifications and customer reviews.
- **Booking Form**: Book a camper through an integrated form.
- **Date Selection**: Integrated with `ReactDatePicker` for easy booking date selection.
- **Notifications**: Real-time updates using React Toast for user interactions.
- **Responsive Design**: Built for an optimal experience across devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux & Redux Toolkit**: State management for handling the favorites list and other app data.
- **React Router**: Declarative routing for smooth navigation.
- **Formik + Yup**: Form handling and validation for a seamless booking experience.
- **localStorage**: Persists user favorites across sessions.
- **Vite**: Frontend build tool for fast development and optimized builds.
- **SASS/SCSS**: Styling for a cohesive and responsive UI.

## Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js** (version 14 or above)
- **npm**

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/travel_trucks.git

2. **Navigate to the Project Directory

   Change into the project directory:

   ```bash
   cd travel-trucks
   
3. **Install Dependencies

   Install the required dependencies using npm:

   ```bash
   npm install
   
4. **Running the Application

   To start the development server with Vite, run the following command:

   ```bash
   npm run dev

## Live Demo

Check out the live version of the project on Vercel:

[Travel Trucks Live Demo](https://travel-trucks-gamma.vercel.app/)


## API

This project uses a backend API for fetching camper data.

- **API Endpoint:** [https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

## License

This project is licensed under the MIT License.

Enjoy exploring the world with Travel Trucks and find the perfect camper for your next adventure!
