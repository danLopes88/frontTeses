import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriosService } from 'src/services/repositorios.service';
import { TesesService } from 'src/services/teses.service';
import { RepositoriosComponent } from './repositorios/repositorios.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RepositoriosComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RepositoriosService, TesesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
