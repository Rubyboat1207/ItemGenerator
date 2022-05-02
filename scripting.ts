const allStats: Stat[] = [];
const allBonusStats: BonusStat[] = [];
//list of all minecraft blocks
const pickaxeminable = [
    "stone",
    "granite",
    "polished_granite",
    "diorite",
    "polished_diorite",
    "andesite",
    "polished_andesite",
    "cobblestone",
    "gold_ore",
    "deepslate_gold_ore",
    "iron_ore",
    "deepslate_iron_ore",
    "coal_ore",
    "deepslate_coal_ore",
    "nether_gold_ore",
    "lapis_ore",
    "deepslate_lapis_ore",
    "lapis_block",
    "dispenser",
    "sandstone",
    "chiseled_sandstone",
    "cut_sandstone",
    "gold_block",
    "iron_block",
    "bricks",
    "mossy_cobblestone",
    "obsidian",
    "spawner",
    "diamond_ore",
    "deepslate_diamond_ore",
    "diamond_block",
    "furnace",
    "cobblestone_stairs",
    "stone_pressure_plate",
    "iron_door",
    "redstone_ore",
    "deepslate_redstone_ore",
    "netherrack",
    "basalt",
    "polished_basalt",
    "stone_bricks",
    "mossy_stone_bricks",
    "cracked_stone_bricks",
    "chiseled_stone_bricks",
    "iron_bars",
    "chain",
    "brick_stairs",
    "stone_brick_stairs",
    "nether_bricks",
    "nether_brick_fence",
    "nether_brick_stairs",
    "enchanting_table",
    "brewing_stand",
    "end_stone",
    "sandstone_stairs",
    "emerald_ore",
    "deepslate_emerald_ore",
    "ender_chest",
    "emerald_block",
    "light_weighted_pressure_plate",
    "heavy_weighted_pressure_plate",
    "redstone_block",
    "nether_quartz_ore",
    "hopper",
    "quartz_block",
    "chiseled_quartz_block",
    "quartz_pillar",
    "quartz_stairs",
    "dropper",
    "white_terracotta",
    "orange_terracotta",
    "magenta_terracotta",
    "light_blue_terracotta",
    "yellow_terracotta",
    "lime_terracotta",
    "pink_terracotta",
    "gray_terracotta",
    "light_gray_terracotta",
    "cyan_terracotta",
    "purple_terracotta",
    "blue_terracotta",
    "brown_terracotta",
    "green_terracotta",
    "red_terracotta",
    "black_terracotta",
    "iron_trapdoor",
    "prismarine",
    "prismarine_bricks",
    "dark_prismarine",
    "prismarine_stairs",
    "prismarine_brick_stairs",
    "dark_prismarine_stairs",
    "prismarine_slab",
    "prismarine_brick_slab",
    "dark_prismarine_slab",
    "terracotta",
    "coal_block",
    "red_sandstone",
    "chiseled_red_sandstone",
    "cut_red_sandstone",
    "red_sandstone_stairs",
    "stone_slab",
    "smooth_stone_slab",
    "sandstone_slab",
    "cut_sandstone_slab",
    "petrified_oak_slab",
    "cobblestone_slab",
    "brick_slab",
    "stone_brick_slab",
    "nether_brick_slab",
    "quartz_slab",
    "red_sandstone_slab",
    "cut_red_sandstone_slab",
    "purpur_slab",
    "smooth_stone",
    "smooth_sandstone",
    "smooth_quartz",
    "smooth_red_sandstone",
    "purpur_block",
    "purpur_pillar",
    "purpur_stairs",
    "end_stone_bricks",
    "magma_block",
    "red_nether_bricks",
    "bone_block",
    "observer",
    "white_glazed_terracotta",
    "orange_glazed_terracotta",
    "magenta_glazed_terracotta",
    "light_blue_glazed_terracotta",
    "yellow_glazed_terracotta",
    "lime_glazed_terracotta",
    "pink_glazed_terracotta",
    "gray_glazed_terracotta",
    "light_gray_glazed_terracotta",
    "cyan_glazed_terracotta",
    "purple_glazed_terracotta",
    "blue_glazed_terracotta",
    "brown_glazed_terracotta",
    "green_glazed_terracotta",
    "red_glazed_terracotta",
    "black_glazed_terracotta",
    "white_concrete",
    "orange_concrete",
    "magenta_concrete",
    "light_blue_concrete",
    "yellow_concrete",
    "lime_concrete",
    "pink_concrete",
    "gray_concrete",
    "light_gray_concrete",
    "cyan_concrete",
    "purple_concrete",
    "blue_concrete",
    "brown_concrete",
    "green_concrete",
    "red_concrete",
    "black_concrete",
    "dead_tube_coral_block",
    "dead_brain_coral_block",
    "dead_bubble_coral_block",
    "dead_fire_coral_block",
    "dead_horn_coral_block",
    "tube_coral_block",
    "brain_coral_block",
    "bubble_coral_block",
    "fire_coral_block",
    "horn_coral_block",
    "dead_tube_coral",
    "dead_brain_coral",
    "dead_bubble_coral",
    "dead_fire_coral",
    "dead_horn_coral",
    "dead_tube_coral_fan",
    "dead_brain_coral_fan",
    "dead_bubble_coral_fan",
    "dead_fire_coral_fan",
    "dead_horn_coral_fan",
    "dead_tube_coral_wall_fan",
    "dead_brain_coral_wall_fan",
    "dead_bubble_coral_wall_fan",
    "dead_fire_coral_wall_fan",
    "dead_horn_coral_wall_fan",
    "polished_granite_stairs",
    "smooth_red_sandstone_stairs",
    "mossy_stone_brick_stairs",
    "polished_diorite_stairs",
    "mossy_cobblestone_stairs",
    "end_stone_brick_stairs",
    "stone_stairs",
    "smooth_sandstone_stairs",
    "smooth_quartz_stairs",
    "granite_stairs",
    "andesite_stairs",
    "red_nether_brick_stairs",
    "polished_andesite_stairs",
    "diorite_stairs",
    "polished_granite_slab",
    "smooth_red_sandstone_slab",
    "mossy_stone_brick_slab",
    "polished_diorite_slab",
    "mossy_cobblestone_slab",
    "end_stone_brick_slab",
    "smooth_sandstone_slab",
    "smooth_quartz_slab",
    "granite_slab",
    "andesite_slab",
    "red_nether_brick_slab",
    "polished_andesite_slab",
    "diorite_slab",
    "smoker",
    "blast_furnace",
    "grindstone",
    "stonecutter",
    "bell",
    "lantern",
    "soul_lantern",
    "warped_nylium",
    "crimson_nylium",
    "netherite_block",
    "ancient_debris",
    "crying_obsidian",
    "respawn_anchor",
    "lodestone",
    "blackstone",
    "blackstone_stairs",
    "blackstone_slab",
    "polished_blackstone",
    "polished_blackstone_bricks",
    "cracked_polished_blackstone_bricks",
    "chiseled_polished_blackstone",
    "polished_blackstone_brick_slab",
    "polished_blackstone_brick_stairs",
    "gilded_blackstone",
    "polished_blackstone_stairs",
    "polished_blackstone_slab",
    "polished_blackstone_pressure_plate",
    "chiseled_nether_bricks",
    "cracked_nether_bricks",
    "quartz_bricks",
    "tuff",
    "calcite",
    "oxidized_copper",
    "weathered_copper",
    "exposed_copper",
    "copper_block",
    "copper_ore",
    "deepslate_copper_ore",
    "oxidized_cut_copper",
    "weathered_cut_copper",
    "exposed_cut_copper",
    "cut_copper",
    "oxidized_cut_copper_stairs",
    "weathered_cut_copper_stairs",
    "exposed_cut_copper_stairs",
    "cut_copper_stairs",
    "oxidized_cut_copper_slab",
    "weathered_cut_copper_slab",
    "exposed_cut_copper_slab",
    "cut_copper_slab",
    "waxed_copper_block",
    "waxed_weathered_copper",
    "waxed_exposed_copper",
    "waxed_oxidized_copper",
    "waxed_oxidized_cut_copper",
    "waxed_weathered_cut_copper",
    "waxed_exposed_cut_copper",
    "waxed_cut_copper",
    "waxed_oxidized_cut_copper_stairs",
    "waxed_weathered_cut_copper_stairs",
    "waxed_exposed_cut_copper_stairs",
    "waxed_cut_copper_stairs",
    "waxed_oxidized_cut_copper_slab",
    "waxed_weathered_cut_copper_slab",
    "waxed_exposed_cut_copper_slab",
    "waxed_cut_copper_slab",
    "lightning_rod",
    "pointed_dripstone",
    "dripstone_block",
    "deepslate",
    "cobbled_deepslate",
    "cobbled_deepslate_stairs",
    "cobbled_deepslate_slab",
    "polished_deepslate",
    "polished_deepslate_stairs",
    "polished_deepslate_slab",
    "deepslate_tiles",
    "deepslate_tile_stairs",
    "deepslate_tile_slab",
    "deepslate_bricks",
    "deepslate_brick_stairs",
    "deepslate_brick_slab",
    "chiseled_deepslate",
    "cracked_deepslate_bricks",
    "cracked_deepslate_tiles",
    "smooth_basalt",
    "raw_iron_block",
    "raw_copper_block",
    "raw_gold_block",
    "ice",
    "packed_ice",
    "blue_ice",
    "stone_button",
    "piston",
    "sticky_piston",
    "piston_head",
    "amethyst_cluster",
    "small_amethyst_bud",
    "medium_amethyst_bud",
    "large_amethyst_bud",
    "amethyst_block",
    "budding_amethyst",
    "infested_cobblestone",
    "infested_chiseled_stone_bricks",
    "infested_cracked_stone_bricks",
    "infested_deepslate",
    "infested_stone",
    "infested_mossy_stone_bricks",
    "infested_stone_bricks",
]
const monsters = [
    "zombie",
    "skeleton",
    "creeper",
    "spider",
    "zombie_pigman",
    "slime",
    "enderman",
    "cave_spider",
    "ghast",
    "blaze",
    "magma_cube",
    "silverfish",
    "endermite",
    "wither_skeleton",
    "bat",
    "witch",
    "wither",
    "shulker",
    "ender_dragon",
    "guardian",
    "polar_bear",
    "shulker_bullet",
    "phantom",
    "evoker",
    "vex",
    "vindicator",
    "stray",
    "husk",
    "elder_guardian"
]
const allVanillaBlocks: string[] = []

class CustomItem
{
    //has a max stack size, a name and stats
    public name: string;
    public stats: ItemStat[];
    public maxStackSize: number;
    public type: CustomItemType;
    public bonusStats: ItemStat[];
    //constructor
    constructor(name: string, stats: ItemStat[], maxStackSize: number, type: CustomItemType, bonusStats: ItemStat[] = []) {
        this.name = name;
        this.stats = stats;
        this.maxStackSize = maxStackSize;
        this.type = type;
        this.bonusStats = bonusStats;
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
        if(1 == 1) {
            //gets a random bonus stat then generates a random number from 1 to 10 and if the bonus stat's rarity is less than the random number then it adds the bonus stat to the stats
            let bonusStat: ItemStat = this.getRandomBonusStatwithType(type);
            let randomRarity: number = Math.floor(10) + 1;
            if(bonusStat.stat.rarity < randomRarity) {
                stats.push(bonusStat);
            }
        }
        return new CustomItem(name, stats, maxStackSize, type);
    }



    
    public static getRandomStatwithType(type: CustomItemType, chanceofSpecial: number): ItemStat {
        return this.getStatwithType(type, chanceofSpecial, Math.floor(Math.random() * Stats.getStatWithType(type).length));
    }
    public static getRandomBonusStatwithType(type: CustomItemType): ItemStat {
        return this.getBonusStatwithType(type, Math.floor(Math.random() * Stats.getBonusStatWithType(type).length));
    }
    public static getStatwithType(type: CustomItemType, chanceofSpecial: number, statnum: number): ItemStat {
        let stat: Stat = Stats.getStatWithType(type)[statnum];
        return stat.toItemStat(stat == Stats.durability ? new RoundModifier() : new DisplayModifier() , Math.floor(Math.random() * chanceofSpecial) + 1 == 1 ? SpecialTypes.getRandomSpecialType() : null)
    }
    public static getBonusStatwithType(type: CustomItemType,statnum: number): ItemStat {
        let stat: Stat = Stats.getBonusStatWithType(type)[statnum];
        return stat.toItemStat(new DisplayModifier(), SpecialTypes.getRandomSpecialType());
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
class BonusStat extends Stat {
    public canBeSpecial: boolean = false;
    //constructor
    constructor(format: string, customItemTypes: CustomItemType[], minValue: number, maxValue: number, rarity: number) {
        super(format, customItemTypes, minValue, maxValue, rarity, false);
    }
    public register(): Stat {
        allBonusStats.push(this)
        return this;
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
    static whenBroken: SpecialType = new SpecialType("When Broken: ");

    static getRandomSpecialType(): SpecialType {
        let random: number = Math.floor(Math.random() * SpecialTypes.getAllTypes().length);
        return SpecialTypes.getAllTypes()[random];
    }

    static getAllTypes(): SpecialType[] {
        return [SpecialTypes.onUse, SpecialTypes.whenBroken];
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
        let str = this.stat.format.replace("{v}", this.displayModifier.getModifiedValue(this.value).toString()).replace("{rb}", pickaxeminable[Math.floor(Math.random() * pickaxeminable.length)]).replace("{rm}", monsters[Math.floor(Math.random() * monsters.length)]);
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
    //----- Normal Stats -----
    static damage: Stat = new Stat("Deals {v} {e} damage", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 2, 10, 1, true).register();
    static durability: Stat = new Stat("Has {v} {e} durability points", CustomItemTypes.getAllTypesExcluding([CustomItemTypes.food]), 250, 2500, 0, false).register();
    static knockback: Stat = new Stat("Deals {v} extra knockback", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 1.5, 3, 3, true).register();
    static attackSpeed: Stat = new Stat("Has a {v} {e} attack speed", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 1, 5, 2, true).register();
    static mineSpeed: Stat = new Stat("Mines at a {e} mining speed of {v}", [CustomItemTypes.pickaxe], 0.75, 4, 0, true).register();
    static mineLevel: Stat = new Stat("Has a mining level of {v}", [CustomItemTypes.pickaxe], 0, 4, 0, false).register();
    static moveSpeed: Stat = new Stat("{v} {e} Movement Speed", CustomItemTypes.getAllTypes(), 0.05, 0.5, 7, true).register();
    static playerMaxHealth: Stat = new Stat("Increases max health by {v}", CustomItemTypes.getAllTypes(), 1, 10, 7, true).register();
    static saturation: Stat = new Stat("Gives {v} saturation", [CustomItemTypes.food] , 1, 6, 0, false).register();
    static hunger: Stat = new Stat("Gives {v} hunger", [CustomItemTypes.food] , 1, 20, 0, false).register();
    static eatSpeed: Stat = new Stat("Has a {e} eating speed of {v}", [CustomItemTypes.food] , 1, 2, 0, false).register();
    static bowPullbackSpeed: Stat = new Stat("Has a {e} bow pullback speed of {v}", [CustomItemTypes.bow] , 1, 2, 0, true).register();
    static projectileSpeed: Stat = new Stat("Has a {v} bps projectile speed", [CustomItemTypes.bow] , 1, 2, 0, false).register();
    //----- Bonus stats -----
    static launchEffect: BonusStat = new BonusStat("Launches you in a direction with a force of {v} blocks", CustomItemTypes.getAllTypes(), 1, 4, 3).register();
    static explodeEffect_DMG: BonusStat = new BonusStat("Explodes with a blast radius of {v} blocks (harms player)", CustomItemTypes.getAllTypes(), 2, 10, 5).register();
    static explodeEffect_NODMG: BonusStat = new BonusStat("Explodes with a blast radius of {v} (without harming player)", CustomItemTypes.getAllTypes(), 2, 7, 6).register();
    static potionEffect: BonusStat = new BonusStat("Gives the player {v}s of random potion effect", CustomItemTypes.getAllTypes(), 15, 120, 3).register();
    static dealsAOEDamage: BonusStat = new BonusStat("Damages all players within radius of {v} blocks", CustomItemTypes.getAllTypes(), 3, 5, 4).register();
    static blindnessEffect: BonusStat = new BonusStat("Gives you the blindness effect for {v} seconds", CustomItemTypes.getAllTypes(), 3, 5, 7).register();
    static hasteEffect: BonusStat = new BonusStat("Mines {v} faster after mining {rb}", [CustomItemTypes.pickaxe] , 5, 10, 7).register();
    static damageEffect: BonusStat = new BonusStat("Gives you strength for {v} seconds after killing {rm}", CustomItemTypes.getAllTypes(), 3, 10, 7).register();


    //get all stats
    public static getAllStats(): Stat[] {
        return allStats;
    }
    public static getStatWithType(type: CustomItemType): Stat[] {
        //return all stats with customItemType that matches the type
        return allStats.filter(stat => stat.customItemTypes.some(customItemType => customItemType === type));
    }

    public static getBonusStatWithType(type: CustomItemType): Stat[] {
        //return all stats with customItemType that matches the type
        return allBonusStats.filter(stat => stat.customItemTypes.some(customItemType => customItemType === type));
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
    //1/100 chance to run openYoutube
    if(Math.random() < 0.01) {
        openYoutube();
    }
}
//open new tab with never gonna give you up youtube video
function openYoutube() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
