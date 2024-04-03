<script lang="ts">
	import type { AuthorPresenter, CategoryPresenter, PostPresenter } from '../Blog.presenter'
    import Avatar from '$lib/ui/blog/Avatar.svelte';
    import BadgeCategory from '$lib/ui/blog/BadgeCategory.svelte';
	import {categories, authors} from '../Blog.data'

	export let data

    let postToDisplay: PostPresenter;
	$: postToDisplay = data.meta

	let categoriesToLabel : CategoryPresenter[];

	$: categoriesToLabel = data.meta.categories.map( categoryString => {
			return categories.find((category) => category.slug === categoryString)!;
	} );

	let authorToDisplay: AuthorPresenter;
	$: authorToDisplay = authors.find((author) => author.slug == postToDisplay.author)!;

</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>

	<div>
		<a
			href="/blog"
			class="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
			title="Back to Blog"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-5 h-5"
			>
				<path
					d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
				/>
	  		</svg>
	 		 Back to Blog
		</a>

	</div>

	<article>
		<section class="my-12 md:my-20 max-w-[800px]">

			<div class="flex items-center gap-4 mb-6">
				{#if categoriesToLabel}

					{#each categoriesToLabel as category}
						<BadgeCategory
							category={category}
							extraStyle={"!badge-lg"};
						/>
					{/each}

				{/if}

				<span class="text-base-content/80" itemProp="datePublished">
					{new Date(postToDisplay.date).toLocaleDateString("en-US", {
					  month: "long",
					  day: "numeric",
					  year: "numeric",
					})}
				</span>
			</div>

			<h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">
				{postToDisplay.title}
			</h1>

			<p class="text-base-content/80 md:text-lg max-w-[700px]">
				{postToDisplay.description}
			</p>

		</section>
		<div class="flex flex-col md:flex-row">

			<section class="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-base-content/10">
				<p class="text-base-content/80 text-sm mb-2 md:mb-3">
					Posted by
				</p>
				<Avatar author={authorToDisplay} />
			</section>

			<section class="w-full max-md:pt-4 md:pr-20 space-y-12 md:space-y-20">
				<div class="prose">
					<svelte:component this={data.content} />
				</div>
				
			  </section>

		</div>

	</article>

	<!-- todo related post -->

</article>