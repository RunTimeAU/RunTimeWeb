<script>
    import { base } from "$app/paths";
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte"; 
    import { title } from "../stores/store";

    let currentTitle = "RunTime";
    const unsubsribe = title.subscribe(value => {
        currentTitle = value;
    })

    import { onDestroy } from "svelte";
    onDestroy(() => {
        unsubsribe();
    });
</script>
<svelte:head>
	<link rel="icon" href="{base}/logo/RT_uBaggrund.png"/>
    <title>{currentTitle}</title>
    <link href="https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins&display=swap" rel="stylesheet">
</svelte:head>
<div class="navbar">
    <Navbar></Navbar>
</div>
<div class="main">
    <slot></slot>
</div>
<div class="footer">
    <Footer></Footer>
</div>


<style>
    :global(:root) {
        font-family: "Kodchasan", sans-serif;
        --primary-color: #734000;
        --secondary-color: #f5f5f5;
        --background-color: #a7a59c;
        background: var(--background-color);

    }
    :global(h1, h2, h3, h4, h5, p) {
        color: var(--secondary-color);
    }
    :global(h1) {
        font-weight: 500;
    }

    :global(body) {
        display: grid;
        grid-template-columns: 25%vw 25%vw 25%vw 25%vw;
        grid-template-rows: auto 1fr auto;
        grid-template-areas: 
        "header header header header"
        "main main main main"
        "footer footer footer footer";
        min-height: 100vh;


        margin: 0;
        padding: 0;
    }

    .navbar {
        grid-area: header;
    }
    .main {
        grid-area: main;
    }
    .footer {
        grid-area: footer;
    }
    
    * {
        font-display: swap;
    }
</style>