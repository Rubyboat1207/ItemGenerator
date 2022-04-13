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
var allBonusStats = [];
//list of all minecraft blocks
var pickaxeminable = [
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
];
var monsters = [
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
];
var allVanillaBlocks = [];
var CustomItem = /** @class */ (function () {
    //constructor
    function CustomItem(name, stats, maxStackSize, type, bonusStats) {
        if (bonusStats === void 0) { bonusStats = []; }
        this.name = name;
        this.stats = stats;
        this.maxStackSize = maxStackSize;
        this.type = type;
        this.bonusStats = bonusStats;
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
        if (1 == 1) {
            //gets a random bonus stat then generates a random number from 1 to 10 and if the bonus stat's rarity is less than the random number then it adds the bonus stat to the stats
            var bonusStat = this.getRandomBonusStatwithType(type);
            var randomRarity_1 = Math.floor(10) + 1;
            if (bonusStat.stat.rarity < randomRarity_1) {
                stats.push(bonusStat);
            }
        }
        return new CustomItem(name, stats, maxStackSize, type);
    };
    CustomItem.getRandomStatwithType = function (type, chanceofSpecial) {
        return this.getStatwithType(type, chanceofSpecial, Math.floor(Math.random() * Stats.getStatWithType(type).length));
    };
    CustomItem.getRandomBonusStatwithType = function (type) {
        return this.getBonusStatwithType(type, Math.floor(Math.random() * Stats.getBonusStatWithType(type).length));
    };
    CustomItem.getStatwithType = function (type, chanceofSpecial, statnum) {
        var stat = Stats.getStatWithType(type)[statnum];
        return stat.toItemStat(stat == Stats.duribility ? new RoundModifier() : new DisplayModifier(), Math.floor(Math.random() * chanceofSpecial) + 1 == 1 ? SpecialTypes.getRandomSpecialType() : null);
    };
    CustomItem.getBonusStatwithType = function (type, statnum) {
        var stat = Stats.getBonusStatWithType(type)[statnum];
        return stat.toItemStat(new DisplayModifier(), SpecialTypes.getRandomSpecialType());
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
var BonusStat = /** @class */ (function (_super) {
    __extends(BonusStat, _super);
    //constructor
    function BonusStat(format, customItemTypes, minValue, maxValue, rarity) {
        var _this = _super.call(this, format, customItemTypes, minValue, maxValue, rarity, false) || this;
        _this.canBeSpecial = false;
        return _this;
    }
    BonusStat.prototype.register = function () {
        allBonusStats.push(this);
        return this;
    };
    return BonusStat;
}(Stat));
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
        return [SpecialTypes.onUse, SpecialTypes.whenBroken];
    };
    SpecialTypes.onUse = new SpecialType("On Use: ");
    SpecialTypes.whenBroken = new SpecialType("When Broken: ");
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
        var str = this.stat.format.replace("{v}", this.displayModifier.getModifiedValue(this.value).toString()).replace("{rb}", pickaxeminable[Math.floor(Math.random() * pickaxeminable.length)]).replace("{rm}", monsters[Math.floor(Math.random() * monsters.length)]);
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
    Stats.getBonusStatWithType = function (type) {
        //return all stats with customItemType that matches the type
        return allBonusStats.filter(function (stat) { return stat.customItemTypes.some(function (customItemType) { return customItemType === type; }); });
    };
    //----- Normal Stats -----
    Stats.damage = new Stat("Deals {v} {e} damage", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 2, 10, 1, true).register();
    Stats.duribility = new Stat("Has {v} {e} duribility points", CustomItemTypes.getAllTypesExcluding([CustomItemTypes.food]), 250, 2500, 0, false).register();
    Stats.knockback = new Stat("Deals {v} extra knockback", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 1.5, 3, 3, true).register();
    Stats.attackSpeed = new Stat("Has a {v} {e} attack speed", [CustomItemTypes.weapon, CustomItemTypes.axe, CustomItemTypes.sword], 1, 5, 2, true).register();
    Stats.mineSpeed = new Stat("Mines at a {e} mining speed of {v}", [CustomItemTypes.pickaxe], 0.75, 4, 0, true).register();
    Stats.mineLevel = new Stat("Has a mining level of {v}", [CustomItemTypes.pickaxe], 0, 4, 0, false).register();
    Stats.moveSpeed = new Stat("{v} {e} Movement Speed", CustomItemTypes.getAllTypes(), 0.05, 0.5, 7, true).register();
    Stats.playerMaxHealth = new Stat("Increases max health by {v}", CustomItemTypes.getAllTypes(), 1, 10, 7, true).register();
    Stats.saturation = new Stat("Gives {v} saturation", [CustomItemTypes.food], 1, 6, 0, false).register();
    Stats.hunger = new Stat("Gives {v} hunger", [CustomItemTypes.food], 1, 20, 0, false).register();
    Stats.eatSpeed = new Stat("Has a {e} eating speed of {v}", [CustomItemTypes.food], 1, 2, 0, false).register();
    Stats.bowPullbackSpeed = new Stat("Has a {e} bow pullback speed of {v}", [CustomItemTypes.bow], 1, 2, 0, true).register();
    Stats.projectileSpeed = new Stat("Has a {v} bps projectile speed", [CustomItemTypes.bow], 1, 2, 0, false).register();
    //----- Bonus stats -----
    Stats.launchEffect = new BonusStat("Launches you in a direction with a force of {v} blocks", CustomItemTypes.getAllTypes(), 1, 4, 3).register();
    Stats.explodeEffect_DMG = new BonusStat("Explodes with a blast radius of {v} blocks (harms player)", CustomItemTypes.getAllTypes(), 2, 10, 5).register();
    Stats.explodeEffect_NODMG = new BonusStat("Explodes with a blast radius of {v} (without harming player)", CustomItemTypes.getAllTypes(), 2, 7, 6).register();
    Stats.potionEffect = new BonusStat("Gives the player {v}s of random potion effect", CustomItemTypes.getAllTypes(), 15, 120, 3).register();
    Stats.dealsAOEDamage = new BonusStat("Damages all players within radius of {v} blocks", CustomItemTypes.getAllTypes(), 3, 5, 4).register();
    Stats.blindnessEffect = new BonusStat("Gives you the blindness effect for {v} seconds", CustomItemTypes.getAllTypes(), 3, 5, 7).register();
    Stats.hasteEffect = new BonusStat("Mines {v} faster after mining {rb}", [CustomItemTypes.pickaxe], 5, 10, 7).register();
    Stats.damageEffect = new BonusStat("Gives you strength for {v} seconds after killing {rm}", CustomItemTypes.getAllTypes(), 3, 10, 7).register();
    return Stats;
}());
function generateItem() {
    var item = CustomItem.generateRandomItem();
    document.getElementById("stats").innerHTML = "";
    for (var i = 0; i < item.stats.length; i++) {
        document.getElementById("stats").innerHTML += item.stats[i].toString() + "<br><br>";
    }
    document.getElementById("itemName").innerHTML = item.type.toString();
    //1/100 chance to run openYoutube
    if (Math.random() < 0.01) {
        openYoutube();
    }
}
//open new tab with never gonna give you up youtube video
function openYoutube() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
