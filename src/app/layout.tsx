import { RootProvider } from 'fumadocs-ui/provider/next';
import { Analytics } from '@vercel/analytics/next';
import './global.css';
import { Inter } from 'next/font/google';
import ruTranslations from '@/locales/ru.json';

const inter = Inter({
  subsets: ['latin'],
});
const locale = 'ru';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale,
            translations: ruTranslations,
          }}
        >
          {children}
        </RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
