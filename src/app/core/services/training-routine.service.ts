import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingRoutine } from '../models/bdd.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingRoutineService {
  private apiUrl = `${environment.backendForFrontendUrl}/training-routines`;

  constructor(private http: HttpClient) { }

  getTrainingRoutines(): Observable<TrainingRoutine[]> {
    return this.http.get<TrainingRoutine[]>(this.apiUrl);
  }

  addTrainingRoutine(routine: TrainingRoutine): Observable<TrainingRoutine> {
    return this.http.post<TrainingRoutine>(this.apiUrl, routine);
  }

  deleteTrainingRoutine(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
} 