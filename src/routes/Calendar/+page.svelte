<script>
import CalendarEvent from "$lib/components/calendarEvent.svelte";

</script>

<div class="header">
  <h1>Calendar Page</h1>
  <h2>Upcomming events</h2>
</div>

<div class="events">
  <div class="weekly">
    <CalendarEvent title="Weekly runs" date="Monday & Thursday" location="Nygaard" description="test"/>
    <h3 id="weekrun">Monday & Wednesday</h3>
    <p>
      Each Monday and Wednesday, Runtime meets at 2:15 pm for a run.
      The distance and pace are determined by the participants, and we always do our best to ensure everyone has a positive experience. 
      Currently, we have two routes—4.25 km and 2 km—and we decide which one to run on the day. 
      We strive to keep the pace suitable for all skill levels: Monday is usually a bit faster, while Wednesday is more of a stroll.
    </p>
    <h3 id="winterbath">RunTime x Ice Bathing</h3>
    <p>
      At times, we plan special events combining running and ice bathing. 
      These take place at ‘the Harbour Bath’ at Aarhus Ø on Sundays. 
      Since this is not a weekly occurrence, you’ll need to check the Strava group for specific dates. 
      During the event, we run a 2 km route around Aarhus Ø before enjoying a refreshing dip in the cold harbour, followed by a warm sauna.
    </p>
  </div>
  <div class="upcoming">
    <h3>Upcoming Events</h3>
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
}
.weekly {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 0 20px;
  padding: 0 20px 0 0;
  width: 50%;
}

.upcoming {
  margin: 0 20px 0 0;
  padding: 0 0 0 20px;
  width: 50%
}
.upcoming h3, h4 {
  text-align: center;
}
</style>
