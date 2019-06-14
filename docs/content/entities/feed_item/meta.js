module.exports = {
    name: 'FeedItem',
    object: {
        attribute_values: { _description: "The feed item's attribute values.", _type: 'array' },
        end_date_time: {
            _description:
                'End time in which this feed item is no longer effective and will stop serving. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
            _type: 'string',
        },
        feed: { _description: 'The feed to which this feed item belongs.', _type: 'string' },
        geo_targeting_restriction: {
            _description: 'Geo targeting restriction specifies the type of location that can be used for targeting.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'LOCATION_OF_PRESENCE',
                    description: 'Indicates that request context should match the physical location of\nthe user.',
                },
            ],
            _type: 'enum',
        },
        id: { _description: 'The ID of this feed item.', _type: 'int64' },
        policy_infos: {
            _description:
                "List of info about a feed item's validation and approval state for active feed mappings. There will be an entry in the list for each type of feed mapping associated with the feed, e.g. a feed with a sitelink and a call feed mapping would cause every feed item associated with that feed to have an entry in this list for both sitelink and call. This field is read-only.",
            _type: 'array',
        },
        resource_name: {
            _description:
                'The resource name of the feed item. Feed item resource names have the form: <code>customers/{customer_id}/feedItems/{feed_id}~{feed_item_id}</code>',
            _type: 'string',
        },
        start_date_time: {
            _description:
                'Start time in which this feed item is effective and can begin serving. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
            _type: 'string',
        },
        status: {
            _description: 'Status of the feed item. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed item is enabled.' },
                { s: 'REMOVED', description: 'Feed item has been removed.' },
            ],
            _type: 'enum',
        },
        url_custom_parameters: {
            _description:
                'The list of mappings used to substitute custom parameter tags in a <code>tracking_url_template</code>, <code>final_urls</code>, or <code>mobile_final_urls</code>.',
            _type: 'array',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
