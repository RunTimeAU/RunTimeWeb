<script>
export let title;
export let date;
export let description;
export let location;
</script>

<div class="eventBox">
  <p id="title">{title}</p>
  <p id="dateAndLocation">{date} @ {location}</p>
  <p id="desc">{description}</p>
</div>

<style>
.eventBox {
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 500px;
  padding: 0 20px 0 20px;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
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
</style>
