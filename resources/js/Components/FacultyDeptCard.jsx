import logo from '/public/assets/miit_logo.png';

export default function FacultyDeptCard({ name, count }) {
    return (
        <div className="flex h-full w-full items-center justify-center gap-x-5 rounded-3xl border-4 border-[#925FE2] bg-[#925FE2]/25 p-5 py-8">
            <div className="rounded-full bg-[#925FE2]/60 p-3">
                <img src={logo} alt="" className="h-18 w-16" />
            </div>
            <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-3xl font-bold">{count}</p>
            </div>
        </div>
    );
}
