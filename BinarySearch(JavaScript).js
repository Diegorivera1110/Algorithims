// Binary Search Algorithim
// Used to reduce time complexity to O(Log n)


// This first solution is a Linear Search Approach with the time complexity being O(n).
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
    let mid = Math.floor((left + right) / 2);

    // range overalapped, so number doesn't exist in data array
    if(left > right) {
       return -1;
    }
    else if (num ===arr[mid]) {
        return mid;
    }
    else if (num < arr[mid]) {
        // call again with a new right value
        return binarySearch(arr, num, left, mid - 1);
    }
    else {
        // call again with a new left value
        return binarySearch(arr, num, mid +1, right)
    }
};

// set initial left and right values on first call 
// console.log(binarySearch(data, 87, 0, data.length - 1));