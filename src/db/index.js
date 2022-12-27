import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('items.db');

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, done INTEGER NOT NULL, imageurl TEXT NOT NULL)', 
                [], 
                () => { resolve() }, 
                (_, err) => { reject(err) });
        });
    });

    return promise;
}

export const insertItem = (value, done, imageurl) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO items (value, done, imageurl) VALUES (?, ?, ?);', 
                [value, done, imageurl], 
                (_, result) => resolve(result), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const checkItem = (id) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE items SET done = (CASE WHEN done = 1 THEN 0 ELSE 1 END) WHERE id = ?;', 
                [id], 
                () => resolve(), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const editItem = (id, value, imageurl) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE items set value = ?, imageurl = ? WHERE id = ?;', 
                [value, imageurl, id], 
                () => resolve(), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const deleteItem = (id) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM items WHERE id = ?;', 
                [id], 
                () => resolve(), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const fetchItem = (value, done, imageurl) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM items;', 
                [], 
                (_, result) => resolve(result), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}