import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import ClientWrapper from "./components/ClientWrapper";

export const metadata = {
  title: "Ecommerce App",
  description: "Your ecommerce app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <AuthProvider>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
