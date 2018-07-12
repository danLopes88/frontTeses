import { Component, OnInit, Input } from '@angular/core';
import { RepositoriosService } from '../../services/repositorios.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Repositorio } from '../data/repositorio';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.css'],
  providers: [RepositoriosService]
})
export class RepositoriosComponent implements OnInit {

  data: Array<any> = [];

  @Input('repositorio') repositorio: Repositorio;
  id: Number;

  constructor(public repositorioService: RepositoriosService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  getData() {

    return this.repositorioService.getDataRepositorios();
      //.map((res: Response) => res.json())
  }

  getRepositorios() {
  	this.getData().subscribe(data => {
      this.data = data.json();
	});
  }

  ngOnInit() {
    this.getRepositorios();

  }

  navigatetoRepositorio(repositorio: Repositorio) {
    this.router.navigate(['repositorio', repositorio.id], { queryParams : { repositorio} });

  }
}
