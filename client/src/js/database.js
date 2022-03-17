import { request } from 'express';
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('ready to PUT')
const initDB = await openDB('jate', 1);
const text = jateDB.transaction('jate', 'readwrite');
const memory = tx.objectStore('jate');
const update = store.put({id:1, value: content});
const newtxt = await request; 
console.log('data saved', result.value);
};
//console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('ready to GET')
  const initDB = await openDB('jate', 1);
const text = jateDB.transaction('jate', 'readonly');
const memory = tx.objectStore('jate');
const getreq = store.get(1);
const newtxt = await request; 
result ? console.log ('data pulled from database', result.value) : console.log('no data found in the database')
}
//console.error('getDb not implemented');

initdb();
