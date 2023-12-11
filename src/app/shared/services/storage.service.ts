import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  private storage$ = new BehaviorSubject<string | null>(null);

  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
    this.storage$.next(value);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
    this.storage$.next(null);
  }

  getStorageObservable(): Observable<string | null> {
    return this.storage$.asObservable();
  }
}
