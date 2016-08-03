process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

function doSomething(s) {
    var arr = s.split('');
    var result,count = 0;
    var obj = {};
    for (var i = 0,len = arr.length;i < len;i++) {
        for (var j = i+1;j < len;j++) {
            var temp = [];
            i > 0 ? temp.concat(arr.split(0,i)).concat(i+1,j).concat(arr.split(j+1))
                : temp.concat(arr.split(i+1,j)).concat(j+1);
            result = temp.join('');
            if(!obj[result]) {
                count++;
                obj[result] = true;
            }
        }
    }
    console.log(count);
}

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
    	var line = input_array[nLine++].trim();
    	if(line === ''){
    		continue;
    	}
        var input_arrays = line.split(' ');
        var a = input_arrays[0];

       	doSomething(a);
    }
});
