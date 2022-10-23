import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WeatherService } from './weather.service';

@ApiBearerAuth()
@Controller('widget/weather')
@ApiTags('Widget')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}
  @Get()
  @ApiOperation({ summary: 'Get weather' })
  async weather() {
    return await this.weatherService.getWeather();
  }
}
