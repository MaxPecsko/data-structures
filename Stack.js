// Create a stack
const Stack = function () {
	this.count = 0
	this.storage = {}

	// Adds a value onto the end of the stack
	this.push = function (value) {
		this.storage[this.count] = value
		this.count++
	}

	// Removes and returns the value at the and of the stack
	this.pop = function () {
		if (this.count === 0) {
			return undefined
		}
		this.count --
		let output = this.storage[this.count]
		delete this.storage[this.count]
		return output
	}

	this.size = function () {
		return this.count
	}

	// Rreturn a last element of the stack
	this.peek = function () {
		return this.storage[this.count-1]
	}
} 