import { Component, OnInit } from '@angular/core';
import { AlumnoService, Alumno } from '../../core/services/alumno.service';
@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css'],
})
export class AgregarAlumnoComponent implements OnInit {
  filtro: string = ''; // Variable para filtrar la lista
  seleccionado: Alumno | null = null; // Variable para el alumno seleccionado

  alumnos: Alumno[] = []; // Almacenará los alumnos obtenidos del servicio

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe({
      next: (data: Alumno[]) => { // Ahora 'data' tiene el tipo Alumno[]
        this.alumnos = data;
        console.log('Alumnos cargados:', data);
      },
      error: (err: any) => { // Puedes dejar err como any si no conoces su estructura
        console.error('Error al cargar los alumnos:', err);
      },
    });
  }

  // Filtra la lista de alumnos según el texto ingresado en el input
  get alumnosFiltrados(): Alumno[] {
    return this.alumnos.filter((alumno) =>
      alumno.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  // Método que selecciona un alumno al hacer clic en la fila
  seleccionarAlumno(alumno: Alumno): void {
    this.seleccionado = alumno;
  }

  // Método que confirma el alumno seleccionado
  confirmarAlumno(): void {
    if (this.seleccionado) {
      console.log('Alumno confirmado:', this.seleccionado);
      alert(`Alumno confirmado: ${this.seleccionado.nombre}`);
    }
  }
}
