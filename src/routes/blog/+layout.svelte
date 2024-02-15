<script lang="ts">
    import "../../app.postcss";

    import HeaderBlog from '$lib/ui/blog/HeaderBlog.svelte';

    const headLinks = [
      {pathname: '#pricing', title: 'Pricing'},
      {pathname: '#faq', title: 'FAQ'},
  	];


 </script>

    <HeaderBlog links={headLinks} class="bg-base-200 "></HeaderBlog>

    <div class="min-h-screen flex flex-col">
    <slot />
 </div>