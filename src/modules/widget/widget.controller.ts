import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('widget/weather')
@ApiTags('Widget')
export class WeatherController {
  @Get()
  @ApiOperation({ summary: 'Get weather' })
  weather() {
    return 'weather';
  }
}

@Controller('widget/tempereature')
@ApiTags('Widget')
export class TemperatureController {
  @Get()
  temperature() {
    return 'temperature';
  }
}

@Controller('widget/map')
@ApiTags('Widget')
export class MapController {
  @Get()
  map() {
    return 'map';
  }
}
