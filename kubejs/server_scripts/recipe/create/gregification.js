ServerEvents.recipes(event => {

	// Belt
	event.remove({ id: 'create:crafting/kinetics/belt_connector' })
	const make_belt_recipe = material => event.recipes.minecraft.crafting_shaped('create:belt_connector', ['RRR', 'RRR'], { R: material });
	make_belt_recipe('gtceu:rubber_plate')
	make_belt_recipe('gtceu:styrene_butadiene_rubber_plate')
	make_belt_recipe('gtceu:silicone_rubber_plate')

	// Casings
	event.remove({ output: '#create:casing' })
	const make_casing_recipe = (casing, screw, plate, wood) => event.recipes.minecraft.crafting_shaped(casing, ['SWS', 'PRP', 'SWS'], {
		P: plate,
		S: screw,
		W: wood,
		R: '#forge:tools/screwdrivers'
	});
	make_casing_recipe('create:andesite_casing', 'gtceu:iron_screw', 'create:andesite_alloy', 'gtceu:treated_wood_planks')
	make_casing_recipe('create:copper_casing', 'gtceu:iron_screw', '#forge:plates/copper', 'create:andesite_casing')
	make_casing_recipe('create:brass_casing', 'gtceu:steel_screw', '#forge:plates/brass', 'create:andesite_casing')
	make_casing_recipe('create:railway_casing', 'gtceu:steel_screw', '#forge:plates/steel', 'create:brass_casing')

	// Shaft
	event.remove({ id: 'create:crafting/kinetics/shaft' })
	event.recipes.minecraft.crafting_shaped('4x create:shaft', ['S', 'A', 'A'], {
		S: '#forge:tools/saws',
		A: '#forge:plates/andesite_alloy'
	})

	// Cogwheels
	event.remove({ id: 'create:crafting/kinetics/cogwheel' })
	event.remove({ id: 'create:crafting/kinetics/large_cogwheel' })
	event.remove({ id: 'create:crafting/kinetics/large_cogwheel_from_little' })
	event.recipes.minecraft.crafting_shaped('create:cogwheel', ['A', 'W', 'S'], {
		A: '#forge:tools/saws',
		W: 'gtceu:treated_wood_slab',
		S: 'create:shaft'
	})
	event.recipes.minecraft.crafting_shaped('create:large_cogwheel', ['RW ', 'WCW', ' WS'], {
		W: 'gtceu:treated_wood_slab',
		C: 'create:cogwheel',
		S: '#forge:tools/saws',
		R: '#forge:tools/wrenches',
	})

	// Andesite Alloy Sheet
	event.recipes.gtceu.bender('andesite_alloy_sheet')
		.circuit(1)
		.itemInputs('#forge:ingots/andesite_alloy')
		.itemOutputs('createdeco:andesite_sheet')
		.duration(56)
		.EUt(voltage_tiers.ulv.eu_t)

	event.recipes.minecraft.crafting_shaped('createdeco:andesite_sheet', ['H', 'A', 'A'], {
		H: '#forge:tools/hammers',
		A: 'create:andesite_alloy'
	})

	// Handcrank
	event.remove({ id: 'create:crafting/kinetics/hand_crank' })
	event.recipes.minecraft.crafting_shaped('create:hand_crank', ['R  ', 'IWI', '  R'], {
		R: '#forge:rods/steel',
		I: 'gtceu:steel_ring',
		W: 'gtceu:treated_wood_planks'
	})

	const replace_create_machine_recipe = (output, top, middle, bottom) => {
		event.remove({ id: `create:crafting/kinetics/mechanical_${output}` })
		event.recipes.minecraft.crafting_shaped(`create:mechanical_${output}`, ['STS', 'HMW', 'SBS'], {
			T: top,
			M: middle,
			B: bottom,
			S: '#forge:plates/steel',
			H: '#forge:tools/hammers',
			W: '#forge:tools/wrenches',
		})
	}

	replace_create_machine_recipe('press',
		'create:sticky_mechanical_piston',
		'create:andesite_casing',
		'minecraft:anvil'
	)
	replace_create_machine_recipe('mixer',
		'create:mechanical_bearing',
		'create:andesite_casing',
		'create:whisk'
	)
	replace_create_machine_recipe('drill',
		'create:mechanical_bearing',
		'create:andesite_casing',
		'gtceu:steel_drill_head'
	)
	replace_create_machine_recipe('saw',
		'create:mechanical_bearing',
		'create:andesite_casing',
		'gtceu:steel_buzz_saw_blade'
	)

	//TODO
	// Mechanical Arm
	// event.remove({ id: 'create:crafting/kinetics/mechanical_arm' })

	// Drilling Machine

})