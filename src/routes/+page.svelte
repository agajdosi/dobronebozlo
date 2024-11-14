<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { t } from 'svelte-i18n';

    function startGame() {
        goto(`${base}/game`);
    }
</script>

<main>
    <h1>{$t('mainTitle')}</h1>
    <p>{$t('mainSubtitle')}</p>
    <button on:click={startGame}>{$t('startGame')}</button>
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }

    button {
        padding: 10px 20px;
        font-size: 1.2em;
        cursor: pointer;
    }
</style>
