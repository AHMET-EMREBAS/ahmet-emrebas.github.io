import { ValidationPipe as VP } from '@nestjs/common';

export function ValidationPipe() {
  return new VP({
    transform: true,
  });
}
