import { Head, Link, useForm } from '@inertiajs/react';
import bgImage from '/public/assets/bg.jpg';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('sign-up'), {
            preserveState: true,
            onError: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div
            className="grid grid-cols-1 bg-cover bg-scroll lg:grid-cols-2"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <Head title="Sign Up" />
            <div className="hidden min-h-screen lg:block">
                <img
                    src="https://images.unsplash.com/photo-1566811850669-887f44a89c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlhbm1hciUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="h-screen w-full object-fill"
                />
            </div>
            <div className="mx-auto min-h-screen pt-28 lg:w-auto 2xl:w-full 2xl:px-20 2xl:pe-80">
                <div className="h-full w-auto space-y-4 rounded-2xl px-10">
                    <img
                        src="https://lms.miit.edu.mm/pluginfile.php/1/core_admin/logo/0x200/1684573304/miit_logo_wordmark_small.png"
                        alt=""
                        className="w-48"
                    />
                    <h2 className="w-full text-3xl font-bold">Hi, Welcome!</h2>
                    <p className="w-full text-gray-600 md:w-96">
                        Please sign up to use Exam Time-Table generator. Provide
                        your credentials below.
                    </p>

                    <form onSubmit={submit} className="w-full space-y-8">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="font-bold">
                                Your Name{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full rounded-md p-2"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Doe"
                                    value={data.name}
                                    onChange={handleDataChange}
                                />
                                <div className="absolute right-2 top-1 h-8 w-8 rounded-full bg-red-500"></div>
                            </div>
                            {errors.name && (
                                <span className="text-red-500">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="font-bold">
                                Email Address
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
                                Password (at least 8 characters)
                                <span className="text-red-500">*</span>
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
                            <label
                                htmlFor="password_confirmation"
                                className="font-bold"
                            >
                                Confirm Password
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full rounded-md p-2"
                                    type="password"
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    placeholder="********"
                                    value={data.password_confirmation}
                                    onChange={handleDataChange}
                                />
                                <div className="absolute right-2 top-1 h-8 w-8 rounded-full bg-red-500"></div>
                            </div>
                            {errors.password_confirmation && (
                                <span className="text-red-500">
                                    {errors.password_confirmation}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <button
                                type="submit"
                                className="w-full rounded-md bg-[#5D4C8C] py-2 text-center text-white hover:bg-[#4a3d70]"
                                disabled={processing}
                            >
                                Sign Up
                            </button>
                            <p className="space-x-4 text-center">
                                <span className="text-gray-600">
                                    Already have an account?
                                </span>
                                <Link
                                    href={route('sign-in')}
                                    className="font-bold text-[#5D4C8C] hover:underline"
                                >
                                    Sign In Here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
