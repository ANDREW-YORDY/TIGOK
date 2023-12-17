import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './features/api/components/form/form/form.component';
import { UserListComponent } from './features/api/components/api-list/api-list.component';
import { DataDisplayComponent } from './features/api/components/api-list-burned/api-list-burned.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'api' , component: UserListComponent },
  { path: 'api-list', component: DataDisplayComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },  // Redirige a /form por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
