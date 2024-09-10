<script>
    import { page } from '$app/stores';
    import { counter } from '$lib/counter' ;

    export let data;

    // OK - pass the data to the component
    console.log('data:' + data.count)

    // OK - or ruse the '$page.data' store
    console.log('$page.data:' + $page.data.count)
</script>


<h1>The count is {$counter}</h1>

<pre>
    {JSON.stringify($page, null, 2)}
</pre>

