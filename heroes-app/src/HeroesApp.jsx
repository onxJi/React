import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/pages/context/AuthProvider";
export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
