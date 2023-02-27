
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
    resetSize();
})

// Resets grid size on click
function resetSize()
{
    let number = sliderValue.value;
    // console.log(number);

    // Dynamically rescales the 
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createGrid(number); // call the createGrid function here and pass the number they entered as the argument. 
}

// Eraser listener, removes draw active.
eraser.addEventListener('click', event => 
{
    // console.log(event.target);
    eraser = event.target;
    eraser.classList.add('active');
    drawer.classList.remove('active');
});

// Draw listener, removes eraser active.
drawer.addEventListener('click', event => 
{
    // console.log(event.target);
    drawer = event.target;
    drawer.classList.add('active');
    eraser.classList.remove('active');
}); 


// Create the grid size
function createGrid(size){

    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    
    let color = 'black';
    
    console.log(eraser.classList.contains('active'));
    console.log(color);
    
    // Size
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        container.appendChild(square);
        

        //change background color of a square on hover
        square.addEventListener('mouseover', e => {
            // console.log(e.buttons === 1);

            // Don't allow user select
            square.style.userSelect = 'none';

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








