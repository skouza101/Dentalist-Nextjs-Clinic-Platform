import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.scss';
import { LanguageProvider } from '../LanguageContext';
import ClientInitializer from '../components/ClientInitializer';

export const metadata = {
  title: 'Clinique Dentaire Al Andalus - Dr Biyad Mohammed Chouaib',
  description: "Clinique Dentaire Al Andalus - Dr Biyad Mohammed Chouaib : soins dentaires d'excellence, implantologie, esthétique dentaire et urgences à votre service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <ClientInitializer />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
