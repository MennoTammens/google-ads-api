module.exports = {
    name: 'DomainCategory',
    object: {
        recommended_cpc_bid_micros: {
            _type: 'int64',
            _description: 'The recommended cost per click for the category.',
        },
        campaign: { _type: 'string', _description: 'The campaign this category is recommended for.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the domain category. Domain category resource names have the form: <code>customers/{customer_id}/domainCategories/{campaign_id}~{category_base64}~{language_code}</code>',
        },
        category_rank: {
            _type: 'int64',
            _description:
                'The position of this category in the set of categories. Lower numbers indicate a better match for the domain. null indicates not recommended.',
        },
        coverage_fraction: {
            _type: 'double',
            _description: 'Fraction of pages on your site that this category matches.',
        },
        language_code: {
            _type: 'string',
            _description:
                'The language code specifying the language of the website. e.g. "en" for English. The language can be specified in the DynamicSearchAdsSetting required for dynamic search ads. This is the language of the pages from your website that you want Google Ads to find, create ads for, and match searches with.',
        },
        has_children: { _type: 'boolean', _description: 'Indicates whether this category has sub-categories.' },
        domain: {
            _type: 'string',
            _description:
                'The domain for the website. The domain can be specified in the DynamicSearchAdsSetting required for dynamic search ads.',
        },
        category: {
            _type: 'string',
            _description:
                'Recommended category for the website domain. e.g. if you have a website about electronics, the categories could be "cameras", "televisions", etc.',
        },
    },
    methods: ['get', 'list'],
}
