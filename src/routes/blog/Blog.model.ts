export type CategoriesSlug = 'feature' | 'tutorial';
export type AuthorSlug = 'Rati';
export type SocialSlug = 'twitter' | 'tutorial' | 'Github';

export type PostData = {
	title: string
	slug: string
	description: string
	date: string
	categories: CategoriesSlug[] 
	author: AuthorSlug
	published: boolean
	imgSrc: string
	imgAlt: string
}