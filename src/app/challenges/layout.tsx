export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}
