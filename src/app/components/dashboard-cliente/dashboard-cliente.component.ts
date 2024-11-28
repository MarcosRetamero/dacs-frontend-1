import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent {
  // Datos de usuario
  nombre: string = 'Juan Pérez';
  edad: number = 28;
  objetivoFisico: string = 'Perder peso y ganar masa muscular';
  pesoInicial: number = 80;
  pesoActual: number = 75;
  grasaCorporal: number = 18;
  entrenador: string = 'Carlos López';
  gimnasio: string = 'Gimnasio Elite';

  nombreEntrenador: string = 'Gago';
  especialidad: string = 'Entrenamiento de fuerza';
  experiencia: string = '5 años de experiencia';

  constructor() { }

  ngOnInit(): void { }

  cambiarObjetivo() {
    console.log('Objetivo cambiado');
  }
}
