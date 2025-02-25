export default function TableHead({ children }) {
    return (
        <thead className="border-y bg-gray-300 text-[15px] capitalize text-gray-800 dark:bg-main-purple/90 dark:text-white">
            {children}
        </thead>
    );
}
