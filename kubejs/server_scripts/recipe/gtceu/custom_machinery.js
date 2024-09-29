ServerEvents.recipes(event => {

	event.recipes.minecraft.crafting_shaped('gtceu:steam_rotational_turbine', ['CPC', 'RSR', 'MPM'], {
		C: '#gtceu:circuits/lv',
		P: 'gtceu:steel_huge_fluid_pipe',
		R: 'gtceu:steel_rotor',
		S: 'gtceu:solid_machine_casing',
		M: 'gtceu:lv_electric_motor',
	})

	event.recipes.minecraft.crafting_shaped('gtceu:high_pressure_steam_blast_furnace', ['FSF', 'SCS', 'BBB'], {
		C: 'gtceu:primitive_blast_furnace',
		S: '#gtceu:circuits/lv',
		B: 'gtceu:bronze_firebox_casing',
		F: 'gtceu:firebricks'
	})

})