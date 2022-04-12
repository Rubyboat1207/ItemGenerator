const allStats: Stat[] = [];


class CustomItem
{
    //has a max stack size, a name and stats
    public name: string;
    public stats: ItemStat[];
    public maxStackSize: number;
    public type: CustomItemType;
    //constructor
    constructor(name: string, stats: ItemStat[], maxStackSize: number, type: CustomItemType) {
        this.name = name;
        this.stats = stats;
        this.maxStackSize = maxStackSize;
        this.type = type;
    }
    static generateRandomItem(): CustomItem {
        let name: string = "customItem";
        let stats: ItemStat[] = [];
        let maxStackSize: number = 10;
        //generate random number based on how many customItemTypes there are
        let typeID: number = Math.floor(Math.random() * CustomItemTypes.getAllTypes().length);
        //get the type
        let type: CustomItemType = CustomItemTypes.getAllTypes()[typeID];
        //generate a random number from 1 to 100
        let randomRarity: number = Math.floor(Math.random() * 10) + 1;
        for(let i = 0; i < Stats.getStatWithType(type).length; i++) {
            if(Stats.getStatWithType(type)[i].rarity < randomRarity) {
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
        if(stats.length <= 2) {
            console.log("Generated item with minimal stats, generating stats");
            return this.generateRandomItem();
        }
        return new CustomItem(name, stats, maxStackSize, type);
    }
    public static getRandomStatwithType(type: CustomItemType, chanceofSpecial: number): ItemStat {
        return this.getStatwithType(type, chanceofSpecial, Math.floor(Math.random() * Stats.getStatWithType(type).length));
    }
    public static getStatwithType(type: CustomItemType, chanceofSpecial: number, statnum: number): ItemStat {
        let stat: Stat = Stats.getStatWithType(type)[statnum];
        return stat.toItemStat(stat == Stats.duribility ? new RoundModifier() : new DisplayModifier() , Math.floor(Math.random() * chanceofSpecial) + 1 == 1 ? SpecialTypes.getRandomSpecialType() : null)
    }
    public toString(): string {
        let statstring = "";
        for(let i = 0; i < this.stats.length; i++) {
            statstring += this.stats[i].toString() + " ";
        }
        return this.name + " " + statstring + " Stacks to: " + this.maxStackSize + " " + this.type.toString();
    }
}
class Stat{
    //has a format, value and CustomItemTypes array
    public format: string;
    public customItemTypes: CustomItemType[];
    public minValue: number;
    public maxValue: number;
    //from 1 to 10
    public rarity: number;
    public canBeSpecial: boolean;
    //constructor
    constructor(format: string, customItemTypes: CustomItemType[], minValue: number, maxValue: number, rarity: number, canBeSpecial: boolean) {
        this.format = format;
        this.customItemTypes = customItemTypes;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.rarity = rarity;
        this.canBeSpecial = canBeSpecial;
    }
    public toItemStat(modifier: DisplayModifier, special?: SpecialType): ItemStat {
        return new ItemStat(
            Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue,
            this,
            modifier,
            special,
        );
    }
    public register(): Stat {
        allStats.push(this)
        return this;
    }
    public toString(): string {
        return this.format;
    }
}
class SpecialType {
    //todo: add specific item special types

    //has a prefix
    public prefix: string;
    //constructor
    constructor(prefix: string) {
        this.prefix = prefix;
    }
}
class SpecialTypes {
    
    static onUse: SpecialType = new SpecialType("On Use: ");

    static getRandomSpecialType(): SpecialType {
        let random: number = Math.floor(Math.random() * SpecialTypes.getAllTypes().length);
        return SpecialTypes.getAllTypes()[random];
    }

    static getAllTypes(): SpecialType[] {
        return [SpecialTypes.onUse];
    }
}
class DisplayModifier {
    public getModifiedValue(val: number): number {
        return val;
    }
}

class RoundModifier extends DisplayModifier {
    public getModifiedValue(val: number): number {
        return Math.ceil(val/10) * 10;
    }
}



class ItemStat {
    //has a value and a stat
    public value: number;
    public stat: Stat;
    public special: SpecialType;
    public displayModifier: DisplayModifier;
    //constructor
    constructor(value: number, stat: Stat, displayModifier: DisplayModifier ,Special?: SpecialType) {
        this.value = value;
        this.stat = stat;
        this.special = Special;
        this.displayModifier = displayModifier;
    }
    public toString(): string {
        //return the format of the stat except wherever there is a {v} it will be replaced with the value 
        let str = this.stat.format.replace("{v}", this.displayModifier.getModifiedValue(this.value).toString());
        if(this.special != null && this.stat.canBeSpecial) {
            str = this.special.prefix + " " + str.replace("{e}", "additional");
        }else{
            str = str.replace("{e}", "");
        }
        return str
    }
}
class CustomItemType {
    //has a name
    private _name: string;
    //constructor
    constructor(name: string){
        this._name = name;
    }
    public toString(): string {
        return this._name;
    }
}
class CustomItemTypes {
    static weapon: CustomItemType = new CustomItemType("Weapon");
    static armor: CustomItemType = new CustomItemType("Armor");
    static shield: CustomItemType = new CustomItemType("Shield");
    static axe: CustomItemType = new CustomItemType("Axe");
    static bow: CustomItemType = new CustomItemType("Bow");
    static sword: CustomItemType = new CustomItemType("Sword");
    static staff: CustomItemType = new CustomItemType("Staff");
    static pickaxe: CustomItemType = new CustomItemType("Pickaxe");
    static food: CustomItemType = new CustomItemType("Food");
    static getAllTypes(): CustomItemType[] {
        return [CustomItemTypes.weapon, CustomItemTypes.armor, CustomItemTypes.shield, CustomItemTypes.axe, CustomItemTypes.bow, CustomItemTypes.sword, CustomItemTypes.staff, CustomItemTypes.pickaxe, CustomItemTypes.food];
    }
    static getAllTypesExcluding(types: CustomItemType[]) {
        let allTypes: CustomItemType[] = CustomItemTypes.getAllTypes();
        for(let i = 0; i < types.length; i++) {
            for(let j = 0; j < allTypes.length; j++) {
                if(allTypes[j] == types[i]) {
                    allTypes.splice(j, 1);
                }
            }
        }
        return allTypes;
    }
}
class Stats {
    static damage: Stat = new Stat("Deals {v} {e} damage", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 2, 10, 1, true).register();
    
    static duribility: Stat = new Stat("Has {v} {e} duribility points", CustomItemTypes.getAllTypesExcluding([CustomItemTypes.food]), 250, 2500, 0, false).register();
    static knockback: Stat = new Stat("Deals {v} extra knockback", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 1.5, 3, 3, true).register();
    static attackSpeed: Stat = new Stat("Has a {v} {e} attack speed", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 1, 5, 2, true).register();
    static mineSpeed: Stat = new Stat("Mines at a {e} mining speed of {v}", [CustomItemTypes.pickaxe], 0.75, 4, 0, true).register();
    static mineLevel: Stat = new Stat("Has a mining level of {v}", [CustomItemTypes.pickaxe], 0, 4, 0, false).register();
    static moveSpeed: Stat = new Stat("{v} {e} Movement Speed while in hand", CustomItemTypes.getAllTypes(), 0.05, 0.5, 7, true).register();
    static playerMaxHealth: Stat = new Stat("Increases max health by {v}", CustomItemTypes.getAllTypes(), 1, 10, 7, true).register();
    static saturation: Stat = new Stat("Gives {v} saturation", [CustomItemTypes.food] , 1, 6, 0, false).register();
    static hunger: Stat = new Stat("Gives {v} hunger", [CustomItemTypes.food] , 1, 20, 0, false).register();
    static eatSpeed: Stat = new Stat("Has a {e} eating speed of {v}", [CustomItemTypes.food] , 1, 2, 0, false).register();
    static bowPullbackSpeed: Stat = new Stat("Has a {e} bow pullback speed of {v}", [CustomItemTypes.bow] , 1, 2, 0, true).register();
    static projectileSpeed: Stat = new Stat("Has a {v} bps projectile speed", [CustomItemTypes.bow] , 1, 2, 0, false).register();
    //get all stats
    public static getAllStats(): Stat[] {
        return allStats;
    }
    public static getStatWithType(type: CustomItemType): Stat[] {
        //return all stats with customItemType that matches the type
        return allStats.filter(stat => stat.customItemTypes.some(customItemType => customItemType === type));
    }
}
function generateItem()
{
    let item = CustomItem.generateRandomItem();
    document.getElementById("stats").innerHTML = "";
    for(let i = 0; i <item.stats.length; i++) {
        document.getElementById("stats").innerHTML += item.stats[i].toString() + "<br><br>";
    }
    document.getElementById("itemName").innerHTML = item.type.toString();
}