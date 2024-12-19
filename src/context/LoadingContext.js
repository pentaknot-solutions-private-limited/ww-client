import { createContext } from "react";

const LoadingContext = createContext({
  siteLoading: false,
  setSiteLoading: (loading) => {},
});

export default LoadingContext;
