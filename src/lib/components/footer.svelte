<script>
import { base } from "$app/paths";
</script>

<div class="footer">
  <div class="left">
    <p>ALL RIGHTS RESERVED</p>
    <p>©RunTime 2025</p>
  </div>
  <div class="middle">
    <a href="{base}/Contact">
      <span class="material-symbols-outlined">alternate_email</span>
      <p>Contact us</p>
    </a>
    <a href="{base}/About">
      <span class="material-symbols-outlined">diversity_3</span>
      <p>About us</p>
    </a>
    <div class="socials">
      <a href="https://www.strava.com/clubs/1287980">
        <img id="stravalogo" src="{base}/logo/strava-icon.svg" alt="strava">
      </a>
      <a href="https://www.facebook.com/profile.php?id=61582564672233&locale=da_DK">
        <img id="facelogo" src="{base}/logo/Facebook_Logo_Secondary.png" alt="facebook">
      </a>
    </div>
  </div>
  <div class="right">
    <a href="{base}/"><img alt="Logo" src="{base}/logo/RunTime_uBaggrund.png" style="width:100px" /></a>
  </div>
</div>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--background-color);
  filter: brightness(85%);
}

.footer .left p {
  font-size: 0.75em;
  margin: 0;
  padding: 0 0 0 30px;
}

.footer .middle a {
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center; /* Align the icon and text vertically */
  gap: 8px; /* Space between the icon and the text */
}

.footer .middle a p {
  margin: 5px;
  font-size: 1em;
}

.footer .right {
  display: flex;
  justify-content: flex-end;
}

.footer .right img {
  width: 140px;
  height: auto;
  padding: 0 30px 0 0;
}

.socials {
  display: flex;
  width: 100%;
  flex-direction: row;
 justify-content: space-evenly; 
}

#stravalogo {
  width: 20px;
  height: 20px;
}

#facelogo {
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%);
}
</style>
