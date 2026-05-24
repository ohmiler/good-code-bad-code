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
  nextjs: {
    title: "Next.js",
    description:
      "ฝึกรีวิว App Router, server boundary, data fetching, caching และ route API.",
  },
  nodejs: {
    title: "Node.js",
    description:
      "ฝึกรีวิว runtime boundary, async I/O, HTTP lifecycle, logging และ process safety.",
  },
  express: {
    title: "Express",
    description:
      "ฝึกรีวิว app factory, router, middleware order, validation, auth และ error handling.",
  },
  sql: {
    title: "SQL",
    description:
      "ฝึกรีวิว schema, query, join, index, transaction, migration และความปลอดภัยของข้อมูล.",
  },
  python: {
    title: "Python",
    description:
      "ฝึกรีวิวฟังก์ชันที่อ่านง่าย รูปทรงข้อมูล exception, typing, testability และ async boundary.",
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
  "css/box-model-sizing": {
    title: "ขนาดกล่องและ box model",
    summary: "ทำให้ width, padding และ border คาดเดาได้ ด้วย box-sizing และขนาดที่ไม่ดัน layout ล้น.",
    takeaways: ["ตั้ง box-sizing: border-box เพื่อให้ขนาด component ไม่ล้นเพราะ padding หรือ border."],
    whatToReview: [
      "โค้ดที่ดีทำให้ขนาดของการ์ดรวม padding และ border อยู่ในกรอบเดียวกัน จึงย้ายไปหลาย container ได้ง่าย.",
      "โค้ดที่ควรปรับกำหนด width คงที่แล้วเติม padding เพิ่ม ทำให้พื้นที่จริงกว้างกว่าที่คนอ่านคาด.",
    ],
    reviewNotes: [
      "เวลารีวิว layout ให้ดูว่าความกว้างที่ประกาศคือความกว้างจริงของ component หรือยังต้องบวก padding และ border ในหัวอีกชั้นหนึ่ง.",
    ],
  },
  "css/cascade-specificity": {
    title: "cascade และ specificity",
    summary: "เลือก selector ให้เฉพาะเท่าที่จำเป็น เพื่อให้ override ได้ตั้งใจและดูแลต่อได้ง่าย.",
    takeaways: ["เริ่มจาก class ที่มีขอบเขตชัด แล้วใช้ modifier แทน selector ยาวหรือ !important."],
    whatToReview: [
      "โค้ดที่ดีใช้ class ของ component และ modifier ทำให้เห็นชัดว่า rule ไหนรับผิดชอบ state ไหน.",
      "โค้ดที่ควรปรับพึ่ง selector ลึก, id และ !important จน reusable component ถูกผูกกับโครงสร้างหน้าเดียว.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่า selector นี้สื่อ ownership หรือแค่ชนะ specificity เฉย ๆ selector ที่ชนะวันนี้อาจทำให้การแก้ครั้งถัดไปยากขึ้นมาก.",
    ],
  },
  "css/grid-layout-tracks": {
    title: "grid tracks ที่ยืดหยุ่น",
    summary: "ใช้ CSS Grid อธิบายคอลัมน์ responsive แทนการคำนวณความกว้างและ margin เอง.",
    takeaways: ["ให้ grid จัด track ด้วย minmax และ gap แทน float, percentage และ nth-child ที่เปราะบาง."],
    whatToReview: [
      "โค้ดที่ดีประกาศกติกา layout ครั้งเดียวว่า card ควรกว้างอย่างน้อยเท่าไร และเพิ่มคอลัมน์เมื่อพื้นที่พอ.",
      "โค้ดที่ควรปรับจำลองคอลัมน์ด้วย float และ positional selector ทำให้เปลี่ยนจำนวนคอลัมน์หรือ gap แล้วพังง่าย.",
    ],
    reviewNotes: [
      "เวลาเจอ CSS ที่คำนวณแถวและคอลัมน์ด้วยมือ ให้ลองถามว่ากติกานั้นเขียนตรง ๆ ด้วย grid ได้ไหม โค้ดจะอ่านง่ายและมีเลขลับน้อยลง.",
    ],
  },
  "css/focus-visible-states": {
    title: "state selector และ focus-visible",
    summary: "แยก hover, active, selected และ keyboard focus ให้เป็นพฤติกรรมที่รีวิวได้ชัด.",
    takeaways: ["ใช้ :focus-visible สำหรับ keyboard focus และอย่าลบ outline ถ้ายังไม่มี style ทดแทนที่เห็นชัด."],
    whatToReview: [
      "โค้ดที่ดีแยก state ของเมาส์, keyboard และ selected ออกจากกัน ทำให้แต่ละ interaction มีสัญญาณที่ชัด.",
      "โค้ดที่ควรปรับลบ outline แล้วรวม focus กับ hover จนผู้ใช้ keyboard มองตำแหน่งปัจจุบันได้ยาก.",
    ],
    reviewNotes: [
      "อย่ารับ outline: none ผ่านง่าย ๆ ถ้าใน change เดียวกันไม่มี focus style ที่เห็นชัด เพราะ focus คือพฤติกรรมการใช้งาน ไม่ใช่แค่รายละเอียดความสวย.",
    ],
  },
  "css/logical-properties": {
    title: "logical properties สำหรับหลายภาษา",
    summary: "ใช้ spacing และ border ตามแกน block/inline เมื่อ style ควรปรับตามทิศทางภาษา.",
    takeaways: ["เลือก inline และ block properties เมื่อเจตนาจริงไม่ใช่ซ้าย ขวา บน หรือล่างแบบตายตัว."],
    whatToReview: [
      "โค้ดที่ดีบอกว่าเส้น accent อยู่ด้านเริ่มต้นของข้อความ และ spacing อยู่ตามแกน block หรือ inline.",
      "โค้ดที่ควรปรับ hard-code left/right ทั้งที่เจตนาคือ start/end ทำให้รองรับภาษาและ layout อื่นยากขึ้น.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าทิศทาง physical จำเป็นจริงไหม ถ้าดีไซน์หมายถึงจุดเริ่มข้อความหรือระยะบนล่าง logical properties จะสื่อเจตนาได้ตรงกว่า.",
    ],
  },
  "css/custom-properties-tokens": {
    title: "custom properties เป็น design tokens",
    summary: "ตั้งชื่อค่า design ที่ใช้ซ้ำด้วย custom properties แทนการกระจาย magic values.",
    takeaways: ["ตั้งชื่อสี spacing radius และ accent ที่ใช้ซ้ำ เพื่อให้เปลี่ยนระบบดีไซน์ได้ง่ายขึ้น."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อค่ากลางและให้ variant เปลี่ยนเฉพาะ token ที่ตัวเองเป็นเจ้าของ.",
      "โค้ดที่ควรปรับกระจายเลขและสีซ้ำหลายจุด ทำให้ดีไซน์เปลี่ยนทีต้องค้นหาและแก้หลายที่.",
    ],
    reviewNotes: [
      "มองหาค่าที่โผล่หลาย component หรือเป็นการตัดสินใจของระบบดีไซน์ ค่าเปล่า ๆ คุยกันยากกว่าชื่อ token ที่บอกเจตนา.",
    ],
  },
  "css/reduced-motion": {
    title: "motion และ reduced motion",
    summary: "ทำ animation ให้มีเหตุผล และเคารพผู้ใช้ที่ตั้งค่าให้ลดการเคลื่อนไหว.",
    takeaways: ["ทุก UI ที่เคลื่อนไหวควรมี prefers-reduced-motion path ที่ยังสื่อ state ได้ชัด."],
    whatToReview: [
      "โค้ดที่ดีทำให้ state เปลี่ยนชัดเหมือนเดิม แต่ลดระยะเวลาการเคลื่อนไหวเมื่อผู้ใช้ขอลด motion.",
      "โค้ดที่ควรปรับบังคับ animation แบบเดียวกับทุกคน และซ่อน state ไว้ใน animation ที่ไม่ตอบสนอง preference.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่า motion สื่ออะไร และเมื่อปิดหรือลด motion แล้วยังเข้าใจ state ไหม animation ที่ดีควรช่วยอธิบาย ไม่ใช่เป็นทางเดียวที่ทำให้เข้าใจ.",
    ],
  },
  "javascript/strict-equality-nullish-checks": {
    title: "strict equality และ nullish check",
    summary: "เปรียบเทียบค่าแบบตั้งใจ และไม่ทำให้ค่าที่เป็น falsy แต่มีความหมายถูกแทนด้วย default ผิด ๆ.",
    takeaways: ["ใช้ strict equality สำหรับการเทียบค่า และใช้ ?? เมื่อควร fallback เฉพาะ null หรือ undefined."],
    whatToReview: [
      "โค้ดที่ดีเทียบค่าตรงตัวและ fallback เฉพาะตอน retryCount ไม่มีค่าจริง ๆ ทำให้ 0 ยังเป็นค่าที่ตั้งใจได้.",
      "โค้ดที่ควรปรับพึ่ง coercion และใช้ || จนค่าอย่าง 0 ถูกมองว่าไม่มีค่า ทั้งที่อาจเป็น configuration ที่ถูกต้อง.",
    ],
    reviewNotes: [
      "เวลารีวิวให้มอง loose equality กับ fallback logic คู่กัน เพราะมักซ่อน bug ที่แยกไม่ออกว่าข้อมูลหายหรือผู้ใช้ตั้งค่า falsy ไว้เอง.",
    ],
  },
  "javascript/data-boundary-validation": {
    title: "ตรวจข้อมูลที่ขอบเขตระบบ",
    summary: "ตรวจข้อมูลจากภายนอกก่อนให้ส่วนที่เหลือของ function เชื่อว่ารูปทรงข้อมูลถูกต้อง.",
    takeaways: ["ข้อมูลจาก API, storage หรือ message ควรถูก validate ที่ boundary ก่อนอ่าน field ด้านใน."],
    whatToReview: [
      "โค้ดที่ดีถือว่า payload ภายนอกยังไม่น่าเชื่อถือ และคืน failure ที่อ่านเข้าใจก่อนแตะ field ซ้อน.",
      "โค้ดที่ควรปรับ assume ว่า shape ถูกต้องเสมอ ทำให้ข้อมูลผิดรูปกลายเป็น runtime error ที่เดายาก.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้หาบรรทัดแรกที่ข้อมูลภายนอกเข้าระบบ จุดนั้นคือที่เหมาะสุดในการทำความไม่แน่นอนให้ชัด ไม่ใช่ปล่อยให้ caller ทุกจุดเดาเอง.",
    ],
  },
  "javascript/array-transformations": {
    title: "แปลง array ให้อ่านเป็นขั้นตอน",
    summary: "ใช้ array methods เพื่อบอกการเปลี่ยนรูปข้อมูลให้ชัด และเลี่ยงการ mutate input โดยไม่ตั้งใจ.",
    takeaways: ["ใช้ filter, map และ reduce เมื่อมันอธิบายการแปลงข้อมูลได้โดยไม่ต้องแก้ object หรือ array ต้นทาง."],
    whatToReview: [
      "โค้ดที่ดีอ่านเหมือน pipeline: กรองไฟล์ที่ไม่ต้องการ แปลงรูปร่างข้อมูล แล้วค่อยเรียงผลลัพธ์ใหม่.",
      "โค้ดที่ควรปรับ sort array เดิมและเติม field ลง object เดิม ทำให้ code อื่นที่ถือ reference เดียวกันถูกกระทบ.",
    ],
    reviewNotes: [
      "เวลารีวิว collection logic ให้ถามว่าฟังก์ชันนี้เปลี่ยน input หรือคืนมุมมองใหม่ของข้อมูล Hidden mutation ใน loop มักดูไม่อันตรายตอนแรก.",
    ],
  },
  "javascript/promise-concurrency": {
    title: "รัน promise พร้อมกันเมื่อไม่ขึ้นต่อกัน",
    summary: "งาน async ที่ไม่พึ่งผลลัพธ์กันควรถูกเริ่มพร้อมกัน แทนการ await ทีละคำขอ.",
    takeaways: ["ใช้ Promise.all กับงานที่จำเป็นและเป็นอิสระต่อกัน ส่วน await แบบเรียงลำดับควรใช้เมื่อมี dependency จริง."],
    whatToReview: [
      "โค้ดที่ดีเริ่ม request อิสระหลายตัวพร้อมกัน แล้วรอผลรวมครั้งเดียว.",
      "โค้ดที่ควรปรับทำให้ request แต่ละตัวรอตัวก่อนหน้า ทั้งที่ไม่มีตัวไหนใช้ผลของกันและกัน ทำให้หน้าช้าลงโดยไม่จำเป็น.",
    ],
    reviewNotes: [
      "อย่า assume ว่า await ที่เรียงกันคือ sequencing ที่จำเป็นเสมอ ให้ถามว่า operation ไหนต้องใช้ผลลัพธ์ก่อนหน้า และอันไหนรวมเป็น concurrent work ได้.",
    ],
  },
  "javascript/event-listener-cleanup": {
    title: "การ cleanup event listener",
    summary: "ทุก listener ควรมีทางถอดออก เพื่อไม่ให้ setup ซ้ำแล้วพฤติกรรมซ้อนกัน.",
    takeaways: ["เก็บ handler reference ให้ stable และคืน cleanup function เมื่อติด event listener."],
    whatToReview: [
      "โค้ดที่ดีเก็บ reference ของ handler และคืน function สำหรับ remove listener เมื่อ UI ถูกถอด.",
      "โค้ดที่ควรปรับใช้ anonymous listener แล้ว caller ไม่มีทางถอดออกได้จริง ทำให้ shortcut หรือ handler ซ้ำหลัง setup หลายรอบ.",
    ],
    reviewNotes: [
      "เวลาเห็น listener, subscription, timer หรือ observer ให้ถามคำเดียวกันเสมอว่า cleanup อยู่ตรงไหน ถ้าตอบไม่ได้ behavior อาจเพิ่มขึ้นเรื่อย ๆ.",
    ],
  },
  "javascript/module-boundaries-globals": {
    title: "ขอบเขต module และ global state",
    summary: "เก็บ behavior ที่ใช้ร่วมกันไว้หลัง module API แทนการกระจาย mutable global state.",
    takeaways: ["เปิดเผย function เล็ก ๆ จาก module และส่ง dependency เข้ามาเมื่อ code ต้องใช้ storage, network หรือ browser API."],
    whatToReview: [
      "โค้ดที่ดีซ่อน storage key ใน module และรับ storage เป็น dependency ทำให้ test และ reuse ง่ายขึ้น.",
      "โค้ดที่ควรปรับเขียนลง window และ localStorage ตรง ๆ ทำให้ code ที่ไม่เกี่ยวข้องเปลี่ยน state ได้โดยไม่ผ่าน API ชัดเจน.",
    ],
    reviewNotes: [
      "global ไม่ได้ผิดเสมอ แต่ควรตั้งใจใช้ ขอบเขต module ที่ดีควรบอก caller ว่าต้องใช้งานยังไง โดยไม่ต้องรู้ว่าค่าทุกอย่างถูกเก็บไว้ที่ไหน.",
    ],
  },
  "javascript/dates-time-zones": {
    title: "วันที่และ time zone",
    summary: "format วันที่ด้วย locale และ time zone ที่ตั้งใจ แทนการประกอบวันที่เองจากค่า runtime.",
    takeaways: ["ใช้ Intl สำหรับ date formatting และส่ง time zone ให้ชัดเมื่อวันที่ที่แสดงมีความสำคัญ."],
    whatToReview: [
      "โค้ดที่ดีทำให้ locale และ time zone เป็นส่วนหนึ่งของการตัดสินใจ จึงแสดง timestamp เดียวกันได้สอดคล้องกับกลุ่มผู้ใช้.",
      "โค้ดที่ควรปรับประกอบวันที่เองด้วย local time zone ของเครื่อง ทำให้วันที่อาจเลื่อนสำหรับผู้ใช้คนละภูมิภาค.",
    ],
    reviewNotes: [
      "วันที่ควรถูกรีวิวด้วยความระวังเป็นพิเศษ เพราะมักใช้ได้บนเครื่องเราแต่พังที่ขอบวัน ขอบเดือน หรือ time zone การ format แบบ explicit ปลอดภัยกว่า default ที่ซ่อนอยู่.",
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
  "typescript/type-inference-boundaries": {
    title: "type inference และ boundary ที่ชัด",
    summary: "ปล่อยให้ TypeScript infer ค่าภายในได้ แต่ระบุ type ที่ขอบเขตซึ่ง code อื่นต้องพึ่งพา.",
    takeaways: ["ใส่ type ให้ input, return contract และ exported API ส่วนค่าภายในปล่อยให้ infer จาก implementation ได้."],
    whatToReview: [
      "โค้ดที่ดีระบุ type ที่ input boundary และปล่อยให้ค่าภายในกับ object ที่ return infer จากค่าจริง.",
      "โค้ดที่ควรปรับใส่ type ให้ตัวแปรภายใน แต่ปล่อย public input เป็น any ทำให้จุดที่สำคัญที่สุดยังไม่น่าเชื่อถือ.",
    ],
    reviewNotes: [
      "เวลารีวิวให้ดูว่ามี annotation อยู่ผิดที่ไหม Type มีค่าที่สุดตรงจุดที่ code ข้าม boundary เช่น exported function, API adapter, callback contract และข้อมูลจากภายนอก module.",
    ],
  },
  "typescript/unsafe-assertions": {
    title: "เลี่ยง assertion ที่ไม่ปลอดภัย",
    summary: "ใช้ check ที่พิสูจน์รูปร่างของข้อมูล แทน assertion ที่แค่ทำให้ compiler เงียบ.",
    takeaways: ["ใช้ as เป็นทางเลือกท้าย ๆ ที่ boundary ที่เชื่อถือได้ ไม่ใช่ทางลัดเพื่อข้าม validation."],
    whatToReview: [
      "โค้ดที่ดีสร้างความน่าเชื่อถือด้วยการตรวจ runtime shape ก่อนคืนค่าเป็น application data ที่มี type.",
      "โค้ดที่ควรปรับบอก TypeScript ให้เชื่อ value ว่าเป็น Session โดยไม่พิสูจน์อะไรเลย ทำให้ข้อมูลผิดรูปไหลผ่านระบบได้.",
    ],
    reviewNotes: [
      "Assertion ควรถูกมองซ้ำเสมอเมื่อค่ามาจาก JSON, storage, network, URL params หรือ third-party code ยิ่ง assertion ใกล้ข้อมูลที่ไม่น่าเชื่อถือเท่าไร ยิ่งต้องมีหลักฐานรองรับ.",
    ],
  },
  "typescript/exhaustive-never-checks": {
    title: "ตรวจ case ให้ครบด้วย never",
    summary: "ทำให้ union ทุกกรณีถูก handle ครบ เพื่อให้ state ใหม่เตือนเราตั้งแต่ตอนพัฒนา.",
    takeaways: ["ใช้ never ใน branch สุดท้ายเพื่อให้ missing union case กลายเป็น type error."],
    whatToReview: [
      "โค้ดที่ดีทำให้ branch สุดท้ายเป็นไปไม่ได้เมื่อ handle union ครบทุกกรณี และเตือนทันทีเมื่อเพิ่ม state ใหม่.",
      "โค้ดที่ควรปรับซ่อน case ที่ขาดไว้หลัง fallback กว้าง ๆ ทำให้ state ใหม่แสดงเป็น Unknown แทนที่จะบังคับให้เขียน behavior จริง.",
    ],
    reviewNotes: [
      "default branch ของ discriminated union อาจใจดีเกินไป ถ้าเรารู้ทุก case อยู่แล้ว exhaustive check จะเป็นสัญญาณเตือนที่ดีมากตอนแก้ในอนาคต.",
    ],
  },
  "typescript/optional-vs-nullable": {
    title: "optional property กับ nullable value",
    summary: "ใช้ optional และ nullable เพื่อสื่อ absence คนละแบบให้ชัดเจน.",
    takeaways: ["ใช้ ? เมื่อ property อาจไม่มีอยู่ และใช้ null เมื่อ property มีอยู่แต่ตั้งใจให้ว่าง."],
    whatToReview: [
      "โค้ดที่ดีแยก field ที่ยังไม่ถูกกรอกออกจาก field ที่ตั้งใจไม่มี avatar อย่างชัดเจน.",
      "โค้ดที่ควรปรับยอมทั้ง undefined และ null แทบทุกที่ ทำให้ caller แยกไม่ออกว่าข้อมูลหาย ถูกล้าง หรือยังโหลดไม่เสร็จ.",
    ],
    reviewNotes: [
      "absence เป็นส่วนหนึ่งของ domain model ไม่ใช่รายละเอียดเล็ก ๆ optional กับ nullable หมายถึงคนละเรื่อง และถ้าปนกันง่ายเกินไป consumer ทุกตัวต้องเดาซ้ำ.",
    ],
  },
  "typescript/generic-constraints": {
    title: "generic constraints ที่ปลอดภัย",
    summary: "จำกัด generic ด้วย field ที่ function ต้องใช้จริง เพื่อให้ยืดหยุ่นแต่ยังปลอดภัย.",
    takeaways: ["ใช้ extends เพื่อให้ generic function รับได้หลาย shape โดยไม่สูญเสีย property ที่ implementation ต้องพึ่งพา."],
    whatToReview: [
      "โค้ดที่ดีคงความ generic ไว้ แต่ระบุว่าของทุกชิ้นต้องมี updatedAt เป็นส่วนหนึ่งของ contract.",
      "โค้ดที่ควรปรับรับ type อะไรก็ได้แล้วหนีด้วย any ข้างใน ทำให้ invalid call compile ผ่านและไปพังทีหลัง.",
    ],
    reviewNotes: [
      "Generic ที่ cast เป็น any ทันที มักขาด constraint ที่ถูกต้อง Type parameter ควรบอกว่าอะไรเปลี่ยนได้ และ function ยังต้องการอะไรแน่นอน.",
    ],
  },
  "typescript/utility-types-api-boundaries": {
    title: "utility types ที่ API boundary",
    summary: "สร้าง request หรือ view type ที่เฉพาะเจาะจงจาก domain type โดยไม่เปิดเผย field เกินจำเป็น.",
    takeaways: ["ใช้ Pick, Omit, Partial และ Readonly เพื่ออธิบาย contract เฉพาะ boundary จาก type ที่มีอยู่."],
    whatToReview: [
      "โค้ดที่ดีเปิดเผยเฉพาะ field ที่ list API ต้องใช้ และยังผูก response type กับ domain model เดิม.",
      "โค้ดที่ควรปรับคืน domain object ทั้งก้อน รวมถึง field ภายในที่ boundary ไม่ควร promise ให้ caller ภายนอก.",
    ],
    reviewNotes: [
      "Utility types มีประโยชน์เมื่อทำให้ boundary เล็กและชัดขึ้น มันควรสื่อ product contract ไม่ใช่แค่ย่อ type ซับซ้อนให้ดูสั้น.",
    ],
  },
  "typescript/type-only-imports-module-boundaries": {
    title: "type-only import และ module boundary",
    summary: "แยก type dependency ออกจาก runtime dependency เพื่อให้ module เบาและขอบเขตชัด.",
    takeaways: ["ใช้ import type เมื่อ module ต้องการแค่ type และใช้ import ปกติเมื่อจำเป็นต้องใช้ runtime value."],
    whatToReview: [
      "โค้ดที่ดีบอกชัดว่า PullRequest เป็น dependency แค่ตอน compile ส่วน formatAuthorName เป็น runtime value จริง.",
      "โค้ดที่ควรปรับ import type เหมือน runtime value ทำให้ dependency story ไม่ชัด และอาจสร้าง runtime coupling ที่ไม่จำเป็นตาม compiler setting.",
    ],
    reviewNotes: [
      "Import เล่าเรื่อง dependency ของ module การใช้ import type ช่วยแยก shape ตอน compile ออกจาก behavior ตอน runtime ทำให้ boundary อ่านง่ายขึ้น.",
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
  "react/stable-keys-lists": {
    title: "key ใน list ที่ stable",
    summary: "ใช้ id ที่คงที่เป็น key เพื่อให้ React รักษาตัวตนของ item ได้ถูกต้อง.",
    takeaways: ["หลีกเลี่ยงการใช้ index เป็น key เมื่อ list มีการเพิ่ม ลบ เรียง หรือ filter."],
    whatToReview: [
      "โค้ดที่ดีใช้ id ของ comment เป็น key ทำให้ React จับคู่ DOM และ state กับ item เดิมได้.",
      "โค้ดที่ควรปรับใช้ตำแหน่งใน array เป็น key ซึ่งพังง่ายเมื่อ list เปลี่ยนลำดับ.",
    ],
    reviewNotes: [
      "ตอนรีวิว list ให้ถามว่า key นี้ยังชี้ item เดิมอยู่ไหมหลังเพิ่ม ลบ หรือ sort. bug จาก key ไม่ stable มักซ่อนอยู่จนข้อมูลเริ่มเปลี่ยนจริง.",
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
  "react/updating-state-from-previous-state": {
    title: "อัปเดต state จากค่าก่อนหน้า",
    summary: "ใช้ functional update เมื่อค่า state ใหม่ต้องคำนวณจาก state ปัจจุบัน.",
    takeaways: ["ถ้า next state อ้างอิง previous state ให้ส่ง function เข้า setter."],
    whatToReview: [
      "โค้ดที่ดีให้ React ส่งค่า state ล่าสุดเข้ามาก่อนคำนวณ selected ids ชุดใหม่.",
      "โค้ดที่ควรปรับคำนวณจากค่า selectedIds ที่ถูกจับไว้ตอน render ทำให้ update หายได้.",
    ],
    reviewNotes: [
      "เวลาเห็น setState ที่ใช้ state ตัวเดิมประกอบค่าใหม่ ให้พิจารณา functional update. เคสนี้สำคัญมากเมื่อมี event เร็ว ๆ batching หรือ callback ที่รันทีหลัง.",
    ],
  },
  "react/controlled-form-inputs": {
    title: "controlled form input ที่ชัดเจน",
    summary: "ให้ค่าของ form อยู่ใน React state เมื่อ UI ต้อง validate, reset หรือ submit ด้วย logic ของเรา.",
    takeaways: ["controlled input ทำให้ค่าที่เห็นและค่าที่ submit มาจากแหล่งเดียวกัน."],
    whatToReview: [
      "โค้ดที่ดีผูก input กับ state และใช้ค่าเดียวกันตอน validate, submit และ reset.",
      "โค้ดที่ควรปรับ query DOM เพื่ออ่านและแก้ input เอง ทำให้ data flow หลุดจาก React.",
    ],
    reviewNotes: [
      "ตอนรีวิว form ให้ดูว่าค่านี้มี behavior มากกว่า native submit ไหม. ถ้ามี validation, disabled state หรือ error message การเก็บค่าใน React จะดูแลง่ายกว่า.",
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
  "react/async-effect-cleanup": {
    title: "cleanup งาน async ใน effect",
    summary: "ป้องกัน response เก่าจาก async effect ไม่ให้มาเขียนทับหน้าจอปัจจุบัน.",
    takeaways: ["effect ที่เริ่มงาน async ควร cleanup เมื่อ input เปลี่ยนหรือ component unmount."],
    whatToReview: [
      "โค้ดที่ดีตั้ง flag cleanup เพื่อไม่ให้ promise เก่า update state หลังหน้าจอเปลี่ยนไปแล้ว.",
      "โค้ดที่ควรปรับเริ่ม request ใหม่ทุกครั้งแต่ปล่อย response เก่ากลับมาเขียน state ได้.",
    ],
    reviewNotes: [
      "ตอนรีวิว async effect ให้ลองคิดกรณีผู้ใช้กดเปลี่ยนหน้าเร็ว ๆ หรือ request ตอบกลับคนละลำดับ. dependency ครบอย่างเดียวอาจยังไม่พอถ้าไม่มี cleanup.",
    ],
  },
  "react/context-boundaries": {
    title: "ขอบเขตของ context",
    summary: "ใช้ context กับข้อมูลร่วมที่เป็น ambient จริง ๆ ไม่ใช่ทางลัดเลี่ยง props ทุกอย่าง.",
    takeaways: ["context ที่แคบช่วยให้ component ไม่ subscribe state ที่ไม่เกี่ยวข้อง."],
    whatToReview: [
      "โค้ดที่ดีใช้ context เฉพาะ viewer และส่งข้อมูล review ผ่าน props ที่ชัดเจน.",
      "โค้ดที่ควรปรับใส่ state ทั้งแอปใน context เดียว ทำให้ component รู้และ rerender เกินจำเป็น.",
    ],
    reviewNotes: [
      "ตอนรีวิว consumer ของ context ให้เทียบว่ามันรับข้อมูลมากแค่ไหนกับสิ่งที่ render จริง. context กว้างเกินไปทำให้ reuse ยากและ performance คาดเดายาก.",
    ],
  },
  "react/memoization-when-it-helps": {
    title: "memoization เมื่อช่วยจริง",
    summary: "ใช้ memoization เมื่อมีงานแพงที่ต้องเลี่ยงซ้ำ พร้อม dependency ที่ถูกต้อง.",
    takeaways: ["memoization ควรมีเหตุผลด้าน cost และ dependency list ต้องครบ."],
    whatToReview: [
      "โค้ดที่ดี memoize ผลลัพธ์การ filter ที่ขึ้นกับ reviews และ search อย่างชัดเจน.",
      "โค้ดที่ควรปรับใช้ dependency ว่างจนข้อมูล stale และ memoize ข้อความง่าย ๆ โดยไม่จำเป็น.",
    ],
    reviewNotes: [
      "ตอนรีวิว useMemo หรือ useCallback ให้ถามว่ามันแก้ปัญหา performance อะไร และ dependency ครบไหม. memo ที่ผิดทำให้โค้ดดูเร็วขึ้นแต่จริง ๆ freeze ข้อมูลเก่า.",
    ],
  },
  "react/composition-over-prop-flags": {
    title: "composition แทน prop flag",
    summary: "ใช้ children หรือ slot สำหรับ UI หลายรูปแบบ แทนการเพิ่ม boolean prop ไปเรื่อย ๆ.",
    takeaways: ["composition ช่วยลด prop combination ที่ผิดพลาดง่ายใน component ที่มีหลาย variant."],
    whatToReview: [
      "โค้ดที่ดีให้ caller ส่ง action และ content เข้ามาประกอบ panel ตาม use case.",
      "โค้ดที่ควรปรับมี mode และ boolean หลายตัว ทำให้เกิด combination ที่ component ไม่ได้ตั้งใจรองรับ.",
    ],
    reviewNotes: [
      "ถ้าทุก requirement ใหม่ทำให้ component เพิ่ม flag อีกตัว ให้ลองมองหา composition. API แบบ slot ช่วยให้ caller สร้าง UI ที่ต้องการโดยไม่บังคับ component ให้รู้ทุก variant.",
    ],
  },
  "nextjs/app-router-file-conventions": {
    title: "โครงไฟล์ App Router",
    summary: "ใช้ folder และ special file ของ App Router ให้ route ตรงกับ convention ของ Next.js.",
    takeaways: ["route ที่ดีควรให้โครง folder เป็นตัวบอก URL และ dynamic segment."],
    whatToReview: [
      "โค้ดที่ดีใช้ `app/projects/[projectId]/page.tsx` และอ่าน params จาก route props ที่ Next.js ส่งให้.",
      "โค้ดที่ควรปรับตั้งชื่อไฟล์เองและแยก URL ด้วย browser API ทำให้เสีย routing feature ของ framework.",
    ],
    reviewNotes: [
      "ตอนรีวิว Next.js ให้เริ่มจากโครงไฟล์ก่อน. ถ้า route ไม่ตรง App Router convention มักจะเสีย typing, static params และ behavior ที่ Next.js เตรียมไว้.",
    ],
  },
  "nextjs/layout-page-boundaries": {
    title: "ขอบเขต layout กับ page",
    summary: "ให้ layout เก็บ UI ที่ใช้ร่วมกัน ส่วน page รับผิดชอบข้อมูลและเนื้อหาของ route ปลายทาง.",
    takeaways: ["layout ควรเป็น shared shell ไม่ใช่ที่รวม data fetching ของทุกหน้า."],
    whatToReview: [
      "โค้ดที่ดีวาง navigation ที่อยู่ร่วมทุก child route ใน layout และปล่อยให้ children render page เฉพาะทาง.",
      "โค้ดที่ควรปรับ fetch ข้อมูลเฉพาะหน้าลงใน layout ทำให้ child route ที่ไม่เกี่ยวข้องต้องรอไปด้วย.",
    ],
    reviewNotes: [
      "เวลาเห็น layout fetch ข้อมูล ให้ถามว่าทุกหน้าลูกต้องใช้จริงไหม. layout อยู่ค้างระหว่าง navigation จึงควรเก็บเฉพาะ UI หรือข้อมูลที่ shared จริง.",
    ],
  },
  "nextjs/server-client-components": {
    title: "Server และ Client Component",
    summary: "ใช้ Server Component กับข้อมูลและ secret ส่วน Client Component ใช้เฉพาะจุดที่ต้องมี interaction.",
    takeaways: ["อย่าใส่ `use client` ให้ทั้ง route เพียงเพราะ child component หนึ่งต้องมี state."],
    whatToReview: [
      "โค้ดที่ดี fetch review ใน Server Component แล้วส่งข้อมูลที่ต้อง interactive ให้ Client Component เล็ก ๆ.",
      "โค้ดที่ควรปรับย้ายทั้ง page ไป client ทำให้ fetch หลัง hydration และเสียประโยชน์จาก server rendering.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ระวัง `use client` ที่อยู่สูงเกินไป. directive นี้ทำให้ imports ใน module graph กลายเป็น client bundle จึงควรวางที่ขอบเขตเล็กที่สุด.",
    ],
  },
  "nextjs/small-client-islands": {
    title: "client island ขนาดเล็ก",
    summary: "แยก behavior ที่ต้องใช้ browser ไว้ใน component เล็กที่สุด เพื่อรักษา server shell ให้เบา.",
    takeaways: ["client island เล็กช่วยลด JavaScript และ hydration ที่ไม่จำเป็น."],
    whatToReview: [
      "โค้ดที่ดีให้ root layout เป็น Server Component และ import SearchBox ที่เป็น client เฉพาะจุด.",
      "โค้ดที่ควรปรับทำให้ root layout เป็น client เพียงเพื่อเก็บ state ของ input เดียว.",
    ],
    reviewNotes: [
      "ถ้า hook อย่าง useState หรือ useEffect โผล่ในไฟล์ใหญ่ ให้ถามว่าสามารถแยกเป็น client island ได้ไหม. วิธีนี้ช่วยให้ static UI ไม่ถูกลากเข้าบราวเซอร์.",
    ],
  },
  "nextjs/server-side-data-fetching": {
    title: "fetch ข้อมูลฝั่ง server",
    summary: "ดึงข้อมูลที่จำเป็นต่อหน้าใน Server Component เพื่อ render หน้าด้วยข้อมูลพร้อมใช้.",
    takeaways: ["ข้อมูลที่จำเป็นต่อ first render มักควรถูก fetch ใน server route ไม่ใช่หลัง hydration."],
    whatToReview: [
      "โค้ดที่ดี await params ตามรูปแบบ Next.js แล้ว fetch article ฝั่ง server พร้อมใช้ notFound เมื่อไม่พบข้อมูล.",
      "โค้ดที่ควรปรับ fetch ข้อมูลหลักของหน้าผ่าน client effect ทำให้ผู้ใช้และ crawler เห็น loading ก่อนเสมอ.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้แยกข้อมูลที่จำเป็นต่อหน้าออกจากข้อมูล client-only. การเพิ่ม API hop โดยไม่จำเป็นมักทำให้ช้าลงและเพิ่ม boundary ให้ดูแล.",
    ],
  },
  "nextjs/parallel-data-fetching": {
    title: "fetch ข้อมูลแบบ parallel",
    summary: "เริ่ม request ที่ไม่ขึ้นต่อกันพร้อมกัน แล้วค่อย await พร้อมกันเพื่อลด waterfall.",
    takeaways: ["ถ้า request ไม่พึ่งผลลัพธ์กัน ให้เริ่มก่อน await ด้วย Promise.all."],
    whatToReview: [
      "โค้ดที่ดีเริ่ม projectPromise และ summaryPromise ก่อน แล้ว await พร้อมกัน.",
      "โค้ดที่ควรปรับ await request แรกจบก่อนเริ่ม request ที่สอง ทั้งที่ข้อมูลไม่พึ่งกัน.",
    ],
    reviewNotes: [
      "เวลารีวิว async server component ให้ไล่ dependency ของแต่ละ await. waterfall ใน server rendering มักดูเรียบง่ายแต่ทำให้ route ช้าตามผลรวมของทุก request.",
    ],
  },
  "nextjs/loading-error-boundaries": {
    title: "loading และ error boundary",
    summary: "ใช้ loading และ error file เพื่อให้ dynamic route มี feedback ทันทีและกู้คืนจาก error ได้.",
    takeaways: ["route ที่ดีควรมี loading UI และ error boundary ตามจุดที่ failure กระทบผู้ใช้."],
    whatToReview: [
      "โค้ดที่ดีใช้ `error.tsx` เป็น Client Component ที่แสดง fallback และปุ่ม retry.",
      "โค้ดที่ควรปรับ catch error ทุกอย่างใน page ทำให้ boundary จับไม่ได้และผู้ใช้ไม่มีทาง retry ชัดเจน.",
    ],
    reviewNotes: [
      "ตอนรีวิว route ที่ fetch ข้อมูลช้า ให้มองหา loading state และ error boundary. การ return ข้อความกว้าง ๆ จาก catch มักซ่อน bug และทำให้ observability แย่ลง.",
    ],
  },
  "nextjs/caching-revalidation-intent": {
    title: "เจตนา caching และ revalidation",
    summary: "ระบุให้ชัดว่าข้อมูลควรสดทุก request หรือ cache ได้ พร้อมอายุและ tag ที่ใช้ revalidate.",
    takeaways: ["อย่าพึ่ง assumption ว่า fetch จะ cache ให้เอง ถ้าต้อง cache ให้ประกาศเจตนาไว้ในโค้ด."],
    whatToReview: [
      "โค้ดที่ดีใช้ `use cache`, cacheLife และ cacheTag เพื่อบอกว่าบทความเผยแพร่ cache ได้เป็นชั่วโมง.",
      "โค้ดที่ควรปรับ fetch จาก CMS โดยไม่มี policy ทำให้ freshness และ performance คลุมเครือ.",
    ],
    reviewNotes: [
      "ใน Next.js รุ่นนี้ fetch ไม่ได้ cache โดย default. ตอนรีวิวให้ถามเสมอว่าข้อมูลนี้ต้องสดแค่ไหน และ mutation ใดควร revalidate cache นี้.",
    ],
  },
  "nextjs/metadata-per-route": {
    title: "metadata ราย route",
    summary: "ใช้ Metadata API หรือ generateMetadata ฝั่ง server แทนการแก้ document head ด้วย client effect.",
    takeaways: ["metadata ของ route ควรเป็นส่วนหนึ่งของ route contract ไม่ใช่ side effect ใน browser."],
    whatToReview: [
      "โค้ดที่ดีสร้าง title และ description จากข้อมูล article ใน generateMetadata.",
      "โค้ดที่ควรปรับตั้ง document.title หลัง hydration ทำให้ crawler หรือ social preview พลาด metadata สำคัญได้.",
    ],
    reviewNotes: [
      "ตอนรีวิว SEO ใน App Router ให้มองหา metadata export หรือ generateMetadata. ถ้า head ถูกแก้ใน useEffect แปลว่าข้อมูลสำคัญมาช้าเกินไป.",
    ],
  },
  "nextjs/route-handlers-api-boundaries": {
    title: "Route Handler เป็น API boundary",
    summary: "ใช้ route.ts สำหรับ HTTP API แยกจาก page UI และตอบ status ให้ชัดเจน.",
    takeaways: ["Route Handler ควร validate request และคืน Response ที่บอก error/status ชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีวาง API ไว้ใน `app/api/reviews/[id]/route.ts` และตอบ 404 เมื่อไม่พบ review.",
      "โค้ดที่ควรปรับผสม GET handler กับ page ที่ segment เดียวกัน ทำให้ชนกับ route resolution ของ App Router.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าไฟล์นี้กำลัง serve UI หรือ HTTP data. page และ route handler เป็น primitive คนละแบบและไม่ควรอยู่ระดับ route เดียวกัน.",
    ],
  },
  "nodejs/runtime-boundaries-entry-points": {
    title: "ขอบเขต runtime และ entry point",
    summary: "แยก process startup ออกจาก application wiring ที่ควร import ไปใช้ซ้ำได้.",
    takeaways: ["module ของ Node.js ควรถูก import ได้โดยไม่เริ่ม process หรือเปิด socket ทันที."],
    whatToReview: [
      "โค้ดที่ดีให้ server entry point เป็นคนอ่าน config สร้าง app และ listen port อย่างชัดเจน.",
      "โค้ดที่ควรปรับเริ่ม server ตอน import module ทำให้ test หรือ script เปิด socket โดยไม่ตั้งใจ.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าเกิดอะไรขึ้นเมื่อไฟล์นี้ถูก import จาก test, worker หรือ script อื่น. side effect ตอน startup ทำให้ compose และ shutdown ยากขึ้นมาก.",
    ],
  },
  "nodejs/async-filesystem-without-blocking": {
    title: "filesystem async ไม่ block event loop",
    summary: "ใช้ filesystem API แบบ async ใน request path เพื่อไม่ให้ disk read หนึ่งครั้ง block request อื่น.",
    takeaways: ["หลีกเลี่ยง filesystem sync call ใน HTTP handler หรือ hot path อื่น ๆ."],
    whatToReview: [
      "โค้ดที่ดีใช้ readFile จาก fs/promises เพื่อปล่อย event loop ระหว่างรอ disk.",
      "โค้ดที่ควรปรับใช้ readFileSync ใน request handler ทำให้ process หยุดรับงานอื่นจนอ่านไฟล์เสร็จ.",
    ],
    reviewNotes: [
      "sync filesystem API อาจโอเคตอน startup หรือ build tooling แต่ควรสงสัยเมื่ออยู่ใน request handler. bug นี้มักไม่ชัดในเครื่อง local แต่กระทบ latency เมื่อมี traffic พร้อมกัน.",
    ],
  },
  "nodejs/async-failure-boundaries": {
    title: "จัดการ error ใน async code",
    summary: "จัดการ rejected promise ที่ boundary ซึ่งยังตอบ response ที่มีประโยชน์ให้ client ได้.",
    takeaways: ["request path แบบ async ควรมี failure path ชัดเจนและส่ง response เพียงครั้งเดียว."],
    whatToReview: [
      "โค้ดที่ดี catch error ที่ HTTP boundary, log context และส่ง 500 ที่อ่านเข้าใจได้.",
      "โค้ดที่ควรปรับสร้าง promise แล้วไม่จัดการ rejection ทำให้ client ค้างหรือเกิด unhandled rejection.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ไล่ทุก promise ใน request code ว่าถ้า reject แล้วใครรับผิดชอบ. happy path ที่ดูสะอาดอาจซ่อน failure behavior ที่ไม่ถูกนิยามไว้เลย.",
    ],
  },
  "nodejs/environment-configuration": {
    title: "environment variable และ config",
    summary: "อ่านและ validate environment configuration ครั้งเดียวตอน startup.",
    takeaways: ["config ควร fail fast พร้อมข้อความชัดเจน ไม่ควรกระจาย process.env ไปทั่ว codebase."],
    whatToReview: [
      "โค้ดที่ดีแปลง env เป็น typed config object และตรวจ required value ก่อน app เริ่มรับ traffic.",
      "โค้ดที่ควรปรับอ่าน process.env ลึกใน infrastructure code พร้อม fallback ที่อาจชี้ production ไปผิดที่.",
    ],
    reviewNotes: [
      "เวลาเห็น process.env กระจายหลายไฟล์ ให้ดึงกลับมาคิดเรื่อง config boundary. configuration bug ควรล้มตั้งแต่เริ่มระบบ ไม่ใช่ล้มตอนผู้ใช้ส่ง request แล้ว.",
    ],
  },
  "nodejs/module-side-effects-startup": {
    title: "module side effect และ startup code",
    summary: "อย่าเริ่ม timer, connection หรือ background job เพียงเพราะมีคน import module.",
    takeaways: ["side effect ควรอยู่หลัง explicit start function หรือ entry point ที่ควบคุม lifecycle ได้."],
    whatToReview: [
      "โค้ดที่ดีมี startCleanupJob ที่เริ่มงานชัดเจนและคืน stop handle สำหรับ shutdown หรือ test.",
      "โค้ดที่ควรปรับเริ่ม setInterval ที่ top level ทำให้ import เพื่อใช้ function เดียวก็เริ่ม background loop.",
    ],
    reviewNotes: [
      "ตอนรีวิว top-level code ให้มองหา timer, connection, subscription และ network call. implicit startup ทำให้ test isolation และ lifecycle control เปราะมาก.",
    ],
  },
  "nodejs/streams-large-payloads": {
    title: "stream สำหรับ payload ขนาดใหญ่",
    summary: "ส่งไฟล์หรือ response ขนาดใหญ่ด้วย stream แทนการโหลดทั้งหมดเข้า memory.",
    takeaways: ["payload ใหญ่ควรใช้ pipeline-based streaming พร้อม error handling."],
    whatToReview: [
      "โค้ดที่ดีใช้ createReadStream กับ pipeline เพื่อรองรับ backpressure และจัดการ stream failure.",
      "โค้ดที่ควรปรับ readFile ทั้งไฟล์ก่อนส่ง response ทำให้ memory เพิ่มตามขนาดไฟล์และจำนวนผู้ใช้.",
    ],
    reviewNotes: [
      "ตอนรีวิว download หรือ export ให้ถามว่าข้อมูลใหญ่ได้แค่ไหนและมี concurrent request ได้กี่ชุด. การโหลดทั้งไฟล์เข้า memory อาจดีใน demo แต่เสี่ยงใน production.",
    ],
  },
  "nodejs/http-request-lifecycle": {
    title: "lifecycle ของ HTTP request",
    summary: "ตรวจ method, จำกัด body และ return หลังส่ง response ตามลำดับที่คาดเดาได้.",
    takeaways: ["handler ที่ดีควร validate ก่อน อ่าน input แบบมี limit และไม่เขียน response ซ้ำ."],
    whatToReview: [
      "โค้ดที่ดีปฏิเสธ method ที่ไม่รองรับก่อนอ่าน body และจำกัดขนาด input.",
      "โค้ดที่ควรปรับอ่าน body ไม่จำกัดก่อนเช็ค method และยังอาจ response ซ้ำหลังส่ง 405.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ไล่ request ตั้งแต่ entry จนจบ response. lifecycle bug มักโผล่กับ invalid method, body ใหญ่ หรือ client ที่ disconnect กลางทาง.",
    ],
  },
  "nodejs/graceful-shutdown-signals": {
    title: "graceful shutdown และ process signal",
    summary: "หยุดรับงานใหม่และปิด resource เมื่อ process ได้รับสัญญาณ shutdown.",
    takeaways: ["Node process ใน production ควร drain HTTP และ dependency connection ก่อน exit."],
    whatToReview: [
      "โค้ดที่ดีใช้ server.close ปิด database และมี timeout กัน shutdown ค้าง.",
      "โค้ดที่ควรปรับ process.exit ทันทีเมื่อได้ SIGTERM หรือ SIGINT ทำให้ request ที่กำลังทำงานหลุดได้.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้คิดถึง deploy, container restart และ Ctrl+C ตอน local. signal handling เป็นความถูกต้องของ production ไม่ใช่แค่งาน operation สวย ๆ.",
    ],
  },
  "nodejs/structured-logging": {
    title: "structured logging ที่เป็นระบบ",
    summary: "log เป็น event ที่ machine อ่านได้ มี context ของ request และไม่ใส่ข้อมูลลับ.",
    takeaways: ["log ควรช่วย correlate behavior โดยไม่รั่ว secret หรือข้อมูลส่วนตัว."],
    whatToReview: [
      "โค้ดที่ดี log JSON ด้วย field ที่คงที่ เช่น level, message, requestId และ durationMs.",
      "โค้ดที่ควรปรับ log string อิสระและใส่ password ลง log ซึ่งกลายเป็นความเสี่ยงด้าน security.",
    ],
    reviewNotes: [
      "ตอนรีวิว log ให้ดู correlation id, event name, level และ sensitive field. log เป็น production data จึงต้องค้นหาได้และต้องไม่กลายเป็นที่เก็บ secret.",
    ],
  },
  "nodejs/input-validation-path-safety": {
    title: "validate input และ path safety",
    summary: "validate user input ก่อนนำไปใช้กับ filesystem path หรือ operation ที่ sensitive.",
    takeaways: ["path ที่มาจากผู้ใช้ควรถูก resolve เทียบกับ root ที่อนุญาตและปฏิเสธ traversal."],
    whatToReview: [
      "โค้ดที่ดี validate filename, resolve เทียบ upload root และป้องกัน path ที่หลุดออกนอก directory.",
      "โค้ดที่ควรปรับ join user input เข้ากับ path ตรง ๆ ทำให้ traversal input ชี้ไปไฟล์นอกพื้นที่ที่ตั้งใจได้.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้มอง file path, shell argument, URL และ database filter เป็น boundary สำคัญ. helper สั้น ๆ อาจเป็นจุดที่ user input ข้ามเข้า operating system.",
    ],
  },
  "express/app-factory-server-startup": {
    title: "app factory กับ server startup",
    summary: "สร้าง Express app แยกจาก process ที่เริ่ม listen port เพื่อให้ test และ compose ได้ง่าย.",
    takeaways: ["Express app ควรถูกสร้างเพื่อทดสอบได้โดยไม่ต้องเปิด port ทันที."],
    whatToReview: [
      "โค้ดที่ดี export createApp เพื่อให้ test หรือ worker สร้าง app เดียวกันได้โดยไม่เริ่ม server.",
      "โค้ดที่ควรปรับเรียก app.listen ตอน import module ทำให้ test หรือ script เปิด port โดยไม่ตั้งใจ.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้แยก app construction ออกจาก process startup. ถ้า import app แล้วเกิด side effect ทันที มักทำให้ shutdown, test isolation และหลาย process ใช้งานยาก.",
    ],
  },
  "express/router-boundaries": {
    title: "ขอบเขตของ router",
    summary: "จัดกลุ่ม route ที่เกี่ยวข้องไว้ใน router เดียวและส่ง dependency เข้ามาอย่างชัดเจน.",
    takeaways: ["router ที่ดีควรรับผิดชอบ resource เดียวและไม่ล้วง global service โดยตรง."],
    whatToReview: [
      "โค้ดที่ดีแยก review routes เป็น router เฉพาะและรับ service dependency ผ่าน factory.",
      "โค้ดที่ควรปรับรวม endpoint หลาย resource ไว้ใน app.ts จน ownership และ dependency ปนกัน.",
    ],
    reviewNotes: [
      "Express ทำให้เพิ่ม route ในไฟล์เดียวได้ง่ายมาก ตอนรีวิวให้ถามว่าไฟล์นี้มี resource boundary ชัดไหม หรือกำลังกลายเป็นศูนย์รวมทุก endpoint.",
    ],
  },
  "express/middleware-order": {
    title: "ลำดับ middleware",
    summary: "เรียง middleware ให้ parsing, security, route, 404 และ error handler ทำงานตามลำดับที่ตั้งใจ.",
    takeaways: ["ลำดับ middleware ใน Express คือ behavior ไม่ใช่แค่การจัดโค้ดให้สวย."],
    whatToReview: [
      "โค้ดที่ดี parse JSON ก่อน route, ใส่ auth ก่อน protected router และวาง error handler หลัง route.",
      "โค้ดที่ควรปรับวาง error handler ก่อน route, auth หลัง router และ parser หลัง route จน pipeline ผิด.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้อ่าน app.use จากบนลงล่างเหมือน pipeline. ทุก middleware เปลี่ยนสิ่งที่ handler ถัดไปเห็น และบางตัวอาจทำให้ handler ถัดไปไม่ถูกเรียกเลย.",
    ],
  },
  "express/request-validation": {
    title: "validate request ที่ boundary",
    summary: "ตรวจ input ของ request ที่ขอบ route ก่อนส่งต่อให้ business service.",
    takeaways: ["route handler ควรส่งค่าที่ validate แล้วเข้า service ไม่ใช่ส่ง raw request body."],
    whatToReview: [
      "โค้ดที่ดี parse body ผ่าน validator และตอบ 400 เมื่อ input ไม่ถูกต้องก่อนเรียก service.",
      "โค้ดที่ควรปรับคัดลอก req.body เข้า service ตรง ๆ ทำให้ missing หรือ malformed input ไปพังชั้นลึก.",
    ],
    reviewNotes: [
      "route boundary คือจุดที่ untrusted input ควรถูกเปลี่ยนเป็น application data ที่เชื่อถือได้. ถ้าปล่อย raw body ผ่านไป error response และ assumption จะกระจายทั่วระบบ.",
    ],
  },
  "express/async-route-error-forwarding": {
    title: "ส่งต่อ error จาก async route",
    summary: "ให้ async route failure เข้า Express error pipeline แทนการกลายเป็นงานที่ไม่มีคนรับผิดชอบ.",
    takeaways: ["async route ควรถูก await โดย Express หรือ forward เข้า next อย่างชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีใช้ async handler และ throw error เพื่อให้ central error handler จัดการ.",
      "โค้ดที่ควรปรับเริ่ม promise chain เองโดยไม่ return หรือ catch ทำให้ failure หลุดจาก request pipeline.",
    ],
    reviewNotes: [
      "Express 5 forward rejected promise จาก async handler ได้ แต่ promise chain ที่เริ่มเองยังต้อง return หรือ catch. ตอนรีวิวให้ไล่ทุก async work ว่าสุดท้ายเข้า error middleware หรือไม่.",
    ],
  },
  "express/central-error-handler": {
    title: "central error handler กลาง",
    summary: "ใช้ error handler กลางเพื่อ map application error เป็น HTTP response ที่สม่ำเสมอ.",
    takeaways: ["error handler กลางช่วยรวม status code, logging และ response body ให้ predictable."],
    whatToReview: [
      "โค้ดที่ดีมี ErrorRequestHandler ที่เช็ค headersSent, map validation error และซ่อน unexpected detail.",
      "โค้ดที่ควรปรับ catch ซ้ำในหลาย route และตอบ status หรือ shape คนละแบบสำหรับ failure คล้ายกัน.",
    ],
    reviewNotes: [
      "ถ้าเห็น catch block ซ้ำ ๆ ใน route มักแปลว่า error pipeline ยังไม่ชัด. ความไม่สม่ำเสมอทำให้ client เขียนยากและ production failure ไล่ยาก.",
    ],
  },
  "express/response-shape-consistency": {
    title: "รูปแบบ response ที่สม่ำเสมอ",
    summary: "ตอบ success และ error ด้วย envelope ที่คาดเดาได้ในทุก route.",
    takeaways: ["client ไม่ควรต้องมี parsing rule เฉพาะ route สำหรับ response รูปแบบพื้นฐาน."],
    whatToReview: [
      "โค้ดที่ดีมี helper สำหรับ ok, created และ fail เพื่อทำให้ API contract สม่ำเสมอ.",
      "โค้ดที่ควรปรับตอบ array, object, string และ nested data shape คนละแบบใน endpoint ใกล้กัน.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้เทียบ response body ของ endpoint ใกล้กัน. response ที่ไม่สม่ำเสมอผลักความซับซ้อนไปให้ client, test และ documentation.",
    ],
  },
  "express/auth-middleware-boundaries": {
    title: "ขอบเขต auth middleware",
    summary: "authenticate หนึ่งครั้งใน middleware แล้วส่ง user context ที่ปลอดภัยให้ route handler.",
    takeaways: ["route ควรใช้ trusted auth context ไม่ใช่ parse credential ซ้ำเองทุก endpoint."],
    whatToReview: [
      "โค้ดที่ดีให้ requireUser อ่าน session และเก็บ user id/role ใน res.locals สำหรับ route ถัดไป.",
      "โค้ดที่ควรปรับ parse authorization header ใน route พร้อมทำ business action ใน handler เดียว.",
    ],
    reviewNotes: [
      "auth logic ควรมี boundary และ failure response ชัดเจน. ถ้าแต่ละ route เขียน auth เอง logic จะ drift ง่ายและเพิ่มความเสี่ยงด้าน security.",
    ],
  },
  "express/rate-limiting-trust-proxy": {
    title: "rate limiting และ trust proxy",
    summary: "ตั้งค่า client IP trust อย่างตั้งใจก่อนใช้ control ที่อิง IP เช่น rate limiting.",
    takeaways: ["rate limiting ควรอิง client identity ที่เชื่อถือได้ โดยเฉพาะเมื่ออยู่หลัง proxy."],
    whatToReview: [
      "โค้ดที่ดีตั้ง trust proxy แบบเจาะจงและกำหนด policy ของ rate limit ที่ชัดเจน.",
      "โค้ดที่ควรปรับ trust proxy ทุก hop และตั้ง limit สูงจน security control แทบไม่มีผล.",
    ],
    reviewNotes: [
      "security middleware ต้องผูกกับ deployment context. ตอนรีวิวให้ถามว่า Express เห็น IP จริงหรือ IP ของ proxy และ policy นี้ป้องกัน abuse ได้จริงไหม.",
    ],
  },
  "express/business-logic-out-of-routes": {
    title: "แยก business logic ออกจาก route",
    summary: "ให้ route handler บางที่สุด โดยส่งต่อ decision และ side effect ให้ service หรือ workflow.",
    takeaways: ["route ควรแปล HTTP เป็น application call ไม่ใช่เก็บ use case ทั้งหมดไว้ใน handler."],
    whatToReview: [
      "โค้ดที่ดีให้ route ส่ง reviewId และ approverId เข้า workflow ที่รับผิดชอบกฎการ approve.",
      "โค้ดที่ควรปรับให้ route อ่าน database, เช็ค business rule, update และส่ง notification เองทั้งหมด.",
    ],
    reviewNotes: [
      "route handler ควร scan ง่ายแม้ use case ซับซ้อน. business rule ที่ซ่อนใน Express handler มัก reuse ยาก test ยาก และจัด transaction ให้ถูกยาก.",
    ],
  },
  "sql/schema-keys-constraints": {
    title: "key และ constraint ของ schema",
    summary: "ออกแบบความเป็นเจ้าของของตารางด้วย primary key, foreign key, uniqueness และ check constraint.",
    takeaways: ["schema ควรช่วยบังคับกฎของข้อมูลที่ application พึ่งพา."],
    whatToReview: [
      "โค้ดที่ดีบอก identity, uniqueness, relationship, field ที่จำเป็น และสถานะที่อนุญาตไว้ใน database ชัดเจน.",
      "โค้ดที่ควรปรับปล่อยให้ข้อมูลสำคัญเป็นแค่ความหวัง ทำให้มี user ซ้ำ review กำพร้า status มั่ว หรือ date ไม่สม่ำเสมอได้.",
    ],
    reviewNotes: [
      "เวลารีวิว SQL ให้เริ่มจาก contract ของ schema ก่อน ถ้า application ถือว่าค่าหนึ่งต้องมีหรือ relation หนึ่งต้องมีอยู่ database ก็ควรช่วย enforce ด้วย.",
    ],
  },
  "sql/explicit-select-columns": {
    title: "ระบุ column ใน SELECT ให้ชัด",
    summary: "เลือกเฉพาะ column ที่ caller ต้องใช้ แทนการพึ่งรูปร่างทั้งหมดของ table.",
    takeaways: ["ผลลัพธ์ของ query คือ API contract รูปร่างของมันจึงควรตั้งใจเลือก."],
    whatToReview: [
      "โค้ดที่ดีระบุ column และ alias ที่ต้องส่งกลับ ทำให้ consumer ได้ result shape ที่คาดเดาได้.",
      "โค้ดที่ควรปรับใช้ SELECT * จน leak column จากหลาย table เสี่ยงชื่อ column ชนกัน และพังเมื่อ schema เปลี่ยน.",
    ],
    reviewNotes: [
      "SELECT * เหมาะกับการลองสำรวจ แต่ไม่เหมาะเป็น contract ใน production ตอนรีวิวให้ถามว่าทุก column ที่ส่งกลับจำเป็นจริงไหม.",
    ],
  },
  "sql/filtering-null-handling": {
    title: "filter และการจัดการ NULL",
    summary: "ใช้ operator ของ NULL และ boolean logic ให้ชัด เพื่อให้ filter ตรงกับข้อมูลจริง.",
    takeaways: ["NULL ไม่เท่ากับอะไรเลย ดังนั้น filter ที่เกี่ยวกับ nullable column ต้องรีวิวละเอียดเป็นพิเศษ."],
    whatToReview: [
      "โค้ดที่ดีใช้ IS NULL และครอบ OR ด้วยวงเล็บ ทำให้ row ที่ถูกลบไม่หลุดเข้ามาในผลลัพธ์.",
      "โค้ดที่ควรปรับเทียบ NULL ด้วย = หรือ != และพึ่งลำดับ AND/OR ที่อ่านยาก ทำให้ได้ row ผิดหรือไม่ได้ row เลย.",
    ],
    reviewNotes: [
      "nullable column เปลี่ยนพฤติกรรมของ filter ได้มาก ตอนรีวิวให้ไล่ AND/OR พร้อมวงเล็บในหัว และถามว่า NULL ควรถูกรวมเข้ามาหรือถูกตัดออก.",
    ],
  },
  "sql/join-cardinality": {
    title: "cardinality ของ join",
    summary: "รีวิว join ว่าเป็น one-to-one, one-to-many หรือมี row ที่อาจหาย ก่อนเชื่อผลลัพธ์.",
    takeaways: ["join เปลี่ยนจำนวน row ได้ จึงต้องรีวิวความสัมพันธ์ก่อนดู column ที่ select."],
    whatToReview: [
      "โค้ดที่ดี aggregate comment ก่อน แล้วใช้ LEFT JOIN เพื่อให้ review ที่ไม่มี comment ยังออกมาหนึ่งแถว.",
      "โค้ดที่ควรปรับ join ไปที่ table ฝั่ง many ตรง ๆ ทำให้ review ซ้ำตามจำนวน comment และ review ที่ไม่มี comment หายไป.",
    ],
    reviewNotes: [
      "ก่อน approve join ให้ถามก่อนว่าผลลัพธ์ควรมีกี่ row ต่อ entity ถ้า caller คาดหวังหนึ่ง row ต่อ review การ join many-side ตรง ๆ คือกลิ่นที่ควรหยุดดู.",
    ],
  },
  "sql/aggregation-grouping": {
    title: "aggregation และ grouping",
    summary: "group ด้วย dimension เดียวกับที่ต้องการรายงาน และทำให้ความหมายของ aggregate ชัด.",
    takeaways: ["ค่าที่ select แต่ไม่ได้ aggregate ควรเป็นส่วนหนึ่งของความตั้งใจในการ group."],
    whatToReview: [
      "โค้ดที่ดีนับจำนวนตามวันและ status ดังนั้นทั้งสอง dimension จึงอยู่ใน SELECT, GROUP BY และ ORDER BY อย่างตั้งใจ.",
      "โค้ดที่ควรปรับผสม timestamp ดิบกับ count ที่ group แค่ status ซึ่งบาง database จะ error และบางกรณีอาจให้ค่าที่ทำให้เข้าใจผิด.",
    ],
    reviewNotes: [
      "aggregation ควรตอบคำถามที่ชัดเจน ตอนรีวิวให้เขียนคำถามนั้นเป็นภาษาคนก่อน แล้วเช็กว่า GROUP BY ตรงกับคำถามจริงไหม.",
    ],
  },
  "sql/index-friendly-predicates": {
    title: "predicate ที่เป็นมิตรกับ index",
    summary: "ทำให้ column ที่มี index ยังค้นหาได้ โดยหลีกเลี่ยง function ที่ครอบ column โดยไม่จำเป็น.",
    takeaways: ["query ที่ถูกต้องยังควรถูกรีวิวได้ ถ้ามันทำให้ database ใช้ index สำคัญไม่ได้."],
    whatToReview: [
      "โค้ดที่ดีเขียนช่วงเวลาเป็น half-open range ทำให้ index บน submitted_at ยังช่วยค้นหาได้.",
      "โค้ดที่ควรปรับ format column ทุก row ก่อนเทียบค่า ถึงจะอ่านง่ายแต่โดยมากทำให้ใช้ index ปกติไม่ได้.",
    ],
    reviewNotes: [
      "performance review เริ่มจากรูปทรง query ไม่ใช่การเดา ถ้า filter แตะข้อมูลเยอะ ให้ดูว่า predicate เปิดทางให้ database seek ผ่าน index ได้ไหม.",
    ],
  },
  "sql/transactions-atomic-workflows": {
    title: "transaction สำหรับ workflow ที่ต้อง atomic",
    summary: "ครอบการเขียนหลาย step ด้วย transaction เพื่อให้ change ที่เกี่ยวข้องสำเร็จหรือล้มพร้อมกัน.",
    takeaways: ["ถ้า business action หนึ่งเขียนหลาย row ให้รีวิวว่า transaction เริ่มและจบตรงไหน."],
    whatToReview: [
      "โค้ดที่ดีมองการเปลี่ยน status และการบันทึก audit event เป็นงานเดียวกัน.",
      "โค้ดที่ควรปรับอาจ approve review แล้วบันทึก event ไม่สำเร็จ ทำให้ระบบอยู่ใน state ที่เล่าเรื่องไม่ครบ.",
    ],
    reviewNotes: [
      "transaction คือ product requirement ที่ซ่อนใน database code ตอนรีวิวให้ถามว่าถ้า statement กลางทาง fail ระบบจะเหลือ state แปลก ๆ อะไรไว้.",
    ],
  },
  "sql/migration-backfills": {
    title: "backfill ใน migration",
    summary: "แยก schema change, backfill และ constraint ที่เข้มขึ้นออกเป็น step ที่ปลอดภัย.",
    takeaways: ["migration ที่ดีต้องเคารพข้อมูลที่มีอยู่แล้ว ไม่ใช่คิดแค่ข้อมูลใหม่."],
    whatToReview: [
      "โค้ดที่ดีเพิ่ม column ก่อน เติมค่าของ row เดิม แล้วค่อยตั้ง NOT NULL เมื่อข้อมูลพร้อม.",
      "โค้ดที่ควรปรับเพิ่ม required column ทันทีทั้งที่ row เดิมยังไม่มีค่า ทำให้ migration fail หรือถูกบังคับใช้ default ที่ไม่ปลอดภัย.",
    ],
    reviewNotes: [
      "รีวิว migration ไม่ใช่รีวิว syntax อย่างเดียว ต้องดูข้อมูลปัจจุบัน ขนาด table แผน rollback และ application จะอยู่ได้ไหมระหว่างแต่ละ step.",
    ],
  },
  "sql/parameterized-queries": {
    title: "parameterized query แบบ bind ค่า",
    summary: "bind input ของผู้ใช้เป็น parameter แทนการต่อ string SQL จากค่าที่ไม่น่าเชื่อถือ.",
    takeaways: ["input ของผู้ใช้ควรเป็นข้อมูลของ query ไม่ใช่กลายเป็นข้อความ SQL."],
    whatToReview: [
      "โค้ดที่ดีทำให้ SQL text คงที่ แล้วส่ง email เป็น bound parameter แยกต่างหาก.",
      "โค้ดที่ควรปรับเอา input ไปต่อใน query string โดยตรง ทำให้ค่าที่มี quote หรือ SQL syntax เปลี่ยนคำสั่งที่ database execute ได้.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ scan string concatenation, template interpolation และ manual escaping รอบ SQL ก่อนเลย การ bind parameter ควรเป็น default habit.",
    ],
  },
  "sql/stable-pagination": {
    title: "pagination ที่ stable",
    summary: "ใช้ order ที่ deterministic และ cursor predicate เพื่อให้ page ยังนิ่งเมื่อข้อมูลเปลี่ยน.",
    takeaways: ["pagination ต้องมี order ที่ stable ไม่ใช่มีแค่ LIMIT."],
    whatToReview: [
      "โค้ดที่ดีใช้ cursor จาก submitted_at และ id ทำให้ database รู้ตำแหน่งต่อที่แน่นอน.",
      "โค้ดที่ควรปรับใช้ OFFSET กับ order ที่ไม่ unique เมื่อมี row ใหม่ page ก่อนหน้าจะเลื่อนจนเกิดรายการซ้ำหรือหาย.",
    ],
    reviewNotes: [
      "OFFSET pagination อาจพอใช้กับ admin screen เล็ก ๆ แต่ feed หรือรายการที่เปลี่ยนบ่อยควรถูกรีวิวเข้มกว่า ปกติ stable order และ cursor จะทนกว่า.",
    ],
  },
  "python/naming-and-readability": {
    title: "การตั้งชื่อและ readability",
    summary: "ใช้ชื่อและฟังก์ชันเล็ก ๆ ที่อธิบายเจตนา โดยไม่บังคับให้คนรีวิวต้องถอดรหัสตัวย่อ.",
    takeaways: ["Python ที่อ่านง่ายเริ่มจากชื่อที่สื่อ domain ไม่ใช่ชื่อที่สื่อแค่ทางลัดของ implementation."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อฟังก์ชันและค่ากลางตามแนวคิดทางธุรกิจ ทำให้อ่านกฎการคิดคะแนนได้โดยไม่ต้องเดา attribute.",
      "โค้ดที่ควรปรับซ่อน domain ไว้หลังชื่อสั้นอย่าง calc, x, a, b ถึงจะทำงานได้แต่ทำให้รีวิว correctness ยากขึ้น.",
    ],
    reviewNotes: [
      "Python มักอ่านเหมือนประโยคได้ถ้าชื่อดี ตอนรีวิวให้ถามว่า teammate ใหม่อธิบายฟังก์ชันจากชื่ออย่างเดียวได้ไหม.",
    ],
  },
  "python/truthy-falsy-none-checks": {
    title: "truthy/falsy และการเช็ก None",
    summary: "แยกค่าที่ไม่มีจริงออกจากค่าที่ถูกต้องแต่เป็น falsy เช่น empty string, zero หรือ empty collection.",
    takeaways: ["ใช้ is None เมื่อ absence ต่างจาก empty value."],
    whatToReview: [
      "โค้ดที่ดีมอง None เป็นกรณี missing และยังเก็บ nickname ว่างที่ตั้งใจส่งมาไว้ได้.",
      "โค้ดที่ควรปรับมองทุกค่า falsy เป็น missing ทำให้ empty string, zero, empty list หรือ False หลุดไป fallback ได้.",
    ],
    reviewNotes: [
      "truthy check ใช้ได้เมื่อ empty value แปลว่าใช้ไม่ได้จริง ๆ แต่ถ้าความหมายคือ not provided ให้ขอ is None หรือ is not None ให้ชัด.",
    ],
  },
  "python/mutable-default-arguments": {
    title: "mutable default argument ที่ควรระวัง",
    summary: "หลีกเลี่ยง default ที่เป็น list, dict หรือ set ร่วมกัน โดยสร้าง object ใหม่ในฟังก์ชันแทน.",
    takeaways: ["default argument ใน Python ถูก evaluate ครั้งเดียว ดังนั้น mutable default อาจ leak state ข้าม call ได้."],
    whatToReview: [
      "โค้ดที่ดีสร้าง list ใหม่เฉพาะตอน caller ไม่ได้ส่ง tags มา.",
      "โค้ดที่ควรปรับใช้ list default เดียวกันซ้ำทุก call ทำให้ tag จาก request หรือ test ก่อนหน้าปนเข้ามาได้.",
    ],
    reviewNotes: [
      "mutable default เป็นจุดคลาสสิกของ Python review ให้ scan signature ที่มี [], {} หรือ set() ก่อนอ่าน body.",
    ],
  },
  "python/list-dict-comprehensions": {
    title: "list และ dict comprehension",
    summary: "ใช้ comprehension กับ transformation ที่ชัด แต่กลับไปใช้ loop เมื่อ branching กลายเป็นเรื่องหลัก.",
    takeaways: ["comprehension ควรทำให้การ filter และ map อ่านง่ายขึ้น ไม่ใช่อัด logic ให้แน่นขึ้น."],
    whatToReview: [
      "โค้ดที่ดีสื่อ filter หนึ่งชั้นและ transformation หนึ่งอย่างในรูปทรงที่ compact.",
      "โค้ดที่ควรปรับกระจาย transformation ง่าย ๆ ไปอยู่ใน nested condition จนเจตนาหลักหายไป.",
    ],
    reviewNotes: [
      "comprehension ดีเมื่ออ่านแล้วพูดได้ว่า filter item เหล่านี้แล้ว map ค่านี้ ถ้ามี side effect หรือ branch หลายชั้น loop ที่ตั้งชื่อดีอาจอ่านง่ายกว่า.",
    ],
  },
  "python/exception-boundaries": {
    title: "boundary ของ exception",
    summary: "catch exception ที่เฉพาะเจาะจงตรง boundary และเก็บ failure เดิมไว้ด้วย exception chaining.",
    takeaways: ["exception ที่ specific ทำให้ failure mode รีวิวได้ ส่วน blanket catch มักซ่อน bug ที่ควรเห็น."],
    whatToReview: [
      "โค้ดที่ดี catch failure ของไฟล์และ JSON ที่คาดไว้ แล้ว raise domain error พร้อม context โดยไม่ทิ้ง original exception.",
      "โค้ดที่ควรปรับ catch ทุกอย่างแล้วคืน config ว่าง ทำให้ permission error, bug ของโปรแกรม และ JSON พังกลายเป็น default เงียบ ๆ.",
    ],
    reviewNotes: [
      "เมื่อเห็น except Exception ให้ถามว่า failure ไหนที่คาดไว้จริง ๆ ถ้า caller ต้องการ error ที่อ่านง่าย ให้ wrap พร้อม context แทนการกลืน error.",
    ],
  },
  "python/context-managers-files": {
    title: "context manager สำหรับไฟล์",
    summary: "ใช้ context manager เพื่อให้ file handle และ resource อื่น ๆ ถูกปิดแม้งานข้างในจะ fail.",
    takeaways: ["lifetime ของ resource ควรมองเห็นได้จากรูปทรงโค้ด ไม่ใช่ซ่อนอยู่ใน manual cleanup."],
    whatToReview: [
      "โค้ดที่ดีใช้ with เพื่อกำหนดขอบเขตของไฟล์ ใส่ encoding และปิดไฟล์แม้การเขียน row ใด row หนึ่งจะล้ม.",
      "โค้ดที่ควรปรับพึ่ง close() เอง ถ้าเกิด exception ใน loop file อาจค้างเปิด และ encoding จะขึ้นกับ environment.",
    ],
    reviewNotes: [
      "context manager ไม่ใช่แค่ style แต่ทำให้ cleanup deterministic และทำให้คนรีวิวเห็น boundary ของ resource ownership.",
    ],
  },
  "python/dataclasses-data-shapes": {
    title: "dataclass สำหรับรูปทรงข้อมูล",
    summary: "ใช้ dataclass กับ data shape ภายในที่คงที่ แทน dict หลวม ๆ ที่มี string key ซ้ำไปมา.",
    takeaways: ["data shape ที่มีชื่อช่วยให้ field, default และ equality behavior รีวิวได้ง่ายขึ้น."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ shape และประกาศทุก field ชัดเจน.",
      "โค้ดที่ควรปรับคืน dict ที่ key กำกวม ทำให้ caller ต้องจำเองว่า name และ ok หมายถึงอะไร และ typo จะเจอช้า.",
    ],
    reviewNotes: [
      "dict เหมาะกับ boundary อย่าง JSON แต่ภายใน application dataclass เล็ก ๆ มักทำให้ contract รีวิวและ test ง่ายกว่า.",
    ],
  },
  "python/type-hints-boundaries": {
    title: "type hint ที่ boundary",
    summary: "ใส่ type hint ตอนข้อมูลเข้าออก module เพื่อให้ assumption เห็นชัดทั้งกับ tool และคนรีวิว.",
    takeaways: ["type hint มีค่าที่สุดตรง module boundary ไม่ใช่ decoration บน local variable ที่เห็นชัดอยู่แล้ว."],
    whatToReview: [
      "โค้ดที่ดีบอกชนิด payload ที่รับและคืน object ที่มีชื่อพร้อม field ที่ typed.",
      "โค้ดที่ควรปรับรับและคืนอะไรก็ได้ ทำให้คนรีวิวไม่เห็นว่า author_id ควรเป็น string, number หรือ optional.",
    ],
    reviewNotes: [
      "ไม่จำเป็นต้อง type ทุกบรรทัดเพื่อให้ได้ประโยชน์ ให้รีวิว boundary ก่อน: parameter, return value และ shared data model.",
    ],
  },
  "python/dependency-injection-testability": {
    title: "dependency injection เพื่อ testability",
    summary: "ส่ง collaborator เข้า function หรือ class เพื่อให้ test behavior ได้โดยไม่ต้อง patch global module.",
    takeaways: ["dependency ที่ inject เข้ามาทำให้ side effect ชัด และทำให้ test โฟกัสที่ behavior."],
    whatToReview: [
      "โค้ดที่ดีทำให้ mailer เป็น dependency ที่ชัดเจน test จึงส่ง fake mailer แล้ว assert behavior ได้.",
      "โค้ดที่ควรปรับ import side-effect function ตรง ๆ ทำให้ test ต้อง patch import path ให้ถูก และ coupling ใน production ถูกซ่อนอยู่.",
    ],
    reviewNotes: [
      "dependency injection ไม่จำเป็นต้องเป็น framework ใน Python แค่ส่ง collaborator เป็น argument ก็มักพอให้โค้ด test ง่ายขึ้น.",
    ],
  },
  "python/async-await-boundaries": {
    title: "boundary ของ async และ await",
    summary: "await งาน async และ gather call ที่เป็นอิสระอย่างตั้งใจ เพื่อไม่ให้ coroutine หลุดออกไปแบบยังไม่เสร็จ.",
    takeaways: ["การเรียก async function แค่สร้างงานที่ต้อง await มันไม่ได้ทำให้งานเสร็จเอง."],
    whatToReview: [
      "โค้ดที่ดีรวบรวม async call ที่เป็นอิสระ แล้ว await พร้อมกันอย่างชัดเจน.",
      "โค้ดที่ควรปรับคืน coroutine object แทน profile data ทำให้ caller ได้ค่าที่งง และ I/O ที่ตั้งใจไว้อาจไม่เสร็จเลย.",
    ],
    reviewNotes: [
      "เวลารีวิว async Python ให้ไล่ทุก coroutine ว่าถูก await, ถูก return อย่างตั้งใจให้ caller await หรือถูก schedule โดยมี owner ชัดเจน.",
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
