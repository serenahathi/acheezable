function cheezeMoulder(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = 'Blue ' + arr[i]
  }
  return arr;
}


module.exports = cheezeMoulder
