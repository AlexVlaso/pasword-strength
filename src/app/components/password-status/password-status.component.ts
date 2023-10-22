import { Component, OnInit } from '@angular/core';
import {
  faCircleXmark,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { StatusService } from 'src/app/services/status-sharing.service';
import { PasswordStatus } from 'src/libs/types/password-status.type';

@Component({
  selector: 'password-status',
  templateUrl: './password-status.component.html',
  styleUrls: ['./password-status.component.scss'],
})
export class PasswordStatusComponent implements OnInit {
  faXmark = faCircleXmark;
  faCheck = faCircleCheck;

  status: PasswordStatus | undefined;

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusService.status.subscribe((status) => (this.status = status));
  }
}
