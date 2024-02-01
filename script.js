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
    card.classList.add('card');
    card.textContent = item.title + " by " + item.author;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    removeBtn.textContent = "Remove";
    
    card.appendChild(removeBtn);
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
    authInput.value = "";
    titleInput.value = "";

    let newBook = new Book(title, author);
    myLibrary.push(newBook);

    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = newBook.title + " " + newBook.author;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    card.setAttribute('data-bookid', myLibrary.indexOf(myLibrary[myLibrary.length - 1]));
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener('click', event => {
       let i = card.dataset.bookid;

        myLibrary.splice(i, 1);
        console.log(myLibrary);
        console.log(i);

    })
    
    card.appendChild(removeBtn);
    container.appendChild(card);

    console.log(myLibrary);

}


const subBtn = document.querySelector(".form-button");
subBtn.addEventListener('click', event => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
})


















