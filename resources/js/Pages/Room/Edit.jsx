import AuthLayout from '@/Layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ room }) {
    const { data, setData, errors, patch } = useForm(room);

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        patch(route('rooms.update', data), {
            preserveState: true,
        });
    };

    return (
        <>
            <AuthLayout>
                <Head title="Edit Room" />

                <form onSubmit={submit} className="max-w-sm">
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Room name
                        </label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            required=""
                        />
                        {errors.name && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span class="font-medium">{errors.name}</span>
                            </p>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="capacity"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Capacity
                        </label>
                        <input
                            type="number"
                            name="capacity"
                            id="capacity"
                            value={data.capacity}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            required=""
                        />
                        {errors.capacity && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span class="font-medium">
                                    {errors.capacity}
                                </span>
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                    >
                        Update
                    </button>
                </form>
            </AuthLayout>
        </>
    );
}
