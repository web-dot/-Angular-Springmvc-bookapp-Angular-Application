import {Component, OnInit} from '@angular/core';
import {Book} from './book';
import { BookService } from './book.service';



@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

    books: Book[];
    book = new Book();
    constructor(private _bookService: BookService){}

    ngOnInit(): void {
        this.getBooks();
    }



    getBooks(): void{
        this._bookService.getAllBooks()
            .subscribe((bookData) => {this.books = bookData, console.log(bookData)}, (error) => {
                console.log(error);
            })
    }

    addBook(): void{
        this._bookService.addBook(this.book)
        .subscribe((response) => {console.log(response)}, (error) => {
            console.log(error);
            this.reset();
            this.getBooks();
        });        
    }

    private reset(){
        this.book.id=null;
        this.book.author=null;
        this.book.title=null;
    }

    deleteBook(bookId: string){
        this._bookService.deleteBook(bookId).subscribe((response) => {console.log(response); this.getBooks()});
    }

}
