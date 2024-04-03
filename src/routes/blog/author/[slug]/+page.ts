import { error } from '@sveltejs/kit'

import type { PostData } from '../../Blog.model';

// import {categories, authors} from '../../Blog.data'


export async function load({ fetch, params }) {
	try {
		// const author = await import(`../../Blog.data.ts`)

        const response = await fetch('/blog/posts')
        // todo : type PostData[] or PostPresenter
        const posts = await response.json()

        // ${params.slug}

        console.log('posts', posts)

        // console.log('params.slug', params.slug)
        // console.log('author', author)
        // console.log('author.default', author.default)
        // console.log('author.metadata', author.metadata)

		return {
			content: posts,
            slug: params.slug
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}