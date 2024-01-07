function fetchBooks() {
 // Use the fetch function to make a request to the API
 return fetch('https://anapioficeandfire.com/api/books')
 .then(response => {
   // Check if the response is successful (status code 200)
   if (!response.ok) {
     throw new Error(`Network response was not ok, status code: ${response.status}`);
   }
   // Convert the response to JSON
   return response.json();
 })
 .then(data => {
   // Call renderBooks with the JSON data
   renderBooks(data);
   // Return the fetch for testing purposes
   return data;
 })
 .catch(error => {
   // Handle errors during the fetch
   console.error('Error during fetch:', error);
 });
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
