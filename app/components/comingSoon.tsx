import * as motion from "motion/react-client"

export const ComingSoon = () => {
 return (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 8,
        }}
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[var(--background)]"
        >
        <h1 className="text-[var(--accent5)] text-5xl font-bold mb-4">🚧 Coming Soon 🚧</h1>
        <p className="text-[var(--accent3)] text-xl mb-8">
            This page is currently under construction.
        </p>
        <p className="text-[var(--p4)] text-md">
            Stay tuned! More content will be added here soon.
        </p>
    </motion.div>
 );
}