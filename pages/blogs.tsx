import { Link } from "@nextui-org/link";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Card } from "@nextui-org/react";
import NextImage from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter, useSearchParams } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';
import { blogPosts } from "../constants/blogPosts";

export default function IndexPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [blogPostToShow, setBlogPostToShow] = useState<React.ReactNode | null>(null);
	
	useEffect(() => {
		const blogPostId = searchParams.get('id');
		if (blogPostId) {
			const blogPost = blogPosts.find((post) => post.id === blogPostId);
			if (blogPost) {
				setBlogPostToShow(
					<article className="p-2 mt-4 mr-4 relative h-[450px] mb-5 overflow-hidden">
						<div className="flex flex-row gap-2">
							<div className="relative w-[150px] h-[130px]">
								<NextImage
									src={blogPost.image}
									alt="Blog Image"
									fill
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h2 className="text-heading09 font-bold">{blogPost.title}</h2>
								<p className="text-body2 ml-10">{blogPost.subTitle}</p>
							</div>
						</div>
						<div className="mt-4 h-[280px] pr-5 mb-[100px] overflow-y-auto">
							{blogPost.content}
						</div>
					</article>
				);
			}
		}
	}, [searchParams]);

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
								alt="Profile"
								width={100}
								height={100}
							/>
							<div className="flex flex-row">
								<EmailIcon className="inline-block mr-2" />
								<span className="inline-block">vesnathan@gmail.com</span>
							</div>
							<div className="flex flex-row">
								<LinkedInIcon className="inline-block mr-2" />
								<span className="inline-block">
									<Link href="https://www.linkedin.com/in/nathan-loudon-719b3723/">LinkedIn Profile</Link>
								</span>
							</div>
							<p className="mt-2">
								Nathan Loudon is a renowned cybersecurity expert with over no experience whatsoever in protecting digital infrastructures. <br /><br />Specializing in threat detection, risk assessment, and incident response.
							</p>
						</div>
						<div className="w-[650px] absolute right-0">
							<h1 className="text-heading06">Cyber Security Blog</h1>
							{blogPostToShow}
						</div>
						<HomeIcon className="absolute bottom-[25px] left-5 cursor-pointer" onClick={() => router.push("/home")} />
						<Button className="absolute bottom-5 left-[60px] bg-green-600 text-white" onClick={() => router.push("/")}>Log Out</Button>
					</Card>
				</div>
			</main>
		</DefaultLayout>
	);
}
