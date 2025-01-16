import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <AuthLayout>
                <Head title="Dashboard" />
                <div className="mb-4 grid grid-cols-6 gap-4 rounded-3xl border-2 border-purple-300 p-2 dark:border-purple-600">
                    <div className="col-span-4 h-56 w-auto rounded-3xl border-2 border-red-500"></div>
                    <div className="col-span-2 h-56 w-auto rounded-3xl border-2 border-red-500"></div>
                </div>

                <div className="mb-4 grid grid-cols-8 gap-10 rounded-3xl dark:border-purple-600">
                    <div className="col-span-6 rounded-3xl">
                        <h2 className="mb-4 text-xl font-semibold">Overview</h2>
                        <div className="grid h-56 grid-cols-3 gap-10">
                            <div className="h-56 rounded-3xl border-2 border-red-500 dark:border-red-500" />
                            <div className="h-56 rounded-3xl border-2 border-red-500 dark:border-red-500" />
                            <div className="h-56 rounded-3xl border-2 border-red-500 dark:border-red-500" />
                        </div>
                    </div>
                    <div className="col-span-2 h-56 rounded-3xl">
                        <div className="mb-4 flex justify-between font-semibold">
                            <p className="text-xl font-semibold">Faculty</p>
                            <p className="text-xl font-semibold">See all</p>
                        </div>
                    </div>
                </div>

                <div className="mb-4 grid grid-cols-6 gap-4 rounded-3xl border-2 border-purple-300 p-2 dark:border-purple-600">
                    <div className="col-span-4 h-56 rounded-3xl border-2 border-red-500 dark:border-red-500" />
                </div>
            </AuthLayout>
        </>
    );
}
