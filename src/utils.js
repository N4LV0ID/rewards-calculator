export const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
        points += (amount - 100) * 2 + 50; // 2 points per dollar over 100, plus 1 point per dollar between 50-100
    } else if (amount > 50) {
        points += amount - 50; // 1 point per dollar between 50-100
    }
    return points;
};
