import SettingLayout from '@/Layouts/SettingLayout';

export default function Index() {
    return (
        <SettingLayout>
            <div className="">
                <div
                    className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                    id="styled-settings"
                    role="tabpanel"
                    aria-labelledby="settings-tab"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        This is some placeholder content the{' '}
                        <strong className="font-medium text-gray-800 dark:text-white">
                            Settings tab's associated content
                        </strong>
                        . Clicking another tab will toggle the visibility of
                        this one for the next. The tab JavaScript swaps classes
                        to control the content visibility and styling.
                    </p>
                </div>
            </div>
        </SettingLayout>
    );
}
