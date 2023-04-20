// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {
  // Add book to List
  UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    // create <tr> element
    const row = document.createElement('tr');
    // Insert columns
    row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href ="#" class="delete">X</td>
`;
    list.appendChild(row);
  };

  // Show Alert

  UI.prototype.showAlert = function (message, className) {
    // create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent element
    const container = document.querySelector('.container');
    // Get form element
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Set timeout
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  };
  // Clear Fields
  UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  };
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();
  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Show alert
    ui.showAlert('Please enter valid credentials', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Show Success
    ui.showAlert('Book added successfully', 'success');
    //   Clear Fields
    ui.clearFields();
  }

  e.preventDefault();
});
