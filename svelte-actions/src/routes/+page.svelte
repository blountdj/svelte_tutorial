<script>
	import { animate, stagger } from 'motion'

	function animateText(element, { color } = { color: 'orangered' }) {
		const text = element.innerText.split('')

		element.innerHTML = ''

		text.forEach((letter) => {
			element.innerHTML += `
        <span class="letter">${letter}</span>
      `
		})

		animate(
			[...element.children],
			{ color, y: [0, 30, -60, 0], rotate: 360 },
			{ duration: 1, delay: stagger(0.1), repeat: Infinity }
		)
	}
</script>

<h1
  use:animateText={{ color: 'green' }}
  class="letters"
>
  Svelte
</h1>
<!-- ... -->



<style>
    .letters {
        display: flex;
        gap: 0.5rem;
        font-size: 4rem;
        font-weight: 600;
        text-transform: uppercase;

        & .letter {
            display: inline-block;
        }
    }
</style>