import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { DataDisplayComponent } from './data-display/data-display.component'; // Importar el componente creado, es decir la ruta.
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent, //Se debe agregar el componente creado aquí.
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule     //importar el módulo HttpClientModule.
  ],
  providers: [ApiService, UserService], //aquí se adicionan los servicios creados.
  bootstrap: [AppComponent]
})
export class AppModule { }

