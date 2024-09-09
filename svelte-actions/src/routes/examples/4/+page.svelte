<script>
    import { enhance } from '$app/forms'

</script>

<form 
    method="POST"
    use:enhance={({ formElement, formData }) => {
        console.log(formElement, formData )
    }} 
>

    <input name="value" type="text" />
    <button>Submit</button>
</form>

<style>
    form {
        display: grid;
        gap: 1rem;
    }
</style>
