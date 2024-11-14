<script>
    import '$lib/i18n.ts'; // initialize i18n
    import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
</script>

<header>
    <LanguageSwitcher />
</header>

<slot />
