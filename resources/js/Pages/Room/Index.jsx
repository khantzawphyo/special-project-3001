import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ rooms }) {
    return (
        <>
            <AuthLayout>
                <Head title="All Rooms" />
                <Link
                    href={route('rooms.create')}
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                >
                    Create
                </Link>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                        <thead className="bg-gray-300 text-xs uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Capacity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room) => (
                                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <td
                                        scope="row"
                                        className="px-6 py-4 dark:text-white"
                                    >
                                        {room.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {room.capacity}
                                    </td>
                                    <td className="flex gap-x-2 px-6 py-4">
                                        <Link
                                            href={route('rooms.edit', room)}
                                            className="font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                                        >
                                            Edit
                                        </Link>
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                router.delete(
                                                    route(
                                                        'rooms.destroy',
                                                        room,
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
