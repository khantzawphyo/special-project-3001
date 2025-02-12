import { Link } from '@inertiajs/react';

export default function OverviewCard({ path, icon, count, title }) {
    return (
        <Link
            href={path}
            className="flex w-full flex-col items-center justify-center gap-y-2 rounded-3xl border-4 border-primary-purple/80 dark:border-main-purple/90 bg-white py-3 shadow-sm transition-all hover:scale-105 md:max-w-xs md:py-8"
        >
            <img
                src={icon}
                alt={title}
                className="h-14 w-16 fill-primary-purple md:h-16 md:w-16 lg:h-20 lg:w-20"
            />
            <div className="text-center">
                <p className="text-xl font-semibold">
                    {count >= 100 ? count + ' +' : count}
                </p>
                <p className="text-lg text-gray-600">Total {title}</p>
            </div>
        </Link>
    );
}
