import { Injectable } from '@nestjs/common';

@Injectable()
export class WidgetService {
  getLocation(cat) {
    return cat;
  }
}
