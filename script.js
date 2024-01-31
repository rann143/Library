const myLibrary = ['Norwegian Wood', "The Blade Itself", "Kafka on the Shore"];
const container = document.querySelector('.container');

//Add pre-entered books to display
myLibrary.forEach(item => {
    let card = document.createElement('div');
    card.textContent = item;
    card.style.border = "1px solid";
    card.style.margin = "5px";
    card.style.padding = "5px";
    container.appendChild(card);
})


function Book(title) {
    // the constructor
    this.title = title;
}

function addBookToLibrary(book) {

    let newBook = new Book(book);
    myLibrary.push(book);

    let card = document.createElement('div');
    card.textContent = book;
    card.style.border = "1px solid";
    card.style.margin = "5px";
    card.style.padding = "5px";
    container.appendChild(card);

}