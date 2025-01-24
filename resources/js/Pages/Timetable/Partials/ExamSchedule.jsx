import { router, useForm } from '@inertiajs/react';

export default function ExamSchedule({
    courses,
    semesterIdFromUrl,
    examPeriods,
}) {
    const { data: examData, setData: setExamData } = useForm({
        semester_id: semesterIdFromUrl,
        exam_date: '',
        exam_time_id: 1,
    });

    const { data: courseData, setData: setCourseData } = useForm(
        courses.map((course) => ({
            course_id: course.id,
            no_students: '',
            program_id: course.program.id,
        })),
    );

    const handleCourseChange = (e, index) => {
        const updatedCourseData = courseData.map((course, i) => {
            const { name, value } = e.target;
            console.log(name);
            return i === index ? { ...course, [name]: value } : course;
        });

        setCourseData(updatedCourseData);
    };

    const handleExamDataChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setExamData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const calculateEndDate = () => {
        if (!examData.exam_date) return '';

        const startDate = new Date(examData.exam_date);
        startDate.setDate(startDate.getDate() + courses.length - 1);
        // Format as "YYYY-MM-DD"
        return startDate.toISOString().split('T')[0];
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedCourseData = courseData.map((course, index) => {
            const examDate = new Date(examData.exam_date);
            examDate.setDate(examDate.getDate() + index);

            return {
                ...course,
                exam_date: examDate.toISOString().split('T')[0], // Format as "YYYY-MM-DD"
            };
        });

        const mergedData = updatedCourseData.map((course) => ({
            ...examData,
            ...course,
        }));

        router.post(route('timetables.store'), mergedData, {
            preserveState: true,
        });
    };

    return (
        <div className="mt-5 grid grid-cols-7 gap-x-4">
            <div className="col-span-2">
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="overflow-hidden rounded-lg border text-left text-sm text-gray-500 shadow-md rtl:text-right"
                >
                    <div className="flex items-start justify-center bg-gray-300 p-3 text-center text-[15px] font-semibold capitalize text-gray-900">
                        Exam Date and Time
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Exam Start Date
                                </label>
                                <input
                                    value={examData.exam_date}
                                    onChange={handleExamDataChange}
                                    type="date"
                                    name="exam_date"
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
                                    name="exam_date"
                                    // value={examData.exam_date}
                                    // onChange={handleExamDataChange}
                                    value={calculateEndDate()}
                                    disabled
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="exam_time_id"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Exam Time ( AM / PM )
                                </label>
                                <select
                                    id="exam_time_id"
                                    name="exam_time_id"
                                    value={examData.exam_time}
                                    onChange={handleExamDataChange}
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                >
                                    {examPeriods.map((period) => (
                                        <option
                                            key={period.id}
                                            value={period.id}
                                        >
                                            {period.type}
                                        </option>
                                    ))}
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
                    {courses.map((course, index) => (
                        <tr
                            key={course.id}
                            className="border-b-2 border-gray-400 bg-white dark:bg-gray-800"
                        >
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
                                    name="no_students"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm leading-none text-gray-900"
                                    onChange={(e) =>
                                        handleCourseChange(e, index)
                                    }
                                    value={courseData[index].no_students}
                                    required
                                />
                            </td>
                            <td
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                <input
                                    type="text"
                                    name="program_id"
                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm leading-none text-gray-900"
                                    placeholder={course.program.name}
                                    onChange={handleCourseChange}
                                    value={course.program.name}
                                    disabled
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
