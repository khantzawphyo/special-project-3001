import logo from '/public/assets/miit_logo.png';

export default function FacultyCard({ name, count }) {
    return (
        <div className="flex max-w-lg items-center justify-center gap-x-5 rounded-3xl border-4 border-primary-purple/70 bg-[#925FE2]/25 p-5 py-8">
            <div className="rounded-full bg-[#925FE2]/60 p-3 lg:block">
                <img src={logo} alt="" className="h-18 w-16" />
            </div>
            <div className="text-left">
                <h2 className="text-base font-semibold lg:text-xl">{name}</h2>
                <p className="text-xl font-bold lg:text-2xl">{count}</p>
            </div>
        </div>
    );
}
