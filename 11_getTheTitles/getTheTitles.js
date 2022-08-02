const getTheTitles = function(books) {
    titles = books.map(books => books.title);
    return titles;
};

// Sample Array
// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]



// Do not edit below this line
module.exports = getTheTitles;
