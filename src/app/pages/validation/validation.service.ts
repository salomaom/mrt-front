import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Filter from './models/filter';
import { environment } from 'src/environments/environment';

export type ValidationFilter = {
  plaza: string;
};

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor(private http: HttpClient) {}

  filter(
    filter: ValidationFilter = {
      plaza: '10',
    }
  ) {
    return this.http.post<any[]>(
      'https://localhost:44356/api/transaction/filter',
      JSON.stringify(filter),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        observe: 'body',
      }
    );
  }

  getFilters() {
    return this.http.get<Filter>(environment.baseUrl + '/validation/filters', {
      headers: new HttpHeaders({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY5Mzg1MjksImlzcyI6Ik1SVCBUZWNzaWRlbCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQyMDAifQ.AdVphjonzPqxLLySv2AXzYtNAqI6eOx0JseAlh3--QQ ',
      }),
    });
  }
}
