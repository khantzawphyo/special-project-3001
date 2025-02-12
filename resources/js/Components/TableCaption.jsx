export default function TableCaption({ children }) {
    return (
        <caption className="space-x-3 bg-white px-6 py-3 text-left text-xl font-semibold dark:bg-main-purple dark:text-white">
            <div className="flex flex-col justify-start gap-y-3 md:flex-row md:items-center md:justify-between">
                {children}
            </div>
        </caption>
    );
}
