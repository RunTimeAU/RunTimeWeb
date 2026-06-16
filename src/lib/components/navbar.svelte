<script>
import { base } from "$app/paths";
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
}

function closeMenu() {
  menuOpen = false;
}
</script>

<nav>
  <div class="logo">
    <a href="{base}/" on:click={closeMenu}><img id="navBarLogo" alt="logo" src="{base}/logo/RT_uBaggrund.png" width="80" height="80"></a>
  </div>

  <button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>

  <ul class:open={menuOpen}>
    <li><a href="{base}/" on:click={closeMenu}>Home</a></li>
    <li><a href="{base}/About" on:click={closeMenu}>About</a></li>
    <li><a href="{base}/Calendar" on:click={closeMenu}>Calendar</a></li>
  </ul>
</nav>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
  background-color: var(--background-color);
  z-index: 1000;
}

nav .logo img {
  display: block;
}

nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

nav ul a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
  border: 2px solid black;
  transition: all 0.2s ease;
}

nav ul a:hover {
  color: var(--secondary-color);
  border-color: var(--secondary-color);
  background-color: rgba(115, 64, 0, 0.05);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger .bar {
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 10px;
  transition: all 0.3s linear;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  nav ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--background-color);
    padding: 20px;
    gap: 15px;
    display: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  }

  nav ul.open {
    display: flex;
  }

  nav ul a {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>

