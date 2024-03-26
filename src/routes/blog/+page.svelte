<script lang="ts">
    import '../../app.postcss';

	import type { categoryType, CategoriesSlug } from './Blog.model'

	import {appName} from 'web-config';

	// These slugs are used to generate pages in the /blog/categories/[categoryId].js. It's a way to group articles by category.
	const categorySlugs: { [key: string]: CategoriesSlug } = {
		feature: "feature",
		tutorial: "tutorial",
	};

	// All the blog categories data display in the /blog/category/[categoryI].js pages.
	const categories: categoryType[] = [
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

</script>

<section class="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
	<h1 class="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
	  The {appName} Blog
	</h1>
	<p class="text-lg opacity-80 leading-relaxed">
		Updates, stories, and announcements from the {appName} Labs team.
	</p>
</section>