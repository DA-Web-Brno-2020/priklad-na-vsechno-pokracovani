<template>
	<div>
		<h1>Data v šabloně a události</h1>

		<p>Jsem {{ jmeno }} a je mi {{ vek }} let.</p>

		<button v-on:click="omladnout(5)">
			Omládni
		</button>

	</div>
</template>

<script>
export default {

	data() {
		return {
			jmeno: 'Luděk',
			vek: 35
		}
	},

	methods: {

		omladnout(pocet) {
			this.vek -= pocet;
		}

	}

}
</script>

<style>

</style>