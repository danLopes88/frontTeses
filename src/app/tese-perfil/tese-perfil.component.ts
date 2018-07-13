import { Component, OnInit } from '@angular/core';
import { TesesService } from 'src/services/teses.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tese-perfil',
  templateUrl: './tese-perfil.component.html',
  styleUrls: ['./tese-perfil.component.css']
})
export class TesePerfilComponent implements OnInit {

  constructor(public tesesService: TesesService, private route: ActivatedRoute) { }

  nome: string;
  id: any;
  private sub: any;
  data: Array<any> = [];
  getData() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    return this.tesesService.getTese(this.id);
  }

  getTese() {
    this.getData().subscribe(data => {
      this.data = data.json();
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.getTese();
  }

}
