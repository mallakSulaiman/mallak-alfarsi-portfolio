import './globals.css'

export const metadata = {
  title: 'Mallak Alfarsi - Software Engineering',
  description: 'Mallak Alfarsi - Software Engineer with 3 years of experience in  web development. Skilled in Laravel, PHP, and JavaScript frameworks.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}