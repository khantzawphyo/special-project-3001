import { Link } from '@inertiajs/react';

export default function OverviewCard({ path, icon, count, title }) {
    return (
        <Link
            href={path}
            className="flex w-full md:max-w-xs flex-col items-center justify-center gap-y-2 rounded-3xl border-4 border-primary-purple/80 bg-white py-3 shadow-sm transition-all hover:scale-105 md:py-8"
        >
            {icon}
            <div className="text-center">
                <p className="text-xl font-semibold">
                    {count >= 100 ? count + ' +' : count}
                </p>
                <p className="text-lg text-gray-600">Total {title}</p>
            </div>
        </Link>
    );
}
