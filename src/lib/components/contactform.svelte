<script lang="ts">
    import { title } from '../../stores/store.js';

    let email = "";
    let subject = "";
    let msg = "";

    function handleSubmit(event: Event) {
        specialEffect(email, subject, msg);
        event.preventDefault();
        console.log("Form submitted");
    }

    function specialEffect(email: String, subject: String, msg: String) {
        if (email == 'HamFraGames@gamesweb.dk' && subject == 'Hej' && msg == 'Det er Jeppe') {
            console.log('Special effect activated');
            title.set("RunTime X Jeppe Fra Games");
        }
    }
</script>

<div class="contact-form">
    <form on:submit={handleSubmit}>
        <label>
            <p class={email ? "above" : "center"}>Email</p>
            <input
                bind:value={email}
                id="email"
                type="email"
                placeholder="Email"
                required
            />
        </label>
        <label>
            <p class={subject ? "above" : "center"}>Subject</p>
            <input bind:value={subject} id="subject" type="text" placeholder="Subject" required />
        </label>
        <label>
            <p class={msg ? "above" : "center"}>Message</p>
            <input bind:value={msg} id="msg" type="text" placeholder="Message" required />
        </label>
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
        width: 30vw;
        gap: 14px;
    }

    form label {
        position: relative;
        border: 1px solid var(--primary-color);
        border-radius: 5px;
        color:white;
        width: 100%;
    }
    form input {
        width: 100%;
        border: none;
        background: transparent;
        color: white;
        padding: 14px;
    }

    form input::placeholder {
        color: white;
    }

    form input:focus {
        outline: none;
        border: none;
    }

    form label:focus-within {
        border-color: white;
    }

    form button {
        color: white;
        background: transparent;
        bordeR: none;
        padding: 10px 0;
        cursor: pointer;
        font-size: 1rem;
        display: grid;
        place-items: center;
    }

    form button:hover {
        color: var(--primary-color);
    }

    form #msg {
        height: 100px;
    }

    .center, 
    .above {
        position: absolute;
        transition: all 0.3s ease-in-out;
        transform: translateY(-50%);
        pointer-events: none;
        color: white;
        border-radius: 4px;
        padding: 0 6px;
        font-size: 0.6rem;
    }

    .above {
        top: -15px;
        left: 24px;
        background: var(--background-color);
        border: 1px solid white;
        font-size: 0.7rem;
    }

    .center {
        top: 50%;
        left: 6px;
        border: 1px solid transparent;
        opacity: 0;
    }
</style>
