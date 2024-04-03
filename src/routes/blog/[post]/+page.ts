import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../_assets/posts/${params.post}.md`)

		return {
			content: post.default,
			meta: post.metadata,
            slug: params.post
		}
	} catch (e) {
		error(404, `Could not find ${params.post}`)
	}
}