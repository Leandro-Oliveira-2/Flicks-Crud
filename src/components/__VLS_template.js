import { __VLS_componentsOption, __VLS_name } from './CarouseComponent.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $scopedSlots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'BCarousel', typeof __VLS_localComponents, "BCarousel", "bCarousel", "b-carousel"> &
__VLS_WithComponent<'BCarouselSlide', typeof __VLS_localComponents, "BCarouselSlide", "bCarouselSlide", "b-carousel-slide">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.BCarousel; __VLS_components.BCarousel; __VLS_components.bCarousel; __VLS_components.bCarousel; __VLS_components["b-carousel"]; __VLS_components["b-carousel"];
// @ts-ignore
[BCarousel, BCarousel,];
__VLS_components.BCarouselSlide; __VLS_components.BCarouselSlide; __VLS_components.bCarouselSlide; __VLS_components.bCarouselSlide; __VLS_components["b-carousel-slide"]; __VLS_components["b-carousel-slide"];
// @ts-ignore
[BCarouselSlide, BCarouselSlide,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.video; __VLS_intrinsicElements.video;
__VLS_intrinsicElements.source;
__VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg;
__VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("carousel-container position-relative"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("carousel-container position-relative"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'BCarousel' extends keyof typeof __VLS_ctx ? { 'BCarousel': typeof __VLS_ctx.BCarousel; } : 'bCarousel' extends keyof typeof __VLS_ctx ? { 'BCarousel': typeof __VLS_ctx.bCarousel; } : 'b-carousel' extends keyof typeof __VLS_ctx ? { 'BCarousel': (typeof __VLS_ctx)["b-carousel"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).BCarousel;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, id: ("carousel-fade"), style: ({}), fade: (true), indicators: (true), imgWidth: ("800"), imgHeight: ("100px"), controls: ("false"), }));
({} as { BCarousel: typeof __VLS_5; }).BCarousel;
({} as { BCarousel: typeof __VLS_5; }).BCarousel;
const __VLS_7 = __VLS_6({ ...{}, id: ("carousel-fade"), style: ({}), fade: (true), indicators: (true), imgWidth: ("800"), imgHeight: ("100px"), controls: ("false"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, id: ("carousel-fade"), style: ({}), fade: (true), indicators: (true), imgWidth: ("800"), imgHeight: ("100px"), controls: ("false"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'BCarouselSlide' extends keyof typeof __VLS_ctx ? { 'BCarouselSlide': typeof __VLS_ctx.BCarouselSlide; } : 'bCarouselSlide' extends keyof typeof __VLS_ctx ? { 'BCarouselSlide': typeof __VLS_ctx.bCarouselSlide; } : 'b-carousel-slide' extends keyof typeof __VLS_ctx ? { 'BCarouselSlide': (typeof __VLS_ctx)["b-carousel-slide"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).BCarouselSlide;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { BCarouselSlide: typeof __VLS_10; }).BCarouselSlide;
({} as { BCarouselSlide: typeof __VLS_10; }).BCarouselSlide;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["template"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_13.slots!).img;
{
const __VLS_18 = __VLS_intrinsicElements["video"];
const __VLS_19 = __VLS_elementAsFunctionalComponent(__VLS_18);
const __VLS_20 = __VLS_19({ ...{}, autoplay: (true), loop: (true), muted: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, autoplay: (true), loop: (true), muted: (true), });
const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)!;
let __VLS_22!: __VLS_NormalizeEmits<typeof __VLS_21.emit>;
{
const __VLS_23 = __VLS_intrinsicElements["source"];
const __VLS_24 = __VLS_elementAsFunctionalComponent(__VLS_23);
const __VLS_25 = __VLS_24({
...{}, src: ((https: __VLS_ctx.) => ) //youtu.be/23veejsZ5r4?si=y-M15GVBXkN-RzEf)), type: ("video/mp4"), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_23, typeof __VLS_25> & Record<string, unknown>) => void)({
...{}, src: ((https: __VLS_ctx. //youtu.be/23veejsZ5r4?si=y-M15GVBXkN-RzEf)), type: ("video/mp4"), });
                                        , //youtu.be/23veejsZ5r4?si=y-M15GVBXkN-RzEf)), type: ("video/mp4"), });
                                        , __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25)!) => ),
let, __VLS_27: __VLS_NormalizeEmits < typeof __VLS_26.emit > 
                                    } (__VLS_21.slots!).default)
}
// @ts-ignore
[, ,]);
}
}
}
(__VLS_8.slots!).default;
}
{
const __VLS_28 = __VLS_intrinsicElements["div"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
const __VLS_30 = __VLS_29({ ...{}, class: ("degrade"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, class: ("degrade"), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
let __VLS_32!: __VLS_NormalizeEmits<typeof __VLS_31.emit>;
(__VLS_31.slots!).default;
}
{
const __VLS_33 = __VLS_intrinsicElements["div"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
const __VLS_35 = __VLS_34({ ...{}, class: ("d-flex justify-content-between position-absolute w-100"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{}, class: ("d-flex justify-content-between position-absolute w-100"), style: ({}), });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
let __VLS_37!: __VLS_NormalizeEmits<typeof __VLS_36.emit>;
{
const __VLS_38 = __VLS_intrinsicElements["svg"];
const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
const __VLS_40 = __VLS_39({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), width: ("50px"), height: ("50px"), fill: ("currentColor"), class: ("bi bi-heart"), viewBox: ("0 0 32 32"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), width: ("50px"), height: ("50px"), fill: ("currentColor"), class: ("bi bi-heart"), viewBox: ("0 0 32 32"), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
let __VLS_42!: __VLS_NormalizeEmits<typeof __VLS_41.emit>;
{
const __VLS_43 = __VLS_intrinsicElements["path"];
const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
const __VLS_45 = __VLS_44({ ...{}, d: ("m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_43, typeof __VLS_45> & Record<string, unknown>) => void)({ ...{}, d: ("m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"), });
const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45)!;
let __VLS_47!: __VLS_NormalizeEmits<typeof __VLS_46.emit>;
}
(__VLS_41.slots!).default;
}
{
const __VLS_48 = __VLS_intrinsicElements["svg"];
const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
const __VLS_50 = __VLS_49({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), width: ("50px"), height: ("50px"), fill: ("currentColor"), class: ("bi bi-info-circle ml-auto"), viewBox: ("0 0 32 32"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_50> & Record<string, unknown>) => void)({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), width: ("50px"), height: ("50px"), fill: ("currentColor"), class: ("bi bi-info-circle ml-auto"), viewBox: ("0 0 32 32"), });
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
let __VLS_52!: __VLS_NormalizeEmits<typeof __VLS_51.emit>;
{
const __VLS_53 = __VLS_intrinsicElements["path"];
const __VLS_54 = __VLS_elementAsFunctionalComponent(__VLS_53);
const __VLS_55 = __VLS_54({ ...{}, d: ("M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_53, typeof __VLS_55> & Record<string, unknown>) => void)({ ...{}, d: ("M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"), });
const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55)!;
let __VLS_57!: __VLS_NormalizeEmits<typeof __VLS_56.emit>;
}
{
const __VLS_58 = __VLS_intrinsicElements["path"];
const __VLS_59 = __VLS_elementAsFunctionalComponent(__VLS_58);
const __VLS_60 = __VLS_59({ ...{}, d: ("m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_58, typeof __VLS_60> & Record<string, unknown>) => void)({ ...{}, d: ("m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"), });
const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60)!;
let __VLS_62!: __VLS_NormalizeEmits<typeof __VLS_61.emit>;
}
(__VLS_51.slots!).default;
}
(__VLS_36.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
let __VLS_internalComponent!: typeof import('./CarouseComponent.vue')['default'];}}
