import Link from 'next/link';

export default async function UserPage({ params, searchParams }) {
	const parameters = await params;
	console.log(parameters);
	console.log(await searchParams);
	return (
		<div className='user-section'>
			<h1>The individual user {parameters.userId}</h1>
			<Link
				href={{
					pathname: '/',
					query: { name: 'penis' },
				}}>
				Back to home page
			</Link>
		</div>
	);
}
