<template lang="pug">
  //- You might be asking yourself how I got here.
  //- Turns out VuePress and Mardown-It don't handle
  //- transpiling HTML with helpful accessibility.
  //- So I created this page for user accessibility
  //- with the intent on making tabbing and voiceover
  //- very descriptive in lieu a11y on proper markdown pages
  .starter-guide
    h1(tabindex="0") Getting Started

    h2(tabindex="0") Downloading Files
    p(tabindex="0") You can gain access to any of the files available on MTGJSON.com via the web user interface all available at <router-link to="/downloads">mtgjson downloads</router-link>.
    p(tabindex="0") For a more holistic approach, view and download any MTGJSON.com file at <a href="https://mtgjson.com/api/v5/" target="_blank">https://mtgjson.com/api/v5/</a>.

    h2(tabindex="0") HTTP Requests
    p(tabindex="0") For a more dynamic approach, you can utilize HTTP requests from MTGJSON.com usng the following endpoint <code>https://mtgjson.com/api/v5/{path/to/file}</code>.
    p(tabindex="0") The files can be mostly be described in <router-link to="/file-models">File Modals</router-link> using the <code>https://mtgjson.com/api/v5/</code> base API, but other endpoints include <code>/csv/</code> and <code>/decks/</code>.

    h3(tabindex="0") Examples
    ul
      li(tabindex="0") A specific set of cards:{{" "}}
        a(href="https://mtgjson.com/api/v5/M20.json" target="_blank") https://mtgjson.com/api/v5/M20.json
      li(tabindex="0") A specific deck of cards:{{" "}}
        a(href="https://mtgjson.com/api/v5/decks/Basri_JMP.json" target="_blank") https://mtgjson.com/api/v5/decks/Basri_JMP.json
      li(tabindex="0") All Vintage cards:{{" "}}
        a(href="https://mtgjson.com/api/v5/Vintage.json" target="_blank") https://mtgjson.com/api/v5/Vintage.json
        ul
          li(tabindex="0") All Vintage atomic cards:{{" "}}
            a(href="https://mtgjson.com/api/v5/VintageAtomic.json" target="_blank") https://mtgjson.com/api/v5/VintageAtomic.json
      li(tabindex="0") All Printings of cards:{{" "}}
        a(href="https://mtgjson.com/api/v5/AllPrintings.json" target="_blank") https://mtgjson.com/api/v5/AllPrintings.json
        ul
          li(tabindex="0") All Printings of cards in SQLite format:{{" "}}
            a(href="https://mtgjson.com/api/v5/AllPrintings.sqlite" target="_blank") https://mtgjson.com/api/v5/AllPrintings.sqlite

</template>

<script>
export default {
  name: 'StarterGuide'
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
}

ul {
  li {
    margin-bottom: 1rem;
  }
  ul {
    margin-bottom: 1rem;
  }
}
</style>
