import FacultyDeptCard from '@/Components/FacultyDeptCard';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ departments }) {
    return (
        <>
            <AuthLayout>
                <Head title="Departments" />
                <div className="mb-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">
                            Total Departments
                            <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                                10
                            </span>
                        </h2>
                        <Link
                            href={route('faculties.index')}
                            className="text-lg font-semibold text-[#925FE2]"
                        >
                            See all
                        </Link>
                    </div>
                    <div className="mt-5 grid grid-cols-4 justify-between gap-x-8">
                        <FacultyDeptCard name="Computer Science" count={10} />
                        <FacultyDeptCard name="Computing" count={3} />
                        <FacultyDeptCard name="Information Science" count={6} />
                        <FacultyDeptCard name="Technology Science" count={5} />
                    </div>
                </div>

                <Link
                    href={route('departments.create')}
                    className="hidden w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                >
                    Create
                </Link>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                        <caption className="space-x-3 bg-white px-6 py-3 text-left text-xl font-semibold">
                            <div className="flex items-center">
                                <span className="">Department Members</span>
                                <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                    Department of Computer Science
                                </span>
                            </div>
                        </caption>
                        <thead className="bg-gray-50 text-[14px] text-gray-600">
                            <tr className="border border-y-gray-200">
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Department Code
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((department) => (
                                <tr
                                    key={department.id}
                                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <td className="px-6 py-1.5">
                                        {department.name}
                                    </td>
                                    <td className="px-6 py-1.5">
                                        {department.dept_code}
                                    </td>

                                    <td className="flex justify-start gap-x-4 px-6 py-1.5">
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                router.delete(
                                                    route(
                                                        'departments.destroy',
                                                        department,
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
                                            href={route(
                                                'departments.edit',
                                                department,
                                            )}
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
            </AuthLayout>
        </>
    );
}
