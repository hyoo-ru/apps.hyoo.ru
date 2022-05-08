namespace $.$$ {

	export class $hyoo_apps extends $.$hyoo_apps {

		app() {
			return this.$.$mol_state_arg.value( 'app' )
		}
		
		group_name( id: string ) {
			return this.groups()[ id ]
		}
		
		@ $mol_mem
		group_list() {
			return Object.keys( this.groups() ).map( group => this.Group( group ) )
		}
		
		@ $mol_mem_key
		group_items( group: string ) {
			const apps = this.apps()
			return Object.keys( this.apps() )
				.filter( app => apps[ app ].target === group )
				.map( app => this.Menu_item( app ) )
		}
		
		@ $mol_mem
		pages() {
			const app = this.app()
			return [
				this.Menu(),
				... app ? [ this.App( app ) ] : [],
			]
		}
		
		app_title( app: [ string, string ] ) {
			return this.apps()[ app ].title
		}
		
		app_uri_default( app : string, next?: string ) {
			return this.apps()[ app ].uri
		}
		
		@ $mol_mem_key
		app_uri_embed( app: string, next?: string ) {
			
			const lights = this.$.$mol_lights()
			
			if( this.app() === app ) {
				const arg = this.$.$mol_state_arg.value( 'uri', next )
				if( arg ) return arg.replace( /mol_lights=(true|false)/, `mol_lights=${ lights }` )
			}
			
			return this.app_uri_default( app ) + `#mol_lights=${ lights }`
			
		}

		app_arg( app: string ) {
			return { app, uri: null }
		}

	}

}
