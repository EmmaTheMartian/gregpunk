ServerEvents.recipes(event => {

	event.recipes.gtceu.steam_rotational_turbine('su_from_steam')
		.inputFluids('gtceu:steam 640')
		.outputStress(2048)
		.duration(10)

})