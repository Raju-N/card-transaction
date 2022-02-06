import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataApiService } from 'src/app/shared/service/data.service';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService extends DataApiService {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/todos', http);
  }
}
