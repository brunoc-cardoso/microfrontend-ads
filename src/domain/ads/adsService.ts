import { adsApi } from "./adsApi";
import { Ad, GetAdApiRequest } from "./adsTypes";

const getAd = async ({ params }: GetAdApiRequest): Promise<Ad> => {
  const { data } = await adsApi.getAd({ params });

  return data;
};

export const adsService = {
  getAd,
};
