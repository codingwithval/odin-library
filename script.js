let books = []

function Book(title, author, pages){
    this.title = title
    this.author = author;
    this.pages = pages
    this.id = crypto.randomUUID();
    this.read = false;
}

Book.prototype.setRead = function (){

    if (this.read == false){
        this.read = true;
    }
    else 
    {
        this.read = false;
    }

}

function newBook(title, author, pages){
    let new_book = new Book(title, author, pages);
    if (new_book){
        books.push(new_book)
        console.log("book added")
    }
};

function loadPage(){
    const entry = document.querySelector(".cards");
    const note = document.querySelector(".note")
    entry.innerHTML = "";
    note.textContent="";

    if (books.length == 0){
        
        note.textContent = "No books listed currently!";
        return;
    }
    books.forEach((book)=>{

        if (book.read){
            entry.innerHTML += `
            <div class='bookcard'>
                <p class="book-id">${book.id}</p>
                <h3 class="book-title">${book.title}</h3>
                <div class="book-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24"><path fill="#033270" d="M0 16V9l6.49-6.49l7 7L7 16zm14.55-7.55a4.95 4.95 0 1 0-7-7z"/></svg>
                    <p class="book-author">${book.author}</p>
                </div>
                <div class="read-section">
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24"><path fill="#033270" fill-rule="evenodd" d="M17.632 1.25h-5.764c-.743 0-1.346 0-1.835.04c-.505.041-.954.129-1.372.341a3.5 3.5 0 0 0-1.53 1.53c-.212.418-.3.867-.341 1.372c-.04.489-.04 1.092-.04 1.835v.382h-.382c-.743 0-1.346 0-1.835.04c-.505.041-.954.129-1.372.341a3.5 3.5 0 0 0-1.53 1.53c-.212.418-.3.867-.341 1.372c-.04.489-.04 1.092-.04 1.835v5.764c0 .743 0 1.346.04 1.835c.041.505.129.955.341 1.372a3.5 3.5 0 0 0 1.53 1.53c.418.212.867.3 1.372.341c.489.04 1.092.04 1.835.04h5.764c.743 0 1.346 0 1.835-.04c.505-.041.954-.129 1.372-.341a3.5 3.5 0 0 0 1.53-1.53c.212-.417.3-.867.341-1.372c.04-.489.04-1.092.04-1.835v-.382h.382c.743 0 1.346 0 1.835-.04c.505-.041.955-.129 1.372-.341a3.5 3.5 0 0 0 1.53-1.53c.212-.418.3-.867.341-1.372c.04-.489.04-1.092.04-1.835V6.368c0-.743 0-1.346-.04-1.835c-.041-.505-.129-.954-.341-1.372a3.5 3.5 0 0 0-1.53-1.53c-.417-.212-.867-.3-1.372-.341c-.489-.04-1.092-.04-1.835-.04m-1.882 16v.35c0 .782 0 1.324-.035 1.745c-.034.412-.096.642-.183.813a2 2 0 0 1-.874.874c-.17.087-.4.15-.813.183c-.42.034-.963.035-1.745.035H6.4c-.782 0-1.324 0-1.745-.035c-.412-.034-.642-.096-.813-.183a2 2 0 0 1-.874-.874c-.087-.17-.15-.4-.183-.813c-.034-.42-.035-.963-.035-1.745v-5.7c0-.782 0-1.324.035-1.745c.034-.412.096-.642.183-.813a2 2 0 0 1 .874-.874c.17-.087.4-.15.813-.183c.42-.034.963-.035 1.745-.035h.35v3.882c0 .743 0 1.346.04 1.835c.041.505.129.954.341 1.372a3.5 3.5 0 0 0 1.53 1.53c.418.212.867.3 1.372.341c.489.04 1.092.04 1.835.04zm-7.5-5.15c0 .782 0 1.324.035 1.745c.034.412.096.642.183.813a2 2 0 0 0 .874.874c.17.087.4.15.813.183c.42.034.963.035 1.745.035h5.7c.782 0 1.324 0 1.745-.035c.412-.034.642-.096.813-.183a2 2 0 0 0 .874-.874c.087-.17.15-.4.183-.813c.034-.42.035-.963.035-1.745V6.4c0-.782 0-1.324-.035-1.745c-.034-.412-.096-.642-.183-.813a2 2 0 0 0-.874-.874c-.17-.087-.4-.15-.813-.183c-.42-.034-.963-.035-1.745-.035h-5.7c-.782 0-1.324 0-1.745.035c-.412.034-.642.096-.813.183a2 2 0 0 0-.874.874c-.087.17-.15.4-.183.813c-.034.42-.035.963-.035 1.745z" clip-rule="evenodd"/></svg>
                    <p class="book-pages">${book.pages}</p>
                    <p style="font-size: small; color: #033270; font-style:italic;">Read: <span style="color: green; font-style: italic">Yes</span></p>
                </div>
                <div class = "buttons">
                    <button class = "toggle-read" type="button" data-bookid = ${book.id}>Not Read</button>
                    <button type="button" id="remove" data-bookid = ${book.id} >Remove</button>
                </div>
            </div>
            `;                       
        }
        else{
            entry.innerHTML += `
            <div class='bookcard'>
                <p class="book-id">${book.id}</p>
                <h3 class="book-title">${book.title}</h3>
                <div class="book-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24"><path fill="#033270" d="M0 16V9l6.49-6.49l7 7L7 16zm14.55-7.55a4.95 4.95 0 1 0-7-7z"/></svg>
                    <p class="book-author">${book.author}</p>
                </div>
                <div class="read-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24"><path fill="#033270" fill-rule="evenodd" d="M17.632 1.25h-5.764c-.743 0-1.346 0-1.835.04c-.505.041-.954.129-1.372.341a3.5 3.5 0 0 0-1.53 1.53c-.212.418-.3.867-.341 1.372c-.04.489-.04 1.092-.04 1.835v.382h-.382c-.743 0-1.346 0-1.835.04c-.505.041-.954.129-1.372.341a3.5 3.5 0 0 0-1.53 1.53c-.212.418-.3.867-.341 1.372c-.04.489-.04 1.092-.04 1.835v5.764c0 .743 0 1.346.04 1.835c.041.505.129.955.341 1.372a3.5 3.5 0 0 0 1.53 1.53c.418.212.867.3 1.372.341c.489.04 1.092.04 1.835.04h5.764c.743 0 1.346 0 1.835-.04c.505-.041.954-.129 1.372-.341a3.5 3.5 0 0 0 1.53-1.53c.212-.417.3-.867.341-1.372c.04-.489.04-1.092.04-1.835v-.382h.382c.743 0 1.346 0 1.835-.04c.505-.041.955-.129 1.372-.341a3.5 3.5 0 0 0 1.53-1.53c.212-.418.3-.867.341-1.372c.04-.489.04-1.092.04-1.835V6.368c0-.743 0-1.346-.04-1.835c-.041-.505-.129-.954-.341-1.372a3.5 3.5 0 0 0-1.53-1.53c-.417-.212-.867-.3-1.372-.341c-.489-.04-1.092-.04-1.835-.04m-1.882 16v.35c0 .782 0 1.324-.035 1.745c-.034.412-.096.642-.183.813a2 2 0 0 1-.874.874c-.17.087-.4.15-.813.183c-.42.034-.963.035-1.745.035H6.4c-.782 0-1.324 0-1.745-.035c-.412-.034-.642-.096-.813-.183a2 2 0 0 1-.874-.874c-.087-.17-.15-.4-.183-.813c-.034-.42-.035-.963-.035-1.745v-5.7c0-.782 0-1.324.035-1.745c.034-.412.096-.642.183-.813a2 2 0 0 1 .874-.874c.17-.087.4-.15.813-.183c.42-.034.963-.035 1.745-.035h.35v3.882c0 .743 0 1.346.04 1.835c.041.505.129.954.341 1.372a3.5 3.5 0 0 0 1.53 1.53c.418.212.867.3 1.372.341c.489.04 1.092.04 1.835.04zm-7.5-5.15c0 .782 0 1.324.035 1.745c.034.412.096.642.183.813a2 2 0 0 0 .874.874c.17.087.4.15.813.183c.42.034.963.035 1.745.035h5.7c.782 0 1.324 0 1.745-.035c.412-.034.642-.096.813-.183a2 2 0 0 0 .874-.874c.087-.17.15-.4.183-.813c.034-.42.035-.963.035-1.745V6.4c0-.782 0-1.324-.035-1.745c-.034-.412-.096-.642-.183-.813a2 2 0 0 0-.874-.874c-.17-.087-.4-.15-.813-.183c-.42-.034-.963-.035-1.745-.035h-5.7c-.782 0-1.324 0-1.745.035c-.412.034-.642.096-.813.183a2 2 0 0 0-.874.874c-.087.17-.15.4-.183.813c-.034.42-.035.963-.035 1.745z" clip-rule="evenodd"/></svg>
                    <p class="book-pages">${book.pages}</p>
                    <p style="font-size: small; color: #033270; font-style:italic;">Read:<span style="color: #c4c4c4; font-style: italic"> No</p>
                </div>
                <div class = "buttons">
                    <button class = "toggle-read" type="button" data-bookid = ${book.id}>Read</button>
                    <button type="button" id="remove" data-bookid = ${book.id} >Remove</button>
                </div>
            </div>
            `;
        }
    })

}

document.addEventListener("DOMContentLoaded", loadPage);

let bookForm = document.querySelector("#new-book-form")
let formElement = document.querySelector("#book-form")

let addButton = document.querySelector(".add-new")
addButton.addEventListener("click", ()=>{
    bookForm.showModal();
} )

let submit = document.querySelector(".submit")
    submit.addEventListener("click", ()=>{

        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;

        newBook(title, author, pages);
        bookForm.close();
        formElement.reset();
        loadPage();
        alert("Book added!")

    })
let closeForm = document.querySelector(".close")
closeForm.addEventListener("click", ()=>{
    bookForm.close();
    formElement.reset();
})

let cards = document.querySelector(".cards");
cards.addEventListener("click", (event)=>{
    if (event.target.id == "remove"){
        let bookId = event.target.dataset.bookid; 

            books.forEach((book) =>
                {
                    if (book.id == bookId)
                        {
                            const idx = books.indexOf(book);
                            books.splice(idx, 1);
                            loadPage();
                            return;
                        }
                });
    }

    if (event.target.classList.contains("toggle-read")){
        
        books.forEach((book)=>{
            if (book.id == event.target.dataset.bookid){
                book.setRead();
            }
            return;

        })
        loadPage();
    }
})
