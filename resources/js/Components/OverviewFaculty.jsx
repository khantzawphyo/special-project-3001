import { Link } from '@inertiajs/react';

export default function OverviewFaculty() {
    return (
        <Link href={route('faculties.index')}>
            <img
                className="h-16 w-16 rounded-full ring-4 ring-[#925FE2] 2xl:h-20 2xl:w-20"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="Bordered avatar"
            />
        </Link>
    );
}
