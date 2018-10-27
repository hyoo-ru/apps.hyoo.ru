namespace $.$$ {

	export class $hyoo_showcase extends $.$hyoo_showcase {

		content() {
			return Object.keys( this.apps() ).map( uri => this.App( uri ) )
		}

		app_title( uri : string ) {
			return this.apps()[ uri ]
		}

		app_uri( uri : string ) {
			return uri
		}

	}

	export class $hyoo_showcase_app extends $.$hyoo_showcase_app {

	}

}
