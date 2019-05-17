module.exports = {
    name: 'CustomerExtensionSetting',
    object: {
        extension_feed_items: {
            _type: 'array',
            _description:
                'The resource names of the extension feed items to serve under the customer. ExtensionFeedItem resource names have the form: <code>customers/{customer_id}/extensionFeedItems/{feed_item_id}</code>',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the customer extension setting. CustomerExtensionSetting resource names have the form: <code>customers/{customer_id}/customerExtensionSettings/{extension_type}</code>',
        },
        extension_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'NONE', description: 'None.' },
                { s: 'APP', description: 'App.' },
                { s: 'CALL', description: 'Call.' },
                { s: 'CALLOUT', description: 'Callout.' },
                { s: 'MESSAGE', description: 'Message.' },
                { s: 'PRICE', description: 'Price.' },
                { s: 'PROMOTION', description: 'Promotion.' },
                { s: 'REVIEW', description: 'Review.' },
                { s: 'SITELINK', description: 'Sitelink.' },
                { s: 'STRUCTURED_SNIPPET', description: 'Structured snippet.' },
                { s: 'LOCATION', description: 'Location.' },
                { s: 'AFFILIATE_LOCATION', description: 'Affiliate location.' },
            ],
            _description: 'The extension type of the customer extension setting.',
        },
        device: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                {
                    s: 'MOBILE',
                    description: 'Mobile. The extensions in the extension setting will only serve on\nmobile devices.',
                },
                {
                    s: 'DESKTOP',
                    description:
                        'Desktop. The extensions in the extension setting will only serve on\ndesktop devices.',
                },
            ],
            _description: 'The device for which the extensions will serve. Optional.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
