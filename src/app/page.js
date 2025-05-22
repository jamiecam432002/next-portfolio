import { Roboto } from 'next/font/google';
import SkillList from '@/src/ui/components/SkillList/SkillList/SkillList';
import { getAuthenticatedAppForUser } from '../lib/firebase/serverApp';
import { getSkills } from '@/src/lib/firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import SkillListItem from '../ui/components/SkillList/SkillListItem/SkillListItem';

export const dynamic = 'force-dynamic';

const roboto = Roboto({
	display: 'swap',
	subsets: ['latin'],
	weight: ['400'],
});

export default async function Home() {
	const { firebaseServerApp } = await getAuthenticatedAppForUser();
	const skills = await getSkills(getFirestore(firebaseServerApp));
	return (
		<>
			<h1>
				Welcome to the Web Portfolio of <br />
				React/NextJS/Angular developer
				<br /> Jamie A Cameron
			</h1>
			<h2 className={roboto.className}>
				I am a web developer in the Guelph/KW area who specializes in developing
				responsive, lightweight websites & apps that utilize cutting-edge CSS,
				highly semantic HTML, and look great on any device or browser. My
				particular interest is in Angular Apps (8+) using a combination of
				server side rendering, lazy-loading and Angular Material.
			</h2>
			<h3>
				If you are looking for a brief summary of the skills I hang my hat on,
				look no further:
			</h3>
			<SkillList initialSkills={skills}>
				{skills &&
					skills.map((skill) => (
						<SkillListItem key={skill.title} skill={skill} />
					))}
				;
			</SkillList>
		</>
	);
}
