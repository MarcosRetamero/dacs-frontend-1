import { Component, OnInit } from '@angular/core';
import { EjercicioService } from '../../core/services/ejercicio.service'; // Asegúrate de que el path sea correcto
import { ActivatedRoute } from '@angular/router';


interface Exercise {
  name: string;
  sets: number;
  reps: number;
  imageUrl?: string;
}

interface TrainingDay {
  day: string;
  muscleGroups: string;
  exercises: Exercise[];
}

@Component({
  selector: 'app-plan-entrenamiento',
  templateUrl: './plan-entrenamiento.component.html',
  styleUrls: ['./plan-entrenamiento.component.css'],
})
export class PlanEntrenamientoComponent implements OnInit {
  trainingPlan: TrainingDay[] = [];
  filteredPlan: TrainingDay | undefined;

  constructor(
    private route: ActivatedRoute,  // Aquí inyectamos ActivatedRoute
    private ejercicioService: EjercicioService
  ) {}

  ngOnInit(): void {
    this.ejercicioService.getEjercicios().subscribe({
      next: (data: { results: any[] }) => {
        this.ejercicioService.getImageUrls().subscribe({
          next: (imageData: { results: any[] }) => {
            this.trainingPlan = [
              {
                day: 'Lunes',
                muscleGroups: 'Pecho y tríceps',
                exercises: data.results.slice(0, 3).map((exercise) => ({
                  name: exercise.name,
                  sets: 4,
                  reps: 10,
                  imageUrl: imageData.results.find((img) => img.exercise_base === exercise.id)?.image,
                })),
              },
              {
                day: 'Martes',
                muscleGroups: 'Piernas y glúteos',
                exercises: data.results.slice(3, 6).map((exercise) => ({
                  name: exercise.name,
                  sets: 4,
                  reps: 12,
                  imageUrl: imageData.results.find((img) => img.exercise_base === exercise.id)?.image,
                })),
              },
            ];
  
            // Asignamos el plan filtrado basándonos en el día desde la URL o cualquier otra lógica
            const dayFromRoute = this.route.snapshot.paramMap.get('day');  // Asegúrate de que la ruta pase el día
            this.filteredPlan = this.trainingPlan.find(plan => plan.day === dayFromRoute) || this.trainingPlan[0];
          },
          error: (err: any) => {
            console.error('Error al cargar las imágenes:', err);
          }
        });
      },
      error: (err) => {
        console.error('Error al cargar los ejercicios:', err);
      }
    });
  }
  

  // Función para manejar el error de carga de imágenes
  onImageError(event: any): void {
    event.target.src = 'assets/placeholder.jpg'; // Ruta de la imagen por defecto si no se carga
  }
}
