module.exports = {
	launch: {
		devtools: process.env.PUPPETEER_DEVTOOLS === 'true',
		headless: process.env.PUPPETEER_HEADLESS !== 'false',
		slowMo: 0,
		// set the binary path here since puppeteer-core ignores Puppeteer's
		// environment variables
		executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
		product: 'firefox',
		// Gutenberg depends on Puppeteer 3, so bring Firefox prefs up-to-date
		extraPrefsFirefox: {
			// Enable additional Firefox logging from its protocol implementation
			// 'remote.log.level': 'Trace',
			'browser.newtabpage.activity-stream.feeds.system.topstories': false,
			'fission.autostart': false,
			'dom.disable_beforeunload': true,
		},
	},
};
