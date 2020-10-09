import { Injectable } from '@angular/core';
import { Books } from '../model/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  formData:Books;
  constructor() { }
}
