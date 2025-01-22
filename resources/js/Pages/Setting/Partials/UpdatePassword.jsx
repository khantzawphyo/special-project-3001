export default function UpdatePassword() {
    return (
        <form action="" method="post" className="space-y-4">
            <div className="">
                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900"
                >
                    Old Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="********"
                    required
                />
            </div>
            <div className="">
                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900"
                >
                    New Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder="********"
                    required
                />
            </div>
            <div className="">
                <button
                    type="submit"
                    className="w-full rounded-lg bg-[#3D2E58] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none sm:w-auto"
                >
                    Change
                </button>
            </div>
        </form>
    );
}
