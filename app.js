
// Query the mian components
let clear = document.querySelector("button");
let container = document.querySelector('#grid-container');

// Button Listener
clear.addEventListener('click', () => {
    resetSize();
})

// Resets grid size on click
function resetSize()
{
    let number = prompt("What size would you like the grid to be? (1-100)");

    // Dynamically rescales the 
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createGrid(number); // call the createGrid function here and pass the number they entered as the argument. 
}

// Create the grid size
function createGrid(size){

    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    // Size
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', e=>{
            square.style.backgroundColor = "black";
        })


        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "black"
            })
        }

        clearGrid();    
    }
}

createGrid(16);


