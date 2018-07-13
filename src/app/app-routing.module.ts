import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriosComponent } from './repositorios/repositorios.component';
import { LoginComponent } from './login/login.component';
import { TesesComponent } from './teses/teses.component';
import { RepositorioPerfilComponent } from './repositorio-perfil/repositorio-perfil.component';
import { TesePerfilComponent } from './tese-perfil/tese-perfil.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'repositorios', component: RepositoriosComponent },
  { path: 'repositorio/:id', component: RepositorioPerfilComponent },
  { path: 'teses', component: TesesComponent },
  { path : 'teses/:id', component: TesePerfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RepositoriosComponent, TesesComponent, LoginComponent, RepositorioPerfilComponent, TesePerfilComponent]
