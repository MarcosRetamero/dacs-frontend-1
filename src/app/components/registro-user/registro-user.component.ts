import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css'],
})
export class RegistroUserComponent {
  formulario: FormGroup;
  vieneDeDashboard: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    // Obtener los datos del estado de navegación
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { datos: any };

    // Si hay datos en el state, significa que viene del dashboard
    this.vieneDeDashboard = !!state?.datos;

    this.formulario = this.fb.group({
      nombre: [
        {
          value: state?.datos?.nombre || '',
          disabled: this.vieneDeDashboard,
        },
        [Validators.required, Validators.minLength(2)],
      ],
      edad: [
        state?.datos?.edad || null,
        [Validators.required, Validators.min(1), Validators.max(120)],
      ],
      estatura: [
        state?.datos?.altura || null,
        [Validators.required, Validators.min(1), Validators.max(300)],
      ],
      peso: [
        state?.datos?.pesoActual || null,
        [Validators.required, Validators.min(1), Validators.max(500)],
      ],
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const datosActualizados = {
        nombre:
          this.formulario.get('nombre')?.value ||
          this.formulario.get('nombre')?.disabled
            ? this.formulario.get('nombre')?.value
            : '',
        edad: this.formulario.get('edad')?.value,
        altura: this.formulario.get('estatura')?.value,
        pesoActual: this.formulario.get('peso')?.value,
      };

      // Log detallado de los datos
      console.log('Formulario válido:', this.formulario.valid);
      console.log('Valores del formulario:', this.formulario.value);
      console.log('Datos que se envían al dashboard:', datosActualizados);

      this.router.navigate(['/dashboard-cliente'], {
        state: { datosActualizados },
      });
    } else {
      console.log('Formulario inválido:', this.formulario.errors);
    }
  }
}
