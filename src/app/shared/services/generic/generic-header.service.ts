import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHeaderService {

  private headers: HttpHeaders = new HttpHeaders();

  constructor(private _storageService: StorageService) {
    const storedToken = this._storageService.getItem('token');
    if (storedToken) {
      this.setAuthorizationHeader(storedToken);
    }
  }

  setAuthorizationHeader(token: string): void {
    this.headers = this.headers.set('Authorization', `${token}`);
  }

  removeAuthorizationHeader(): void {
    this.headers = this.headers.delete('Authorization');
  }

  setHeader(key: string, value: string): void {
    this.headers = this.headers.set(key, value);
  }

  removeHeader(key: string): void {
    this.headers = this.headers.delete(key);
  }

  getHeaders(): HttpHeaders {
    return this.headers;
  }

}
