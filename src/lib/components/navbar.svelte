<script>
    import { base } from "$app/paths";
</script>

<nav>
    <div class="logo">
        <img id="navBarLogo" alt="logo" src="{base}/logo/RT_uBaggrund.png" width="100" height="100">
    </div>
    <ul>
        <a href="{base}/"><li>Home</li></a>
        <a href="{base}/About"><li>About</li></a>
        <a href="{base}/Contact"><li>Contact</li></a>
        <a href="{base}/Calendar"><li>Calendar</li></a>
    </ul>
</nav>

<style>

    nav {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
    }

    nav .logo img {
        padding: 0;
        margin: 0;
    }

    nav ul {
        display: flex;
        gap: 20px;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
    }

    nav ul a {
        text-decoration: none;
        color: black;
    }

    nav ul li {
        padding: 10px;
        border-radius: 5px;
        border: 2px solid black;
    }

    nav ul li:hover {
        cursor: pointer;
        color: var(--secondary-color);
        border-color: var(--secondary-color);
        opacity: 20%;
    }
</style>