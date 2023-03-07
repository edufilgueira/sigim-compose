<template>
  <div id="colors" class="w-auto">
    <div id="red" class="flex flex-wrap">
      <div :class="[circle, bgCarmesim]">
        <div class="text-white font-semibold">bg-carmesim</div>
        <div class="text-white font-semibold">#DE5262</div>
      </div>

      <div :class="[circle, bgCarmesimHover]">
        <div class="text-white font-semibold">bg-carmesim-hover</div>
        <div class="text-white font-semibold">#C13C4B</div>
      </div>
    </div>

    <div id="yellow" class="flex flex-wrap mt-3">
      <div :class="[circle, bgBurnedYellow]">
        <div class="text-white font-semibold">bg-burnedYellow</div>
        <div class="text-white font-semibold">#FC6735</div>
      </div>

      <div :class="[circle, bgBurnedYellowClassic]">
        <div class="text-white font-semibold">bg-burnedYellow-classic</div>
        <div class="text-white font-semibold">#FFA200</div>
      </div>

      <div :class="[circle, bgBurnedYellowHover]">
        <div class="text-white font-semibold">bg-burnedYellow-hover</div>
        <div class="text-white font-semibold">#E6673E</div>
      </div>
    </div>

    <div id="green" class="flex flex-wrap mt-3">
      <div :class="[circle, bgHerbal]">
        <div class="text-white font-semibold">bg-herbal</div>
        <div class="text-white font-semibold">#2E8536</div>
      </div>

      <div :class="[circle, bgHerbalClassic]">
        <div class="text-white font-semibold">bg-herbal-classic</div>
        <div class="text-white font-semibold">#00CE7B</div>
      </div>

      <div :class="[circle, bgHerbalHover]">
        <div class="text-white font-semibold">bg-herbal-hover</div>
        <div class="text-white font-semibold">#1B6021</div>
      </div>
    </div>

    <div id="purple" class="flex flex-wrap mt-3">
      <div :class="[circle, purple]">
        <div class="text-white font-semibold">bg-purple</div>
        <div class="text-white font-semibold">#62006a</div>
      </div>

      <div :class="[circle, purpleClassic]">
        <div class="text-white font-semibold">bg-purple-classic</div>
        <div class="text-white font-semibold">#723277</div>
      </div>

      <div :class="[circle, purpleHover]">
        <div class="text-white font-semibold">bg-purple-hover</div>
        <div class="text-white font-semibold">#984f9e</div>
      </div>

      <div :class="[circle, purpleDark]">
        <div class="text-white font-semibold">bg-purple-dark</div>
        <div class="text-white font-semibold">#4f0056</div>
      </div>
    </div>

    <div id="ashes" class="flex flex-wrap mt-3">
      <div :class="[circle, bgAshesClassic]">
        <div class="text-ashes-dark font-semibold">bg-ashes-classic</div>
        <div class="text-ashes-dark font-semibold">#F6F6F6</div>
      </div>

      <div :class="[circle, bgAshes]">
        <div class="text-ashes-dark font-semibold">bg-ashes</div>
        <div class="text-ashes-dark font-semibold">#E8E8E8</div>
      </div>

      <div :class="[circle, bgAshesHover]">
        <div class="text-white font-semibold">bg-ashes-hover</div>
        <div class="text-white font-semibold">#CECECE</div>
      </div>

      <div :class="[circle, bgAshesDark]">
        <div class="text-white font-semibold">bg-ashes-dark</div>
        <div class="text-white font-semibold">#808080</div>
      </div>
    </div>

    <div id="black" class="flex flex-wrap mt-3">
      <div :class="[circle, bgQuantum]">
        <div class="text-white font-semibold">bg-quantum</div>
        <div class="text-white font-semibold">#404040</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    circle() {
      return {
        "text-xs": true,
        "rounded-full": true,
        "h-40": true,
        "w-40": true,
        "font-system": true,
        flex: true,
        "items-center": true,
        "justify-center": true,
        "flex-col": true,
        "ml-5": true,
      };
    },
    bgHerbal: () => ({ "bg-herbal": true }),
    bgHerbalClassic: () => ({ "bg-herbal-classic": true }),
    bgHerbalHover: () => ({ "bg-herbal-hover": true }),
    bgBurnedYellow: () => ({ "bg-burnedYellow": true }),
    bgBurnedYellowClassic: () => ({ "bg-burnedYellow-classic": true }),
    bgBurnedYellowHover: () => ({ "bg-burnedYellow-hover": true }),
    bgCarmesim: () => ({ "bg-carmesim": true }),
    bgCarmesimHover: () => ({ "bg-carmesim-hover": true }),
    bgAshes: () => ({ "bg-ashes": true }),
    bgAshesClassic: () => ({ "bg-ashes-classic": true }),
    bgAshesHover: () => ({ "bg-ashes-hover": true }),
    bgAshesDark: () => ({ "bg-ashes-dark": true }),
    bgQuantum: () => ({ "bg-quantum": true }),
    bgPurple: () => ({ "bg-purple": true }),
    bgPurpleClassic: () => ({ "bg-purple-classic": true }),
    bgPurpleHover: () => ({ "bg-purple-hover": true }),
    bgPurpleDark: () => ({ "bg-purple-dark": true }),
  },
};
</script>
