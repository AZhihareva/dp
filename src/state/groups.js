import { addUserGroup, deleteUserGroup, getUser, getUsers } from "./accounts";

const groups = [
    {
        name: 'День рождения',
        owner: 'ЖихареваА',
        senderToRecipient: new Map(),
        recipientToSender: new Map(),
    },
    {
        name: 'Новый год',
        owner: 'ПилипчукЕ',
        senderToRecipient: new Map([
            ["ПилипчукЕ", 'ЖихареваА'],
            ["ЗайцевД", 'ПилипчукЕ'],
            ["РомановичА", 'ЗайцевД'],
            ['ЖихареваА', 'КазакК'],
            ['КазакК', 'РомановичА']
            ]),
        recipientToSender: new Map([
            ["ЖихареваА", 'ПилипчукЕ'],
            ["ПилипчукЕ", 'ЗайцевД'],
            ["ЗайцевД", 'РомановичА'],
            ['КазакК', 'ЖихареваА'],
            ['РомановичА', 'КазакК']
            ]),
    },
    {
        name: '23 февраля',
        owner: 'ЗайцевД',
        senderToRecipient: new Map(),
        recipientToSender: new Map(),
    },
    {
        name: 'Выпускной',
        owner: 'КазакК',
        senderToRecipient: new Map(),
        recipientToSender: new Map(),
    },
    {
        name: 'День знаний',
        owner: 'РомановичА',
        senderToRecipient: new Map(),
        recipientToSender: new Map(),
    }
];

export function getGroups() {
    return groups;
}

export function getGroup(groupName) {
    return groups.find(group => group.name === groupName);
}

export function getGroupUsers(groupName) {
    const users = getUsers();
    console.log('users', users, groupName);
    return users.filter(user => user.groups.includes(groupName))
}

export function addUser(groupName, login) {
    addUserGroup(login, groupName)
    return getGroupUsers(groupName);
}

export function deleteUser(groupName, login) {
    deleteUserGroup(login, groupName);
    return getGroupUsers(groupName);
}

export function createGroup(groupName, login) {
    groups.push({
        name: groupName,
        owner: login,
        senderToRecipient: new Map(),
        recipientToSender: new Map()
    });
    return getGroup(groupName);
}