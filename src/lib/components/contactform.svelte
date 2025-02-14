<script lang="ts">
    function handleSubmit(event: Event) {
        event.preventDefault();
        console.log("Form submitted");
    }
</script>

<div class="contact-form">
    <form on:submit={handleSubmit}>
        <input id="email" type="email" placeholder="Type your email" required>
        <input id="subject" type="text" placeholder="Subject" required>
        <input id="msg" type="text" placeholder="Type your message" required>
        <button id="submitBtn" type="submit">Submit</button>
    </form>
</div>

<style>
    .contact-form {
        justify-items: center;
    }
    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50vw;
    }
    
    form > * {
        border: 2px solid var(--primary-color);
        border-radius: 5px;
    }

    form input {
        height: 20px;
        width: 400px;
    }

    form #msg {
        height: 200px;
    }

</style>