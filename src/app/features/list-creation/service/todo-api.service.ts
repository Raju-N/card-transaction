import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataApiService } from 'src/app/shared/service/data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService extends DataApiService {
  constructor(http: HttpClient) {
    super(environment.todoAPI, http);
  }
}
