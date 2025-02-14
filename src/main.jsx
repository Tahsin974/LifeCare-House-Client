import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import ReactRoutes from "./React-Routes/ReactRoutes.jsx";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import DateProvider from "./Provider/DateProvider/DateProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DateProvider>
      <AuthProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <HeroUIProvider>
              <div className="max-w-[1250px] mx-auto">
                <ReactRoutes />
              </div>
            </HeroUIProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </AuthProvider>
    </DateProvider>
  </StrictMode>
);
