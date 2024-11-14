export type WeatherClimate = "cloudy" | "rainy" | "sunny";

export type Ad = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

export type GetAdApiRequest = {
  params: {
    weather: string;
  };
};

export type GetAdApiResponse = {
  data: Ad;
};
