import { Badge } from '@/shadcn/ui/badge';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/shadcn/ui/dialog';
import { Eye } from 'lucide-react';

export default function FacultyModal({ faculty }) {
    return (
        <Dialog>
            <DialogTrigger className="inline-block lg:hidden" asChild>
                <Eye className="text-green-500" />
            </DialogTrigger>
            <DialogContent className="rounded-lg p-5 shadow-md dark:bg-main-purple dark:text-white">
                <DialogTitle>
                    <DialogDescription className="text-2xl font-bold text-gray-800 dark:text-white">
                        {faculty.name}
                    </DialogDescription>
                </DialogTitle>
                <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Rank
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-white">
                        {faculty.rank.title}
                    </p>
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Department
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-white">
                        {faculty.department.name}
                    </p>
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Email
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-white">
                        {faculty.email}
                    </p>
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Phone Number
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-white">
                        {faculty.phone_number}
                    </p>
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        Courses
                    </p>
                    {faculty.courses.lenght > 0 ? (
                        faculty.courses.map((course) => (
                            <Badge className="rounded-full" key={course.id}>
                                {course.course_code}
                            </Badge>
                        ))
                    ) : (
                        <Badge className="rounded-full">N/A</Badge>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
