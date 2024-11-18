<script lang="ts">
    import { goto } from '$app/navigation';
    import { t } from 'svelte-i18n';
    import { base } from '$app/paths';

    // Access data provided by the load function in +page.server.ts
    export let data;
    const user = data.user;
    const score = data.score;
    const gender = data.gender;

    function playAgain() {
        goto(`${base}/`);
    }

</script>

<svelte:head>
    <title>{$t('page.results.htmlTitle')}</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="{user.charAt(0).toUpperCase() + user.slice(1)} scored {score}/10!" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{base}/results/{user}/{gender}/{score}" />
    <meta property="og:image" content="{base}/assets/share-image.jpg" />
    <meta property="og:description" content="Check out {user.charAt(0).toUpperCase() + user.slice(1)}'s score: {score}/10. Can you beat it?" />
    <meta property="og:site_name" content="Your Game Title" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Meta Tags (Optional, for better sharing on Twitter) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{user.charAt(0).toUpperCase() + user.slice(1)} scored {score}/10!" />
    <meta name="twitter:description" content="Check out {user.charAt(0).toUpperCase() + user.slice(1)}'s score: {score}/10. Can you beat it?" />
    <meta name="twitter:image" content="{base}/assets/share-image.jpg" />
</svelte:head>


<main>
    <h1>{user.charAt(0).toUpperCase() + user.slice(1)} {$t("page.results.thirdPerson")} {score}/10!</h1>
    <p>{$t("page.results.motivation")}</p>
    <button class="again" on:click={playAgain}>{$t('page.results.motivationStart')}</button>
</main>

<style>
main {
    text-align: center;
    padding: 20px;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    margin-top: 20px;
}

p {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.again {
    margin-top: 2rem;
}
</style>
