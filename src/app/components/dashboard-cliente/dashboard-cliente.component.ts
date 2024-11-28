import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',  // Asegúrate de que el archivo sea correcto
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {
  // Aquí va tu lógica del componente
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
