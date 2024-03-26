<script lang="ts">
  import "../../app.postcss";

  import HeaderBlog from '$lib/ui/blog/HeaderBlog.svelte';

  const headLinks = [
    {pathname: '/blog', title: 'All Posts'},
  ];

 </script>

    <HeaderBlog links={headLinks} class="bg-base-200 "></HeaderBlog>
    <div class="min-h-screen flex flex-col">
    <slot />
 </div>