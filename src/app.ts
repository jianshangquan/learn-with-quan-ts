import { convertBurmeseGoldToGram, convertBurmeseGoldToMetricWeight } from "./gold-calculation";
import { BurmeseGoldWeight, MetricWeight, TroyWeight } from "./gold-model";

console.log('Hello World');

const pawnItem = new BurmeseGoldWeight(1, 0, 0)
const internationalGoldBar = new MetricWeight(1000);
const ukGoldBar = new TroyWeight(10);

const gram = convertBurmeseGoldToGram(pawnItem);
const r = convertBurmeseGoldToMetricWeight(pawnItem);
console.log(r.gram)

