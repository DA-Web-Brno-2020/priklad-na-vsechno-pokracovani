<template>
	<div>
		<h1>Atributy a v-bind</h1>

		<img v-bind:src="`/images/people/${foto}.jpg`" alt="Slecna">

		<img v-bind:src="require(`./../assets/ovoce/${obrazek}.jpg`)" alt="Ovoce">

		<hr>

		<button v-on:click="zmenObrazek('jahoda')">
			Jahoda
		</button>
		<button v-on:click="zmenObrazek('citron')">
			Citrón
		</button>
		<button v-on:click="zmenObrazek('meloun')">
			Meloun
		</button>

	</div>
</template>

<script>
export default {

	data() {
		return {
			obrazek: 'avokado',
			foto: 'foto01'
		}
	},

	methods: {

		zmenObrazek(obr) {
			this.obrazek = obr;
		}

	}
}
</script>

<style>

</style>