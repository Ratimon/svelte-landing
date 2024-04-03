import type { PostData } from '../Blog.model';
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../_assets/posts/${params.post}.md`)
        const response = await fetch('/blog/posts')
        const posts: PostData[] = await response.json()

        console.log('post.metadata', post.metadata )

		return {
			content: post.default,
			meta: post.metadata,
            posts: posts,
            slug: params.post
		}
	} catch (e) {
		error(404, `Could not find ${params.post}`)
	}
}