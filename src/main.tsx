import { StrictMode } from "react";

import App from "./App.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </QueryClientProvider>
  </StrictMode>
);
