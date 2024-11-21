<script lang="ts">
    import { goto } from '$app/navigation';
    import { t } from 'svelte-i18n';
    import { base } from '$app/paths';

    // Access data provided by the load function in +page.server.ts
    export let data;
    const scoreEncoded = data.scoreEncoded;
    const score = data.score;
    const name = data.name;
    const gender = data.gender;

    function playAgain() {
        goto(`${base}/`);
    }

    function getScoreSuperlative(score: number): string {
        if (score <= 5) return 'nuzného ';
        if (score <= 10) return '';
        if (score <= 15) return 'strašně dobrého ';
        if (score <= 19) return 'hrozně skvělého ';
        return 'děsivě perfektního';
    }
    const scoreSuperlative: string = getScoreSuperlative(score);
    const titles: Record<'m' | 'f' | 'n', string> = {
        m: `${name.charAt(0).toUpperCase() + name.slice(1)} dosáhl ${scoreSuperlative}skóre ${score}/20! Překonáš ho?`,
        f: `${name.charAt(0).toUpperCase() + name.slice(1)} dosáhla ${scoreSuperlative}skóre ${score}/20! Překonáš ji?`,
        n: `${name.charAt(0).toUpperCase() + name.slice(1)} dosáhlx ${scoreSuperlative}skóre ${score}/20! Překonáš je?`
    };
    const ogTitle: string = titles[gender as 'm' | 'f' | 'n'] || titles.n;


    function getDescriptions(score: number): string {
        if (score <= 5) return 'Tento výsledek v oficiálním kvízu české diplomacie ukazuje nedostatečné kompetence v oblasti rozlišování dobrého a špatného bombardování civilního obyvatelstva. Otestujte i Vy svoje schopnosti!';
        if (score <= 10) return 'Tento výsledek v oficiálním kvízu české diplomacie ukazuje zcela průměrné kompetence v oblasti rozlišování dobrého a špatného bombardování civilního obyvatelstva. Otestujte i Vy svoje schopnosti!';
        if (score <= 15) return 'Tento výsledek v oficiálním kvízu české diplomacie ukazuje nadprůměrné kompetence v oblasti rozlišování dobrého a špatného bombardování civilního obyvatelstva. Otestujte i Vy svoje schopnosti!';
        if (score <= 19) return 'Tento výsledek v oficiálním kvízu české diplomacie je důkazem výborných kompetencí v oblasti rozlišování dobrého a špatného bombardování civilního obyvatelstva. Otestujte i Vy svoje schopnosti!';
        return 'Tento bezchybný výsledek je v 100% souladu s postoji české diplomacie. A dokazuje nebývale perfektní kompetence v oblasti rozlišování dobrého a špatného bombardování civilního obyvatelstva. Otestujte i Vy svoje schopnosti!';
    }
    const ogDescription: string = getDescriptions(score);
</script>

<svelte:head>
    <title>{$t('page.results.htmlTitle')}</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="{ogTitle}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{base}/results/{scoreEncoded}/{gender}/{name}" />
    <meta property="og:image" content="{base}/score/{score}.jpg" />
    <meta property="og:description" content="{ogDescription}" />
    <meta property="og:site_name" content="Dobronebozlo.cz" />
    <meta property="og:locale" content="cs_CZ" />
    <meta property="og:locale:alternate" content="en_US" />

    <!-- Twitter Meta Tags (Optional, for better sharing on Twitter) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{ogTitle}" />
    <meta name="twitter:description" content="{ogDescription}" />
    <meta name="twitter:image" content="{base}/score/{score}.jpg" />
</svelte:head>


<main>
    <h1>{name.charAt(0).toUpperCase() + name.slice(1)} {$t("page.results.thirdPerson")} {score}/20!</h1>
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
