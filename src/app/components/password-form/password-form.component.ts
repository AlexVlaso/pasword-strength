import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { StatusService } from 'src/app/services/status-sharing.service';
import { checkRegex } from 'src/libs/helpers/check-regex';
import { getPasswordStatus } from 'src/libs/helpers/get-password-status';
import { PasswordStatus } from 'src/libs/types/password-status.type';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent {
  faLock = faLock;
  numberRegex = /[0-9]+/;
  letterRegex = /[A-Za-z]/;
  symbolRegex = /[^a-zA-Z0-9]/;

  constructor(private statusService: StatusService) {}

  checkStrength(...conditions: boolean[]): PasswordStatus {
    let passedCondition = 0;
    for (let condition of conditions) {
      if (condition) {
        passedCondition++;
      }
    }
    return getPasswordStatus(passedCondition);
  }

  onInput(value: string): void {
    const passwordLength = value.length;

    if (passwordLength === 0) {
      this.statusService.changeStatus('Empty');
      return;
    }

    if (passwordLength < 8) {
      this.statusService.changeStatus('Invalid');
      return;
    }

    const isHaveNumber = checkRegex(value, this.numberRegex);
    const isHaveLetter = checkRegex(value, this.letterRegex);
    const isHaveSymbol = checkRegex(value, this.symbolRegex);

    const status = this.checkStrength(isHaveLetter, isHaveNumber, isHaveSymbol);

    this.statusService.changeStatus(status);
  }
}
