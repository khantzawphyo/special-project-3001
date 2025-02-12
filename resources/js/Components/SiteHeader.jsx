import { Separator } from '@/shadcn/ui/separator';
import { SidebarTrigger } from '@/shadcn/ui/sidebar';
import { usePage } from '@inertiajs/react';
import facultyImg from '/public/assets/admin2.jpg';

import ModeToggle from '@/shadcn/mode-toggle';
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

    /* 
    these two properties will mess up header component
    transition-[width,height] group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12
    */
    
    return (
        <header className="sticky top-0 z-50 flex shrink-0 items-center gap-2 bg-platinum pt-8 ease-linear dark:bg-[#282336] dark:shadow-md">
            <div className="flex w-full items-center justify-between gap-2 px-4 pb-4">
                <div className="flex items-center">
                    <SidebarTrigger className="-ml-1 hover:bg-none dark:text-white" />
                    <ModeToggle />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-x-2 rounded-full border hover:cursor-pointer dark:border-soft-purple/50 md:pe-10">
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-14 w-14 rounded-full"
                                src={facultyImg}
                                alt="Dr. Myat Thuzar Tun"
                            />
                            <div className="hidden flex-col items-start dark:text-white md:flex">
                                <p>{user.name}</p>
                                <span className="text-gray-400 dark:text-white">
                                    Pro-Rector
                                </span>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-5 mt-2 w-44 bg-white dark:bg-main-purple md:ml-8 md:mr-0">
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
