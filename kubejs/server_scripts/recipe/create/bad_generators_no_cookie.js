ServerEvents.recipes(event => {

	event.remove({ id: 'create:crafting/kinetics/water_wheel' })
	event.remove({ id: 'create:crafting/kinetics/large_water_wheel' })
	event.remove({ id: 'create:crafting/kinetics/windmill_bearing' })
	event.remove({ id: 'create:crafting/kinetics/steam_engine' })

	event.recipes.gtceu.assembler('create/water_wheel')
		.itemInputs(
			'8x #forge:treated_wood',
			'8x gtceu:treated_wood_slab',
			'gtceu:titanium_ring',
			'8x gtceu:titanium_screw',
			'create:shaft',
		)
		.itemOutputs('create:water_wheel')
		.duration(30 * 20)
		.EUt(voltage_tiers.ev.eu_t);

	event.recipes.gtceu.assembler('create/large_water_wheel')
		.itemInputs(
			'4x create:water_wheel',
			'32x #forge:treated_wood',
			'32x gtceu:treated_wood_slab',
			'gtceu:tungstensteel_ring',
			'8x gtceu:tungstensteel_screw',
		)
		.itemOutputs('create:large_water_wheel')
		.duration(30 * 20)
		.EUt(voltage_tiers.iv.eu_t);

	event.recipes.gtceu.assembler('create/windmill_bearing')
		.itemInputs(
			'8x #forge:treated_wood',
			'gtceu:stainless_steel_ring',
			'4x gtceu:stainless_steel_screw',
			'create:mechanical_bearing',
			'create:shaft',
		)
		.itemOutputs('create:windmill_bearing')
		.duration(30 * 20)
		.EUt(voltage_tiers.hv.eu_t);

	event.recipes.gtceu.assembler('create/steam_engine')
		.itemInputs(
			'8x #forge:plates/copper',
			'gtceu:stainless_steel_ring',
			'4x gtceu:stainless_steel_screw',
			'4x gtceu:stainless_steel_rod',
			'4x gtceu:stainless_steel_rod',
			'create:shaft',
		)
		.itemOutputs('create:steam_engine')
		.duration(30 * 20)
		.EUt(voltage_tiers.hv.eu_t);

})