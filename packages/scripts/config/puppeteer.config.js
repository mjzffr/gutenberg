module.exports = {
	launch: {
		devtools: process.env.PUPPETEER_DEVTOOLS === 'true',
		headless: false,
		product: 'firefox',
		slowMo: 0,
		extraPrefsFirefox: {
			'dom.disable_beforeunload': true,
			'remote.log.level': 'Trace',
		},
		executablePath:
			'/Users/mfrydrychowicz/dev/mozilla-unified/objdir-frontend/dist/Nightly.app/Contents/MacOS/firefox',
	},
};
