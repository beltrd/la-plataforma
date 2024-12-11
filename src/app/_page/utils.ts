import {
  getDeviceInfoFromClientjs,
  getDeviceInfoFromUserAgent,
} from "../../lib/device";

const getFingerprint = async () => {
  try {
    // Create a new ClientJS object
    // const client = new ClientJS();

    // Get the client's fingerprint id
    getDeviceInfoFromUserAgent(window?.navigator?.userAgent ?? "");
    await getDeviceInfoFromClientjs();

    const { ClientJS } = await import("clientjs");

    const client = new ClientJS();

    const fingerprint = client.getFingerprint();

    // Print the 32bit hash id to the console
    console.log(fingerprint);

    console.log("====================================");
    console.log({
      host: window.location.host, // full host (e.g., 'example.com:3000')
      hostname: window.location.hostname, // only the hostname (e.g., 'example.com')
      protocol: window.location.protocol, // protocol (e.g., 'https:')
      origin: window.location.origin, // full origin (e.g., 'https://example.com:3000')
    });
    console.log("====================================");
  } catch (error) {
    console.error("Failed to fetch fingerprint:", error);
  }
};

export { getFingerprint };
