<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" :width="props.width" :height="props.height"
    viewBox="0 0 1272 1280" preserveAspectRatio="xMidYMid meet" @click="emit('onClick', data)"
    style="cursor: pointer; z-index: 0">
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>
    <g transform="translate(0,1280) scale(0.1,-0.1)" :fill="color" stroke="none">
      <path
        d="M10513 12790 c-106 -15 -253 -59 -348 -104 -132 -62 -227 -128 -340 -236 -242 -230 -818 -808 -831 -833 -8 -15 -12 -36 -9 -46 3 -10 566 -577 1250 -1260 1054 -1051 1249 -1241 1272 -1241 24 0 100 73 483 457 322 323 471 480 508 534 96 141 160 290 199 461 23 102 23 384 0 486 -39 170 -111 333 -207 472 -72 102 -963 994 -1079 1080 -121 88 -281 164 -426 201 -100 25 -145 31 -265 34 -80 2 -173 0 -207 -5z" />
      <path
        d="M8744 11367 c-12 -7 -1662 -1650 -3668 -3651 -2968 -2963 -3646 -3644 -3646 -3665 0 -21 237 -263 1248 -1274 1103 -1103 1252 -1248 1275 -1245 31 3 -117 -143 4360 4326 2493 2490 2977 2977 2977 3000 0 23 -206 233 -1242 1269 -684 682 -1252 1244 -1263 1247 -11 3 -30 0 -41 -7z" />
      <path
        d="M1197 3842 c-16 -18 -56 -141 -457 -1417 -105 -335 -231 -736 -280 -890 -422 -1336 -462 -1469 -454 -1494 21 -59 -14 -70 1125 332 585 206 1412 498 1838 648 826 291 803 281 788 341 -4 14 -523 538 -1251 1261 -972 967 -1249 1237 -1268 1237 -14 0 -32 -8 -41 -18z" />
    </g>
  </svg>
</template>
<script lang="ts" setup>
import { basicPropsSvg } from '../../../../interfaces/main';
const props = defineProps<basicPropsSvg>()

const emit = defineEmits(['onClick'])
</script>
<style lang="less" scoped></style>
