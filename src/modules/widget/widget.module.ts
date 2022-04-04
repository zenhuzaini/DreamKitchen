import { Module } from '@nestjs/common';
import {
  MapController,
  TemperatureController,
  WeatherController,
} from './widget.controller';

@Module({
  controllers: [TemperatureController, MapController, WeatherController],
})
export class WidgetModule {}
