"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    userList = [];
    add(userInfo) {
        this.userList.push(userInfo);
    }
    remove(id) {
        const isUserInArray = this.userList.find(item => item.id === id);
        if (isUserInArray) {
            const findIndexOfUser = this.userList.findIndex(item => item.id === id);
            this.userList.splice(findIndexOfUser, 1);
            return true;
        }
        return false;
    }
    get(id) {
        const userData = this.userList.find(item => item.id === id);
        return userData ? userData : null;
    }
    sorted(sortType = 'increase') {
        return sortType === 'increase' ? this.userList.sort((a, b) => a.id - b.id) :
            this.userList.sort((a, b) => b.id - a.id);
    }
}
exports.Users = Users;
