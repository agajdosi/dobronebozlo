<script lang="ts">
    import { locale } from 'svelte-i18n';

    // Function to change the language
    function selectLanguage(event: Event) {
        const lang = (event.target as HTMLSelectElement).value;
        locale.set(lang);
    }
</script>

<label for="language-select"></label>
<select id="language-select" on:change={selectLanguage} bind:value={$locale}>
    <option value="en">English</option>
    <option value="cs">Čeština</option>
</select>

<style>
    select {
        margin-left: 8px;
        padding: 5px;
    }
</style>
