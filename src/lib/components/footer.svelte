<script>
import { base } from "$app/paths";
</script>

<div class="footer">
  <div class="left">
    <p>ALL RIGHTS RESERVED</p>
    <p>©RunTime 2025</p>
  </div>
  <div class="middle">
    <div class="about-and-socials">
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
  </div>

  <div class="right">
    <a href="{base}/"><img alt="Logo" src="{base}/logo/RunTime_uBaggrund.png" /></a>
  </div>

</div>

<style>
.footer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 20px;
  align-items: center;
  width: 100%;
  background-color: var(--background-color);
  filter: brightness(85%);
  box-sizing: border-box;
}

.footer .left {
  text-align: center;
}

.footer .left p {
  font-size: 0.75em;
  margin: 0;
}

.footer .middle {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-and-socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer .middle a {
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer .middle a p {
  margin: 0;
  font-size: 1em;
}

.footer .right {
  display: flex;
  justify-content: center;
}

.footer .right img {
  width: 100px;
  height: auto;
}

@media (min-width: 769px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 40px;
  }
  .footer .left {
    text-align: left;
  }
  .footer .middle {
    flex-direction: row;
  }
  .footer .right {
    justify-content: flex-end;
  }
  .socials {
    justify-content: center;
    gap: 20px;
  }
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
