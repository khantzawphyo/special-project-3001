import { Modal } from 'flowbite-react';
import { useState } from 'react';

export function StudentModal({ courses }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button
                className="bg-primary-purple w-full rounded-lg px-2 py-1.5 text-center text-sm text-white focus:outline-none sm:w-auto"
                onClick={() => setOpenModal(true)}
            >
                View
            </button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header>
                    Enrolled Courses{' '}
                    <span className="me-2 rounded-full bg-[#925FE2]/40 px-2.5 py-0.5 text-xs font-semibold text-[#3D2E58]">
                        {courses.length}
                    </span>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-wrap gap-x-0 gap-y-2 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {courses.map((course) => (
                            <span
                                key={course.id}
                                className="bg-primary-purple/40 text-primary-purple me-2 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                            >
                                {course.course_code}
                            </span>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
