
// Query the mian components
let clear = document.querySelector(".clear");
let eraser = document.querySelector('.eraser');
let drawer = document.querySelector('.draw');
drawer.classList.add('active');
let container = document.querySelector('#grid-container');

let sliderText = document.querySelector('.size');
let sliderValue = document.querySelector('.slider');


// Button Listener
clear.addEventListener('click', () => {
    drawer.style.backgroundColor = 'rgb(' + [255,107,53].join(',') + ')';
    eraser.style.backgroundColor = 'white';
    resetSize();
})

// Resets grid size on click
function resetSize()
{
    let number = sliderValue.value;
   

    // Dynamically rescales the 
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createGrid(number); // call the createGrid function here and pass the number they entered as the argument. 
}

// Eraser listener, removes draw active.
eraser.addEventListener('click', event => 
{
    
    eraser = event.target;
    eraser.classList.add('active');
    drawer.classList.remove('active');
    eraser.style.backgroundColor = 'rgb(' + [255,107,53].join(',') + ')';
    drawer.style.backgroundColor = 'white';
});

// Draw listener, removes eraser active.
drawer.addEventListener('click', event => 
{
    
    drawer = event.target;
    drawer.classList.add('active');
    eraser.classList.remove('active');
    drawer.style.backgroundColor = 'rgb(' + [255,107,53].join(',') + ')';
    eraser.style.backgroundColor = 'white';
}); 


// Create the grid size


function eraseSquare(square)
{
    square.backgroundColor = 'white';
}


sliderValue.addEventListener('input', slider => {
    // console.log(slider.target.value);
    updateSliderText(slider.target.value);
    updateSliderValue(slider.target.value);
})


function updateSliderText(val)
{
    sliderText.innerHTML = `${val}x${val}`;
    
}

function updateSliderValue(val)

{
    sliderValue.value = val;
    
    
}

function createGrid(size){

    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    drawer.classList.add('active');
    drawer.style.backgroundColor = 'rgb(' + [255,107,53].join(',') + ')';
    
    
    let color = 'black';
    
    // Set squares
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        container.appendChild(square);
        

        //change background color of a square on hover
        square.addEventListener('mouseover', e => {
            // console.log(e.buttons === 1);

            // Don't allow user select
            square.style.userSelect = 'none';
            square.addEventListener('mousedown', j => {

                if (eraser.classList.contains('active'))
                    square.style.backgroundColor = 'white'

                if (drawer.classList.contains('active'))
                    square.style.backgroundColor = 'black';
                

                // square.style.backgroundColor = 'black';
            })
            // If mouse click is down, color the square
            if (e.buttons === 1)
            {

                if (eraser.classList.contains('active'))
                    color = 'white';
                
                if (drawer.classList.contains('active'))
                    color = 'black';

                square.style.backgroundColor = color;
                
            }
        })

        
        //function to reset the grid
        function clearGrid()
        {
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "white"
            })
        }

        clearGrid();    
    }
}

createGrid(16);









