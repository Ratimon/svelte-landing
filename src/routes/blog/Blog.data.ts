import type { CategoriesSlug } from './Blog.model';
import type { CategoryPresenter, AuthorPresenter } from './Blog.presenter';

// These slugs are used to generate pages in the /blog/categories/[categoryId].js. It's a way to group posts by category.
export const categorySlugs: { [key: string]: CategoriesSlug } = {
	feature: "feature",
	tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryId].ts pages.
export const categories: CategoryPresenter[] = [
	{
		// The slug to use in the URL, from the categorySlugs object above.
		slug: categorySlugs.feature,
		// The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
		title: "New Features",
		// A short version of the title above, display in small components like badges. 1 or 2 words
		titleShort: "Features",
		// The description of the category to display in the category page. Up to 160 characters.
		description:
		"Here are the latest features we've added to Landing. I'm constantly improving our product to help you ship faster.",
		// A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
		descriptionShort: "Latest features added to Landing.",
	},
	{
		slug: categorySlugs.tutorial,
		title: "How Tos & Tutorials",
		titleShort: "Tutorials",
		description:
		"Learn how to use Landing with these step-by-step tutorials. I'll show you how to ship faster and save time.",
		descriptionShort:
		"Learn how to use Landing with these step-by-step tutorials.",
	},
	];

	// Social icons used in the author's bio.
	const socialIcons: {
		[key: string]: {
			name: string;
			iconName: string;
		};
		} = {
		twitter: {
			name: "Twitter",
			iconName: "Twitter",
		},
		linkedin: {
			name: "LinkedIn",
			iconName: "LinkedIn",
		},
		github: {
			name: "GitHub",
			iconName: "Github",
		},
		};
		

	const authorSlugs: {[key: string]: string; } = {
		rati: "Rati",
	};

	export const authors: AuthorPresenter[] = [
	{
		// The slug to use in the URL, from the authorSlugs object above.
		slug: authorSlugs.rati,
		// The name to display in the author's bio. Up to 60 characters.
		name: "Rati Montreewat",
		// The job to display in the author's bio. Up to 60 characters.
		job: "Indie Hacker",
		// The description of the author to display in the author's bio. Up to 160 characters.
		description:
		"Rati is a blockchain developer and an entrepreneur.",
		// The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
		avatarSrc: "/blog/authors/rati.png",
		// A list of social links to display in the author's bio.
		socials: [
		{
			name: socialIcons.twitter.name,
			icon: socialIcons.twitter.iconName,
			url: "https://twitter.com/RATi_MOn",
		},
		{
			name: socialIcons.linkedin.name,
			icon: socialIcons.linkedin.iconName,
			url: "https://www.linkedin.com/in/rati-montreewat/",
		},
		{
			name: socialIcons.github.name,
			icon: socialIcons.github.iconName,
			url: "https://github.com/Ratimon",
		},
		],
	},
	];