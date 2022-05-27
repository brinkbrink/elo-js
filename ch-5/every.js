function every(array, pred) {
    for (let element of array) {
      if (!pred(element)) return false;
    }
    return true;
  }
  
  function every2(array, pred) {
    return !array.some(element => !pred(element));
  }

  let stuff = [1, 2, 3, 4, 5];

  console.log(every2(stuff, n => n < 5));