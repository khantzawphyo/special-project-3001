export default function ErrorText({ errorName }) {
    return (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">{errorName}</span>
        </p>
    );
}
