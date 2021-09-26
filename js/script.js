/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Map': {
		title: 'Map',
		subtitle: 'Pink squares indicate some of the key areas in the game, red lines show paths from place to place.',
		body: `
			<p><a href='https://imgur.com/TtnxgHz'>Marked Map</a> - Campus map marked indicating locations in the game.</p>
			<p><a href='https://maps.ucsd.edu/map/default.htm'>Interactive Map</a> - Interactive UCSD campus map.</p>
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
	'jubilife' : 'jubilife.mp3',

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
	'acmbg': 'acm_bg.png',
	'geisel': 'Geisel.png',
	'fallenstar': 'fallenstar.jpg',
	'geiselpeterson': 'geiselpeterson.png',
	'librarywalk': 'librarywalk.png',
	'petersonhall': 'petersonhall.png',
	'pricecenter': 'pricecenter.png',
	'sesixth': 'sesixth.png',
	'pricefirst': 'pricecenterfirst.png',
	'pricesecond': 'pricecentersecond.png',
	'librarywalkprice': 'librarywalkprice.png',
	'geiselfirst': 'geiselfirst.png',
	'studentcentergym': 'gymstudentcenter.png',
	'maingym' : 'maingym.png',
	'oldstudentcenter' : 'oldstudentcenter.png',
	'galbraithhall' : 'galbraithhall.png',
	'revelle': 'revelle.png',
	'64': '64.png',
	'scb': 'scb.png',
	'WLHhall': 'wlhhall.png',
	'wlh': 'wlh.png',
	'mae' : 'mae.png',
	'warrenpath': 'warrenpath.png',
	'canyonvistaoutside': 'canyonvistaoutside.png',
	'canyonvista': 'canyonvista.png',
	'warren': 'warren.png',
	'studentactivitycenter':'studentactivitycenter.png',
	'studentcenterold' : 'studentcenterold.png'

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
		'show background acmbg with fadeIn',
		'show character y normal at center with fadeIn',

		'y Welcome to ACM\'s Scavenger Hunt! (Click to read the next dialogue) ',
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
		'show character y normal at center with fadeIn',
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
					'Do': 'jump PissedBarold'
				},
				'No': {
					'Text': 'Actually, we\'d like a map.',
					'Do': 'jump Yes'
				}
			}
		},
	],

	'PissedBarold': [
		'show character y angry with fadeIn',
		'y Okay okay, the sass is soooo unnecessary. >:(',
		'jump Return'
	],

	'Return': [
		'show character y normal at center with fadeIn',
		'y As you help out UCSD students, you can save your game by clicking "Save" on the bottom right of this text box. This way, your progress will be saved even if the game glitches or you accidentally close the browser window.',
		'y You\'ll be able to pick up where you left off by clicking Load on the home screen and clicking on the saved game.',
		'y If you haven\'t been doing so already, you can also reveal all the dialogue at once by clicking while the text is being revealed. Text speed can also be changed in the settings.',
		'y If you need assistance, message the host on Zoom (Fiona Chen) or ping her on the ACM Discord (Fiona | schleepy). Have fun!',
		'hide character y with fadeOut',
		'jump DroppingIn'
	],

	'DroppingIn':[
		'show background geisel with fadeIn',
		'show character y normal at center with fadeIn',
		'play music jubilife with loop',
		'y This is Geisel, UCSD\'s iconic library! You\'ve probably already seen it, so we\'re starting here.',
		'hide character y',
		'jump Geisel'
	],

	'Geisel':[
		'show background geisel with fadeIn',
		

		{'Choice': {
			'Dialog': 'y Geisel Library! An invaluable resource of literature and research. Also a nice place to study.',
			'Class': 'navigationBox',
			'turnLeft': {
				'Text': 'Path to Peterson Hall',
				'Do': 'jump GeiselPetersonPath',
				'Class': 'turnLeftButton',
			},
			'turnRight': {
				'Text': 'Fallen Star',
				'Do': 'jump FallenStar',
				'Class': 'turnRightButton',
			},
			'turnAround': {
				'Text': 'Library Walk',
				'Do': 'jump LibraryWalk',
				'Class': 'turnAroundButton',
			},
			'tellMeMore': {
				'Text': 'Tell Me More!',
				'Do': 'jump GeiselInfo',
				'Class': 'tellMeMore',
			},
		}},
	],

	'GeiselInfo': [
		'show character y normal',
		'show background geiselfirst with fadeIn',
		'y Geisel\'s 4th to 8th floors is composed of the library collection and study space. Geisel\'s first and second floor is composed of service desks and staff work areas.',
		'y In addition to physically or virtually accessing Geisel\'s collection, you can also reserve group study rooms.',
		'y The Teaching and Learning commons is also near Geisel. Here, both educators and students can work on their teaching and learning through various types of tutoring, collaboration with peers, and study groups.',
		'y The commons also offer writing support and summer programs.',
		'hide character y',
		'jump Geisel'
	],

	'GeiselPetersonPath':[
		'show background geiselpeterson',

		{'Choice': {
			'Dialog': 'y A path. You can see Geisel from here!',
			'Class': 'navigationBox',
			'forward': {
				'Text': 'Geisel Library',
				'Do': 'jump Geisel',
				'Class': 'forwardButton',
			},
			'turnAround': {
				'Text': 'Peterson Hall',
				'Do': 'jump PetersonHall',
				'Class': 'turnAroundButton',
			}
		}},
	],

	'FallenStar':[
		'show background fallenstar',

		{'Choice': {
			'Dialog': 'y Fallen Star. Do you ever wish you could bring your home to UCSD?',
			'Class': 'navigationBox',
			'turnRight': {
				'Text': 'Warren Lecture Hall',
				'Do': 'jump WLHhall',
				'Class': 'turnRightButton',
			},
			'turnAround': {
				'Text': 'Geisel Library',
				'Do': 'jump Geisel',
				'Class': 'turnAroundButton',
			}
		}},
	],

	'WLHhall':[
		'show background WLHhall',
		{'Choice': {
			'Dialog': 'y If you continue further in this direction, you\'ll reach Warren. Here, you can see Warren Lecture Hall.',
			'Class': 'navigationBox',
			'turnRight': {
				'Text': 'Warren Lecture Hall',
				'Do': 'jump WLH',
				'Class': 'turnRightButton',
			},
			'turnAround': {
				'Text': 'Fallen Star',
				'Do': 'jump FallenStar',
				'Class': 'turnAroundButton',
			},
			'forward': {
				'Text': 'Towards Warren + Canyon Vista',
				'Do': 'jump mae',
				'Class': 'forwardButton',
			},
		}},

	],

	'WLH' :[
		'show background wlh',
		{'Choice': {
			'Dialog': 'y Warren Lecture Hall. Basement dweller simulator.',
			'Class': 'navigationBox',
			'turnAround': {
				'Text': 'Back',
				'Do': 'jump WLHhall',
				'Class': 'turnAroundButton',
			},
		}},
	],

	'mae': [
		'show background mae',
		{'Choice': {
			'Dialog': 'y This is in front of MAE (Mechanical and Aerospace Engineering).',
			'Class': 'navigationBox',
			'turnAround': {
				'Text': 'Back',
				'Do': 'jump WLHhall',
				'Class': 'turnAroundButton',
			},
			'turnLeft': {
				'Text': 'Towards Warren + Canyon Vista',
				'Do': 'jump warrenpath',
				'Class': 'turnLeftButton',
			},
		}},
	],

	'warrenpath':[
		'show background warrenpath',
		{'Choice': {
			'Dialog': 'y If you continue further in this direction, you\'ll reach Warren. Here, you can see Warren Lecture Hall.',
			'Class': 'navigationBox',
			
			'turnAround': {
				'Text': 'MAE',
				'Do': 'jump mae',
				'Class': 'turnAroundButton',
			},
			'forward': {
				'Text': 'Towards Canyon Vista',
				'Do': 'jump canyonvista',
				'Class': 'forwardButton',
			},
		}},
	],

	'canyonvista': [
		'show background canyonvista',
		{'Choice': {
			'Dialog': 'y Canyon Vista! Come here for a meal or to buy from the market. Restaurants here are Fusion Grill, Fresh, Three-Sixty, Earl’s Coffee House.',
			'Class': 'navigationBox',
			
			'turnAround': {
				'Text': 'Leave Warren',
				'Do': 'jump warrenpath',
				'Class': 'turnAroundButton',
			},
			'forward': {
				'Text': 'See Canyon Vista view',
				'Do': 'jump canyonvistaoutside',
				'Class': 'forwardButton',
			},
		}},
	],

	'canyonvistaoutside': [
		'show background canyonvistaoutside',
		{'Choice': {
			'Dialog': 'y A view!',
			'Class': 'navigationBox',
			
			'turnAround': {
				'Text': 'Leave Canyon Vista',
				'Do': 'jump canyonvista',
				'Class': 'turnAroundButton',
			},
		}},
	],

	'LibraryWalk':[
		'show background librarywalk',

		{'Choice': {
			'Dialog': 'y Library Walk. A long, wide walkway for gathering and passing. Often used for student orgs and tables.',
			'Class': 'navigationBox',
			'forward': {
				'Text': 'Further down Library Walk',
				'Do': 'jump LibraryWalkPrice',
				'Class': 'forwardButton',
			},
			'turnAround': {
				'Text': 'Geisel Library',
				'Do': 'jump Geisel',
				'Class': 'turnAroundButton',
			}
		}},
	],

	'LibraryWalkPrice':[
		'show background librarywalkprice',

		{'Choice': {
			'Dialog': 'y Library Walk. You can see Price Center from here.',
			'Class': 'navigationBox',
			'turnAround': {
				'Text': 'Back up Library Walk',
				'Do': 'jump LibraryWalk',
				'Class': 'turnAroundButton',
			},
			'turnLeft': {
				'Text': 'Price Center',
				'Do': 'jump PriceCenter',
				'Class': 'turnLeftButton',
			},
		}},

	],

	'LibraryWalkChancellor':[

	],

	'PriceCenter':[
		'show background pricecenter',
		
		{'Choice': {
			'Dialog': 'y Price Center. A student center with restaurants, a bookstore, and some student orgs.',
			'Class': 'navigationBox',
			
			'turnAround': {
				'Text': 'Back up Library Walk',
				'Do': 'jump LibraryWalkPrice',
				'Class': 'turnAroundButton',
			},

			'tellMeMore': {
				'Text': 'Tell Me More!',
				'Do': 'jump PriceInfo',
				'Class': 'tellMeMore',
			}
		}},

	],

	'PriceInfo':[
		'show background pricefirst with fadeIn',

		'show character y normal',
		'y Price is pretty cool.',
		'show character y love',
		'y There\'s a bunch of food there, mostly on the first floor: Burger King, Tapioca Express, Cafe at The Loft, Seed + Sprout, Jamba, Panda Express, Rubio\'s Coastal Grill, Santorini\'s Greek Island Grill,  Starbucks, etc.',
		'show character y normal',

		'show background pricesecond with fadeIn',

		'y But Price has other useful things too.',
		'jump PriceInfo2',
	],

	'PriceInfo2':[
		{'Choice': {
			'Dialog': 'y What would you like to hear about?',
			'Center for Student Involvement': {
				'Text':'Center for Student Involvement',
				'Do': 'jump CSI',
			},
			'The Zone': {
				'Text': 'The Zone',
				'Do': 'jump ZoneInfo',
			},
			'APIMEDA Programs & Services': {
				'Text': 'APIMEDA Programs & Services',
				'Do': 'jump APIMEDAInfo',
			},

			'Cross Cultural Center': {
				'Text': 'Cross Cultural Center',
				'Do': 'jump CCC',
			},
			'Intertribal Resource Center': {
				'Text':'Intertribal Resource Center',
				'Do': 'jump IRC',
			},
			'That\'s all': {
				'Text':'That\'s all',
				'Do': 'jump hiding',
			}
		}},
	],

	'hiding':[
		'hide character y',
		'jump PriceCenter'
	],

	'CSI':[
		'y Located on the third floor, the Center for Student Involvement helps manage student organizations, events, sorority and fraternities, Communication and Leadership programs, and Community service.',
		'jump PriceInfo2'
	],

	'ZoneInfo':[
		'y At The Zone, students can focus on health and wellbeing through relaxation, healthy cooking, exercise, and creative expression.',
		'y There\'s also mental health resources-- counseling, workshops, and community-- as well as physical health resources-- covid testing and STI prevention.',
		'jump PriceInfo2'
	],

	'APIMEDAInfo': [ 
		'y On the second floor, you can find the Asian Pacific Islander Middle Eastern Desi American Programs & Services.',
		'y This program focuses on community, APIMEDA diversity, and helping students gain new practical skills',
		'jump PriceInfo2'
	],

	'CCC':[
		'y The Cross Cultural Center works for equity and inclusion on campus through social justice education and engagement with the community.',
		'y For those interested, the CCC also has internshisp available.',
		'jump PriceInfo2'
	],

	'IRC' :[
		'y Located on the second floor, the Intertribal Resource Center suppoprts Native American students at UCSD by facilitating educational access.',
		'jump PriceInfo2'
	],
	
	'PetersonHall':[
		'show background petersonhall',

		{'Choice': {
			'Dialog': 'y Peterson Hall. A lecture hall. Bleh! (joking, education is very important. Did you know that this hall is named after the founder of Jack-In-The-Box?)',
			'Class': 'navigationBox',
			'turnLeft': {
				'Text': 'South East Corner of Sixth College',
				'Do': 'jump SixthSE',
				'Class': 'turnLeftButton',
			},
			'turnRight': {
				'Text': 'Path to Geisel',
				'Do': 'jump GeiselPetersonPath',
				'Class': 'turnRightButton',
			},
		}},
	],

	'SixthSE':[
		'show background sesixth',
		{'Choice': {
			'Dialog': 'y This is an intersection at the South East corner of Sixth College. You can split off into a few different places here!',
			'Class': 'navigationBox',

			'turnRight': {
				'Text': 'Main Gymnasium',
				'Do': 'jump StudentCenterGym',
				'Class': 'turnRightButton',
			},
			'forward': {
				'Text': 'Peterson Hall',
				'Do': 'jump PetersonHall',
				'Class': 'forwardButton',
			},
		}},
	],

	'SocialSciencesBuilding':[

	],
	
	'StudentCenterGym':[
		'show background studentcentergym',

		{'Choice': {
			'Dialog': 'y This is right outside of Muir College, by the Main Gym and the old Student Center.',
			'Class': 'navigationBox',
			'turnLeft': {
				'Text': 'Old Student Center',
				'Do': 'jump oldStudentCenter',
				'Class': 'turnLeftButton',
			},
			'turnAround': {
				'Text': 'Back towards Sixth',
				'Do': 'jump SixthSE',
				'Class': 'turnAroundButton',
			},
			'turnRight': {
				'Text': 'Main Gymnasium',
				'Do': 'jump MainGym',
				'Class': 'turnRightButton',
			},
			'forward': {
				'Text': 'Galbraith Hall',
				'Do': 'jump GalbraithHall',
				'Class': 'forwardButton',
			},
		}},
	],

	'oldStudentCenter':[
		'show background oldstudentcenter',
		{'Choice': {
			'Dialog': 'y The original Student Center. A few Resource centers operate here!',
			'Class': 'navigationBox',
			'turnAround': {
				'Text': 'Between the student center and main gym',
				'Do': 'jump StudentCenterGym',
				'Class': 'turnAroundButton',
			},
			
			'forward': {
				'Text': 'Student Center B + ISPO',
				'Do': 'jump SCB',
				'Class': 'forwardButton',
			},
			
			'tellMeMore':{
				'Text': 'Tell Me More!',
				'Do': 'jump oldStudentCenterInfo',
				'Class': 'tellMeMore',
			}
		}},
	],

	'oldStudentCenterInfo':[
		'show background studentcenterold',
		'show character y',
		'y The original Student Center still has things going on!',
		{'Choice': {
			'Dialog': 'y Which would you like to hear about?',
			'Black Resource Center': {
				'Text': 'Black Resource Center',
				'Do': 'jump StudentCenterGym',
			},
			
			'LGBT Resource Center': {
				'Text': 'LGBT Resource Center',
				'Do': 'jump SCB',
			},
			
			'Women\'s Center':{
				'Text': 'Women\'s Center',
				'Do': 'jump oldStudentCenterInfo',
			},

			'That\'s all!' :{
				'Text': 'That\'s all!',
				'Do': 'jump oldStudentCenter',
			},
		}},
	],

	'BRC':[
		'show character y normal',
		'y The Black Resource Center provides a supportive community on camups for black students.',
		'y The center facilitates leadership and student success through its peer guidance program where first-years can form a network with each other and support each other.',
		'y BRC aims to help ease adjustment for first years and improve retention of students through their time at UCSD.',
		'y BRC also has an e-newsletter and "The Plug", which is a year long writing and opppoprtunity focused workshop.',
		'hide character y',
		'jump oldStudentCenterInfo'
	],
	'LGBTRC':[
		'show character y normal',
		'y The LGBTRC provides a space for the UCSD community to explore LGBT issues.',
		'y The center has its own library, the Rainbow Lending Library, composed of LGBTQ focused content, and provides programs relating to queerness as well as health resources.',
		'y The center also has the David Bohnett CyberCenter, equipped with computer, a laser printer, and a scanner.',
		'hide character y',
		'jump oldStudentCenterInfo'
	],
	'WomensCenterInfo':[
		'show character y normal',
		'y The Women\'s center is a meeting space as well as a source of education programs and academic resources.',
		'y It has Volunteer internship opppoprtunities, training and consultations, and it is also equippped with practical facilities.',
		'y Those facilities are a kitchen, a restroom with a shower, baby-changing stations, and a private room for nursing mothers',
		'y The Women\'s center also possesses a computer, and a library based around gender, diversity, and family issues.',
		'hide character y',
		'jump oldStudentCenterInfo'
	],


	'SCB':[ 
		'show background scb',
		{'Choice': {
			'Dialog': 'y Another part of the old Student Center. ISPO is based here.',
			'Class': 'navigationBox',
			'turnAround': {
				'Text': 'The rest of the old Student Center',
				'Do': 'jump oldStudentCenter',
				'Class': 'turnAroundButton',
			},
			'tellMeMore':{
				'Text': 'Tell Me More!',
				'Do': 'jump SCBInfo',
				'Class': 'tellMeMore',
			}
		}},
		
	],

	'SCBInfo':[
		'show character y',
		'y At Student Center B, you can talk to ISPO, which is the Internationl Students & Programs Office.',
		'y ISPO has resources related to immigrations services. Students can come to ISPO to request documents, inquire about working in the US, enrollment, and leaving/returning to UCSD/the US.',
		'y ISPO works with students through Zoom, emails, or through existing guides.',
		'hide character y',
		'jump SCB'
	],

	'MainGym':[
		'show background maingym',
		{'Choice': {
			'Dialog': 'y The Main Gym. This area is suited to many different types of exercise, and also hosts nonatheletic events.',
			'Class': 'navigationBox',
			'turnAround': {
				'Text': 'Between the student center and main gym',
				'Do': 'jump StudentCenterGym',
				'Class': 'turnAroundButton',
			},
			'tellMeMore':{
				'Text': 'Tell Me More!',
				'Do': 'jump MainGymInfo',
				'Class': 'tellMeMore',
			}
		}},

	],

	'MainGymInfo':[
		'show character y',
		'y The Main Gym hosts volleyball, basketball, martial arts, dance, lectures, concerts, and exhibitions.',
		'y It also has a workout playground program where people practice zumba, stretches, yoga, pilates, meditation, and aerial silk.',
		'show character y sweat',
		'y that\'s a lot of activity!',
		'hide character y',
		'jump MainGym'
	],

	'MuirSixth':[

	],

	'GalbraithHall' :[
		'show background galbraithhall',
		{'Choice': {
			'Dialog': 'y Galbraith Hall. Originally UCSD\'s main library, Galbraith now serves as base for CLICS, the department of theatre and dance, and CAPS.',
			'Class': 'navigationBox',
			'turnAround': {
				'Text': 'Towards Muir, Main Gym, Old Student Center',
				'Do': 'jump StudentCenterGym',
				'Class': 'turnAroundButton',
			},
			'turnRight': {
				'Text': '64',
				'Do': 'jump 64',
				'Class': 'turnRightButton',
			},
			'tellMeMore':{
				'Text': 'Tell Me More!',
				'Do': 'jump GalbraithInfo',
				'Class': 'tellMeMore',
			}
		}},

	],

	'GalbraithInfo' :[
		'show character y with fadeIn',
		'y Today, Galbraith Hall 190 serves as CAPS\' central office.',
		'y CAPS stands for Counseling and Psychological Services. CAPS offers services to students like counseling and mental health workshops.',
		'show character y love',
		'y CAPS also has community forums, outreach programs, consultations, and a variety of psychotherapies that cater to individuals or groups of people.',
		'show character y normal',
		'y CAPS can also be found elsewhere on campus: each of the undergrad colleges, the Student Health Center, OASIS, ISPPO, and the Camups Community Centers.',
		'hide character y ',
		'jump GalbraithHall'
	],

	'64':[
		'show background 64',

		{'Choice': {
			'Dialog': 'y 64. Food! Known for customizable burgers and private relaxation rooms.',
			'Class': 'navigationBox',
			'turnAround': {
				'Text': 'Rest of Revelle (Galbraith Hall)',
				'Do': 'jump GalbraithHall',
				'Class': 'turnAroundButton',
			},
		}},
	],

	'End Message':[
		'show character y love',
		'y You finished, hooray!',
		'y I hope you enjoyed using this event to learn about the campus.',
		'show character y sad',
		'y If you didn\'t enjoy it...',
		'show character y normal',
		'y I hope you at least learned something new about the campus!',
		'hide character y',
		'Just to clarify, this hunt doesn\'t cover every single resource available to you at UCSD. 1.Massive campus! and 2. I only started making this once I got to the actual campus, so I didn\'t have enough time to put everything I wanted in. ',
		'Thank you to Shirley for providing me with a list of important locations to include! If you\'d like that list for your own convenience, you can DM me on Discord(bunn_lord#6698)or Zoom.'
	]

});