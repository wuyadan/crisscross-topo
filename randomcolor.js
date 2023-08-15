const randomColor = () => {
    //创建一个字符串
    var col = '#';
    //创建 16进制颜色的数组
    var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for (var i = 0; i < 6; i++){
        var color = Math.floor(Math.random()*(arr.length-1));
        col += arr[color];
        // col += arr[getRandom(0, arr.length-1)];
    }
    return col;
}