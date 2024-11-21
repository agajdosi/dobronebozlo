<script lang="ts">
    import { t } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
    import { base } from '$app/paths';

	$: error = $page.error as App.Error;
  
	const status = $page?.status ?? 500;
	const message = error?.message ?? 'An unexpected error occurred';

	const descriptions: Record<number, string> = {
		404: 'Human Rights Not Found',
		500: 'Eternal Diplomacy Error',
	};

	const description = descriptions[status] || '"Something" Went Wrong';

    function goHome(){
        goto(`${base}/`);
    }
</script>

<svelte:head>
	<title>{status}: {description}</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Oficiální tréninkový kvíz české diplomacie" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{base}" />
    <meta property="og:image" content="{base}/cc/error.jpg" />
    <meta property="og:description" content="Něco se velmi pokazilo ({status}). Ale to nevadí, pojedeme dál." />
    <meta property="og:site_name" content="Dobronebozlo.cz" />
    <meta property="og:locale" content="cs_CZ" />
    <meta property="og:locale:alternate" content="en_US" />

    <!-- Twitter Meta Tags (Optional, for better sharing on Twitter) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Oficiální tréninkový kvíz české diplomacie" />
    <meta name="twitter:description" content="Něco se velmi pokazilo ({status}). Ale to nevadí, pojedeme dál." />
    <meta name="twitter:image" content="{base}/cc/error.jpg" />
</svelte:head>

<main>
	<h1>{status}: {description}</h1>

    <button on:click={goHome}>{$t('button.goHome')}</button>
</main>

<style>
	main {
		text-align: center;
		padding: 40px;
	}

	h1 {
		color: var(--error-color);
	}

</style>
