import { addUserGroup, deleteUserGroup, getUser, getUsers } from "./accounts";

const groups = [
    {
        name: 'group1',
        owner: 'user1',
        senderToRecipient: new Map(),
        recipientToSender: new Map(),
    },
    {
        name: 'group2',
        owner: 'user2',
        senderToRecipient: new Map(),
        recipientToSender: new Map(),
    },
    {
        name: 'group3',
        owner: 'user3',
        senderToRecipient: new Map(),
        recipientToSender: new Map(),
    },
    {
        name: 'group4',
        owner: 'user4',
        senderToRecipient: new Map(),
        recipientToSender: new Map(),
    },
    {
        name: 'group5',
        owner: 'user5',
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