import { Head, Link, useForm } from '@inertiajs/react';
import mainBg from '/public/assets/academic-bg.jpg';
import bgImage from '/public/assets/bg.jpg';

export default function Login({ status, canResetPassword }) {
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
                    <p className="w-full text-gray-600 md:w-96">
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
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="font-bold">
                                Email Address{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full rounded-md p-2"
                                    type="email"
                                    name="email"
                                    placeholder="@miit.edu.mm"
                                    id="email"
                                    value={data.email}
                                    onChange={handleDataChange}
                                />
                                <div className="absolute right-2 top-1 h-8 w-8 rounded-full bg-red-500"></div>
                            </div>
                            {errors.email && (
                                <span className="text-red-500">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="password" className="font-bold">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full rounded-md p-2"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="********"
                                    value={data.password}
                                    onChange={handleDataChange}
                                />
                                <div className="absolute right-2 top-1 h-8 w-8 rounded-full bg-red-500"></div>
                            </div>
                            {errors.password && (
                                <span className="text-red-500">
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <button
                                className="w-full rounded-md bg-[#5D4C8C] py-2 text-center text-white hover:bg-[#4a3d70]"
                                disabled={processing}
                            >
                                Sign In
                            </button>
                            <p className="space-x-4 text-center">
                                <span className="text-gray-600">
                                    Don't have an account?
                                </span>
                                <Link
                                    href={route('sign-up')}
                                    className="font-bold text-[#5D4C8C] hover:underline"
                                >
                                    Sign Up Here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
