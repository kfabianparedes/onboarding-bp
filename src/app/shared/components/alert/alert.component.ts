import { Component, OnInit } from '@angular/core';
import { AlertService, AlertState } from '../../services/event/alert.service';

@Component({
  selector: 'bp-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  
  type: string = 'success';
  alertTitle: string | undefined;
  description: string | undefined;

  alertState: AlertState | null = null;

  constructor(private _alertService: AlertService) { }

  ngOnInit() {
    this._alertService.showAlert$.subscribe((state) => {
      if (state) {
        this.type = state.type;
        this.alertTitle = state.alertTitle;
        this.description = state.description;
      }
    });
  }
}
