# Services

Services contain the core business logic of the application. They are independent of the web/HTTP layer and communicate directly with database models.

## Standard Service Template

```javascript
import Item from '../models/itemModel.js';

export const findItemById = async (id) => {
  return await Item.findById(id);
};

export const createItem = async (data) => {
  return await Item.create(data);
};
```
