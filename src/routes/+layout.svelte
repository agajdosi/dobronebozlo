<script>
    import '$lib/i18n.ts'; // initialize i18n
    import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
</script>

<header>
    <LanguageSwitcher />
</header>


<style>
@import url('https://fonts.googleapis.com/css2?family=Martel:wght@600;700;800;900&family=Roboto:wght@400;500;700&display=swap');

:root {
    --primary-color: #1f2046;
    --secondary-color: #143b88;
    --terc-color: #575fa1;
    --text-color: #3b3b3b;
    --grey-color: #686868;
}

:global(body) {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 1.5;
    font-size: 18px;
    color: var(--text-color);
    margin: 0;
}

:global(h1) {
    font-family: 'Martel', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--secondary-color);
}

:global(button) {
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
}

</style>

<slot />
