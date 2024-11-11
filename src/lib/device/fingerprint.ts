export const generateDeviceFingerprint = async (): Promise<string> => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "";
  }

  const { ClientJS } = await import("clientjs");

  const client = new ClientJS();

  const fingerprint = client.getFingerprint();

  return fingerprint.toString();
};
