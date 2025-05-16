import { db } from './clientApp';
import { getDocs, query, collection, getFirestore } from 'firebase/firestore';

export async function getSkills(db) {
	let q = query(collection(db, 'skills'));
	const results = await getDocs(q);
	return results.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		};
	});
}
