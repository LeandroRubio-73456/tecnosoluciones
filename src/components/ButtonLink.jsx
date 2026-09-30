const variants = {
    primary: 'text-black bg-(--accent) hover:bg-(--accent-clear)',
    secondary: 'text-white border hover:bg-white/15',
}

function ButtonLink({ href, variant = 'primary', children }) {
    return (
        <a
            href={href}
            className={`inline-flex items-center justify-center rounded-lg px-6 py-2 font-medium transition-colors ${variants[variant]}`}
        >
            {children}
        </a>
    )
}

export default ButtonLink