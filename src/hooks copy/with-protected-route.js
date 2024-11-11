// @ts-nocheck
import React from "react";
import { useRouter } from "next/router";

import { useAuth } from "../context/auth";

const withProtectedRoute = (WrappedComponent) => {
  const WithProtectedRoute = (props) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
      if (!isAuthenticated() && !isLoading) {
        router.push("/studio-dashboard");
      }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return isAuthenticated() ? <WrappedComponent {...props} /> : null;
  };

  WithProtectedRoute.displayName = `WithProtectedRoute(${getDisplayName(
    WrappedComponent
  )})`;

  return WithProtectedRoute;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withProtectedRoute;
