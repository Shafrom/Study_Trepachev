// Задача на пересечение массивов

function getInt(arr1, arr2) {
  let result = [];
  for (let elem of arr1) {
    if (arr2.includes(elem)) result.push(elem);
  }
  return result;
}

console.log(getInt([1, 2, 3, 4, 7], [2, 3, 4, 5, 7]));

function getIntDiffer(arr1, arr2) {
  let result = [];
  //for (let elem of arr1) {
    //if (arr2.filter((elem, arr1) => elem !== elem))
    result = arr2.filter(function(elem, arr1) {
      result.push(elem);
    });
  //}
  return result;
}

console.log(getIntDiffer([1, 2, 3, 4, 7], [2, 3, 4, 5, 7]));




