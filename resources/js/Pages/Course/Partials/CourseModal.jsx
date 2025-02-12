import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/shadcn/ui/dialog';
import { Eye } from 'lucide-react';

export default function CourseModal({ course }) {
    return (
        <Dialog>
            <DialogTrigger className="inline-block lg:hidden" asChild>
                <Eye className="text-green-500" />
            </DialogTrigger>
            <DialogContent className="rounded-lg p-5 shadow-md dark:bg-main-purple dark:text-white">
                <DialogTitle>
                    <DialogDescription className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                        {course.title}
                    </DialogDescription>
                </DialogTitle>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Course Code
                        </p>
                        <p className="text-lg font-medium text-gray-800 dark:text-white">
                            {course.course_code}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Course Type
                        </p>
                        <span
                            className={`me-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                course.course_type.name === 'Core'
                                    ? 'bg-red-100 text-red-800'
                                    : course.course_type.name === 'Elective'
                                      ? 'bg-green-100 text-green-800'
                                      : course.course_type.name === 'Lab'
                                        ? 'bg-orange-100 text-orange-800'
                                        : ''
                            }`}
                        >
                            {course.course_type.name}
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Program
                        </p>
                        <p className="text-lg font-medium text-gray-800 dark:text-white">
                            {course.program.name}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Credit
                        </p>
                        <p className="text-lg font-medium text-gray-800 dark:text-white">
                            {course.credit}
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
