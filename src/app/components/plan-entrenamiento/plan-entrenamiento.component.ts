import { Component } from '@angular/core';

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  imageUrl?: string; // URL de la imagen proporcionada por la API
};

type TrainingDay = {
  day: string;
  muscleGroups: string;
  exercises: Exercise[];
};

@Component({
  selector: 'app-plan-entrenamiento',
  templateUrl: './plan-entrenamiento.component.html',
  styleUrls: ['./plan-entrenamiento.component.css']
})
export class PlanEntrenamientoComponent {
  trainingPlan: TrainingDay[] = [
    {
      day: 'Lunes',
      muscleGroups: 'Pecho y tríceps',
      exercises: [
        { name: 'Press de banca', sets: 4, reps: 10 },
        { name: 'Aperturas con mancuernas', sets: 3, reps: 12 },
        { name: 'Fondos', sets: 3, reps: 15 },
      ],
    },
    {
      day: 'Martes',
      muscleGroups: 'Piernas y glúteos',
      exercises: [
        { name: 'Sentadillas', sets: 4, reps: 12 },
        { name: 'Peso muerto', sets: 3, reps: 10 },
        { name: 'Zancadas', sets: 3, reps: 12 },
      ],
    },
  ];
}
