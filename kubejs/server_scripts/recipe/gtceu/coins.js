ServerEvents.recipes(event => {

	event.remove({ id: 'gtceu:forming_press/credit_cupronickel' })

	const make_coin_recipes = (materials, base_cost, cost_multiplier) => {
		let cost = base_cost
		for (let material of materials) {
			event.recipes.gtceu.forming_press(`${material}_credit`)
				.notConsumable('gtceu:credit_casting_mold')
				.itemInputs(`gtceu:${material}_plate`)
				.itemOutputs(`gtceu:${material}_credit`)
				.duration(20)
				.EUt(cost)
			cost *= cost_multiplier
		}
	};

	make_coin_recipes([
		'copper',      // ULV
		'cupronickel', // LV
		'silver',      // MV
		'gold',        // HV
		'platinum',    // EV
		'osmium',      // IV
		'naquadah',    // LuV
		'neutronium',  // ZPM
	], 8, 4)

})
