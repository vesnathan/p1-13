import DefaultLayout from "@/layouts/default";
import { Input, Button } from "@nextui-org/react";
import { use, useEffect, useState } from "react";
import { REGEX } from "@/constants/regex";
import PasswordHelper from "@/components/PasswordHelper";	
import { Card } from "@nextui-org/react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";

export default function IndexPage() {
	const key = '12345678';
	const router = useRouter();
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [passwordValid, setPasswordValid] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailValid, setEmailValid] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [loginError, setLoginError] = useState(false);
	
	useEffect(() => {
		if (email) {
			if (REGEX.EMAIL.test(email)) {
				setEmailValid(true);
			}
		}
	}, [email, password]);

	useEffect(() => {
		const storedEmail = localStorage.getItem("email");
		const storedPassword = localStorage.getItem("password");
		if (storedEmail && storedPassword) {
			setEmail(storedEmail);
			setShowLogin(true);
		}
	}, []);

	const submitRegister = () => {
		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
		if (passwordValid && emailValid) {
			router.push("home");
		}
	}

	const submitLogin = () => {
		if (password ===  localStorage.getItem("password")) {
			router.push("home");
		}
		else {
			setLoginError(true);
		}
	}

	return (
		<DefaultLayout>
			<main className="w-full flex flex-row justify-center">
				<div className="w-[1050px] h-[560px] absolute z-0 flex flex-row justify-end shadow-2xl">
				<NextImage
					src="/assets/images/cybersecurity.png"
					alt="Login Background"
					fill
				/>
				<Card className="text-neutral-800 w-[350px] h-[560px] p-5 rounded-none flex flex-col items-center gap-2 shadow-none border-1">
					<h1  className="text-heading06">Cyber Security Blog</h1>
					{
						showLogin && (
							<>
								<p className="text-body2 mt-4">Welcome back, {email}!</p>
								<p className="text-body2 mb-4">Enter your password to continue</p>
								<Input id="outlined-basic" label="Password:" type="password" onChange={(e) => setPassword(e.target.value)} />
								<Button className={password.length < 1 ? "w-full mt-4" : "w-full mt-4 bg-green-600 text-white"}  disabled={password.length < 1} onClick={(e) => submitLogin()}>Log in</Button>
								{
									loginError && (
										<p className="text-red-500 text-body2 mt-4">Incorrect password. Please try again.</p>
									)
								}
							</>
						)
					}
					{
						!showLogin && (
							<>
								<p className="text-body2 mt-4">Enter your email and password to continue</p>
								<Input id="outlined-basic" label="Email:" onChange={(e) => setEmail(e.target.value)}  />
								<Input id="outlined-basic" label="Password:" type="password" onChange={(e) => setPassword(e.target.value)} />
								<Input id="outlined-basic" label="Confirm Password:" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
								<PasswordHelper password={password} confirmPassword={confirmPassword} setPasswordValid={setPasswordValid}/>
								<Button className={!emailValid || !passwordValid ? "w-full mt-4" : "w-full mt-4 bg-green-600 text-white"}  disabled={!emailValid || !passwordValid} onClick={(e) => submitRegister()}>Register</Button>
							</>
						)
					}
					
				</Card>
			</div>
		</main>
		</DefaultLayout>
	);
}
