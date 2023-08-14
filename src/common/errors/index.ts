import { HttpException, HttpStatus } from '@nestjs/common';

export class Amount extends HttpException {
  constructor(message = 'Amount is nt correct') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class BadRequest extends HttpException {
  constructor(message = 'Bad Request') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class Unauthorized extends HttpException {
  constructor(message = 'Unauthorized') {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}

export class InvalidToken extends HttpException {
  constructor(message = 'Invalid Token') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class Forbidden extends HttpException {
  constructor(message = 'Forbidden') {
    super(message, HttpStatus.FORBIDDEN);
  }
}

export class NotFound extends HttpException {
  constructor(message = 'Not Found') {
    super(message, HttpStatus.NOT_FOUND);
  }
}
