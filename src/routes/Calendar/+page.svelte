<script>
// @ts-nocheck

import CalendarEvent from "$lib/components/calendarEvent.svelte";
import { weekly, events } from "$lib/data/events";
</script>

<div class="header">
  <h1>Calendar Page</h1>
</div>

<div class="events">
  <div class="weekly">
    <h2>Weekly Events</h2>
    {#if weekly.length > 0}
      {#each weekly as event}
        <CalendarEvent title={event.title} date={event.date} location={event.location} description={event.description}/>
      {/each}
    {:else}
      <p>There are currently no weekly runs planned. Come back later.</p>
    {/if}
  </div>
  <div class="upcoming">
    <h2>Upcoming Events</h2>
    {#if events.length > 0}
      {#each events as event}
          <CalendarEvent title={event.title} date={event.date} location={event.location} description={event.description}/>
      {/each}
    {:else}
      <p>There are currently no events planned. Come back later. </p>
    {/if}
  </div>
</div>

<style>
h1 {
  color: var(--primary-color)
}
.header {
  text-align: center;
  margin-top: 2rem;
  padding: 0px 0 24px 0;
}
.events {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.weekly, .upcoming {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
}

.weekly {
  margin: 0 0 0 20px;
  padding: 0 20px 0 0;
}


.upcoming {
  margin: 0 20px 0 0;
  padding: 0 0 0 20px;
}
</style>
