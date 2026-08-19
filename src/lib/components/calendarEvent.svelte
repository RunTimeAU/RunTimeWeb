<script>
// @ts-nocheck

export let title;
export let date;
export let description;
export let location;
export let link = "";
export let linkText = "";
</script>

<div class="eventBox">
  <p id="title">{title}</p>
  <p id="dateAndLocation">{date} @ {location}</p>
  <p id="desc">{description}</p>
  {#if link}
    <a class="eventLink" href={link} target="_blank" rel="noopener noreferrer">
      {linkText || 'Learn more'}
    </a>
  {/if}
</div>

<style>
.eventBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 15px;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 0;
  box-sizing: border-box;
}


#title {
  padding: 0;
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 0;
}

#dateAndLocation {
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 0.8em;
  color: var(--secondary-color);
  border-bottom: 1px solid black;
}

#desc {
  font-size: 1.1em;
  text-align: center;
}

.eventLink {
  margin-top: 10px;
  padding: 6px 14px;
  color: white;
  background-color: var(--secondary-color);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.eventLink:hover {
  opacity: 0.85;
}
</style>
