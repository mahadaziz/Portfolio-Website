import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
