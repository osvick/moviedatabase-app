# 🎬 Movie Database Application

A simple and responsive Movie Database Application built with **React (Vite)** and **Tailwind CSS**.  
This app allows users to search for movies by title, view key information such as posters, release dates, and ratings, and explore detailed information about each movie.

## ✨ Features

- 🔍 **Movie Search:** Search movies by title using a public movie API.  
- 🖼️ **Display Results:** Shows movie posters, titles, and release years in a clean grid layout.  
- 📄 **Movie Details Page:** View plot summary, cast, and IMDB ratings when a movie is clicked.  
- 📱 **Responsive Design:** Optimized for both desktop and mobile devices.  
- ⚠️ **Error Handling:** Friendly error messages for empty searches or API failures.  
- ⏳ **Loading Indicators:** Shows a spinner or message while fetching data.

---

## 🧰 Tech Stack

- **React (Vite)** – Frontend framework  
- **Tailwind CSS** – Styling and responsive design  
- **OMDb API** – Data source for movie information  
- **Axios / Fetch API** – For API calls

---

## 🌐 API Used

The app uses the **[OMDb API](https://www.omdbapi.com/)** to fetch movie information.  
You’ll need to sign up for a free API key and store it in a `.env` file.

Example `.env` file:

```env
VITE_MOVIE_API_KEY=your_api_key_here
VITE_MOVIE_API_URL=https://www.omdbapi.com/

🛠️ Getting Started

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/your-username/movie-database-app.git
cd movie-database-app

2️⃣ Install dependencies
npm install

3️⃣ Add environment variables

Create a .env file in the project root and add your OMDb API key as shown above.

4️⃣ Start the development server
npm run dev


Visit http://localhost:5173 in your browser.

🚀 Deployment

The app can be deployed easily on Vercel
 or Netlify
.

For Vercel:

Push your code to GitHub.

Import the repo into Vercel.

Add your .env variables in Vercel’s Environment Settings.

Deploy 🎉

🛠️ Getting Started

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/your-username/movie-database-app.git
cd movie-database-app

2️⃣ Install dependencies
npm install

3️⃣ Add environment variables

Create a .env file in the project root and add your OMDb API key as shown above.

4️⃣ Start the development server
npm run dev


Visit http://localhost:5173 in your browser.

🚀 Deployment

The app can be deployed easily on Vercel
 or Netlify
.

For Vercel:

Push your code to GitHub.

Import the repo into Vercel.

Add your .env variables in Vercel’s Environment Settings.

Deploy 🎉

🧭 Project Structure
movie-database-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieDetails.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Details.jsx
│   ├── services/
│   │   └── movieService.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
└── README.md


🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📝 License

This project is licensed under the MIT License.

👨‍💻 Author

Osinachi Aluche
Frontend Developer | Lifelong Learner