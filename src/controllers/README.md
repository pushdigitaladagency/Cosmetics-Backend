# Controllers

Controllers handle incoming HTTP requests, validate input data, pass the requests to services for processing, and return appropriate HTTP responses to the client.

## Standard Controller Template

```javascript
import asyncHandler from '../utils/asyncHandler.js'; // Optional helper to avoid try-catch blocks
import * as itemService from '../services/itemService.js';

export const getItem = async (req, res, next) => {
  try {
    const item = await itemService.findItemById(req.params.id);
    if (!item) {
      return res.status(404).json({ status: 'fail', message: 'Item not found' });
    }
    res.status(200).json({ status: 'success', data: { item } });
  } catch (error) {
    next(error);
  }
};
```
