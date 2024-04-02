<script lang="ts">
    import '../../app.postcss';

	import type { AuthorType, CategoryType, CategoriesSlug, PostType } from './Blog.model'
	import CardArticle from '$lib/ui/blog/CardArticle.svelte';

	import {appName} from 'web-config';

	// These slugs are used to generate pages in the /blog/categories/[categoryId].js. It's a way to group articles by category.
	const categorySlugs: { [key: string]: CategoriesSlug } = {
		feature: "feature",
		tutorial: "tutorial",
	};

	// All the blog categories data display in the /blog/category/[categoryId].ts pages.
	const categories: CategoryType[] = [
	{
		// The slug to use in the URL, from the categorySlugs object above.
		slug: categorySlugs.feature,
		// The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
		title: "New Features",
		// A short version of the title above, display in small components like badges. 1 or 2 words
		titleShort: "Features",
		// The description of the category to display in the category page. Up to 160 characters.
		description:
		"Here are the latest features we've added to ShipFast. I'm constantly improving our product to help you ship faster.",
		// A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
		descriptionShort: "Latest features added to ShipFast.",
	},
	{
		slug: categorySlugs.tutorial,
		title: "How Tos & Tutorials",
		titleShort: "Tutorials",
		description:
		"Learn how to use ShipFast with these step-by-step tutorials. I'll show you how to ship faster and save time.",
		descriptionShort:
		"Learn how to use ShipFast with these step-by-step tutorials.",
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
		iconName: "LinkedIn",
	},
	};


	// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
	const authorSlugs: {[key: string]: string; } = {
		rati: "Rati",
	};

	const authors: AuthorType[] = [
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

	export let data;

	$: postsWithCategory = data.posts.map( post => {
		const cachedCategories : CategoryType[] = post.categories.map( categoryString => {
			return categories.find((category) => category.slug === categoryString)!;
		} );

		const cachedAuthor : AuthorType = authors.find((author) => author.slug == post.author)!;

		return {
            ...post,
            categories: cachedCategories,
			author: cachedAuthor
        };
	});

	$: postsToDisplay = postsWithCategory.sort(
        (a, b) =>
          new Date(b.date).valueOf() - new Date(a.date).valueOf()
      )
      .slice(0, 6);
</script>

<section class="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
	<h1 class="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
	  The {appName} Blog
	</h1>
	<p class="text-lg opacity-80 leading-relaxed">
		Updates, stories, and announcements from the {appName} Labs team.
	</p>
</section>


<section class="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
	{#each postsToDisplay as post, i}
		<CardArticle
			post={post}
			showCategory={true}
			categories={ post.categories}
			author={ post.author}
		></CardArticle>
	{/each}
</section>