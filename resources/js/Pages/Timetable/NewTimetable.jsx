import AuthLayout from '@/Layouts/AuthLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import ExamSchedule from './Partials/ExamSchedule';
import SemesterDropdown from './Partials/SemesterDropdown';

export default function NewTimetable({ semesters, courses, examPeriods }) {
    const urlParams = new URLSearchParams(window.location.search);
    const semesterIdFromUrl = urlParams.get('semester_id') || 0;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [selectedSemesterName, setSelectedSemesterName] =
        useState('Select a Semester');

    useEffect(() => {
        const selectedSemester = semesters.find(
            (semester) => semester.id == semesterIdFromUrl,
        );
        if (selectedSemester) {
            setSelectedSemesterName(selectedSemester.name);
        } else {
            setSelectedSemesterName('Select a Semester');
        }
    }, [semesterIdFromUrl]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <AuthLayout>
            <Head title="Create Exam Schedule" />
            <div className="rounded-xl border bg-white px-5 py-5 shadow-md">
                {/* Semester Selection */}
                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">Create Exam Schedule</p>
                    <SemesterDropdown
                        dropdownRef={dropdownRef}
                        semesters={semesters}
                        semesterIdFromUrl={semesterIdFromUrl}
                        selectedSemesterName={selectedSemesterName}
                        setIsDropdownOpen={setIsDropdownOpen}
                        isDropdownOpen={isDropdownOpen}
                    />
                </div>

                {courses.length > 0 && (
                    <ExamSchedule
                        semesterIdFromUrl={semesterIdFromUrl}
                        examPeriods={examPeriods}
                        courses={courses}
                    />
                )}
            </div>
        </AuthLayout>
    );
}
