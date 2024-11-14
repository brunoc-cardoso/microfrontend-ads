import { api } from "../../service/api";
import { GetAdApiRequest, GetAdApiResponse } from "./adsTypes";

const getAd = async ({
  params,
}: GetAdApiRequest): Promise<GetAdApiResponse> => {
  const { data } = await api.get<GetAdApiResponse>("/api/ads", {
    params: params,
  });

  return data;
};

export const adsApi = {
  getAd,
};
