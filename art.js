const productData = [
 {name:'Vannamei Shrimp',category:'shrimp',desc:'Frozen whiteleg shrimp, with size and packing confirmed to order.',art:'shrimp'},
 {name:'Black Tiger Prawns',category:'shrimp',desc:'Selected tiger prawns for agreed buyer specifications.',art:'tiger'},
 {name:'Sea Pink Shrimp',category:'shrimp',desc:'Sea-caught variety, subject to seasonal availability.',art:'shrimp'},
 {name:'Sea Brown Shrimp',category:'shrimp',desc:'Product form and grade discussed for each enquiry.',art:'tiger'},
 {name:'Karikadi Shrimp',category:'shrimp',desc:'Indian shrimp variety with current availability confirmed on request.',art:'shrimp'},
 {name:'Poovalan Shrimp',category:'shrimp',desc:'Indian shrimp variety, packed to agreed requirements.',art:'shrimp'},
 {name:'Ribbon Fish',category:'fish',desc:'Ribbon fish for frozen seafood trade.',art:'ribbon'},
 {name:'Silver Pomfret',category:'fish',desc:'Pomfret sourced to agreed grade and specification.',art:'fish'},
 {name:'Black Pomfret',category:'fish',desc:'Availability and sizing confirmed against buyer requirements.',art:'fish'},
 {name:'Kingfish',category:'fish',desc:'Marine fish category for buyer-specific enquiries.',art:'fish'},
 {name:'Indian Mackerel',category:'fish',desc:'Commonly traded Indian marine fish, subject to availability.',art:'mackerel'},
 {name:'Horse Mackerel',category:'fish',desc:'Product details and packing confirmed for each order.',art:'mackerel'},
 {name:'Croaker',category:'fish',desc:'Selected croaker varieties, subject to supply.',art:'fish'},
 {name:'Sole Fish',category:'fish',desc:'Frozen sole fish for agreed market requirements.',art:'fish'},
 {name:'Flower Shrimp',category:'shrimp',desc:'Species naming and exact specification confirmed at enquiry.',art:'shrimp'},
 {name:'Freshwater Scampi',category:'shrimp',desc:'Scampi sourcing subject to size, grade and availability.',art:'tiger'},
 {name:'Squid',category:'cephalopod',desc:'Squid product forms and packing agreed per enquiry.',art:'squid'},
 {name:'Cuttlefish',category:'cephalopod',desc:'Frozen cuttlefish with product specifications confirmed to order.',art:'squid'},
 {name:'Octopus',category:'cephalopod',desc:'Octopus product options subject to sourcing and season.',art:'octopus'},
 {name:'Yellow Croaker',category:'fish',desc:'Product size and availability confirmed on request.',art:'fish'},
 {name:'Silver Croaker',category:'fish',desc:'Frozen fish product sourced to agreed requirements.',art:'fish'}
];

function seafoodSvg(type) {
 const common = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" role="img" aria-label="Original seafood illustration"';
 const bg = '<defs><linearGradient id="sea" x2="0" y2="1"><stop stop-color="#e4efec"/><stop offset="1" stop-color="#b7d0ce"/></linearGradient><linearGradient id="body" x2="1" y2="1"><stop stop-color="#f5e4c9"/><stop offset=".55" stop-color="#d7a97f"/><stop offset="1" stop-color="#96684f"/></linearGradient></defs><rect width="400" height="260" fill="url(#sea)"/><g fill="#fff" opacity=".65"><circle cx="30" cy="40" r="5"/><circle cx="355" cy="30" r="8"/><circle cx="332" cy="218" r="4"/><circle cx="64" cy="210" r="7"/><circle cx="180" cy="20" r="4"/></g>';
 let shape='';
 if(type==='shrimp'||type==='tiger') shape='<g transform="translate(68 20) rotate(-8 130 110)" stroke="#8b6655" stroke-width="2"><path d="M45 148 C15 118 26 75 66 57 C102 40 133 64 142 90 C153 118 127 145 98 143 C73 142 64 122 79 106 C91 94 110 99 112 112" fill="url(#body)"/><path d="M43 145l-22 15 7-25M49 149l-13 22 20-10M60 149l-4 23 17-20" fill="#c28d6b"/><path d="M74 63l-2 74M91 58l-4 83M108 66l-5 74M124 80l-8 54" fill="none"/><path d="M42 88Q15 70 10 46M45 83Q30 55 32 39" fill="none" stroke-width="3"/><circle cx="53" cy="66" r="4" fill="#12303a"/><path d="M138 91q40-5 55 26" fill="none" stroke-width="5"/></g>';
 else if(type==='fish'||type==='mackerel'||type==='ribbon') shape='<g transform="translate(30 48)"><path d="M36 78 C92 20 217 18 302 78 C220 138 92 136 36 78Z" fill="#779b9e" stroke="#355f69" stroke-width="3"/><path d="M300 78l52-44-5 44 5 44Z" fill="#557f84" stroke="#355f69" stroke-width="3"/><path d="M105 40l26-26 27 28M125 116l30 22 25-25" fill="#557f84" stroke="#355f69" stroke-width="2"/><path d="M58 78q100-45 214 0q-110 50-214 0" fill="#c4d9d7" opacity=".85"/><path d="M90 47l22 61M125 38l22 77M160 34l22 83M195 38l22 76M230 49l20 56" stroke="#72969a" stroke-width="3" opacity=".8"/><circle cx="63" cy="70" r="6" fill="#102f39"/><circle cx="65" cy="68" r="2" fill="#fff"/><path d="M42 91q14 8 27 0" fill="none" stroke="#355f69" stroke-width="2"/></g>';
 else if(type==='squid') shape='<g transform="translate(100 18)"><path d="M90 25C42 30 27 78 42 121C53 153 75 170 91 170C112 170 132 150 141 121C156 78 139 30 90 25Z" fill="#f0e1d2" stroke="#987d75" stroke-width="3"/><path d="M52 121Q15 169 34 205Q60 192 71 155M70 151Q57 206 82 219Q98 192 92 158M105 155Q111 205 137 216Q151 183 125 146M130 127Q173 170 156 198Q132 186 119 152" fill="#d0b2a5" stroke="#987d75" stroke-width="3"/><circle cx="68" cy="102" r="5" fill="#12303a"/><circle cx="110" cy="102" r="5" fill="#12303a"/><path d="M79 122q12 9 24 0" fill="none" stroke="#987d75" stroke-width="3"/></g>';
 else shape='<g transform="translate(70 35)" fill="#b98d8d" stroke="#805f6b" stroke-width="3"><path d="M105 92C58 41 20 79 48 112C7 133 42 178 81 147C101 188 149 171 141 134C180 157 205 118 174 99C197 62 157 42 130 76Z"/><path d="M102 99C88 61 118 35 142 59C161 78 139 94 124 86" fill="none" stroke-width="16" stroke-linecap="round"/><path d="M79 120q-35 13-22 42M113 132q-5 35 25 36M141 116q33 3 37 30" fill="none" stroke-width="17" stroke-linecap="round"/><g fill="#f4e5dc" stroke="none"><circle cx="91" cy="111" r="5"/><circle cx="76" cy="129" r="5"/><circle cx="119" cy="148" r="5"/><circle cx="149" cy="123" r="5"/><circle cx="139" cy="78" r="5"/></g></g>';
 return `<svg ${common}>${bg}${shape}<text x="18" y="240" fill="#315c63" font-family="Arial,sans-serif" font-size="10" letter-spacing="3">AGRISEAFOODS · SEAFOOD RANGE</text></svg>`;
}
