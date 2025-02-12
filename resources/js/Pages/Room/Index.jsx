import TableCaption from '@/Components/TableCaption';
import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import TableWrapper from '@/Components/TableWrapper';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, router } from '@inertiajs/react';
import RoomCard from './Partials/RoomCard';

export default function Index({ rooms, noOfTypeA, noOfTypeB }) {
    return (
        <AuthLayout>
            <Head title="All Rooms" />
            <div className="mb-5 mt-10">
                <h2 className="text-xl font-semibold md:text-2xl">
                    Total Rooms
                    <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-base font-medium text-blue-800">
                        {noOfTypeA + noOfTypeB}
                    </span>
                </h2>

                <div className="mt-5 grid gap-x-4 gap-y-3 md:grid-cols-3 2xl:grid-cols-5">
                    <RoomCard name="Type A" count={noOfTypeA} />
                    <RoomCard name="Type B" count={noOfTypeB} />
                </div>
            </div>

            <TableWrapper>
                <table className="w-full bg-white text-left text-sm dark:text-gray-400 rtl:text-right">
                    <TableCaption>
                        <div className="flex items-center">
                            <span className="">Room Lists</span>
                            <span className="ms-2 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                                Rooms Information
                            </span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a
                                href={route('rooms.export-excel')}
                                className="w-full rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Export Excel
                            </a>
                            <Link
                                href={route('rooms.create')}
                                className="w-full rounded-lg bg-primary-purple px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                            >
                                Create
                            </Link>
                        </div>
                    </TableCaption>

                    <TableHead>
                        <tr className="">
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th
                                scope="col"
                                className="hidden px-6 py-3 sm:block"
                            >
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Capacity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </TableHead>

                    <tbody>
                        {rooms.map((room) => (
                            <TableRow key={room.id}>
                                <td className="px-6 py-1.5">{room.name}</td>
                                <td className="hidden px-6 py-1.5 sm:block">
                                    {room.room_type.type}
                                </td>
                                <td className="px-6 py-1.5">
                                    {room.room_type.capacity}
                                </td>
                                <td className="flex justify-start gap-x-4 px-6 py-1.5">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            router.delete(
                                                route('rooms.destroy', room),
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
                                        href={route('rooms.edit', room)}
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
                            </TableRow>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>
        </AuthLayout>
    );
}
