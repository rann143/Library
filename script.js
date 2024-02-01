const myLibrary = [
    // {
    //     title: 'Norwegian Wood',
    //     author: "Haruki Murakami",
    // }, 
    // {
    //     title: "The Blade Itself",
    //     author: "Joe Abercrombie",
    // },
    // { 
    //     title: "Kafka on the Shore",
    //     author: "Haruki Murakami",
    // }
];

const container = document.querySelector('.container');

//Add pre-entered books to display
// myLibrary.forEach(item => {
//     let card = document.createElement('div');
//     card.classList.add('card');
//     card.textContent = item.title + " by " + item.author;
//     card.setAttribute('data-bookid', myLibrary.indexOf(item));

//     const removeBtn = document.createElement('button');
//     removeBtn.classList.add('card-button');
//     removeBtn.textContent = "Remove";

//     removeBtn.addEventListener('click', event => {
//         let i = card.dataset.bookid;
 
//         // myLibrary.splice(i, 1); This was causing issue where Array was re-indexing => 
//         //index of cards wouldn't match their data attribute: bookid
//         delete myLibrary[i];
//         card.remove();
//          console.log(myLibrary);
//          console.log(i);
 
//      })
    
//     card.appendChild(removeBtn);
//     container.appendChild(card);
// })

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector("button");
addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})

function Book(title, author, read) {
    // the constructor
    this.title = title;
    this.author = author;
    this.read = false;
}

Book.prototype.toggleReadStatus = function() {
    if (this.read === false) {
        this.read = true;
    } else if (this.read === true) {
        this.read = false;
    }
}

const titleInput = document.querySelector("#title-input");
const authInput = document.querySelector("#author-input");
// const genreInput = document.querySelector("#genre-input");
// const pagesInput = document.querySelector("#pages-input");
// const readInput = document.querySelector("#read-input");


function addBookToLibrary(title, author, read) {

    title = titleInput.value;
    author = authInput.value;
    authInput.value = "";
    titleInput.value = "";
    read = false;

    const newBook = new Book(title, author, read);
    myLibrary.push(newBook);

    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = newBook.title + " " + newBook.author;
    card.setAttribute('data-bookid', myLibrary.indexOf(myLibrary[myLibrary.length - 1]));


    const readBtn = document.createElement('button');
    readBtn.classList.add("card-button");
    readBtn.textContent = "Read?";
    readBtn.addEventListener('click', event => {
        newBook.toggleReadStatus();

        if (newBook.read === false) {
            card.style.backgroundColor = "rgb(253, 217, 170)";
        } else if (newBook.read === true) {
            card.style.backgroundColor = "rgba(129, 192, 117, 0.877)";
        }
        console.log(myLibrary);
        
    })

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('card-button');
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener('click', event => {
       let i = card.dataset.bookid;

        // myLibrary.splice(i, 1); This was causing issue where Array was re-indexing => 
        //index of cards wouldn't match their data attribute: bookid
        delete myLibrary[i];
        card.remove();
        console.log(myLibrary);
        console.log(i);

    })
    
    card.appendChild(readBtn);
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


















