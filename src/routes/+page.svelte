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
