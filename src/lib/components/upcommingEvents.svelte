<script>
import { events } from "$lib/data/events";
let selected = 0;
</script>

<div class="container">
  <h2>Upcoming Events</h2> 
  {#if events.length > 0}
    <div class="eventDetail">
      <p class="eventTitle">{events[selected].title}</p>
      <p class="eventDate">{events[selected].date}</p>
      <p class="eventLocation">{events[selected].location}</p>
      <p class="moreInfo"><a href="/Calendar">More info</a></p>
    </div>
    <div class="indexDots">
      {#each events as _, index}
        <div class="dot {selected === index ? 'active' : '' }" on:click={() => selected = index}></div>
      {/each}
    </div>
  {/if}
</div>

<style>
.container {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  align-items: center;
}


.container h2 {
  border-bottom: 1px solid var(--secondary-color);
  width: fit-content;
}

.eventDetail {
  padding: 7px;
}

.eventDetail a {
  text-decoration: none;
  color: var(--secondary-color);
}

.eventDetail a:hover {
  color: var(--secondary-color);
  filter: brightness(170%);
}

.indexDots {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 7px;
}
.dot {
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  height: 10px;
  width: 10px;
}
.dot:hover {
  background: var(--primary-color);
  cursor: pointer;
}

.active {
  background: var(--primary-color);
}
</style>
