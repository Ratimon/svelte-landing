export type CategoriesSlug = 'feature' | 'tutorial'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: CategoriesSlug[]
	published: boolean
}

export type categoryType = {
	slug: CategoriesSlug;
	title: string;
	titleShort?: string;
	description: string;
	descriptionShort?: string;
};