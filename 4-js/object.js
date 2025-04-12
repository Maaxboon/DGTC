const book = {
  title: "Javascript - The Comprehensive Guide",
  price: "54.99",
  author: "Philip Ackerman",
  isbn: "978-1-4932-2287-2",
  printDescription() {
    console.log(`${this.author} : ${this.title}`);
  },
};
console.log("Ttle:", book.title);
console.log("Price: ", book.price);
console.log("Author: ", book.author);
console.log("ISBN: ", book.isbn);
book.printDescription();
