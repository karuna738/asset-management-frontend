import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AssetService {
  constructor(private http: HttpClient) {}

  list() { return this.http.get('/api/assets'); }
  get(id: string) { return this.http.get(`/api/assets/${id}`); }
}
