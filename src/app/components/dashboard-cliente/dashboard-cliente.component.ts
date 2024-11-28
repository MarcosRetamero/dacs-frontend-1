import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

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

  ngOnInit() {
    this.crearGraficoEvolucion();

  }
  cambiarObjetivo() {
    console.log('Objetivo cambiado');
  }

crearGraficoEvolucion() {
  const ctx = document.getElementById('graficoEvolucion') as HTMLCanvasElement;

  // obtener el peso mínimo inicial y calcular el inicio de la escala
  const pesoInicial = 80;
  const inicioEscala = pesoInicial - 10;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto  '],
      datasets: [
        {
          label: 'Peso (kg)',
          data: [80, 78, 77, 76, 75, 72, 70],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false, // importante para usar 'min'
          min: inicioEscala, // inicio de la escala
        },
      },
    },
  });
}
}
