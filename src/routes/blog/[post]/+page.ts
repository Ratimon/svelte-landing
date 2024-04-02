import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../_assets/posts/${params.post}.md`)

        // console.log('params.post', params.post)
        // console.log('post', post)
        // console.log('post.default', post.default)
        // console.log('post.metadata', post.metadata)

		return {
			content: post.default,
			meta: post.metadata,
            slug: params.post
		}
	} catch (e) {
		error(404, `Could not find ${params.post}`)
	}
}