<script>
	import { onDestroy } from 'svelte';
    import tippy from 'tippy.js'; // npm i tippy.js
    import 'tippy.js/dist/tippy.css'

    let content = 'Tooltip'

    function tooltip(element, options) {
        const tooltip = tippy(element, options)

        return {
            update(options) {
                tooltip.setProps(options)
            },
            destroy() {
                tooltip.destroy()
            }
        }
    }

</script>

<input bind:value={content} />

<button use:tooltip={{ content }}>Hover</button>