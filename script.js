let ChangeColorMode = document.querySelector('#ChangeColorMode');

ChangeColorMode.addEventListener('click', TurnDark);

function TurnDark()
{
    document.querySelector('h1').classList.toggle('dark');
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('#Piece1Description').classList.toggle('dark');
    ChangeColorMode.classList.toggle('dark');
}

let ViewerOptions = {
    title: false,

    navbar: false,

    toolbar: {
        prev: {
            show: 1,
            size: 'large',
        },
        play: {
            show: 1,
            size: 'large',
        },
        next: {
            show: 1,
            size: 'large',
        },
    },

    fullscreen: true,

    loading: true,


    movable: false,

    slideOnTouch: true,
};

new Viewer(document.querySelector('#Piece1'), ViewerOptions);