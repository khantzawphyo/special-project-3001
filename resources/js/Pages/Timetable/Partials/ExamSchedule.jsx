export default function ExamSchedule({ courses }) {
    return (
        <div className="mt-5 grid grid-cols-7 gap-x-4">
            <div className="col-span-2">
                <form
                    action=""
                    method="post"
                    className="overflow-hidden rounded-lg border text-left text-sm text-gray-500 shadow-md rtl:text-right"
                >
                    <div className="flex items-start justify-center bg-gray-300 p-3 text-center text-[15px] font-semibold capitalize text-gray-900">
                        Exam Date and Time
                    </div>
                    <div className="p-4">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Exam Start Date
                                </label>
                                <input
                                    type="date"
                                    min="2024-12-01"
                                    max="2025-04-30"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="John"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Exam End Date
                                </label>
                                <input
                                    type="date"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="countries"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Exam Time ( AM / PM )
                                </label>
                                <select
                                    id="exam_time"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-[#3D2E58] px-5 py-2.5 text-center text-sm font-medium text-white"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>

            <table className="col-span-5 overflow-hidden rounded-lg text-left text-sm text-gray-500 shadow-md rtl:text-right">
                <thead className="bg-gray-300 text-[15px] capitalize text-gray-800">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Course Code
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Course Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Course Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            No of Students
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Program
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                            <td
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                {course.course_code}
                            </td>
                            <td
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                {course.title}
                            </td>
                            <td
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                <span
                                    className={`me-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                        course.course_type.name === 'Core'
                                            ? 'bg-red-100 text-red-800'
                                            : course.course_type.name ===
                                                'Elective'
                                              ? 'bg-green-100 text-green-800'
                                              : course.course_type.name ===
                                                  'Lab'
                                                ? 'bg-orange-100 text-orange-800'
                                                : ''
                                    }`}
                                >
                                    {course.course_type.name}
                                </span>
                            </td>

                            <td
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                <input
                                    type="number"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm leading-none text-gray-900"
                                    value="120"
                                    required
                                />
                            </td>
                            <td
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                {course.program.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
