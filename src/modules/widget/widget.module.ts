import { Module } from '@nestjs/common';
import { MapController } from './map/map.controller';
import { TemperatureController } from './temperature/temperature.controller';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';

@Module({
  controllers: [TemperatureController, MapController, WeatherController],
  providers: [WeatherService],
})
export class WidgetModule {}
