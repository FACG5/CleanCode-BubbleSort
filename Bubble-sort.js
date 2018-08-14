

// swap item has index i with item has index j
function swap(array, firstItem, secandItem) {
    // temp to store frstItem temprory  
    var temp = array[firstItem];
    array[firstItem] = array[secandItem];
    array[secandItem] = temp;
}

// takse a  array and sort it ascending
function bubble(arr) {
    //length of array
    var len = arr.length,
        i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}
console.log(bubble([3, 0, 2, 5, -1, 4, 1]));
