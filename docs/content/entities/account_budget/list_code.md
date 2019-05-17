---
type: list_code
entity: AccountBudget
title: List AccountBudget
order: 3.1
---

```javascript
// Listing all the accountBudgets in the account
let result = await customer.accountBudgets.list()

// Listing with constraints, sorting, and a limited number of results
let result = await customer.accountBudgets.list({
  constraints: [
    {
      key: 'account_budget.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
  order_by: 'account_budget.some_field.sub_field',
})
```

```javascript
// Example result
;[
  {
    account_budget: {
      resource_name: 'customers/3827277046/accountBudgets/295854560',
      adjusted_spending_limit_type: 2,
      amount_served_micros: 100064050000,
      approved_end_time_type: 3,
      approved_spending_limit_type: 2,
      approved_start_date_time: '2017-01-01 12:22:14',
      billing_setup: 'customers/3827277046/billingSetups/295854200',
      id: 295854560,
      name: '',
      proposed_end_time_type: 3,
      proposed_spending_limit_type: 2,
      proposed_start_date_time: '2017-01-01 12:22:14',
      status: 3,
      total_adjustments_micros: 851000000,
    },
    billing_setup: {
      resource_name: 'customers/3827277046/billingSetups/295854200',
      end_time_type: 3,
      id: 295854200,
      payments_account: 'customers/3827277046/paymentsAccounts/2445-9502-2490-5474',
      payments_account_info: {
        payments_account_id: '2445-9502-2490-5474',
        payments_account_name: 'AdWords 382-727-7046',
        payments_profile_id: '4466-6664-9412',
        payments_profile_name: 'Opteo LTD',
      },
      start_date_time: '2017-01-01 12:22:14',
      status: 4,
    },
    customer: {
      resource_name: 'customers/3827277046',
      auto_tagging_enabled: true,
      call_reporting_setting: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_enabled: true,
      },
      conversion_tracking_setting: { conversion_tracking_id: 875176189 },
      currency_code: 'GBP',
      descriptive_name: 'My customer',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      pay_per_conversion_eligibility_failure_reasons: [5],
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```
