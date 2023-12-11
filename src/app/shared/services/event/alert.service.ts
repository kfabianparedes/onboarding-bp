import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AlertData {
  type: string;
  alertTitle: string;
  description: string;
}

export interface AlertState extends AlertData {
  isVisible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private showAlertSubject = new BehaviorSubject<AlertState | null>(null);
  showAlert$ = this.showAlertSubject.asObservable();

  constructor() { }

  showSuccessAlert(alertTitle: string, description: string): void {
    this.showAlert({
      isVisible: true,
      type: 'success',
      alertTitle,
      description
    });
  }

  showErrorAlert(alertTitle: string, description: string): void {
    this.showAlert({
      isVisible: true,
      type: 'error',
      alertTitle,
      description
    });
  }

  closeAlert(): void {
    this.showAlert(null);
  }

  private showAlert(alertData: AlertState | null): void {
    this.showAlertSubject.next(alertData);
  }
}
