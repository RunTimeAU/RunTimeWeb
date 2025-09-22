<script>
import { events } from "$lib/data/events";
let selected = 0;
</script>

<div class="container">
  <h2>Upcoming Events</h2> 
  <div class="eventDetail">
    <p class="evenTitle">{events[selected].title}</p>
    <p class="eventDate">{events[selected].date}</p>
    <p class="eventLocation">{events[selected].location}</p>
    <p class="moreInfo"><a href="/Calendar">More info</a></p>
  </div>
  <div class="indexDots">
    {#each events as _, index}
      <div class="dot {selected === index ? 'active' : '' }" on:click={() => selected = index}></div>
    {/each}
  </div>
</div>

<style>
.container {
  border: 1px solid rebeccapurple;
}

.eventDetail {
  border: 1px solid pink;
}

.indexDots {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 7px;
}
.dot {
  border: 1px solid green;
  border-radius: 50%;
  height: 10px;
  width: 10px;
}
.dot:hover {
  background: green;
  cursor: pointer;
}

.active {
  background: green;
}
</style>
