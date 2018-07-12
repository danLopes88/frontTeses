import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repositorio } from '../data/repositorio';


@Component({
  selector: 'app-repositorio-perfil',
  templateUrl: './repositorio-perfil.component.html',
  styleUrls: ['./repositorio-perfil.component.css']
})
export class RepositorioPerfilComponent implements OnInit {

  @Input('repositorio') repositorio: Repositorio;

  constructor(private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.repositorio.id = params['id']; });
  }

  ngOnInit() {
  }



}
