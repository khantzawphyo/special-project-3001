import AuthLayout from '@/Layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, errors, post } = useForm({
        name: '',
        dept_code: '',
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('departments.store', data), {
            preserveState: true,
        });
    };

    return (
        <>
            <AuthLayout>
                <Head title="Create Department" />

                <form onSubmit={submit} className="max-w-sm">
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Department Name
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
                            htmlFor="dept_code"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Department Code
                        </label>
                        <input
                            type="text"
                            name="dept_code"
                            id="dept_code"
                            value={data.dept_code}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            required=""
                        />
                        {errors.dept_code && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span class="font-medium">
                                    {errors.dept_code}
                                </span>
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                    >
                        Create
                    </button>
                </form>
            </AuthLayout>
        </>
    );
}
