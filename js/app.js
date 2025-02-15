console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')
	let sectionTag = document.createElement('section')
	sectionTag.setAttribute('id', 'middle-earth')
	for (let i = 0; i < lands.length; i++) {
		const articleTag = document.createElement('article')
		articleTag.setAttribute('id', `${lands[i]}`)
		articleTag.innerHTML = `<h1>, ${lands[i]} </h1>`
		sectionTag.appendChild(articleTag)
	}
	document.querySelector('body').appendChild(sectionTag)

	// 1. create a section tag with an id of middle-earth

	// 2. use a for loop to iterate over the lands array that does the following:

	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	const hobbitList = document.createElement("ul")
	for (let i = 0; i < hobbits.length; i++) {
		const hobbit = document.createElement('li')
		hobbit.setAttribute("class", "hobbit")
		hobbit.setAttribute("id", hobbits[i])
		hobbit.innerText = hobbits[i]
		hobbitList.appendChild(hobbit)
	}
	document.getElementById("The-Shire").appendChild(hobbitList)

	// display an `unordered list` of hobbits in the shire

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	const ring = document.createElement('div')
	ring.setAttribute("id", "the-ring")
	ring.setAttribute("class", "magic-imbued-jewelry")
	const Frodo = document.getElementById("Frodo Baggins").appendChild(ring)
	console.log(Frodo)
	

	// create a div with an id of `'the-ring'`

	// give the div a class of `'magic-imbued-jewelry'`

	// add the ring as a child of `Frodo`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	let enemies = document.createElement("ul")
	for (let i = 0; i < baddies.length; i++) {
		const badguys = document.createElement('li')
		badguys.setAttribute("class", "baddy")
		badguys.innerText = baddies[i]
		enemies.appendChild(badguys)
	}
	document.getElementById("Mordor").appendChild(enemies)

	// display an unordered list of baddies in Mordor

	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	let asideTag = document.createElement("ul")
	for (let i = 0; i < buddies.length; i++) {
		const allies = document.createElement('li')
		allies.setAttribute("class", "buddy")
		allies.setAttribute("id", buddies[i])
		allies.innerText = buddies[i]
		asideTag.appendChild(allies)
	}
	document.getElementById("Rivendell").appendChild(asideTag)

	// create an `aside` tag

	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	const rivendell = document.getElementById("Rivendell")
	const convoy = document.getElementsByClassName("hobbit")
	const travel = document.createElement("ul")
	while (convoy.length != 0) {
		travel.appendChild(convoy[0])
	}

	rivendell.appendChild(travel)

	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	document.getElementById("Strider").innerText = "Aragorn"

	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	
	const rivendell = document.getElementById("Rivendell")
	const theFellowship = document.createElement("div")
	theFellowship.id = "the-fellowship"
	rivendell.appendChild(theFellowship)
	const fellowHobbit = document.getElementById("Rivendell").getElementsByClassName("hobbit")
	const fellowAllies = document.getElementById("Rivendell").getElementsByClassName("buddy")

	
	for (let i = 0; i < fellowHobbit.length; i++) {
		theFellowship.appendChild(fellowHobbit[0])
	}
	for (let i = 0; i < fellowAllies.length; i++) {
		theFellowship.appendChild(fellowAllies[0])
	}

	document.getElementById("Rivendell").appendChild(theFellowship)
	console.log(theFellowship)

	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')

	document.getElementById("Gandalf the Grey").innerText = "Gandalf the White"
	const gandalf = document.getElementById("Gandalf the Grey")
	gandalf.style.border = "grey"
	gandalf.style.backgroundColor = "white"
	
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')

	alert("The Horn of Gondor has been blown!")
	alert("Boromir has been killed by the Uruk-Hai!")
	document.getElementById("Boromir").remove()
	// :[

	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')

	const frodo = document.getElementById("Frodo Baggins")
	const sam = document.getElementById('Samwise "Sam" Gamgee')
	const mordor = document.getElementById("Mordor")
	const mountDoom = document.createElement("div")
	mountDoom.id = "mount-doom"

	mordor.appendChild(frodo)
	mordor.appendChild(sam)
	mordor.appendChild(mountDoom)


	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')

	const gollum = document.createElement("div")
	gollum.id = "gollum"
	const mordor = document.getElementById("Mordor")
	mordor.appendChild(gollum)
	const ring = document.getElementById("the-ring")
	gollum.appendChild(ring)
	const mountDoom = document.getElementById("mount-doom")
	mountDoom.appendChild(gollum)

	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')

	
	document.getElementById("gollum").remove()
	
	const theShire = document.getElementById("The-Shire")
	const convoy = document.getElementsByClassName("hobbit")
	const travel = document.createElement("ul")
	while (convoy.length != 0) {
		travel.appendChild(convoy[0])
	}

	theShire.appendChild(travel)

	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
