import type { TrackSlug } from "@/lib/content/tracks";
import type { Language } from "./language";

export type LessonThaiTranslation = {
  title: string;
  summary: string;
  takeaways: readonly string[];
  whatToReview: readonly string[];
  reviewNotes: readonly string[];
};

type TrackTranslation = {
  title: string;
  description: string;
};

export const uiCopy = {
  en: {
    headerTagline: "Review patterns by Track",
    homeEyebrow: "Example Library",
    homeSummary:
      "Study code review patterns through curated side-by-side examples.",
    trackEyebrow: "Track",
    goodCode: "Good Code",
    badCode: "Bad Code",
    reviewNotes: "Review Notes",
    takeaways: "Takeaways",
    lessonProgress: "Lesson",
    of: "of",
    previous: "Previous",
    next: "Next",
    startOfTrack: "Start of track",
    endOfTrack: "End of track",
    notFoundEyebrow: "404",
    notFoundTitle: "Page not found",
    notFoundSummary: "This review example is not in the library.",
    backToLibrary: "Back to library",
    whatToReview: "What to review",
    reviewNotesSection: "Review notes",
  },
  th: {
    headerTagline: "ฝึกรีวิวโค้ดตามภาษา",
    homeEyebrow: "คลังตัวอย่าง",
    homeSummary: "ฝึกอ่านรีวิวโค้ดจากตัวอย่าง Good Code และ Bad Code แบบเทียบกัน.",
    trackEyebrow: "ภาษา",
    goodCode: "โค้ดที่ดี",
    badCode: "โค้ดที่ควรปรับ",
    reviewNotes: "คำอธิบายรีวิว",
    takeaways: "สิ่งที่ควรจำ",
    lessonProgress: "บทที่",
    of: "จาก",
    previous: "ก่อนหน้า",
    next: "ถัดไป",
    startOfTrack: "เริ่มต้นของภาษา",
    endOfTrack: "จบภาษานี้แล้ว",
    notFoundEyebrow: "404",
    notFoundTitle: "ไม่พบหน้านี้",
    notFoundSummary: "ยังไม่มีตัวอย่างรีวิวโค้ดนี้ในคลัง.",
    backToLibrary: "กลับไปหน้ารวม",
    whatToReview: "ควรรีวิวอะไร",
    reviewNotesSection: "โน้ตรีวิว",
  },
} as const satisfies Record<Language, Record<string, string>>;

export const trackThaiTranslations = {
  html: {
    title: "HTML",
    description:
      "ฝึกรีวิวโครงสร้างหน้า ความหมายของแท็ก ฟอร์ม และพื้นฐาน accessibility.",
  },
  css: {
    title: "CSS",
    description:
      "ฝึกรีวิว layout, responsive style, contrast และ selector ที่ดูแลต่อได้ง่าย.",
  },
  javascript: {
    title: "JavaScript",
    description:
      "ฝึกรีวิว control flow, async, การตั้งชื่อ และ side effect ที่อ่านแล้วไม่หลอกเรา.",
  },
  typescript: {
    title: "TypeScript",
    description:
      "ฝึกรีวิว type narrowing, API boundary, union และ function type ที่ปลอดภัยกว่า.",
  },
  react: {
    title: "React",
    description:
      "ฝึกรีวิวขอบเขต component, state, effect และการ render ที่คาดเดาได้.",
  },
} as const satisfies Record<TrackSlug, TrackTranslation>;

export const lessonThaiTranslations = {
  "html/document-language-metadata": {
    title: "ภาษาและ metadata ของเอกสาร",
    summary: "ประกาศข้อมูลพื้นฐานของหน้า เช่น ภาษา charset viewport และ title ให้ชัดตั้งแต่ต้น.",
    takeaways: ["ทุกหน้าควรเริ่มจาก lang, charset, viewport และ title ที่สื่อความหมาย."],
    whatToReview: [
      "โค้ดที่ดีบอกภาษา การเข้ารหัส ขนาด viewport และชื่อหน้าให้ browser เข้าใจตั้งแต่ก่อน render body.",
      "โค้ดที่ควรปรับปล่อยค่าเริ่มต้นสำคัญไว้ให้ browser เดา ทำให้การอ่านออกเสียงและตัวตนของหน้าคลาดเคลื่อนได้.",
    ],
    reviewNotes: [
      "เวลารีวิว HTML ให้เริ่มจากหัวเอกสารก่อนเสมอ เพราะ body ที่เขียนดีอาจยังใช้งานยากได้ถ้า lang, charset, viewport หรือ title ไม่ชัด.",
    ],
  },
  "html/semantic-document-structure": {
    title: "โครงสร้างเอกสารแบบมีความหมาย",
    summary: "ใช้ landmark และ heading เพื่อให้โครงสร้างหน้าอ่านเข้าใจง่าย.",
    takeaways: ["เลือกแท็กที่สื่อความหมายก่อนใช้ div ครอบทุกอย่าง."],
    whatToReview: [
      "โค้ดที่ดีทำให้โครงสร้างของหน้าเห็นได้จาก HTML เลย ไม่ต้องเดาจาก CSS.",
      "โค้ดที่ควรปรับอาจแสดงผลเหมือนกัน แต่ซ่อนความหมายไว้ใน div ทั่วไป.",
    ],
    reviewNotes: [
      "เวลารีวิว ให้ถามว่า browser, คนอ่านโค้ด และ assistive technology เข้าใจหน้าได้ไหมโดยไม่ต้องดู style. Semantic HTML คือสัญญาของ interface ไม่ใช่แค่เรื่องความสวย.",
    ],
  },
  "html/heading-hierarchy": {
    title: "ลำดับ heading",
    summary: "ใช้ heading เพื่อบอกโครงสร้างเอกสาร ไม่ใช่เลือกตามขนาดตัวอักษรที่อยากได้.",
    takeaways: ["ระดับ heading ควรเรียงตามโครงเรื่อง ไม่ใช่ใช้แทน class สำหรับขนาดฟอนต์."],
    whatToReview: [
      "โค้ดที่ดีทำให้ outline ของหน้าอ่านตามลำดับได้ ตั้งแต่ชื่อหน้า ไปส่วนหลัก แล้วค่อยลงรายละเอียด.",
      "โค้ดที่ควรปรับกระโดดระดับ heading เพราะใช้ heading เพื่อคุมหน้าตา ทำให้คนอ่านและเครื่องมือเข้าใจโครงสร้างยาก.",
    ],
    reviewNotes: [
      "ให้ลองอ่านเฉพาะ heading แล้วถามว่ายังเข้าใจหน้าไหม ถ้าไม่เข้าใจ แปลว่า heading อาจกำลังรับหน้าที่ style แทน information architecture.",
    ],
  },
  "html/links-and-navigation": {
    title: "ลิงก์และ navigation",
    summary: "ใช้ลิงก์จริงพร้อมชื่อที่ชัดเมื่อพาผู้ใช้ไปที่อื่น แทน element ทั่วไปที่คลิกได้.",
    takeaways: ["ถ้าการกระทำนั้นพาไปที่อื่น ให้เริ่มจาก anchor ที่มี href และข้อความลิงก์ที่เข้าใจได้."],
    whatToReview: [
      "โค้ดที่ดีใช้ anchor สำหรับการนำทาง และตั้งชื่อปลายทางให้รู้ว่าคลิกแล้วไปไหน.",
      "โค้ดที่ควรปรับซ่อน navigation ไว้หลัง JavaScript หรือข้อความกำกวม เช่น click here ทำให้ใช้งานพื้นฐานของ browser ได้แย่ลง.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าลิงก์ยังเปิดแท็บใหม่ คัดลอก URL โฟกัสด้วย keyboard และอ่านชื่อแล้วเข้าใจปลายทางได้ไหม ถ้าไม่ได้ควรกลับไปใช้ anchor ที่ชัดเจน.",
    ],
  },
  "html/images-alt-text": {
    title: "รูปภาพและ alt text",
    summary: "เขียน alt text ให้รูปที่มีความหมาย และซ่อนรูปตกแต่งจาก assistive technology.",
    takeaways: ["alt text ควรอธิบายหน้าที่ของรูปในบริบทนั้น ไม่ใช่ทวนชื่อไฟล์."],
    whatToReview: [
      "โค้ดที่ดีอธิบายรูปที่มีสาระตามข้อความที่รูปต้องการสื่อ และให้ alt ว่างกับรูปตกแต่ง.",
      "โค้ดที่ควรปรับใช้ชื่อไฟล์หรือรายละเอียดตกแต่งเป็น alt ทำให้ผู้อ่านได้ข้อมูลที่ไม่ช่วยตัดสินใจ.",
    ],
    reviewNotes: [
      "อย่ารีวิวแค่ว่ามี alt หรือไม่มี ให้ดูว่ารูปนั้นมีหน้าที่อะไรในบริบทนี้ เพราะรูปเดียวกันอาจต้องใช้คำอธิบายต่างกันในแต่ละหน้า.",
    ],
  },
  "html/accessible-form-labels": {
    title: "label ของฟอร์มที่เข้าถึงได้",
    summary: "ผูก label กับ input ให้ชัดเจน แทนการพึ่ง placeholder อย่างเดียว.",
    takeaways: ["input สำคัญควรมี label จริง ไม่ใช่ hint ที่หายไปตอนพิมพ์."],
    whatToReview: [
      "โค้ดที่ดีบอกชื่อ field ผ่าน label ที่เชื่อมกับ input โดยตรง.",
      "โค้ดที่ควรปรับใช้ placeholder เป็นชื่อ field ทำให้ผู้ใช้บางกลุ่มและ screen reader เข้าใจยาก.",
    ],
    reviewNotes: [
      "ตอนรีวิวฟอร์ม ให้เช็กว่าถ้าลบ placeholder ออก ผู้ใช้ยังรู้ไหมว่าต้องกรอกอะไร. label ที่ดีช่วยทั้ง accessibility, การทดสอบ และการ maintain ฟอร์มระยะยาว.",
    ],
  },
  "html/form-help-errors": {
    title: "คำแนะนำและ error ของฟอร์ม",
    summary: "เชื่อม help text และ error text เข้ากับ field เพื่อให้ feedback ถูกอ่านพร้อม control.",
    takeaways: ["ใช้ aria-describedby และ aria-invalid เพื่อผูกคำแนะนำและสถานะผิดพลาดกับ input."],
    whatToReview: [
      "โค้ดที่ดีทำให้ input รู้ว่าข้อความช่วยเหลือและ error ไหนเกี่ยวข้องกับมัน และบอกสถานะ invalid ชัดเจน.",
      "โค้ดที่ควรปรับวางข้อความใกล้ input แค่ทางสายตา แต่ไม่มีความสัมพันธ์ที่ทนทานใน accessibility tree.",
    ],
    reviewNotes: [
      "ในการรีวิวฟอร์ม ความใกล้บนหน้าจอไม่พอ ให้เช็กว่า field, help text และ error state ถูกเชื่อมกันจริง ไม่ใช่แค่ดูเหมือนอยู่ด้วยกัน.",
    ],
  },
  "html/interactive-elements": {
    title: "element สำหรับ interaction",
    summary: "ใช้ element ที่เกิดมาเพื่อกด เช่น button แทน div ที่ใส่ onClick เอง.",
    takeaways: ["ถ้าเป็น action ให้เริ่มจาก button หรือ element native ที่เหมาะสม."],
    whatToReview: [
      "โค้ดที่ดีใช้ button ทำให้ keyboard, focus และ role ทำงานตาม browser ให้ทันที.",
      "โค้ดที่ควรปรับทำ div ให้เหมือนปุ่ม ซึ่งมักต้องเขียน behavior สำคัญเพิ่มเองและพลาดง่าย.",
    ],
    reviewNotes: [
      "เวลาเห็น div ที่คลิกได้ ให้ถามว่าทำไมไม่ใช้ button. ถ้าไม่มีเหตุผลชัดเจน การใช้ native element มักปลอดภัยและอ่านง่ายกว่า.",
    ],
  },
  "html/tables-tabular-data": {
    title: "table สำหรับข้อมูลแบบตาราง",
    summary: "ใช้ markup ของ table เมื่อข้อมูลเป็นแถวและคอลัมน์ เพื่อรักษาความสัมพันธ์ระหว่างหัวข้อกับค่า.",
    takeaways: ["ถ้าเนื้อหาเป็นข้อมูลแบบ row/column ให้ใช้ table, caption, th และ scope ก่อนสร้างด้วย div."],
    whatToReview: [
      "โค้ดที่ดีเก็บความสัมพันธ์ระหว่าง header และ cell ไว้ใน HTML พร้อม caption ที่บอกว่าตารางนี้คืออะไร.",
      "โค้ดที่ควรปรับทำให้ div ดูเหมือนตาราง แต่ความสัมพันธ์ของข้อมูลอยู่แค่ใน CSS และตำแหน่งบนจอ.",
    ],
    reviewNotes: [
      "ให้ถามว่าผู้ใช้เข้าใจ cell หนึ่งช่องได้ไหมถ้าไม่ได้เห็น layout ถ้าต้องพึ่งตำแหน่งคอลัมน์อย่างเดียว ควรใช้ semantic table.",
    ],
  },
  "html/aria-restraint": {
    title: "ใช้ ARIA อย่างพอดี",
    summary: "เริ่มจาก HTML native ก่อน แล้วใช้ ARIA เฉพาะเมื่อช่วยอธิบายพฤติกรรมที่ HTML บอกเองไม่ได้.",
    takeaways: ["เลือก semantic HTML ก่อนเสมอ ARIA ควรช่วยทำให้ชัด ไม่ใช่ซ่อม element ที่เลือกผิด."],
    whatToReview: [
      "โค้ดที่ดีใช้ element native ที่มี role และ keyboard behavior มาให้ แล้วเติม ARIA เฉพาะจุดที่จำเป็นจริง.",
      "โค้ดที่ควรปรับใส่ role หรือ state ที่ไม่ตรงกับพฤติกรรมจริง ทำให้ assistive technology รับข้อมูลผิด.",
    ],
    reviewNotes: [
      "ARIA มีพลังมากแต่ไม่ใช่ทางลัดแทน semantic HTML เวลารีวิวให้ถามก่อนว่า element native ทำสิ่งนี้ให้เราอยู่แล้วหรือยัง.",
    ],
  },
  "css/flex-layout-boundaries": {
    title: "ขอบเขตของ flex layout",
    summary: "กำหนด layout ใน container ให้ชัด แทนการกระจาย margin ไปทั่วลูก.",
    takeaways: ["ให้ container คุม spacing ด้วย gap มากกว่าผลักลูกทีละตัว."],
    whatToReview: [
      "โค้ดที่ดีให้ flex container เป็นเจ้าของ layout และใช้ gap เพื่อคุมระยะห่าง.",
      "โค้ดที่ควรปรับพึ่ง selector กว้าง ๆ กับ margin ของ child ทำให้เปลี่ยนโครงสร้างแล้ว layout พังง่าย.",
    ],
    reviewNotes: [
      "ตอนรีวิว CSS ให้ดูว่า spacing เป็นความรับผิดชอบของ container หรือกระจายอยู่ใน child หลายจุด. ขอบเขตที่ชัดทำให้ย้าย component และเพิ่ม item ได้มั่นใจกว่า.",
    ],
  },
  "css/color-contrast-states": {
    title: "contrast และ state ของสี",
    summary: "ทำ hover/focus ให้เห็นชัดและมี contrast พอ ไม่พึ่งสีจางอย่างเดียว.",
    takeaways: ["state สำคัญต้องเห็นชัดทั้งด้วย contrast และ focus style."],
    whatToReview: [
      "โค้ดที่ดีระบุ hover และ focus state ที่เห็นได้จริง พร้อม focus ring สำหรับ keyboard.",
      "โค้ดที่ควรปรับเปลี่ยนแค่สีอ่อนมาก ๆ จนผู้ใช้แยก state ได้ยาก.",
    ],
    reviewNotes: [
      "อย่ารีวิวแค่ว่าสีสวยไหม ให้ลองคิดว่าผู้ใช้มองเห็น state ได้ชัดหรือเปล่า โดยเฉพาะปุ่มและลิงก์ที่เป็น action สำคัญ.",
    ],
  },
  "css/responsive-units": {
    title: "หน่วย responsive ที่อ่านง่าย",
    summary: "ใช้ clamp และ spacing ที่ยืดหยุ่น แทนการผูกขนาดตัวอักษรกับ viewport ตรง ๆ.",
    takeaways: ["อย่าให้ body text โตหรือเล็กตาม viewport จนอ่านยาก."],
    whatToReview: [
      "โค้ดที่ดีใช้ clamp เพื่อกำหนดขอบเขตขนาดที่เหมาะสมในหลายหน้าจอ.",
      "โค้ดที่ควรปรับใช้ vw กับตัวอักษรหลัก ทำให้จอเล็กอ่านยากและจอใหญ่ตัวโตเกิน.",
    ],
    reviewNotes: [
      "เวลาเจอ responsive CSS ให้ดูว่ามีขอบบนขอบล่างของขนาดหรือไม่. Responsive ที่ดีควรปรับตามพื้นที่ แต่ยังรักษาความอ่านง่ายไว้.",
    ],
  },
  "javascript/guard-clauses": {
    title: "guard clause ลดความซ้อน",
    summary: "คืนค่าเร็วเมื่อข้อมูลไม่พร้อม เพื่อให้ path หลักอ่านตรงและสั้นลง.",
    takeaways: ["ใช้ early return เพื่อให้เคสปกติอ่านเป็นเส้นตรง."],
    whatToReview: [
      "โค้ดที่ดีจัดการเคสที่ใช้ไม่ได้ตั้งแต่ต้น แล้วปล่อยให้ logic หลักอยู่ในระดับ indentation เดียว.",
      "โค้ดที่ควรปรับซ้อน if หลายชั้น ทำให้คนรีวิวต้องจำเงื่อนไขในหัวตลอดเวลา.",
    ],
    reviewNotes: [
      "เวลารีวิว control flow ให้มองหา path ที่สำคัญที่สุดของ function. ถ้า path นั้นถูกฝังอยู่ใน if หลายชั้น guard clause อาจช่วยให้เจตนาชัดขึ้นมาก.",
    ],
  },
  "javascript/async-error-handling": {
    title: "จัดการ error ใน async ให้ครบ",
    summary: "ตรวจ response และจัดการ failure ก่อนสมมติว่าทุกอย่างเป็น JSON ที่ถูกต้อง.",
    takeaways: ["async code ควรมี path สำหรับ failure ที่อ่านได้ชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีตรวจสถานะ response และแยก error path ก่อนใช้ข้อมูล.",
      "โค้ดที่ควรปรับ assume ว่า request สำเร็จเสมอ ทำให้ bug โผล่ตอน network หรือ server มีปัญหา.",
    ],
    reviewNotes: [
      "ตอนรีวิว async function ให้ถามว่าเกิดอะไรขึ้นเมื่อ request ล้ม, response ไม่ ok หรือ payload ไม่ตรงที่คิด. โค้ดที่ดีไม่ควรทำให้ error กลายเป็นปริศนา.",
    ],
  },
  "javascript/naming-side-effects": {
    title: "ตั้งชื่อให้เห็น side effect",
    summary: "ชื่อ function ควรบอกว่ามีการ mutate หรือเปลี่ยน state ไม่ใช่ดูเหมือนแค่อ่านค่า.",
    takeaways: ["ถ้า function เปลี่ยนข้อมูล ชื่อควรบอกให้คนเรียกรู้ทันที."],
    whatToReview: [
      "โค้ดที่ดีใช้ชื่อที่บอกว่ามีการเปลี่ยนแปลงข้อมูล เช่น update หรือ apply.",
      "โค้ดที่ควรปรับใช้ชื่อที่ดูปลอดภัยเหมือนอ่านค่า แต่จริง ๆ ไป mutate input.",
    ],
    reviewNotes: [
      "เวลารีวิวชื่อ function ให้ดู body ด้วยว่ามี side effect ไหม. ชื่อที่ไม่ตรงกับพฤติกรรมทำให้ bug เกิดจากความคาดหวังผิด ๆ ได้ง่าย.",
    ],
  },
  "typescript/discriminated-unions": {
    title: "discriminated union สำหรับผลลัพธ์",
    summary: "ใช้ field แยกสถานะให้ TypeScript ช่วยบอกว่า data ไหนใช้ได้เมื่อไร.",
    takeaways: ["ทำให้ invalid state เขียนยากด้วย union ที่แยกกรณีชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีมี field กลางสำหรับบอกสถานะ ทำให้ branch แต่ละแบบรู้ข้อมูลที่ใช้ได้แน่นอน.",
      "โค้ดที่ควรปรับใช้ optional field หลายตัวที่ต้องเดาความสัมพันธ์กันเอง.",
    ],
    reviewNotes: [
      "ในการรีวิว type ให้ถามว่า object นี้มี state ที่ไม่ควรเกิดขึ้นแต่ type ยังยอมไหม. discriminated union ช่วยปิดช่องนั้นและทำให้ code completion ดีขึ้น.",
    ],
  },
  "typescript/narrowing-unknown": {
    title: "narrow unknown ก่อนใช้งาน",
    summary: "ตรวจรูปทรงข้อมูลจากภายนอกก่อนใช้ แทนการ cast เป็น any แล้วหวังว่าถูก.",
    takeaways: ["unknown บังคับให้เราพิสูจน์ข้อมูลก่อนใช้ ซึ่งปลอดภัยกว่า any."],
    whatToReview: [
      "โค้ดที่ดีตรวจ type และ property สำคัญก่อนนำข้อมูลไปใช้ต่อ.",
      "โค้ดที่ควรปรับ cast เป็น any ทำให้ TypeScript หยุดช่วยเราในจุดที่เสี่ยงที่สุด.",
    ],
    reviewNotes: [
      "ข้อมูลจาก API, localStorage หรือ message event ควรถือว่าไม่น่าเชื่อถือก่อนเสมอ. การ narrow unknown ทำให้ error ถูกจับใกล้ต้นทางมากขึ้น.",
    ],
  },
  "typescript/precise-function-types": {
    title: "function type ที่เจาะจง",
    summary: "ระบุ signature ของ callback ให้ชัด แทนการใช้ Function กว้าง ๆ.",
    takeaways: ["callback type ที่แคบทำให้เรียกผิดยากขึ้นและรีวิว intent ง่ายขึ้น."],
    whatToReview: [
      "โค้ดที่ดีบอก parameter และ return type ของ callback ชัดเจน.",
      "โค้ดที่ควรปรับใช้ Function ทำให้ใครส่งอะไรก็ได้ และ compiler ช่วยจับผิดไม่ได้.",
    ],
    reviewNotes: [
      "เวลาเห็น Function ใน TypeScript ให้ถือเป็นกลิ่นที่ควรถามต่อ. ส่วนใหญ่เรารู้ signature ที่ต้องการอยู่แล้ว และควรเขียนให้ type system ช่วยป้องกันการเรียกผิด.",
    ],
  },
  "react/props-component-boundaries": {
    title: "ขอบเขต component ผ่าน props",
    summary: "ให้ component รับข้อมูลที่ต้องใช้ผ่าน props ชัด ๆ แทนการล้วง state ที่ไม่เกี่ยวข้อง.",
    takeaways: ["component ที่ดีควรบอก dependency ผ่าน props ให้เห็นจากด้านนอก."],
    whatToReview: [
      "โค้ดที่ดีทำให้ presentational component รับข้อมูลเท่าที่ต้องใช้และทดสอบง่าย.",
      "โค้ดที่ควรปรับให้ component ไปอ่าน state นอกขอบเขตของตัวเอง ทำให้ reuse และ debug ยาก.",
    ],
    reviewNotes: [
      "ตอนรีวิว React ให้ดูว่า component นี้รู้มากเกินหน้าที่หรือไม่. ขอบเขตที่ดีทำให้ component ย้ายที่ ใช้ซ้ำ และทดสอบได้ง่ายขึ้น.",
    ],
  },
  "react/derived-state": {
    title: "derived state ควรคำนวณจากแหล่งจริง",
    summary: "คำนวณค่าที่ derive ได้ระหว่าง render แทนการเก็บ state ซ้ำแล้ว sync ด้วย effect.",
    takeaways: ["อย่าเก็บ state ซ้ำถ้าคำนวณจาก props หรือ state เดิมได้."],
    whatToReview: [
      "โค้ดที่ดีคำนวณค่าที่ derive ได้จากข้อมูลปัจจุบัน ทำให้ไม่มี state สองชุดให้ sync.",
      "โค้ดที่ควรปรับเก็บค่าซ้ำใน useState แล้วใช้ effect ตามแก้ ซึ่งเปิดทางให้ข้อมูลไม่ตรงกัน.",
    ],
    reviewNotes: [
      "เวลาเห็น useEffect ที่แค่ sync state จาก props หรือ state อื่น ให้ถามว่าคำนวณตรง ๆ ได้ไหม. การลด state ที่ไม่จำเป็นทำให้ React code ง่ายและ bug น้อยลง.",
    ],
  },
  "react/effect-dependencies": {
    title: "dependency ของ effect ต้องครบ",
    summary: "ใส่ dependency ให้ครบและ cleanup งาน async เมื่อ input เปลี่ยน.",
    takeaways: ["effect ควรประกาศสิ่งที่พึ่งพาให้ครบ และ cleanup เมื่อเลิกใช้."],
    whatToReview: [
      "โค้ดที่ดีใส่ dependency ที่ใช้จริงและยกเลิก request เก่าเมื่อค่าเปลี่ยน.",
      "โค้ดที่ควรปรับปล่อย dependency ว่าง ทั้งที่ใช้ค่าจาก props ทำให้ข้อมูล stale.",
    ],
    reviewNotes: [
      "ตอนรีวิว effect ให้ดูทั้ง dependency array และ cleanup. ถ้า effect ใช้ค่าใดใน scope ค่านั้นควรอยู่ใน dependency หรือมีเหตุผลที่ชัดเจนว่าทำไมไม่อยู่.",
    ],
  },
} as const satisfies Record<string, LessonThaiTranslation>;

const lessonThaiTranslationMap: Record<string, LessonThaiTranslation> =
  lessonThaiTranslations;

export function lessonKey(track: string, slug: string) {
  return `${track}/${slug}`;
}

export function getTrackText(
  track: { slug: TrackSlug; title: string; description: string },
  language: Language,
) {
  if (language === "th") {
    return trackThaiTranslations[track.slug];
  }

  return {
    title: track.title,
    description: track.description,
  };
}

export function getLessonThaiTranslation(track: string, slug: string) {
  return lessonThaiTranslationMap[lessonKey(track, slug)];
}

export function getLessonText(
  lesson: { track: string; slug: string; title: string; summary: string },
  language: Language,
) {
  const translation = getLessonThaiTranslation(lesson.track, lesson.slug);

  if (language === "th" && translation) {
    return {
      title: translation.title,
      summary: translation.summary,
    };
  }

  return {
    title: lesson.title,
    summary: lesson.summary,
  };
}
