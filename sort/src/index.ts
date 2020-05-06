import { Sorter } from './Sorter';
import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumberCollection([10, 3, -5, 0]);

const charactersCollection = new CharactersCollection('XadcgTYSsda');

// const sorter = new Sorter(numberCollection);

// sorter.sort();

// console.log(numberCollection.data);

const sorter = new Sorter(charactersCollection);

sorter.sort();

console.log(charactersCollection.data);
