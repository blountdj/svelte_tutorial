


<!--  If you’re making a modal you should use the dialog element instead. 
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
-->

<script>

    import { scale } from 'svelte/transition'

    let open = false

    function openModal() {
        open = true
    }

    function closeModal() {
        open = false
    }

    function clickOutside(element) {
        
        function handleClick(event) {
            const targetEl = event.target

            if (element && !element.contains(targetEl)) {
                const clickOutsideEvent = new CustomEvent('outside')
                element.dispatchEvent(clickOutsideEvent)
            }
        }

        document.addEventListener('click', handleClick, true)

        return {
            destroy() {
                document.removeEventListener('click', handleClick, true)
            }   
        }
    }

</script>


{#if open}
  <div class="background">
    <div 
        class="modal" 
        on:outside={closeModal}
        use:clickOutside 
        transition:scale
    >
        <h2>Modal</h2>
        <p>What's up?</p>
    </div>
  </div>
{/if}

<button on:click={openModal}>
    Open
</button>
  

<style>
    .background {
        position: absolute;
        inset: 0;
        display: grid;
        place-content: center;

        & .modal {
        width: 400px;
        min-height: 300px;
        padding: 2rem;
        background-color: hsl(200 10% 10% / 80%);
        backdrop-filter: blur(20px);
        border: 1px solid hsl(200 10% 12%);
        border-radius: 8px;
        box-shadow: 1px 1px 10px hsl(0 0% 0% / 20%);

            & p {
                margin-top: 1rem;
            }
        }
    }
</style>
