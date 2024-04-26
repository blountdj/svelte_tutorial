<script>
    const names = [
        { first: 'Bruce', last: 'Wayne' },
        { first: 'Clark', last: 'Kent' },
        { first: 'Princess', last: 'Diana' }
    ]
</script>

{#each names as name (name)}
    <slot name="hero" firstName={name.first} lastName={name.last} />
{/each}