<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap'
    import Flip from "gsap/dist/Flip";

    gsap.registerPlugin(Flip)

    // let dogs = gsap.utils.toArray(".figure");
    onMount(() => {
        let dogs = gsap.utils.toArray('figure');
        let bigDog = dogs[0]

        dogs.forEach((dog) => {
            dog.addEventListener("click", () => changeGrid(dog))
        })

        function changeGrid(dog) {
            if (dog === bigDog) return

            let state = Flip.getState(dogs)
            
            bigDog.dataset.grid = dog.dataset.grid
            dog.dataset.grid = "img-1"
            bigDog = dog;

            Flip.from(state, {
                absolute: true,
                ease: 'power1.inOut',
            })
        }

    });

</script>

<body>
    <div class="gallery">
        <figure data-grid="img-1">
            <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </figure>
        <figure data-grid="img-2">
            <img src="https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </figure>
        <figure data-grid="img-3">
            <img src="https://images.unsplash.com/photo-1558929996-da64ba858215?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </figure>
        <figure data-grid="img-4">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </figure>
        <figure data-grid="img-5">
            <img src="https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </figure>
        <figure data-grid="img-6">
            <img src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </figure>
    </div>
</body>

<style>

    body {
        min-height: 100vh;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    figure {
        position: relative;
        margin: 0;
        padding: 0;
    }

    img {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(9, 1fr);
        grid-gap: 1rem;
        width: 60vw;
        max-height: 60vh;
        aspect-ratio: 1/1;
    }

    figure[data-grid="img-1"] { grid-area: 1 / 1 / 7 / 7; }
    figure[data-grid="img-2"] { grid-area: 1 / 7 / 4 / 10; }
    figure[data-grid="img-3"] { grid-area: 4 / 7 / 7 / 10; }
    figure[data-grid="img-4"] { grid-area: 7 / 7 / 10 / 10; }
    figure[data-grid="img-5"] { grid-area: 7 / 4 / 10 / 7; }
    figure[data-grid="img-6"] { grid-area: 7 / 1 / 10 / 4; }

</style>