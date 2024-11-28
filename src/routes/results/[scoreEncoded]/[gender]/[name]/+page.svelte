<script lang="ts">
    import { goto } from '$app/navigation';
    import { t } from 'svelte-i18n';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    // Access data provided by the load function in +page.server.ts
    export let data;
    const scoreEncoded = data.scoreEncoded;
    const score = data.score;
    const name = cleanName(data.name);
    const gender = cleanGender(data.gender);

    function playAgain() {
        goto(`${base}/game`);
    }

    function onStart() {
        goto(`${base}/`);
    }

    function cleanName(name: string) {
        if (name.toLowerCase() === "hamas supporter") {
            name = "RealFiliq Kokot"
        }

        return name
    }

    function cleanGender(gender: string) {
        if (gender === "m") return gender;
        if (gender === "f") return gender;
        return "n"
    }

    function getCookie(name: string): string | null {
        const matches = document.cookie.match(new RegExp(
            `(?:^|; )${name.replace(/([.*+?^${}()|[\]\\])/g, '\\$1')}=([^;]*)`
        ));
        return matches ? decodeURIComponent(matches[1]) : null;
    }

    function getScorePercentage(score: number): string {
        if (score == 0) return '0';
        if (score <= 3) return '10';
        if (score <= 6) return '20';
        if (score <= 8) return '30';
        if (score == 9) return '40'; // average
        if (score == 10) return '50'; //AVERAGE
        if (score == 11) return '60'; // average
        if (score <= 14) return '70';
        if (score <= 17) return '80';
        if (score <= 19) return '90';
        if (score == 20) return '100';
        return '0';
    }
    let scorePercentage = getScorePercentage(score);
    let isMe = false;
    onMount(() => {
        isMe = getCookie('name') === name;
        console.log("ISME=", isMe);
    });
</script>

<svelte:head>
    <title>{$t('page.results.htmlTitle')}</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content={$t(`page.results.${scorePercentage}.ogTitle.${gender}`, { values: {name: name, score: score}})} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{base}/results/{scoreEncoded}/{gender}/{name}" />
    <meta property="og:image" content="{base}/score/{score}.jpg" />
    <meta property="og:description" content={$t(`page.results.${scorePercentage}.ogDescription.${gender}`)} />
    <meta property="og:site_name" content="Dobronebozlo.cz" />
    <meta property="og:locale" content="cs_CZ" />
    <meta property="og:locale:alternate" content="en_US" />

    <!-- Twitter Meta Tags (Optional, for better sharing on Twitter) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={$t(`page.results.${scorePercentage}.ogTitle.${gender}`, { values: {name: name, score: score}})} />
    <meta name="twitter:description" content={$t(`page.results.${scorePercentage}.ogDescription.${gender}`)} />
    <meta name="twitter:image" content="{base}/score/{score}.jpg" />
</svelte:head>

{#if isMe}
    <h1>{$t(`page.results.${scorePercentage}.title.secondPerson.${gender}`)} {score}/20!</h1>
    <p>{$t(`page.results.${scorePercentage}.paragraph.secondPerson.${gender}`)}</p>
    <button class="again" on:click={playAgain}>{$t('page.results.tryAgain')}</button>
{:else}
    <h1>{name.charAt(0).toUpperCase() + name.slice(1)} {$t(`page.results.${scorePercentage}.title.thirdPerson.${gender}`)} {score}/20!</h1>
    <p>{$t(`page.results.${scorePercentage}.paragraph.thirdPerson.${gender}`)}</p>
    <p>{$t("page.results.motivation")}</p>
    <button class="again" on:click={onStart}>{$t('page.results.motivationStart')}</button>
{/if}



<style>
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
