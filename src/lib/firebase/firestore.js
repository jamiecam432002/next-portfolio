import { getDocs, query, collection, where, orderBy } from 'firebase/firestore';

export async function getSkills(db, type) {
	const skillsRef = collection(db, 'skills');
	const q = query(skillsRef, where('type', '==', type), orderBy('rank'));
	const results = await getDocs(q);
	return results.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		};
	});
}
