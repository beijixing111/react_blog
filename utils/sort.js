window.onload = function() {
  var tt = [5, 2, 4, 3, 2, 1];
  // 快速排序
  console.log(quickSort(tt));
  // 产生5位随机码
  console.log(randomString(5));
  console.log(findMaxCountStr('adf'));
}


// 快速排序算法
function quickSort(arr) {
  if (arr.length < 2) return arr;
  var pivotIndex = Math.floor(arr.length / 2); //取基准点
  var pivot = arr.splice(pivotIndex, 1)[0]; //取基准值，splice(index, 1)函数可以返回数组中被删除的那个，会改变原始数组
  var left = []; //存放比基准点小的数组
  var right = []; //存放比基准点大的数组
  for (var i = 0; i < arr.length; i++) { //遍历数组，进行判断
    if (arr[i] < pivot) {
      left.push(arr[i]); //放入比基准值小的元素
    } else {
      right.push(arr[i]); //放入比基准点大元素
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

// 生成指定长度随机字符串
function randomString(n) {
  var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var tmpArr = [];
  for (var i = 0; i < n; i++) {
    // Math.random()含0不含1
    // str.charAt返回指定位置的字符串
    tmpArr[i] = str.charAt(Math.floor(Math.random() * str.length));
  }
  return tmpArr.join('');
}

/**
 * 查找字符串中出现次数最多的字符，返回obj()
 * @param  {[type]} s [原字符串]
 * @return {[type]} obj  [countStr出现次数最多的字符，count出现次数，strObj处理的字符obj]
 */
function findMaxCountStr(s) {
  var o = {};
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    if (o[char]) {
      o[char]++;
    } else {
      o[char] = 1; //若第一次出现，次数记录为1
    }
  }
  console.log(o); //输出完成的对象
  var arrVal = [],
    arrKey = [];
  for (var key in o) {
    arrVal.push(o[key]);
    arrKey.push(key);
  }
  console.log(arrVal, arrKey);
  var count = Math.max.apply(null, arrVal);
  var index = arrVal.indexOf(count);
  var countStr = arrKey[index];
  return { countStr: countStr, count: count, strObj: o };
}