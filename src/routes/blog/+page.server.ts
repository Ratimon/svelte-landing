import type { Post } from './Blog.model'


export async function load({ fetch }) {
	const response = await fetch('/blog/posts')
	const posts: Post[] = await response.json()
    // const postsToDisplay : Post[] =  posts.sort(
    //     (a, b) =>
    //       new Date(b.date).valueOf() - new Date(a.date).valueOf()
    //   )
    //   .slice(0, 6);
	return { posts }
}