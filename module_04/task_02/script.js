"use strict";

const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking ${action.name} opeartion on ${itemName}`);
  action(itemName);
};

invokeInventoryAction("Аптечка", inventory.add.bind(inventory));
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

// invokeInventoryAction("Фильтр", inventory.remove.bind(inventory));
// // Invoking remove opeartion on Фильтр


//-----------------------------

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction.call(this, itemName);
};

invokeInventoryOperation.call(inventory, "Фильтр", inventory.remove);
console.log(inventory.items); // ['Монорельса', 'Аптечка']
