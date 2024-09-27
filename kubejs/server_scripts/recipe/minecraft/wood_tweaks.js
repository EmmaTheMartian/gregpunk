ServerEvents.recipes(event => {

	const planks_to_logs = {
		'minecraft:oak_planks': 'minecraft:oak_log',
		'minecraft:spruce_planks': 'minecraft:spruce_log',
		'minecraft:birch_planks': 'minecraft:birch_log',
		'minecraft:jungle_planks': 'minecraft:jungle_log',
		'minecraft:acacia_planks': 'minecraft:acacia_log',
		'minecraft:dark_oak_planks': 'minecraft:dark_oak_log',
		'minecraft:mangrove_planks': 'minecraft:mangrove_log',
		'minecraft:cherry_planks': 'minecraft:cherry_log',
		'minecraft:bamboo_planks': 'minecraft:bamboo_block',
		'minecraft:crimson_planks': 'minecraft:crimson_stem',
		'minecraft:warped_planks': 'minecraft:warped_stem',
		'arts_and_crafts:cork_planks': 'arts_and_crafts:cork_log',
		'architects_palette:twisted_planks': 'architects_palette:twisted_log',
		'ad_astra:glacian_planks': 'ad_astra:glacian_log',
		'gtceu:rubber_planks': 'gtceu:rubber_log',
	}

	// Workbeches
	event.findRecipes({ type: 'crafting_shaped', output: '#forge:workbench' }).forEach(it => {
		event.recipes.minecraft.crafting_shaped(it.getOriginalRecipeResult().id, ['FF', 'LL'], {
			F: 'flint',
			L: planks_to_logs[it.getOriginalRecipeIngredients()[0].getItemIds()[0]]
		}).id(it.getId())
	})

	// Beds
	event.findRecipes({ type: 'crafting_shaped', output: '#minecraft:beds' }).forEach(it => {
		event.recipes.minecraft.crafting_shaped(it.getOriginalRecipeResult().id, ['WWW', 'SSS', 'FMF'], {
			W: it.getOriginalRecipeIngredients()[0].getItemIds()[0],
			F: '#minecraft:wooden_fences',
			S: '#minecraft:wooden_slabs',
			M: '#forge:tools/mallets'
		}).id(it.getId())
	})

	// Chests
	event.findRecipes({ type: 'crafting_shaped', output: '#lieonstudio:chests/normal' }).forEach(it => {
		event.recipes.minecraft.crafting_shaped(it.getOriginalRecipeResult().id, ['WWW', 'LML', 'WWW'], {
			W: it.getOriginalRecipeIngredients()[0].getItemIds()[0],
			L: planks_to_logs[it.getOriginalRecipeIngredients()[0].getItemIds()[0]],
			M: '#forge:tools/mallets'
		}).id(it.getId())
	})
	// Framed Chest
	event.recipes.minecraft.crafting_shaped('framedblocks:framed_chest', ['FFF', 'LML', 'FFF'], {
		F: 'framedblocks:framed_cube',
		L: '#minecraft:logs',
		M: '#forge:tools/mallets'
	}).id('framedblocks:framed_chest')

})