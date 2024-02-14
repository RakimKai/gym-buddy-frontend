import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../../contexts/AuthContext";
import { Outlet } from "react-router";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
