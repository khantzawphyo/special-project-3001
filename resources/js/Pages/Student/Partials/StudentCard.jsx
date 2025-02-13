import { Link } from '@inertiajs/react';
import logo from '/public/assets/miit_logo.png';

export default function StudentCard({ name, count }) {
    return (
        <Link
            href="#"
            className="flex items-center justify-center gap-x-6 rounded-3xl border-4 border-primary-purple/70 bg-[#925FE2]/25 py-8"
        >
            <div className="rounded-full bg-[#925FE2]/60 p-3">
                <img src={logo} alt="" className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <div className="space-y-2">
                <h2 className="text-base md:text-xl font-semibold">{name}</h2>
                <p className="text-xl md:text-3xl font-bold">{count}</p>
            </div>
        </Link>
    );
}
