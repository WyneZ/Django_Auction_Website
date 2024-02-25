"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[12058],{897328:e=>{var n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AdReasonsModalContainer_pin",selections:[{alias:null,args:null,concreteType:"AdTargetingAttribution",kind:"LinkedField",name:"adTargetingAttribution",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isCustomerListMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isShoppingRetargetingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActalikeMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEngagementMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isExpandTargetingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isFromGpsLocation",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVisitorMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isShoppingProspectingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPlPersonaMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedAgeBucket",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedLocale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedInterest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedGender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedDevice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoRegion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoPostalCode",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAdvertiserName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAttributionName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPromotedPartnership",storageKey:null}],type:"Pin",abstractKey:null};n.hash="ee7db6c842dc59bc7c3fde7a6b1774cf",e.exports=n},827896:(e,n,a)=>{a.d(n,{Z:()=>l});var o=a(616550),t=a(768559),i=a(350118);function l(){let e=(0,i.S6)(),n=(0,o.useLocation)();return(a,o)=>{let i;let l=e(a);if(null!=o&&o.shouldTrackForPrevLocation){let e=(null==l?void 0:l.tracking_params_map)||{},n=Object.keys(e),a=n.find(e=>"PinResource"!==e);l&&(i=a?e[a]:e.PinResource)}else if(l){var s,_;i=(0,t.Z)({boardUrl:null===(s=l.board)||void 0===s?void 0:s.url,location:n,pinId:l.id,pinnerUserName:null===(_=l.pinner)||void 0===_?void 0:_.username,storyPinDataId:l.story_pin_data_id,trackingParams:l.tracking_params,trackingParamsMap:l.tracking_params_map})}return i}}},915446:(e,n,a)=>{a.d(n,{Z:()=>t});let o={REPIN_BOARD:1,USER_ACTIVITY:4,CLICKTHROUGH:9,FRESH_REPIN_BOARD:47,FRESH_CLICKTHROUGH:48,FRESH_USER_ACTIVITY:49,LOCAL_REPIN_BOARD:13,LOCAL_CLICKTHROUGH:32,LOCAL_USER_ACTIVITY:33,P2P_CLICKTHROUGH:28,INSTANT_PFY_NON_MATERIALIZABLE:36,FOLLOWED_INTEREST:5,TOPIC_BEST_PINS:70,EMBEDDING_BASED_BEST_PINS:173,RECOMMENDED_TOPICS:65,RECOMMENDED_GEO_INTERESTS:192,USER_SEQUENCE_INTERESTS_PINS:193,U2I_DNN_INTERESTS_PINS:196,PINNERSAGE_INTERESTS_PINS:197,GRAPHSAGE_USER_EMBEDDINGS_TO_ORGANIC_PINS:109,NAVBOOST_PFY:89,NAVBOOST_P2P:88,NOTIFICATION_NEWS_HUB:138,GEMINI_INTERESTS_FRESH:104,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN:100,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN_ENGAGEMENT:175,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_VIDEO:95,INTENTIONAL_DISTRIBUTION_DOMAIN:86,INTENTIONAL_DISTRIBUTION_TOPICS_STORY_PINS:91,INTENTIONAL_DISTRIBUTION_TOPICS_VIDEO:98,GRAPHSAGE_MULTI_PINS_TO_CREATOR_PINS_REALTIME:135,GRAPHSAGE_MULTI_PINS_TO_VIDEO_PINS_REALTIME:139,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS_REALTIME:140,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGEED_INTERESTS_VIDEO:118,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGED_INTERESTS_STORY_PIN:130,CREATOR_DIRECT_INJECT:148,USER_INTERESTS_TO_LONGTERM_CREATOR_PINS:141,GRAPHSAGE_PRODUCT_PINS:97,GRAPHSAGE_TML_PRODUCT_PINS:212,GRAPHSAGE_USER_EMBEDDINGS_TO_PINS:108,PROMOTED_PIN:15,UNKNOWN:0,RECOMMENDED_CATEGORY:2,COOKIE_MONSTER:3,REALTIME_P2B:6,REALTIME_P2B_CLOSEUP:22,RECOMMENDED_INTEREST:7,VISUALLY_SIMILAR:8,BOARD_FOLLOW:35,USER_FOLLOW:45,RECOMMENDED_COMMERCE:10,EVERYTHING_FEED:11,RECOMMENDED_LOCAL_PIN:12,SEARCH:46,P2P_USER_COMMERCE:16,COMMERCE_EDUCATION:17,LANDING_PAGE_PINS:18,FOLLOWING_FEED:19,POPULAR_FEED:20,P2P_DYNAMIC_GRID:23,LANDING_PAGE_INTEREST_PINS:24,FRESH_PIN_FROM_PIN:25,FRESH_PIN_FROM_INTEREST:26,FRESH_PIN_FROM_BOARD:27,SIFTER_VIDEO_FROM_INTEREST:39,SIFTER_PRODUCTS:57,SIFTER_DISTRIBUTION_A:50,SIFTER_DISTRIBUTION_B:51,SIFTER_DISTRIBUTION_C:52,SIFTER_DISTRIBUTION_D:53,SIFTER_DISTRIBUTION_E:54,SIFTER_ACTIVATION_EXPERIMENT:58,SIFTER_FRESHMAKER_PIN_FROM_INTEREST:40,P2P_CLOSEUP:29,P2P_LIKE:30,P2P_PIN_CREATE:31,INSTANT_PFY:34,DYNAMIC_INSERTION:37,DYNAMIC_INSERTION_BOARD_FOLLOW:38,HYPERLOCAL_INTEREST_BOARD:41,NUX_BOARD_FOLLOW_P2P:42,INDIRECT_DOMAIN_PIN:43,PIXIE_PINS_FOR_BOARD:44,SCREENSHOT_SAVE:55,TEXT_EMBEDDINGS:56,FRESH_TEXT_EMBEDDINGS:67,PREFETCH_LOAD:60,DIVERSE_TOPICS:62,QUIZ_RESULTS:63,INTENTIONAL_DISTRIBUTION_TOPICS:64,INTENTIONAL_DISTRIBUTION_TOPICS_THIRD_PARTY:90,INTENTIONAL_DISTRIBUTION_GEMINI:73,INTENTIONAL_DISTRIBUTION_GEMINI_V5:120,INTENTIONAL_DISTRIBUTION_SHOP_STYLE_STL:74,INTENTIONAL_DISTRIBUTION_GRAPHSAGE:78,INTENTIONAL_DISTRIBUTION_REPIN_BOARD:80,INTENTIONAL_DISTRIBUTION_CLICKTHROUGH:81,INTENTIONAL_DISTRIBUTION_USER_ACTIVITY:82,INTENTIONAL_DISTRIBUTION_CREATOR_BASELINE:92,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS:102,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_STORY_PIN:103,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_DIVERSITY:105,PIXIE_RECENT_ACTION:66,NATIVE_CONTENT_TOPICS:68,BUBBLE_OPEN_TOPICS:69,TOPIC_BEST_PINS_V2:77,DAILY_BEST_PINS:79,TOPIC_BEST_PINS_V3:101,TOPIC_BEST_STORY_PINS:164,REC_SEQ_STORY_PIN_CLS:165,DARK_PROMOTED_PIN:71,POST_EXPLORE_TOPICS:72,GRAPHSAGE_EMBEDDINGS:75,DEMOGRAPHIC_PFY:76,SHOPPING_STL:83,UNAUTH_PIXIE_P2B:84,UNAUTH_PIXIE_P2P:85,VIDEO_EMBEDDINGS:87,VIDEO_EMBEDDINGS_GEMINI_V5:121,GEMINI_V5_EMBEDDINGS_STATIC:93,GEMINI_V5_EMBEDDINGS_FRESH:94,GEMINI_V5_EMBEDDINGS_REALTIME:106,GEMINI_V5_EMBEDDINGS_STORYPIN:107,CURATED_VIDEO_INTEREST:96,GRAPHSAGE_PRODUCT_PINS_LONGER_HISTORY:112,GRAPHSAGE_SHOPPABLE_INSPIRATION:126,GRAPHSAGE_PRODUCT_PINS_EXPERIMENTAL:134,NUX_GRAPHSAGE:99,GRAPHSAGE_USER_EMBEDDINGS_TO_PRODUCT_PINS:110,GRAPHSAGE_VIDEO_PINS:113,RECBOOST_REPIN_BOARD:114,RECBOOST_CLICKTHROUGH:115,RECBOOST_USER_ACTIVITY:116,RECBOOST_CREATOR_BOARDS:129,RECOMMENDED_BOARDS:117,RECOMMENDED_ANNOTATION_BOARDS:136,RECOMMENDED_GRAPHSAGE_BOARDS:153,INTENTIONAL_DISTRIBUTION_RECOMMENDED_GRAPHSAGE_BOARDS:191,RECOMMENDED_CREATOR_BOARDS:124,ANNOTATION_REC_CREATOR_BOARDS:127,INTENTIONAL_DISTRIBUTION_MANUAL_INTERESTS_VIDEO:119,INTENTIONAL_DISTRIBUTION_INTERESTS_VIDEO:143,INTENTIONAL_DISTRIBUTION_INTERESTS_STORY_PIN:144,REPIN_CREATOR_BOARD:122,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS:123,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS_REALTIME:131,FRESH_SIG_FROM_BOARD:125,RECENT_ENGAGED_CREATOR_BOARDS:128,RECENT_ENGAGED_BOARDS:132,SHOPPING_CREATOR_REALTIME:133,GRAPHSAGE_BASED_RECOMMENDED_CREATOR_BOARDS:137,PIXIE_P2P:142,NEW_USE_CASE_PINS:145,RECBOOST_NEW_USE_CASES:146,SEARCHSAGE_PFY:147,SEARCHSAGE_SHOPPING_PFY:155,INTEREST_EXPLORATION:149,INTEREST_EXPLORATION_TRENDY_QUERIES:150,INTEREST_EXPLORATION_RELATED_INTERESTS:151,RECBOOST_INTERESTS:152,HF_STORY_SHOPPING_RETARGETING:154,RECBOOST_STORY_PINS:156,RECBOOST_STORY_BOARDS:157,PINNABILITY_EMBEDDINGS:158,PINNABILITY_FRESH_STORY_EMBEDDINGS:159,PINNABILITY_STORY_EMBEDDINGS:160,PINNABILITY_PRODUCT_PIN_EMBEDDINGS:195,PINNABILITY_FRESH_PRODUCT_PIN_EMBEDDINGS:209,PINNABILITY_TML_PRODUCT_PIN_EMBEDDINGS:213,PINNABILITY_MULTI_EMBEDDINGS:210,EXPLORATION_STORY_PINS:161,EXPLORATION_STORY_PINS_BASELINE:162,EXPLOITATION_STORY_PINS:163,ANNOTATION_REC_CREATOR_STORY_PINS:166,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS:167,IDEASTREAM_GRAPHSAGE_STORY_PINS:168,HF_EDUCATION_PIN_INSERTION:169,RP_EDUCATION_PIN_INSERTION:170,USER_TO_CREATOR_STORY_PINS:171,USER_TO_CREATOR_STORY_PINS_ENGAGEMENT:176,COENGAGEMENT_STORY_PINS:172,ANNOTATION_STORY_PINS:177,DISCOVER_STREAM_DEMOGRAPHIC_FALLBACK:178,DISCOVER_STREAM_CELEBRITY:179,GRAPHSAGE_SHOPIFY_VMP_PRODUCT_PINS:180,CREATOR_BEST_IDEA_PINS:181,INTEREST_BEST_IDEA_PINS:182,NAVBOOST_STORY_PINS:183,SHOPPING_DISTRIBUTION_PINS:185,WATCH_TAB_EHQ_STORIES:186,NOTIF_LEARNED_RETRIEVAL:187,NOTIF_DIRECT_INJECT:207,LANDING_PAGE_PIN_RECOMMENDATIONS:188,PINNERSAGE_LEARNED_EMBEDDINGS:189,RECGPT_CG_USER_TO_PINS:206,TOPIC_FEED:190,ORGANIC_COENGAGEMENT:211,RTC_IMPROVEMENT_TEST_1:501,RTC_IMPROVEMENT_TEST_2:502,RTC_IMPROVEMENT_TEST_3:503,RTC_IMPROVEMENT_TEST_4:504,RTC_IMPROVEMENT_TEST_5:505,RTC_IMPROVEMENT_TEST_6:506,RTC_IMPROVEMENT_TEST_7:507,RTC_IMPROVEMENT_TEST_8:508,RTC_IMPROVEMENT_TEST_9:509,RTC_IMPROVEMENT_TEST_10:510,RTC_IMPROVEMENT_TEST_11:511,RTC_IMPROVEMENT_TEST_12:512,RTC_IMPROVEMENT_TEST_13:513,RTC_IMPROVEMENT_TEST_14:514,RTC_IMPROVEMENT_TEST_15:515,RTC_BLENDER_TEST:516,P2P_COMMERCE:21,P2P:14,LENS_CAMERA_VISUALLY_SIMILAR:111,RECENT_FOLLOWED_INTEREST:59,RECENT_FOLLOWED_BOARD:61,GRAPHSAGE_SHOPIFY_VMP_MERCHANT_ACTIVATION_PRODUCT_PINS:174,FOLLOWED_INTEREST_SEO_BESPIN_EXPORATION:184,XPIXIE_TO_PRODUCT_PINS:194,SHOPPING_RECENTLY_VIEWED_MODULE_PINS:198,SHOPPING_RECENTLY_SAVED_MODULE_PINS:199,SHOPPING_BEST_SELLING_RECOMMENDED_BRAND_MODULE_PINS:200,SHOPPING_SHOP_THE_BOARD_MODULE_PINS:203,SHOPPING_ON_SALE_MODULE_PINS:204,SHOPPING_PRODUCT_CATEGORY_BASED_MODULE_PINS:205,SHOPPING_SHOP_SEARCH_MODULE_PINS:208,RECENTLY_VIEWED_ORGANIC_MODULE_PINS:201,RECENTLY_SAVED_ORGANIC_MODULE_PINS:202};function t({feedbackData:e,feedbackType:n,pinId:a,pinFeedbackType:t,recommendationReason:i,complaintReason:l,clientTrackingParams:s,isThirdPartyAd:_}){var r,c,d;switch(n){case"search":return{action:"unrelatedSearchPin",actionOptions:{query:null==e?void 0:e.query,pin_id:a}};case"related":return{action:"relatedPinHide",actionOptions:{pin:a}};case"newsHub":return{action:"newsHubPinHide",actionOptions:{pinId:a,newsId:null==e?void 0:e.newsId}};default:let E="promoted"===n,I=(d=null==i?void 0:i.reason)&&o[d],T=null!==(r=null==i?void 0:i.reasonId)&&void 0!==r?r:null==i?void 0:null===(c=i.board)||void 0===c?void 0:c.entityId,R={complaint_reason:l||0,pin_id:a,feedback_type:t||1,promoted:E};return I&&(R.recommendation_reason_id=I),T&&(R.through_id=T),null!=i&&i.throughProperties&&(R.through_properties=i.throughProperties.reduce((e,n)=>{let{key:a,data:o}=n;return a&&(e[a]=[...e[a]||[],...o||[]]),e},{})),s&&(R.client_tracking_params=s),_&&(R.is_third_party_ad=_),{action:E?"promotedComplaint":"complaint",actionOptions:R}}}},567316:(e,n,a)=>{a.d(n,{ZP:()=>L,we:()=>C,nn:()=>D,zn:()=>M});var o,t=a(667294);a(167912);var i=a(407043),l=a(916117),s=a(780280),_=a(784590),r=a(19121),c=a(883119),d=a(121151),E=a(898781),I=a(349700),T=a(966113),R=a(170168),A=a(785893);function P({iconAccessibilityLabel:e,icon:n,linkAccessibilityLabel:a,showNavigationIcon:o,text:t}){return(0,A.jsxs)(c.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,A.jsx)(c.xu,{"data-test-id":"ad-reason-icon",children:(0,A.jsx)(c.Sj,{accessibilityLabel:e,bgColor:"lightGray",icon:n,iconColor:"darkGray"})}),(0,A.jsx)(c.xu,{alignSelf:"center","data-test-id":"ad-location-targeting-reason",height:"100%",marginStart:2,children:(0,A.jsx)(c.xv,{children:t})}),o&&a&&(0,A.jsx)(c.kC,{direction:"column",justifyContent:"center",children:(0,A.jsx)(c.JO,{accessibilityLabel:a,color:"default",icon:"arrow-forward"})})]})}var N=a(698330);function S({brandName:e,language:n,geoRegion:a,geoPostalCode:o,ageBucketMatch:t,localeMatch:i,interestMatch:l,genderMatch:s,deviceMatch:_,isCustomerListMatched:d,isShoppingTargetingRematched:T,isActAlikeMatched:R,isEngagementMatched:S,isExpandTargetingMatched:p,isFromGPSLocation:g,isVisitorMatched:m,isShoppingProspectingMatched:O,isPlPersonaMatched:h,gender:u,device:M}){var D;let C=(0,E.ZP)(),{id:L}=(0,r.Z)(),v=(0,N.mN)()(null!=L?L:""),x=null!==(D=null==v?void 0:v.gender)&&void 0!==D?D:"";return(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons",children:(0,A.jsxs)(c.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[""!==t&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting age bucket", "Icon for ad targeting age bucket", "app.common.react.components.PinRep.components.AdReasons.ageIcon", undefined, true),icon:"person",text:(0,I.nk)(C.bt("Age {{ ageBucketMatch }}", "Age {{ ageBucketMatch }}", "app.common.react.components.PinRep.components.AdReasonsModal.ageBucketMatch", undefined, true),{ageBucketMatch:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:t},"ad-reasons-age-bucket")})}),""!==s&&"unspecified"!==x&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting gender", "Icon for ad targeting gender", "app.common.react.components.PinRep.components.AdReasons.genderIcon", undefined, true),icon:"person",text:(0,I.nk)(C.bt("{{ gender }}", "{{ gender }}", "app.common.react.components.PinRep.components.AdReasonsModal.genderMatch", undefined, true),{gender:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:u},"ad-reasons-gender")})}),""!==a&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting location", "Icon for ad targeting location", "app.common.react.components.PinRep.components.AdReasons.locationIcon", undefined, true),icon:"location",text:(0,I.nk)(C.bt("Based in {{geoRegion}}", "Based in {{geoRegion}}", "app.common.react.components.PinRep.components.AdReasonsModal.locationTargeting", undefined, true),{geoRegion:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:a},"ad-reasons-country-name")})}),""!==o&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting location", "Icon for ad targeting location", "app.common.react.components.PinRep.components.AdReasons.locationIcon", undefined, true),icon:"location",text:(0,I.nk)(C.bt("Based in {{geoPostalCode}}", "Based in {{geoPostalCode}}", "app.common.react.components.PinRep.components.AdReasonsModal.locationTargeting", undefined, true),{geoPostalCode:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:o},"ad-reasons-country-name")})}),""!==i&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting locale", "Icon for ad targeting locale", "app.common.react.components.PinRep.components.AdReasons.localeIcon", undefined, true),icon:"globe",text:(0,I.nk)(C.bt("Language: {{ language }}", "Language {{ language }}", "app.common.react.components.PinRep.components.AdReasonsModal.localeMatch", undefined, true),{language:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:n},"ad-reasons-locale")})}),""!==_&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting device", "Icon for ad targeting device", "app.common.react.components.PinRep.components.AdReasons.deviceIcon", undefined, true),icon:"desktop",text:(0,I.nk)(C.bt("Using {{ device }}", "Using {{ device }}", "app.common.react.components.PinRep.components.AdReasonsModal.deviceMatch", undefined, true),{device:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:M},"ad-reasons-device")})}),""!==l&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting interest", "Icon for ad targeting interest", "app.common.react.components.PinRep.components.AdReasons.interestIcon", undefined, true),icon:"heart",text:(0,I.nk)(C.bt("Interested in {{ interestMatch }}", "Interested in {{ interestMatch }}", "app.common.react.components.PinRep.components.AdReasonsModal.interestMatch", undefined, true),{interestMatch:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:l},"ad-reasons-interest")})}),T&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on an audience list", "Icon for ad targeting user on an audience list", "app.common.react.components.PinRep.components.AdReasons.shoppingTargeting", undefined, true),icon:"history",text:(0,I.nk)(C.bt("Interacted with {{brandName}}", "Interacted with {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.shoppingTargeting", undefined, true),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-shopping-targeting")})}),m&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting customers who interacted with this brand previously, visitor matched", "Icon for ad targeting customers who interacted with this brand previously, visitor matched", "app.common.react.components.PinRep.components.AdReasonsModal.visitorMatchIcon", undefined, true),icon:"history",text:(0,I.nk)(C.bt("Interacted with {{brandName}}", "Interacted with {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.visitorTargetingText", undefined, true),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reason-visitor")})}),d&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on an audience list", "Icon for ad targeting user on an audience list", "app.common.react.components.PinRep.components.AdReasons.listIcon", undefined, true),icon:"menu",text:(0,I.nk)(C.bt("On a list provided by {{brandName}}", "On a list provided by {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.customerListTargeting", undefined, true),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-customer-list")})}),S&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on engagement audience", "Icon for ad targeting user on engagement audience", "app.common.react.components.PinRep.components.AdReasons.engagementIcon", undefined, true),icon:"pin",text:(0,I.nk)(C.bt("Interacted with {{brandName}} on Pinterest", "Interacted with {{brandName}} on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.engagementTargeting", undefined, true),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-engagement")})}),R&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on actalike", "Icon for ad targeting user on act alike", "app.common.react.components.PinRep.components.AdReasons.actAlikeIcon", undefined, true),icon:"graph-bar",text:(0,I.nk)(C.bt("Similar demographic or interest as other {{brandName}} customers", "Similar demographic or interest as other {{brandName}} customers", "app.common.react.components.PinRep.components.AdReasonsModal.", undefined, true),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-act-alike")})}),(p||O||h)&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on expand targeting", "Icon for ad targeting user on expand targeting", "app.common.react.components.PinRep.components.AdReasons.expandTargeting", undefined, true),icon:"pinterest",text:C.bt("Relevant activity on Pinterest", "Relevant activity on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.expandTargeting", undefined, true)}),g&&(0,A.jsx)(P,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on GPS", "Icon for ad targeting user on GPS", "app.common.react.components.PinRep.components.AdReasons.GPS", undefined, true),icon:"location",text:C.bt("GPS location", "GPS Location", "app.common.react.components.PinRep.components.AdReasonsModal.GPS", undefined, true)})]})})}function p({onDismiss:e,brandName:n,userName:a,language:o,geoRegion:t,geoPostalCode:l,ageBucketMatch:s,localeMatch:_,interestMatch:r,genderMatch:P,deviceMatch:N,isCustomerListMatched:p,isShoppingTargetingRematched:g,isActAlikeMatched:m,isEngagementMatched:O,isExpandTargetingMatched:h,isFromGPSLocation:u,isVisitorMatched:C,isShoppingProspectingMatched:L,isPlPersonaMatched:v,thirdPartyAdAttributes:x}){let{logContextEvent:G}=(0,i.v)(),b=(0,E.ZP)(),B=M(P,b),f=D(N,b),U=g||p||O||m||h||u||C||v||L||""!==s||""!==_||""!==r||""!==B||""!==f||""!==t||""!==l,y=R.C0+`/${a}/`;return(0,A.jsx)(d.ZP,{accessibilityModalLabel:b.bt("Why am I seeing this ad?", "Why am I seeing this Ad?", "app.common.react.components.PinRep.components.AdReasonsModal", undefined, true),onDismiss:e,children:(0,A.jsxs)(c.xu,{paddingX:8,paddingY:6,children:[(0,A.jsxs)(c.xu,{display:"flex",justifyContent:"center",marginBottom:6,position:"relative",children:[(0,A.jsx)(c.xu,{position:"absolute",left:!0,children:(0,A.jsx)(c.hU,{accessibilityLabel:b.bt("Close", "Close", "app.common.react.components.PinRep.components.AdReasonsModal.closeModal", undefined, true),icon:"cancel",iconColor:"darkGray",onClick:()=>{G({event_type:102,element:11925,component:13756}),e()},size:"sm"})}),(0,A.jsx)(c.X6,{align:"center",size:"500",children:b.bt("Why you're seeing this ad", "Why you're seeing this ad", "Heading for promoted Pins explanation", undefined, true)})]}),(0,A.jsxs)(c.xu,{children:[(0,A.jsx)(c.kC,{direction:"column",gap:{row:0,column:4},children:U&&(0,A.jsx)(c.xu,{marginBottom:4,"data-test-id":"waista-reason-text",children:(0,A.jsx)(c.xv,{children:null!=x&&x.isEligibleForPromotedPartnership?(0,I.nk)(b.bt("{{ promotedPartnershipAdvertiserName }} is trying to reach specific groups of people through a partnership with {{ promotedPartnershipAttributionName }}. Based on what you've told us (or other information), we think you fit some of those groups:", "{{ promotedPartnershipAdvertiserName }} is trying to reach specific groups of people, through a partnership with {{ promotedPartnershipAttributionName }}. Based on what you've told us or other information, we think you fit some of those groups:", "app.common.react.components.PinRep.components.AdReasonsModal.audienceExplanationWAISTA", undefined, true),{promotedPartnershipAdvertiserName:x.promotedPartnershipAdvertiserName,promotedPartnershipAttributionName:x.promotedPartnershipAttributionName}):(0,I.nk)(b.bt("{{ brandName }} is trying to reach specific groups of people. Based on what you've told us or other information, we think you fit some of those groups:", "{{ brandName }} is trying to reach specific groups of people. Based on what you've told us or other information, we think you fit some of those groups:", "app.common.react.components.PinRep.components.AdReasonsModal.audienceExplanationWAISTA", undefined, true),{brandName:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{href:y,display:"inlineBlock",onClick:()=>{G({event_type:101,component:13756,element:13407})},target:"blank",underline:"hover",children:n})},"ad-reasons-brand-name")})})})}),(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons",children:(0,A.jsxs)(c.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[(0,A.jsx)(S,{brandName:n,language:o,geoRegion:t,geoPostalCode:l,ageBucketMatch:s,localeMatch:_,genderMatch:P,interestMatch:r,deviceMatch:N,isCustomerListMatched:p,isShoppingTargetingRematched:g,isActAlikeMatched:m,isEngagementMatched:O,isExpandTargetingMatched:h,isFromGPSLocation:u,isVisitorMatched:C,isShoppingProspectingMatched:L,isPlPersonaMatched:v,gender:B,device:f}),U&&(0,A.jsx)(c.xu,{marginBottom:1,children:(0,A.jsx)(c.xv,{children:(0,I.nk)(b.bt("If this isn't right, {{ changeUserSettings }}", "If this isn't right, {{ changeUserSettings }}", "app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettingsText", undefined, true),{changeUserSettings:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inline",href:`${R.C0}${T.AHp}`,onClick:()=>{G({event_type:101,component:13756,element:13361})},target:"blank",underline:"hover",children:b.bt("update your personal information", "update your personal information", "app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettings", undefined, true)})},"ad-reasons-change-user-settings")})})})]})}),(0,A.jsxs)(c.kC,{direction:"column",gap:{row:0,column:1},children:[(0,A.jsx)(c.xu,{marginBottom:1,marginTop:1,children:(0,A.jsx)(c.X6,{size:"400",children:b.bt("Ads on Pinterest", "Ads on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.adsOnPinterestHeading", undefined, true)})}),(0,A.jsx)(c.xu,{marginBottom:4,children:(0,A.jsx)(c.xv,{children:(0,I.nk)(b.bt("We show you ads that may be based on your profile settings, websites you visit, ads you interact with or other factors. {{adPreferencesLink}}", "We show you ads that may be based on your profile settings, websites you visit, ads you interact with or other factors. {{adPreferencesLink}}", "app.common.react.components.PinRep.components.AdReasonsModal.adPreferencesText", undefined, true),{adPreferencesLink:(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons-review-ad-preferences",children:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inline",href:`${R.C0}${T.Gxc}`,onClick:()=>{G({event_type:101,component:13756,element:13401})},target:"blank",underline:"hover",children:b.bt("Review your ad preferences", "Review your ad preferences", "app.common.react.components.PinRep.components.AdReasonsModal.adPreferencesLink", undefined, true)})},"ad-reasons-review-ad-preferences")})})})}),(0,A.jsx)(c.xu,{marginBottom:4,children:(0,A.jsx)(c.xv,{children:(0,I.nk)(b.bt("For more about how we collect and use data, {{ privacyPolicyLink }}", "For more about how we collect and use data, {{ privacyPolicyLink }}", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText", undefined, true),{privacyPolicyLink:(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons-privacy-policy",children:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inline",href:T.R_9,onClick:()=>{G({event_type:101,component:13756,element:13402})},target:"blank",underline:"hover",children:b.bt("read our Privacy Policy", "read our Privacy Policy", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyLink", undefined, true)})},"ad-reasons-privacy-policy")})})})}),(0,A.jsx)(c.xu,{marginBottom:4,children:(0,A.jsx)(c.xv,{children:(0,I.nk)(b.bt("To stop seeing content from an advertiser, {{ blockAccounts }}", "To stop seeing content from an advertiser, {{ blockAccounts }}", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText", undefined, true),{blockAccounts:(0,A.jsx)(c.xu,{"data-test-id":"ad-reasons-block-accounts",children:(0,A.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,A.jsx)(c.rU,{display:"inline",href:T.K_Y,onClick:()=>{G({event_type:101,component:13756,element:12058})},target:"blank",underline:"hover",children:b.bt("find out how to block accounts", "learn how to block accounts", "app.common.react.components.PinRep.components.AdReasonsModal.blockAccountLink", undefined, true)})},"ad-reasons-block-accounts")})})})})]})]})]})})}let g=void 0!==o?o:o=a(897328),m=e=>e.bt("Female", "Female", "waista.modal.attribute.female", undefined, true),O=e=>e.bt("Male", "Male", "waista.modal.attribute.male", undefined, true),h=e=>e.bt("Web", "Web", "waista.modal.attribute.web", undefined, true),u=e=>e.bt("Mobile web", "Mobile Web", "waista.modal.attribute.mWeb", undefined, true);function M(e,n){return"FEMALE"===e?m(n):"MALE"===e?O(n):""}function D(e,n){return"AppType_WEB"===e||"AppType_WEB_DENZEL"===e?h(n):"AppType_WEB_MOBILE"===e?u(n):""}function C(e,n){var a;let{name:o=""}=null!==(a=e.find(e=>e.key===n))&&void 0!==a?a:{};return o}function L({pinKey:e,onDismiss:n}){var a,o,c,d,E,I,T,R,P,N,S,m,O,h,u,M,D,L,v,x,G,b,B,f,U,y,k,H,z,F,j,w,Y,V,K,W,X;let{logContextEvent:Z}=(0,i.v)(),{locale:Q}=(0,s.B)(),{country:$=""}=(0,r.Z)(),J=(0,_.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),q=(0,_.Z)({name:"LocalesResource"}),{data:ee}=(0,l.u)(g,e);(0,t.useEffect)(()=>{Z({event_type:120,component:13756})},[Z]);let{promoter:en,isEligibleForPromotedPartnership:ea,promotedPartnershipAttributionName:eo,promotedPartnershipAdvertiserName:et}=null!=ee?ee:{},ei={isCustomerListMatched:null!==(a=null==ee?void 0:null===(o=ee.adTargetingAttribution)||void 0===o?void 0:o.isCustomerListMatched)&&void 0!==a&&a,isShoppingRetargetingMatched:null!==(c=null==ee?void 0:null===(d=ee.adTargetingAttribution)||void 0===d?void 0:d.isShoppingRetargetingMatched)&&void 0!==c&&c,isActalikeMatched:null!==(E=null==ee?void 0:null===(I=ee.adTargetingAttribution)||void 0===I?void 0:I.isActalikeMatched)&&void 0!==E&&E,isEngagementMatched:null!==(T=null==ee?void 0:null===(R=ee.adTargetingAttribution)||void 0===R?void 0:R.isEngagementMatched)&&void 0!==T&&T,isExpandTargetingMatched:null!==(P=null==ee?void 0:null===(N=ee.adTargetingAttribution)||void 0===N?void 0:N.isExpandTargetingMatched)&&void 0!==P&&P,isFromGpsLocation:null!==(S=null==ee?void 0:null===(m=ee.adTargetingAttribution)||void 0===m?void 0:m.isFromGpsLocation)&&void 0!==S&&S,isVisitorMatched:null!==(O=null==ee?void 0:null===(h=ee.adTargetingAttribution)||void 0===h?void 0:h.isVisitorMatched)&&void 0!==O&&O,isShoppingProspectingMatched:null!==(u=null==ee?void 0:null===(M=ee.adTargetingAttribution)||void 0===M?void 0:M.isShoppingProspectingMatched)&&void 0!==u&&u,isPlPersonaMatched:null!==(D=null==ee?void 0:null===(L=ee.adTargetingAttribution)||void 0===L?void 0:L.isPlPersonaMatched)&&void 0!==D&&D,matchedAgeBucket:null!==(v=null==ee?void 0:null===(x=ee.adTargetingAttribution)||void 0===x?void 0:x.matchedAgeBucket)&&void 0!==v?v:"",matchedLocale:null!==(G=null==ee?void 0:null===(b=ee.adTargetingAttribution)||void 0===b?void 0:b.matchedLocale)&&void 0!==G?G:"",matchedInterest:null!==(B=null==ee?void 0:null===(f=ee.adTargetingAttribution)||void 0===f?void 0:f.matchedInterest)&&void 0!==B?B:"",matchedGender:null!==(U=null==ee?void 0:null===(y=ee.adTargetingAttribution)||void 0===y?void 0:y.matchedGender)&&void 0!==U?U:"",matchedDevice:null!==(k=null==ee?void 0:null===(H=ee.adTargetingAttribution)||void 0===H?void 0:H.matchedDevice)&&void 0!==k?k:"",geoRegion:null!==(z=null==ee?void 0:null===(F=ee.adTargetingAttribution)||void 0===F?void 0:F.geoRegion)&&void 0!==z?z:"",geoPostalCode:null!==(j=null==ee?void 0:null===(w=ee.adTargetingAttribution)||void 0===w?void 0:w.geoPostalCode)&&void 0!==j?j:""},{isCustomerListMatched:el=!1,isShoppingRetargetingMatched:es=!1,isActalikeMatched:e_=!1,isEngagementMatched:er=!1,isExpandTargetingMatched:ec=!1,isFromGpsLocation:ed=!1,isVisitorMatched:eE=!1,isShoppingProspectingMatched:eI=!1,isPlPersonaMatched:eT=!1,matchedAgeBucket:eR="",matchedLocale:eA="",matchedInterest:eP="",matchedGender:eN="",matchedDevice:eS="",geoRegion:ep="",geoPostalCode:eg=""}=null!==(Y=function(e=null,n=4){return e&&Object.keys(e).filter(n=>"boolean"==typeof e[n]||"string"==typeof e[n]).filter(n=>!1!==e[n]&&""!==e[n]).slice(0,n).reduce((n,a)=>({...n,[a]:e[a]}),{})}(ei))&&void 0!==Y?Y:{},em=null!==(V=null==en?void 0:en.fullName)&&void 0!==V?V:"",eO=function(e,n){var a;let{name:o=""}=null!==(a=e.find(e=>e.key===n))&&void 0!==a?a:{};return o}(null!==(K=J.data)&&void 0!==K?K:[],$),eh=C(null!==(W=q.data)&&void 0!==W?W:[],Q),eu=null!==(X=null==en?void 0:en.username)&&void 0!==X?X:"";return(0,A.jsx)(p,{brandName:em,userName:eu,country:eO,language:eh,ageBucketMatch:eR,localeMatch:eA,interestMatch:eP,genderMatch:eN,deviceMatch:eS,isCustomerListMatched:el,isShoppingTargetingRematched:es,isActAlikeMatched:e_,isEngagementMatched:er,isExpandTargetingMatched:ec,isFromGPSLocation:ed,isVisitorMatched:eE,onDismiss:n,geoRegion:ep,geoPostalCode:eg,isShoppingProspectingMatched:eI,isPlPersonaMatched:eT,thirdPartyAdAttributes:{isEligibleForPromotedPartnership:ea,promotedPartnershipAttributionName:eo,promotedPartnershipAdvertiserName:et}})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/12058.en_GB-96253f7f459bc6e9.mjs.map