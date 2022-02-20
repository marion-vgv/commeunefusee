<template>
  <div>
    <h4>Saisissez votre recherche</h4>
    <form>
      <input type="text" />
      <select name="expertType" id="expertType">
        <option value="0">Tous</option>
        <option value="1">Freelance</option>
        <option value="2">Coach</option>
        <option value="3">Formation</option>
      </select>
      <button>Lancer la recherche</button>
    </form>
    <p>ou</p>
    <div>
      <a href="#" class="bg-rose-600 p-2 text-white"
        >Marketing<font-awesome-icon
          icon="fa-solid fa-xmark"
          class="text-white ms-3"
      /></a>
      <a href="#" class="">Réseaux sociaux</a>
      <a href="#" class="">Instagram</a>
      <a href="#" class="">SEO</a>
      <a href="#" class="">Rédiger du contenu</a>
      <a href="#" class="">Optimiser son offre</a>
    </div>
  </div>
</template>

<style>
header {
  background-color: transparent;
}
</style>
