import { FlutterLogo, RustLogo, GrokLogo } from "./svgs";
import Image from "next/image";

export default function Powered() {
	return (
		<div className="flex flex-col items-center justify-center gap-12 py-12">
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-foreground text-2xl font-semibold">Powered by</h3>
				<p className="text-muted-foreground text-base">
					Built with cutting-edge tools for performance and AI.
				</p>
			</div>
			<div className="flex items-center sm:gap-20 gap-6">
				<Image src={FlutterLogo} alt="Flutter" width={60} height={60} className="h-[3rem] w-auto" />
        		<Image src={RustLogo} alt="Rust" width={60} height={60} className="h-[3rem] w-auto" />
        		<Image src={GrokLogo} alt="Grok" width={120} height={40} className="h-[3rem] w-auto" />
			</div>
		</div>
	);
}