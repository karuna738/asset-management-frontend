import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AssignmentService {
  constructor(private http: HttpClient) {}

  list() { return this.http.get('/api/assignments'); }
  get(id: string) { return this.http.get(`/api/assignments/${id}`); }
}
