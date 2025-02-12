import { Head, Link, usePage } from '@inertiajs/react';
import RoomCard from './Room/Partials/RoomCard';

import OverviewCard from '@/Components/OverviewCard';
import AuthLayout from '@/Layouts/AuthLayout';
import StudentImg from '/public/assets/dashboard/student.png';

export default function Dashboard({
    currentDate,
    faculties,
    noOfFaculty,
    noOfStudent,
    noOfCourse,
}) {
    const {
        auth: { user },
    } = usePage().props;
    // const obj = useSidebar();
    // console.log(obj);

    const OverviewItems = [
        {
            title: 'Faculties',
            count: noOfFaculty,
            path: route('faculties.index'),
            icon: '/assets/dashboard/overview-faculty.svg',
        },
        {
            title: 'Students',
            count: noOfStudent,
            path: route('students.index'),
            icon: '/assets/dashboard/overview-student.svg',
        },
        {
            title: 'Courses',
            count: noOfCourse,
            path: route('courses.index'),
            icon: '/assets/dashboard/overview-course.svg',
        },
    ];

    return (
        <AuthLayout>
            <Head title="Dashboard" />
            <div className="mt-10 grid grid-cols-1 items-center rounded-3xl bg-gradient-to-l from-[#6D5394] to-[#3B2C55] p-8 pt-10 text-white lg:grid-cols-3 lg:pe-10 lg:ps-16">
                <div className="col-span-2 space-y-12">
                    <p className="font-semibold">{currentDate}</p>
                    <div className="space-y-5">
                        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                            Welcome Back, <br className="block md:hidden" />{' '}
                            {user.name}!
                        </h2>
                        <p>
                            Ready to plan your perfect exam schedule? Let's get
                            started with your personalized exam timetable.
                        </p>
                        <p>
                            <Link
                                href={route('timetables.add')}
                                className="rounded-lg bg-main-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Get Started
                            </Link>
                        </p>
                    </div>
                </div>
                <img
                    className="hidden xl:col-span-1 xl:block"
                    src={StudentImg}
                    alt="student image"
                />
            </div>

            <div className="mb-4 grid grid-cols-1 gap-x-16 rounded-3xl xl:grid-cols-12">
                <div className="mb-12 rounded-3xl lg:col-span-8 xl:mb-0">
                    <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                    <div className="grid gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-3">
                        {OverviewItems.map((overview) => (
                            <OverviewCard
                                key={overview.title}
                                path={overview.path}
                                count={overview.count}
                                icon={overview.icon}
                                title={overview.title}
                            />
                        ))}
                    </div>
                </div>
                <div className="mb-4 rounded-3xl lg:col-span-4 xl:mb-0">
                    <div className="mb-3 flex justify-between font-semibold">
                        <p className="text-2xl font-bold">Faculty</p>
                        <Link
                            href={route('faculties.index')}
                            className="text-lg font-semibold text-[#925FE2]"
                        >
                            See all
                        </Link>
                    </div>
                    {/* <div className="flex flex-wrap gap-4 lg:gap-6">
                        {faculties.data.map((faculty) => (
                            <OverviewFaculty key={faculty.id} />
                        ))}
                    </div> */}
                </div>
            </div>

            <div className="mb-4 grid grid-cols-6 gap-8 rounded-3xl">
                <div className="col-span-4 h-48 rounded-3xl">
                    <div className="mb-3 flex justify-between font-semibold">
                        <p className="mb-2 text-2xl font-bold">
                            Exam Timetables
                        </p>
                        <Link
                            href={route('timetables.index')}
                            className="text-lg font-semibold text-[#925FE2]"
                        >
                            See all
                        </Link>
                    </div>
                    <div className="mt-5 grid grid-cols-2 items-center gap-x-4 gap-y-3 2xl:grid-cols-3">
                        <RoomCard name="Timetable 1" count={1} />
                        <RoomCard name="Timetable 2" count={2} />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
