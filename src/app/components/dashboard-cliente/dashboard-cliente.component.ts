import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Router } from '@angular/router';

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
  altura: number = 180;
  pesoActual: number = 75;
  grasaCorporal: number = Math.trunc(this.pesoActual/Math.pow((this.altura/100),2)); // Fórmula: peso (kg) / [estatura (m)]^2

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

  editandoObjetivo: boolean = false;
  objetivoTemporal: string = '';
  editandoPeso: boolean = false;
  pesoTemporal: number = 0;

  // Agregar la propiedad entrenador
  entrenador: string = 'Sin asignar';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Usar history.state directamente
    console.log('History state completo:', history.state);

    if (history.state?.datosActualizados) {
      // Mostramos los datos recibidos en consola
      console.log('Datos recibidos en dashboard:', history.state.datosActualizados);
      console.log('Desglose de datos:');
      console.log('- Nombre:', history.state.datosActualizados.nombre);
      console.log('- Edad:', history.state.datosActualizados.edad);
      console.log('- Altura:', history.state.datosActualizados.altura);
      console.log('- Peso Actual:', history.state.datosActualizados.pesoActual);
      
      // Actualizar los datos del usuario
      this.nombre = history.state.datosActualizados.nombre || this.nombre;
      this.edad = history.state.datosActualizados.edad || this.edad;
      this.altura = history.state.datosActualizados.altura || this.altura;
      this.pesoInicial = history.state.datosActualizados.pesoActual || this.pesoInicial;
      this.pesoActual = history.state.datosActualizados.pesoActual || this.pesoActual;
      
      // Recalcular el IMC con los nuevos datos
      this.grasaCorporal = Math.trunc(this.pesoActual/Math.pow((this.altura/100),2));

      // Log de los datos actualizados en el componente
      console.log('Datos actualizados en el componente:');
      console.log('- Nombre:', this.nombre);
      console.log('- Edad:', this.edad);
      console.log('- Altura:', this.altura);
      console.log('- Peso Inicial:', this.pesoInicial);
      console.log('- Peso Actual:', this.pesoActual);
      console.log('- IMC:', this.grasaCorporal);
    } else {
      console.log('No se recibieron datos actualizados');
    }
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
    this.editandoObjetivo = !this.editandoObjetivo;
    this.objetivoTemporal = this.objetivoFisico;
  }

  guardarObjetivo() {
    if (this.objetivoTemporal.trim() !== '') {
      this.objetivoFisico = this.objetivoTemporal.trim();
      this.editandoObjetivo = false;
    }
  }

  cancelarEdicion() {
    this.editandoObjetivo = false;
    this.objetivoTemporal = '';
  }

  verProgreso() {
    console.log('Mostrando progreso');
  }

  agregarPeso() {
    this.editandoPeso = true;
    this.pesoTemporal = this.pesoActual;
  }

  guardarPeso() {
    if (this.pesoTemporal > 0) {
      this.pesoActual = this.pesoTemporal;
      this.editandoPeso = false;
    }
  }

  cancelarEdicionPeso() {
    this.editandoPeso = false;
    this.pesoTemporal = this.pesoActual;
  }

  editarDatos() {
    const datosUsuario = {
      nombre: this.nombre,
      edad: this.edad,
      altura: this.altura,
      pesoActual: this.pesoActual
    };
    
    // Navegamos a la página de registro con los datos
    this.router.navigate(['/registro-user'], { 
      state: { datos: datosUsuario } 
    });
  }

  agregarRutina(){
    this.router.navigate(['/agregar-ejercicios']);
  }

  verRutina(){
    this.router.navigate(['/plan-entrenamiento']);
  }

  editarRutina(dia: any) {
    // Log de los datos que vamos a enviar
    console.log('Datos a enviar a plan-entrenamiento:');
    console.log('- Nombre del usuario:', this.nombre);
    console.log('- Día seleccionado:', dia.dia);

    const datosRutina = {
      nombreUsuario: this.nombre,
      diaSeleccionado: dia.dia
    };

    console.log('Objeto completo a enviar:', datosRutina);

    // Navegamos a plan-entrenamiento con los datos
    this.router.navigate(['/plan-entrenamiento'], {
      state: { datosRutina }
    });
  }
}


