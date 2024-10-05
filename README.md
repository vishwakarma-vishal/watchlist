
# Watchlist

Hello Authenticate Team,

Thank you for the opportunity to participate in the Frontend Developer assignment. Below, you will find the documentation for the project, as requested.

**Note:** This repository is private, and only I and the Authenticate team can access it through the invited link.
Access the deployed site with this link 👉 https://watchlist-vishal.netlify.app/

## Project Overview

Watchlist is a React-based web application that allows users to search for movies, view details, and add/remove them from their personalized watchlist. This app integrates with the OMDB API to fetch movie data and includes features like authentication, watchlist management, and responsive design for different devices.

## Features

- **Movie Search:** Search for movies using the OMDB API.
- **Movie Details:** View detailed information about a movie, including its title, director, actors, plot, genre, and IMDb rating.
- **Watchlist Management:** Logged-in users can add and remove movies from their watchlist.
- **Data Storage:** Used local storage to store the data.
- **Responsive Design:** The app is fully responsive, offering an optimized experience across different screen sizes.

## Technologies Used

- **React:** Frontend library for building the user interface.
- **Tailwind CSS:** For styling the application.
- **OMDB API:** For fetching movie data.
- **React Router:** For client-side routing.
- **AuthContext:** For managing user authentication and watchlist.
- **Vite:** Development server and build tool.

## Screenshots

### Desktop Layouts
<img src="https://github.com/user-attachments/assets/db59c6c1-7165-470f-b019-4557dc3d4015" alt="Home page" width="500" height="300">
<img src="https://github.com/user-attachments/assets/55f9a55b-dc8e-489c-bd6d-8004bac50cfb" alt="Home page" width="500" height="300">
<img src="https://github.com/user-attachments/assets/607874ed-4e13-46f9-bd64-09ec5e8d9baf" alt="Home page" width="500" height="300">
<img src="https://github.com/user-attachments/assets/495af05c-af52-4d3f-bccb-dcafe020a976" alt="Home page" width="500" height="300">

### Mobile Layouts
<img src="https://github.com/user-attachments/assets/f0666087-0e11-4dcc-aab6-4fc8afe16d54" alt="Home page" width="250" height="900">
<img src="https://github.com/user-attachments/assets/fe1a1903-f10e-4102-8cc6-f74309ec1aa3" alt="Home page" width="250" height="900">
<img src="https://github.com/user-attachments/assets/907c93b3-d9ed-49de-bc7c-99cf7476c73a" alt="Home page" width="250" height="900">
<img src="https://github.com/user-attachments/assets/8ae87654-6820-448f-bb3c-8a16a901e5a0" alt="Home page" width="250" height="750">
<img src="https://github.com/user-attachments/assets/0ef75aa2-c37e-4470-bf79-1ecfebea6514" alt="Home page" width="270" height="750">

## Installation

Follow the steps below to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vishwakarma-vishal/watchlist.git
   cd watchlist
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your OMDB API key:

   ```bash
   VITE_APP_API_KEY=your_omdb_api_key_here
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Access the app:**

   Open your browser and go to `http://localhost:3000` to see the app.

## Usage

- **Search for Movies:** Use the search bar to find movies by title.
- **View Movie Details:** Click on a movie card to view details such as plot, actors, genre, etc.
- **Add to Watchlist:** Click the "Add to Watchlist" button to save the movie to your personal watchlist.
- **Remove from Watchlist:** Click "Remove from Watchlist" to remove the movie from your list.

## Deployment

You can deploy the Watchlist app using hosting services like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

1. **Build the app:**

   ```bash
   npm run build
   ```

2. **Deploy:** 

   Upload the generated `dist` folder to your hosting platform or link your GitHub repository for automatic deployment.

## Contact

For any questions or suggestions, feel free to reach out:

- **Name:** Vishal Vishwakarma
- **Email:** [Email](mailto:vishal.vishwakarma.dev@gmail.com)
- **Portfolio:** [Portfolio](https://vishal-portfolio-project-react.netlify.app/)
- **LinkedIn:** [Linkedin](https://www.linkedin.com/in/vishwakarma-vishal2001/)

## Acknowledgements

- Special thanks to the [OMDB API](http://www.omdbapi.com/) for providing movie data.
- Thanks to the open-source community for creating useful libraries like React and Tailwind CSS.
