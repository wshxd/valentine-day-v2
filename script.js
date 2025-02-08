document.getElementById('noButton').addEventListener('click', function() {
    this.style.display = 'none'; 
    var image = document.getElementById('image');
    image.style.display = 'none'; 
});

document.getElementById('yesButton').addEventListener('click', function() {
    var image = document.getElementById('image');
    image.style.display = 'block'; 
});
