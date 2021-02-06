namespace $.$$ {

	export class $hyoo_apps extends $.$hyoo_apps {

		app() {
			return this.$.$mol_state_arg.value( 'app' )
		}
		
		@ $mol_mem
		menu_items() {
			return Object.keys( this.data() ).map( app => this.Menu_item( app ) )
		}
		
		pages() {
			const app = this.app()
			return [
				this.Menu(),
				... app ? [ this.App( app ) ] : [],
			]
		}
		
		app_title( app: string ) {
			return this.data()[ app ].title
		}

		app_uri( app: string ) {
			return this.data()[ app ].uri
		}

		app_arg( app: string ) {
			return { app }
		}

	}

}
