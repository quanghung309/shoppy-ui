"use client";
import { ReactElement } from "react";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import darkTheme from "./dark.theme";
import { AuthContext } from "./auth/auth-context";

interface ProvidersProps {
   children: ReactElement[];
   authenticated: boolean;
}
export default async function Providers({
   children,
   authenticated,
}: ProvidersProps) {
   return (
      <AppRouterCacheProvider>
         <ThemeProvider theme={darkTheme}>
            <AuthContext.Provider value={authenticated}>
               {children}
            </AuthContext.Provider>
         </ThemeProvider>
      </AppRouterCacheProvider>
   );
}
