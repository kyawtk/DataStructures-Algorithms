class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
      return -1;
    }
    if (pageIndex == this.pageCount() - 1 || this.pageCount() == 1) {
      return (
        this.itemsPerPage -
        (this.pageCount() * this.itemsPerPage - this.itemCount())
      );
    } else {
      return this.itemsPerPage;
    }
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if(itemIndex < 0 || itemIndex > this.itemCount -1){
        return -1
    }
    return Math.ceil(itemIndex / this.itemsPerPage)
  }
}
