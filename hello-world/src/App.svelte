<script>
	const name = 'Darren';
	const channel = '<b>Codevolution</b>';
	const hack = `<a href="#" onclick="alert('You have been hacked')">Win a prize!</a>`
	const id = 'heading';
	const disabled = false;
	const status = 'success'
	const promoted = true;

	const num = 0;

	const names = ['Bruce', 'Clark', 'Diana'];
	const fullName = [
		{ first: 'Bruce', last: 'Wayne' },
		{ first: 'Clark', last: 'Kent' },
		{ first: 'Princess', last: 'Diana' }
	]

	let count = 0;

	function handleClick(event, stepSize) {
		count += stepSize
	}

	const formValues = {
		name: '',
		profileSummary: '',
		country: '',
		jobLocation: [],
		remoteWork: false,
		skillSet: [],
		yearsOfExperience: ''
	}

	function submitForm() {
		console.log(formValues)	
	}

	let firstName = 'Bruce';
	let lastName = 'Wayne';
	$: fullName2 = `${firstName} ${lastName}`
	$: {
		const greet = `Fullname is ${firstName} ${lastName}`;
		console.log(greet)

	}
	let items = [
		{
			id: 1,
			title: 'TV',
			price: 100
		},
		{
			id: 2,
			title: 'Phone',
			price: 200
		},
		{
			id: 3,
			title: 'Laptop',
			price: 300
		}
	]
	$: total = items.reduce((total, item) => total + item.price, 0)

	let volume = 0

	$: if (volume < 0) {
		alert('Cant go lower')
		volume = 0
	} else if (volume > 20) {
		alert('Cant go higher')
		volume = 20
	} 

    import ComponentC from './components/ComponentC.svelte';
	import Greet from './components/Greet.svelte'
	const name3 = 'Vishwas'
	const channel2 = 'Codevolution'
	const obj = {
		name: 'Barry',
		heroName: 'Flash'
	}

	import { setContext } from 'svelte';
	const userName = 'RenegadeMaster';
	setContext('username-context', userName);

	import Popup from './components/Popup.svelte';
	let showPopup = false
	function closePopup(event) {
		showPopup = false
		console.log(event.detail)
	}

	import Outer from './components/Outer.svelte';
	function handleGreet(event) {
		alert(event.detail)
	}

	import Button from './components/Button.svelte';
    import Card from './components/Card.svelte';
	import CardNamed from './components/CardNamed.svelte';
    import NameList from './components/NameList.svelte';
    import ChildStyles from './components/ChildStyles.svelte';
    import PostList from './components/PostList.svelte';
    import AutoFocus from './components/AutoFocus.svelte';
    import TabA from './components/TabA.svelte';
	import TabB from './components/TabB.svelte';
	import TabC from './components/TabC.svelte';
	let activeTab = TabA;

	import Counter, { getTotalCount } from './components/Counter.svelte';
    import Display from './components/Display.svelte';
    import Increment from './components/Increment.svelte';
    import Decrement from './components/Decrement.svelte';
    import Reset from './components/Reset.svelte';
    import Timer from './components/Timer.svelte';
</script>

<main>
	<Greet name='Darren' heroName='MegaMan' />
	<Greet name='Clark' heroName='Superman' />
	<Greet name='Diana' heroName='Wonder Woman' />
	<Greet {name3} />
	<Greet {...obj} />

	<hr>

	<h2>App component username = {userName}</h2>
	<ComponentC />

	<hr>

	<h2 class="underline">Underlined Text</h2>
	<h2 class={status}>Status</h2>
	<h2 class:promoted>Movie Title</h2>
	<h1>Hello {name}</h1>
	<div>{@html channel}</div>
	<div>{@html hack}</div>
	<h2 {id}>This is a heading</h2>
	<button {disabled}>Bind</button>
	<hr>

	{#if num === 0}
		<h2>The number is 0</h2>
	{:else if num < 0}
		<h2>The number is negative</h2>
	{:else if num > 0}
		<h2>The number is positive</h2>
	{:else}
		<h2>The number is not a number</h2>
	{/if}

	<hr>

	{#each fullName as name, index (name.first)}
		<h2>{index + 1}. {name.first} {name.last}</h2>
	{/each}

	<hr>

	{#each names as name, index (name)}
		<h2>{index + 1}. {name}</h2>
	{/each}

	<hr>

	<button on:click={(event) => handleClick(event, 5)}>Clicked {count} times</button>

	<hr>

	<pre>
		{JSON.stringify(formValues, null, 2)}
	</pre>
	<form on:submit|preventDefault={submitForm}>
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" bind:value={formValues.name}/>
		</div>

		<div>
			<label for="profile">Profile Summary</label>
			<textarea name="profile" id="profile" bind:value={formValues.profileSummary}/>
		</div>

		<div>
			<label for="country">Country</label>
			<select name="country" id="country" bind:value={formValues.country}>
				<option value="">Select a Country</option>
				<option value="india">India</option>
				<option value="australia">Australia</option>
				<option value="usa">USA</option>
				<option value="uk">UK</option>
			</select>
		</div>

		<div>
			<label for="location">Job Location</label>
			<select name="location" id="location" bind:value={formValues.jobLocation} multiple>
				<option value="">Select a Country</option>
				<option value="india">India</option>
				<option value="australia">Australia</option>
				<option value="usa">USA</option>
				<option value="uk">UK</option>
			</select>
		</div>

		<div>
			<input type="checkbox" id="remoteWork" bind:checked={formValues.remoteWork}>
			<label for="remoteWork">Open to remote work</label>
		</div>

		<div>
			<label>Skill set</label>
			<input type="checkbox" id="html" value="html" bind:group={formValues.skillSet}>
			<label for="html">HTML</label>
			<input type="checkbox" id="css" value="css" bind:group={formValues.skillSet}>
			<label for="css">CSS</label>
			<input type="checkbox" id="javascript" value="javascript" bind:group={formValues.skillSet}>
			<label for="javascript">Javascript</label>
		</div>

		<div>
			<label>Years of Experience</label>
			<input type="radio" id="0-2" value="0-2" bind:group={formValues.yearsOfExperience}>
			<label for="0-2">0-2</label>
			<input type="radio" id="3-5" value="3-5" bind:group={formValues.yearsOfExperience}>
			<label for="3-5">3-5</label>
			<input type="radio" id="6-10" value="6-10" bind:group={formValues.yearsOfExperience}>
			<label for="6-10">6-10</label>
			<input type="radio" id="10+" value="10+" bind:group={formValues.yearsOfExperience}>
			<label for="10+">10+</label>
		</div>

		<div>
			<button>Submit</button>
		</div>

	</form>

	<button
		on:click={() => {firstName = 'Clark', lastName = 'Kent'} }
	>Change Name</button>

	<h2>{firstName} {lastName}</h2>
	<h2>{fullName2}</h2>


	<button on:click={() => (items = [...items, {id: 4, title: 'Keyboard', price: 50}])}>Add Item</button>
	<h2>Total - {total}</h2>

	<h2>Cuurent volume {volume}</h2>
	<button on:click={() => volume += 2}>Increase volume</button>
	<button on:click={() => volume -= 2}>Decrease volume</button>

	<hr>
	<button on:click={() => showPopup = true}>Show Popup</button>
	{#if showPopup}
		<Popup on:close={closePopup} />
	{/if}

	<hr>

	<Outer on:greet={handleGreet}/>
	<Button on:click={() => alert('Button Clicked')} />

	<hr>

	<Card>Card content</Card>
	<Card><h2>Card content</h2></Card>
	<Card></Card>
	<Card><img src="https://picsum.photos/200"></Card>

	<hr>

	<CardNamed>
		<div slot="header">
			<h3>Header</h3>
		</div>
		<div slot="content">
			<img src="https://picsum.photos/200" alt="">
		</div>
		<div slot="footer">
			<button>View Details</button>
		</div>
	</CardNamed>
	<CardNamed>
		<div slot="header">
			<h3>Header - no footer</h3>
		</div>
		<div slot="content">
			<img src="https://picsum.photos/200" alt="">
		</div>
	</CardNamed>

	<hr>

	<NameList>
		<h3 slot='hero' let:firstName let:lastName>
			{firstName} {lastName}
		</h3>
	</NameList>

	<NameList>
		<h3 slot='hero' let:firstName let:lastName>
			{lastName} {firstName}
		</h3>
	</NameList>

	<NameList>
		<h3 slot='hero' let:firstName let:lastName>
			{firstName}
		</h3>
	</NameList>

	<hr>
	<h3>App component global style</h3>
	<h4>App component text</h4>
	<ChildStyles />

	<hr>

	<PostList />

	<hr>

	<AutoFocus />

	<hr>
	<button on:click={() => activeTab = TabA}>Tab A</button>
	<button on:click={() => activeTab = TabB}>Tab B</button>
	<button on:click={() => activeTab = TabC}>Tab C</button>

	<!-- {#if activeTab === 'TabA'}
		<TabA />
	{:else if activeTab === 'TabB'}
		<TabB />
	{:else if activeTab === 'TabC'}
		<TabC />
	{/if} -->

	<svelte:component this={activeTab}></svelte:component>

	<hr>
	<button on:click={() => alert(getTotalCount())}>Alert total count</button>
	<Counter />
	<Counter />
	<Counter />

	<hr>

	<Display />
	<Increment />
	<Decrement />
	<Reset />

	<hr>

	<Timer />

	<hr>

</main>

<style>

	:global(h3) {
		color: blue;
	}

	h4 {
		color: orange;
	}

	input + label {
		display: inline-flex;
	}

	.underline {
		text-decoration: underline;
	}

	.danger {
		color: red;
	}

	.success {
		color: olive;
	}

	.promoted {
		font-style: italic;
	}

	main {
		/* text-align: center; */
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>