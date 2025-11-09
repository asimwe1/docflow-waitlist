import type { SVGProps } from "react";
import Image from "next/image";

const logoImage = "/Logo.png";

export default function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<Image src={logoImage} alt="DocFlow Logo" width={50} height={50} className="h-auto w-auto" {...props} />
	);
}
