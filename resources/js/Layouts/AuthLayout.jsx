'use client';

import SiteHeader from '@/Components/SiteHeader';
import { AppSidebar } from '@/shadcn/app-sidebar';
import { ThemeProvider } from '@/shadcn/theme-provider';
import { SidebarInset, SidebarProvider } from '@/shadcn/ui/sidebar';
import { Head } from '@inertiajs/react';

export default function AuthLayout({ children }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <Head title="Dashboard" />
                <AppSidebar />
                <SidebarInset className="">
                    <SiteHeader />
                    <div className="flex flex-1 flex-col gap-4 bg-platinum p-4 pt-0 transition-all dark:bg-main-purple/80 dark:text-white">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
