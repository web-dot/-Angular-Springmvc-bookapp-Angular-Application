import {HttpClient, HttpResponse, HttpRequest, HttpParams, HttpHeaders} from '@angular/common/http';
import { RequestOptions } from 'https';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Book } from './book';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable()
export class BookService{

    constructor(private _httpService: HttpClient){}

    getAllBooks(): any{
        return this._httpService.get("http://localhost:8080/bookapi/api/book");
    
    }


    private handleError(error: Response){
        return throwError(error);
    }



    addBook(book: Book){

        let options = {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        }

        let body = JSON.stringify(book);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this._httpService.post("http://localhost:8080/bookapi/api/book", body, options);        
    }


}