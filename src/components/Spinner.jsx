export const Spinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#101113] z-50">
            <div className="w-50 h-50 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}
