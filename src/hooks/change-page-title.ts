import { useEffect } from "react";

export const useChangePageTitle = (title: string) => {
  useEffect(() => {
    const defaultTitle = "experiment";

    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;
  }, [title]);
};
