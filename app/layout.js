import './globals.css';

export const metadata = {
  title: 'Razan Smith | Portfolio',
  description: 'Business portfolio website built with Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
