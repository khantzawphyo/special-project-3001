import RoomCard from '@/Components/RoomCard';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';

export default function Index({ timetables }) {
    return (
        <AuthLayout>
            <Head title="All Exam Timetables" />
            <div className="mb-4 grid grid-cols-6 gap-8 rounded-3xl">
                <div className="col-span-4 h-48 rounded-3xl">
                    <p className="mb-2 text-xl font-bold">Exam Timetables</p>
                    <div className="mt-5 grid justify-between gap-x-4 md:grid-cols-3 2xl:grid-cols-3">
                        <RoomCard name="Timetable 1" count={1} />
                        <RoomCard name="Timetable 2" count={2} />
                        <RoomCard name="Timetable 3" count={3} />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
