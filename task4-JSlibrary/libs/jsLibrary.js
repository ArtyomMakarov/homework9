 function Library(selector) {
    let self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);

    self.html = function () {
        return self.element;
    };
    self.attr = function (name, value) {
        if (!value) {
            return self.element.getAttribute(name);
        } else {
            self.element.setAttribute(name, value);
        }
        return self;
    };

    self.changeBackgroundColor = function () {
       self.element.style.backgroundColor = colors();
       return self;
    };
    self.actions = function (type, callback) {
        self.element['on' + type] = callback;
        return self;
    };
    function colors() {
        let colorArray = [];
        for(let i =0; i < 3 ; i++){
            colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
        }
        let rgb = 'rgb(' + colorArray[0] + ',' + colorArray[1] + ',' + colorArray[2] + ')';
        return rgb;
     }
    return self;
}
let library = new Library('div');