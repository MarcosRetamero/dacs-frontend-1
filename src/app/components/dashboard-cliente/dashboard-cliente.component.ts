import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CustomerService } from '../../core/services/costumerService';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {
  @ViewChild('pesoChart') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  // Datos de usuario
  nombre: string = '';
  edad: number = 0;
  objetivoFisico: string = '';
  pesoInicial: number = 0;
  pesoActual: number = 0;
  grasaCorporal: number = 0;
  entrenador: string = '';
  gimnasio: string = '';

  nombreEntrenador: string = '';
  especialidad: string = '';
  experiencia: string = '';
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

  constructor(private customerService: CustomerService) {} // inyecta el servicio

  ngOnInit(): void {
    // Llama al servicio para obtener los datos del JSON
    this.customerService.getCustomers().subscribe((data: any) => {
      const usuario = data.usuario;
      const entrenador = data.entrenador;

      // Asigna los valores obtenidos del JSON
      this.nombre = usuario.nombre;
      this.edad = usuario.edad;
      this.objetivoFisico = usuario.objetivoFisico;
      this.pesoInicial = usuario.pesoInicial;
      this.pesoActual = usuario.pesoActual;
      this.grasaCorporal = usuario.grasaCorporal;
      this.entrenador = usuario.entrenador;
      this.gimnasio = usuario.gimnasio;

      this.nombreEntrenador = entrenador.nombreEntrenador;
      this.especialidad = entrenador.especialidad;
      this.experiencia = entrenador.experiencia;
    });
  }

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
