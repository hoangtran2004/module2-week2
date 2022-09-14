import {BookInfo} from "./modal/bookInfo";
import {Magazine} from "./modal/Magazine";
import {Newspaper} from "./modal/Newspaper";
import {ManageBook} from "./main/ManageBook";
import {Book} from "./modal/Book";
let bookManager = new ManageBook();
let magazine= new Magazine(1,'er',4,1111,6,7);
let magazine2= new Magazine(2,'er',4,1111,6,7);
let book =new Book(3,'df',4,2222,'dgs',7);
let book2 =new Book(4,'df',4,2222,'dgs',7);
let newspaper=new Newspaper(5,'rht',4,3333,4);
bookManager.addBook(book);
bookManager.addBook(book2);
bookManager.addBook(magazine);
bookManager.addBook(magazine2);
bookManager.addBook(newspaper);
console.log(bookManager.typeOfBook(1111));

