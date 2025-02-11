import SiteHeader from '@/Components/SiteHeader';
import { AppSidebar } from '@/shadcn/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/shadcn/ui/sidebar';
import { Head } from '@inertiajs/react';

export default function AuthLayoutTwo({ children }) {
    return (
        <SidebarProvider>
            <Head title="Dashboard" />
            <AppSidebar />
            <SidebarInset className="">
                <SiteHeader />
                <div className="flex flex-1 flex-col gap-4 p-4 px-10 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
