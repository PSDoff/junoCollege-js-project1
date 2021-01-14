const app = {};

// I recommend collapsing this object
// No really. You just like... keep scrolling...
// For quite some time.
// Do I even need all of this initialized right at the start? I dunno.
app.character = {
    abilities: {
        str: {
            score: 10,
            mod: 0,
            temp: 0
        },
        dex: {
            score: 10,
            mod: 0,
            temp: 0
        },
        con: {
            score: 10,
            mod: 0,
            temp: 0
        },
        int: {
            score: 10,
            mod: 0,
            temp: 0
        },
        wis: {
            score: 10,
            mod: 0,
            temp: 0
        },
        cha: {
            score: 10,
            mod: 0,
            temp: 0
        }
    },
    skills: {
        "acrobatics": {
            displayName: 'Acrobatics',
            modStat: 'dex',
            isClassSkill: false
        }, 
        "appraise": {
            displayName: 'Appraise',
            modStat: 'int',
            isClassSkill: false
        },
        "bluff": {
            displayName: 'Bluff',
            modStat: 'cha',
            isClassSkill: false
        }, 
        "climb": {
            displayName: 'Climb',
            modStat: 'str',
            isClassSkill: false
        }, 
        "craft": {
            displayName: 'Craft',
            modStat: 'int',
            isClassSkill: false
        }, 
        "diplomacy": {
            displayName: 'Diplomacy',
            modStat: 'cha',
            isClassSkill: false
        }, 
        "disable_device": {
            displayName: 'Disable Device',
            modStat: 'dex',
            isClassSkill: false
        }, 
        // Don't say I didn't warn you
        "disguise": {
            displayName: 'Disguise',
            modStat: 'cha',
            isClassSkill: false
        }, 
        "escape_artist": {
            displayName: 'Escape Artist',
            modStat: 'dex',
            isClassSkill: false
        }, 
        "fly": {
            displayName: 'Fly',
            modStat: 'dex',
            isClassSkill: false
        }, 
        "handle_animal": {
            displayName: 'Handle Animal',
            modStat: 'cha',
            isClassSkill: false
        }, 
        "heal": {
            displayName: 'Heal',
            modStat: 'wis',
            isClassSkill: false
        }, 
        "intimidate": {
            displayName: 'Intimidate',
            modStat: 'cha',
            isClassSkill: false
        }, 
        "knowledge_tech": {
            displayName: 'Knowledge (Tech)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "knowledge_dungeoneering": {
            displayName: 'Knowledge (Dungeoneering)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "knowledge_engineering": {
            displayName: 'Knowledge (Engineering)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "knowledge_geography": {
            displayName: 'Knowledge (Geography)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "knowledge_history": {
            displayName: 'Knowledge (History)',
            modStat: 'int',
            isClassSkill: false
        }, 
        // At least you're almost there by now...
        "knowledge_local": {
            displayName: 'Knowledge (Local)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "knowledge_nature": {
            displayName: 'Knowledge (Nature)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "knowledge_nobility": {
            displayName: 'Knowledge (Nobility)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "knowledge_planes": {
            displayName: 'Knowledge (Planes)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "knowledge_religion": {
            displayName: 'Knowledge (Religion)',
            modStat: 'int',
            isClassSkill: false
        }, 
        "linguistics": {
            displayName: 'Linguistics',
            modStat: 'int',
            isClassSkill: false
        }, 
        "perception": {
            displayName: 'Perception',
            modStat: 'wis',
            isClassSkill: false
        }, 
        "perform": {
            displayName: 'Perform',
            modStat: 'cha',
            isClassSkill: false
        }, 
        "profression": {
            displayName: 'Profression',
            modStat: 'wis',
            isClassSkill: false
        }, 
        "ride": {
            displayName: 'Ride',
            modStat: 'dex',
            isClassSkill: false
        }, 
        // Just a bit more... I hope your scrolling finger is okay
        "sense_motive": {
            displayName: 'Sense Motive',
            modStat: 'cha',
            isClassSkill: false
        }, 
        "sleight_of_hand": {
            displayName: 'Sleight of Hand',
            modStat: 'dex',
            isClassSkill: false
        }, 
        "techcraft": {
            displayName: 'Techcraft',
            modStat: 'int',
            isClassSkill: false
        }, 
        "stealth": {
            displayName: 'Stealth',
            modStat: 'dex',
            isClassSkill: false
        }, 
        "survival": {
            displayName: 'Survival',
            modStat: 'wis',
            isClassSkill: false
        }, 
        "swim": {
            displayName: 'Swim',
            modStat: 'str',
            isClassSkill: false
        }, 
        "use_tech_device": {
            displayName: 'Use Tech Device',
            modStat: 'cha',
            isClassSkill: false
        }
        // Sorry you had to scroll through all that. Here's a cute cat.
        // _._     _,-'""`-._
        // (,-.`._,'(       |\`-/|
        //     `-.-' \ )-`( , o o)
        //           `-    \`_`"'-
    }
}

app.getSkillList = () => {
    return Object.keys(app.character.skills);
}

app.calculateAbilityModifiers = () => {
    // Ability Modifer value calculation
    const abilities = app.character.abilities;
    for (const ability in abilities) {
        const abilityScore = app.character.abilities[ability].score || 10; // Default to 10 if no value
        const abilityTemp = app.character.abilities[ability].temp || 0; // Default to 0 if no value
        const abilityModValue = Math.floor((((abilityScore + abilityTemp) - 10) / 2));
        const abilityModInput = $(`.ability-mod-input[data-ability-name='${ability}']`);

        app.character.abilities[ability].mod = abilityModValue;
        abilityModInput.val(abilityModValue);
    }
}

app.displaySkillModifierValues = () => {
    // store existing ability keys as an array
    // Do this outside of a function
    const abilityTypes = Object.keys(app.character.abilities);

    abilityTypes.forEach((type) => {
        const $skillsWithType = $(`#skills input[data-ability-mod="${type}"]`);

        $.each($skillsWithType, (k, skillEl) => {
            $(skillEl).val(app.character.abilities[type].mod);
        })
    });
}

app.setClassSkills = (classSkillId, isChecked) => {
    if (isChecked) {
        app.character.skills[classSkillId].isClassSkill = true;
    } else {
        app.character.skills[classSkillId].isClassSkill = false;
    }
}

// TODO: Recreate the entirety of React inside this project so I can haz state management
// I dream of ~~genie~~ data binding
app.setCharacterState = () => {
    // TODO: Some way to cleanup/specify what gets stored in the array? Performance concerns :|
    // Filter. Map.
    // Should create this outside of this function just once (Update if skills added)
    const inputDataSources = $('input[data-state-map]').toArray();

    // Stores value of any input with `data-state-map` attr/val in app.character object
    inputDataSources.forEach((dataSource) => {
        app.parsePath(app, dataSource.dataset.stateMap, parseInt(dataSource.value));
    });
}

app.calculateSkillTotals = (skillId) => {
    const $skillTotalInput = $(`input#skill-${skillId}-total`);
    const abilityModifierType = app.character.skills[skillId].modStat;
    let skillTotal = (app.character.abilities[abilityModifierType].mod || 0) + 
                        (app.character.skills[skillId].ranks || 0) +
                        (app.character.skills[skillId].misc || 0) +
                        (app.character.skills[skillId].temp || 0);

    // Class skills add 3 to total so long as there's at least 1 rank in the same skill
    if (app.character.skills[skillId].isClassSkill && app.character.skills[skillId].ranks > 0) {
        skillTotal += 3;
    }
    $skillTotalInput.val(skillTotal);
}

// Generate Skills List
// TODO:    Create functionality for "Craft", "Perform", "Profession" skills. 
//          Items must take unique name. Must be able to add new items for new uniques of category.
// TODO:    I think there's a better way to do this template. Help?
app.createSkillItem = (skillObj) => {
    const skillContainer = $('#skills > div');
    let skillId = skillObj.displayName.replace(/\s+/g, '_').replace(/[{()}]/g, '').toLowerCase();
    let skillItemTemplate = `<div class="col-span-2 text-left">
    <input type="checkbox" data-class-skill="${skillId}" name="skill-${skillId}" />
    <label for="skill-${skillId}" data-roll-it="skill" data-skill-id="${skillId}">${skillObj.displayName}</label>
    </div>
    <div class="col-span-1 text-center">
    <label for="skill-${skillId}-total" class="sr-only"></label>
    <input id="skill-${skillId}-total" type="text" class="border py-2 px-3 text-grey-darkest" disabled>
    </div>
    <div class="col-span-1 text-center">
    <span>=</span>
    </div>
    <div class="col-span-1 text-center">
    <label for="skill-${skillId}-ability" class="sr-only"></label>
    <input id="skill-${skillId}-ability" data-ability-mod="${skillObj.modStat}" data-state-map="character.skills.${skillId}.abilityMod" type="text" class="border py-2 px-3 text-grey-darkest" disabled>
    </div>
    <div class="col-span-1 text-center">
    <span>+</span>
    </div>
    <div class="col-span-1 text-center">
    <label for="skill-${skillId}-ranks" class="sr-only"></label>
    <input id="skill-${skillId}-ranks" type="text" data-state-map="character.skills.${skillId}.ranks" class="border py-2 px-3 text-grey-darkest">
    </div>
    <div class="col-span-1 text-center">
    <span>+</span>
    </div>
    <div class="col-span-1 text-center">
    <label for="skill-${skillId}-misc" class="sr-only"></label>
    <input id="skill-${skillId}-misc" type="text" data-state-map="character.skills.${skillId}.misc" class="border py-2 px-3 text-grey-darkest">
    </div>
    <div class="col-span-1 text-center">
    <span>+</span>
    </div>
    <div class="col-span-1 text-center">
    <label for="skill-${skillId}-temp" class="sr-only"></label>
    <input id="skill-${skillId}-temp" type="text" data-state-map="character.skills.${skillId}.temp" class="border py-2 px-3 text-grey-darkest">
    </div>`;
    
    skillContainer.append(skillItemTemplate);
}

// Borrowed to translate data attr strings to usable object paths
// https://codepen.io/cferdinandi/pen/zyOKqE?editors=1111
// * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
app.parsePath = (obj, path, val) => {

    /**
     * If the path is a string, convert it to an array
     * @param  {String|Array} path The path
     * @return {Array}             The path array
     */
    let stringToPath = function (path) {

        // If the path isn't a string, return it
        if (typeof path !== 'string') return path;

        // Create new array
        let output = [];

        // Split to an array with dot notation
        path.split('.').forEach(function (item, index) {

            // Split to an array with bracket notation
            item.split(/\[([^}]+)\]/g).forEach(function (key) {

                // Push to the new array
                if (key.length > 0) {
                    output.push(key);
                }
            });
        });
        return output;
    };

    // Convert the path to an array if not already
    path = stringToPath(path);

    // Cache the path length and current spot in the object
    let length = path.length;
    let current = obj;

    // Loop through the path
    path.forEach(function (key, index) {

        // Check if the assigned key shoul be an array
        let isArray = key.slice(-2) === '[]';

        // If so, get the true key name by removing the trailing []
        key = isArray ? key.slice(0, -2) : key;

        // If the key should be an array and isn't, create an array
        if (isArray && Object.prototype.toString.call(current[key]) !== '[object Array]') {
            current[key] = [];
        }

        // If this is the last item in the loop, assign the value
        if (index === length -1) {

            // If it's an array, push the value
            // Otherwise, assign it
            if (isArray) {
                current[key].push(val);
            } else {
                current[key] = val;
            }
        }

        // Otherwise, update the current place in the object
        else {

            // If the key doesn't exist, create it
            if (!current[key]) {
                current[key] = {};
            }

            // Update the current place in the object
            current = current[key];
        }
    });
}

app.rollIt = (item) => {
    const $item = $(item);
    if ($item.data('roll-it') === 'skill') {
        const skillId = $item.data('skill-id');
        const abilityModifierType = app.character.skills[skillId].modStat;
        const diceRollModal = $('#dice-roll-modal');

        // Variables to store values to be added
        const abilityMod = app.character.abilities[abilityModifierType].mod || 0;
        const ranksMod = app.character.skills[skillId].ranks || 0;
        const miscMod = app.character.skills[skillId].misc || 0;
        const tempMod = app.character.skills[skillId].temp || 0;
        const classSkillMod = app.character.skills[skillId].isClassSkill ? 3 : 0;
        const dieRoll = app.superRandomizer2ElectricBoogaloo(1, 20);
        const total = abilityMod + ranksMod + miscMod + tempMod + classSkillMod + dieRoll;

        // UI updates
        diceRollModal.find('h2[data-property-rolled]').html(app.character.skills[skillId].displayName);
        console.log({dieRoll});
        console.log({total});

        modal.el.style.display = "block";
    } else if ($item.data('roll-it') === 'ability') {
        console.log('is ability');
    }
    console.log($item);
}

app.superRandomizer2ElectricBoogaloo = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min) + min);
}


const modal = {
    el: document.getElementById("dice-roll-modal")
}

app.init = () => {
    // Populates skills list based on app.character.skills on pageload
    // TODO: Is passing the values through as an array less performant than a for loop on the object?
    Object.values(app.character.skills).forEach(skillObj => {
        app.createSkillItem(skillObj);
    });

    // Events
    // TODO: Can we listen for changes in the `character` object variable instead of input events?
    //       Proxies? Promises? Thoughts and Prayers?
    $(document).on('input', 'input[data-state-map]', (e) => {
        app.setCharacterState();
        app.calculateAbilityModifiers();
        app.displaySkillModifierValues();
        app.getSkillList().forEach((skill) => {
            app.calculateSkillTotals(skill);
        })
    });

    $(document).on('change', 'input[data-class-skill]', (e) => {
        let isChecked = e.currentTarget.checked;
        let classSkillToSet = e.currentTarget.dataset.classSkill;

        app.setClassSkills(classSkillToSet, isChecked);
        app.calculateSkillTotals(classSkillToSet);
    });

    $(document).on('click', '[data-roll-it]', (e) => {
        app.rollIt(e.currentTarget);
    });

    $(document).on('click', '.close', () => {
        modal.el.style.display = "none";
    })
}

$(function(){
    app.init();
});