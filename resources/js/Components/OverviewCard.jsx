export default function OverviewCard({ icon, count, title }) {
    return (
        <div className="flex max-w-xs flex-col items-center justify-center gap-y-5 rounded-3xl border bg-white py-8 shadow-sm">
            {icon}
            <div className="text-center">
                <p className="text-xl font-semibold">
                    {count > 100 ? count + ' +' : 'count'}
                </p>
                <p className="text-lg text-gray-600">Total {title}</p>
            </div>
        </div>
    );
}
