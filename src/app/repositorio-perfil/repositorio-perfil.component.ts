import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repositorio } from '../data/repositorio';
import { RepositoriosService } from '../../services/repositorios.service';


@Component({
  selector: 'app-repositorio-perfil',
  templateUrl: './repositorio-perfil.component.html',
  styleUrls: ['./repositorio-perfil.component.css']
})
export class RepositorioPerfilComponent implements OnInit {

  @Input('repositorio') repositorio: Repositorio;
  nome: string;
  id: any;
  private sub: any;
  data: Array<any> = [];
  constructor(public repositorioService: RepositoriosService, private route: ActivatedRoute) { }

  getData() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    return this.repositorioService.getRepositorio(this.id);
  }

  getRepositorio() {
    this.getData().subscribe(data => {
      this.data = data.json();
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.getRepositorio();
  }

}
