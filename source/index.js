// region convert strings to arrays

const arrify = ({
	allow,
	disallow,
	userAgent,
	...rest
}) => ({
	allow: arrifyOne(allow),
	disallow: arrifyOne(disallow),
	userAgent: arrifyOne(userAgent),
	...rest
})

const arrifyOne = arrayOrString =>
	typeof arrayOrString === 'string'
		? [arrayOrString]
		: arrayOrString

// endregion

// region generate

const generate = ({userAgent, allow, disallow}) =>
	([
		userAgent
			.map(agent => `User-agent: ${agent}`),
		allow
			.map(path => `Allow: ${path}`),
		disallow
			.map(path => `Disallow: ${path}`)
	])
	.reduce((a, b) => [...a, ...b], [])
	.join('\n')

// endregion

// region combine

export default rules =>
	(rules instanceof Array ? rules : [rules])
		.map(input => Object.assign({
			userAgent: ['*'],
			allow: [],
			disallow: []
		}, input))
		.map(arrify)
		.map(generate)
		.join('\n')
	+ '\n'

// endregion
