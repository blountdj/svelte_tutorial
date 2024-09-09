<script>
    let show = false
    let content = ''


    function greet(element, content) {
        console.log('hi')

        const greetEvent = new CustomEvent('greet', { detail: 'hi'})
        element.dispatchEvent(greetEvent)

        element.animate([{ opacity: 0 }, { opacity: 1 }], 
        { duration: 2000,
          fill: 'forwards'
         })

        return {
            update(content) {
                console.log(({ content }))
            },
            destroy() { // runs when the element is removed
                console.log('bye')
            }
        }
    }

    function handleGreet(event) {
        console.log(event)
    }

</script>

<label>
    <input bind:checked={show} type="checkbox">
    Toggle
</label>

<br />

{#if show}
    <input bind:value={content}>

    <div on:greet={handleGreet} use:greet={content}>Action</div>
{/if}