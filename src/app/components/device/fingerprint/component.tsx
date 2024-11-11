"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// import { useDeviceFingerprint } from "../../../../hooks/use-device-fingerprint";
import { generateDeviceFingerprint } from "../../../../lib/device/fingerprint";

const isBrowser = () => typeof window !== "undefined";

export const DeviceFingerprint = () => {
  const [, setFingerprint] = useState<string | null>(null);
  const [, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getFingerprint = async () => {
      setLoading(true);
      try {
        if (isBrowser()) {
          // Create a new ClientJS object
          // const client = new ClientJS();

          // Get the client's fingerprint id
          const fingerprint = await generateDeviceFingerprint();

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

  return <Container className="half"></Container>;
};
