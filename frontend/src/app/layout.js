import './globals.css'

export const metadata = {
  title: 'Verilocal',
  description: 'Verilocal Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
