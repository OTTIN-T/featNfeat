<template>
  <DelayHydration>
    <VitePwaManifest />
    <NuxtPage />
  </DelayHydration>
</template>

<script setup lang="ts">
// CONST
const ogImageOptions = {
  title: 'featNfeat',
  description: 'Trouvez qui feat avec qui !',
}

// USE
useSchemaOrg([
  // TODO Select Identity: https://unhead.unjs.io/schema-org/recipes/identity
  defineWebSite({
    name: 'featNfeat',
  }),
  defineWebPage(),
])

defineOgImage(ogImageOptions)
</script>
