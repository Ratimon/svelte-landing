import type { PostType } from './Blog.model'

export async function load({ fetch }) {
	const response = await fetch('/blog/posts')
	const posts: PostType[] = await response.json()
	return { posts }
}