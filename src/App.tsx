import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";

export function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
