<script>
// @ts-nocheck

import { base } from "$app/paths";
</script>

<div class="title-text">
  <h1>Welcome to</h1>
  <img
    id="bannerLogo"
    alt="Runtime logo"
    src="{base}/logo/Banner_uBaggrund.png"
    style="width:300px;"
  />
  <p>Pushing limits — on the track and in the terminal.</p>
</div>

<div class="content">
  <div class="short-introduction">
    <h3>RunTime</h3>
    <p>
      RunTime is the running club made by CS students for CS students. The
      goal is to get students together through running and this way meet
      more people sharing the same studies. We wan't to create an
      environment where everyone feels seen and enjoys being a part of. If
      this sounds interesting but you have any questions, feel free to
      reach out through the contact page or come and enjoy a nice run!
    </p>
    <p id="end-words">Hope to see you!</p>
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
}
.title-text h1 {
  padding: 0;
  color: var(--primary-color);
  margin: 15px 0 0 0;
  font-size: 3.75em;
}
.title-text img {
  padding: 0;
  margin: -40px 0 0 0;
}
.title-text p {
  color: var(--secondary-color);
  font-style: italic;
  font-weight: 300;
  margin: -40px 0 50px 0;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 0 0 40px;
}

.content .strava-widget {
  text-align: center;
}

.content .strava-widget iframe {
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
}

.content .short-introduction {
  width: 50vw;
  text-align: center;
}
</style>
