import SideBar from '@/Components/SideBar';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function AuthLayout({ children }) {
    return (
        <div className="bg-[#F4F4F5] antialiased">
            <Head title="Dashboard" />
            <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white px-4 py-2.5 pe-12 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex h-12 items-center justify-between">
                        <button
                            data-drawer-target="drawer-navigation"
                            data-drawer-toggle="drawer-navigation"
                            aria-controls="drawer-navigation"
                            className="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-6 w-6"
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
                        <a
                            href="https://miit.edu.mm"
                            className="mr-4 flex items-center justify-between"
                        >
                            <img
                                src="https://lms.miit.edu.mm/pluginfile.php/1/core_admin/logo/0x200/1684573304/miit_logo_wordmark_small.png"
                                className="mr-3 h-14"
                                alt="MIIT"
                            />
                        </a>
                        <form
                            action="#"
                            method="GET"
                            className="hidden md:block md:pl-2"
                        >
                            <label htmlFor="topbar-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative md:w-96">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="email"
                                    id="topbar-search"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                    placeholder="Search"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center lg:order-2">
                        <button
                            type="button"
                            data-drawer-toggle="drawer-navigation"
                            aria-controls="drawer-navigation"
                            className="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 md:hidden"
                        >
                            <span className="sr-only">Toggle search</span>
                            <svg
                                aria-hidden="true"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="mx-3 flex w-full items-center justify-between gap-x-8 rounded-full bg-white px-2 py-1.5 text-sm shadow-lg md:mr-0"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown"
                        >
                            <div className="flex gap-x-2">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                                    alt="John Doe"
                                />
                                <div className="flex flex-col items-start">
                                    <p>Daw Win Aye</p>
                                    <span className="text-gray-400">
                                        Professor
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
                                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down m-2"
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
                            className="z-50 my-4 hidden w-56 list-none divide-y divide-gray-100 rounded-xl bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                            id="dropdown"
                        >
                            <div className="px-4 py-3">
                                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                                    Daw Win Aye
                                </span>
                                <span className="block truncate text-sm text-gray-900 dark:text-white">
                                    win_aye@miit.edu.mm
                                </span>
                            </div>
                            <ul
                                className="py-1 text-gray-700 dark:text-gray-300"
                                aria-labelledby="dropdown"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        My profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Account settings
                                    </a>
                                </li>
                            </ul>
                            <ul
                                className="py-1 text-gray-700 dark:text-gray-300"
                                aria-labelledby="dropdown"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <span className="flex items-center">
                                            <svg
                                                aria-hidden="true"
                                                className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Pro version
                                        </span>
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <ul
                                className="py-1 text-gray-700 dark:text-gray-300"
                                aria-labelledby="dropdown"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <SideBar />

            <MainLayout>{children}</MainLayout>
        </div>
    );
}
