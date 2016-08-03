// window.onload = function() {
//     var tabs = document.querySelector('.tabs');
//     tabs.addEventListener('click', function(event) {
//         var target = event.target;
//         var current = tabs.querySelector('.current');
//         current.className = '';
//         target.parentNode.className = 'current';
//     }, false);
// };
window.onload = function () {
    var pics = document.querySelector('./pic');
    var picsLen = pics.length;
    var curIndex = 0;
    var autoChange = setInterval(function () {
        curIndex < picsLen ? curIndex++ : curIndex = 0;
        changeTo(curIndex);
    },2500);



    function changeTo(index) {
        goLeft(pics,index * 400);
    }
};
