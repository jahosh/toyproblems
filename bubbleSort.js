const bubbleSort = arr => {

  let sorted = false;

  while (!sorted) {
    sorted = true;
    arr.forEach((element, index, arr) => {
      if (element > array[index+1]) {
        array[index] = array[index+1];
        array[index+1] = element;
        sorted = false;
      }
    });
  }
}
