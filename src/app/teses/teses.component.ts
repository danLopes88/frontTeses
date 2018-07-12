import { Component, OnInit } from '@angular/core';
import { TesesService } from 'src/services/teses.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-teses',
  templateUrl: './teses.component.html',
  styleUrls: ['./teses.component.css'],
  providers: [TesesService]
})
export class TesesComponent implements OnInit {

  data: Array<any>= [];

  constructor(public tesesService: TesesService) { }

  getData(){

    return this.tesesService.getDataTeses();
      //.map((res: Response) => res.json())
    
  }

  getTeses(){
  	this.getData().subscribe(data => {
      /* this.data.slice(0,10); */
      this.data = data.json().docs;
      console.log(this.data);
    })
  }

  

  ngOnInit() {
    this.getTeses();
    
  }

}
