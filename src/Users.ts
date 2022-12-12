interface User {
  id: number,
  firstname: string,
  surname: string,
  age: number,
}

export abstract class Users<T extends User> {
  userList: T[] = [];

  add(userInfo: T): void {
    this.userList.push(userInfo);
  }

  remove(id: number): boolean {
    const isUserInArray = this.userList.find(item => item.id === id);
    if (isUserInArray) {
      const findIndexOfUser: number = this.userList.findIndex(item => item.id === id);
      this.userList.splice(findIndexOfUser, 1);
      
      return true;
    }

    return false;
  }
  
  get(id: number): T | null {
    const userData = this.userList.find(item => item.id === id);

    return userData ? userData : null;
  }

  sorted(sortType: 'increase' | 'decrease' = 'increase'): T[] {
    return sortType === 'increase' ? this.userList.sort((a, b) => a.id - b.id) :
    this.userList.sort((a, b) => b.id - a.id)
  }
}
