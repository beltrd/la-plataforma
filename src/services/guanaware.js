// import { ErrorMessage } from '../../utils/ErrorMessage';
// @ts-nocheck
import axios from "axios";

const _tenantToken = () => process.env.NEXT_PUBLIC_GUANAWARE_TENANT_ID || "";

export const _app = async ({
  url = "",
  method = "",
  data = {},
  validate = true,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_GUANAWARE_URI;
  const tenantToken = _tenantToken();

  if (!tenantToken && validate) {
    throw new Error("cannot process request:no base uri or entity token");
  }

  const options = {
    method: method,
    headers: {
      [process.env.NEXT_PUBLIC_GUANAWARE_HEADER_ENTITY]: tenantToken,
      "Content-type": "application/json",
      Accept: "*/*",
    },
    data: JSON.stringify(data),
    url: `${baseUrl}${url}`,
  };

  const response = await axios(options)
    .then((res) => res)
    .catch((err) => {
      if (err?.response?.status !== 400) {
        console.error("AMRC Art Studio API Error", err);
      }
      return err;
    });

  if (response.status === 204 || response.status === 200) {
    return response.data;
  } else {
    return response;
  }
};

const _postApp = async ({ url = "", data }) => {
  const baseUrl = process.env.NEXT_PUBLIC_GUANAWARE_URI;
  const tenantToken = _tenantToken();

  if (!tenantToken) {
    throw new Error("cannot process request:no base uri or entity token");
  }

  try {
    const response = await axios.post(`${baseUrl}${url}`, data, {
      headers: {
        "Content-Type": "multipart/form-data;",
        [process.env.NEXT_PUBLIC_GUANAWARE_HEADER_ENTITY]: tenantToken,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getHealth = async () => await _app({ method: "GET", url: "" });

export const createProductApi = async (data) =>
  await _app({ method: "POST", url: "product", data });

export const uploadImage = async (data) =>
  await _postApp({ url: "upload/image", data });
