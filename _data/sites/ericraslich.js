module.exports = {
	name: "ericraslich", // optional, falls back to object key
	description: "Eric’s personal web site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// set to false to run
	skip: false, //!process.env.CONTEXT || process.env.SITE_NAME !== "speedlify.ericraslich",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://ericraslich.com/",
		"https://ericraslich.com/projects/",
		"https://ericraslich.com/posts/",
		"https://ericraslich.com/uses/",
		"https://ericraslich.com/garden/",
		"https://ericraslich.com/hire/",
		"https://ericraslich.com/cv/",
		// "Popular" Projects
		"https://ericraslich.com/projects/couch-to-5k/",
		// "Popular" Posts
		"https://ericraslich.com/posts/2020-05-10-ethereum-fast-sync-raspberry-pi-4/",
		"https://ericraslich.com/posts/2020-04-14-something-about-a-gecko/",
		"https://ericraslich.com/posts/2020-03-15-blue-hole-key-deer/"
	]
};