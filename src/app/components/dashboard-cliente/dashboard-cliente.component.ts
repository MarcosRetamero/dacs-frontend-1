import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css'],
})
export class DashboardClienteComponent implements OnInit {
  @ViewChild('pesoChart') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  // Datos de usuario
  nombre: string = '';
  edad: number = 0;
  objetivoFisico: string = '';
  pesoInicial: number = 0;
  altura: number = 0;
  pesoActual: number = 0;
  grasaCorporal: number = 0; // Se recalculará en ngOnInit()

  planEntrenamiento = [
    {
      dia: 'Lunes',
      grupoMuscular: 'Pecho y tríceps',
      ejercicios: [
        { nombre: 'Press de banca', series: 4, repeticiones: 10, descanso: 60 },
        {
          nombre: 'Aperturas con mancuernas',
          series: 3,
          repeticiones: 12,
          descanso: 60,
        },
        { nombre: 'Fondos', series: 3, repeticiones: 15, descanso: 60 },
      ],
    },
    {
      dia: 'Martes',
      grupoMuscular: 'Piernas y glúteos',
      ejercicios: [
        { nombre: 'Sentadillas', series: 4, repeticiones: 12, descanso: 90 },
        { nombre: 'Peso muerto', series: 3, repeticiones: 10, descanso: 90 },
        { nombre: 'Zancadas', series: 3, repeticiones: 12, descanso: 90 },
      ],
    },
  ];

  editandoObjetivo: boolean = false;
  objetivoTemporal: string = '';
  editandoPeso: boolean = false;
  pesoTemporal: number = 0;

  // Agregar la propiedad entrenador
  entrenador: string = 'Sin asignar';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('History state completo:', history.state);

    if (history.state?.datosActualizados) {
      console.log('Datos recibidos en dashboard:', history.state.datosActualizados);

      this.nombre = history.state.datosActualizados.nombre || this.nombre;
      this.edad = history.state.datosActualizados.edad || this.edad;
      this.altura = history.state.datosActualizados.altura || this.altura;
      this.pesoInicial = history.state.datosActualizados.pesoActual || this.pesoInicial;
      this.pesoActual = history.state.datosActualizados.pesoActual || this.pesoActual;

      // Recalcular el IMC con los nuevos datos
      if (this.altura > 0) {
        this.grasaCorporal = Math.trunc(this.pesoActual / Math.pow(this.altura / 100, 2));
      }

      console.log('Datos actualizados en el componente:', {
        nombre: this.nombre,
        edad: this.edad,
        altura: this.altura,
        pesoInicial: this.pesoInicial,
        pesoActual: this.pesoActual,
        IMC: this.grasaCorporal,
      });
    } else {
      console.log('No se recibieron datos actualizados');
    }
  }

  ngAfterViewInit() {
    this.createChart();
  }

  private createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.chartCanvas.nativeElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Peso (kg)',
            data: [80, 78, 76, 75, 75],
            backgroundColor: '#710D07',
            borderColor: 'var(--primary-color)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
