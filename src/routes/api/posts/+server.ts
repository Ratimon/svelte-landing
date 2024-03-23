import { json } from '@sveltejs/kit'
import type { Post } from './Post.model'

async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	console.log("paths", paths)

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		console.log("slug", slug)

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			console.log("post", post)
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	console.log("posts", posts)


	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
