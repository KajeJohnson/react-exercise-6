export interface WeatherForcast {
  properties: {
    periods: Period[];
  };
}

export interface Period {
  name: string;
  temperature: number;
  detailedForcast: string;
  icon: string;
}
