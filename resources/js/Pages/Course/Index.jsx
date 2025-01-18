import RoomCard from '@/Components/RoomCard';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ courses }) {
    return (
        <>
            <AuthLayout>
                <Head title="All Courses" />
                <div className="mb-5">
                    <h2 className="text-2xl font-semibold">
                        Total Courses
                        <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                            {10 + 10}
                        </span>
                    </h2>

                    <div className="mt-5 grid justify-between gap-x-4 md:grid-cols-3 2xl:grid-cols-5">
                        <RoomCard name="CSE and ECE" count={20} />
                        <RoomCard name="CSE" count={10} />
                        <RoomCard name="ECE" count={10} />
                    </div>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                        <caption className="space-x-3 bg-white px-6 py-3 text-left text-xl font-semibold">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="">Course Lists</span>
                                    <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                        Courses Information
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-x-3">
                                    <Link
                                        href={route('faculties.create')}
                                        className="w-full rounded-lg bg-[#925FE2] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                                    >
                                        Export
                                    </Link>
                                    <Link
                                        href={route('faculties.create')}
                                        className="w-full rounded-lg bg-[#925FE2] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                                    >
                                        Create
                                    </Link>
                                </div>
                            </div>
                        </caption>

                        <thead className="bg-gray-300 text-xs uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Code
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Credit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Program
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr
                                    key={course.id}
                                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <td
                                        scope="row"
                                        className="px-6 py-4 dark:text-white"
                                    >
                                        {course.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {course.course_code}
                                    </td>
                                    <td className="px-6 py-4">
                                        {course.credit}
                                    </td>
                                    <td className="px-6 py-4">
                                        {course.program.name}
                                    </td>
                                    <td className="flex gap-x-2 px-6 py-4">
                                        <Link
                                            href={route('courses.edit', course)}
                                            className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                                        >
                                            Edit
                                        </Link>
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                router.delete(
                                                    route(
                                                        'courses.destroy',
                                                        course,
                                                    ),
                                                );
                                            }}
                                        >
                                            <button
                                                type="submit"
                                                className="font-medium text-red-600 hover:underline dark:text-red-500"
                                            >
                                                Delete
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AuthLayout>
        </>
    );
}
