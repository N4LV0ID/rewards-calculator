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

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/rewards-calculator.git
cd rewards-calculator
```
FOLDER STRUCTURE
rewards-calculator/
│── src/
│   ├── api/
│   │   ├── transactions.js   # Simulates an API call to fetch transactions
│   ├── components/           # Reusable React components (if needed)
│   ├── utils/
│   │   ├── calculatePoints.js # Function to calculate reward points
│   ├── App.js                # Main React Component
│   ├── index.js              # Entry Point
│── public/                    # Static Assets
│── package.json               # Dependencies & Scripts
│── README.md                  # Documentation (this file)

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
