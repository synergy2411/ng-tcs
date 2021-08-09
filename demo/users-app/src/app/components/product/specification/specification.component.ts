import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  pageNumber : number;
  bookName : string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.pageNumber = +this.route.snapshot.queryParams['page_no']
    this.route.queryParams.subscribe(params => {
      this.bookName = params['book_name']
    })
  }

}
