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
    <meta property="og:title" content="Oficiální tréninkový kvíz české diplomacie" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{base}" />
    <meta property="og:image" content="{base}/assets/share-image.jpg" />
    <meta property="og:description" content="Dokážete správně rozlišit dobré a špatné bombardování?" />
    <meta property="og:site_name" content="dobronebozlo.cz" />
    <meta property="og:locale" content="cs_CZ" />
    <meta property="og:locale:alternate" content="en_US" />

    <!-- Twitter Meta Tags (Optional, for better sharing on Twitter) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Oficiální tréninkový kvíz české diplomacie" />
    <meta name="twitter:description" content="Dokážete správně rozlišit dobré a špatné bombardování?" />
    <meta name="twitter:image" content="{base}/assets/share-image.jpg" />
</svelte:head>

<main>
    <h1>{$t('page.index.title')}</h1>
    <p>{$t('page.index.subtitle')}</p>
    <button on:click={startGame}>{$t('button.startGame')}</button>
</main>

<style>
main {
    text-align: center;
    padding: 20px;
}

</style>
