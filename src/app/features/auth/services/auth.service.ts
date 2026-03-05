import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post('/api/auth/login', credentials);
  }

  register(data: any) {
    return this.http.post('/api/auth/register', data);
  }
}
