import { BurmeseGoldWeight, MetricWeight } from "./gold-model";

export function convertBurmeseGoldToGram(gold: BurmeseGoldWeight): number{
    const totalKyat = gold.kyat + (gold.pae / 16) + (gold.yway / 128);
    const totalGram = totalKyat * 16.606;
    return totalGram;
}



export function convertBurmeseGoldToMetricWeight(gold: BurmeseGoldWeight): MetricWeight {
    const totalKyat = gold.kyat + (gold.pae / 16) + (gold.yway / 128);
    const totalGram = totalKyat * 16.606;
    return new MetricWeight(totalGram);
}