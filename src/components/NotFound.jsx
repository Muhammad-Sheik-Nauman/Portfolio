import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full"
            >
                {/* 404 number */}
                <h1 className="text-9xl font-light text-beige-800 dark:text-beige-200 mb-2 font-mono">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl text-beige-900 dark:text-dark-text font-light mb-6">
                    Page Not Found
                </h2>

                <p className="text-lg text-beige-700 dark:text-dark-muted mb-10 font-light max-w-sm mx-auto">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <button
                    onClick={() => navigate('/')}
                    className="px-8 py-3 bg-beige-800 dark:bg-beige-600 text-beige-50 dark:text-dark-bg text-sm font-light rounded-sm hover:bg-beige-900 dark:hover:bg-beige-500 transition-all duration-300 shadow-sm dark:shadow-none"
                >
                    Return Home
                </button>
            </motion.div>
        </section>
    )
}

export default NotFound
