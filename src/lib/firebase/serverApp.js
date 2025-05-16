// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import 'server-only';

import { cookies } from 'next/headers';
import { initializeServerApp, initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

// Returns an authenticated client SDK instance for use in Server Side Rendering
// and Static Site Generation
export async function getAuthenticatedAppForUser() {
	const authIdToken = (await cookies()).get('__session')?.value;
	const firebaseConfig = {
		apiKey: 'AIzaSyChH78UTlloPMk7mbQhBTWI0qmrqv0flBY',
		authDomain: 'next-portfolio-jac.firebaseapp.com',
		projectId: 'next-portfolio-jac',
		storageBucket: 'next-portfolio-jac.firebasestorage.app',
		messagingSenderId: '893097224394',
		appId: '1:893097224394:web:68f14a47759b7155656c33',
		measurementId: 'G-0Y8154W05N',
	};

	const firebaseServerApp = initializeServerApp(initializeApp(firebaseConfig), {
		authIdToken,
	});

	const auth = getAuth(firebaseServerApp);
	await auth.authStateReady();

	return { firebaseServerApp, currentUser: auth.currentUser };
}
