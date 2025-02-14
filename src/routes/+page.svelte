<script>
    import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="welcome-text">
    <h1>Welcome to</h1>
    <img
        id="bannerLogo"
        alt="Runtime logo"
        src="logo/Banner_uBaggrund.png"
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
</div>


<style>
    
    .welcome-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .welcome-text h1 {
        padding: 0;
        color: var(--primary-color);
        margin: 15px 0 0 0;
        font-size: 3.75em;
    }
    .welcome-text img {
        padding: 0;
        margin: -40px 0 0 0;
    }
    .welcome-text p {
        color: var(--secondary-color);
        font-style: italic;
        font-weight: 300;
        margin: -40px 0 50px 0;
    }

    .content {
        display: grid;
    }

    .content .short-introduction {
        width: 50vw;
    }

    .content .short-introduction h3 {
        text-align: center;
    }

    .content .short-introduction #end-words {
        text-align: center;
    }
</style>
