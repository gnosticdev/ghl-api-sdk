export type paths = {
	'/calendars/groups': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Groups
		 * @description Get all calendar groups in a location.
		 */
		get: operations['get-groups']
		put?: never
		/**
		 * Create Calendar Group
		 * @description Create Calendar Group
		 */
		post: operations['create-calendar-group']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/groups/validate-slug': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Validate group slug
		 * @description Validate if group slug is available or not.
		 */
		post: operations['validate-groups-slug']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/groups/{groupId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Edit Group
		 * @description Edit Group
		 */
		put: operations['edit-group']
		post?: never
		/**
		 * Delete Group
		 * @description Delete Group
		 */
		delete: operations['delete-group']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/groups/{groupId}/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Disable Group
		 * @description Disable Group
		 */
		put: operations['disable-group']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Calendar Events
		 * @description Get Calendar Events
		 */
		get: operations['get-calendar-events']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/blocked-slots': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Blocked Slots
		 * @description Get Blocked Slots
		 */
		get: operations['get-blocked-slots']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/{calendarId}/free-slots': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Free Slots
		 * @description Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.
		 */
		get: operations['get-slots']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/{calendarId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Calendar
		 * @description Get calendar by ID
		 */
		get: operations['get-calendar']
		/**
		 * Update Calendar
		 * @description Update calendar by ID.
		 */
		put: operations['update-calendar']
		post?: never
		/**
		 * Delete Calendar
		 * @description Delete calendar by ID
		 */
		delete: operations['delete-calendar']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/appointments/{eventId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Appointment
		 * @description Get appointment by ID
		 */
		get: operations['get-appointment']
		/**
		 * Edit Appointment
		 * @description Edit appointment by ID
		 */
		put: operations['edit-appointment']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/appointments': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Appointment
		 * @description Create appointment
		 */
		post: operations['create-appointment']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/block-slots': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Block Slot
		 * @description Create block slot
		 */
		post: operations['create-block-slot']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/block-slots/{eventId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Edit Block Slot
		 * @description Edit block slot by ID
		 */
		put: operations['edit-block-slot']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/events/{eventId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		/**
		 * Delete Event
		 * @description Delete event by ID
		 */
		delete: operations['delete-event']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/resources/{resourceType}/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Calendar Resource
		 * @description Get calendar resource by ID
		 */
		get: operations['get-calendar-resource']
		/**
		 * Update Calendar Resource
		 * @description Update calendar resource by ID
		 */
		put: operations['update-calendar-resource']
		post?: never
		/**
		 * Delete Calendar Resource
		 * @description Delete calendar resource by ID
		 */
		delete: operations['delete-calendar-resource']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/resources/{resourceType}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Calendar Resources
		 * @description List calendar resources by resource type and location ID
		 */
		get: operations['fetch-calendar-resources']
		put?: never
		/**
		 * Create Calendar Resource
		 * @description Create calendar resource by resource type
		 */
		post: operations['create-calendar-resource']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/calendars/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Calendars
		 * @description Get all calendars in a location.
		 */
		get: operations['get-calendars']
		put?: never
		/**
		 * Create Calendar
		 * @description Create calendar in a location.
		 */
		post: operations['create-calendar']
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
		BadRequestDTO: {
			/** @example 400 */
			statusCode?: number
			/** @example Bad Request */
			message?: string
		}
		UnauthorizedDTO: {
			/** @example 401 */
			statusCode?: number
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example Unauthorized */
			error?: string
		}
		GroupSchema: {
			/** @example 0TkCdp9PfvLeWKYRRvIz */
			id?: string
			/** @example ocQHyuzHvysMo5N5VsXc */
			locationId?: string
			/** @example my-team */
			name?: string
			/** @example true */
			isActive?: boolean
			/** @example my-team */
			description?: string
			/** @example my-team */
			slug?: string
		}
		GroupsGetSuccessfulResponseDTO: {
			groups?: components['schemas']['GroupSchema'][]
		}
		ValidateGroupSlugPostBody: {
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Slug
			 * @example calendar-1
			 */
			slug: string
		}
		ValidateGroupSlugSuccessResponseDTO: {
			available: boolean
		}
		GroupDTO: {
			/** @example ocQHyuzHvysMo5N5VsXc */
			id?: string
			/** @example ocQHyuzHvysMo5N5VsXc */
			locationId: string
			/** @example group a */
			name: string
			/** @example group description */
			description: string
			/** @example 15-mins */
			slug: string
			/** @example true */
			isActive?: boolean
			dateAdded?: Record<string, never>
			dateUpdated?: Record<string, never>
		}
		GroupCreateSuccessfulResponseDTO: {
			group?: components['schemas']['GroupDTO']
		}
		GroupSuccessfulResponseDTO: {
			/**
			 * @description Success
			 * @example true
			 */
			success?: boolean
		}
		GroupStatusUpdateParams: {
			/**
			 * @description Is Active?
			 * @example true
			 */
			isActive: boolean
		}
		GroupUpdateDTO: {
			/** @example ocQHyuzHvysMo5N5VsXc */
			id?: string
			/** @example group a */
			name: string
			/** @example group description */
			description: string
			/** @example 15-mins */
			slug: string
		}
		CalendarEventDTO: {
			/**
			 * @description Calendar Event ID
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			id: string
			/**
			 * @description Calendar Event address
			 * @example https://meet.google.com/yqp-gogr-wve
			 */
			address?: string
			/**
			 * @description Calendar Event title
			 * @example Appointment with GHL Dev team
			 */
			title: string
			/**
			 * @description Calendar ID
			 * @example BqTwX8QFwXzpegMve9EQ
			 */
			calendarId: string
			/**
			 * @description Location ID
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			locationId: string
			/**
			 * @description Contact ID
			 * @example 9NkT25Vor1v4aQatFsv2
			 */
			contactId: string
			/**
			 * @description Group ID
			 * @example 9NkT25Vor1v4aQatFsv2
			 */
			groupId: string
			/**
			 * @description Appointment Status
			 * @example confirmed
			 */
			appointmentStatus: string
			/**
			 * @description AssignedUser - the primary owner of an appointment
			 * @example YlWd2wuCAZQzh2cH1fVZ
			 */
			assignedUserId: string
			/**
			 * @description Users - the secondary owners of an appointment.
			 * @example [
			 *       "YlWd2wuCAZQzh2cH1fVZ",
			 *       "9NkT25Vor1v4aQatFsv2"
			 *     ]
			 */
			users: string[]
			/**
			 * @description Notes
			 * @example Some dummy note
			 */
			notes?: string
			/**
			 * @description Start Time
			 * @example 2023-09-25T16:00:00+05:30
			 */
			startTime: Record<string, never>
			/**
			 * @description End Time
			 * @example 2023-09-25T16:00:00+05:30
			 */
			endTime: Record<string, never>
			/**
			 * @description Date Added
			 * @example 2023-09-25T16:00:00+05:30
			 */
			dateAdded: Record<string, never>
			/**
			 * @description Date Updated
			 * @example 2023-09-25T16:00:00+05:30
			 */
			dateUpdated: Record<string, never>
			/** @description Ids of associated resources rooms and/or equipments */
			assignedResources?: string[]
		}
		GetCalendarEventsSuccessfulResponseDTO: {
			events?: components['schemas']['CalendarEventDTO'][]
		}
		SlotsSchema: {
			slots: string[]
		}
		GetSlotsSuccessfulResponseDto: {
			_dates_: components['schemas']['SlotsSchema']
		}
		CalendarNotification: {
			/**
			 * @description Calendar Notification
			 * @default email
			 * @example email
			 * @enum {string}
			 */
			type: 'email'
			shouldSendToContact: boolean
			shouldSendToGuest: boolean
			shouldSendToUser: boolean
			shouldSendToSelectedUsers: boolean
			/**
			 * @description Comma separated emails
			 * @example user1@testemail.com,user2@testemail.com
			 */
			selectedUsers: string
		}
		TeamMember: {
			/** @example ocQHyuzHvysMo5N5VsXc */
			userId: string
			/**
			 * @default 0.5
			 * @enum {number}
			 */
			priority: 0 | 0.5 | 1
			/**
			 * @description Meeting Location Type. For class booking only the following types are allowed 'custom', 'phone', 'address'.
			 * @default custom
			 * @example custom
			 * @enum {string}
			 */
			meetingLocationType: 'custom' | 'zoom' | 'gmeet' | 'phone' | 'address'
			meetingLocation?: string
			/** @description Marks a user as primary. This property is required in case of collective booking calendars. Only one user can be primary. */
			isPrimary?: boolean
		}
		Hour: {
			openHour: number
			openMinute: number
			closeHour: number
			closeMinute: number
		}
		OpenHour: {
			daysOfTheWeek: number[]
			hours: components['schemas']['Hour'][]
		}
		Recurring: {
			/** @enum {string} */
			freq?: 'DAILY' | 'WEEKLY' | 'MONTHLY'
			/** @description Number of recurrences */
			count?: number
			/**
			 * @description This setting contols what to do incase a recurring slot is unavailable
			 * @enum {string}
			 */
			bookingOption?: 'skip' | 'continue' | 'book_next'
			/**
			 * @description This setting contols what to do incase a recurring slot is unavailable
			 * @enum {string}
			 */
			bookingOverlapDefaultStatus?: 'confirmed' | 'new'
		}
		Availability: {
			/** @description The ID of the custom availability object. It is required while updating or deleting the existing custom date availability */
			id?: string
			/**
			 * @description Formulate the date string in the format of `<YYYY-MM-DD in local timezone>T00:00:00.000Z`.
			 * @example 2023-09-24T00:00:00.000Z
			 */
			date: string
			hours: components['schemas']['Hour'][]
			/** @default false */
			deleted: boolean
		}
		CalendarDTO: {
			/**
			 * @description Should the created calendar be active or draft
			 * @default true
			 */
			isActive: boolean
			/** @description Calendar Notifications */
			notifications?: components['schemas']['CalendarNotification'][]
			/** @example ocQHyuzHvysMo5N5VsXc */
			locationId: string
			/**
			 * @description Group Id
			 * @example BqTwX8QFwXzpegMve9EQ
			 */
			groupId?: string
			/** @description Team members are required for calendars of type: Round Robin, Collective, Class, Service. */
			teamMembers?: components['schemas']['TeamMember'][]
			/**
			 * @default RoundRobin_OptimizeForAvailability
			 * @enum {string}
			 */
			eventType:
				| 'RoundRobin_OptimizeForAvailability'
				| 'RoundRobin_OptimizeForEqualDistribution'
			/** @example test calendar */
			name: string
			/** @example this is used for testing */
			description?: string
			/** @example test1 */
			slug?: string
			/** @example test1 */
			widgetSlug?: string
			/** @enum {string} */
			calendarType?:
				| 'round_robin'
				| 'event'
				| 'class_booking'
				| 'collective'
				| 'service_booking'
			/**
			 * @description Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
			 * @default classic
			 * @example classic
			 * @enum {string}
			 */
			widgetType: 'default' | 'classic'
			/** @default {{contact.name}} */
			eventTitle: string
			/** @default #039be5 */
			eventColor: string
			meetingLocation?: string
			/**
			 * @description This controls the duration of the meeting
			 * @default 30
			 */
			slotDuration: number
			/**
			 * @description Unit for slot duration.
			 * @enum {string}
			 */
			slotDurationUnit?: 'mins' | 'hours'
			/**
			 * @description Slot interval reflects the amount of time the between booking slots that will be shown in the calendar.
			 * @default 30
			 */
			slotInterval: number
			/**
			 * @description Unit for slot interval.
			 * @enum {string}
			 */
			slotIntervalUnit?: 'mins' | 'hours'
			/** @description Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up */
			slotBuffer?: number
			/**
			 * @description Unit for slot buffer.
			 * @enum {string}
			 */
			slotBufferUnit?: 'mins' | 'hours'
			/** @description Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready */
			preBuffer?: number
			/**
			 * @description Unit for pre-buffer.
			 * @enum {string}
			 */
			preBufferUnit?: 'mins' | 'hours'
			/**
			 * @description Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar.
			 * @default 1
			 */
			appoinmentPerSlot: number
			/** @description Number of appointments that can be booked for a given day */
			appoinmentPerDay?: number
			/** @description Minimum scheduling notice for events */
			allowBookingAfter?: number
			/**
			 * @description Unit for minimum scheduling notice
			 * @example days
			 * @enum {string}
			 */
			allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months'
			/** @description Minimum number of days/weeks/months for which to allow booking events */
			allowBookingFor?: number
			/**
			 * @description Unit for controlling the duration for which booking would be allowed for
			 * @example days
			 * @enum {string}
			 */
			allowBookingForUnit?: 'days' | 'weeks' | 'months'
			/** @description This is only to set the standard availability. For custom availability, use the availabilities property */
			openHours?: components['schemas']['OpenHour'][]
			/**
			 * @description Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this
			 * @default false
			 */
			enableRecurring: boolean
			recurring?: components['schemas']['Recurring']
			formId?: string
			stickyContact?: boolean
			isLivePaymentMode?: boolean
			/** @default true */
			autoConfirm: boolean
			shouldSendAlertEmailsToAssignedMember?: boolean
			alertEmail?: string
			/** @default false */
			googleInvitationEmails: boolean
			/** @default true */
			allowReschedule: boolean
			/** @default true */
			allowCancellation: boolean
			shouldAssignContactToTeamMember?: boolean
			shouldSkipAssigningContactForExisting?: boolean
			notes?: string
			pixelId?: string
			/**
			 * @default ThankYouMessage
			 * @enum {string}
			 */
			formSubmitType: 'RedirectURL' | 'ThankYouMessage'
			formSubmitRedirectURL?: string
			formSubmitThanksMessage?: string
			/**
			 * @default 0
			 * @enum {number}
			 */
			availabilityType: 0 | 1
			/** @description This is only to set the custom availability. For standard availability, use the openHours property */
			availabilities?: components['schemas']['Availability'][]
			/** @enum {string} */
			guestType?: 'count_only' | 'collect_detail'
			consentLabel?: string
			/** @example https://path-to-image.com */
			calendarCoverImage?: string
			/** @example 0TkCdp9PfvLeWKYRRvIz */
			id: string
		}
		CalendarsGetSuccessfulResponseDTO: {
			calendars?: components['schemas']['CalendarDTO'][]
		}
		CalendarCreateDTO: {
			/**
			 * @description Should the created calendar be active or draft
			 * @default true
			 */
			isActive: boolean
			/** @description Calendar Notifications */
			notifications?: components['schemas']['CalendarNotification'][]
			/** @example ocQHyuzHvysMo5N5VsXc */
			locationId: string
			/**
			 * @description Group Id
			 * @example BqTwX8QFwXzpegMve9EQ
			 */
			groupId?: string
			/** @description Team members are required for calendars of type: Round Robin, Collective, Class, Service. */
			teamMembers?: components['schemas']['TeamMember'][]
			/**
			 * @default RoundRobin_OptimizeForAvailability
			 * @enum {string}
			 */
			eventType:
				| 'RoundRobin_OptimizeForAvailability'
				| 'RoundRobin_OptimizeForEqualDistribution'
			/** @example test calendar */
			name: string
			/** @example this is used for testing */
			description?: string
			/** @example test1 */
			slug?: string
			/** @example test1 */
			widgetSlug?: string
			/** @enum {string} */
			calendarType?:
				| 'round_robin'
				| 'event'
				| 'class_booking'
				| 'collective'
				| 'service_booking'
			/**
			 * @description Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
			 * @default classic
			 * @example classic
			 * @enum {string}
			 */
			widgetType: 'default' | 'classic'
			/** @default {{contact.name}} */
			eventTitle: string
			/** @default #039be5 */
			eventColor: string
			meetingLocation?: string
			/**
			 * @description This controls the duration of the meeting
			 * @default 30
			 */
			slotDuration: number
			/**
			 * @description Unit for slot duration.
			 * @enum {string}
			 */
			slotDurationUnit?: 'mins' | 'hours'
			/**
			 * @description Slot interval reflects the amount of time the between booking slots that will be shown in the calendar.
			 * @default 30
			 */
			slotInterval: number
			/**
			 * @description Unit for slot interval.
			 * @enum {string}
			 */
			slotIntervalUnit?: 'mins' | 'hours'
			/** @description Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up */
			slotBuffer?: number
			/**
			 * @description Unit for slot buffer.
			 * @enum {string}
			 */
			slotBufferUnit?: 'mins' | 'hours'
			/** @description Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready */
			preBuffer?: number
			/**
			 * @description Unit for pre-buffer.
			 * @enum {string}
			 */
			preBufferUnit?: 'mins' | 'hours'
			/**
			 * @description Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar.
			 * @default 1
			 */
			appoinmentPerSlot: number
			/** @description Number of appointments that can be booked for a given day */
			appoinmentPerDay?: number
			/** @description Minimum scheduling notice for events */
			allowBookingAfter?: number
			/**
			 * @description Unit for minimum scheduling notice
			 * @example days
			 * @enum {string}
			 */
			allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months'
			/** @description Minimum number of days/weeks/months for which to allow booking events */
			allowBookingFor?: number
			/**
			 * @description Unit for controlling the duration for which booking would be allowed for
			 * @example days
			 * @enum {string}
			 */
			allowBookingForUnit?: 'days' | 'weeks' | 'months'
			/** @description This is only to set the standard availability. For custom availability, use the availabilities property */
			openHours?: components['schemas']['OpenHour'][]
			/**
			 * @description Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this
			 * @default false
			 */
			enableRecurring: boolean
			recurring?: components['schemas']['Recurring']
			formId?: string
			stickyContact?: boolean
			isLivePaymentMode?: boolean
			/** @default true */
			autoConfirm: boolean
			shouldSendAlertEmailsToAssignedMember?: boolean
			alertEmail?: string
			/** @default false */
			googleInvitationEmails: boolean
			/** @default true */
			allowReschedule: boolean
			/** @default true */
			allowCancellation: boolean
			shouldAssignContactToTeamMember?: boolean
			shouldSkipAssigningContactForExisting?: boolean
			notes?: string
			pixelId?: string
			/**
			 * @default ThankYouMessage
			 * @enum {string}
			 */
			formSubmitType: 'RedirectURL' | 'ThankYouMessage'
			formSubmitRedirectURL?: string
			formSubmitThanksMessage?: string
			/**
			 * @default 0
			 * @enum {number}
			 */
			availabilityType: 0 | 1
			/** @description This is only to set the custom availability. For standard availability, use the openHours property */
			availabilities?: components['schemas']['Availability'][]
			/** @enum {string} */
			guestType?: 'count_only' | 'collect_detail'
			consentLabel?: string
			/** @example https://path-to-image.com */
			calendarCoverImage?: string
		}
		CalendarByIdSuccessfulResponseDTO: {
			calendar: components['schemas']['CalendarDTO']
		}
		CalendarUpdateDTO: {
			/** @description Calendar Notifications */
			notifications?: components['schemas']['CalendarNotification'][]
			/**
			 * @description Group Id
			 * @example BqTwX8QFwXzpegMve9EQ
			 */
			groupId?: string
			/** @description Team members */
			teamMembers?: components['schemas']['TeamMember'][]
			/** @enum {string} */
			eventType?:
				| 'RoundRobin_OptimizeForAvailability'
				| 'RoundRobin_OptimizeForEqualDistribution'
			/** @example test calendar */
			name?: string
			/** @example this is used for testing */
			description?: string
			/** @example test1 */
			slug?: string
			/** @example test1 */
			widgetSlug?: string
			/**
			 * @description Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout.
			 * @default classic
			 * @example classic
			 * @enum {string}
			 */
			widgetType: 'default' | 'classic'
			eventTitle?: string
			/** @default #039be5 */
			eventColor: string
			meetingLocation?: string
			/**
			 * @description This controls the duration of the meeting
			 * @default 30
			 */
			slotDuration: number
			/**
			 * @description Unit for slot duration.
			 * @enum {string}
			 */
			slotDurationUnit?: 'mins' | 'hours'
			/**
			 * @description Unit for pre-buffer.
			 * @enum {string}
			 */
			preBufferUnit?: 'mins' | 'hours'
			/**
			 * @description Slot interval reflects the amount of time the between booking slots that will be shown in the calendar.
			 * @default 30
			 */
			slotInterval: number
			/**
			 * @description Unit for slot interval.
			 * @enum {string}
			 */
			slotIntervalUnit?: 'mins' | 'hours'
			/** @description Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up */
			slotBuffer?: number
			/** @description Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready */
			preBuffer?: number
			appoinmentPerSlot?: number
			/** @description Number of appointments that can be booked for a given day */
			appoinmentPerDay?: number
			/** @description Minimum scheduling notice for events */
			allowBookingAfter?: number
			/**
			 * @description Unit for minimum scheduling notice
			 * @example days
			 * @enum {string}
			 */
			allowBookingAfterUnit?: 'hours' | 'days' | 'weeks' | 'months'
			/** @description Minimum number of days/weeks/months for which to allow booking events */
			allowBookingFor?: number
			/**
			 * @description Unit for controlling the duration for which booking would be allowed for
			 * @example days
			 * @enum {string}
			 */
			allowBookingForUnit?: 'days' | 'weeks' | 'months'
			openHours?: components['schemas']['OpenHour'][]
			/**
			 * @description Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this
			 * @default false
			 */
			enableRecurring: boolean
			recurring?: components['schemas']['Recurring']
			formId?: string
			stickyContact?: boolean
			isLivePaymentMode?: boolean
			autoConfirm?: boolean
			shouldSendAlertEmailsToAssignedMember?: boolean
			alertEmail?: string
			googleInvitationEmails?: boolean
			allowReschedule?: boolean
			allowCancellation?: boolean
			shouldAssignContactToTeamMember?: boolean
			shouldSkipAssigningContactForExisting?: boolean
			notes?: string
			pixelId?: string
			/**
			 * @default ThankYouMessage
			 * @enum {string}
			 */
			formSubmitType: 'RedirectURL' | 'ThankYouMessage'
			formSubmitRedirectURL?: string
			formSubmitThanksMessage?: string
			/**
			 * @default 0
			 * @enum {number}
			 */
			availabilityType: 0 | 1
			/** @description This is only to set the custom availability. For standard availability, use the openHours property */
			availabilities?: components['schemas']['Availability'][]
			/** @enum {string} */
			guestType?: 'count_only' | 'collect_detail'
			consentLabel?: string
			calendarCoverImage?: string
		}
		CalendarDeleteSuccessfulResponseDTO: {
			/**
			 * @description Success
			 * @example true
			 */
			success: boolean
		}
		GetCalendarEventSuccessfulResponseDTO: {
			event?: components['schemas']['CalendarEventDTO']
		}
		AppointmentCreateSchema: {
			/**
			 * @description Calendar Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId: string
			/**
			 * @description Location Id
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Contact Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			contactId: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime?: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
			/**
			 * @example confirmed
			 * @enum {string}
			 */
			appointmentStatus?:
				| 'new'
				| 'confirmed'
				| 'cancelled'
				| 'showed'
				| 'noshow'
				| 'invalid'
			/**
			 * @description Assigned User Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			assignedUserId?: string
			/**
			 * @description Appointment Address
			 * @example Zoom
			 */
			address?: string
			/**
			 * @description If set to true, the minimum scheduling notice and date range would be ignored
			 * @example false
			 */
			ignoreDateRange?: boolean
			/**
			 * @description If set to false, the automations will not run
			 * @example false
			 */
			toNotify?: boolean
		}
		AppointmentSchemaResponse: {
			/**
			 * @description Calendar Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId: string
			/**
			 * @description Location Id
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Contact Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			contactId: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime?: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime?: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
			/**
			 * @example confirmed
			 * @enum {string}
			 */
			appointmentStatus?:
				| 'new'
				| 'confirmed'
				| 'cancelled'
				| 'showed'
				| 'noshow'
				| 'invalid'
			/**
			 * @description Assigned User Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			assignedUserId?: string
			/**
			 * @description Appointment Address
			 * @example Zoom
			 */
			address?: string
			/**
			 * @description Id
			 * @example 0TkCdp9PfvLeWKYRRvIz
			 */
			id: string
		}
		AppointmentEditSchema: {
			/**
			 * @description Calendar Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId?: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime?: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime?: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
			/**
			 * @example confirmed
			 * @enum {string}
			 */
			appointmentStatus?:
				| 'new'
				| 'confirmed'
				| 'cancelled'
				| 'showed'
				| 'noshow'
				| 'invalid'
			/**
			 * @description Appointment Address
			 * @example Zoom
			 */
			address?: string
			/**
			 * @description If set to true, the minimum scheduling notice and date range would be ignored
			 * @example false
			 */
			ignoreDateRange?: boolean
			/**
			 * @description If set to false, the automations will not run
			 * @example false
			 */
			toNotify?: boolean
		}
		BlockSlotCreateSchema: {
			/**
			 * @description Calendar Id (Block Slot can only be created on simple/event calendars)
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId?: string
			/**
			 * @description Location Id
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
			/**
			 * @description Assigned User Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			assignedUserId?: string
		}
		CreateBookedSlotSuccessfulResponseDto: {
			/**
			 * @description Id
			 * @example 0TkCdp9PfvLeWKYRRvIz
			 */
			id: string
			/**
			 * @description Location Id
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Title
			 * @example My event
			 */
			title: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime: string
			/**
			 * @description Calendar id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId?: string
			/**
			 * @description Assigned User Id
			 * @example 0007BWpSzSwfiuSl0tR2
			 */
			assignedUserId?: string
		}
		BlockSlotEditSchema: {
			/**
			 * @description Calendar Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			calendarId?: string
			/**
			 * @description Start Time
			 * @example 2021-06-23T03:30:00+05:30
			 */
			startTime?: string
			/**
			 * @description End Time
			 * @example 2021-06-23T04:30:00+05:30
			 */
			endTime?: string
			/**
			 * @description Title
			 * @example Test Event
			 */
			title?: string
			/**
			 * @description Assigned User Id
			 * @example CVokAlI8fgw4WYWoCtQz
			 */
			assignedUserId?: string
		}
		DeleteAppointmentSchema: Record<string, never>
		DeleteEventSuccessfulResponseDto: {
			/** @example true */
			succeeded?: boolean
		}
		UpdateCalendarResourceDTO: {
			locationId?: string
			name?: string
			description?: string
			/** @description Quantity of the equipment. */
			quantity?: number
			/** @description Quantity of the out of service equipment. */
			outOfService?: number
			/** @description Capacity of the room. */
			capacity?: number
			/** @description Service calendar IDs to be mapped with the resource.
			 *
			 *         One equipment can only be mapped with one service calendar.
			 *
			 *     One room can be mapped with multiple service calendars. */
			calendarIds?: string[]
			isActive?: boolean
			deleted: boolean
		}
		CreateCalendarResourceDTO: {
			locationId: string
			name: string
			description: string
			/** @description Quantity of the equipment. */
			quantity: number
			/** @description Quantity of the out of service equipment. */
			outOfService: number
			/** @description Capacity of the room. */
			capacity: number
			/** @description Service calendar IDs to be mapped with the resource.
			 *
			 *         One equipment can only be mapped with one service calendar.
			 *
			 *     One room can be mapped with multiple service calendars. */
			calendarIds: string[]
			isActive: boolean
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
	'get-groups': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GroupsGetSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'create-calendar-group': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['GroupDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GroupCreateSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'validate-groups-slug': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['ValidateGroupSlugPostBody']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ValidateGroupSlugSuccessResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'edit-group': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Group Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['GroupUpdateDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GroupCreateSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'delete-group': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Group Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GroupSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'disable-group': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Group Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['GroupStatusUpdateParams']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GroupSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-calendar-events': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example 0007BWpSzSwfiuSl0tR2
				 */
				locationId: string
				/**
				 * @description User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
				 * @example CVokAlI8fgw4WYWoCtQz
				 */
				userId?: string
				/**
				 * @description Either of calendarId, userId or groupId is required
				 * @example BqTwX8QFwXzpegMve9EQ
				 */
				calendarId?: string
				/**
				 * @description Either of groupId, calendarId or userId is required
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId?: string
				/**
				 * @description Start Time (in millis)
				 * @example 1680373800000
				 */
				startTime: string
				/**
				 * @description End Time (in millis)
				 * @example 1680978599999
				 */
				endTime: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetCalendarEventsSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-blocked-slots': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example 0007BWpSzSwfiuSl0tR2
				 */
				locationId: string
				/**
				 * @description User Id - Owner of an appointment. Either of userId, groupId or calendarId is required
				 * @example CVokAlI8fgw4WYWoCtQz
				 */
				userId?: string
				/**
				 * @description Either of calendarId, userId or groupId is required
				 * @example BqTwX8QFwXzpegMve9EQ
				 */
				calendarId?: string
				/**
				 * @description Either of groupId, calendarId or userId is required
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				groupId?: string
				/**
				 * @description Start Time (in millis)
				 * @example 1680373800000
				 */
				startTime: string
				/**
				 * @description End Time (in millis)
				 * @example 1680978599999
				 */
				endTime: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetCalendarEventsSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-slots': {
		parameters: {
			query: {
				/**
				 * @description Start Date
				 * @example 1548898600000
				 */
				startDate: number
				/**
				 * @description End Date
				 * @example 1601490599999
				 */
				endDate: number
				/**
				 * @description The timezone in which the free slots are returned
				 * @example America/Chihuahua
				 */
				timezone?: string
				/**
				 * @description The user for whom the free slots are returned
				 * @example 082goXVW3lIExEQPOnd3
				 */
				userId?: string
				/**
				 * @description The users for whom the free slots are returned
				 * @example [082goXVW3lIExEQPOnd3]
				 */
				userIds?: string[]
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Calendar Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				calendarId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetSlotsSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-calendar': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Calendar Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				calendarId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarByIdSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'update-calendar': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Calendar Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				calendarId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CalendarUpdateDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarByIdSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'delete-calendar': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Calendar Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				calendarId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarDeleteSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-appointment': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Event Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				eventId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetCalendarEventSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'edit-appointment': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Event Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				eventId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AppointmentEditSchema']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['AppointmentSchemaResponse']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'create-appointment': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AppointmentCreateSchema']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['AppointmentSchemaResponse']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'create-block-slot': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BlockSlotCreateSchema']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateBookedSlotSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'edit-block-slot': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Event Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				eventId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BlockSlotEditSchema']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateBookedSlotSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'delete-event': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Event Id
				 * @example ocQHyuzHvysMo5N5VsXc
				 */
				eventId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['DeleteAppointmentSchema']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteEventSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-calendar-resource': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
				/** @description Calendar Resource ID */
				id: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Calendar resource fetched */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'update-calendar-resource': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
				/** @description Calendar Resource ID */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCalendarResourceDTO']
			}
		}
		responses: {
			/** @description Calendar resource updated */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'delete-calendar-resource': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
				/** @description Calendar Resource ID */
				id: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Calendar resource deleted */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'fetch-calendar-resources': {
		parameters: {
			query: {
				locationId: string
				limit: number
				skip: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Calendar resources listed */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'create-calendar-resource': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Calendar Resource Type */
				resourceType: 'equipments' | 'rooms'
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateCalendarResourceDTO']
			}
		}
		responses: {
			/** @description Calendar resource created */
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-calendars': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Group Id
				 * @example BqTwX8QFwXzpegMve9EQ
				 */
				groupId?: string
				/**
				 * @description Show drafted
				 * @example false
				 */
				showDrafted?: boolean
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarsGetSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'create-calendar': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CalendarCreateDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CalendarByIdSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
}
