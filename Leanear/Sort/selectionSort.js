

function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        let min = i; // 0
        for (let j = i + 1; j < n; j++) {
            if (array[min] > array[j] ) min = j;
        }
        if (min != i) {
          
            [array[i],array[min]]=[array[min],array[i]]
        }
    }
    return array;
}
console.log(selectionSort([3, 5, 7, 7, 7, -34, -38, -3, 8, 29]))