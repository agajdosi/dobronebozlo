<script>
    import '$lib/i18n.ts'; // initialize i18n
    import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
    import { base } from '$app/paths';
</script>

<header>
    <a href={base} class="logo">dobronebozlo.cz</a>
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
    --white-color: #ffffff;
    --error-color: #b81428;
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
    padding: .75rem;
    cursor: pointer;
    font-size: 1rem;
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    border-radius: .1875rem;
    color: var(--white-color);
    text-transform: uppercase;
    letter-spacing: .6px;
    -webkit-transition: background-color .3s cubic-bezier(.2,.57,.73,.95) 0s,border-color .3s cubic-bezier(.2,.57,.73,.95) 0s,color .3s cubic-bezier(.2,.57,.73,.95) 0s;
	transition: background-color .3s cubic-bezier(.2,.57,.73,.95) 0s,border-color .3s cubic-bezier(.2,.57,.73,.95) 0s,color .3s cubic-bezier(.2,.57,.73,.95) 0s;
}

:global(button:hover) {
	background-color: var(--white-color);
	border-color: var(--primary-color);
	color: var(--text-color);
}

:global(header) {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.4rem;
}

:global(.logo) {
    font-size: 1rem;
    text-decoration: none;
    color: var(--grey-color);
}

</style>

<slot />
