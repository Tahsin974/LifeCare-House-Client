import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import ReactRoutes from "./React-Routes/ReactRoutes.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import DateProvider from "./Provider/DateProvider/DateProvider.jsx";
import ToggleProvider from "./Provider/ToggleProvider/ToggleProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToggleProvider>
      <DateProvider>
        <AuthProvider>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <ReactRoutes />
            </QueryClientProvider>
          </BrowserRouter>
        </AuthProvider>
      </DateProvider>
    </ToggleProvider>
  </StrictMode>
);
