import AuthLayout from '@/Layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ departments, roles }) {
    const { data, setData, errors, post } = useForm({
        name: '',
        gender: '',
        email: '',
        phone_number: '',
        department_id: 1,
        role_id: 1,
        password: '',
        password_confirmation: '',
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('faculties.store', data), {
            preserveState: true,
        });
    };

    return (
        <>
            <AuthLayout>
                <Head title="Create Faculty" />

                <form
                    onSubmit={submit}
                    className="max-w-md rounded-xl bg-white p-5"
                >
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Name
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
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            required=""
                        />
                        {errors.email && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span class="font-medium">{errors.email}</span>
                            </p>
                        )}
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="phone_number"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Phone Number
                        </label>
                        <input
                            type="string"
                            name="phone_number"
                            id="phone_number"
                            value={data.phone_number}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            required=""
                        />
                        {errors.phone_number && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span class="font-medium">
                                    {errors.phone_number}
                                </span>
                            </p>
                        )}
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="gender"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={data.gender}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="role_id"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select Role
                        </label>
                        <select
                            id="role_id"
                            name="role_id"
                            value={data.role_id}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        >
                            {roles.map((role) => (
                                <option value={role.id}>{role.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="department_id"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select Department
                        </label>
                        <select
                            id="department_id"
                            name="department_id"
                            value={data.department_id}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        >
                            {departments.map((dept) => (
                                <option value={dept.id}>{dept.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            required=""
                        />
                        {errors.password && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span class="font-medium">
                                    {errors.password}
                                </span>
                            </p>
                        )}
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="password_confirmation"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={handleDataChange}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            required=""
                        />
                        {errors.password_confirmation && (
                            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span class="font-medium">
                                    {errors.password_confirmation}
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
