const myLibrary = [
    {
        title: 'Norwegian Wood',
        author: "Haruki Murakami",
    }, 
    {
    title: "The Blade Itself",
    author: "Joe Abercrombie",
    },
    { 
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    }];

const container = document.querySelector('.container');

//Add pre-entered books to display
myLibrary.forEach(item => {
    let card = document.createElement('div');
    card.textContent = item.title + ", by " + item.author;
    card.style.margin = "5px";
    card.style.padding = "5px";
    card.style.backgroundColor = "rgb(253, 217, 170)";
    container.appendChild(card);
})

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector("button");
addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})


function Book(title, author) {
    // the constructor
    this.title = title;
    this.author = author;
}

const titleInput = document.querySelector("#title-input");
const authInput = document.querySelector("#author-input");
// const genreInput = document.querySelector("#genre-input");
// const pagesInput = document.querySelector("#pages-input");
// const readInput = document.querySelector("#read-input");


function addBookToLibrary(title, author) {

    title = titleInput.value;
    author = authInput.value;

    let newBook = new Book(title, author);
    myLibrary.push(newBook);

    const card = document.createElement('div');
    card.textContent = newBook.title + ", " + newBook.author;
    card.style.margin = "5px";
    card.style.padding = "5px";
    card.style.backgroundColor = "rgb(253, 217, 170)";
    container.appendChild(card);

}

const subBtn = document.querySelector(".submit-form");
subBtn.addEventListener('click', event => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
})






