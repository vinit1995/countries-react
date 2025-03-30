# Country Explorer ⛳

## Overview 🕶
Country Explorer is a React-based web application that displays information about countries worldwide. It utilizes the **REST Countries API** to fetch country data and presents it in a visually appealing and user-friendly manner.

## **Features 🚀**  
- **Dynamic Country Listing**: Fetches and displays country names, regions, and flags.  
- **Load More Functionality**: Initially loads 10 countries and allows users to load more.  
- **Region Filtering**: Filters countries based on selected regions.  
- **Carousel Banner**: Displays **5 randomly shuffled** country names with background images in a slider on each render.  
- **Search Functionality**: Allows users to search for countries.  
- **State Management**: Uses **React Context/Redux** to manage the state.  
- **Authentication**: Supports **user login/logout** with authentication handling.  
- **Lazy Loading**: Implements **lazy loading** for improved performance.  
- **Route Protection**: Prevents **authenticated users** from accessing the login page.  
- **Responsive UI**: Built with **React Bootstrap** for a fully responsive experience.  
- **Error Handling**: Includes a **404 page** for non-existent routes.  

## Technologies Used 👩‍💻
- **React.js** (Vite setup)
- **React Bootstrap** (for UI components)
- **React Router** (for navigation)
- **Redux Toolkit** (for state management)
- **Axios** (for API requests)
- **REST Countries API** (for fetching country data)

## Installation & Setup 🛠
1. Clone the repository:
   ```sh
   git clone https://github.com/vinit1995/countries-react.git
   ```
2. Navigate to the project directory:
   ```sh
   cd countries-react
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add the API URL:
   ```sh
   VITE_API_URL=https://restcountries.com/v2/all?fields=name,region,flag
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

Thank you! 😉😎
