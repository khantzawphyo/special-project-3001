import { Link } from '@inertiajs/react';

export default function SemesterDropdown({
    setIsDropdownOpen,
    isDropdownOpen,
    selectedSemesterName,
    semesters,
    dropdownRef,
    semesterIdFromUrl,
}) {
    return (
        <div className="relative w-56" ref={dropdownRef}>
            <button
                className="inline-flex w-full items-center justify-between rounded-lg bg-[#3D2E58] px-5 py-2.5 text-center text-sm font-medium text-white"
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                {selectedSemesterName}
                <svg
                    className="ms-3 h-2.5 w-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {/* Semesters Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute right-0 z-40 mt-2 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        {semesters.map((semester) => (
                            <li key={semester.id}>
                                <Link
                                    href={`?semester_id=${semester.id}`}
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                                >
                                    {semester.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
