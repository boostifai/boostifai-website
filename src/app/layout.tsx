import { ReactNode } from 'react';

// Since we have a `[locale]` segment, this root layout is required
// but it won't render anything itself
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
