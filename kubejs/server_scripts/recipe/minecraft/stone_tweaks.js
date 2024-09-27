ServerEvents.recipes(event => {

	event.recipes.minecraft.crafting_shaped('minecraft:furnace', ['SSS', 'WFW', 'CCC'], {
		S: 'minecraft:cobblestone_slab',
		W: 'minecraft:cobblestone_wall',
		F: 'minecraft:flint',
		C: 'minecraft:cobblestone'
	}).id('minecraft:furnace')

})