import { error } from '@sveltejs/kit'
import type { PostData } from '../../Blog.model';

export async function load({ fetch, params }) {
	try {

        const response = await fetch('/blog/posts')
        const posts: PostData[] = await response.json()

		return {
			posts: posts,
            slug: params.slug
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}