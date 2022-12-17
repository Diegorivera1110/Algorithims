// Binary Search Algorithim
// Used to reduce time complexity to O(Log n)

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
    let mid = Math.floor((left + right) / 2);

    if(left > right) {
       return -1;
    }
    else if (num ===arr[mid]) {
        return mid;
    }
    else if (num < arr[mid]) {
        return binarySearch(arr, num, left, mid - 1);
    }
    else {
        return binarySearch(arr, num, mid +1, right)
    }

};

console.log(binarySearch(data, 54, 0, data.length - 1));