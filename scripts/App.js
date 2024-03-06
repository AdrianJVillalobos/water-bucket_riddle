document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('input-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const jugX = parseInt(document.getElementById('jugX').value);
        const jugY = parseInt(document.getElementById('jugY').value);
        const desiredAmount = parseInt(document.getElementById('desiredAmount').value);

        // Call the function and display output
        const result = canMeasureWater(jugX, jugY, desiredAmount);
        document.getElementById('output').innerHTML = `<p>${result}</p>`;
    });
});



// Validations to keep track of the user input 
function canMeasureWater(X, Y, Z) {
    if (Z > X + Y) {
        return "No Solution, Z cannot be greater than X and Y"; // Z is greater than the total capacity of both jugs
    }

    if (typeof X !== 'number' || typeof Y !== 'number' || typeof Z !== 'number' || X <= 0 || Y <= 0 || Z <= 0 || !Number.isInteger(X) || !Number.isInteger(Y) || !Number.isInteger(Z)) {
        return "No solution, current input is not a integer"; // Prompt for invalid input
    }

    if (X <= 0 || Y <= 0 || Z <= 0 || !Number.isInteger(X) || !Number.isInteger(Y) || !Number.isInteger(Z)) {
        return "No Solution, due to negative instead of positive integer"; // If any input is not a positive integer, return false
    }

    // Set to keep track of visited states to avoid infinite loop
    let visited = new Set();

    // Queue to perform BFS
    let queue = [];
    queue.push([0, 0]); // Initial state: both jugs are empty

    while (queue.length > 0) {
        let [x, y] = queue.shift();

        // Check if we've reached the target state
        if (x === Z || y === Z || x + y === Z) {
            return "Solution Found";
        }

        // Transfer water between jugs
        let nextStates = [
            [X, y], // Fill jug X
            [x, Y], // Fill jug Y
            [0, y], // Empty jug X
            [x, 0], // Empty jug Y
            [Math.min(x + y, X), y - (Math.min(x + y, X) - x)], // Pour from Y to X
            [x - (Math.min(x + y, Y) - y), Math.min(x + y, Y)] // Pour from X to Y
        ];

        // Add valid next states to the queue
        for (let nextState of nextStates) {
            let [nextX, nextY] = nextState;
            let state = nextX.toString() + '-' + nextY.toString();
            if (!visited.has(state)) {
                visited.add(state);
                queue.push(nextState);
            }
        }
    }

    return "No Solution"; // If the queue is exhausted without finding the target state
}

// Example usage:
const X = 2; // Capacity of jug X
const Y = 8; // Capacity of jug Y
const Z = 10; // Desired amount of water

// Display input
document.getElementById('input').innerHTML = `<p>Jug X Capacity: ${X}</p><p>Jug Y Capacity: ${Y}</p><p>Desired Amount of Water: ${Z}</p>`;

// Display output
document.getElementById('output').innerHTML = `<p>${canMeasureWater(X, Y, Z)}</p>`;

console.log(canMeasureWater(X, Y, Z));