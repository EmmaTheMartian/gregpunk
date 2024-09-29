ServerEvents.recipes(event => {

	const make_io_recipe = (tier, kind, centre_material) => {
		event.recipes.minecraft.crafting_shaped(`gtceu:${tier}_input_${kind}`, [' W ', 'RGR', ' M '], {
			W: '#forge:tools/wrenches',
			R: 'gtceu:sticky_resin',
			G: centre_material,
			M: `gtceu:${tier}_machine_hull`
		})
		event.recipes.minecraft.crafting_shaped(`gtceu:${tier}_output_${kind}`, [' M ', 'RGR', ' W '], {
			W: '#forge:tools/wrenches',
			R: 'gtceu:sticky_resin',
			G: centre_material,
			M: `gtceu:${tier}_machine_hull`
		})
	}

	make_io_recipe('lv', 'hatch', 'minecraft:glass')
	make_io_recipe('lv', 'bus', 'minecraft:chest')

})