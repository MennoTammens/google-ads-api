module.exports = {
    name: 'CampaignCriterion',
    object: {
        listing_scope: {
            dimensions: { _type: 'array', _description: 'Scope of the campaign criterion.' },
            _oneof: 'criterion',
        },
        income_range: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'INCOME_RANGE_0_50', description: '0%-50%.' },
                    { s: 'INCOME_RANGE_50_60', description: '50% to 60%.' },
                    { s: 'INCOME_RANGE_60_70', description: '60% to 70%.' },
                    { s: 'INCOME_RANGE_70_80', description: '70% to 80%.' },
                    { s: 'INCOME_RANGE_80_90', description: '80% to 90%.' },
                    { s: 'INCOME_RANGE_90_UP', description: 'Greater than 90%.' },
                    { s: 'INCOME_RANGE_UNDETERMINED', description: 'Undetermined income range.' },
                ],
                _description: 'Type of the income range.',
            },
            _oneof: 'criterion',
        },
        carrier: {
            carrier_constant: { _type: 'string', _description: 'The Carrier constant resource name.' },
            _oneof: 'criterion',
        },
        operating_system_version: {
            operating_system_version_constant: {
                _type: 'string',
                _description: 'The operating system version constant resource name.',
            },
            _oneof: 'criterion',
        },
        mobile_device: {
            mobile_device_constant: { _type: 'string', _description: 'The mobile device constant resource name.' },
            _oneof: 'criterion',
        },
        device: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'MOBILE', description: 'Mobile devices with full browsers.' },
                    { s: 'TABLET', description: 'Tablets with full browsers.' },
                    { s: 'DESKTOP', description: 'Computers.' },
                    { s: 'OTHER', description: 'Other device types.' },
                ],
                _description: 'Type of the device.',
            },
            _oneof: 'criterion',
        },
        ad_schedule: {
            day_of_week: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'MONDAY', description: 'Monday.' },
                    { s: 'TUESDAY', description: 'Tuesday.' },
                    { s: 'WEDNESDAY', description: 'Wednesday.' },
                    { s: 'THURSDAY', description: 'Thursday.' },
                    { s: 'FRIDAY', description: 'Friday.' },
                    { s: 'SATURDAY', description: 'Saturday.' },
                    { s: 'SUNDAY', description: 'Sunday.' },
                ],
                _description:
                    'Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            end_minute: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'ZERO', description: 'Zero minutes past the hour.' },
                    { s: 'FIFTEEN', description: 'Fifteen minutes past the hour.' },
                    { s: 'THIRTY', description: 'Thirty minutes past the hour.' },
                    { s: 'FORTY_FIVE', description: 'Forty-five minutes past the hour.' },
                ],
                _description:
                    'Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            start_hour: {
                _type: 'int32',
                _description:
                    'Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            start_minute: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'ZERO', description: 'Zero minutes past the hour.' },
                    { s: 'FIFTEEN', description: 'Fifteen minutes past the hour.' },
                    { s: 'THIRTY', description: 'Thirty minutes past the hour.' },
                    { s: 'FORTY_FIVE', description: 'Forty-five minutes past the hour.' },
                ],
                _description:
                    'Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            end_hour: {
                _type: 'int32',
                _description:
                    'Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            _oneof: 'criterion',
        },
        bid_modifier: {
            _type: 'float',
            _description:
                'The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type.',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'KEYWORD', description: "Keyword. e.g. 'mars cruise'." },
                { s: 'PLACEMENT', description: "Placement, aka Website. e.g. 'www.flowers4sale.com'" },
                { s: 'MOBILE_APP_CATEGORY', description: 'Mobile application categories to target.' },
                { s: 'MOBILE_APPLICATION', description: 'Mobile applications to target.' },
                { s: 'DEVICE', description: 'Devices to target.' },
                { s: 'LOCATION', description: 'Locations to target.' },
                { s: 'LISTING_GROUP', description: 'Listing groups to target.' },
                { s: 'AD_SCHEDULE', description: 'Ad Schedule.' },
                { s: 'AGE_RANGE', description: 'Age range.' },
                { s: 'GENDER', description: 'Gender.' },
                { s: 'INCOME_RANGE', description: 'Income Range.' },
                { s: 'PARENTAL_STATUS', description: 'Parental status.' },
                { s: 'YOUTUBE_VIDEO', description: 'YouTube Video.' },
                { s: 'YOUTUBE_CHANNEL', description: 'YouTube Channel.' },
                { s: 'USER_LIST', description: 'User list.' },
                { s: 'PROXIMITY', description: 'Proximity.' },
                { s: 'TOPIC', description: 'A topic target on the display network (e.g. "Pets & Animals").' },
                { s: 'LISTING_SCOPE', description: 'Listing scope to target.' },
                { s: 'LANGUAGE', description: 'Language.' },
                { s: 'IP_BLOCK', description: 'IpBlock.' },
                { s: 'CONTENT_LABEL', description: 'Content Label for category exclusion.' },
                { s: 'CARRIER', description: 'Carrier.' },
                { s: 'USER_INTEREST', description: 'A category the user is interested in.' },
                { s: 'WEBPAGE', description: 'Webpage criterion for dynamic search ads.' },
                { s: 'OPERATING_SYSTEM_VERSION', description: 'Operating system version.' },
                { s: 'APP_PAYMENT_MODEL', description: 'App payment model.' },
                { s: 'MOBILE_DEVICE', description: 'Mobile device.' },
                { s: 'CUSTOM_AFFINITY', description: 'Custom affinity.' },
                { s: 'CUSTOM_INTENT', description: 'Custom intent.' },
                { s: 'LOCATION_GROUP', description: 'Location group.' },
            ],
            _description: 'The type of the criterion.',
        },
        ip_block: {
            ip_address: { _type: 'string', _description: 'The IP address of this IP block.' },
            _oneof: 'criterion',
        },
        user_list: {
            user_list: { _type: 'string', _description: 'The User List resource name.' },
            _oneof: 'criterion',
        },
        user_interest: {
            user_interest_category: { _type: 'string', _description: 'The UserInterest resource name.' },
            _oneof: 'criterion',
        },
        webpage: {
            criterion_name: {
                _type: 'string',
                _description:
                    'The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            conditions: {
                _type: 'array',
                _description:
                    'Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. This field is required for CREATE operations and is prohibited on UPDATE operations.',
            },
            _oneof: 'criterion',
        },
        placement: {
            url: { _type: 'string', _description: 'URL of the placement. For example, "http://www.domain.com".' },
            _oneof: 'criterion',
        },
        location: {
            geo_target_constant: { _type: 'string', _description: 'The geo target constant resource name.' },
            _oneof: 'criterion',
        },
        parental_status: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'PARENT', description: 'Parent.' },
                    { s: 'NOT_A_PARENT', description: 'Not a parent.' },
                    { s: 'UNDETERMINED', description: 'Undetermined parental status.' },
                ],
                _description: 'Type of the parental status.',
            },
            _oneof: 'criterion',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the campaign criterion. Campaign criterion resource names have the form: <code>customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}</code>',
        },
        content_label: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'SEXUALLY_SUGGESTIVE', description: 'Sexually suggestive content.' },
                    { s: 'BELOW_THE_FOLD', description: 'Below the fold placement.' },
                    { s: 'PARKED_DOMAIN', description: 'Parked domain.' },
                    { s: 'GAME', description: 'Game.' },
                    { s: 'JUVENILE', description: 'Juvenile, gross & bizarre content.' },
                    { s: 'PROFANITY', description: 'Profanity & rough language.' },
                    { s: 'TRAGEDY', description: 'Death & tragedy.' },
                    { s: 'VIDEO', description: 'Video.' },
                    { s: 'VIDEO_RATING_DV_G', description: 'Content rating: G.' },
                    { s: 'VIDEO_RATING_DV_PG', description: 'Content rating: PG.' },
                    { s: 'VIDEO_RATING_DV_T', description: 'Content rating: T.' },
                    { s: 'VIDEO_RATING_DV_MA', description: 'Content rating: MA.' },
                    { s: 'VIDEO_NOT_YET_RATED', description: 'Content rating: not yet rated.' },
                    { s: 'EMBEDDED_VIDEO', description: 'Embedded video.' },
                    { s: 'LIVE_STREAMING_VIDEO', description: 'Live streaming video.' },
                ],
                _description: 'Content label type, required for CREATE operations.',
            },
            _oneof: 'criterion',
        },
        age_range: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'AGE_RANGE_18_24', description: 'Between 18 and 24 years old.' },
                    { s: 'AGE_RANGE_25_34', description: 'Between 25 and 34 years old.' },
                    { s: 'AGE_RANGE_35_44', description: 'Between 35 and 44 years old.' },
                    { s: 'AGE_RANGE_45_54', description: 'Between 45 and 54 years old.' },
                    { s: 'AGE_RANGE_55_64', description: 'Between 55 and 64 years old.' },
                    { s: 'AGE_RANGE_65_UP', description: '65 years old and beyond.' },
                    { s: 'AGE_RANGE_UNDETERMINED', description: 'Undetermined age range.' },
                ],
                _description: 'Type of the age range.',
            },
            _oneof: 'criterion',
        },
        criterion_id: { _type: 'int64', _description: 'The ID of the criterion. This field is ignored during mutate.' },
        youtube_video: {
            video_id: { _type: 'string', _description: 'YouTube video id as it appears on the YouTube watch page.' },
            _oneof: 'criterion',
        },
        topic: {
            topic_constant: { _type: 'string', _description: 'The Topic Constant resource name.' },
            path: {
                _type: 'array',
                _description:
                    'The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, "Pets &amp; Animals", "Pets", "Dogs" represents the "Pets &amp; Animals/Pets/Dogs" category.',
            },
            _oneof: 'criterion',
        },
        youtube_channel: {
            channel_id: {
                _type: 'string',
                _description: 'The YouTube uploader channel id or the channel code of a YouTube channel.',
            },
            _oneof: 'criterion',
        },
        negative: {
            _type: 'boolean',
            _description: 'Whether to target (<code>false</code>) or exclude (<code>true</code>) the criterion.',
        },
        mobile_app_category: {
            mobile_app_category_constant: {
                _type: 'string',
                _description: 'The mobile app category constant resource name.',
            },
            _oneof: 'criterion',
        },
        keyword: {
            match_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'EXACT', description: 'Exact match.' },
                    { s: 'PHRASE', description: 'Phrase match.' },
                    { s: 'BROAD', description: 'Broad match.' },
                ],
                _description: 'The match type of the keyword.',
            },
            text: { _type: 'string', _description: 'The text of the keyword (at most 80 characters and 10 words).' },
            _oneof: 'criterion',
        },
        campaign: { _type: 'string', _description: 'The campaign to which the criterion belongs.' },
        language: {
            language_constant: { _type: 'string', _description: 'The language constant resource name.' },
            _oneof: 'criterion',
        },
        proximity: {
            radius_units: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'MILES', description: 'Miles' },
                    { s: 'KILOMETERS', description: 'Kilometers' },
                ],
                _description: 'The unit of measurement of the radius. Default is KILOMETERS.',
            },
            address: {
                city_name: { _type: 'string', _description: 'Name of the city.' },
                postal_code: { _type: 'string', _description: 'Postal code.' },
                country_code: { _type: 'string', _description: 'Country code.' },
                street_address2: {
                    _type: 'string',
                    _description:
                        'Street address line 2. This field is write-only. It is only used for calculating the longitude and latitude of an address when geo_point is empty.',
                },
                province_name: { _type: 'string', _description: 'Province or state name.' },
                province_code: { _type: 'string', _description: 'Province or state code.' },
                street_address: { _type: 'string', _description: 'Street address line 1.' },
            },
            geo_point: {
                longitude_in_micro_degrees: { _type: 'int32', _description: 'Micro degrees for the longitude.' },
                latitude_in_micro_degrees: { _type: 'int32', _description: 'Micro degrees for the latitude.' },
            },
            radius: { _type: 'double', _description: 'The radius of the proximity.' },
            _oneof: 'criterion',
        },
        gender: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'MALE', description: 'Male.' },
                    { s: 'FEMALE', description: 'Female.' },
                    { s: 'UNDETERMINED', description: 'Undetermined gender.' },
                ],
                _description: 'Type of the gender.',
            },
            _oneof: 'criterion',
        },
        mobile_application: {
            app_id: {
                _type: 'string',
                _description:
                    'A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, this native identifier is the application\'s package name (e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations.',
            },
            name: { _type: 'string', _description: 'Name of this mobile application.' },
            _oneof: 'criterion',
        },
        location_group: {
            radius: {
                _type: 'int64',
                _description:
                    'Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations.',
            },
            geo_target_constants: {
                _type: 'array',
                _description:
                    'Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed.',
            },
            radius_units: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'METERS', description: 'Meters' },
                    { s: 'MILES', description: 'Miles' },
                ],
                _description:
                    'Unit of the radius, miles and meters supported currently. This is required and must be set in CREATE operations.',
            },
            feed: {
                _type: 'string',
                _description:
                    'Feed specifying locations for targeting. This is required and must be set in CREATE operations.',
            },
            _oneof: 'criterion',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
