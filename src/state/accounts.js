import { getGroupById, getGroups, getGroup } from "./groups";

const users = [
    {
        login: 'ЖихареваА',
        password: "1111",
        // name: '',
        groups: ['День рождения', 'Новый год', 'Выпускной', 'День знаний']
    },
    {
        login: 'ПилипчукЕ',
        password: "2222",
        // name: '',
        groups: ['День рождения', 'Новый год', 'Выпускной']
    },
    {
        login: 'ЗайцевД',
        password: "3333",
        // name: '',
        groups: ['День рождения', 'Новый год', '23 февраля', 'Выпускной']
    },
    {
        login: 'КазакК',
        password: "4444",
        // name: '',
        groups: ['Новый год', '23 февраля', 'Выпускной', "День знаний"]
    },
    {
        login: 'РомановичА',
        password: "5555",
        // name: '',
        groups: ['Новый год', '23 февраля', "Выпускной", 'День знаний']
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