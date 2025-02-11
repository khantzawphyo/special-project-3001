import ErrorText from '@/Components/ErrorText';
import AuthLayoutTwo from '@/Layouts/AuthLayoutTwo';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ roomTypes }) {
    const { data, setData, errors, post } = useForm({
        name: '',
        room_type_id: '1',
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('rooms.store', data), {
            preserveState: true,
        });
    };

    return (
        <AuthLayoutTwo>
            <Head title="Create Room" />

            <form method="post" onSubmit={submit} className="max-w-sm">
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
                    {errors.name && <ErrorText errorName={errors.name} />}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="room_type_id"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Room Type
                    </label>
                    <select
                        id="room_type_id"
                        name="room_type_id"
                        value={data.room_type_id}
                        onChange={handleDataChange}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    >
                        {roomTypes.map((roomType) => (
                            <option key={roomType.id} value={roomType.id}>
                                {roomType.type}
                            </option>
                        ))}
                    </select>
                    {errors.room_type_id && (
                        <ErrorText errorName={errors.room_type_id} />
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                >
                    Create
                </button>
            </form>
        </AuthLayoutTwo>
    );
}
