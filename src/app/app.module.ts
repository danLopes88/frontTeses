import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriosService } from 'src/services/repositorios.service';
import { TesesService } from 'src/services/teses.service';
import { RepositoriosComponent } from './repositorios/repositorios.component';
import { TesePerfilComponent } from './tese-perfil/tese-perfil.component';
import { PagerServiceService } from 'src/services/pager-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RepositoriosComponent,
    TesePerfilComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RepositoriosService, TesesService, PagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
