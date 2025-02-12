import logo from '/public/assets/miit_logo.png';

export default function CourseCard({ name, count }) {
    return (
        <div className="min-w-full gap-x-5 rounded-3xl border-2 dark:border-white shadow-md border-primary-purple/70 bg-[#925FE2]/25 p-5 md:w-full md:max-w-xs md:py-8">
            <div className="mx-auto flex max-w-[180px] items-center gap-x-3 md:max-w-full">
                <div className="rounded-full bg-[#925FE2]/60 p-1 md:p-3 lg:block">
                    <img
                        src={logo}
                        alt=""
                        className="lg:h-18 h-14 w-12 lg:w-16"
                    />
                </div>
                <div className="text-left">
                    <h2 className="text-md font-semibold lg:text-xl">
                        {name}
                    </h2>
                    <p className="text-xl font-bold lg:text-2xl">{count}</p>
                </div>
            </div>
        </div>
    );
}
