import SkillList from '@/src/ui/skills/skill-list';

export const dynamic = 'force-dynamic';

export default async function Home() {
	return (
		<main>
			<h1>
				Welcome to the Web Resume <br />
				of Senior Fullstack Developer
				<br /> Jamie A Cameron
			</h1>
			<h2>
				I am a senior, fullstack javascript developer in the Guelph/KW area who
				specializes in developing production level websites & apps using Next.js
				and React. I build apps using a combination of server and client side
				rendering to maximize performance in the browser, regardless of device
				or environment.
			</h2>
			<h3>
				As someone who has worked in several positions over the years, and worn
				a lot of different hats, these are the skills I consider to be my main
				areas of expertise:
			</h3>
			<SkillList type='primary' />
		</main>
	);
}
