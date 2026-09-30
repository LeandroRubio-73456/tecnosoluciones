const variants = {
	blue: {
		icon: 'bg-(--primary-clear) text-(--secondary)',
	},
	green: {
		icon: 'bg-(--accent-clear) text-(--secondary)',
	},
	red: {
		icon: 'bg-(--service-red-clear) text-(--service-red)',
	},
}

function ServiceCard({ icon: Icon, title, description, variant = 'blue' }) {
	const colors = variants[variant] ?? variants.blue

	return (
		<article className="service-card flex items-stretch rounded-lg bg-white transition-transform duration-300 ease-in-out hover:scale-[1.08]">
			<div className={`flex shrink-0 items-center rounded-s-lg px-8 ${colors.icon}`}>
				<Icon size={46} aria-hidden="true" />
			</div>
			<div className="px-6 py-6">
				<h3 className="text-2xl font-semibold text-(--secondary)">
					{title}
				</h3>
				<p className="text-(--secondary)/75">
					{description}
				</p>
				<hr className="max-w-2/5 border-(--accent) border-2 mt-2" />
			</div>
		</article>
	)
}

export default ServiceCard
