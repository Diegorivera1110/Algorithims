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

// console.log(result);



function binarySearch(v,To_Find)
{
	let lo = 0;
	let hi = v.length - 1;
	let mid;
	
	// This below check covers all cases , so need to check
	// for mid=lo-(hi-lo)/2
	while (hi - lo > 1) {
		let mid = (hi + lo) / 2;
		if (v[mid] < To_Find) {
			lo = mid + 1;
		}
		else {
			hi = mid;
		}
	}
	if (v[lo] == To_Find) {
		console.log( "Found At Index " + lo);
	}
	else if (v[hi] == To_Find) {
		console.log("Found At Index " + hi);
	}
	else {
		console.log("Not Found");
	}
}
v = [ 1, 3, 4, 5, 6 ];
let To_Find = 1;
binarySearch(v, To_Find);
To_Find = 6;
binarySearch(v, To_Find);
To_Find = 10;
binarySearch(v, To_Find);

// This code is contributed by akashish__



// RECURSIVE APPROACH
function recursiveSearch(arr, 1, r, x)  {
    if (r >= 1) {
        let mid = 1 + Math.floor((r - 1) / 2);

        if (arr[mid] == x)
        return mid;

        if (arr[mid] > x)
        return recursiveSearch(arr, 1, mid - 1, x);

        return recursiveSearch(arr, mid + 1, r, x);
    }

    return -1;
}

let arr = [12, 23, 38, 40, 54, 62, 71, 87, 99];
let x = 40;
let n = arr.length;
let result = recursiveSearch(arr, 0, n - 1, x);