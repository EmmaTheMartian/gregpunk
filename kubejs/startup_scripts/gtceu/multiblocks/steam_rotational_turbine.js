GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('steam_rotational_turbine')
		.category('steam_rotational_turbine')
		.setMaxIOSize(0, 0, 1, 0) // Order: Item Input, Item Output, Fluid Input, Fluid Output
		.setSlotOverlay(false, false, GuiTextures.TURBINE_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_STEAM.get(true), FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.TURBINE)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('steam_rotational_turbine', 'multiblock')
		.tooltips(Component.translatable("todo"))
		.rotationState(RotationState.NON_Y_AXIS)
		.appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
		.recipeTypes(['steam_rotational_turbine'])
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('FFF', 'SSS', 'SSS', 'SSS')
			.aisle('FFF', 'SPS', 'SPS', 'SDS')
			.aisle('FFF', 'SCS', 'SSS', 'SSS')
			.where('F', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get()))
			.where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X).setExactLimit(1)))
			.where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
			.where('D', Predicates.abilities(PartAbility.OUTPUT_KINETIC))
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.build())
		.workableCasingRenderer(
			'gtceu:block/casings/solid/machine_casing_solid_steel',
			'gtceu:block/multiblock/generator/large_steel_boiler',
			false
		)
})