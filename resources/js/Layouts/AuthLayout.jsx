import SideBar from '@/Components/SideBar';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import facultyImg from '/public/assets/admin2.jpg';

export default function AuthLayout({ children }) {
    const {
        url,
        auth: { user },
    } = usePage().props;

    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(
        JSON.parse(localStorage.getItem('isSidebarOpen') || null),
    ); // State for sidebar
    const dropdownRef = useRef(null); // Create a ref for the dropdown
    const sidebarRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem('isSidebarOpen', true);
    }, []);

    useEffect(() => {
        localStorage.setItem('isSidebarOpen', isSidebarOpen);
    }, [isSidebarOpen]);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }

        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }

        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-[#F4F4F5] antialiased">
            <Head title="Dashboard" />
            <nav className="fixed left-0 right-0 top-0 z-50 bg-[#F4F4F5] px-4 py-2.5 pe-12 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex flex-wrap items-center justify-between">
                    {/* left button */}
                    <div className="flex items-center justify-between">
                        <button
                            onClick={toggleSidebar}
                            className="text-purple-[#3D2E58] order-1 mr-2 block cursor-pointer rounded-lg p-2 md:order-2"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-10 w-10"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                aria-hidden="true"
                                className="hidden h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Toggle sidebar</span>
                        </button>
                        <Link
                            href="/"
                            className="order-2 mr-4 flex items-center justify-between md:order-1"
                        >
                            <img
                                src="https://lms.miit.edu.mm/pluginfile.php/1/core_admin/logo/0x200/1684573304/miit_logo_wordmark_small.png"
                                className="mr-3 h-14 md:mx-10"
                                alt="MIIT"
                            />
                        </Link>
                    </div>

                    {/* right button */}
                    <div
                        className="relative flex flex-col items-center lg:order-2"
                        ref={dropdownRef}
                    >
                        <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-full bg-white px-2 py-1.5 text-sm shadow-lg md:mx-3 md:mr-0 md:gap-x-8"
                            id="user-menu-button"
                            aria-expanded={isOpen}
                            onClick={toggleDropdown}
                        >
                            <div className="flex gap-x-2">
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down hidden md:m-2 md:block"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M6 9l6 6l6 -6" />
                            </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div
                            className={`absolute right-0 top-10 z-50 my-4 w-48 list-none divide-y divide-gray-100 rounded-xl bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700 ${isOpen ? '' : 'hidden'}`}
                            id="dropdown"
                        >
                            <div className="px-4 py-3 md:hidden">
                                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                                    Dr. Myat Thuzar Tun
                                </span>
                                <span className="block truncate text-sm text-gray-900 dark:text-white">
                                    myat_thuzar_tun@miit.edu.mm
                                </span>
                            </div>
                            <ul
                                className="py-1 text-gray-700 dark:text-gray-300"
                                aria-labelledby="dropdown"
                            >
                                <li>
                                    <Link
                                        href={route('dashboard')}
                                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard me-1.5"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                                            <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                                            <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                                            <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                                        </svg>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('settings.index')}
                                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle me-1.5"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                        </svg>
                                        My profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route('settings.index')}
                                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-settings me-1.5"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                        </svg>
                                        Account settings
                                    </Link>
                                </li>
                            </ul>
                            <ul
                                className="py-1 text-gray-700 dark:text-gray-300"
                                aria-labelledby="dropdown"
                            >
                                <li className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <Link
                                        method="post"
                                        as="button"
                                        href={route('logout')}
                                    >
                                        Sign out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <SideBar sidebarRef={sidebarRef} isSidebarOpen={isSidebarOpen} />

            <MainLayout sidebarRef={sidebarRef} isSidebarOpen={isSidebarOpen}>
                {children}
            </MainLayout>
        </div>
    );
}
