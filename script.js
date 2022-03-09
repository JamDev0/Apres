function TurnDark()
{
    document.querySelector('h1').classList.toggle('dark');
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('#Piece1Description').classList.toggle('dark');
}

let ViewerOptions = {

};

new Viewer(document.querySelector('#Piece1'), ViewerOptions);