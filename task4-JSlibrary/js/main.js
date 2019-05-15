window.onload = function () {
    console.log(library.attr('test', 'testing value').html());
    library.actions('click', function () {
        return library.changeBackgroundColor();
    });
};
