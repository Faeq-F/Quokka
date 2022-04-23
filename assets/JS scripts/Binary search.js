// Iterative Binary Search
export default function Search (JSON, searchTerm) {
  let start = 0,
    end = JSON.length - 1;
  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (JSON[mid] === searchTerm) {
      console.log(JSON[mid])
      return true
    }
    // Else look in left or right - half accordingly
    else if (JSON[mid] < searchTerm){
        start = mid + 1;
    }
    else end = mid - 1;
  }
  //return false if the item is not found
  return false;
};
