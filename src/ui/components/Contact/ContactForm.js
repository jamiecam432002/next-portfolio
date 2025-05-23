'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/src/utils/send-email';

export default function ContactForm() {
	const { register, handleSubmit } = useForm();

	function onSubmit(data) {
		console.log(data);
		sendEmail(data);
	}
	return (
		<>
			<p className='text-2xl mb-5 mt-10'>** All fields are required</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-5'>
					<label
						htmlFor='name'
						className='mb-3 block text-2xl font-medium text-black'>
						Full Name
					</label>
					<input
						type='text'
						placeholder='Full Name'
						className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-2xl font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
						{...register('name', { required: true })}
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='email'
						className='mb-3 block text-2xl font-medium text-black'>
						Email Address
					</label>
					<input
						type='email'
						placeholder='example@domain.com'
						className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-2xl font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
						{...register('email', { required: true })}
					/>
				</div>
				<div className='mb-5'>
					<label
						htmlFor='message'
						className='mb-3 block text-2xl font-medium text-black'>
						Message
					</label>
					<textarea
						rows={4}
						placeholder='Type your message'
						className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-2xl font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
						{...register('message', { required: true })}></textarea>
				</div>
				<div>
					<button className='hover:shadow-form cursor-pointer rounded-md bg-[#a0b2a6] py-3 px-8 text-2xl font-semibold text-[#051f44] outline-none'>
						Submit
					</button>
				</div>
			</form>
		</>
	);
}
