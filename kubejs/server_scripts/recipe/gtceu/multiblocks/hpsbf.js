ServerEvents.recipes(event => {

	const make_recipe = (a, b, steam, duration_seconds) => {
		event.recipes.gtceu.high_pressure_steam_blast_furnace(`steel_from_${a.split(/[:/]/).pop()}_and_${b.split(/[:/]/).pop()}`)
			.itemInputs([a, b])
			.inputFluids(`gtceu:steam ${steam}`)
			.itemOutputs('gtceu:steel_ingot', '2x gtceu:tiny_dark_ash_dust')
			.duration(duration_seconds * 20)
	};

	// These are just the same recipes as the PBF, except with 10 seconds subtracted from the recipe times.
	make_recipe('#forge:ingots/wrought_iron', '2x minecraft:coal', 640, 40 - 10)
	make_recipe('#forge:ingots/wrought_iron', '2x gtceu:coal_dust', 640, 40 - 10)
	make_recipe('#forge:ingots/wrought_iron', '2x minecraft:charcoal', 640, 40 - 10)
	make_recipe('#forge:ingots/wrought_iron', '2x gtceu:charcoal_dust', 640, 40 - 10)
	make_recipe('#forge:ingots/wrought_iron', 'gtceu:coke_gem', 640, 30 - 10)
	make_recipe('#forge:ingots/wrought_iron', 'gtceu:coke_dust', 640, 30 - 10)
	make_recipe('#forge:ingots/iron', '2x minecraft:coal', 640, 90 - 10)
	make_recipe('#forge:ingots/iron', '2x gtceu:coal_dust', 640, 90 - 10)
	make_recipe('#forge:ingots/iron', '2x minecraft:charcoal', 640, 90 - 10)
	make_recipe('#forge:ingots/iron', '2x gtceu:charcoal_dust', 640, 90 - 10)
	make_recipe('#forge:ingots/iron', 'gtceu:coke_gem', 640, 75 - 10)
	make_recipe('#forge:ingots/iron', 'gtceu:coke_dust', 640, 30 - 10)

})