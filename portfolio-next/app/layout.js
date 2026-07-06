import './globals.css';

export const metadata = {
  title: 'Marthy Sharon Taylor NLEND | Portfolio',
  description: 'Portfolio d’une ingénieure logicielle fullstack axée sur l’architecture, la rigueur technique et les performances.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
