type OperatorId = String;

/**
 * SPChargeType is an enum denoting how a skill charges.
 * This data is available in data_provider/gamedata/excel/skill_table.json
 * under the key "spType" in "spData".
 *
 * Automatic-Recovery is assigned spType=1  (0b0001)
 * Attack-Recovery is assigned spType=2     (0b0010)
 * Defensive-Recovery is assigned spType=4  (0b0100)
 * Passive is assigned spType=8             (0b1000)
 *
 * This assignment implies that skills might've been originally designed
 * to recover in multiple ways, and a skill's recovery type would be
 * denoted as a bitfield.
 * (ex: Automatic-Recovery and Attack-Recovery = 0b0001 | 0b0010 = 0b0011 = 3)
 */
type SPChargeType
  = "Automatic-Recovery"
  | "Attack-Recovery"
  | "Defense-Recovery"
  | "Passive"
  ;

/**
 * DurationType is an enum denoting how to determine the lifetime of a skill.
 * This data isn't available explicitly, despite the key "durationType"
 * existing in data_provider/gamedata/excel/skill_table.json.
 *
 * This enum does not follow "durationType" by any means, as "durationType"
 * seems to be assigned to 0 for every skill.
 *
 * The DurationType assigned to a skill can only be derived using it's
 * description, as all skill descriptions mention ammo when it's an ammo type
 * skill and "infinite" when it's an infinite type skill. This is not a
 * comprehensive list of how to classify skills, but the idea stays the same.
 *
 * These special skills have duration=-1.0 within the game data.
 */
type DurationType = "Time" | "Ammo" | "Infinite";

/**
 * SkillActivationType is an enum denoting how a skill is activated.
 * This data is available in data_provider/gamedata/excel/skill_table.json
 * under the key "skillType" in the "levels" array.
 *
 * Manual is assigned skillType=1    (0b01)
 * Automatic is assigned skillType=2 (0b10)
 *
 * There are no further skillTypes (not 3 nor 4), so there is nothing to be
 * said whether this value was supposed to be a bitfield or just a linearly
 * incremented enum.
 */
type SkillActivationType
  = "Manual"
  | "Automatic"
  ;


/**
 * SkillLevel is a set that describes
 */
type SkillLevel = {
  InitialSP: Number,
  SPCost: Number,
  Charges: Number,
  Description: String,
  Parameters: {
    [String]: Number,
  }
}

type OperatorSkill = {
  Name: String,
  SkillId: String
  SkillIndex: Number,
  Icon: String,

  SPChargeType: SPChargeType,
  DurationType: DurationType,
  SkillActivationType: SkillActivationType,

  Levels: SkillLevel[],
};




type OperatorDataProvider = {
  GetOperatorName: (OperatorId) => String,
  GetOperatorBustImage: (OperatorId) => String,
  GetOperatorSkills: (OperatorId) => OperatorSkill[],
};

export {
  OperatorId,
  OperatorDataProvider,
};
