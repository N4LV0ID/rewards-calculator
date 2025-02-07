export const fetchTransactions = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, customer: "Alice", amount: 120, date: "2024-01-10" },
                { id: 2, customer: "Bob", amount: 75, date: "2024-01-15" },
                { id: 3, customer: "Alice", amount: 200, date: "2024-02-05" },
                { id: 4, customer: "Bob", amount: 45, date: "2024-02-20" },
                { id: 5, customer: "Charlie", amount: 130, date: "2024-03-10" },
            ]);
        }, 1000);
    });
};
