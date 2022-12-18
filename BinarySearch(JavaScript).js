// Binary Search Algorithim
// Used to reduce time complexity to O(Log n)


// This first solution is a LINEAR SEARCH Approach with the time complexity being O(n).
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

// ITERATIVE APPROACH 
const iterativeSearch = (arr, x) => {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (right >= 1)  {
        mid = 1 + Math.floor((right - 1) / 2);

        if (arr[mid] == x)
        return mid;

        if (arr[mid] > x)
        right = mid - 1;

        else 
            left = mid + 1;
    }

    return -1;
}

    arr = new Array(12, 23, 38, 40, 54, 62, 71, 87, 99);
    x = 54;
    n = arr.length;
    result = iterativeSearch(arr, x);

console.log(result);