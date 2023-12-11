import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GenericService } from 'src/app/shared/services/generic.service';
import { GenericHeaderService } from 'src/app/shared/services/generic/generic-header.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ENDPOINTS } from 'src/app/shared/parameters/endpoints';
import { AuthResponse, UserCredentials } from '../model/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private _genericService: GenericService,
    private _storageService: StorageService,
    private _headerService: GenericHeaderService
  ) {
    const storedToken = this._storageService.getItem('token');
    this.tokenSubject.next(storedToken);
  }

  get token(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  login(username: string, password: string): Observable<UserCredentials> {
    const loginData = { username, password };
    return this._genericService.genericPost<AuthResponse>(ENDPOINTS.LOGIN, loginData).pipe(
      map((response: AuthResponse) => {
        this._headerService.setAuthorizationHeader(`${response.tokenType}${response.access_token}`);
        this.handleAuthentication(response.access_token);
        const credentials: UserCredentials = {
          userId: response.user.userId,
          username: response.user.username,
        };
        return credentials;
      }),
      catchError(error => {
        console.error('Error en login:', error);
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    this.handleAuthentication(null);
    this._headerService.removeAuthorizationHeader();
  }

  private handleAuthentication(token: string | null): void {
    if (token) {
      this._storageService.setItem('token', token);
    } else {
      this._storageService.removeItem('token');
    }
    this.tokenSubject.next(token);
  }
}
