import { useState, useEffect } from "react";

const isBrowser = () => typeof window !== "undefined";

export const useDeviceFingerprint = () => {
  const [fingerprint, setFingerprint] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getFingerprint = async () => {
      const { ClientJS } = await import("clientjs");

      setLoading(true);
      try {
        if (!isBrowser()) {
          // Create a new ClientJS object
          const client = new ClientJS();

          // Get the client's fingerprint id
          const fingerprint = client.getFingerprint().toString();

          // Print the 32bit hash id to the console
          console.log(fingerprint);

          setFingerprint(fingerprint);
        }
      } catch (error) {
        console.error("Failed to fetch fingerprint:", error);
        setFingerprint(null);
      } finally {
        setLoading(false);
      }
    };

    getFingerprint();
  }, []);

  return { fingerprint, loading };
};
