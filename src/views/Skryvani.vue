<template>
	<div>
		<h1>Skrývání prvků</h1>

		<button v-on:click="prepnoutViditelnost">
			Přepnout viditelnost odstavce
		</button>

		<p v-if="viditelne">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur nihil repudiandae hic saepe soluta delectus odio nam consectetur, tempora aliquam ipsa totam voluptatem quos consequuntur unde minus illum autem!
		</p>

		<p v-else>
			I'm baby pickled aesthetic farm-to-table yuccie. Beard irony post-ironic bespoke leggings four dollar toast. XOXO hella keffiyeh salvia ugh, offal listicle before they sold out kombucha. Cray banh mi la croix, blue bottle organic migas gentrify portland four dollar toast kale chips kitsch. Hammock raw denim scenester, readymade swag forage authentic normcore taxidermy chia vexillologist freegan occupy pork belly enamel pin.
		</p>

		<hr>

		<p v-show="viditelne">
			Bacon ipsum dolor amet jerky short ribs bresaola pork chop rump. Picanha tail swine, rump shoulder drumstick chislic salami ribeye shank sausage andouille chicken t-bone meatloaf. Sirloin pork loin leberkas, strip steak frankfurter t-bone boudin ball tip pig doner. Pastrami tongue sausage, short ribs porchetta beef ribs capicola turkey shoulder. Strip steak shankle pork belly, corned beef landjaeger chuck chicken chislic bresaola. Tenderloin strip steak brisket pork pork loin spare ribs tail shankle drumstick chicken beef.
		</p>





	</div>
</template>

<script>
export default {

	data() {
		return {
			viditelne: true
		}
	},

	methods: {
		prepnoutViditelnost() {
			this.viditelne = !this.viditelne;
		}
	}

}
</script>

<style>

</style>