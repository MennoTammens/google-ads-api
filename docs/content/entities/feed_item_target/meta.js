module.exports = {
    name: 'FeedItemTarget',
    object: {
        feed_item_target_id: {
            _type: 'int64',
            _description: 'The ID of the targeted resource. This field is read-only.',
        },
        feed_item_target_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'CAMPAIGN', description: 'Feed item targets a campaign.' },
                { s: 'AD_GROUP', description: 'Feed item targets an ad group.' },
                { s: 'CRITERION', description: 'Feed item targets a criterion.' },
            ],
            _description: 'The target type of this feed item target. This field is read-only.',
        },
        feed_item: { _type: 'string', _description: 'The feed item to which this feed item target belongs.' },
        geo_target_constant: {
            _type: 'string',
            _description: 'The targeted geo target constant resource name.',
            _oneof: 'target',
        },
        ad_group: { _type: 'string', _description: 'The targeted ad group.', _oneof: 'target' },
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
            _oneof: 'target',
        },
        campaign: { _type: 'string', _description: 'The targeted campaign.', _oneof: 'target' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the feed item target. Feed item target resource names have the form: <code>customers/{customer_id}/feedItemTargets/{feed_id}~{feed_item_id}~{feed_item_target_type}~{feed_item_target_id}</code>',
        },
        device: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'MOBILE', description: 'Mobile.' },
            ],
            _description: 'The targeted device.',
            _oneof: 'target',
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
            _oneof: 'target',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
