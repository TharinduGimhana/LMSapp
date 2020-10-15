import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Books } from '../model/books';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly rootURL='https://localhost/port/api/';
  formData:Books;
  
  constructor(private http:HttpClient) { }

  insertBooks(){
    return this.http.post(this.rootURL, this.formData);
  }
}
