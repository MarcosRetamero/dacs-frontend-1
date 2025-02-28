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
  customSets = 3;
  customReps = 10;
  showExerciseForm = false;
  routine!: Routine;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.routineForm = this.fb.group({
      routineName: ['Rutina Personalizada', Validators.required],
      day: ['Lunes', Validators.required]
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
        sets: this.customSets,
        reps: this.customReps
      });
      this.resetExerciseForm();
    }
  }

  removeExercise(id: number) {
    this.routine.exercises = this.routine.exercises.filter(e => e.id !== id);
  }

  saveRoutine() {
    if (this.routineForm.valid && this.routine.exercises.length > 0) {
      console.log('Rutina guardada:', this.routine);
      this.resetRoutineForm();
    }
  }

  resetExerciseForm() {
    this.selectedExercise = null;
    this.customSets = 3;
    this.customReps = 10;
    this.showExerciseForm = false;
  }

  resetRoutineForm() {
    this.routineForm.reset({
      routineName: 'Rutina Personalizada',
      day: 'Lunes'
    });
    this.routine = { routineName: 'Rutina Inicial', day: 'Lunes', goal: 100, exercises: [] };
  }
}
