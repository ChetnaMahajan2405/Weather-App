import axios from "axios";
import { BASE_URL } from "constants/api.url";

const networkHandler = async ({
  requestUrl,
  apiOptions,
}: {
  requestUrl: string;
  isAbsUrl?: boolean;
  apiOptions: any;
  apiVersion?: number;
}) => {
  axios.defaults.baseURL = BASE_URL;

  try {
    const { data } = await axios.request({
      url: requestUrl,
      ...apiOptions,
    });
    return Promise.resolve({ data });
  } catch (exception) {
    return Promise.reject(exception);
  }
};

export default networkHandler;
