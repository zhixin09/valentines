import "./globals.css";


export const metadata = {
  title: "Valentines 2024",
  description: "Avent sent you a letter!",
  metadataBase: new URL('https://aventchiu.com/valentines'),
  openGraph: {
    images: 'heart.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
