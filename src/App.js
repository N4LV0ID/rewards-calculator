import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api/transactions";
import { calculatePoints } from "./utils";

const customers = ["Alice", "Charlie", "Bob"];
const months = ["January", "February", "March"];

const App = () => {
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedCustomer, setSelectedCustomer] = useState("Alice");
    const [transactions, setTransactions] = useState({});
    const [totals, setTotals] = useState({});

    useEffect(() => {
        fetchTransactions().then((data) => {
            const initialTransactions = {};
            const initialTotals = {};

            data.forEach(({ customer, amount, date }) => {
                const month = new Date(date).toLocaleString("default", { month: "long" });
                const points = calculatePoints(amount);

                // Store Transactions
                if (!initialTransactions[month]) initialTransactions[month] = [];
                initialTransactions[month].push({ customer, amount, points });

                // Store Monthly Totals
                if (!initialTotals[month]) initialTotals[month] = {};
                if (!initialTotals[month][customer]) initialTotals[month][customer] = { totalSpent: 0, totalPoints: 0 };

                initialTotals[month][customer].totalSpent += amount;
                initialTotals[month][customer].totalPoints += points;
            });

            setTransactions(initialTransactions);
            setTotals(initialTotals);
        });
    }, []);

    const handleAddTransaction = () => {
        const amount = parseFloat(prompt("Enter transaction amount:"));
        if (isNaN(amount) || amount < 0) {
            alert("Invalid amount!");
            return;
        }

        const points = calculatePoints(amount);

        // Update Transactions using functional updates to avoid duplicate rendering
        setTransactions((prev) => ({
            ...prev,
            [selectedMonth]: [
                ...(prev[selectedMonth] || []),
                { customer: selectedCustomer, amount, points },
            ],
        }));

        // Update Monthly Totals using functional updates
        setTotals((prev) => ({
            ...prev,
            [selectedMonth]: {
                ...prev[selectedMonth],
                [selectedCustomer]: {
                    totalSpent: (prev[selectedMonth]?.[selectedCustomer]?.totalSpent || 0) + amount,
                    totalPoints: (prev[selectedMonth]?.[selectedCustomer]?.totalPoints || 0) + points,
                },
            },
        }));
    };

    const getOverallTotals = () => {
        const overall = {};
        months.forEach((month) => {
            if (totals[month]) {
                Object.keys(totals[month]).forEach((customer) => {
                    if (!overall[customer]) overall[customer] = { totalSpent: 0, totalPoints: 0 };
                    overall[customer].totalSpent += totals[month][customer].totalSpent;
                    overall[customer].totalPoints += totals[month][customer].totalPoints;
                });
            }
        });
        return overall;
    };

    const overallTotals = getOverallTotals();

    return (
        <div style={{ padding: "20px" }}>
            <h1>Rewards Program</h1>

            {/* User Input */}
            <div style={{ marginBottom: "20px" }}>
                <h2>Add Transaction</h2>
                <label>Customer:</label>
                <select value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)} style={{ marginRight: "10px", padding: "5px" }}>
                    {customers.map((customer) => (
                        <option key={customer} value={customer}>{customer}</option>
                    ))}
                </select>

                <label>Month:</label>
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} style={{ marginRight: "10px", padding: "5px" }}>
                    {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>

                <button onClick={handleAddTransaction} style={{ padding: "5px 10px", cursor: "pointer" }}>Add Transaction</button>
            </div>

            {/* Display Transactions in a Table */}
            <h2>Transaction History</h2>
            {Object.keys(transactions).map((month) => (
                <div key={month} style={{ marginBottom: "20px" }}>
                    <h3>{month}</h3>
                    <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Amount ($)</th>
                                <th>Reward Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions[month].map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.customer}</td>
                                    <td>${transaction.amount}</td>
                                    <td>{transaction.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}

            {/* Display Rewards per Month */}
            <h2>Monthly Reward Points & Expenditure</h2>
            <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Customer</th>
                        <th>Total Spent ($)</th>
                        <th>Reward Points</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(totals).map((month) =>
                        Object.keys(totals[month]).map((customer, index) => (
                            <tr key={`${month}-${customer}-${index}`}>
                                <td>{index === 0 ? month : ""}</td>
                                <td>{customer}</td>
                                <td>${totals[month][customer].totalSpent}</td>
                                <td>{totals[month][customer].totalPoints}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Display Total Aggregates */}
            <h2>Total for Three Months</h2>
            <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Total Expenditure ($)</th>
                        <th>Total Reward Points</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer}>
                            <td>{customer}</td>
                            <td>${overallTotals[customer]?.totalSpent || 0}</td>
                            <td>{overallTotals[customer]?.totalPoints || 0}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
