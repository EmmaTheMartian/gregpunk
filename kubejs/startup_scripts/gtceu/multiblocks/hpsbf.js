GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('high_pressure_steam_blast_furnace')
		.category('high_pressure_steam_blast_furnace')
		.setMaxIOSize(1, 1, 1, 0) // Order: Item Input, Item Output, Fluid Input, Fluid Output
		.setSlotOverlay(false, false, GuiTextures.PRIMITIVE_FURNACE_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_STEAM.get(true), FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.MACERATOR)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('high_pressure_steam_blast_furnace', 'multiblock')
		.tooltips(Component.translatable("todo"))
		.rotationState(RotationState.NON_Y_AXIS)
		.appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
		.recipeTypes(['high_pressure_steam_blast_furnace'])
		.pattern(definition => FactoryBlockPattern.start()
			.aisle('FFF', 'SSS', 'SSS', 'SSS')
			.aisle('FFF', 'S S', 'S S', 'S S')
			.aisle('FFF', 'SCS', 'SSS', 'SSS')
			.where('F', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get()))
			.where('S', Predicates.blocks('gtceu:firebricks')
				.or(Predicates.autoAbilities(definition.getRecipeTypes()))
				.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
				.or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X).setExactLimit(1)))
			.where('C', Predicates.controller(Predicates.blocks(definition.get())))
			.where(' ', Predicates.air())
			.build())
		.workableCasingRenderer(
			'gtceu:block/casings/solid/machine_primitive_bricks',
			'gtceu:block/multiblock/primitive_blast_furnace',
			false
		)
})