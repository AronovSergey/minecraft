const resetButton = document.querySelector('.sidebar__resetButton');
const closeButton = document.querySelector('.closeButton');
const axeButton = document.querySelector('.axe');
const pickaxeButton = document.querySelector('.pickaxe');
const shovelButton = document.querySelector('.shovel');



const elementsArr = document.querySelectorAll('.element');

resetButton.addEventListener('click', () => {
    window.location.reload()
});

closeButton.addEventListener('click', () => {
    window.location.href = '../html/index.html';
});

axeButton.addEventListener('click', () => {
    removeStyleFromAllElements();
    treeGreen.classList.add("removable");
    treeBrown.classList.add("removable");
    toolType = axeButton;
    drawBoard();
});

pickaxeButton.addEventListener('click', () => {
    removeStyleFromAllElements();
    rock.classList.add("removable");
    toolType = pickaxeButton;
    drawBoard();
});

shovelButton.addEventListener('click', () => {
    removeStyleFromAllElements();
    fullLand.classList.add("removable");
    land.classList.add("removable");
    toolType = shovelButton;
    drawBoard();
});

function removeStyleFromAllElements() {
    treeGreen.classList.remove("removable");
    treeBrown.classList.remove("removable");
    rock.classList.remove("removable");
    fullLand.classList.remove("removable");
    land.classList.remove("removable");
};
