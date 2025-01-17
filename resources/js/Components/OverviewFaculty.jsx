import { Link } from '@inertiajs/react';

export default function OverviewFaculty() {
    return (
        <Link href={route('faculties.index')}>
            <img
                class="h-20 w-20 rounded-full ring-4 ring-[#925FE2]"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="Bordered avatar"
            />
        </Link>
    );
}
