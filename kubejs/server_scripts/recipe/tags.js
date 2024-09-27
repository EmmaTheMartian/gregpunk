// priority: 100

ServerEvents.tags('item', event => {

	event.add('forge:plates', 'createdeco:andesite_sheet')
	event.add('forge:plates/andesite_alloy', 'createdeco:andesite_sheet')

	event.add('minecraft:beds', 'arts_and_crafts:bleached_bed')

})
