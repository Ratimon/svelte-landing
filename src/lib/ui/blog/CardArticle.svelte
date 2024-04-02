<script lang="ts">

    // import {url} from '$lib/utils/path';
    import type { AuthorSlug, AuthorType, PostType, CategoryType } from '../../../routes/blog/Blog.model';

    import Avatar from '$lib/ui/blog/Avatar.svelte';
    import BadgeCategory from '$lib/ui/blog/BadgeCategory.svelte';
  
    export let post: PostType;
    export let showCategory: boolean = true;
    export let categories: CategoryType[];
    export let author: AuthorType ;

</script>

<article class="card bg-base-200 rounded-box overflow-hidden">

    {#if post.imgSrc}
        <a href={`/blog/${post.slug}`}
            class="link link-hover hover:link-primary"
            title={post.title}
        >
            <figure>
                <img
                    class="aspect-video object-center object-cover hover:scale-[1.03] duration-200 ease-in-out"
                    src={post.imgSrc}
                    alt={post.imgAlt}
                    width={600}
                    height={338}
                    placeholder="blur"
                />
            </figure>
        </a>

    {/if}

    <div class="card-body">
        {#if showCategory}
            <div class="flex flex-wrap gap-2">
                {#if categories}
                    {#each categories as category}
                        <BadgeCategory category={category} extraStyle={''}; />
                    {/each}
                {/if}
            </div>
        {/if}
    

        <!-- <slot /> -->
        <h2 class="mb-1 text-xl md:text-2xl font-bold">
            <a href={`/blog/${post.slug}`}
                class="link link-hover hover:link-primar"
                title={post.title}
            >{post.title}</a>
        </h2>

        <div class=" text-base-content/80 space-y-4">

            <p >{post.description}</p>
  
            <div class="flex items-center gap-4 text-sm">
              <Avatar author={author} />
  
              <span itemProp="datePublished">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
        </div>

    </div>



</article>