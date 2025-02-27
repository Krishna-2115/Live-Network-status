Live Network Status 🛜

🚀 Overview

This project provides a real-time network status indicator using React's useSyncExternalStore, Redux Store for global state management, and Tailwind CSS for styling. The application dynamically updates network status changes and displays whether the user is online or offline.

🛠️ Tech Stack

React – Frontend UI development

useSyncExternalStore – Subscribes to network status changes

Redux Store – Manages global network state

Tailwind CSS – For responsive and modern UI styling

📌 Features

✅ Real-time Network Status Detection

✅ Redux Integration for centralized state management

✅ Optimized React Hook (useSyncExternalStore) for efficient subscription

✅ Tailwind CSS for a clean and responsive UI

✅ Minimal and lightweight implementation

📂 Project Structure

📦 live-network-status
├── 📁 src
│   ├── 📁 store
│   │   ├── networkSlice.js  # Redux slice for network state
|   |   ├── store.js #store the status
│   ├── App.jsx  # Main application file , # Network status display component
│   ├── index.js  # Entry point
├── 📄 package.json  # Dependencies and scripts
├── 📄 vite.config.js  # Tailwind configuration
├── 📄 README.md  # Project documentation

🏗️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/live-network-status.git
cd live-network-status

2️⃣ Install Dependencies

npm install

3️⃣ Run the Application

npm start

The app will be available at http://localhost:3000/.

📝 Usage

The app listens for network status changes in real-time.

If the internet connection is lost, the UI updates to display an offline message.

Once reconnected, it dynamically switches back to online status.

📜 License

This project is open-source and available under the MIT License.

⭐ Follow for More

If you found this helpful, give a ⭐ on GitHub and follow for more updates!

Happy coding! 🚀