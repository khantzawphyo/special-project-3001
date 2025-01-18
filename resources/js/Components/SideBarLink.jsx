import { Link, usePage } from '@inertiajs/react';

export default function SideBarLink({ routeLink, icon, routeName }) {
    const { url } = usePage();

    const isActive = url.startsWith('/' + routeName.toLowerCase());

    return (
        <li>
            <Link
                href={routeLink}
                className={`mb-2 me-2 inline-flex w-[170px] items-center rounded-full px-5 py-2.5 text-center text-sm font-medium hover:bg-white hover:text-[#925FE2] focus:outline-none ${isActive ? 'bg-white text-[#925FE2]' : ''}`}
            >
                {icon}
                <span className="pl-3">{routeName}</span>
            </Link>
        </li>
    );
}
