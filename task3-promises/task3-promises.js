let urls = [
    'user.json',
    'guest.json'
];
let results = [];
function httpGet(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                reject(Error);
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}

httpGet(urls[0])
    .then(result => {
        results.push(result);
        return httpGet(urls[1])})
    .then(result => {
        results.push(result);
        alert(results)})
    .catch (error => {
        console.log("Rejected" + error.message);
    });

// Promise-это объект с тремя состояниями ( pending, resolved, rejected). Используется для написания асинхронного кода (например для получения данных с сервера). У промиса есть два обработчика событий then, catch. При использовании чейнига результат обработчика переходит от одного обработчика к другому по цепочке. Catch используется для вывода ошибки reject(), но можно выводить и через второй аргумент у then.