import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError((err) =>
          throwError(
            () =>
              new HttpException(
                `Exception interceptor message`,
                HttpStatus.BAD_GATEWAY,
              ),
          ),
        ),
      );
  }
}
