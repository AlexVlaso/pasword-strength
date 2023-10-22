import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PasswordStatus } from 'src/libs/types/password-status.type';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private statusSource = new BehaviorSubject<PasswordStatus>('Empty');
  status = this.statusSource.asObservable();

  constructor() {}

  changeStatus(value: PasswordStatus) {
    this.statusSource.next(value);
  }
}
