export type CategoriesSlug = 'feature' | 'tutorial';

export type CategoryType = {
	slug: CategoriesSlug;
	title: string;
	titleShort?: string;
	description: string;
	descriptionShort?: string;
};

export type AuthorSlug = 'Rati';

export type AuthorType = {
	slug: string;
	name: string;
	job: string;
	description: string;
	avatarSrc:  string;
	socials?: {
	  name: string;
	  icon: string;
	  url: string;
	}[];
};

export type SocialSlug = 'twitter' | 'tutorial' | 'Github';


export type PostType = {
	title: string
	slug: string
	description: string
	date: string
	categories: CategoriesSlug[] | CategoryType[]
	author: AuthorSlug | AuthorType
	published: boolean
	imgSrc: string
	imgAlt: string
}