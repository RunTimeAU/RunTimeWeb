<script lang="ts">
import { sendEmail } from '$lib/utils/email.js';

let email = "";
let subject = "";
let msg = "";
let name = "";

async function handleSubmit() {
  try {
    const res = await sendEmail(subject, name, email, msg);
    alert("Email send successfully.");
  } catch(err) {
    alert("An error occurred when trying to send the email.");
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
      <p class={name ? "above" : "center"}>Name</p>
      <input bind:value={name} id="name" type="text" placeholder="Name" required />
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
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  color: var(--primary-color);
  width: 100%;
}
form input {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--primary-color);
  padding: 14px;
}

form input::placeholder {
  color: var(--primary-color);
}

form input:focus {
  outline: none;
  border: none;
}

form label:focus-within {
  border-color: var(--secondary-color);
}

form button {
  color: var(--primary-color);
  background: transparent;
  border: none;
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
  color: var(--primary-color);
  border-radius: 4px;
  padding: 0 6px;
  font-size: 0.6rem;
}

.above {
  top: -15px;
  left: 24px;
  background: var(--background-color);
  border: 1px solid var(--secondary-color);
  font-size: 0.7rem;
}

.center {
  top: 50%;
  left: 6px;
  border: 1px solid transparent;
  opacity: 0;
}
</style>
