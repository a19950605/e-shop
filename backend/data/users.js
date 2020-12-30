import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Jonh Doe',
		email: 'Jonh@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Annie Doe',
		email: 'Annie@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
