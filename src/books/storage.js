import { Storage } from 'orchestra';
import Model from './model';
import Collection from './collection';

var BooksStorage = Storage.extend({
  model: Model,
  collection: Collection
});

export default new BooksStorage();
