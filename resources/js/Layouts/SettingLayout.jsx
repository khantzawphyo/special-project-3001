import { Head } from '@inertiajs/react';
import AuthLayout from './AuthLayout';

export default function SettingLayout({ children }) {
    return (
        <AuthLayout>
            <Head title="Settings" />
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="-mb-px flex flex-wrap text-center text-sm font-medium">
                    <li className="me-2">
                        <button className="inline-block rounded-t-lg border-b-2 p-4">
                            Edit Profile
                        </button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300">
                            Preferences
                        </button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300">
                            Settings
                        </button>
                    </li>
                </ul>
            </div>
            {children}
        </AuthLayout>
    );
}
