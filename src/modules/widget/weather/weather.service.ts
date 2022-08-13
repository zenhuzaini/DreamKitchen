import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MapInterface } from '../widget.dto';

interface AxiosResponse {
  status: number;
  statusText: string;
  data: unknown;
}

@Injectable()
export class WeatherService {
  async getWeather(geocode?: MapInterface) {
    const getWeather: AxiosResponse = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=51.09454025130257&lon=17.02634608286023&appid=6ad9c7fe5dd5128287e5991ee397fbdb',
    );

    if (getWeather.status === 200) {
      return getWeather.data;
    }
  }
}
