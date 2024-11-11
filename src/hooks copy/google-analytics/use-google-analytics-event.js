// @ts-nocheck
import { useCallback } from "react";
import ReactGA from "react-ga4";

const useGoogleAnalyticsEvent = () => {
  const trackEvent = useCallback((action, params) => {
    console.debug("[Google Analytics] Tracking event", action);

    ReactGA.event(action, { ...params });
  }, []);

  return { trackEvent };
};

export { useGoogleAnalyticsEvent };
