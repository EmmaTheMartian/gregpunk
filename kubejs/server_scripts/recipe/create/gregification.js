ServerEvents.recipes(event => {

	event.remove({ id: 'create:crafting/kinetics/belt_connector' })
	const make_belt_recipe = material => event.recipes.minecraft.crafting_shaped('create:belt_connector', ['RRR', 'RRR'], { R: material });
	make_belt_recipe('gtceu:rubber_plate')
	make_belt_recipe('gtceu:styrene_butadiene_rubber_plate')
	make_belt_recipe('gtceu:silicon_rubber_plate')

	event.remove({ output: '#create:casing' })
	const make_casing_recipe = (casing, screw, plate, wood) => event.recipes.minecraft.crafting_shaped(casing, ['SWP', 'PRP', 'PWS'], {
		P: plate,
		S: screw,
		W: wood,
		R: '#forge:tools/screwdrivers'
	});
	make_casing_recipe('create:andesite_casing', 'gtceu:iron_screw', 'create:andesite_alloy', 'gtceu:treated_wood_planks')
	make_casing_recipe('create:copper_casing', 'gtceu:iron_screw', '#forge:plates/copper', 'create:andesite_casing')
	make_casing_recipe('create:brass_casing', 'gtceu:steel_screw', '#forge:plates/brass', 'create:andesite_casing')
	make_casing_recipe('create:railway_casing', 'gtceu:steel_screw', '#forge:plates/steel', 'create:brass_casing')

	event.remove({ id: 'create:crafting/kintics/shaft' })
	event.recipes.minecraft.crafting_shaped('4x create:shaft', ['S', 'A', 'A'], {
		S: '#forge:tools/saws',
		A: '#forge:plates/andesite_alloy'
	})

	event.recipes.gtceu.bender('andesite_alloy')
		.circuit(1)
		.itemInputs('#forge:ingots/andesite_alloy')
		.itemOutputs('createdeco:andesite_sheet')
		.duration(56)
		.EUt(voltage_tiers.ulv.eu_t)

})