const openDialogButton = document.getElementById('openDialog');
const dialogContainer = document.querySelector('.share-container');
const path = document.querySelector('path');
const authorImg = document.querySelector('.author-img');
const authorName = document.querySelector('.author-name');
const date = document.querySelector('.date');
const authorContainer = document.querySelector('.author');
const main = document.querySelector('main');
let isModalShowing = false;
openDialogButton.addEventListener('click', (event) => {
    event.preventDefault();
    isModalShowing = !isModalShowing;
    if (isModalShowing) {
        dialogContainer.classList.remove('hide');
        openDialogButton.style.background = "hsl(214, 17%, 51%)";
        path.style.fill = "white";
        if (window.innerWidth <= 500) {
            authorImg.classList.add('hide');
            authorName.classList.add('hide');
            date.classList.add('hide');
            main.style.background = "linear-gradient(white 90%,hsl(217, 19%, 35%) 90%)"
        }
    }
    else {
        dialogContainer.classList.add('hide');
        openDialogButton.style.background = 'hsl(210, 46%, 95%)';
        path.style.fill = "hsl(214, 17%, 51%)";
        authorImg.classList.remove('hide');
        authorName.classList.remove('hide');
        date.classList.remove('hide');
        main.style.background = "white";
    }
});

window.addEventListener('resize', () => {
    positionDialog();
});

const positionDialog = () => {
    const { top, left } = openDialogButton.getBoundingClientRect();
    const dialogWidth = dialogContainer.offsetWidth;
    const width = window.innerWidth;
    if (width >= 500) {
        dialogContainer.style.top = `${top - 80}px`;
        dialogContainer.style.left = `${left - 102}px`;
        main.style.background = "white";
        authorName.classList.remove('hide');
        date.classList.remove('hide');
        authorImg.classList.remove('hide');
    }
    else {
        dialogContainer.style.top = `${top}px`;
        dialogContainer.style.left = width >= 300 ? "1rem" : "-1rem";
        main.style.background = isModalShowing ? "linear-gradient(white 88%,hsl(217, 19%, 35%) 88%)" : "white";
        (isModalShowing ? (authorImg.classList.add('hide') && authorName.classList.add('hide') && date.classList.add('hide')) : (authorImg.classList.remove('hide')));
    }
}
positionDialog();