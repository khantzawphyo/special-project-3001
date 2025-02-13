import { createContext, useContext, useEffect, useState } from 'react';

const ThemeProviderContext = createContext({
    theme: 'system',
    setTheme: () => null,
});

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'vite-ui-theme',
    ...props
}) {
    const [theme, setTheme] = useState(
        () => localStorage.getItem(storageKey) || defaultTheme,
    );

    // Function to apply the system theme
    const applySystemTheme = () => {
        const root = window.document.documentElement;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
            .matches
            ? 'dark'
            : 'light';

        // Only update the DOM if the theme has changed
        if (!root.classList.contains(systemTheme)) {
            root.classList.remove('light', 'dark');
            root.classList.add(systemTheme);
        }
    };

    // Effect to handle theme changes
    useEffect(() => {
        const root = window.document.documentElement;

        // Remove existing theme classes
        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            // Apply system theme immediately
            applySystemTheme();

            // Debounce the system theme listener
            const mediaQuery = window.matchMedia(
                '(prefers-color-scheme: dark)',
            );
            let timeoutId;

            const handleSystemThemeChange = () => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    applySystemTheme();
                }, 100); // Adjust debounce delay as needed
            };

            // Add listener for system theme changes
            mediaQuery.addEventListener('change', handleSystemThemeChange);

            // Cleanup listener on unmount
            return () => {
                mediaQuery.removeEventListener(
                    'change',
                    handleSystemThemeChange,
                );
                clearTimeout(timeoutId);
            };
        } else {
            // Apply the selected theme
            root.classList.add(theme);
        }
    }, [theme]);

    // Context value
    const value = {
        theme,
        setTheme: (theme) => {
            localStorage.setItem(storageKey, theme);
            if (theme === 'system') {
                // Immediately apply the system theme
                applySystemTheme();
            }
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
