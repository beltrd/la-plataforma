import { UAParser } from "ua-parser-js";
// import { ClientJS } from "clientjs";

export const getDeviceInfoFromUserAgent = (userAgent: string): void => {
  const parser = new UAParser(userAgent);
  const parsedResult = parser.getResult();

  console.log("====================================");
  console.log({ UAParser: parsedResult });
  console.log("====================================");
};

export const getDeviceInfoFromClientjs = async (): Promise<void> => {
  const { ClientJS } = await import("clientjs");

  const client = new ClientJS();
  console.log("====================================");
  console.log({ ClientJS: client.getDevice() });
  console.log({ ClientJS: client.getCPU() });
  console.log({ ClientJS: client.getDeviceType() });
  console.log({ ClientJS: client.getDeviceVendor() });
  console.log({ ClientJS: client.getOS() });
  console.log({ ClientJS: client.getOSVersion() });
  console.log({ ClientJS: client.getBrowser() });
  console.log({ ClientJS: client.getBrowserVersion() });
  console.log({ ClientJS: client.getOSVersion() });
  console.log({ ClientJS: client.getFingerprint() });
  console.log("====================================");
};
