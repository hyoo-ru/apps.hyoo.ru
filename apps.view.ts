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
		
		app_uri_default( app: string, next?: string ) {
			return this.data()[ app ].uri
		}
		
		@ $mol_mem_key
		app_uri_embed( app: string, next?: string ) {
			
			if( this.app() === app ) {
				const arg = this.$.$mol_state_arg.value( 'uri', next )
				if( arg ) return arg
			}
			
			return this.app_uri_default( app ) + `#mol_lights=${ this.$.$mol_lights() }`
			
		}

		app_arg( app: string ) {
			return { app, uri: null }
		}

	}

}
