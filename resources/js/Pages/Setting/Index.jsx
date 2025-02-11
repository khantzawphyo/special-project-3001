import AuthLayoutTwo from '@/Layouts/AuthLayoutTwo';
import { Head, Link, usePage } from '@inertiajs/react';
import UpdateInfo from './Partials/UpdateInfo';
import UpdatePassword from './Partials/UpdatePassword';
import adminImg from '/public/assets/admin2.jpg';

export default function Index() {
    const {
        auth: { user },
    } = usePage().props;

    return (
        <AuthLayoutTwo>
            <Head title="Settings" />
            <div className="rounded-2xl bg-white p-8 pt-10">
                <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
                    <h3 className="text-2xl font-semibold">My Profile</h3>
                    <Link
                        href={route('logout')}
                        method="post"
                        className="w-full rounded-lg bg-[#3D2E58] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                    >
                        Sign Out
                    </Link>
                </div>

                <div className="mt-5 grid grid-cols-7 items-start gap-x-5">
                    {/* left section */}
                    <div className="col-span-2">
                        <div className="flex items-center justify-start gap-x-6">
                            <div className="relative rounded-full">
                                <img
                                    className="object-fit h-28 w-28 rounded-full"
                                    src={adminImg}
                                    alt={user.name}
                                />
                                <Link
                                    href="#"
                                    className="absolute bottom-1 right-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={32}
                                        height={32}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-pencil rounded-full bg-[#3D2E58] p-1.5 text-white"
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
                            <div className="">
                                <p className="text-2xl font-semibold">
                                    {user.name}
                                </p>
                                <p className="font-semibold text-gray-500">
                                    Pro-Rector
                                </p>
                                <p className="font-semibold text-gray-500">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* right section */}
                    <div className="col-span-5">
                        <h3 className="border-b-2 border-gray-200 pb-4 text-xl font-semibold">
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-2 gap-x-10 pt-6">
                            <UpdateInfo />
                            <UpdatePassword />
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayoutTwo>
    );
}
