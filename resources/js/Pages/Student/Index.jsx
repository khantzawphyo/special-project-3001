import FacultyDeptCard from '@/Components/FacultyDeptCard';
import AuthLayoutTwo from '@/Layouts/AuthLayoutTwo';
import { Head, Link, router } from '@inertiajs/react';
import { StudentModal } from './Partials/StudentModal';
import studentImg from '/public/assets/user.jpg';

export default function Index({ students, noOfStudent }) {
    const transformName = (name) => {
        return '@' + name.split(' ').slice(1).join('_').toLowerCase();
    };

    return (
        <AuthLayoutTwo>
            <Head title="All Students" />
            <div className="mb-5">
                <h2 className="text-2xl font-semibold">
                    Total Students
                    <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                        {noOfStudent}
                    </span>
                </h2>
                <div className="mt-5 grid grid-cols-2 justify-between gap-3 xl:grid-cols-4 xl:gap-x-8">
                    <FacultyDeptCard name="BE-2019" count={120} />
                    <FacultyDeptCard name="BE-2020" count={120} />
                    <FacultyDeptCard name="BE-2021" count={120} />
                    <FacultyDeptCard name="BE-2022" count={120} />
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                    <caption className="space-x-3 bg-white px-6 py-3 text-left text-xl font-semibold">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="">Student Lists</span>
                                <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                    For Academic Years
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-x-3">
                                <a
                                    href={route('students.export-excel')}
                                    className="w-full rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                                >
                                    Export Excel
                                </a>
                                <Link
                                    href={route('students.create')}
                                    className="w-full rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                                >
                                    Create
                                </Link>
                            </div>
                        </div>
                    </caption>
                    <thead className="bg-gray-300 text-[15px] capitalize text-gray-800">
                        <tr className="border border-y-gray-200">
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Roll Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Major
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                                    Gender
                                </th> */}
                            <th scope="col" className="px-6 py-3 text-center">
                                Enrolled Courses
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr
                                key={student.id}
                                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <th
                                    scope="row"
                                    className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
                                >
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={studentImg}
                                        alt="Jese image"
                                    />
                                    <div className="ps-3">
                                        <div className="">{student.name}</div>
                                        <div className="font-normal text-gray-500">
                                            {transformName(student.name)}
                                            {/* {student.email.split('@')[0]} */}
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-1.5 uppercase">
                                    {student.email.split('@')[0]}
                                </td>
                                <td className="px-6 py-1.5">{student.email}</td>
                                <td className="px-6 py-1.5">
                                    {student.major.name}
                                </td>
                                <td className="px-6 py-1.5">
                                    <p className="flex max-w-fit items-center justify-between rounded-full bg-green-100 px-2 py-0.5 pe-2.5 text-green-800">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="icon icon-tabler icons-tabler-filled icon-tabler-point"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                                        </svg>
                                        <span>{student.status}</span>
                                    </p>
                                </td>
                                {/* <td className="px-6 py-1.5">
                                        {student.gender}
                                    </td> */}
                                <td className="px-6 py-1.5 text-center">
                                    <StudentModal courses={student.courses} />
                                </td>
                                <td className="flex justify-start gap-x-4 px-6 py-1.5">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            router.delete(
                                                route(
                                                    'students.destroy',
                                                    student,
                                                ),
                                            );
                                        }}
                                    >
                                        <button
                                            type="submit"
                                            className="font-medium text-red-600 hover:underline dark:text-red-500"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <path d="M4 7l16 0" />
                                                <path d="M10 11l0 6" />
                                                <path d="M14 11l0 6" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </button>
                                    </form>
                                    <Link
                                        href={route('students.edit', student)}
                                        className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                            <path d="M13.5 6.5l4 4" />
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthLayoutTwo>
    );
}
