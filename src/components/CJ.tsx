import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export function CJ(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <div className={props.className}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 173"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        {...props}
      >
        <g
          transform="translate(0.000000,173.000000) scale(0.050000,-0.050000)"
          fill="currentColor"
          stroke="2"
        >
          <path
            d="M1995 3204 c-14 -32 -127 -235 -253 -451 l-227 -393 -465 0 -465 0 0
-81 0 -81 418 6 c229 3 417 -2 417 -11 0 -9 -17 -41 -37 -70 -20 -29 -67 -109
-104 -178 l-68 -125 -566 0 -565 0 0 -90 0 -90 567 7 567 6 47 -91 c26 -51 72
-130 103 -176 31 -46 56 -88 56 -95 0 -6 -187 -11 -415 -11 l-416 0 0 -80 c0
-44 5 -81 11 -82 5 -1 216 -4 468 -6 l458 -5 32 -62 c17 -35 63 -115 100 -179
38 -64 85 -145 105 -181 20 -36 56 -99 80 -140 23 -41 74 -131 112 -200 79
-144 69 -138 146 -81 71 52 72 62 14 143 -25 35 -143 234 -263 443 -120 209
-247 430 -282 490 -35 61 -102 175 -147 255 l-83 145 193 335 c107 184 224
387 260 450 180 309 215 370 251 435 22 39 59 101 81 138 41 66 41 68 3 96
-92 69 -106 70 -133 10z"
          />
          <path
            d="M3805 3221 c-25 -21 -56 -41 -69 -46 -16 -5 -7 -31 25 -76 27 -38 59
-87 71 -109 12 -22 57 -98 98 -170 42 -71 96 -166 121 -210 24 -44 76 -134
116 -200 39 -66 99 -169 132 -230 34 -60 105 -186 159 -279 l98 -169 -68 -106
c-37 -59 -68 -110 -68 -114 0 -6 -43 -81 -378 -659 -95 -163 -191 -330 -214
-372 -23 -41 -56 -96 -74 -121 -32 -46 -31 -49 38 -95 39 -27 74 -46 76 -42 6
7 141 246 257 454 33 60 101 180 152 267 l93 160 465 3 465 3 0 85 0 85 -410
0 c-225 0 -410 5 -410 11 0 7 47 92 105 189 l105 177 565 -11 565 -11 0 92 0
93 -567 0 -567 0 -22 45 c-41 80 -113 204 -149 254 -63 90 -57 91 375 85 l410
-6 0 81 0 80 -465 6 -465 5 -44 80 c-76 136 -134 239 -155 274 -12 18 -84 146
-161 284 -77 138 -144 251 -150 251 -5 0 -30 -17 -55 -38z"
          />
          <path
            d="M2596 2404 c-47 -63 -98 -138 -113 -167 -15 -29 -54 -82 -86 -117
-32 -35 -71 -94 -86 -132 -16 -37 -38 -68 -50 -68 -12 0 -21 -18 -21 -40 0
-22 -8 -40 -17 -40 -9 0 -27 -24 -40 -52 -26 -57 -25 -60 87 -176 33 -35 74
-84 90 -111 17 -26 104 -141 195 -255 91 -114 165 -214 165 -224 0 -22 205
-24 241 -2 51 32 -218 417 -497 712 -25 26 33 143 81 165 8 3 15 17 15 31 0
23 94 161 160 235 54 62 80 95 80 105 0 6 22 34 49 63 57 61 51 89 -24 125
-143 70 -137 71 -229 -52z"
          />
          <path
            d="M3394 2207 c-14 -333 -6 -541 26 -696 35 -169 5 -175 -170 -37 -131
104 -173 106 -216 9 -58 -131 -27 -172 256 -333 55 -31 106 -66 114 -78 8 -12
31 -23 50 -23 20 -1 60 -13 88 -27 87 -43 208 102 141 168 -12 12 -19 96 -30
334 -5 107 -15 203 -21 214 -7 10 -4 25 7 32 23 14 28 627 5 663 -8 13 -64 29
-126 37 l-112 14 -12 -277z"
          />
        </g>
      </svg>
    </div>
  );
}

export function Jakeer() {
  return <UnstyledLink href="/">{'< Jakeer />'}</UnstyledLink>;
}
