# Models

Models define the schemas and structures of database collections using Mongoose.

## Standard Model Template

```javascript
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'An item must have a name'],
      unique: true,
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'An item must have a price']
    }
  },
  {
    timestamps: true
  }
);

const Item = mongoose.model('Item', itemSchema);

export default Item;
```
