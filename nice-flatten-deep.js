niceFlattenDeep = array => {
	return array.reduce( (accumulator, currentValue) => {
		if (Array.isArray(currentValue)) return accumulator.concat(niceFlattenDeep(currentValue));
		else return accumulator.concat(currentValue);
	}, []);
}

module.exports = niceFlattenDeep;
