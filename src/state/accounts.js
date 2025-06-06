import { getGroupById, getGroups, getGroup } from "./groups";

const users = [
    {
        login: 'user1',
        password: "1111",
        // name: '',
        groups: ['group1', 'group2', 'group3', 'group5']
    },
    {
        login: 'user2',
        password: "2222",
        // name: '',
        groups: ['group1', 'group2', 'group3']
    },
    {
        login: 'user3',
        password: "3333",
        // name: '',
        groups: ['group1', 'group2', 'group3', 'group4']
    },
    {
        login: 'user4',
        password: "4444",
        // name: '',
        groups: ['group2', 'group4', 'group5']
    },
    {
        login: 'user5',
        password: "5555",
        // name: '',
        groups: ['group3', 'group4', 'group5']
    },
];

export function getUsers() {
    return users;
}

export function getUser(login) {
    const user = {...users.find(item => item.login === login)};
    user.groups = user.groups.map(getGroup);  
    return user;
}

export function createUser(login, password) {
    users.push({
        login: login,
        password: password,
        groups: []
    });
    return getUser(login);
}

export function addUserGroup(login, groupName){
    const user = users.find(item => item.login === login);
    user.groups.push(groupName);
}

export function deleteUserGroup(login, groupName) {
    console.log(login, groupName)
    const user = users.find(item => item.login === login);
    user.groups = user.groups.filter(name => name !== groupName);
    console.log(user);
}