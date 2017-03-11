var screenSize = 500;

$(document).ready(function(){
   makeGrid(30);
});

function clearAll() {
   $('.block').removeClass("highlighted");
    var newGridSize = prompt("what is the size of your new grid?");
    $('.wrapper').empty();
    makeGrid(newGridSize);
};

function makeGrid(gridSize) {
        for(var x = 0; x < gridSize; x++) {
            for(var y = 0; y < gridSize; y++) {
                var block = $("<div class='block'></div>");
                block.appendTo('.wrapper');
            }
        }
    
    var blockSize = (screenSize/gridSize).toString();

    $('.block').css({
        'width': blockSize + 'px',
        'height': blockSize + 'px'
    });
    
    hoverHighlight();
};

function hoverHighlight() {
    $('.block').hover(function(){
    $(this).addClass('highlighted');
    });
};



