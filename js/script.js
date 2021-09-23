/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Map': {
		title: 'Map',
		subtitle: 'Locations in the game are marked with Blue Circles. Students are marked with Red Triangles',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'Make sure you enable notifications',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Barold the Raccoon',
		directory: 'Guide',
		color: '#5bcaff',
		sprites: {
			normal: 'normal.png',
			love: 'love.png',
			angry: 'angry.png',
			sad: 'sad.png',
			sweat: 'sweat.png',
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show character y normal at center with fadeIn',

		'y Welcome to ACM\'s Scavenger Hunt! (Click to read the next dialogue) ',
		'y (You can also click while the text is being revealed to show it all at once.)',
		'show character y love at center with fadeIn',

		'y In this game, you\'ll be talking to various UCSD students and helping them find the campus resources that they need! ',
		'show character y normal at center with fadeIn',

		'y Some information will be given to you through text in the game, but you can also use any campus websites or maps that you find online.',
		'y Try to get as many quests done as quickly as possible! The first teams to finish will earn prizes!',
		'y When you\'re finished with the game, message the host, Fiona! If you don\'t finish before the two hours are up, just send Fiona a screenshot of where you\'re at and how many quests you\'ve completed.',

		{
			'Input': {
				'Text': 'What is your team name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'y Hello Team {{player.name}}!', 
		{
			'Choice': {
				'Dialog': 'y Would your team like a map?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		},
		
	],

	'Yes': [
		'y Here\'s a map you can use.',

		'show message Map',

		'jump Return'
	],

	'No': [
		'show character y sweat at center with fadeIn',
		'y Oh, well, suit yourself!',
		{
			'Choice': {
				'Yes': {
					'Text': 'Yeah, I am suiting myself!',
					'Do': 'jump Return'
				},
				'No': {
					'Text': 'Actually, we\'d like a map.',
					'Do': 'jump Yes'
				}
			}
		},
		'show character y normal at center with fadeIn',
		'jump Return'
	],

	'Return': [
		'y As you help out UCSD students, you can save your game by clicking "Save" on the bottom right of this text box. This way, your progress will be saved even if you accidentally close the browser window, and you can pick up where you left off by clicking Load on the home screen and clicking on the saved game.',
		'y If you need assistance, message the host on Zoom (Fiona Chen) or ping her on the ACM Discord (Fiona | schleepy). Have fun!',
		'end'
	],
	
});