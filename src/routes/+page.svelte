<script>
// @ts-nocheck

import { base } from "$app/paths";
import UpcommingEvents from "$lib/components/upcommingEvents.svelte";
</script>

<div class="title-text">
  <h1>Welcome to</h1>
  <img
    id="bannerLogo"
    alt="Runtime logo"
    src="{base}/logo/Banner_uBaggrund.png"
  />

  <p>Pushing limits — on the track and in the terminal.</p>
</div>

<div class="content">
  <div class="short-introduction">
    <h3>RunTime</h3>
    <p>
      RunTime is the running club made by CS students for IT students. The
      goal is to get students together through running and this way meet
      more people sharing the same studies. We wan't to create an
      environment where everyone feels seen and enjoys being a part of. 
    </p>

    <p id="end-words">Hope to see you!</p>
    <UpcommingEvents/>
  </div>
  <div class="strava-widget">
    <!-- svelte-ignore a11y_missing_attribute -->
    <iframe allowtransparency='true' frameborder='0' height='454' scrolling='no' src='https://www.strava.com/clubs/1287980/latest-rides/ef41ab1921bbbfbcbeeab0b647ca6055dadbfc27?show_rides=true' width="400"></iframe>
  </div>
</div>


<style>
.title-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}
.title-text h1 {
  padding: 0;
  color: var(--primary-color);
  margin: 15px 0 0 0;
  font-size: 3rem;
}
.title-text img {
  padding: 0;
  margin: -20px 0 0 0;
  width: 300px;
  max-width: 100%;
  height: auto;
}

.title-text p {
  color: var(--secondary-color);
  font-style: italic;
  font-weight: 300;
  margin: 10px 0 40px 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0 20px;
  margin-bottom: 40px;
}

.content .strava-widget {
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.content .strava-widget iframe {
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  max-width: 100%;
}

.content .short-introduction {
  width: 100%;
  max-width: 800px;
  text-align: center;
}

@media (min-width: 769px) {
  .title-text h1 {
    font-size: 3.75rem;
  }
  .title-text img {
    margin: -40px 0 0 0;
  }
  .title-text p {
    margin: -40px 0 50px 0;
  }
  .content {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0 40px;
  }
  .content .short-introduction {
    width: 50%;
  }
}
</style>

