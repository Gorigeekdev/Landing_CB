import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export type FranquiciasLayoutProps = {
	// types...
}

const FranquiciasLayout: React.FC<FranquiciasLayoutProps> = ({ }) => {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			{/* Navbar propio de Franquicias */}
			<header className="bg-green-600 text-white">
				<div className="container mx-auto flex items-center justify-between p-4">
					<Link to="/" className="px-3 py-2 hover:underline text-dark">
							CentralBus
						</Link>
					<nav>
						<Link to="/" className="px-3 py-2 hover:underline">
							Volver a CentralBus
						</Link>
					</nav>
				</div>
			</header>

			<main className="flex-1 container mx-auto p-8">
				<Outlet />
			</main>

			<footer className="bg-green-700 text-white">
				<div className="container mx-auto text-center py-4 text-sm">
					Sección Franquicias · © {new Date().getFullYear()}
				</div>
			</footer>
		</div>
	);
};

export default FranquiciasLayout;
