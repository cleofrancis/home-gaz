import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value, 0);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
