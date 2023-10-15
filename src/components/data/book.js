import { toast } from 'react-toastify';

let books = JSON.parse(localStorage.getItem("books")) || [];
let loginUser = JSON.parse(localStorage.getItem("loginUser"));

const addBook = async (book) => {

    let extTitle = books.find((item)=> item.title === book.title)
    if(extTitle){
        toast.success(`Book title ${book.title} already exist.`)
    }else{
        if(loginUser) {
            let data = {
                email: loginUser,
                ...book
            };
        books.push(data);
        save();
        toast.success("New book added succesfully");
        setInterval(()=>{
            window.location.href = "/";
        }, 3000);
    }
   }  
}

const readBook = ()=>{
    let filBooks = books.filter(item => item.email === loginUser)
    if(filBooks) {
        return filBooks;
    } else {
           return [];
    }
}

const readSignal = (id) => {
    let extdata = books.find((item)=> item.id === id);
    if(!extdata){
        toast.warning(`Requested book id ${id} not matched`)
    } else if (extdata.email !== loginUser) {
        toast.warning("UnAuthorised user..") 
    } else {
        return extdata
    }
}

const updateBook = (book,id) => {
    if(book.email !== loginUser) {
        toast.warning("Un-Authorised, Access deniend..");
    } else {
        let extBookIndex = books.findIndex(item => item.id === book.id)
        if(!extBookIndex) {
            toast.warning("Requested book id not found"); 
        } else {
            books.splice(extBookIndex,1,book);
            save();
            toast.success("Book Details updated successfully");
            setInterval(() => {
                window.location.href = "/";
            }, 3000);
        }
    }
}

const deleteBook =  (id) => {
    let extBookIndex = books.findIndex(item => item.id === id) // index position
    let extBook = books.find(item => item.id === id) // book data

    if(extBook.email !== loginUser) {
        toast.warning("Un-Authorised, Access deniend..");
    } else {
        if(!extBookIndex) {
            toast.warning("Requested book id not found"); 
        } else {
            books.splice(extBookIndex,1);
            save();
            toast.success("Book data updated deleted");
            setInterval(() => {
                window.location.href = "/";
            }, 3000);
        }
     }
  }

const save = ()=>{
    localStorage.setItem("books",JSON.stringify(books))
}

export { addBook,readBook,readSignal,updateBook, deleteBook }

    