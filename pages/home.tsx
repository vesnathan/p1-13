import { Link } from "@nextui-org/link";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blogPosts } from "../constants/blogPosts";

export default function IndexPage() {
	const router = useRouter();
	return (
		<DefaultLayout>
			<main className="w-full flex flex-row justify-center">
				<div className="w-[1050px] h-[560px] absolute z-0 flex flex-row justify-center items-center">
					<NextImage
						src="/assets/images/cybersecurity.png"
						alt="Login Background"
						fill
					/>

					<Card className="text-neutral-800 w-[90%] h-[95%] p-5 rounded-none flex flex-col items-center gap-2 bg-opacity-95">
			

						<div className="flex flex-col gap-2 w-[200px] absolute left-5">
						
								<NextImage
									src="/assets/images/profile.jpg"
									alt="Logo"
									width={100}
									height={100}
								/>
							<div className="flex flex-row"><EmailIcon className="inline-block mr-2" />
								<span className="inline-block" >vesnathan@gmail.com</span>
							</div>
							<div className="flex flex-row"><LinkedInIcon className="inline-block mr-2" />
								<span className="inline-block" >
									<Link href="https://www.linkedin.com/in/nathan-loudon-719b3723/" >LinkedIn Profile</Link>
								</span>
							</div>
							<p className="mt-2">
							Nathan Loudon is a renowned cybersecurity expert with over 0 years of experience in protecting digital infrastructures. <br /><br />Specializing in threat detection, risk assessment, and incident response.
							</p>
							
						</div>
						<div className="w-[650px] absolute right-0">
							<h1  className="text-heading06">Cyber Security Blog</h1>
							<div className="text-body2 mt-4">Welcome to my blog! Here you will find a collection of articles and resources on cyber security. I hope you find them useful!</div>
							<article className=" border-1 p-2 mt-4 mr-4 relative h-[150px]">
								<div className="flex flex-row gap-2">
									<div className="relative w-[150px] h-[130px]">
										<NextImage
												src="/assets/images/image1.png"
												alt="Logo"
												fill
											/>
								</div>
								<div className="flex flex-col gap-2 w-[450px]">
									<h2 className="text-heading09 font-bold">{blogPosts[0].title}</h2>													
									<h2 className="text-body03">{blogPosts[0].subTitle}</h2>
									<p className="text-body2">{blogPosts[0].short}</p>
								</div>
								<Button size="sm" className="bg-transparent text-green-600 mt-4 absolute bottom-2 right-2" onClick={() => router.push("/blogs?id=e64d1469-4159-4655-9b19-49f767a3eeab")}>Read More</Button>
								
							</div>
							</article>
							<article className=" border-1 p-2 mt-4 mr-4 relative h-[150px]">
								<div className="flex flex-row gap-2">
									<div className="relative w-[150px] h-[130px]">
										<NextImage
												src="/assets/images/image2.png"
												alt="Logo"
												fill
											/>
								</div>
								<div className="flex flex-col gap-2 w-[450px]">
									<h2 className="text-heading09 font-bold">{blogPosts[1].title}</h2>																	
									<h2 className="text-body03">{blogPosts[1].subTitle}</h2>
									<p className="text-body2">{blogPosts[1].short}</p>
								</div>
								<Button size="sm" className="bg-transparent text-green-600 mt-4 absolute bottom-2 right-2" onClick={() => router.push("/blogs?id=8074f7b5-a77b-4f3c-ad1e-258259aafd02")}>Read More</Button>
							</div>
							</article>						
						</div>
						<Button className="absolute bottom-5 left-5 bg-green-600 text-white" onClick={() => router.push("/")}>Log Out</Button>
					</Card>
				</div>
			</main>
		</DefaultLayout>
	);
}
