//Insertion sort
export default function Sort(Array) {
  //creates individual sub-lists for each item so that they can be checked seperately
  function split(Array) {
    let results = []
    // for every item
    for (let i in Array) {
      // make the item it's own list and add to the main results list
      results.push([Array[i]])
    }
    return results
  }
  // insert an item into the correct place in the sorted list
  function insert(SortedList, ItemToInsert) {
    let results = [];
    // Allows going through the items in the sorted list
    let SLitem = 0, InsertItem = 0;
    // ensures that all items passed to the function have been sorted
    while (SLitem < SortedList.length && InsertItem < ItemToInsert.length) {
      // checks if the title of the item is greater
      if (SortedList[SLitem].Title.toLowerCase() <= ItemToInsert[InsertItem].Title.toLowerCase()) {
        // if so, add the item to the next place
        results.push(SortedList[SLitem]);
        SLitem++;
      }
      else {
        // if not, add the item to the previous place
        results.push(ItemToInsert[InsertItem]);
        InsertItem++;
      }
    }
    // Same goes for these until the right place has been found
    while (SLitem < SortedList.length) {
      results.push(SortedList[SLitem]);
      SLitem++;
    }
    while (InsertItem < ItemToInsert.length) {
      results.push(ItemToInsert[InsertItem]);
      InsertItem++;
    }
    // right place has been found and item inserted correctly
    return results;
  }

  //formats items separately so that they can be inserted one at a time
  let Items = split(Array)

  //initialize sorted list array
  let SortedItems = []

  //counter to be able to go through all items in list
  let count = 0

  while (count != Items.length) {
    // insert each item into the correct place
    SortedItems = insert(SortedItems, Items[count])
    // increment count to move to next item
    count += 1
  }

  // return sorted items
  return SortedItems

}
