ServerEvents.recipes(event => {

	event.remove({ id: 'create:crafting/materials/andesite_alloy' })
	event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
	event.remove({ id: 'create:mixing/andesite_alloy' })
	event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })

	event.recipes.minecraft.crafting_shapeless('2x kubejs:andesite_alloy_dust', [
		'#forge:dusts/wrought_iron',
		'#forge:dusts/wrought_iron',
		'gtceu:andesite_dust',
		'gtceu:andesite_dust',
	])

	event.recipes.minecraft.crafting_shaped('2x kubejs:andesite_alloy_dust', ['A', 'M'], {
		A: 'create:andesite_alloy',
		M: '#forge:tools/mortars'
	})

	event.recipes.minecraft.smelting('create:andesite_alloy', 'kubejs:andesite_alloy_dust')

	const make_alloy_smelting_recipe = (name, tier, a, b) => {
		event.recipes.gtceu.alloy_smelter(`andesite_alloy_from_${name}`)
			.itemInputs(a, b)
			.itemOutputs('create:andesite_alloy')
			.duration(100)
			.EUt(voltage_tiers[tier].eu_t * 4)
	};

	make_alloy_smelting_recipe('from_wrought_iron_dust_and_andesite_dust', 'ulv', '#forge:dusts/wrought_iron', 'gtceu:andesite_dust')
	make_alloy_smelting_recipe('from_wrought_iron_ingot_and_andesite_dust', 'ulv', '#forge:ingots/wrought_iron', 'gtceu:andesite_dust')

})