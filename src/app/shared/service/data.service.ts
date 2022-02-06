import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError, NotFoundError } from './error.service';

export class DataApiService {
  constructor(private url: string, private http: HttpClient) {}

  get() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(value: any) {
    return this.http.post(this.url, value).pipe(catchError(this.handleError));
  }

  update(id: number, value: any) {
    return this.http
      .put(`${this.url}/${id}`, value)
      .pipe(catchError(this.handleError));
  }

  delete(id: number) {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404) return throwError(new NotFoundError());
    return throwError(new AppError());
  }
}
