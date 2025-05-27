import SkillList from '@/src/ui/skills/skill-list';

export const metadata = {
	title: {
		template: '%s | Jamie A Cameron',
	},
	description:
		'In my decade as a front end and fullstack developer I have picked up a lot of skills and used a lot of tools. This page lists my secondary skills, all things I am more than competent in.',
};

export default function Page() {
	return (
		<>
			<h1>My Secondary Skills</h1>
			<h3>
				In more than a decade I have worn a number of hats and developed a very
				large toolbox of skills, across both the front end and back end. In
				addition to my primary skills listed on the home page I am also
				extremely competent in the following:
			</h3>

			<SkillList type='secondary' />
		</>
	);
}
