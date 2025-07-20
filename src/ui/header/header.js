'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import {
	signInWithGoogle,
	signOut,
	onIdTokenChanged,
} from '@/src/lib/firebase/auth.js';
import { setCookie, deleteCookie } from 'cookies-next';

import styles from './header.module.css';
import HeaderLogo from './header-logo';
import HeaderNav from './header-nav';
import HireBtn from './hire-btn';

function useUserSession(initialUser) {
	useEffect(() => {
		return onIdTokenChanged(async (user) => {
			if (user) {
				const idToken = await user.getIdToken();
				await setCookie('__session', idToken);
			} else {
				await deleteCookie('__session');
			}
			if (initialUser?.uid === user?.uid) {
				return;
			}
			window.location.reload();
		});
	}, []);
	return initialUser;
}

export default function Header({ initialUser }) {
	const user = useUserSession(initialUser);

	const handleSignOut = (event) => {
		event.preventDefault();
		signOut();
	};

	const handleSignIn = (event) => {
		event.preventDefault();
		signInWithGoogle();
	};

	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerLogo}>
				<HeaderLogo />
			</div>
			<div className={styles.headerNav}>
				<HeaderNav />
			</div>

			<HireBtn />
		</header>
	);
}
