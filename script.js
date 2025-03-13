const board = document.querySelector(".board")

const submitButton = document.getElementById("size-form")
const gridSize = document.getElementById("grid-size")
const resetButton = document.getElementById("reset-button")


const reset = () => {
    const box = document.querySelectorAll('.box');
    // console.log('clicked')
    gridSize.placeholder = "Enter Size"
    gridSize.value = ""

    box.forEach(box => {
        box.remove()
    });
}
resetButton.addEventListener('click', reset)


submitButton.addEventListener("submit", (e) => {
    e.preventDefault()
    const size = parseInt(gridSize.value, 10);
    if (size >= 1 && size <= 100) {
        reset()
        makeGrid(size);
    }
    else {
        alert('Must be 1 - 100 only')
    }
})


const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const makeGrid = (size) => {
    for (let i = 0; i < size * size; i++) {
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('box');
        boxDiv.style.width = `calc(100% / ${size})`;
        boxDiv.style.height = `calc(100% / ${size})`;

        boxDiv.addEventListener('mouseover', () => {
            boxDiv.style.backgroundColor = randomColor();
        });
        board.appendChild(boxDiv)
    }
}

