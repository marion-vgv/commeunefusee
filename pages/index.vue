<template>
  <div class="w-full font-body h-full relative">
    <HeaderComponent />
    <div class="bg-stars bg-contain bg-center w-full h-96">
      <div class="h-full flex flex-col align-middle justify-center">
        <h1
          class="text-white text-center text-5xl font-semibold tracking-wide mb-3"
        >
          Qu'est-ce que vous voulez
        </h1>
        <h1 class="text-white text-center text-6xl font-semibold tracking-wide">
          f<span
            class="underline decoration-red-700 decoration-8 underline-offset-2"
            >aire décoller ?&nbsp;</span
          >
        </h1>
      </div>
    </div>
    <div class="relative h-96 text-navy-700">
      <div
        class="absolute inset-x-0 -top-14 flex flex-row items-center justify-center container mx-auto bg-white drop-shadow-xl rounded-3xl h-full"
      >
        <div
          class="w-1/2 rounded-l-3xl bg-gradient-to-t from-pink-50 to-purple-100 p-20 h-full"
        >
          <h2 class="text-3xl font-semibold mb-3">Saisissez votre recherche</h2>
          <input
            type="text"
            class="w-full bg-white rounded-full p-2 mb-3 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md placeholder:italic placeholder:text-navy-200 placeholder:pl-3"
            placeholder="Exemple : Instagram"
          />
          <select
            id="search-type"
            name="search-type"
            class="w-7/12 bg-white rounded-full p-2 mb-3 mr-3 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md"
          >
            <option value="" selected>Tout</option>
            <option value="">Formation</option>
            <option value="">Coaching</option>
            <option value="">Expert / Freelance</option>
          </select>
          <button
            class="bg-red-700 w-3/12 text-white rounded-full p-2 mb-3 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-purple-300"
          >
            Go !
          </button>
        </div>
        <div class="w-1/2 p-20 h-full">
          <h2 class="text-3xl font-semibold">Sélectionnez un mot-clé</h2>
          <h6 class="mb-3">parmi les plus populaires</h6>
          <div class="flex flex-wrap">
            <a
              href=""
              class="bg-purple-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-purple-200 text-center"
              >Marketing</a
            >
            <a
              href=""
              class="bg-purple-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-purple-200 text-center"
              >Réseaux sociaux</a
            >
            <a
              href=""
              class="bg-pink-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-pink-200 text-center"
              >Instagram</a
            >
            <a
              href=""
              class="bg-purple-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-purple-200 text-center"
              >Pinterest</a
            >
            <a
              href=""
              class="bg-purple-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-purple-200 text-center"
              >SEO</a
            >
            <a
              href=""
              class="bg-pink-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-pink-200 text-center"
              >Rédiger du contenu</a
            >
            <a
              href=""
              class="bg-purple-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-purple-200 text-center"
              >Plan de contenu</a
            >
            <a
              href=""
              class="bg-pink-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-pink-200 text-center"
              >Comptabilité</a
            >
            <a
              href=""
              class="bg-pink-100 rounded-full px-4 py-1 mb-3 mr-2 focus:ring-2 focus:outline-none focus:ring-purple-300 focus:drop-shadow-md hover:drop-shadow-md hover:bg-pink-200 text-center"
              >Business plan</a
            >
          </div>
        </div>
      </div>
      <div
        class="absolute flex items-center justify-center w-12 h-12 p-3 inset-x-1/2 top-28 translate-x-[-1.5rem] translate-y-[-1.5rem] rounded-full border-2 border-solid border-navy-700"
      >
        ou
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
