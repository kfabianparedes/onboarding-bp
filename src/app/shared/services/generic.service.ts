import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { GenericHeaderService } from "./generic/generic-header.service";

@Injectable({
  providedIn: "root"
})

export class GenericService {
  constructor(private http: HttpClient, private _genericHeaderService: GenericHeaderService) {}

  private createRequestOptions(params?: HttpParams, useHeaders: boolean = true): { headers?: HttpHeaders; params?: HttpParams } {
    return {
      headers: useHeaders ? this._genericHeaderService.getHeaders() : undefined,
      params,
    };
  }

  public genericGet<T>(endpoint: string, params?: HttpParams, useHeaders: boolean = true): Observable<T> {
    const options = this.createRequestOptions(params, useHeaders);
    return this.http.get<T>(endpoint, options).pipe(
      tap(_ => this.log(`Get ${endpoint}`)),
      catchError((error: any) => this.handleError<T>(`genericGet ${endpoint}`, error))
    );
  }

  public genericPost<T>(endpoint: string, body: Object, params?: HttpParams, useHeaders: boolean = true): Observable<T> {
    const options = this.createRequestOptions(params, useHeaders);
    return this.http.post<T>(endpoint, body, options).pipe(
      tap(_ => this.log(`Post ${endpoint}`)),
      catchError((error: HttpErrorResponse) => this.handleError<T>(`genericPost ${endpoint}`, error))
    );
  }

  public genericPut<T>(endpoint: string, body: Object, params?: HttpParams, useHeaders: boolean = true): Observable<T> {
    const options = this.createRequestOptions(params, useHeaders);
    return this.http.put<T>(endpoint, body, options).pipe(
      tap(_ => this.log(`Put ${endpoint}`)),
      catchError((error: HttpErrorResponse) => this.handleError<T>(`genericPut ${endpoint}`, error))
    );
  }

  public genericDelete<T>(endpoint: string, params?: HttpParams, useHeaders: boolean = true): Observable<T> {
    const options = this.createRequestOptions(params, useHeaders);
    return this.http.delete<T>(endpoint, options).pipe(
      tap(_ => this.log(`Delete ${endpoint}`)),
      catchError((error: any) => this.handleError<T>(`genericDelete ${endpoint}`, error))
    );
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', httpErrorResponse: any): Observable<T> {
    const errorMessage = `${operation} failed: ${httpErrorResponse.message}`;
    this.log(errorMessage);
    return throwError(() => httpErrorResponse);
  }
  
}