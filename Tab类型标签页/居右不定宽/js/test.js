process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";
var a; //总歌数
var da; //每首歌秒数
var b; //每张CD容量
var db;

process.stdin.on('data', function (data) {
    input += data;
});

function do_something(a, da, b, db){
	//你的代码
    var reg1 = new RegExp('^'+ da + '$','g');
    var arr1 = [];
    a.replace(reg1,function (all) {
        arr1.push(all);
    });
    // var result1 = arr1.join('');
    var reg2 = new RegExp('^'+ db + '$','g');
    var arr2 = [];
    b.replace(reg2,function (all) {
        arr2.push(all);
    });
    // var result2 = arr2.join('');
    var result;
    if (arr1.length > 0 && arr2.length > 0) {
        var res = (+arr1[0]) + (+arr2[0]);
        var minLength = Math.min(arr1.length,arr2.length);
        if (arr1.length >= arr2.length) {
            result = arr1.substr(0,arr1.length - arr2.length);
            for (var i = 0; i < arr2.length; i++) {
                result.push(res);
            }
        } else {
            result = arr2.substr(0,arr2.length - arr1.length);
            for (var i = 0; i < arr1.length; i++) {
                result.push(res);
            }
        }

    }

    // var result = (+result1) + (+result2);
    console.log(result.join(''));
}

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;
    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var input_arrays = line.split(' ');
        a = input_arrays[0];
        da = input_arrays[1];
        b = input_arrays[2];
        db = input_arrays[3];

		do_something(a, da, b, db);

    }
});
