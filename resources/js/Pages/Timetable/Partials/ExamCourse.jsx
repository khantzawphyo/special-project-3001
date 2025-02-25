import CourseType from '@/Pages/Course/Partials/CourseType';
import { Input } from '@/shadcn/ui/input';

export default function ExamCourse({
    courses,
    courseData,
    handleCourseChange,
}) {
    return (
        <div className="overflow-x-auto rounded-lg border border-white lg:col-span-3 xl:col-span-4">
            <table className="w-full rounded-lg text-left text-sm text-gray-500 shadow-md rtl:text-right">
                <thead className="bg-gray-300 text-[15px] capitalize text-gray-800">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Course Code
                        </th>
                        <th
                            scope="col"
                            className="hidden px-6 py-3 lg:table-cell"
                        >
                            Course Name
                        </th>
                        <th
                            scope="col"
                            className="hidden px-6 py-3 sm:table-cell md:hidden lg:table-cell"
                        >
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
                            className="border bg-white dark:bg-main-purple"
                        >
                            <td
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                {course.course_code}
                            </td>
                            <td
                                scope="row"
                                className="hidden whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white lg:table-cell"
                            >
                                {course.title}
                            </td>
                            <td
                                scope="row"
                                className="hidden whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white sm:table-cell md:hidden lg:table-cell"
                            >
                                <CourseType course={course} />
                            </td>
                            <td
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                            >
                                <Input
                                    type="number"
                                    name="no_students"
                                    min="0"
                                    max={
                                        course.program.id == 1 ||
                                        course.program.id == 2
                                            ? 60
                                            : 120
                                    }
                                    className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm leading-none text-gray-900"
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
                                {course.program.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
