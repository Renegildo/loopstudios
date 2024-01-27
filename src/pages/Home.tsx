import { useState } from "react";
import CreationCard from "../components/CreationCard";

const Home = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		if (!menuOpen) {
			document.body.style.overflow = 'hidden';
			document.body.style.height = '100%';
		} else {
			document.body.style.overflow = 'auto';
			document.body.style.height = 'auto';
		}
	}

	return (
		<div>
			<section className="header-bg h-[100vh]">
				<header className={`flex justify-between p-7 pt-14 z-50 ${(menuOpen ? 'bg-black' : 'bg-transparent')
					}`}>
					<a href="#">
						<img
							src="/src/assets/images/logo.svg"
							alt="logo"
						/>
					</a>

					{/* Menu Button */}
					<button onClick={toggleMenu} className="block lg:hidden">
						<img
							src={`${(!menuOpen ? '/src/assets/images/icon-hamburger.svg' :
								'/src/assets/images/icon-close.svg')
								}`}
						/>
					</button>

					<ul className="hidden lg:flex gap-8 text-white">
						<li><a href="#" className="underline-hover">About</a></li>
						<li><a href="#" className="underline-hover">Careers</a></li>
						<li><a href="#" className="underline-hover">Events</a></li>
						<li><a href="#" className="underline-hover">Products</a></li>
						<li><a href="#" className="underline-hover">Support</a></li>
					</ul>
				</header>
				{/* Menu Mobile */}
				<div className={`bg-black text-white absolute h-[100vh] top-20% w-full z-10 ${(menuOpen ? 'block' : 'hidden')
					}`}>
					<ul className="mt-32 flex flex-col gap-4 ml-4 text-3xl font-light">
						<li><a href="#">ABOUT</a></li>
						<li><a href="#">CARRERS</a></li>
						<li><a href="#">EVENTS</a></li>
						<li><a href="#">PRODUCTS</a></li>
						<li><a href="#">SUPPORT</a></li>
					</ul>
				</div>

				<div className="border-2 p-7 mx-2 mt-32 lg:mt-16 lg:w-[60%]">
					<h1 className="text-white text-5xl tracking-widest font-normal">IMMERSIVE<br /> EXPERIENCES<br /> THAT<br /> DELIVER</h1>
				</div>
			</section>
			<section className="flex flex-col items-center mt-20 mb-32 relative lg:items-start">
				<img
					src="/src/assets/images/mobile/image-interactive.jpg"
					alt="Interactive VR"
					className="block lg:hidden w-[80%]"
				/>
				<img
					src="/src/assets/images/mobile/image-interactive.jpg"
					alt="Interactive VR"
					className="hidden lg:block w-[60%] ml-48"
				/>
				<div className="lg:absolute lg:bottom-0 lg:right-14 lg:bg-white lg:w-[40%] lg:pt-10 lg:pl-10">
					<h2 className="text-4xl text-center font-normal tracking-wide my-8 lg:text-start lg:mb-8 lg:mt-0">THE LEADER IN INTERACTIVE VR</h2>
					<p className="text-center mx-14 text-lg lg:text-start lg:mx-0">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that blind to their brand.</p>
				</div>
			</section>
			<section className="flex flex-col items-center lg:mx-32">
				<div className="lg:flex lg:justify-between mb-20 lg:w-full">
					<h2 className="text-5xl">OUR CREATIONS</h2>
					<a href="#"
					className="border-2 border-black py-3 px-24 text-center tracking-widest font-bold hidden lg:block hover:bg-black hover:text-white transition-colors">SEE ALL</a>
				</div>

				<div className="block lg:hidden w-full"> {/* Mobile */}
					<CreationCard label='DEEP EARTH' bg="/src/assets/images/mobile/image-deep-earth.jpg" />
					<CreationCard label='NIGHT ARCARDE' bg="/src/assets/images/mobile/image-night-arcade.jpg" />
					<CreationCard label='SOCCER TEAM VR' bg="/src/assets/images/mobile/image-soccer-team.jpg" />
					<CreationCard label='THE GRID' bg="/src/assets/images/mobile/image-grid.jpg" />
					<CreationCard label='FROM UP ABOVE VR' bg="/src/assets/images/mobile/image-from-above.jpg" />
					<CreationCard label='POCKET BOREALIS' bg="/src/assets/images/mobile/image-pocket-borealis.jpg" />
					<CreationCard label='THE CURIOSITY' bg="/src/assets/images/mobile/image-curiosity.jpg" />
					<CreationCard label='MAKE IT FISHEYE' bg="/src/assets/images/mobile/image-fisheye.jpg" />
				
				</div>
				<div className="hidden lg:flex flex-wrap justify-center gap-5 w-full"> {/* Desktop */}
					<CreationCard label='DEEP EARTH' bg="/src/assets/images/desktop/image-deep-earth.jpg" />
					<CreationCard label='NIGHT ARCARDE' bg="/src/assets/images/desktop/image-night-arcade.jpg" />
					<CreationCard label='SOCCER TEAM VR' bg="/src/assets/images/desktop/image-soccer-team.jpg" />
					<CreationCard label='THE GRID' bg="/src/assets/images/desktop/image-grid.jpg" />
					<CreationCard label='FROM UP ABOVE VR' bg="/src/assets/images/desktop/image-from-above.jpg" />
					<CreationCard label='POCKET BOREALIS' bg="/src/assets/images/desktop/image-pocket-borealis.jpg" />
					<CreationCard label='THE CURIOSITY' bg="/src/assets/images/desktop/image-curiosity.jpg" />
					<CreationCard label='MAKE IT FISHEYE' bg="/src/assets/images/desktop/image-fisheye.jpg" />
				</div>
				
				<a href="#"
					className="border-2 border-gray-600 py-3 px-24 text-center tracking-widest font-bold block lg:hidden">SEE ALL</a>
			</section>
			<footer className="bg-black">
				<div className="flex flex-col items-center text-white py-20 mt-20 lg:items-start lg:flex-row lg:justify-between lg:mx-20">
					<div>
						<img
							src="/src/assets/images/logo.svg"
						/>
						<ul className="flex flex-col gap-5 text-center font-semibold mt-10 lg:flex-row">
							<li>
								<a href="#" className="underline-hover">About</a>
							</li>
							<li>
								<a href="#" className="underline-hover">Carrers</a>
							</li>
							<li>
								<a href="#" className="underline-hover">Events</a>
							</li>
							<li>
								<a href="#" className="underline-hover">Products</a>
							</li>
							<li>
								<a href="#" className="underline-hover">Support</a>
							</li>
						</ul>
					</div>
				
					<div className="flex flex-col items-center lg:items-end">
						<ul className="flex gap-5 mt-10 mb-5">
							<li className="underline-hover">
								<a href="">
									<img
										src="/src/assets/images/icon-facebook.svg"
										alt="facebook"
									/>
								</a>
							</li>
							<li className="underline-hover">
								<a href="">
									<img
										src="/src/assets/images/icon-twitter.svg"
										alt="twitter"
									/>
								</a>
							</li>
							<li className="underline-hover">
								<a href="">
									<img
										src="/src/assets/images/icon-pinterest.svg"
										alt="pinterest"
									/>
								</a>
							</li>
							<li className="underline-hover">
								<a href="">
									<img
										src="/src/assets/images/icon-instagram.svg"
										alt="instagram"
									/>
								</a>
							</li>
						</ul>
				
						<p className="text-gray-400">&copy; 2021 Loopstudios. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;