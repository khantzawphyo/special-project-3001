export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-gray-100 pt-6 dark:bg-gray-900 sm:justify-center sm:pt-0">
            {children}
        </div>
    );
}
