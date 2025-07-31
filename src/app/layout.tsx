import "./globals.css";
import { Providers } from "../components/Providers";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

export const metadata = {
  title: "Bizengo",
  description:
    "Business tools for business around the world.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col min-h-screen ">
        <ErrorBoundary>
          <Providers>
            {" "}
            <main className="w-full">{children}</main>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
