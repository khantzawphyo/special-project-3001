import AuthLayout from '@/Layouts/AuthLayout';

export default function ExamTimetable({ exams, semester }) {
    console.log(exams);

    return (
        <AuthLayout>
            <div className="mt-5">
                <table className="overflow-hidden rounded-lg text-left text-sm text-gray-500 shadow-md rtl:text-right">
                    <thead className="bg-gray-300 text-[15px] capitalize text-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Batch
                            </th>
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
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Exam Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Program
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map((exam, index) => (
                            <tr
                                key={exam.id}
                                className="border-b-2 border-gray-400 bg-white dark:bg-gray-800"
                            >
                                <td
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                >
                                    BE-2019
                                </td>
                                <td
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                >
                                    {exam.course_code}
                                </td>
                                <td
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                >
                                    {exam.title}
                                </td>
                                <td
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                >
                                    <span
                                        className={`me-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                            exam.course_type_id == '1'
                                                ? 'bg-red-100 text-red-800'
                                                : exam.course_type_id == '2'
                                                  ? 'bg-green-100 text-green-800'
                                                  : exam.course_type_id == '3'
                                                    ? 'bg-orange-100 text-orange-800'
                                                    : ''
                                        }`}
                                    >
                                        {exam.course_type_id == '1'
                                            ? 'Core'
                                            : exam.course_type_id == '2'
                                              ? 'Elective'
                                              : exam.course_type_id == '3'
                                                ? 'Lab'
                                                : ''}
                                    </span>
                                </td>
                                <td
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                >
                                    {exam.exam_date}
                                </td>
                                <td
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                >
                                    {exam.exam_time_id == 1 ? 'AM' : 'PM'}
                                </td>
                                <td
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                                >
                                    {exam.title}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthLayout>
    );
}
