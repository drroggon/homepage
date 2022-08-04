var images = new Array();
function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];
    }

}

preloadImages("images/bandera.JPG", "images/flag.svg.png", "images/group.JPG",
            "images/konovaletz.JPG","images/history.JPG", "images/melnyk.JPG",
            "images/red-black.svg.png", "images/yellow-blue.svg.png");