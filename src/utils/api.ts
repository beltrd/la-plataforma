import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const apiRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const baseUrl = process.env["GUANAWARE_API_BASE_URL"];
  const httpRule = process.env["GUANAWARE_API_HTTP_RULE"];

  if (!baseUrl) {
    throw new Error("Cannot proceed with fetch. Invalid token.");
  }

  const options: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config?.headers,
      "Content-Security-Policy": "default-src 'self'",
      "Strict-Transport-Security":
        "max-age=63072000; includeSubDomains; preload",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "no-referrer",
      "Content-type": "application/json",
    },
    url: `${httpRule}://${baseUrl}/${url}`,
  };

  try {
    const response = await axios(options);

    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error?.response?.status !== 400) {
        Error("Guanaware API Error", error);
      }

      console.error("Error making API request:", error);
      throw error;
    }

    console.error("Error making API request:", error);
    throw error;
  }
};
