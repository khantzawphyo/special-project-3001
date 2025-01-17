import OverviewCard from '@/Components/OverviewCard';
import OverviewFaculty from '@/Components/OverviewFaculty';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link } from '@inertiajs/react';
import StudentImg from '/public/assets/student.png';

export default function Dashboard({ faculties }) {
    return (
        <>
            <AuthLayout>
                <Head title="Dashboard" />
                <div className="grid grid-cols-1 items-center rounded-3xl bg-gradient-to-l from-[#6D5394] to-[#3B2C55] p-8 pt-10 text-white lg:grid-cols-3 lg:pe-10 lg:ps-16">
                    <div className="col-span-2 space-y-12">
                        <p className="font-semibold">January 24, 2025</p>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold lg:text-4xl">
                                Welcome Back, Daw Win Aye!
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sed, cupiditate.
                            </p>
                        </div>
                    </div>
                    <img
                        className="hidden xl:col-span-1 xl:block"
                        src={StudentImg}
                        alt="student image"
                    />
                </div>

                <div className="mb-4 grid grid-cols-1 gap-x-16 rounded-3xl xl:grid-cols-12">
                    <div className="mb-12 rounded-3xl lg:col-span-8 xl:mb-0">
                        <h2 className="mb-4 text-xl font-bold">Overview</h2>
                        <div className="grid grid-cols-3 gap-x-3 xl:gap-x-10">
                            <OverviewCard
                                count={96}
                                icon={
                                    <svg
                                        className="mx-auto"
                                        width={90}
                                        height={80}
                                        viewBox="0 0 92 88"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M82.2672 56.4944H47.738C55.5771 55.8858 61.7342 49.8043 61.7342 42.3917C61.7342 34.5753 54.8879 28.2388 46.4426 28.2388H35.1606C37.7342 25.0349 39.257 21.0649 39.257 16.7657C39.257 10.0627 35.5552 4.15986 29.9404 0.713013H82.2672C87.2694 0.713013 91.3234 4.46575 91.3234 9.09497V48.1125C91.3234 52.7417 87.2694 56.4944 82.2672 56.4944ZM18.4593 28.2468C25.3103 28.2468 30.8642 23.1066 30.8642 16.7657C30.8642 10.4249 25.3103 5.2846 18.4593 5.2846C11.6083 5.2846 6.05443 10.4249 6.05443 16.7657C6.05443 23.1066 11.6083 28.2468 18.4593 28.2468ZM53.3413 42.3917C53.3413 38.8654 50.2526 36.0067 46.4426 36.0067H18.4618C8.63903 36.0067 0.676117 43.3766 0.676117 52.4679V59.9595C0.676117 63.2666 3.57283 65.9475 7.14611 65.9475H8.29855L10.1918 82.1661C10.5602 85.3218 13.4383 87.713 16.8673 87.713H20.2397C23.5903 87.713 26.428 85.4268 26.8899 82.3557L31.9395 48.7767H46.4426C50.2526 48.7767 53.3413 45.918 53.3413 42.3917Z"
                                            fill="url(#paint0_linear_327_931)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_327_931"
                                                x1="45.9998"
                                                y1="0.713013"
                                                x2="45.9998"
                                                y2="87.713"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#3B2C55" />
                                                <stop
                                                    offset={1}
                                                    stopColor="#6949A0"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                }
                                title="faculty"
                            />

                            <OverviewCard
                                count={400}
                                icon={
                                    <svg
                                        width="90"
                                        height="80"
                                        viewBox="0 0 94 78"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M53.7143 18.9645C53.7143 29.2606 44.696 37.6073 33.5714 37.6073C22.4469 37.6073 13.4286 29.2606 13.4286 18.9645C13.4286 8.66833 22.4469 0.321609 33.5714 0.321609C44.696 0.321609 53.7143 8.66833 53.7143 18.9645ZM33.5714 43.8214C15.0305 43.8214 0 57.7327 0 74.8929C0 76.6086 1.50305 78 3.35714 78H63.7857C65.6398 78 67.1429 76.6086 67.1429 74.8929C67.1429 57.7327 52.1124 43.8214 33.5714 43.8214ZM90.6435 78H75.0496C75.3665 77.0157 75.5364 75.9723 75.5364 74.8929C75.5364 62.2089 68.9671 50.9453 58.8059 43.8571C59.3437 43.8334 59.8849 43.8214 60.4291 43.8214C78.9701 43.8214 94.0007 57.7327 94.0007 74.8929C94.0007 76.6086 92.4973 78 90.6435 78ZM60.4291 37.6073C58.4032 37.6073 56.4472 37.3305 54.6028 36.8155C59.2631 32.1148 62.1077 25.8471 62.1077 18.9645C62.1077 12.0818 59.2631 5.81411 54.6027 1.11337C56.4472 0.598393 58.4032 0.321609 60.4291 0.321609C71.5535 0.321609 80.5721 8.66833 80.5721 18.9645C80.5721 29.2606 71.5535 37.6073 60.4291 37.6073Z"
                                            fill="url(#paint0_linear_327_156)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_327_156"
                                                x1="47.0003"
                                                y1="0.321609"
                                                x2="47.0003"
                                                y2="78"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#3B2C55" />
                                                <stop
                                                    offset="1"
                                                    stopColor="#6949A0"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                }
                                title="Students"
                            />

                            <OverviewCard
                                count={100}
                                icon={
                                    <svg
                                        width={90}
                                        height={80}
                                        viewBox="0 0 94 87"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_54_1748)">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 33.3604C2.00952 15.3727 17.8227 1.17684 37.4681 0.0016515C37.2392 0.171724 37.0283 0.365033 36.8398 0.579642C28.5795 9.98114 23.4449 21.3679 22.0096 33.3604H0ZM24.5203 55.3635C24.5203 55.6365 24.5313 55.9079 24.5531 56.1771V71.6874C11.2356 66.5289 1.54402 54.9478 3.24667e-05 41.1283H22.0097C22.501 45.2327 23.4255 49.2663 24.7605 53.1735C24.6025 53.8852 24.5203 54.6182 24.5203 55.3635ZM30.4612 41.1283H42.2137L31.5989 45.3849C31.4846 45.4307 31.3714 45.4781 31.2593 45.527C30.93 44.0742 30.6635 42.6068 30.4612 41.1283ZM80.2169 33.3604H58.1816C56.7463 21.3679 51.6117 9.98114 43.3514 0.579642C43.1623 0.364338 42.9506 0.170472 42.7209 0C62.3792 1.16347 78.206 15.3642 80.2169 33.3604ZM30.4612 33.3604H49.73C48.564 24.8356 45.2623 16.6836 40.0956 9.5549C34.9289 16.6836 31.6273 24.8356 30.4612 33.3604ZM64.7939 41.6981C63.8641 41.3252 62.8089 41.3252 61.8791 41.6981L35.1995 52.3969C34.9176 52.51 34.6565 52.6533 34.4201 52.8219C33.0201 53.5476 32.0739 54.9338 32.0739 56.5245V75.3445C32.0739 77.6866 34.1254 79.5851 36.6561 79.5851C39.1868 79.5851 41.2383 77.6866 41.2383 75.3445V61.0447L61.8791 69.3222C62.8089 69.6951 63.8641 69.6951 64.7939 69.3222L91.4734 58.6231C92.8143 58.0855 93.6817 56.8623 93.6817 55.51C93.6817 54.1577 92.8143 52.9345 91.4734 52.3969L64.7939 41.6981ZM45.1017 69.7224L58.6904 75.1717C61.6534 76.3599 65.0157 76.3599 67.9788 75.1717L81.5672 69.7224L81.5692 78.1651C81.5692 78.9065 81.3073 79.6274 80.8225 80.2183L77.9065 78.1676C80.8225 80.2183 80.8239 80.2171 80.8225 80.2183L80.8178 80.2239L80.8118 80.2308L80.7997 80.2457L80.7702 80.2805L80.6889 80.3737C80.6258 80.4458 80.5426 80.5371 80.4398 80.6446C80.235 80.8597 79.9497 81.1405 79.5817 81.4649C78.8465 82.1137 77.7736 82.9402 76.3387 83.7549C73.4462 85.398 69.1471 86.9534 63.3334 86.9534C57.5193 86.9534 53.2248 85.3979 50.3361 83.753C48.9036 82.9377 47.8332 82.11 47.0998 81.4606C46.7327 81.1356 46.4484 80.8541 46.2437 80.6391C46.1413 80.5309 46.0586 80.4396 45.9951 80.3675L45.9144 80.2743L45.8847 80.2389L45.8725 80.2239L45.867 80.2171C45.8658 80.2159 45.862 80.2109 48.7858 78.1664L45.862 80.2109C45.3827 79.6243 45.1226 78.909 45.1209 78.1726L45.1017 69.7224Z"
                                                fill="url(#paint0_linear_54_1748)"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_54_1748"
                                                x1="46.8409"
                                                y1={0}
                                                x2="46.8409"
                                                y2="86.9534"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#3B2C55" />
                                                <stop
                                                    offset={1}
                                                    stopColor="#6949A0"
                                                />
                                            </linearGradient>
                                            <clipPath id="clip0_54_1748">
                                                <rect
                                                    width={94}
                                                    height={87}
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                                title="Courses"
                            />
                        </div>
                    </div>
                    <div className="mb-4 rounded-3xl lg:col-span-4 xl:mb-0">
                        <div className="mb-3 flex justify-between font-semibold">
                            <p className="text-xl font-bold">Faculty</p>
                            <Link
                                href={route('faculties.index')}
                                className="text-lg font-semibold text-[#925FE2]"
                            >
                                See all
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-4 lg:gap-6">
                            {faculties.data.map((faculty) => (
                                <OverviewFaculty key={faculty.id} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-4 grid grid-cols-6 gap-8 rounded-3xl">
                    <div className="col-span-4 h-48 rounded-3xl">
                        <p className="mb-2 text-xl font-bold">
                            Exam TimeTables
                        </p>
                        <div className="grid h-32 grid-cols-10 gap-x-3 lg:h-48 lg:gap-x-10">
                            <div className="col-span-5 h-full rounded-3xl border-4 border-purple-600/80"></div>
                            <div className="col-span-5 h-full rounded-3xl border-4 border-purple-600/80"></div>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
}
