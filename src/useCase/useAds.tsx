import { useEffect, useState } from "react";
import { Ad } from "../domain/ads/adsTypes";
import { adsService } from "../domain/ads/adsService";
import eventBus from "host/eventBus";

export function useAds() {
  const [ad, setAd] = useState<Ad>({} as Ad);

  const loadAd = async ({ weather }: { weather: string }) => {
    const data = await adsService.getAd({
      params: {
        weather,
      },
    });

    if (data) {
      setAd(data);
    }
  };

  useEffect(() => {
    eventBus.on("weatherData", (data: { weather: string }) => {
      if (data) {
        loadAd({ weather: data.weather });
      }
    });
  }, []);

  return { ad };
}
