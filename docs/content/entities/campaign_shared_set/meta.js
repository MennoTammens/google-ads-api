module.exports = {
    name: 'CampaignSharedSet',
    object: {
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'The campaign shared set is enabled.' },
                { s: 'REMOVED', description: 'The campaign shared set is removed and can no longer be used.' },
            ],
            _description: 'The status of this campaign shared set. Read only.',
        },
        campaign: { _type: 'string', _description: 'The campaign to which the campaign shared set belongs.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the campaign shared set. Campaign shared set resource names have the form: <code>customers/{customer_id}/campaignSharedSets/{campaign_id}~{shared_set_id}</code>',
        },
        shared_set: {
            _type: 'string',
            _description:
                'The shared set associated with the campaign. This may be a negative keyword shared set of another customer. This customer should be a manager of the other customer, otherwise the campaign shared set will exist but have no serving effect. Only negative keyword shared sets can be associated with Shopping campaigns. Only negative placement shared sets can be associated with Display mobile app campaigns.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
