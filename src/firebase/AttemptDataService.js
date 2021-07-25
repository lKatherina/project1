import firebase from "./firebase";

const db = firebase.ref("/attempts");

class AttemptDataService {
  getAll() {
    return db;
  }

  create(attempt) {
    return db.push(attempt);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new AttemptDataService();