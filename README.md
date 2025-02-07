# 🏆 Rewards Calculator App

A React.js application that calculates **customer reward points** based on transactions over a **three-month period**. Users can dynamically **add transactions**, **select a customer and month**, and see **real-time updates** on reward points and expenditures.

## 🚀 Features
- 📊 **Dynamic Reward Calculation**: Calculates reward points based on transaction amounts.
- 👥 **Customer Selection**: Users can select from **Alice, Charlie, and Bob**.
- 🗓️ **Monthly Tracking**: Users can **choose a month** and add multiple transactions.
- 🔄 **Real-time Updates**: Updates **transaction history**, **monthly rewards**, and **total rewards for three months** dynamically.
- 📡 **Async API Call**: Fetches initial transactions from an **asynchronous API (`transactions.js`)**.
- 📈 **Summary Tables**: Displays expenses & rewards in a **structured table** format.

---

## 🛠️ Installation & Setup

### ** Clone the Repository**
```sh
git clone https://github.com/yourusername/rewards-calculator.git
cd rewards-calculator
```
# 📂 Project Folder Structure

This project follows a clean and modular folder structure to ensure maintainability and scalability.


## 📜 Folder Descriptions

- **`public/`**: Contains static assets like `index.html` and icons.
- **`src/`**: Main source folder where the app’s logic is built.
  - **`api/`**: Contains `transactions.js`, which simulates fetching transaction data asynchronously.
  - **`components/`**: Will contain reusable UI components if needed.
  - **`utils/`**: Houses utility functions, including `calculatePoints.js` for computing reward points.
  - **`App.js`**: The root React component where the application logic resides.
  - **`index.js`**: The entry point of the React application.
- **`package.json`**: Stores project dependencies and scripts.
- **`README.md`**: Documentation file explaining the project and its setup.

---

## 🚀 Next Steps

1. **Copy & Paste** this into your `README.md`.  
2. **Push to GitHub** using:
   ```sh
   git add .
   git commit -m "Added folder structure to README"
   git push origin main


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
