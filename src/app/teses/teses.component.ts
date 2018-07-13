import { Component, OnInit, Input } from '@angular/core';
import { TesesService } from 'src/services/teses.service';
import { ActivatedRoute, Router} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { PagerServiceService } from 'src/services/pager-service.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {HttpParams} from '@angular/common/http';
import { Tese } from '../data/tese';
@Component({
  selector: 'app-teses',
  templateUrl: './teses.component.html',
  styleUrls: ['./teses.component.css'],
  providers: [TesesService]
})
export class TesesComponent implements OnInit {

  data: Array<any> = [];
  constructor(public tesesService: TesesService, private pagerService: PagerServiceService, private router: Router, private route: ActivatedRoute) {
    this.getTeses();
   }

  @Input('tese') tese: Tese;

  private allItems: any[];
  pager: any = {};
  pagedItems: any[];
  title: string = "";
  creator: string = "";
  repNome: string = "";

  searchText: string;


  getData(params) {
    return this.tesesService.getDataTeses(params);
  }

  getTeses() {

    const params = new HttpParams().set('title', this.title);

  	this.getData(params).subscribe(data => {
      this.allItems = data.json();
      this.setPage(1);
      console.log(this.allItems, this.pager);
    });
  }

  ngOnInit() {
    //this.getTeses();
  }
  // pesquisaTese() {
  //   console.dir(this.title);
  //   this.tesesService.getTeseNome(this.title).subscribe(res:Response)=>{

  //   }
  // }

  navigateToTese(tese: Tese) {
    this.router.navigate(['repositorio', tese]);

  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
