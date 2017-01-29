const robogen = require('../build').default

const robotsTXT = robogen([{
	userAgent: '*',
	allow: '/',
	disallow: ['/secret', '/private']
}, {
	userAgent: ['Bingbot', 'MSNBot'],
	disallow: '/'
}])

console.log(robotsTXT)
