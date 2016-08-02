window.onload = function() {
    var tabs = document.querySelector('.tabs');
    tabs.addEventListener('click', function(event) {
        var target = event.target;
        var current = tabs.querySelector('.current');
        current.className = '';
        target.parentNode.className = 'current';
    }, false);
};
