export default function OverviewCard({ icon, count, title }) {
    return (
        <div className="flex max-w-xs flex-col items-center justify-center gap-y-2 rounded-3xl border-4 border-[#925FE2] bg-white py-3 shadow-sm md:py-8">
            {icon}
            <div className="text-center">
                <p className="text-xl font-semibold">
                    {count > 100 ? count + ' +' : count}
                </p>
                <p className="text-lg text-gray-600">Total {title}</p>
            </div>
        </div>
    );
}
