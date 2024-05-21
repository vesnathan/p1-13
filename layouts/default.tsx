import { Head } from "./head";
export default function DefaultLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (
	  <div className="relative">
		<div className="relative z-10">
		  <Head />
		  <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
			{children}
		  </main>
		  <footer className="w-full flex items-center justify-center py-3">
			{/* Footer content */}
		  </footer>
		</div>
	  </div>
	);
  }