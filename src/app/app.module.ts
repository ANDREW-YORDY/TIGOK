import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './core/services/api-burnerd/api.service';
import { DataDisplayComponent } from '../app/features/api/components/api-list-burned/api-list-burned.component'; // Importar el componente creado, es decir la ruta.
import { UserService } from '../app/core/services/api/api.service';
import { UserListComponent } from '../app/features/api/components/api-list/api-list.component';
import { FormComponent } from './features/api/components/form/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent, //Se debe agregar el componente creado aquí.
    UserListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,     //importar el módulo HttpClientModule.
  ],
  providers: [ApiService, UserService], //aquí se adicionan los servicios creados.
  bootstrap: [AppComponent]
})
export class AppModule { }

