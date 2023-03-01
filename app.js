
// Query the mian components
let clear = document.querySelector(".clear");
let eraser = document.querySelector('.eraser');
let drawer = document.querySelector('.draw');
drawer.classList.add('active');
let container = document.querySelector('#grid-container');

let sliderText = document.querySelector('.size');
let sliderValue = document.querySelector('.slider');
let inkBlack = 'rgb(' + [31, 31, 31].join(',') + ')';
let inkWhite = 'rgb(' + [255, 252, 249].join(',') + ')';
let buttonColor = 'rgb(' + [194, 140, 174].join(',') + ')';
let hoverColor = 'rgb(' + [7, 160, 195].join(',') + ')';






// Button Listener
clear.addEventListener('click', () => {
    drawer.style.backgroundColor = buttonColor;
    eraser.style.backgroundColor = inkWhite;
    drawer.style.boxShadow = 'inset 2px 2px 2px';
    eraser.style.boxShadow = '2px 2px 20px';
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
    console.log(drawer.attributes);
    eraser.style.boxShadow = 'inset 0 0 4px';
    drawer.style.boxShadow = '2px 2px 20px';
    eraser.style.backgroundColor = buttonColor
    drawer.style.backgroundColor = inkWhite;
    drawer.style.transform = 'scale(1.0)';
});

// Draw listener, removes eraser active.
drawer.addEventListener('click', event => 
{
    drawer = event.target;
    drawer.classList.add('active');
    eraser.classList.remove('active');
    drawer.style.boxShadow = 'inset 0 0 4px';
    eraser.style.boxShadow = '2px 2px 20px';
    drawer.style.backgroundColor = buttonColor;
    eraser.style.backgroundColor = inkWhite;
    eraser.style.transform = 'scale(1.0)';
});


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        if (!button.classList.contains('active'))
            button.style.backgroundColor = hoverColor;
            
    })

    button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('active'))
            button.style.backgroundColor = inkWhite;
    })


    button.addEventListener('click', () => {
        if (button.classList.contains('active'))
            button.style.transform = 'scale(0.9)';
    })

    

    
    
})

buttons[0].addEventListener('click', (e) => {
    e.target.style.boxShadow = 'inset 0 0 4px';
    e.target.style.transform = 'scale(0.9)';
    

});

buttons[0].addEventListener('mouseleave', (e) => {
    e.target.style.boxShadow = '2px 2px 20px'
    e.target.style.transform = 'scale(1.0)';
});











// Create the grid size


function eraseSquare(square)
{
    square.backgroundColor = inkWhite;
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
    drawer.style.boxShadow = 'inset 0 0 4px';
    drawer.style.backgroundColor = buttonColor;
    
    
    let color = 'black';
    
    // Set squares
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        container.appendChild(square);

        
        

        //change background color of a square on hover
        square.addEventListener('mouseover', e => {
           

            // Don't allow user select
            square.style.userSelect = 'none';
            square.addEventListener('mousedown', j => {

                if (eraser.classList.contains('active'))
                {
                    
                    square.style.backgroundColor = inkWhite;
                }

                if (drawer.classList.contains('active'))
                    square.style.backgroundColor = inkBlack;
                

                // square.style.backgroundColor = 'black';
            })
            // If mouse click is down, color the square
            if (e.buttons === 1)
            {

                if (eraser.classList.contains('active'))
                    color = inkWhite;
                
                if (drawer.classList.contains('active'))
                    color = inkBlack;

                square.style.backgroundColor = color;
                
            }
        })

        
        //function to reset the grid
        function clearGrid()
        {
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "white"
            })
            buttons[1].style.transform = 'scale(0.9)';
            
        }

        clearGrid();    
    }
}

createGrid(16);








