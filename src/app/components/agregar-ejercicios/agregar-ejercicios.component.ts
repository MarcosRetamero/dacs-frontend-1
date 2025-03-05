import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Exercise {
  id: number;
  name: string;
  image: string;
  description: string;
  sets: number;
  reps: number;
}

interface Routine {
  id?: number;
  routineName: string;
  day: string;
  goal: number;
  exercises: Exercise[];
}

@Component({
  selector: 'app-create-routine',
  templateUrl: './agregar-ejercicios.component.html',
  styleUrls: ['./agregar-ejercicios.component.css']
})
export class CreateRoutineComponent implements OnInit {
  routineForm!: FormGroup;
  availableExercises: Exercise[] = [
    { id: 1, name: 'Sentadillas', image: '/assets/sentadillas.jpg', description: 'Ejercicio para piernas', sets: 3, reps: 12 },
    { id: 2, name: 'Press de banca', image: '/assets/press-banca.jpg', description: 'Ejercicio para pecho', sets: 4, reps: 10 },
    { id: 3, name: 'Dominadas', image: '/assets/dominadas.jpg', description: 'Ejercicio para espalda', sets: 3, reps: 8 },
    { id: 4, name: 'Curl de bíceps', image: '/assets/curl-biceps.jpg', description: 'Ejercicio para brazos', sets: 3, reps: 12 }
  ];

  selectedExercise: Exercise | null = null;
  showExerciseForm = false;
  isDayDisabled = false; // Variable para bloquear el selector de día
  routine!: Routine;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.routineForm = this.fb.group({
      routineName: ['Rutina Personalizada', Validators.required],
      day: ['Lunes', Validators.required],
      sets: [3, Validators.required],
      reps: [10, Validators.required],
    });

    this.routine = { routineName: 'Rutina Inicial', day: 'Lunes', goal: 100, exercises: [] };
  }

  selectExercise(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectedExercise = this.availableExercises.find(e => e.id === Number(selectedValue)) || null;
  }

  addExerciseToRoutine() {
    if (this.selectedExercise) {
      this.routine.exercises.push({
        ...this.selectedExercise,
        sets: this.routineForm.get('sets')?.value,
        reps: this.routineForm.get('reps')?.value
      });
      this.resetExerciseForm();
      this.showExerciseForm = true; // Aseguramos que se mantenga oculto el selector
    }
  }

  removeExercise(id: number) {
    this.routine.exercises = this.routine.exercises.filter(e => e.id !== id);
  }

  saveRoutine() {
    if (this.routineForm.valid && this.routine.exercises.length > 0) {
      console.log('¡Rutina guardada con éxito!');
      console.log('Detalles de la rutina:', this.routine);
      this.resetRoutineForm();
      this.showExerciseForm = false; // Esto hará que el selector de día vuelva a estar visible
      this.isDayDisabled = false;    // Por si acaso también reseteamos esta bandera
    } else {
      console.log('No se pudo guardar la rutina. Asegúrate de completar todos los campos.');
    }
  }

  resetExerciseForm() {
    this.selectedExercise = null;
    this.routineForm.patchValue({
      sets: 3,
      reps: 10
    });
    this.showExerciseForm = false;
    this.isDayDisabled = true; // Bloqueamos el selector de día cuando se agrega un ejercicio
  }

  resetRoutineForm() {
    this.routineForm.reset({
      routineName: 'Rutina Personalizada',
      day: 'Lunes'
    });
    this.routine = { routineName: 'Rutina Inicial', day: 'Lunes', goal: 100, exercises: [] };
    this.isDayDisabled = false; // Desbloqueamos el selector de día al restablecer la rutina
  }

  showExerciseFormHandler() {
    this.showExerciseForm = true;
    this.isDayDisabled = true;  // Bloqueamos el selector de día al mostrar el formulario
  }
}
