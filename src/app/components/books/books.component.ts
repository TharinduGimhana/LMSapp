import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(public books_service: BooksService) { }

  ngOnInit(): void {
    this.resetForm();
  }


  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.books_service.formData ={
      Id:0,
      BookCode:'',
      BookCount:0,
      BookName:''
    }

  }

  OnSubmit(form:NgForm){
    console.log("Clicked");
    this.InsertBooks();
  }

  InsertBooks(){
    this.books_service.insertBooks().subscribe(
      (res:any)=>{
        console.log("success");
      },
      err=>{
        console.log("Failed");
        console.log(err);
      }
      
      
    )
  }

}
