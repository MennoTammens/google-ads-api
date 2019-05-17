module.exports = {
    name: 'AdGroupBidModifier',
    object: {
        ad_group: { _type: 'string', _description: 'The ad group to which this criterion belongs.' },
        hotel_length_of_stay: {
            max_nights: { _type: 'int64', _description: 'High end of the number of nights in the stay.' },
            min_nights: { _type: 'int64', _description: 'Low end of the number of nights in the stay.' },
            _oneof: 'criterion',
        },
        base_ad_group: {
            _type: 'string',
            _description:
                'The base ad group from which this draft/trial adgroup bid modifier was created. If ad_group is a base ad group then this field will be equal to ad_group. If the ad group was created in the draft or trial and has no corresponding base ad group, then this field will be null. This field is readonly.',
        },
        preferred_content: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'YOUTUBE_TOP_CONTENT', description: 'Represents top content on YouTube.' },
                ],
                _description: 'Type of the preferred content.',
            },
            _oneof: 'criterion',
        },
        hotel_check_in_day: {
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
                _description: 'The day of the week.',
            },
            _oneof: 'criterion',
        },
        hotel_advance_booking_window: {
            max_days: { _type: 'int64', _description: 'High end of the number of days prior to the stay.' },
            min_days: { _type: 'int64', _description: 'Low end of the number of days prior to the stay.' },
            _oneof: 'criterion',
        },
        hotel_date_selection_type: {
            type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'DEFAULT_SELECTION', description: 'Dates selected by default.' },
                    { s: 'USER_SELECTED', description: 'Dates selected by the user.' },
                ],
                _description: 'Type of the hotel date selection',
            },
            _oneof: 'criterion',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: <code>customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}</code>',
        },
        bid_modifier_source: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'CAMPAIGN',
                    description:
                        'The bid modifier is specified at the campaign level, on the campaign\nlevel criterion.',
                },
                { s: 'AD_GROUP', description: 'The bid modifier is specified (overridden) at the ad group level.' },
            ],
            _description: 'Bid modifier source.',
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
        criterion_id: {
            _type: 'int64',
            _description: 'The ID of the criterion to bid modify. This field is ignored for mutates.',
        },
        bid_modifier: {
            _type: 'double',
            _description:
                'The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
