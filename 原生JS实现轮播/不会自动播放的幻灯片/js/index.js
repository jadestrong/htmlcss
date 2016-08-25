(function (_slides) {
    each(_slides,function (_slide,i) {
        var _ctrls = _slide.querySelector('.position').getElementsByTagName('li');
        var _lists = _slide.querySelector('.pictures').getElementsByTagName('li');
        var curIndex = 0;
        each(_ctrls,function (_ctrl,i) {
            /**
             * 这里要做的思路是一致的，首先删除当前显示的元素的指定类，然后为下一个添加样式
             * 区别是这儿首先做的是遍历删除样式，而之前实现是获取当前拥有该样式的元素然后删除
             * 这个元素的样式，再为要显示的元素应用样式。
             * 而且，这里是为每一个按钮都绑定了一个事件，其实可以使用事件代理的。
             * @return {[type]} [description]
             */
            _ctrl.onclick = function () {
                curIndex = i;
                // each(_ctrls,function (_ctrl,i) {
                //     delClass(_ctrl,'current-pos');
                // });
                // each(_lists,function (_list,i) {
                //     delClass(_list,'current-pic');
                // });
                // addClass(_ctrls[i],'current-pos');
                // addClass(_lists[i],'current-pic');
                goTo(i, _ctrls, _lists)
            };
        });
        setInterval(function () {
            var picLen = _lists.length;
            curIndex = curIndex < picLen - 1 ? curIndex + 1 : 0;
            goTo(curIndex, _ctrls, _lists);
        },2000);
    });

    function goTo(index, _ctrls, _lists) {
        each(_ctrls,function (_ctrl,index) {
            delClass(_ctrl,'current-pos');
        });
        each(_lists,function (_list,index) {
            delClass(_list,'current-pic');
        });
        addClass(_ctrls[index],'current-pos');
        addClass(_lists[index],'current-pic');
    }

    /**
     * 检测指定类是否存在，注意两边都加空字符串，方便匹配
     * @param  {[type]}  _object  [description]
     * @param  {[type]}  _clsname [description]
     * @return {Boolean}          [description]
     */
    function hasClass(_object,_clsname) {
        var _clsname = _clsname.replace('.','');
        var _sCls = ' ' + (_object.className) + ' ';
        return (_sCls.indexOf(' ' + _clsname + ' ') != -1) ?
            true : false;
    }
    /**
     * 将传入参数转换成标准的类字符串，去除两端的空格，并
     * 去除内部多余的空格 --- 标准化样式类字符串
     * @param  {[type]} _str [description]
     * @return {[type]}      [description]
     */
    function toClass(_str) {
        var _str = _str.toString();
        _str = _str.replace(/(^\s*)|(\s*$)/g,'');
        _str = _str.replace(/\s{2,}/g,' ');
        return _str;
    }
    /**
     * 为指定元素添加一个class，首先需要判断是否已存在，若不存在，则拼接上去即可
     * @param {[type]} _object  [description]
     * @param {[type]} _clsname [description]
     */
    function addClass(_object,_clsname) {
        var _clsname = _clsname.replace('.','');
        if (!hasClass(_object,_clsname)) {
            _object.className = toClass(_object.className + (" " + _clsname));
        }
    }
    /**
     * 首先要判断指定对象上是否存在该class，若存在则删除它
     * @param  {[type]} _object  [description]
     * @param  {[type]} _clsname [description]
     * @return {[type]}          [description]
     */
    function delClass(_object,_clsname) {
        var _clsname = _clsname.replace('.','');
        if (hasClass(_object,_clsname)) {
            var reg = new RegExp('(?:^|\\s)' + _clsname + '(?=\\s|$)','g');
            _object.className = toClass(_object.className.replace(reg,' '));
        }
    }
    /**
     * 遍历函数，与jquery中的区别是直接操纵元素，而不是在元素上调用
     * @param  {[type]} _objects [description]
     * @param  {[type]} _fn      [description]
     * @return {[type]}          [description]
     */
    function each(_objects,_fn) {
        for (var i = 0,len = _objects.length;i < len;i++) {
            _fn(_objects[i],i);
        }
    }
})(document.querySelectorAll('.slide'));
