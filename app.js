const container = document.getElementById("container");


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.style.width = `${cell.offsetWidth / cols}`;
        // cell.style.height = `${cell.style.width}`;
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(20, 20);


// Query every square
const grid = document.querySelectorAll('.grid-item');

// Add listener to change color when square is entered.
grid.forEach(square => square.addEventListener('mouseover', (e) => {
    console.log(square);
    // e.target.addEventListener('pointerdown', (x) => {

    // })
    square.classList.add('green');
}));

