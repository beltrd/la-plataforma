import { useState, useEffect } from "react";

const useHostInfo = () => {
  const [hostInfo, setHostInfo] = useState({
    host: "",
    hostname: "",
    protocol: "",
    origin: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // We're in the browser environment
      setHostInfo({
        host: window.location.host, // full host (e.g., 'example.com:3000')
        hostname: window.location.hostname, // only the hostname (e.g., 'example.com')
        protocol: window.location.protocol, // protocol (e.g., 'https:')
        origin: window.location.origin, // full origin (e.g., 'https://example.com:3000')
      });
    }
  }, []);

  return hostInfo;
};

export default useHostInfo;
