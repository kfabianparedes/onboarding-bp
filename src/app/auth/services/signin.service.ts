import { Injectable } from '@angular/core';
import { AuthClientService } from './client-service/auth-client.service';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { AuthResponse, UserCredentials } from '../model/authentication.model';
import { StorageService } from 'src/app/shared/services/storage.service';
import { GenericHeaderService } from 'src/app/shared/services/generic/generic-header.service';

@Injectable()
export class SigninService {

  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private _authClientService: AuthClientService,
    private _storageService: StorageService,
    private _headerService: GenericHeaderService
  ) {
    const storedToken = this._storageService.getItem('token');
    this.tokenSubject.next(storedToken);
  }

  get token(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  signin(username: string, password: string): Observable<boolean> {
    return this._authClientService.signin$(username, password).pipe(
      map((response: AuthResponse) => {
        this._headerService.setAuthorizationHeader(`${response.tokenType}${response.access_token}`);
        const credentials: UserCredentials = {
          userId: response.user.userId,
          username: response.user.username,
        };
        this.handleAuthentication(credentials,response.access_token);
        return true;
      }),
      catchError(errorResponse => {
        console.error('Error en login:', errorResponse);
        return throwError(() => errorResponse.error);
      })
    );
  }

  logout(): void {
    this.handleAuthentication(null,null);
    this._headerService.removeAuthorizationHeader();
  }

  private handleAuthentication(userCredentials: UserCredentials | null, token: string | null): void {
    if (token) {
      this._storageService.setItem('token', token);
    } else {
      this._storageService.removeItem('token');
    }

    if(userCredentials) {
      this._storageService.setItem('userId', userCredentials.userId);
      this._storageService.setItem('username', userCredentials.username);
    } else {
      this._storageService.removeItem('userId');
      this._storageService.removeItem('username');
    }

    this.tokenSubject.next(token);
  }
}
