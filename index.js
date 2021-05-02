function fetchBooks(){
  fetch('https://anapioficeandfire.com/api/books')
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    //console.log(renderBooks);
    return response.json();
  })
  .then(function(json) {
    console.log(renderBooks(json));

  });

  // To pass the tests, don't forget to return your fetch!

}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
