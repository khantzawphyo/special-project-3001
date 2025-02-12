export default function TableRow({ children }) {
    return (
        <tr className="border-b border-y-gray-200 bg-white dark:border-b-gray-500 dark:bg-main-purple dark:text-white">
            {children}
        </tr>
    );
}
