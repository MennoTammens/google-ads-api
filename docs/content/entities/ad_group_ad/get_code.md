---
title: Get AdGroupAd
order: 2.1
type: get_code
entity: AdGroupAd
---

```javascript
// Getting the entity
let result = await customer.adGroupAds.get('customers/9262111890/adGroupAds/63236814369~303721890851')
```

```javascript
// Example result
;({
  resource_name: 'customers/9262111890/adGroupAds/63236814369~303721890851',
  ad: {
    added_by_google_ads: false,
    display_url: '',
    expanded_text_ad: {
      description: 'my description here2',
      headline_part_1: 'headline part 1 here2',
      headline_part_2: 'headline part 2 here2',
      path_1: 'path one here2',
      path_2: 'path two here2',
    },
    final_app_urls: [],
    final_mobile_urls: [],
    final_urls: [{ value: 'http://opteo.com' }],
    id: 303721890851,
    type: 3,
    url_collections: [],
    url_custom_parameters: [],
  },
  ad_group: 'customers/9262111890/adGroups/63236814369',
  status: 2,
})
```
