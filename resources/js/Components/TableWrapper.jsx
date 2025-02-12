export default function TableWrapper({ children }) {
    return (
        <div className="relative overflow-x-auto rounded-lg border shadow-md dark:bg-primary-purple">
            {children}
        </div>
    );
}
