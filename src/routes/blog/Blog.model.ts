export type CategoriesSlug = 'feature' | 'tutorial'

export type PostType = {
	title: string
	slug: string
	description: string
	date: string
	categories: CategoriesSlug[] | CategoryType[]
	// to do
	// author: AuthorSlug[] | AuthorType
	published: boolean
	imgSrc: string
	imgAlt: string
}
  

export type CategoryType = {
	slug: CategoriesSlug;
	title: string;
	titleShort?: string;
	description: string;
	descriptionShort?: string;
};

export type AuthorType = {
	slug: string;
	name: string;
	job: string;
	description: string;
	avatar:  string;
	socials?: {
	  name: string;
	  icon: string;
	  url: string;
	}[];
};