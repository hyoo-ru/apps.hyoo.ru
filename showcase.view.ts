namespace $.$$ {

	export class $hyoo_showcase_app extends $.$hyoo_showcase_app {

		background() {
			return this.preview() ? `url(${ JSON.stringify( this.preview() ) })` : ''
		}

	}

}
