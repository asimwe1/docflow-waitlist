import * as React from 'react';
import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
	Tailwind,
} from '@react-email/components';

const WaitlistEmail = ({ userFirstname }: { userFirstname: string }) => {
	const currentYear = new Date().getFullYear();

	return (
		<Html>
			<Tailwind>
				<Head>
					<title>Welcome to DocFlow AI</title>
					<Preview>You’re on the DocFlow AI waitlist! Get ready for instant PDF extraction.</Preview>
					<style>
						{`
              @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700&display=swap');
            `}
					</style>
				</Head>
				<Body className="bg-[#09090B] py-[40px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
					<Container className="bg-[#18181B] rounded-[8px] mx-auto p-[32px] max-w-[600px]">
						<Section className="mt-[16px] text-center">
							<Text className="text-[28px] font-bold text-white m-0">
								Welcome to <span className="text-[#DFFF1A]">DocFlow AI</span>
							</Text>

							<Text className="text-[18px] text-[#A1A1AA] mt-[16px] mb-[16px]">
								You’re officially on the waitlist
							</Text>

							<Hr className="border-solid border-[#27272A] my-[16px] w-[80px] mx-auto" />
						</Section>

						<Section>
							<Text className="text-[16px] leading-[24px] text-white mt-[32px]">
								Hi {userFirstname},
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								Thanks for joining the DocFlow AI waitlist! We’re building the fastest way to extract financial data from PDFs — invoices, receipts, bank statements — and turn it into clean JSON or CSV in seconds.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								You’ll be among the first to get access with a 25% lifetime discount. Share your referral link to jump the queue — every 3 referrals moves you up 5 spots.
							</Text>

							<Section className="my-[32px] text-center">
								<Button
									className="bg-[#DFFF1A] text-[#09090B] font-bold py-[12px] px-[24px] rounded-[12px] no-underline text-center box-border"
									href="https://cal.com/docflow/demo"
								>
									<span style={{ display: 'inline-flex', alignItems: 'center' }}>
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											style={{ marginRight: '8px' }}
										>
											<title>Calendar</title>
											<path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Book a Demo
									</span>
								</Button>
							</Section>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7]">
								Follow us on <Link href="https://twitter.com/docflowai" className="text-[#DFFF1A] underline">@docflowai</Link> for updates, previews, and early feature drops.
							</Text>

							<Text className="text-[16px] leading-[24px] text-[#E4E4E7] mt-[24px]">
								See you soon,
							</Text>

							<Text className="text-[16px] font-bold text-white mb-[32px]">
								The DocFlow AI Team
							</Text>
						</Section>

						<Hr className="border-solid border-[#27272A] my-[24px]" />

						<Section>
							<Text className="text-[12px] text-[#71717A] text-center m-0">
								© {currentYear} DocFlow AI. All rights reserved.
							</Text>
							<Text className="text-[12px] text-[#71717A] text-center m-0">
								Kigali, Rwanda
							</Text>
							<Text className="text-[12px] text-[#71717A] text-center mt-[16px]">
								<Link href="https://docflow.ai/unsubscribe" className="text-[#DFFF1A]">
									Unsubscribe
								</Link>{' '}
								•{' '}
								<Link href="https://docflow.ai/privacy" className="text-[#DFFF1A]">
									Privacy Policy
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WaitlistEmail;