import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {
  @ViewChild('pesoChart') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

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
  planEntrenamiento = [
    {
      dia: 'Lunes',
      grupoMuscular: 'Pecho y tríceps',
      ejercicios: [
        { nombre: 'Press de banca', series: 4, repeticiones: 10, descanso: 60 },
        { nombre: 'Aperturas con mancuernas', series: 3, repeticiones: 12, descanso: 60 },
        { nombre: 'Fondos', series: 3, repeticiones: 15, descanso: 60 }
      ]
    },
    {
      dia: 'Martes',
      grupoMuscular: 'Piernas y glúteos',
      ejercicios: [
        { nombre: 'Sentadillas', series: 4, repeticiones: 12, descanso: 90 },
        { nombre: 'Peso muerto', series: 3, repeticiones: 10, descanso: 90 },
        { nombre: 'Zancadas', series: 3, repeticiones: 12, descanso: 90 }
      ]
    }
  ];
  
  
  

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.createChart();
  }

  private createChart() {
    const ctx = this.chartCanvas.nativeElement;
    
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Peso (kg)',
          data: [80, 78, 76, 75, 75],
          backgroundColor: '#710D07',
          borderColor: 'var(--primary-color)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  cambiarObjetivo() {
    console.log('Cambiando objetivo físico');
  }

  verProgreso() {
    console.log('Mostrando progreso');
  }

  agregarPeso() {
    console.log('Agregando nuevo peso');
  }
}