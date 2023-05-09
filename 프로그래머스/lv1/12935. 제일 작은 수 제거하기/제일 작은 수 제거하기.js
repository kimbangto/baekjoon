function solution(arr) {
    if(arr.length === 1) return [-1];

let min = { index: 0, minValue: arr[0] };

arr.forEach((item, index) => {
  if (min.minValue > item) {
    min = { index: index, minValue: item };
  }
});

arr.splice(min.index, 1);

return arr;
}