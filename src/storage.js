class Storage {
  constructor(){
    this.STORAGE = localStorage
  }
  getItem (name){
    return this.STORAGE.getItem(name)
  }
  setItem (name, item){
    this.STORAGE.setItem(name, item)
  }
}

export default Storage
