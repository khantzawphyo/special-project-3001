import { ThemeProvider } from '@/shadcn/theme-provider';

export default function GuestLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
        </ThemeProvider>
    );
}
