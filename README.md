# robogen

> Robots.txt generator done right.

Takes an array of objects that describe rules. Converts them to an appropriate `robots.txt`.

## Usage

Generate a `robots.txt`:

```js
import robogen from 'robogen'

const robotsTXT = robogen([{
	userAgent: '*',
	allow: '/',
	disallow: ['/secret', '/private']
}, {
	userAgent: ['Bingbot', 'MSNBot'],
	disallow: '/'
}])

console.log(robotsTXT)
```

This will output

```http
User-agent: *
Allow: /
Disallow: /secret
Disallow: /private
User-agent: Bingbot
User-agent: MSNBot
Disallow: /
```

## Install

With [npm](https://npmjs.org/) installed, run

```sh
$ npm install robogen
```

## Acknowledgments

robogen was inspired by [robots-generator](https://npmjs.com/package/robots-generator)

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

[MIT](license.md)
