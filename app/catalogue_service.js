// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  "Wolf Hall by Hilary Mantel (33)",
  "Bring Up The Bodies by Hilary Mantel (31)",
  "A Place of Greater Safety by Hilary Mantel (11)",
  "Giving Up the Ghost by Hilary Mantel (8)",
  "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
  "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
  "Conversations With Friends by Sally Rooney (1)",
  "Normal People by Sally Rooney (2)",
  "Everything I Never Told You by Celeste Ng (6)",
  "2666 by Robert Bolaño (17)",
  "By Night In Chile by Robert Bolaño (8)",
  "A Tale of Two Cities by Charles Dickens (3)",
  "Oliver Twist by Charles Dickens (7)",
  "Great Expectations by Charles Dickens (1)",
  "The Blind Assassin by Margaret Atwood (8)",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
  "The Origin of Species by Charles Darwin (50)"
];

function checkBook(title) {
  let result = false;
  if (!title) throw new Error("Please provide a title");
  for (let i = 0; i < catalogue.length; i++){
    let books = catalogue[i].title;
      if (books.includes(title)){
      result = true;
    }
  }
 return result;
 }

 function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  let count = 0;
  for (let i = 0; i < catalogue.length; i++){
 let books = catalogue[i].title;
    if (books.includes(keyword)){
      count++;
    }
  }
  return count;
 }
function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  let count = [];
  for (let i = 0; i < catalogue.length; i++){
    let books = catalogue[i].author;
    if (books.includes(author)){
      count.push(catalogue[i].title)
    }
  }
  return count;
}

function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
  let count = 0;
  for (let i = 0; i < catalogue.length; i++){
    let books = catalogue[i].title;
    if(books.includes(!title)){
      count = 0;
    }else if(books.includes(title)){
    count = catalogue[i].quantity
  }
 }
 return count;
}

function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  for (let i = 0; i < catalogue.length; i++){
    if(getStockCount(title) === 0){
      return "Not in Stock";
    }else if (getStockCount(title) > 0 && getStockCount(title) <= 5){
      return "Low Stock";
    }else if (getStockCount(title) >= 5 && getStockCount(title) <= 10){
      return "Medium Stock";
    }else if (getStockCount(title) > 10){
      return "High Stock";
    }
  }
 
}

module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
};
