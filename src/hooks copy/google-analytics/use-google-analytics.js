/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";

const useGoogleAnalytics = () => {
  const [isGaInitialized, setIsGaInitialized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isGaInitialized) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA4_TRACKING_ID);
      setIsGaInitialized(true);
    }
  }, [isGaInitialized]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.send(url.toString());
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

const GoogleAnalytics = () => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") return null;

  const [isGaInitialized, setIsGaInitialized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isGaInitialized) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA4_TRACKING_ID);
      setIsGaInitialized(true);
    }
  }, [isGaInitialized]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.send(url.toString());
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export { useGoogleAnalytics, GoogleAnalytics };
