// Sets hold a unique value

// Creates a set
const mySet = function () {
	// Storing a set
	const collection = []

	// Checks the presense of an ellement in the collectoin
	this.has = function (ellement) {
		return (collection.indexOf(ellement) !== -1)
	}

	// Show  a value of the collection
	this.values = function () {
		return collection
	}

	// Add an ellemnt to the end of the collection
	this.add = function (ellement) {
		if(!this.has(ellement)) {
			collection.push(ellement)
			return true
		} 
		return false
	}

	// Remvoe an ellement from the collection
	this.remove = function (ellement) {
		if(this.has(ellement)) {
			index = collection.indexOf(ellement)
			collection.splice(index, 1)
			return true
		}
		return false
	}

	// Rerurns the size of the collection
	this.size = function () {
		return collection.length
	}

	// Combines two sets 
	this.union = function (otherSet) {
		const unionSet = new mySet()
		const firstSet = this.values()
		const secondSet = otherSet.values()
		firstSet.forEach(function(e) {
			unionSet.add(e)
		})
		secondSet.forEach(function(e) {
			unionSet.add(e)
		})
		return unionSet
	}

	// Returns the intersection of two sets as a new set
	this.intersection = function(otherSet) {
		const intersectionSet = new mySet()
		const firstSet = this.values()
		firstSet.forEach(function(e) {
			if(otherSet.has(e)) {
				intersectionSet.add(e)
			}
		})
		return intersectionSet
	}

	// Returns a difference between two sets
	this.difference = function(otherSet) {
		const differenceSet = new mySet()
		const firstSet = this.values()
		firstSet.forEach(function(e) {
			if(!otherSet.has(e)) {
				differenceSet.add(e)
			}
		}) 
		return differenceSet
	}

	// Checkes if the set is a subset of a different set
	this.subset = function(otherSet) {
		const firstSet = this.values()
		return firstSet.every(function(value) {
			return otherSet.has(value)
		})
	}
}