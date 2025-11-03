"use client";

import { navigationLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="my-10 flex justify-between gap-5 font-ibm-sans">
			<Link href="/" className="flex flex-row gap-2 items-center">
				<Image src="/icons/logo.svg" alt="logl" width={40} height={40} />
				<p className="font-bold text-white">BookWise</p>
			</Link>
			<ul className="flex flex-row items-center gap-8">
				{navigationLinks.map((nav) => (
					<li key={nav.label}>
						<Link
							href={nav.href}
							className={cn(
								"text-base cursor-pointer capitalize",
								pathname === `${nav.href}` ? "text-light-200" : "text-light-100"
							)}
						>
							{nav.label}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
