import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map} from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

export * from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   //api with one task
   //private apiRoot: string = 'https://run.mocky.io/v3/26045374-863c-469d-85c4-51ea1135ce8a';

   //api without any task
   //private apiRoot: string = 'https://run.mocky.io/v3/7841d1af-e8d5-446a-bac5-3506fdd05659';
 
   // api with many task
   private apiRoot: string = 'https://run.mocky.io/v3/0933ddef-c9bf-4f26-8ddf-77990fb490cb';


  constructor(private http: HttpClient) { }

  getApi(){
    return this.http
      .get<Array<{}>>(this.apiRoot)
      .pipe( map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse){
    return observableThrowError(res.error || 'Server Error');
  }
}
