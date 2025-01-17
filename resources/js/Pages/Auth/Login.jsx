import { Head, Link, useForm } from '@inertiajs/react';
import mainBg from '/public/assets/academic-bg.jpg';
import bgImage from '/public/assets/bg.jpg';
import lineStroke from '/public/assets/line-stroke.png';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('sign-in'), {
            preserveState: true,
            onError: () => reset('password'),
        });
    };

    return (
        <div
            className="grid grid-cols-1 bg-cover bg-scroll lg:grid-cols-2"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <Head title="Sign In" />
            <div className="hidden min-h-screen lg:block">
                <img
                    src={mainBg}
                    alt=""
                    className="h-full w-full rounded-r-3xl object-fill"
                />
            </div>
            <div className="mx-auto min-h-screen pt-48 lg:w-auto 2xl:w-full 2xl:px-20 2xl:pe-80">
                <div className="h-full w-auto space-y-4 rounded-2xl px-10">
                    <img
                        src="https://lms.miit.edu.mm/pluginfile.php/1/core_admin/logo/0x200/1684573304/miit_logo_wordmark_small.png"
                        alt=""
                        className="w-48"
                    />
                    <h2 className="w-full text-3xl font-bold">Welcome Back!</h2>
                    <p className="w-full text-gray-700 md:w-96">
                        To use Exam Time-Table generator,
                        <br />
                        Please login in to your account with university email
                        address.
                    </p>

                    <form
                        method="post"
                        onSubmit={submit}
                        className="w-full space-y-8"
                    >
                        <div className="">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium dark:text-white"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={handleDataChange}
                                    name="email"
                                    className="block w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="user@miit.edu.mm"
                                />
                                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
                                    <svg
                                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 16"
                                    >
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </div>
                            </div>
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="">
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium dark:text-white"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    value={data.password}
                                    onChange={handleDataChange}
                                    name="password"
                                    className="block w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="********"
                                />
                                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="gray"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                                        <path d="M3 3l18 18" />
                                    </svg>
                                </div>
                            </div>
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col space-y-3">
                            <button
                                className="w-full rounded-md bg-gradient-to-r from-[#6D5394] to-[#3B2C55] py-2 text-center font-semibold text-white hover:bg-[#4a3d70]"
                                disabled={processing}
                            >
                                Sign In
                            </button>
                            <div className="flex items-start justify-center gap-x-1 text-center">
                                <span className="text-gray-600">
                                    Don't have an account?
                                </span>
                                <p className="flex flex-col">
                                    <Link
                                        href={route('sign-up')}
                                        className="font-semibold text-[#3B2C55]"
                                    >
                                        Sign Up Here
                                    </Link>
                                    <img
                                        src={lineStroke}
                                        alt=""
                                        className="w-28"
                                    />
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
