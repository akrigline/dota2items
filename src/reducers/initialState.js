export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  itemInformation: {
    itemList: [
      {"id":1,"img":"blink_lg.png?3","dname":"Blink Dagger","qual":"component","cost":2250,"desc":"Active: Blink - Teleport to a target point up to %blink_range% units away.  If damage is taken, Blink Dagger cannot be used for %blink_damage_cooldown% seconds.","notes":"Self-casting will cause you to teleport in the direction of your team's fountain.<br \/>If you used Blink to teleport to a distance over the maximum range, you'll be teleported 4\/5 of the maximum range instead.","attrib":"","mc":false,"cd":12,"lore":"The fabled dagger used by the fastest assassin ever to walk the lands.","components":null,"created":false},
      {"id":2,"img":"blades_of_attack_lg.png?3","dname":"Blades of Attack","qual":"component","cost":420,"desc":"","notes":"","attrib":"+ <span class=\"attribVal\">9<\/span> <span class=\"attribValText\">Damage<\/span>","mc":false,"cd":false,"lore":"The damage of these small, concealable blades should not be underestimated.","components":null,"created":false}
    ]
  }
};
