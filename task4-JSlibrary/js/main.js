window.onload = function () {
    let library = new Library('div');
    let block = document.getElementById('block');
    console.log(library.attr('type', 'testing value').html());
    block.addEventListener('click', function () {
        return library.changeBackgroundColor();
    });
    block.addEventListener('dblclick', function () {
        return library.hide();
    })
};