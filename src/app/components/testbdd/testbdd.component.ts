import { Component, OnInit } from '@angular/core';
import { Trainer, Customer, TrainingPlan, HistoricalProgress, Exercise, ExerciseRoutine } from '../../core/models/bdd.model';
import { TrainerService } from 'src/app/core/services/trainer.service';
import { CustomerService } from 'src/app/core/services/customer.service';
import { TrainingPlanService } from 'src/app/core/services/training-plan.service';
import { HistoricalProgressService } from 'src/app/core/services/historical-progress.service';
import { ExerciseService } from 'src/app/core/services/excercise.service';
import { ExerciseRoutineService } from 'src/app/core/services/excercise-routine.service';

@Component({
  selector: 'app-testbdd',
  templateUrl: './testbdd.component.html',
  styleUrls: ['./testbdd.component.css']
})
export class TestBddComponent implements OnInit {
  trainers: Trainer[] = [];
  customers: Customer[] = [];
  trainingPlans: TrainingPlan[] = [];
  historicalProgress: HistoricalProgress[] = [];
  exercises: Exercise[] = [];
  exerciseRoutines: ExerciseRoutine[] = [];

  newTrainer: Trainer = {} as Trainer;
  newCustomer: Customer = {} as Customer;
  newTrainingPlan: TrainingPlan = {} as TrainingPlan;
  newExercise: Exercise = {} as Exercise;
  newExerciseRoutine: ExerciseRoutine = {} as ExerciseRoutine;

  constructor(
    private trainerService: TrainerService,
    private customerService: CustomerService,
    private trainingPlanService: TrainingPlanService,
    private historicalProgressService: HistoricalProgressService,
    private exerciseService: ExerciseService,
    private exerciseRoutineService: ExerciseRoutineService
  ) { }

  ngOnInit(): void {
    this.getTrainers();
    this.getCustomers();
    this.getTrainingPlans();
    this.getExercises();
    this.getExerciseRoutines();
    this.getHistoricalProgress();
  }

  // Métodos para los entrenadores
  getTrainers(): void {
    this.trainerService.getTrainers().subscribe(
      (response: Trainer[]) => {
        this.trainers = response;
      },
      (error: any) => {
        console.error('Error al obtener entrenadores', error);
      }
    );
  }

  addTrainer(newTrainer: Trainer): void {
    this.trainerService.addTrainer(newTrainer).subscribe(
      (response: Trainer) => {
        console.log('Entrenador agregado:', response);
        this.trainers.push(response);
      },
      (error: any) => {
        console.error('Error al agregar entrenador', error);
      }
    );
  }

  deleteTrainer(id: number): void {
    this.trainerService.deleteTrainer(id).subscribe(
      (response: any) => {
        console.log('Entrenador eliminado:', response);
        this.trainers = this.trainers.filter(trainer => trainer.id !== id);
      },
      (error: any) => {
        console.error('Error al eliminar entrenador', error);
      }
    );
  }

  // Métodos para los clientes
  getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
      },
      (error: any) => {
        console.error('Error al obtener clientes', error);
      }
    );
  }

  addCustomer(newCustomer: Customer): void {
    this.customerService.addCustomer(newCustomer).subscribe(
      (response: Customer) => {
        console.log('Cliente agregado:', response);
        this.customers.push(response);
      },
      (error: any) => {
        console.error('Error al agregar cliente', error);
      }
    );
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(
      (response: any) => {
        console.log('Cliente eliminado:', response);
        this.customers = this.customers.filter(customer => customer.id !== id);
      },
      (error: any) => {
        console.error('Error al eliminar cliente', error);
      }
    );
  }

  // Métodos para los planes de entrenamiento
  getTrainingPlans(): void {
    this.trainingPlanService.getTrainingPlans().subscribe(
      (response: TrainingPlan[]) => {
        this.trainingPlans = response;
      },
      (error: any) => {
        console.error('Error al obtener planes de entrenamiento', error);
      }
    );
  }

  addTrainingPlan(newTrainingPlan: TrainingPlan): void {
    this.trainingPlanService.addTrainingPlan(newTrainingPlan).subscribe(
      (response: TrainingPlan) => {
        console.log('Plan de entrenamiento agregado:', response);
        this.trainingPlans.push(response);
      },
      (error: any) => {
        console.error('Error al agregar plan de entrenamiento', error);
      }
    );
  }

  deleteTrainingPlan(id: number): void {
    this.trainingPlanService.deleteTrainingPlan(id).subscribe(
      (response: any) => {
        console.log('Plan de entrenamiento eliminado:', response);
        this.trainingPlans = this.trainingPlans.filter(plan => plan.id !== id);
      },
      (error: any) => {
        console.error('Error al eliminar plan de entrenamiento', error);
      }
    );
  }

  // Métodos para el progreso histórico
  getHistoricalProgress(): void {
    this.historicalProgressService.getHistoricalProgress().subscribe(
      (response: HistoricalProgress[]) => {
        this.historicalProgress = response;
      },
      (error: any) => {
        console.error('Error al obtener progreso histórico', error);
      }
    );
  }

  addHistoricalProgress(newProgress: HistoricalProgress): void {
    this.historicalProgressService.addHistoricalProgress(newProgress).subscribe(
      (response: HistoricalProgress) => {
        console.log('Progreso histórico agregado:', response);
        this.historicalProgress.push(response);
      },
      (error: any) => {
        console.error('Error al agregar progreso histórico', error);
      }
    );
  }

  deleteHistoricalProgress(id: number): void {
    this.historicalProgressService.deleteHistoricalProgress(id).subscribe(
      (response: any) => {
        console.log('Progreso histórico eliminado:', response);
        this.historicalProgress = this.historicalProgress.filter(progress => progress.id !== id);
      },
      (error: any) => {
        console.error('Error al eliminar progreso histórico', error);
      }
    );
  }

  // Métodos para los ejercicios
  getExercises(): void {
    this.exerciseService.getExercises().subscribe(
      (response: Exercise[]) => {
        this.exercises = response;
      },
      (error: any) => {
        console.error('Error al obtener ejercicios', error);
      }
    );
  }

  addExercise(newExercise: Exercise): void {
    this.exerciseService.addExercise(newExercise).subscribe(
      (response: Exercise) => {
        console.log('Ejercicio agregado:', response);
        this.exercises.push(response);
      },
      (error: any) => {
        console.error('Error al agregar ejercicio', error);
      }
    );
  }

  deleteExercise(id: number): void {
    this.exerciseService.deleteExercise(id).subscribe(
      (response: any) => {
        console.log('Ejercicio eliminado:', response);
        this.exercises = this.exercises.filter(exercise => exercise.id !== id);
      },
      (error: any) => {
        console.error('Error al eliminar ejercicio', error);
      }
    );
  }

  // Métodos para las rutinas de ejercicios
  getExerciseRoutines(): void {
    this.exerciseRoutineService.getExerciseRoutines().subscribe(
      (response: ExerciseRoutine[]) => {
        this.exerciseRoutines = response;
      },
      (error: any) => {
        console.error('Error al obtener rutinas de ejercicios', error);
      }
    );
  }

  addExerciseRoutine(newExerciseRoutine: ExerciseRoutine): void {
    this.exerciseRoutineService.addExerciseRoutine(newExerciseRoutine).subscribe(
      (response: ExerciseRoutine) => {
        console.log('Rutina de ejercicio agregada:', response);
        this.exerciseRoutines.push(response);
      },
      (error: any) => {
        console.error('Error al agregar rutina de ejercicio', error);
      }
    );
  }

  deleteExerciseRoutine(id: number): void {
    this.exerciseRoutineService.deleteExerciseRoutine(id).subscribe(
      (response: any) => {
        console.log('Rutina de ejercicio eliminada:', response);
        this.exerciseRoutines = this.exerciseRoutines.filter(routine => routine.id !== id);
      },
      (error: any) => {
        console.error('Error al eliminar rutina de ejercicio', error);
      }
    );
  }
}
