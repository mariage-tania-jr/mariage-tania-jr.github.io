// src/app/layout.tsx
import '../styles/globals.css';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <nav className="navbar">
        <ul>
          <li><Link href="/about">Mariage Tatiana & Jean-Romain </Link></li>
          <li><Link href="/publications">Programme</Link></li>
          <li><Link href="/presentations">Accès et Parking</Link></li>
          <li><Link href="/teaching">Musique</Link></li>
          <li><Link href="/teaching">Cagnotte</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </body>
  </html>
);

export default Layout;
