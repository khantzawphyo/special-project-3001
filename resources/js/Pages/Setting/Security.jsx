import SettingLayout from '@/Layouts/SettingLayout';
import { Head, Link } from '@inertiajs/react';
import adminImg from '/public/assets/admin2.jpg';

export default function Security() {
    return (
        <SettingLayout>
            <Head title="Settings - Security" />
            <div className="grid h-full grid-cols-8 gap-x-10">
                <div className="col-span-2 flex h-full justify-end">
                    <div className="relative h-28 w-28 rounded-full">
                        <img
                            src={adminImg}
                            alt="admin image"
                            className="h-28 w-28 rounded-full"
                        />
                        <Link href={route('settings.index')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-pencil absolute -right-1 bottom-3 rounded-full bg-[#3D2E58] p-1"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="col-span-4">
                    <form action="">
                        <div className="grid grid-cols-2 gap-x-10">
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required=""
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required=""
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="phone_number"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone_number"
                                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required=""
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <button
                                type="submit"
                                className="rounded-xl bg-[#3D2E58] px-10 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </SettingLayout>
    );
}
