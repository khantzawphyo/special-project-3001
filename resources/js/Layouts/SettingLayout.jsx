import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AuthLayout from './AuthLayout';

export default function SettingLayout({ children }) {
    const { url } = usePage();
    const { post } = useForm();

    const settingLinks = [
        { path: '/settings/edit-profile', label: 'Edit Profile' },
        { path: '/settings/preference', label: 'Preferences' },
        { path: '/settings/security', label: 'Security' },
    ];

    return (
        <AuthLayout>
            <Head title="Settings" />
            <div className="w-full rounded-3xl bg-white p-8 pt-10">
                <div className="flex items-center justify-between border-b-2 border-[#F4F4F5]">
                    <ul className="-mb-0.5 flex flex-wrap gap-x-5 text-center text-base font-medium">
                        {settingLinks.map((settingLink) => (
                            <li
                                key={settingLink.path}
                                className="text-[#3D2E58]"
                            >
                                <Link
                                    href={settingLink.path}
                                    className={`inline-block rounded-t-full p-4 hover:border-[#3D2E58] ${url === settingLink.path ? 'border-b-2 border-[#3D2E58]' : ''}`}
                                >
                                    {settingLink.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <form
                        method="post"
                        onSubmit={(e) => {
                            e.preventDefault();
                            post(route('logout'));
                        }}
                    >
                        <button
                            type="submit"
                            className="rounded-xl bg-[#3D2E58] px-10 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                        >
                            Logout
                        </button>
                    </form>
                </div>
                <div className="mt-16 rounded-lg">{children}</div>
            </div>
        </AuthLayout>
    );
}
