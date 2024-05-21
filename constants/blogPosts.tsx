export const blogPosts = [
    {
        title: 'Should you be using cloud infrastructure?',
		subTitle: "The pros and cons of cloud infrastructure",
		short: "Ever since Eric Schmidt coind the rerm \"cloud computing\" in 2006, the use of cloud infrastructure has been on the rise. But is it right for you?",
        content: (
			<>
				<p>Ever since Eric Schmidt of Google coined the term Cloud Computing at a conference in 2006, the rise of cloud infrasture has experienced a meteoric rise.</p><br />
				<p>Cloud infrastructure allows organisations to use resources such as storage and networking over the internet. This model has several advantages over standard on premises computing.</p><br />
				<p>One of the main advantages is scalability. You pay for only the resources you need at that time, leading to significant cost savings.</p><br />
				<p>A disadvantage of cloud computing is availability... if the provider goes down, then you at their mercy to havee your sites operational again.</p><br />
				<p>Always consider the pros and cons before deciding what architecture fits your needs.</p><br />
			</>
		),
        image: '/assets/images/image1.png',
        id: 'e64d1469-4159-4655-9b19-49f767a3eeab'
    },
    {
        title: 'Post-Quantum Cryptography: Preparing for the Future',
		subTitle: "What is post-quantum cryptography and why is it important?",
		short: "Post-quantum cryptography is a type of encryption that is designed to be secure against attacks by quantum computers.",
        content: (
			<>
				<p>Quantum computers are set to revolutionise computing.</p><br />
				<p>They use qubits as opposed to normal 1 or 0 bits. Qubits can be in multiple quantum states at the same time, which allows for parralell processing that normal computers are simply incapable of. </p><br />
				<p>One problem that Quantum Computers are expected to excell at is factoring large numbers. This is a problem considering most cryptography at the moment works by just that method. What would take a normal computer billions of years to crack could be cracked by a quantum computer in moments.</p><br /> 
				<p>Research is currently underway to design algorhythms impervious to cracking by both quantum and standard PC&apos;s. Business need to start considering the impacts of quantum computers and understand the risks they pose to cryptography.</p><br />
			</>
		),
        image: '/assets/images/image2.png',
        id: '8074f7b5-a77b-4f3c-ad1e-258259aafd02'
    }
];