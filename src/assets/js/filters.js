const filters = [
	{
		name: 'timeInit',
		fn: function(v) {
			return `${v.split(':')[0]}:${v.split(':')[1]}`;
		}
	}
];

export default filters;
