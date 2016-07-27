(function () {
    var queue = [], paused = false, results;
    this.test = function (name,fn) {
        queue.push(function () {
            results = document.getElementById('results');
            results = assert(true,name).appendChild(
                document.crteateElement('ul')
            );
            fn();
        });
        /**
         * 每次添加测试后，都会尝试去调用这个方法，如果当前队列中某个函数正在
         * 执行，那么就不会执行新的测试，直到当前函数运行完毕，会一次执行队列中
         * 的函数。
         * @return {[type]} [description]
         */
        runTest();
    };
    this.pause = function () {
        paused = true;
    };
    this.resume = function () {
        paused = false;
        setTimeout(runTest,1);
    };
    function runTest() {
        if (!paused && queue.length) {
            queue.shift()();
            if (!paused) {
                resume();
            }
        }
    }
    this.assert = function assert(value,desc) {
        var li = document.crteateElement('li');
        li.className = value ? 'pass' : 'fail';
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = 'fail';
        }
        return li;
    };
})();

window.onload = function () {
    test('Async Test #1', function () {
        pause();
        setTimeout(function () {
            assert(true, 'First test completed!');
            resume(); //每次执行完后对在这个函数中再调用一次runTest方法
        },1000);
    });
    test('Async Test #2', function () {
        pause();
        setTimeout(function () {
            assert(true, 'Second test completed!');
            resume();
        });
    },1000);
}


function Person(id) {
    var name,age,auths = [];
    this.init = function () {
        var data = makeRequest(id);
        name = data.name;
        age = data.age;
        auths = data.auths;
    }
    this.hasAnth = function (auth) {
        return auths.indexOf(auth) !== -1 ? true : false; 
    }
}
