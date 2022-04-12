var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var allStats = [];
var CustomItem = /** @class */ (function () {
    //constructor
    function CustomItem(name, stats, maxStackSize, type) {
        this.name = name;
        this.stats = stats;
        this.maxStackSize = maxStackSize;
        this.type = type;
    }
    CustomItem.generateRandomItem = function () {
        var name = "customItem";
        var stats = [];
        var maxStackSize = 10;
        //generate random number based on how many customItemTypes there are
        var typeID = Math.floor(Math.random() * CustomItemTypes.getAllTypes().length);
        //get the type
        var type = CustomItemTypes.getAllTypes()[typeID];
        //generate a random number from 1 to 100
        var randomRarity = Math.floor(Math.random() * 10) + 1;
        for (var i = 0; i < Stats.getStatWithType(type).length; i++) {
            if (Stats.getStatWithType(type)[i].rarity < randomRarity) {
                stats.push(this.getStatwithType(type, 10, i));
            }
            randomRarity = Math.floor(Math.random() * 10) + 1;
            /*if(i + 1 == Stats.getStatWithType(type).length && stats.length <= 2) {
                console.log("Generated item with less than 3 stats, generating more stats");
                var newstat = this.getRandomStatwithType(type, 10);
                //todo make this work
                //if stats already contains stats[i].stat then generate a new stat
                for(let i2 = 0; i2 < stats.length; i2++) {
                    if(stats[i2].stat == newstat.stat) {
                        console.log("duplicate stat: " + stats[i2].stat.toString() + newstat.stat.toString());
                        newstat = this.getRandomStatwithType(type, 10);
                        i2 = 0;
                    }
                }
                stats.push(newstat);
                i--;
            }*/
        }
        if (stats.length <= 2) {
            console.log("Generated item with minimal stats, generating stats");
            return this.generateRandomItem();
        }
        return new CustomItem(name, stats, maxStackSize, type);
    };
    CustomItem.getRandomStatwithType = function (type, chanceofSpecial) {
        return this.getStatwithType(type, chanceofSpecial, Math.floor(Math.random() * Stats.getStatWithType(type).length));
    };
    CustomItem.getStatwithType = function (type, chanceofSpecial, statnum) {
        var stat = Stats.getStatWithType(type)[statnum];
        return stat.toItemStat(stat == Stats.duribility ? new RoundModifier() : new DisplayModifier(), Math.floor(Math.random() * chanceofSpecial) + 1 == 1 ? SpecialTypes.getRandomSpecialType() : null);
    };
    CustomItem.prototype.toString = function () {
        var statstring = "";
        for (var i = 0; i < this.stats.length; i++) {
            statstring += this.stats[i].toString() + " ";
        }
        return this.name + " " + statstring + " Stacks to: " + this.maxStackSize + " " + this.type.toString();
    };
    return CustomItem;
}());
var Stat = /** @class */ (function () {
    //constructor
    function Stat(format, customItemTypes, minValue, maxValue, rarity, canBeSpecial) {
        this.format = format;
        this.customItemTypes = customItemTypes;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.rarity = rarity;
        this.canBeSpecial = canBeSpecial;
    }
    Stat.prototype.toItemStat = function (modifier, special) {
        return new ItemStat(Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue, this, modifier, special);
    };
    Stat.prototype.register = function () {
        allStats.push(this);
        return this;
    };
    Stat.prototype.toString = function () {
        return this.format;
    };
    return Stat;
}());
var SpecialType = /** @class */ (function () {
    //constructor
    function SpecialType(prefix) {
        this.prefix = prefix;
    }
    return SpecialType;
}());
var SpecialTypes = /** @class */ (function () {
    function SpecialTypes() {
    }
    SpecialTypes.getRandomSpecialType = function () {
        var random = Math.floor(Math.random() * SpecialTypes.getAllTypes().length);
        return SpecialTypes.getAllTypes()[random];
    };
    SpecialTypes.getAllTypes = function () {
        return [SpecialTypes.onUse];
    };
    SpecialTypes.onUse = new SpecialType("On Use: ");
    return SpecialTypes;
}());
var DisplayModifier = /** @class */ (function () {
    function DisplayModifier() {
    }
    DisplayModifier.prototype.getModifiedValue = function (val) {
        return val;
    };
    return DisplayModifier;
}());
var RoundModifier = /** @class */ (function (_super) {
    __extends(RoundModifier, _super);
    function RoundModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoundModifier.prototype.getModifiedValue = function (val) {
        return Math.ceil(val / 10) * 10;
    };
    return RoundModifier;
}(DisplayModifier));
var ItemStat = /** @class */ (function () {
    //constructor
    function ItemStat(value, stat, displayModifier, Special) {
        this.value = value;
        this.stat = stat;
        this.special = Special;
        this.displayModifier = displayModifier;
    }
    ItemStat.prototype.toString = function () {
        //return the format of the stat except wherever there is a {v} it will be replaced with the value 
        var str = this.stat.format.replace("{v}", this.displayModifier.getModifiedValue(this.value).toString());
        if (this.special != null && this.stat.canBeSpecial) {
            str = this.special.prefix + " " + str.replace("{e}", "additional");
        }
        else {
            str = str.replace("{e}", "");
        }
        return str;
    };
    return ItemStat;
}());
var CustomItemType = /** @class */ (function () {
    //constructor
    function CustomItemType(name) {
        this._name = name;
    }
    CustomItemType.prototype.toString = function () {
        return this._name;
    };
    return CustomItemType;
}());
var CustomItemTypes = /** @class */ (function () {
    function CustomItemTypes() {
    }
    CustomItemTypes.getAllTypes = function () {
        return [CustomItemTypes.weapon, CustomItemTypes.armor, CustomItemTypes.shield, CustomItemTypes.axe, CustomItemTypes.bow, CustomItemTypes.sword, CustomItemTypes.staff, CustomItemTypes.pickaxe, CustomItemTypes.food];
    };
    CustomItemTypes.getAllTypesExcluding = function (types) {
        var allTypes = CustomItemTypes.getAllTypes();
        for (var i = 0; i < types.length; i++) {
            for (var j = 0; j < allTypes.length; j++) {
                if (allTypes[j] == types[i]) {
                    allTypes.splice(j, 1);
                }
            }
        }
        return allTypes;
    };
    CustomItemTypes.weapon = new CustomItemType("Weapon");
    CustomItemTypes.armor = new CustomItemType("Armor");
    CustomItemTypes.shield = new CustomItemType("Shield");
    CustomItemTypes.axe = new CustomItemType("Axe");
    CustomItemTypes.bow = new CustomItemType("Bow");
    CustomItemTypes.sword = new CustomItemType("Sword");
    CustomItemTypes.staff = new CustomItemType("Staff");
    CustomItemTypes.pickaxe = new CustomItemType("Pickaxe");
    CustomItemTypes.food = new CustomItemType("Food");
    return CustomItemTypes;
}());
var Stats = /** @class */ (function () {
    function Stats() {
    }
    //get all stats
    Stats.getAllStats = function () {
        return allStats;
    };
    Stats.getStatWithType = function (type) {
        //return all stats with customItemType that matches the type
        return allStats.filter(function (stat) { return stat.customItemTypes.some(function (customItemType) { return customItemType === type; }); });
    };
    Stats.damage = new Stat("Deals {v} {e} damage", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 2, 10, 1, true).register();
    Stats.duribility = new Stat("Has {v} {e} duribility points", CustomItemTypes.getAllTypesExcluding([CustomItemTypes.food]), 250, 2500, 0, false).register();
    Stats.knockback = new Stat("Deals {v} extra knockback", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 1.5, 3, 3, true).register();
    Stats.attackSpeed = new Stat("Has a {v} {e} attack speed", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 1, 5, 2, true).register();
    Stats.mineSpeed = new Stat("Mines at a {e} mining speed of {v}", [CustomItemTypes.pickaxe], 0.75, 4, 0, true).register();
    Stats.mineLevel = new Stat("Has a mining level of {v}", [CustomItemTypes.pickaxe], 0, 4, 0, false).register();
    Stats.moveSpeed = new Stat("{v} {e} Movement Speed while in hand", CustomItemTypes.getAllTypes(), 0.05, 0.5, 7, true).register();
    Stats.playerMaxHealth = new Stat("Increases max health by {v}", CustomItemTypes.getAllTypes(), 1, 10, 7, true).register();
    Stats.saturation = new Stat("Gives {v} saturation", [CustomItemTypes.food], 1, 6, 0, false).register();
    Stats.hunger = new Stat("Gives {v} hunger", [CustomItemTypes.food], 1, 20, 0, false).register();
    Stats.eatSpeed = new Stat("Has a {e} eating speed of {v}", [CustomItemTypes.food], 1, 2, 0, false).register();
    Stats.bowPullbackSpeed = new Stat("Has a {e} bow pullback speed of {v}", [CustomItemTypes.bow], 1, 2, 0, true).register();
    Stats.projectileSpeed = new Stat("Has a {v} bps projectile speed", [CustomItemTypes.bow], 1, 2, 0, false).register();
    return Stats;
}());
function generateItem() {
    var item = CustomItem.generateRandomItem();
    document.getElementById("stats").innerHTML = "";
    for (var i = 0; i < item.stats.length; i++) {
        document.getElementById("stats").innerHTML += item.stats[i].toString() + "<br><br>";
    }
    document.getElementById("itemName").innerHTML = item.type.toString();
}
