export class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.size = 0;
    this.buckets = Array.from({ length: capacity }, () => []);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Update value if key exists
        return;
      }
    }

    bucket.push([key, value]); // Add new key-value pair
    this.size++;

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  resize() {
    this.capacity *= 2;
    const oldBuckets = this.buckets;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  get(key){
    const index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1] = value; // Update value if key exists
      }
    }
    return null;
  }

  has(key){
    const index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  remove(key){
    const index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // Remove the key-value pair
        this.size--;
        return true // Key was found and removed
      }
    }
    return false;
  }

  length(){
    return this.size;
  }

  clear(){
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;
  }

  keys(){
    const keysArray = [];
    for (const bucket of this.buckets) {
        for(const [key] of bucket) {
            keysArray.push(key);
        }
    }
    return keysArray;
  }

  values(){
    const valuesArray = [];
    for (const bucket of this.buckets) {
        for(const [, value] of bucket) {
            valuesArray.push(value);
        }
    }
    return valuesArray;
  }

  entries(){
    const entriesArray = [];
    for (const bucket of this.buckets) {
        for(const [key, value] of bucket) {
            entriesArray.push([key, value]);
        }
    }
    return entriesArray;
}
}
