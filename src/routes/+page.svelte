<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { t } from 'svelte-i18n';

    function startGame() {
        goto(`${base}/game`);
    }
</script>

<svelte:head>
    <title>{$t('page.index.htmlTitle')}</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content={$t('page.index.ogTitle')} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{base}" />
    <meta property="og:image" content="https://i3.cn.cz/15/1661152163_P2022082202112.jpg" />
    <meta property="og:description" content={$t('page.index.ogDescription')} />
    <meta property="og:site_name" content="Dobronebozlo.cz" />
    <meta property="og:locale" content="cs_CZ" />
    <meta property="og:locale:alternate" content="en_US" />

    <!-- Twitter Meta Tags (Optional, for better sharing on Twitter) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={$t('page.index.ogTitle')} />
    <meta name="twitter:description" content={$t('page.index.ogDescription')} />
    <meta name="twitter:image" content="https://i3.cn.cz/15/1661152163_P2022082202112.jpg" />
</svelte:head>


<h1>{$t('page.index.title')}</h1>
<p>{$t('page.index.subtitle')}</p>
<button on:click={startGame}>{$t('button.startGame')}</button>

<style>
button {
    margin: 5rem;
}
</style>