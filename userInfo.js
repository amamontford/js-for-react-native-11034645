const { test, modifiedNames } = require('./arrayManipulation');

function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must be of the same length.");
    }
    const profiles = [];
    for (let i = 0; i < originalNames.length; i++) {
        profiles.push({
            id: i + 1,
            originalName: originalNames[i],
            modifiedName: modifiedNames[i]
        });
    }
    return profiles;
}

// Example usage
const profiles = createUserProfiles(test, modifiedNames);
console.log(profiles);

module.exports = {
    createUserProfiles
};
