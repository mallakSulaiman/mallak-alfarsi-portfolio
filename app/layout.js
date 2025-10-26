import './globals.css'

export const metadata = {
  title: 'Mallak Alfarsi - Full-Stack Software Engineer',
  description: 'Mallak Alfarsi - Software Engineer with 3 years of experience in full-stack web development. Skilled in Laravel, PHP, and JavaScript frameworks.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}