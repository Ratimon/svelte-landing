import type { PostData } from './Blog.model'

export async function load({ fetch }) {
	const response = await fetch('/blog/api/posts')
	const posts: PostData[] = await response.json()
	return { posts }
}