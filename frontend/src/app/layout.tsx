import ThemeProvider from '@/providers/ThemeProvider';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'title',
    description: 'description',
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
