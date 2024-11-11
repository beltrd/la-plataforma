// @ts-nocheck
import React from "react";
import { useRouter } from "next/router";

import { useAuth } from "../context/auth";

const withNonProtectedRoute = (WrappedComponent) => {
  const WithNonProtectedRoute = (props) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
      if (isAuthenticated() && !isLoading) {
        router.push("/studio-dashboard/products");
      }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return !isAuthenticated() ? <WrappedComponent {...props} /> : null;
  };

  WithNonProtectedRoute.displayName = `WithNonProtectedRoute(${getDisplayName(
    WrappedComponent
  )})`;

  return WithNonProtectedRoute;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withNonProtectedRoute;
