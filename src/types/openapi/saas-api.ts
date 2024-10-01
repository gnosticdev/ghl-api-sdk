export type paths = {
	'/saas-api/public-api/locations': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get locations by stripeId with companyId
		 * @description Get locations by stripeCustomerId or stripeSubscriptionId with companyId
		 */
		get: operations['locations']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/update-saas-subscription/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update SaaS subscription
		 * @description Update SaaS subscription for given locationId and customerId
		 */
		put: operations['generate-payment-link']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/bulk-disable-saas/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Disable SaaS for locations
		 * @description Disable SaaS for locations for given locationIds
		 */
		post: operations['bulk-disable-saas']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/enable-saas/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Enable SaaS for location
		 * @description Enable SaaS for given locationIds
		 */
		post: operations['enable-saas']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/pause/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Pause location
		 * @description Pause Sub account for given locationId
		 */
		post: operations['pause-location']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/update-rebilling/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Update Rebilling
		 * @description Bulk update rebilling for given locationIds
		 */
		post: operations['update-rebilling']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export type components = {
	schemas: {
		UpdateSubscriptionDto: {
			subscriptionId: string
			customerId: string
			companyId: string
		}
		BulkDisableSaasDto: {
			locationIds: string[]
		}
		EnableSaasDto: {
			stripeAccountId: string
			name: string
			email: string
			stripeCustomerId: string
			companyId: string
		}
		PauseLocationDto: {
			paused: boolean
			companyId: string
		}
		UpdateRebillingDto: {
			/** @enum {string} */
			product:
				| 'contentAI'
				| 'workflow_premium_actions'
				| 'workflow_ai'
				| 'conversationAI'
				| 'whatsApp'
				| 'reviewsAI'
				| 'Phone'
				| 'Email'
			locationIds: string[]
			config: {
				/** @example true */
				optIn?: boolean
				/** @example true */
				enabled?: boolean
				/** @example 105 */
				markup?: number
			}
		}
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
	locations: {
		parameters: {
			query: {
				customerId: string
				subscriptionId: string
				companyId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'generate-payment-link': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
			}
			path: {
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateSubscriptionDto']
			}
		}
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'bulk-disable-saas': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
			}
			path: {
				companyId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BulkDisableSaasDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'enable-saas': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
			}
			path: {
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['EnableSaasDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'pause-location': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
			}
			path: {
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['PauseLocationDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'update-rebilling': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
			}
			path: {
				companyId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateRebillingDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
}
