import { usePage } from '@inertiajs/react';

export default function UpdateInfo() {
    const {
        auth: { user },
    } = usePage().props;

    return (
        <form action="" method="post" className="space-y-4">
            <div className="">
                <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                >
                    Your Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    value={user.name}
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className="">
                <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    name="name"
                    id="name"
                    value={user.email}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="yourname@miit.edu.mm"
                    required
                />
            </div>
            <div className="">
                <button
                    type="submit"
                    className="w-full rounded-lg bg-[#3D2E58] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                >
                    Update
                </button>
            </div>
        </form>
    );
}
