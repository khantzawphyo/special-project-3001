import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <AuthLayout>
                <Head title="Dashboard" />
                <div className="mb-4 grid grid-cols-2 gap-4 rounded-3xl border-2 border-purple-300 p-2 dark:border-purple-600">
                    <div className="h-56 w-auto rounded-3xl border-2 border-red-500"></div>
                    <div className="h-56 w-auto rounded-3xl border-2 border-red-500"></div>
                </div>

                <div className="mb-4 grid grid-cols-6 gap-4 rounded-3xl border-2 border-purple-300 p-2 dark:border-purple-600">
                    <div className="col-span-4 h-56 rounded-3xl border-2 border-red-500 p-2 dark:border-red-500">
                        <div className="grid h-full grid-cols-3 gap-2">
                            <div className="h-full rounded-3xl border-2 border-red-500 dark:border-red-500" />
                            <div className="h-full rounded-3xl border-2 border-red-500 dark:border-red-500" />
                            <div className="h-full rounded-3xl border-2 border-red-500 dark:border-red-500" />
                        </div>
                    </div>
                    <div className="col-span-2 h-56 rounded-3xl border-2 border-red-500 dark:border-red-500"></div>
                </div>

                <div className="mb-4 grid grid-cols-6 gap-4 rounded-3xl border-2 border-purple-300 p-2 dark:border-purple-600">
                    <div className="col-span-4 h-56 rounded-3xl border-2 border-red-500 dark:border-red-500" />
                </div>
            </AuthLayout>
        </>
    );
}
