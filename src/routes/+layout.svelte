<script>
    import '$lib/i18n.ts'; // initialize i18n
    import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
    import { base } from '$app/paths';
    import { t } from 'svelte-i18n';
</script>

<svelte:head>
    <script>
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        posthog.init('phc_pWOOoEWcrSJIDV0r0GNquhClXRQI3EW96Hha72YKVCx',{
            api_host:'https://eu.i.posthog.com',
            person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
            persistence: 'memory',
            })
    </script>
</svelte:head>

<div class="container">
    <header>
        <a href={base} class="logo">dobronebozlo.cz</a>
        <LanguageSwitcher />
    </header>

    <main>
        <slot />
    </main>

    <footer>
        <div class="right">
            <p>2024, dobronebozlo.cz</p>
        </div>
        <div class="left">
            <div>
                <i>{$t('footer.thanksTo')}</i>
            </div>
            <img src={`${base}/logo/vlada.svg`} alt="Logo 1" />
            <img src={`${base}/logo/zahranici.gif`} alt="MZCL" />
        </div>
    </footer>
</div>

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
    --background-color: var(--white-color);
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

:global(.container) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

:global(main) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 0 1rem;
    text-align: center;
}

:global(main p) {
    max-width: 60vw;
    margin: 0px;
}

:global(footer) {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0.4rem;
    background-color: var(--background-color);
}

:global(footer .left) {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 0.7rem;
    color: var(--grey-color);
    font-weight: 100;
}

:global(footer .left i) {
    padding: 0 0.3rem 0 0;
}

:global(footer .left img) {
    height: 30px;
}
:global(footer .center img) {
    height: 40px;
}

:global(footer .right) {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    color: var(--grey-color);
    font-weight: 100;
}

:global(.logo) {
    font-size: 1rem;
    text-decoration: none;
    color: var(--grey-color);
}

@media (max-width: 768px) {
  :global(main) {
    padding: 0 0.5rem;
  }
  :global(main p) {
    max-width: 90vw;
}
  :global(.image-button){
    width: 70vw;
  }
}

</style>
