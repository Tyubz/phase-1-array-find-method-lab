// code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

const record = [
    { year: "2023", result: "L" },
    { year: "2024", result: "W" },
    { year: "2025", result: "L" }
];

console.log(superbowlWin(record));
