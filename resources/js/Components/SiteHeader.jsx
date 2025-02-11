import { Separator } from '@/shadcn/ui/separator';
import { SidebarTrigger } from '@/shadcn/ui/sidebar';
import { usePage } from '@inertiajs/react';
import facultyImg from '/public/assets/admin2.jpg';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';

export default function SiteHeader({ title }) {
    const {
        url,
        auth: { user },
    } = usePage().props;

    return (
        <header className="sticky top-0 z-50 mb-10 flex shrink-0 items-center gap-2 bg-white transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex w-full items-center justify-between gap-2 px-4 pb-3 pt-8">
                <div className="flex items-center">
                    <SidebarTrigger className="-ml-1 p-0 hover:bg-accent hover:text-accent-foreground" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        {/* <ChevronDown /> */}
                        {/* <ChevronUp /> */}
                        <div className="flex gap-x-2 rounded-full border px-6 py-2 hover:cursor-pointer">
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-12 w-12 rounded-full md:h-10 md:w-10"
                                src={facultyImg}
                                alt="Dr. Myat Thuzar Tun"
                            />
                            <div className="hidden flex-col items-start md:flex">
                                <p>{user.name}</p>
                                <span className="text-gray-400">
                                    Pro-Rector
                                </span>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-5 w-44 md:ml-16 md:mr-0">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
