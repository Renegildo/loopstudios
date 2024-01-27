const CreationCard = ({ label, bg }: { label: string; bg: string }) => {
	return (
		<a href="">
			<div style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: 'cover',
			}} className="h-36 mx-8 mb-8 lg:mx-0
			lg:w-64 lg:h-[32rem] lg:hover:scale-105 lg:transition-transform lg:shadow-xl">
				<h3 className="text-white pl-5 text-2xl pt-20 w-32">{label}</h3>
			</div>
		</a>
	);
}

export default CreationCard;