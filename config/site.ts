export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Cybersecurity Blog",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},

    {
      label: "Blog",
      href: "/blog",
    },
	],
	navMenuItems: [
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "#",
	},
};
