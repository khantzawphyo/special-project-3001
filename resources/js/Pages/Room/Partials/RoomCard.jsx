import logo from '/public/assets/miit_logo.png';

export default function RoomCard({ name, count }) {
    return (
        <div className="flex h-full w-full items-center justify-center gap-x-8 rounded-3xl border-4 border-primary-purple/70 bg-[#925FE2]/25 py-8">
            <div className="rounded-full bg-[#925FE2]/60 p-3">
                <img src={logo} alt="" className="h-12 w-12" />
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-3xl font-bold">{count}</p>
            </div>
        </div>
    );
}
