import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('widget/map')
@ApiTags('Widget')
export class MapController {
  @Get()
  map() {
    return 'map';
  }
}
