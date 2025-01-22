import { Link } from '@inertiajs/react';
import facultyImg from '/public/assets/user.jpg';

export default function OverviewFaculty() {
    return (
        <Link href={route('faculties.index')}>
            <img
                className="ring-primary-purple/80 h-16 w-16 rounded-full ring-4 2xl:h-20 2xl:w-20"
                src={facultyImg}
                alt="Bordered avatar"
            />
        </Link>
    );
}
