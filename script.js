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

// function Book(title, author, read) {
//     // the constructor
//     this.title = title;
//     this.author = author;
//     this.read = false;
// }

// Book.prototype.toggleReadStatus = function() {
//     if (this.read === false) {
//         this.read = true;
//     } else if (this.read === true) {
//         this.read = false;
//     }
// }

// Use Class instead of Object Literal
class Book {

    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = false;
    }

    toggleReadStatus() {
        if (this.read === false) {
            this.read = true;
        } else if (this.read === true) {
            this.read = false;
        }
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
    readBtn.textContent = "Not Read";
    readBtn.addEventListener('click', event => {
        newBook.toggleReadStatus();

        if (newBook.read === false) {
            card.style.backgroundColor = "rgb(253, 217, 170)";
            readBtn.style.backgroundColor = "rgb(202, 146, 100)";
            readBtn.textContent = "Not Read";
        } else if (newBook.read === true) {
            card.style.backgroundColor = "rgba(129, 192, 117, 0.877)";
            readBtn.style.backgroundColor = "rgb(148, 107, 73)";
            readBtn.textContent = "Read";
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

//FORM VALIDATION CODE
const authError = document.querySelector('#auth-error');
const titleError = document.querySelector('#title-error');

function showAuthError() {
    if (authInput.validity.valueMissing) {
        authError.textContent = "You need to enter the author's name";
    }

    authError.className = "error active";
}
function showTitleError() {
    if (titleInput.validity.valueMissing) {
        titleError.textContent = "You need to enter the title's name";
    }

    titleError.className = "error active";
}

authInput.addEventListener("input", (e) => {
    if (authInput.validity.valid) {
        authError.textContent = "";
        authError.className = 'error';
    } else {
        showAuthError();
    }
})
titleInput.addEventListener("input", (e) => {
    if (titleInput.validity.valid) {
        titleError.textContent = "";
        titleError.className = 'error';
    } else {
        showTitleError();
    }
})

const subBtn = document.querySelector(".form-button");
subBtn.addEventListener('click', event => {
    
    if (!authInput.validity.valid) {
        
        showAuthError();
        event.preventDefault();
    }
    if (!titleInput.validity.valid) {
        
        showTitleError();
        event.preventDefault();
    }
    if (authInput.validity.valid && titleInput.validity.valid) {
        event.preventDefault();
        addBookToLibrary();
        dialog.close();
    }
})


















