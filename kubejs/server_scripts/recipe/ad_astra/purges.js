ServerEvents.recipes(event => {

	event.remove({ id: 'ad_astra:etrionic_blast_furnace' })
	event.remove({ id: 'ad_astra:compressor' })
	event.remove({ id: 'ad_astra:coal_generator' })
	event.remove({ id: 'ad_astra:fuel_refinery' })
	event.remove({ id: 'ad_astra:water_pump' })
	event.remove({ id: 'ad_astra:energizer' })
	event.remove({ id: 'ad_astra:solar_panel' })

	event.remove({ id: 'ad_astra:steel_cable' })
	event.remove({ id: 'ad_astra:desh_cable' })
	event.remove({ id: 'ad_astra:steel_fluid_pipe' })
	event.remove({ id: 'ad_astra:desh_fluid_pipe' })
	event.remove({ id: 'ad_astra:cable_duct' })
	event.remove({ id: 'ad_astra:fluid_pipe_duct' })

})