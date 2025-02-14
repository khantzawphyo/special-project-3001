'use client';

import SiteHeader from '@/Components/SiteHeader';
import { AppSidebar } from '@/shadcn/app-sidebar';
import { ThemeProvider } from '@/shadcn/theme-provider';
import { SidebarInset, SidebarProvider } from '@/shadcn/ui/sidebar';

export default function AuthLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="">
                    <SiteHeader />
                    <main className="flex flex-1 flex-col gap-4 bg-platinum px-5 xl:px-10 pb-10 transition-all dark:bg-main-purple/80 dark:text-white">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
