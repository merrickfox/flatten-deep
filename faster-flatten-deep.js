fasterFlattenDeep = (array, result) => {
	const length = array.length;
	let index = -1;

	result = result || [];

	while (++index < length) {
		const value = array[index];

		if (Array.isArray(value)) {
			fasterFlattenDeep(value,  result);

		} else {
			result[result.length] = value;

		}
	}

	return result;
}

module.exports = fasterFlattenDeep;
