function sveltemoji() {
	return {
		name: 'sveltemoji',
		markup({ content}) {
			return {
				code: content.replaceAll('🔥', 'fire')
			}
		},
		script({ content, filename}) {

		},
		style({ content, filename}) {

		}
	}
}

export default sveltemoji