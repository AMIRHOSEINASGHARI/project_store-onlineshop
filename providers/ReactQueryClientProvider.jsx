"use client";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQueryClientProvider = ({ children }) => {
  const q = new QueryClient();

  return <QueryClientProvider client={q}>{children}</QueryClientProvider>;
};

export default ReactQueryClientProvider;
