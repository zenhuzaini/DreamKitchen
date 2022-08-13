import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('widget/tempereature')
@ApiTags('Widget')
export class TemperatureController {
  @Get()
  temperature() {
    return 'temperature';
  }
}
