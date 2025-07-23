import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export type CentralBusLayoutProps = {
	// types...
}

const CentralBusLayout: React.FC<CentralBusLayoutProps> = ({ }) => {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Navbar */}
			<header className="bg-white shadow-md">
				<div className="container mx-auto flex items-center justify-between p-4">
					<Link to="/" className="text-2xl font-bold text-black">CentralBus</Link>
					<nav>
						<Link to="/franquicias" className="px-3 py-2 hover:underline text-black">
							Franquicias
						</Link>
						{/* aquí puedes añadir más enlaces */}
					</nav>
				</div>
			</header>

			{/* Contenido específico de cada página */}
			<main className="flex-1 container mx-auto p-8">
				<Outlet />
			</main>

			{/* Footer */}
			<footer className="bg-gray-100">
				<div className="container mx-auto text-center py-4 text-sm text-gray-600">
					© {new Date().getFullYear()} CentralBus. Todos los derechos reservados.
				</div>
			</footer>
		</div>
	);
};

export default CentralBusLayout;
