
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
<img src="https://github.com/user-attachments/assets/6a50d3cf-cc26-48ee-a100-8c7d80de2129" alt="Home page" width="500" height="300">
<img src="https://github.com/user-attachments/assets/ad0b6f84-9aad-47ad-8c11-f88a23b39a4d" alt="watchlist list without login" width="500" height="300">
<img src="https://github.com/user-attachments/assets/fbfd282f-8c38-418b-8bd0-e9d07541f30f" alt="Search page" width="500" height="350">
<img src="https://github.com/user-attachments/assets/5e23d1fb-1e1e-455c-8267-ab80f5ba6611" alt="Movie page" width="500" height="300">
<img src="https://github.com/user-attachments/assets/4dea7ce3-f0fa-459f-a017-3add013d928e" alt="Movie page" width="500" height="300">

### Mobile Layouts
<img src="https://github.com/user-attachments/assets/fa5c31d6-5c0c-4496-b40d-75bc7c8d9d5d" alt="Home page" width="250" height="900">
<img src="https://github.com/user-attachments/assets/35808fc5-fbb9-41c7-8ae5-0e863fea7b8a" alt="Watchlist page" width="250" height="900">
<img src="https://github.com/user-attachments/assets/5db340ec-defb-443f-b2e3-2d697aea0a9a" alt="Search page" width="250" height="900">
<img src="https://github.com/user-attachments/assets/4279bb27-d1da-4d6c-8e58-1dec044850b7" alt="Movie details page" width="250" height="750">
<img src="https://github.com/user-attachments/assets/59eff3c9-8d25-407e-8b0f-e4e9b76418d0" alt="sidebar page" width="270" height="500">

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
