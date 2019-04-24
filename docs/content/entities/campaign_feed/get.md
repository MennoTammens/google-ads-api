---
title: Get CampaignFeed
order: 2
type: get
entity: CampaignFeed
---

The `customer.campaignFeeds.get()` method returns all fields for one CampaignFeed, as well as all other entities related to it. Note that this function is heavily rate-limited by Google, so avoid using it in production.

```javascript
// Getting the entity
let result = await customer.campaignFeeds.get('customers/9262111890/campaignFeeds/1483704368~77425432')

// Here's what the result might look like
result ===
    {
        resource_name: 'customers/9262111890/campaignFeeds/1483704368~77425432',
        campaign: 'customers/9262111890/campaigns/1483704368',
        feed: 'customers/9262111890/feeds/77425432',
        matching_function: {
            function_string: 'IN(FEED_ITEM_ID,{51842673272,51842611747,51842613103,51844472313})',
            left_operands: [{ requestContextOperand: { contextType: 2 } }],
            operator: 2,
            right_operands: [
                { constantOperand: { longValue: { value: 51842673272 } } },
                { constantOperand: { longValue: { value: 51842611747 } } },
                { constantOperand: { longValue: { value: 51842613103 } } },
                { constantOperand: { longValue: { value: 51844472313 } } },
            ],
        },
        placeholder_types: [7],
        status: 2,
    }
```