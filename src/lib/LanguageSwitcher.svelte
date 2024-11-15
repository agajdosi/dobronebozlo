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
    <option value="en">EN</option>
    <option value="cs">CZ</option>
</select>

<style>
select {
    padding: 5px 0px;
    background-color: initial;
    width: auto;
    padding: unset;
    border: none;
    border-radius: 0;
    height: auto;
    cursor: pointer;
}

</style>
