<script>
    import Question from "./Question.svelte";

    export let quizName = "Darren's Quiz";
    let quiz = getQuiz()

    const api_url = "https://opentdb.com/api.php?amount=10&category=12&type=multiple"
    async function getQuiz() {
        const res = await fetch(api_url)
        let quiz = await res.json()
        console.log(quiz)
        return quiz
    }

    function handleClick() {
        quiz = getQuiz()
    }

</script>


<div>
    <h2>{quizName}</h2>

    <button on:click={handleClick}>Get Questions</button>

    {#await quiz}
        <h4>Loading...</h4>
        
    {:then data} 
        
        
        {#each data.results as question}
            <Question {question} />
        {/each}
    {/await}



</div>

<style>
    /* h4 {
        color: red;
    } */
</style>