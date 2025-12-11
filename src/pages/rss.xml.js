import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const interviews = await getCollection('interviews');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: interviews.map((interview) => ({
			...interview.data,
			link: `/interviews/${interview.id}/`,
		})),
	});
}
