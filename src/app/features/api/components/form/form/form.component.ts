import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    firstName: string = '';
    lastName:  string = '';
    idNumber:  string = '';
    email:     string = '';

    onSubmit() {
      // Lógica para procesar el formulario.
      console.log('Usuario registrado: ', this.firstName, this.lastName, this.idNumber, this.email );
    }

}
