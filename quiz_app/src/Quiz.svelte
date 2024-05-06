<script>
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
    import Question from "./Question.svelte";
    import Modal from './Modal.svelte';
    export let quizName = "Darren's Quiz";
    let activeQuestion = 0
    import { score } from './store.js'
    let quiz = getQuiz()
    let isModalOpen = false


    onMount(() => {
        console.log('I mounted')
    })

    beforeUpdate(() => {
        console.log('before update')
    })

    afterUpdate(() => {
        console.log('after update')
    })

    const api_url = "https://opentdb.com/api.php?amount=10&category=12&type=multiple"
    async function getQuiz() {
        const res = await fetch(api_url)
        let quiz = await res.json()
        console.log(quiz)
        return quiz
    }

    function nextQuestion() {
        activeQuestion = activeQuestion + 1
    }

    function resetQuiz() {
        isModalOpen = false
        score.set(0)
        quiz = getQuiz()
        activeQuestion = 0
    }

    // Reactive statement
    $: if ($score > 5) {
        isModalOpen = true
    }

    // Reaction declaration
    $: questionNumber = activeQuestion + 1

</script>


<div>
    <h2>{quizName}</h2>

    <button on:click={resetQuiz}>Start New Quiz</button>

    <h3>My Score: {$score}</h3>
    <h4>Question #{questionNumber}</h4>

    {#await quiz}
        <h4>Loading...</h4>
    {:then data} 
        
        {#each data.results as question, index}
            {#if index === activeQuestion}
                <div in:fly={{x: 100}} out:fly={{x: -200}} class='fade-wrapper'>
                    <Question {nextQuestion} {question} />
                </div>
            {/if}
        {/each}
    {/await}
</div>

{#if isModalOpen}
    <Modal on:close={resetQuiz}>
        <h2>You won!</h2>
        <p>Congrats</p>
        <button on:click={resetQuiz}>Start Over</button>
    </Modal>
{/if}


<style lang="scss">
    /* h4 {
        color: red;
    } */

    .fade-wrapper {
        position: absolute;
    }
</style>