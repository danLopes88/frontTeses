import { Component, OnInit } from '@angular/core';
import { TesesService } from 'src/services/teses.service';
import { ActivatedRoute, Router} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { PagerServiceService } from 'src/services/pager-service.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-teses',
  templateUrl: './teses.component.html',
  styleUrls: ['./teses.component.css'],
  providers: [TesesService]
})
export class TesesComponent implements OnInit {

  data: Array<any> = [];
  constructor(public tesesService: TesesService, private pagerService: PagerServiceService) { }
  private allItems: any[];

  searchText: string;
  pager: any = {};
  pagedItems: any[];




  getData(params) {
    return this.tesesService.getDataTeses(params);
  }

  getTeses() {

    const params = new HttpParams().set('repNome', this.searchText);

  	this.getData(params).subscribe(data => {
      this.allItems = data.json();
      this.setPage(1);
      console.log(this.allItems, this.pager);
    });
  }

  ngOnInit() {
    this.getTeses();

  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
