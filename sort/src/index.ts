import { Sorter } from './Sorter';
import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 0]);
numberCollection.sort();

console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('XadcgTYSsda');
charactersCollection.sort();

console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

linkedList.print();
