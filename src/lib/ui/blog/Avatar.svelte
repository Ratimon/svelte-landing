<script lang="ts">
    
  import type {  AuthorType, PostType } from '../../../routes/blog/Blog.model';

  export let author: AuthorType;

</script>

{#if author.avatarSrc}
  <a href={`/blog/author${`/blog/author/${author.slug}`}`}
    class="link link-hover hover:link-primary"
    title={`Posts by ${author.name}`}
  >
    <span itemProp="author">
      <img
        src={author.avatarSrc}
        alt={`Avatar of ${author.name}`}
        class="w-7 h-7 rounded-full object-cover object-center"
        width={28}
        height={28}
      />
    </span>

    <span class="group-hover:underline">{author.name}</span>
  </a>
{/if}


