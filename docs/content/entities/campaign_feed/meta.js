module.exports = {
    name: 'CampaignFeed',
    object: {
        campaign: { _description: 'The campaign to which the CampaignFeed belongs.', _type: 'string' },
        feed: { _description: 'The feed to which the CampaignFeed belongs.', _type: 'string' },
        matching_function: {
            function_string: {
                _description:
                    'String representation of the Function. Examples: 1) IDENTITY(true) or IDENTITY(false). All or none feed items serve. 2) EQUALS(CONTEXT.DEVICE,"Mobile") 3) IN(FEED_ITEM_ID,{1000001,1000002,1000003}) 4) CONTAINS_ANY(FeedAttribute[12345678,0],{"Mars cruise","Venus cruise"}) 5) AND(IN(FEED_ITEM_ID,{10001,10002}),EQUALS(CONTEXT.DEVICE,"Mobile")) See https: //developers.google.com/adwords/api/docs/guides/feed-matching-functions Note that because multiple strings may represent the same underlying function (whitespace and single versus double quotation marks, for example), the value returned may not be identical to the string sent in a mutate request.',
                _type: 'string',
            },
            left_operands: {
                _description:
                    'The operands on the left hand side of the equation. This is also the operand to be used for single operand expressions such as NOT.',
                _type: 'array',
            },
            operator: {
                _description: 'Operator for a function.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'IN', description: 'The IN operator.' },
                    { s: 'IDENTITY', description: 'The IDENTITY operator.' },
                    { s: 'EQUALS', description: 'The EQUALS operator' },
                    {
                        s: 'AND',
                        description:
                            'Operator that takes two or more operands that are of type\nFunctionOperand and checks that all the operands evaluate to true.\nFor functions related to ad formats, all the operands must be in\nleft_operands.',
                    },
                    {
                        s: 'CONTAINS_ANY',
                        description:
                            'Operator that returns true if the elements in left_operands contain any\nof the elements in right_operands. Otherwise, return false. The\nright_operands must contain at least 1 and no more than 3\nConstantOperands.',
                    },
                ],
                _type: 'enum',
            },
            right_operands: { _description: 'The operands on the right hand side of the equation.', _type: 'array' },
        },
        placeholder_types: {
            _description:
                'Indicates which placeholder types the feed may populate under the connected campaign. Required.',
            _type: 'array',
        },
        resource_name: {
            _description:
                'The resource name of the campaign feed. Campaign feed resource names have the form: `customers/{customer_id}/campaignFeeds/{campaign_id}~{feed_id}',
            _type: 'string',
        },
        status: {
            _description: 'Status of the campaign feed. This field is read-only.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Feed link is enabled.' },
                { s: 'REMOVED', description: 'Feed link has been removed.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
