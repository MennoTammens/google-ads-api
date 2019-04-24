---
title: Update CustomerClientLink
order: 5
type: update
entity: CustomerClientLink
---

This section describes how to update a CustomerClientLink.

```javascript
// Updating the entity

const customer_client_link = {
    resource_name: 'customers/1234567890/customerClientLinks/123123123', // The resource_name is required
    // ...any other fields that you would like to update
}

const results = await customer.customerClientLinks.update(customer_client_link)

console.log(results) // ['customers/1234567890/customerClientLinks/123123123']
```