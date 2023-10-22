import { PasswordStatus } from '../types/password-status.type';

const getPasswordStatus = (conditionNumber: number): PasswordStatus => {
  switch (conditionNumber) {
    case 1:
      return 'Easy';
    case 2:
      return 'Medium';
    case 3:
      return 'Strong';
    default:
      return 'Empty';
  }
};

export { getPasswordStatus };
