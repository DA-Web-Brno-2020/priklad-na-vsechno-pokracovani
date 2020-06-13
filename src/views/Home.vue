<template>
  <div class="home">
    <h1>Ultimátní příklad na všechno z Vue</h1>

    <p>Zopakuješ si třeba:</p>

    <ol class="menu">
      <li>Jak na tránky v aplikaci pomocí Vue routeru</li>
      <li>
        <router-link to="/sablona">Zobrazování dat v šabloně a události</router-link>
      </li>
      <li>
        <router-link to="/skryvani">Skrývání/zobrazování prvků pomocí v-if a v-show</router-link>
      </li>
      <li>
        <router-link to="/atributy">Nastavování atributů pomocí v-bind</router-link>
      </li>
      <li>
        TODO: <router-link to="/csstridy">Přidávání CSS tříd na prvky</router-link>
      </li>
      <li>
        TODO: <router-link to="/vfor">Zobrazování dat z pole pomocí v-for</router-link>
      </li>
      <li>
        TODO: <router-link to="/komponenty">Vytváření komponent</router-link>
      </li>
      <li>
        TODO: <router-link to="/props-events">Komunikace mezi komponentami pomocí props a custom events ($emit)</router-link>
      </li>
      <li>
        TODO: <router-link to="/vmodel">Získávání dat z formulářových prvků pomocí v-model</router-link>
      </li>
      <li>
        TODO: <router-link to="/computed">Computed property</router-link>
      </li>
      <li>
        TODO: <router-link to="/created">Created - spuštení při zobrazení komponenty</router-link>
      </li>
    </ol>

    <p>
      <strong>Je toho hrozně moc!</strong> Snad to stihneme. Ale pravděpodobně ne.
      Každopádně se zbytečně zdržuješ tím, že čteš tyhle blbosti. Šup do práce!
    </p>

  </div>
</template>

<style>
  .menu li {
    margin-bottom: 0.5em;
  }
</style>
