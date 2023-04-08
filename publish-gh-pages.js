import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		user: {
			name: 'Tim Nordenfur',
			email: 'tim@gurka.se'
		},
		dotfiles: true
	},
	() => { console.log('deployed to gh-pages'); }
);
