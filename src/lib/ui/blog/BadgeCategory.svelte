<script lang="ts">
	import type { CategoryType } from '../../../routes/blog/Blog.model'
    export let category: CategoryType;
    export let extraStyle: string;
</script>

<a
    href={`/blog/category/${category.slug}`}
    class={`badge badge-sm md:badge-md hover:badge-primary ${
        extraStyle ? extraStyle : ""
      }`}
    title={`Posts in ${category.title}`}
    rel="tag">

    <!-- <slot /> -->
    {category.titleShort}

</a>
    
        
