export default function MainLayout({ sidebarRef, isSidebarOpen, children }) {
    return (
        <main
            className={`min-h-screen space-y-5 p-12 pt-28 transition-all duration-300 ease-in-out ${
                isSidebarOpen ? 'md:ml-64' : 'md:ml-0'
            }`}
        >
            {children}
        </main>
    );
}
