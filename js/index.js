function arr(style) {
    if (style === 'tugma1') {
        document.body.style.backgroundColor = "yellow";
        document.querySelector('.image-block').style.backgroundColor = "green";
        document.querySelector('.text-block').style.backgroundColor = "yellow";
        document.querySelector('.card-block').style.backgroundColor = "white";
    } else if (style === 'tugma2') {
        document.body.style.backgroundColor = "red";
        document.querySelector('.image-block').style.backgroundColor = "#ffe0e0";
        document.querySelector('.text-block').style.backgroundColor = "#ffcccc";
        document.querySelector('.card-block').style.backgroundColor = "#ffb3b3";
    } else if (style === 'tugma3') {
        document.body.style.backgroundColor = "green";
        document.querySelector('.image-block').style.backgroundColor = "#e0ffe0";
        document.querySelector('.text-block').style.backgroundColor = "#ccffcc";
        document.querySelector('.card-block').style.backgroundColor = "#b3ffb3";
    }
}