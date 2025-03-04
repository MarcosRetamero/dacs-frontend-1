import { Component } from '@angular/core';
import { Router } from '@angular/router';


type Exercise = {
  name: string;
  description: string;
  sets: number;
  reps: number;
  imageUrl?: string; // URL de la imagen proporcionada por la API
};

type Routine = {
  day: string;
  routineName: string;
  exercises: Exercise[];
};

@Component({
  selector: 'app-plan-entrenamiento',
  templateUrl: './plan-entrenamiento.component.html',
  styleUrls: ['./plan-entrenamiento.component.css']
})



export class PlanEntrenamientoComponent {

  constructor(private router: Router) { }

  Routine: Routine = {
    day: "Lunes",
    routineName: "Cardio",
    exercises: [

        { name: 'Sentadillas', description:"Descripcion del ejercicio", sets: 4, reps: 12 },
        { name: 'Peso muerto',description:"Descripcion del ejercicio", sets: 3, reps: 10 },
        { name: 'Zancadas',description:"Descripcion del ejercicio", sets: 3, reps: 12 },
      ],
  }

  Atras() {
    this.router.navigate(['/dashboard-cliente']);
  }

  EditarRutina(){
    this.router.navigate(['/agregar-ejercicios'])
  }

}

