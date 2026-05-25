import type { TrackSlug } from "@/lib/content/tracks";
import type { Language } from "./language";

export type LessonThaiTranslation = {
  title: string;
  summary: string;
  takeaways: readonly string[];
  codeComments?: {
    goodCode?: readonly string[];
    badCode?: readonly string[];
  };
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
  php: {
    title: "PHP",
    description:
      "ฝึกรีวิว strict types, request validation, output escaping, PDO query, password, session, config และขอบเขตของ template.",
  },
  java: {
    title: "Java",
    description:
      "ฝึกรีวิว null, Optional, immutable data, value object, exception, resource cleanup, generic, stream, concurrency, record และ service boundary.",
  },
  git: {
    title: "Git",
    description:
      "ฝึกรีวิว status, staging, commit, branch, sync workflow, diff, conflict, history safety, .gitignore และ release tag.",
  },
  fastapi: {
    title: "FastAPI",
    description:
      "ฝึกรีวิว route, Pydantic model, dependency, auth, async handler, database session และ API test.",
  },
  django: {
    title: "Django",
    description:
      "ฝึกรีวิว URL pattern, model, QuerySet, form, view, CSRF, settings, transaction และ test ของ Django.",
  },
  go: {
    title: "Go",
    description:
      "ฝึกรีวิว package, exported API, error, context, interface, goroutine, cleanup, test และ HTTP handler ของ Go.",
  },
  docker: {
    title: "Docker",
    description:
      "ฝึกรีวิว build context, base image, cache layer, multi-stage build, secret, user, healthcheck และ Compose file.",
  },
  tailwindcss: {
    title: "Tailwind CSS",
    description:
      "ฝึกรีวิว utility class, responsive variant, state, theme token, dark mode, component boundary, accessibility และ class conflict.",
  },
} as const satisfies Record<TrackSlug, TrackTranslation>;

export const lessonThaiTranslations = {
  "html/document-language-metadata": {
    codeComments: {
      goodCode: ["metadata ช่วยให้ browser และเครื่องมือช่วยอ่านเริ่มจากข้อมูลที่ถูกต้อง"],
      badCode: ["ไม่ประกาศภาษาและ viewport ทำให้ browser ต้องเดาค่าเริ่มต้นเอง"],
    },
    title: "ภาษาและ metadata ของหน้าเว็บ",
    summary: "ประกาศภาษา charset viewport และ title ตั้งแต่ต้น เพื่อให้ browser และเครื่องมือช่วยอ่านเข้าใจหน้าได้ถูกต้อง.",
    takeaways: ["ทุกหน้าควรมี lang, charset, viewport และ title ที่บอกบริบทของหน้าอย่างชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีบอกภาษา การเข้ารหัส ขนาด viewport และชื่อหน้าให้ browser เข้าใจก่อนเริ่ม render เนื้อหา.",
      "โค้ดที่ควรปรับปล่อยค่าพื้นฐานสำคัญให้ browser เดาเอง ทำให้การอ่านออกเสียงและตัวตนของหน้าอาจผิดไป.",
    ],
    reviewNotes: [
      "เวลารีวิว HTML ให้เริ่มจากส่วนหัวของเอกสารก่อนเสมอ เพราะ body ที่เขียนดีอาจยังใช้งานยากได้ถ้า lang, charset, viewport หรือ title ไม่ชัด.",
    ],
  },
  "html/semantic-document-structure": {
    codeComments: {
      goodCode: ["main และ article ทำให้เห็นโครงสร้างหน้าได้จาก HTML"],
      badCode: ["div ทั่วไปทำให้ความหมายของเนื้อหาถูกซ่อนไว้"],
    },
    title: "โครงสร้าง HTML ที่มีความหมาย",
    summary: "ใช้ landmark และ heading เพื่อให้คนอ่านโค้ด browser และเครื่องมือช่วยอ่านเข้าใจโครงสร้างหน้า.",
    takeaways: ["เลือกแท็กที่สื่อความหมายก่อนใช้ div ครอบทุกอย่าง."],
    whatToReview: [
      "โค้ดที่ดีทำให้โครงสร้างของหน้าเห็นได้จาก HTML เลย ไม่ต้องเดาจาก CSS.",
      "โค้ดที่ควรปรับอาจแสดงผลเหมือนกัน แต่ซ่อนความหมายของเนื้อหาไว้ใน div ทั่วไป.",
    ],
    reviewNotes: [
      "เวลารีวิว ให้ถามว่า browser คนอ่านโค้ด และเครื่องมือช่วยอ่านเข้าใจหน้าได้ไหมโดยไม่ต้องดู style. Semantic HTML คือโครงสร้างของ interface ไม่ใช่แค่เรื่องความสวย.",
    ],
  },
  "html/heading-hierarchy": {
    codeComments: {
      goodCode: ["ระดับ heading เล่าโครงเรื่องของหน้าอย่างเป็นลำดับ"],
      badCode: ["heading ถูกใช้เพื่อขนาดตัวอักษรแทนโครงสร้างเนื้อหา"],
    },
    title: "ลำดับ heading",
    summary: "ใช้ heading เพื่อบอกโครงสร้างเอกสาร ไม่ใช่เลือกตามขนาดตัวอักษรที่อยากได้.",
    takeaways: ["ระดับ heading ควรเรียงตามโครงเรื่อง ไม่ใช่ใช้แทน class สำหรับปรับขนาดฟอนต์."],
    whatToReview: [
      "โค้ดที่ดีทำให้ outline ของหน้าอ่านตามลำดับได้ ตั้งแต่ชื่อหน้า ไปส่วนหลัก แล้วค่อยลงรายละเอียด.",
      "โค้ดที่ควรปรับกระโดดระดับ heading เพราะใช้ heading เพื่อคุมหน้าตา ทำให้คนอ่านและเครื่องมือช่วยอ่านเข้าใจโครงสร้างยาก.",
    ],
    reviewNotes: [
      "ให้ลองอ่านเฉพาะ heading แล้วถามว่ายังเข้าใจหน้าไหม ถ้าไม่เข้าใจ แปลว่า heading อาจกำลังทำหน้าที่จัดหน้าตาแทนการบอกโครงสร้างข้อมูล.",
    ],
  },
  "html/links-and-navigation": {
    codeComments: {
      goodCode: ["anchor จริงทำให้พฤติกรรมการนำทางของ browser ยังอยู่ครบ"],
      badCode: ["click handler และข้อความกว้าง ๆ ทำให้ link ใช้งานยากขึ้น"],
    },
    title: "ลิงก์และการนำทาง",
    summary: "ถ้าพาผู้ใช้ไปที่อื่น ให้ใช้ลิงก์จริงพร้อมข้อความที่บอกปลายทางชัดเจน.",
    takeaways: ["ถ้าการกระทำนั้นพาไปที่อื่น ให้เริ่มจาก anchor ที่มี href และข้อความลิงก์ที่เข้าใจได้."],
    whatToReview: [
      "โค้ดที่ดีใช้ anchor สำหรับการนำทาง และตั้งชื่อปลายทางให้รู้ว่าคลิกแล้วไปไหน.",
      "โค้ดที่ควรปรับซ่อนการนำทางไว้หลัง JavaScript หรือใช้ข้อความกำกวม เช่น click here ทำให้ฟีเจอร์พื้นฐานของ browser ใช้ได้แย่ลง.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าลิงก์ยังเปิดแท็บใหม่ คัดลอก URL โฟกัสด้วย keyboard และอ่านชื่อแล้วเข้าใจปลายทางได้ไหม ถ้าไม่ได้ควรกลับไปใช้ anchor ที่ชัดเจน.",
    ],
  },
  "html/images-alt-text": {
    codeComments: {
      goodCode: ["alt text ควรอธิบายความหมายของรูป ส่วนรูปตกแต่งควรเงียบ"],
      badCode: ["ชื่อไฟล์และคำอธิบายรูปตกแต่งเพิ่มเสียงรบกวนให้ screen reader"],
    },
    title: "รูปภาพและข้อความ alt",
    summary: "เขียน alt text ให้รูปที่สื่อสารข้อมูล และซ่อนรูปตกแต่งจากเครื่องมือช่วยอ่าน.",
    takeaways: ["alt text ควรอธิบายหน้าที่ของรูปในบริบทนั้น ไม่ใช่ทวนชื่อไฟล์."],
    whatToReview: [
      "โค้ดที่ดีอธิบายรูปที่มีความหมายตามสิ่งที่รูปต้องการสื่อ และใช้ alt ว่างกับรูปที่มีไว้ตกแต่ง.",
      "โค้ดที่ควรปรับใช้ชื่อไฟล์หรือรายละเอียดตกแต่งเป็น alt ทำให้ผู้ใช้ได้ข้อมูลที่ไม่ช่วยอะไร.",
    ],
    reviewNotes: [
      "อย่ารีวิวแค่ว่ามี alt หรือไม่มี ให้ดูว่ารูปนั้นทำหน้าที่อะไรในบริบทนี้ เพราะรูปเดียวกันอาจต้องใช้คำอธิบายต่างกันในแต่ละหน้า.",
    ],
  },
  "html/accessible-form-labels": {
    codeComments: {
      goodCode: ["label และข้อความช่วยเหลือเชื่อมกับ input ด้วย id ที่ชัดเจน"],
      badCode: ["placeholder ไม่ใช่ชื่อ field ที่คงอยู่ตลอดเวลา"],
    },
    title: "label ของฟอร์มที่ใช้งานได้จริง",
    summary: "ผูก label กับ input ให้ชัดเจน แทนการพึ่ง placeholder เพียงอย่างเดียว.",
    takeaways: ["input สำคัญควรมี label จริง ไม่ใช่ hint ที่หายไปตอนพิมพ์."],
    whatToReview: [
      "โค้ดที่ดีบอกชื่อ field ผ่าน label ที่เชื่อมกับ input โดยตรง.",
      "โค้ดที่ควรปรับใช้ placeholder เป็นชื่อ field ทำให้ผู้ใช้บางกลุ่มและ screen reader เข้าใจยาก.",
    ],
    reviewNotes: [
      "ตอนรีวิวฟอร์ม ให้เช็กว่าถ้าลบ placeholder ออก ผู้ใช้ยังรู้ไหมว่าต้องกรอกอะไร. label ที่ดีช่วยทั้ง accessibility การทดสอบ และการดูแลฟอร์มระยะยาว.",
    ],
  },
  "html/form-help-errors": {
    codeComments: {
      goodCode: ["aria-describedby เชื่อมคำแนะนำและข้อความ error เข้ากับ field"],
      badCode: ["ข้อความที่อยู่ใกล้กันทางหน้าจอไม่ได้แปลว่าเชื่อมกันจริง"],
    },
    title: "คำแนะนำและ error ของฟอร์ม",
    summary: "เชื่อมข้อความช่วยเหลือและข้อความ error เข้ากับ field เพื่อให้ feedback ถูกอ่านพร้อม input.",
    takeaways: ["ใช้ aria-describedby และ aria-invalid เพื่อผูกคำแนะนำและสถานะผิดพลาดกับ input."],
    whatToReview: [
      "โค้ดที่ดีทำให้ input รู้ว่าข้อความช่วยเหลือและ error ไหนเกี่ยวข้องกับมัน และบอกสถานะผิดพลาดชัดเจน.",
      "โค้ดที่ควรปรับวางข้อความใกล้ input แค่ทางสายตา แต่ไม่ได้เชื่อมความสัมพันธ์ไว้ใน accessibility tree.",
    ],
    reviewNotes: [
      "ในการรีวิวฟอร์ม ความใกล้บนหน้าจอไม่พอ ให้เช็กว่า field, help text และ error state ถูกเชื่อมกันจริง ไม่ใช่แค่ดูเหมือนอยู่ด้วยกัน.",
    ],
  },
  "html/interactive-elements": {
    codeComments: {
      goodCode: ["button จริงมี keyboard และ focus behavior มาให้แล้ว"],
      badCode: ["div ที่คลิกได้ต้องสร้างพฤติกรรมแบบ button เองทั้งหมด"],
    },
    title: "element สำหรับการโต้ตอบ",
    summary: "ใช้ element ที่ออกแบบมาเพื่อการกด เช่น button แทน div ที่ใส่ onClick เอง.",
    takeaways: ["ถ้าเป็น action ให้เริ่มจาก button หรือ element native ที่เหมาะสม."],
    whatToReview: [
      "โค้ดที่ดีใช้ button ทำให้ keyboard, focus และ role ทำงานตาม browser ให้ทันที.",
      "โค้ดที่ควรปรับทำ div ให้เหมือนปุ่ม ซึ่งมักต้องเขียนพฤติกรรมสำคัญเพิ่มเองและพลาดง่าย.",
    ],
    reviewNotes: [
      "เวลาเห็น div ที่คลิกได้ ให้ถามว่าทำไมไม่ใช้ button. ถ้าไม่มีเหตุผลชัดเจน การใช้ native element มักปลอดภัยและอ่านง่ายกว่า.",
    ],
  },
  "html/tables-tabular-data": {
    codeComments: {
      goodCode: ["caption และ scope ช่วยเชื่อม header กับ cell ให้ถูกต้อง"],
      badCode: ["CSS ทำให้ div ดูเหมือนตารางได้ แต่ให้ความหมายแบบ table ไม่ได้"],
    },
    title: "ใช้ table กับข้อมูลตาราง",
    summary: "เมื่อข้อมูลเป็นแถวและคอลัมน์ ให้ใช้ table markup เพื่อรักษาความสัมพันธ์ระหว่างหัวข้อกับค่า.",
    takeaways: ["ถ้าเนื้อหาเป็นข้อมูลแบบ row/column ให้ใช้ table, caption, th และ scope ก่อนสร้างด้วย div."],
    whatToReview: [
      "โค้ดที่ดีเก็บความสัมพันธ์ระหว่าง header และ cell ไว้ใน HTML พร้อม caption ที่บอกว่าตารางนี้เกี่ยวกับอะไร.",
      "โค้ดที่ควรปรับทำให้ div ดูเหมือนตาราง แต่ความสัมพันธ์ของข้อมูลอยู่แค่ใน CSS และตำแหน่งบนหน้าจอ.",
    ],
    reviewNotes: [
      "ให้ถามว่าผู้ใช้เข้าใจ cell หนึ่งช่องได้ไหมถ้าไม่ได้เห็น layout ถ้าต้องพึ่งตำแหน่งคอลัมน์อย่างเดียว ควรใช้ semantic table.",
    ],
  },
  "html/aria-restraint": {
    codeComments: {
      goodCode: ["button จริงมี role อยู่แล้ว ARIA แค่เติม label ที่ขาด"],
      badCode: ["role และ state ของ ARIA ขัดกับพฤติกรรมจริงของ element"],
    },
    title: "ใช้ ARIA เท่าที่จำเป็น",
    summary: "เริ่มจาก HTML native ก่อน แล้วใช้ ARIA เฉพาะเมื่อช่วยอธิบายสิ่งที่ HTML บอกเองไม่ได้.",
    takeaways: ["เลือก semantic HTML ก่อนเสมอ ARIA ควรช่วยทำให้ชัด ไม่ใช่ซ่อม element ที่เลือกผิด."],
    whatToReview: [
      "โค้ดที่ดีใช้ element native ที่มี role และพฤติกรรม keyboard มาให้ แล้วเติม ARIA เฉพาะจุดที่จำเป็นจริง.",
      "โค้ดที่ควรปรับใส่ role หรือ state ที่ไม่ตรงกับพฤติกรรมจริง ทำให้ assistive technology รับข้อมูลผิด.",
    ],
    reviewNotes: [
      "ARIA มีพลังมากแต่ไม่ใช่ทางลัดแทน semantic HTML เวลารีวิวให้ถามก่อนว่า element native ทำสิ่งนี้ให้เราอยู่แล้วหรือยัง.",
    ],
  },
  "css/flex-layout-boundaries": {
    codeComments: {
      goodCode: ["container เป็นเจ้าของ spacing ส่วน status เป็นข้อยกเว้นเรื่อง alignment"],
      badCode: ["child selector ทำให้ item ทุกตัวรับ layout rule โดยไม่ชัดเจน"],
    },
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
    codeComments: {
      goodCode: ["สีพื้นฐานและสีของ state ยังรักษา contrast ให้อ่านได้"],
      badCode: ["state ที่ contrast ต่ำทำให้รับรู้หรืออ่านได้ยาก"],
    },
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
    codeComments: {
      goodCode: ["ค่าที่มีขอบเขตช่วย scale ตาม component โดยยังอ่านง่าย"],
      badCode: ["ขนาดตัวอักษรตาม viewport อาจอ่านยากนอกขนาดจอนี้"],
    },
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
    codeComments: {
      goodCode: ["border-box ทำให้ขนาดที่ประกาศรวม padding และ border อย่างตรงไปตรงมา"],
      badCode: ["width ไม่รวม padding กับ border ทำให้พื้นที่จริงกว้างกว่าที่เห็นในโค้ด"],
    },
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
    codeComments: {
      goodCode: ["class ของ component ที่ specificity ต่ำทำให้เห็น ownership ชัด"],
      badCode: ["selector นี้ชนะด้วยแรง specificity แทนที่จะบอก intent ของ component"],
    },
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
    codeComments: {
      goodCode: ["grid อธิบายกฎ column responsive ไว้จุดเดียว"],
      badCode: ["float และ nth-child margin ฝังการคำนวณแถวที่เปราะบาง"],
    },
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
    codeComments: {
      goodCode: ["hover focus และ selected state มีสัญญาณภาพแยกกัน"],
      badCode: ["ลบ outline โดยไม่มีตัวแทนทำให้ผู้ใช้ keyboard ไม่เห็นตำแหน่ง"],
    },
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
    codeComments: {
      goodCode: ["logical properties สื่อ spacing และ edge ตาม flow ของภาษา"],
      badCode: ["ค่า left/right แบบ physical ทำให้รองรับ writing direction ยากขึ้น"],
    },
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
    codeComments: {
      goodCode: ["token ที่ตั้งชื่อทำให้ design decision ที่ใช้ร่วมกันรีวิวได้"],
      badCode: ["ค่าดิบที่ซ้ำกันซ่อนว่า decision ไหนควรเป็น shared token"],
    },
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
    codeComments: {
      goodCode: ["motion ที่ผูกกับ state สามารถย่อให้ผู้ใช้ reduced motion ได้"],
      badCode: ["animation รันกับทุกคนและไม่มีทางลด motion ตาม preference"],
    },
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
    codeComments: {
      goodCode: ["strict equality กัน coercion ที่ซ่อนค่าผิดรูป"],
      badCode: ["loose equality และ || ทำให้ missing data ปนกับ falsy ที่ตั้งใจ"],
    },
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
    codeComments: {
      goodCode: ["validate ที่ boundary ก่อนอ่าน field ซ้อนด้านใน"],
      badCode: ["โค้ดนี้เชื่อ shape จากภายนอกก่อนพิสูจน์ว่ามีจริง"],
    },
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
    codeComments: {
      goodCode: ["pipeline คืน summary object ใหม่แทนการแก้ input"],
      badCode: ["sort และเติม churn ทำให้ data ที่โค้ดอื่นถืออยู่ถูก mutate"],
    },
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
    codeComments: {
      goodCode: ["request ที่ไม่พึ่งกันเริ่มพร้อมกันและ fail เป็นกลุ่มเดียว"],
      badCode: ["await ทีละขั้นเพิ่ม latency ทั้งที่ไม่มี data dependency"],
    },
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
    codeComments: {
      goodCode: ["handler reference ที่ stable ทำให้ caller remove listener ได้ภายหลัง"],
      badCode: ["anonymous listener ทำให้ caller remove ออกไม่ได้"],
    },
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
    codeComments: {
      goodCode: ["storage เป็น dependency ไม่ใช่ global state ที่ซ่อนอยู่"],
      badCode: ["global read/write เปิดทางให้โค้ดอื่น bypass module API"],
    },
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
    codeComments: {
      goodCode: ["locale และ time zone เป็น input ชัดเจนของการ format"],
      badCode: ["format เองจะพึ่ง local time zone ของ runtime"],
    },
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
    codeComments: {
      goodCode: ["guard clause แยกเคสที่ถูกปฏิเสธออกจาก path หลัก"],
      badCode: ["branch ที่ซ้อนกันทำให้ reviewer ต้องจำทุกเงื่อนไขพร้อมกัน"],
    },
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
    codeComments: {
      goodCode: ["เช็ก HTTP status ก่อน parse และ catch transport failure"],
      badCode: ["happy path parsing ทำให้ failure กลายเป็น unhandled exception"],
    },
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
    codeComments: {
      goodCode: ["ชื่อบอก caller ชัดว่า array จะถูก mutate"],
      badCode: ["ชื่อฟังเหมือน immutable แต่กลับ mutate input array"],
    },
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
    codeComments: {
      goodCode: ["type ที่ boundary บอกชัดว่า caller ต้องส่งอะไร"],
      badCode: ["annotation ใน local variable ป้องกัน input boundary ที่เป็น any ไม่ได้"],
    },
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
    codeComments: {
      goodCode: ["runtime check พิสูจน์ค่าก่อนเปิดเป็น Session"],
      badCode: ["assertion เปลี่ยน unknown เป็น Session โดยไม่มีหลักฐาน"],
    },
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
    codeComments: {
      goodCode: ["assign เป็น never ทำให้ union case ที่ตกหล่นเป็น compile error"],
      badCode: ["fallback กว้าง ๆ ซ่อน state ที่โค้ดลืม handle"],
    },
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
    codeComments: {
      goodCode: ["null หมายถึง avatar ว่างโดยตั้งใจ ไม่ใช่แค่หายไป"],
      badCode: ["optional ปน null ทำให้ caller ต้องเดา absence เอง"],
    },
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
    codeComments: {
      goodCode: ["constraint เก็บ field ที่จำเป็นไว้ใน contract"],
      badCode: ["any ซ่อน constraint ที่หายไปจนกว่าจะพังตอน runtime"],
    },
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
    codeComments: {
      goodCode: ["Pick เปิดเผยเฉพาะ field ที่ boundary นี้ promise"],
      badCode: ["คืน domain object ทำให้ field ภายในรั่วออกไป"],
    },
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
    codeComments: {
      goodCode: ["import type กัน PullRequest ออกจาก runtime dependency graph"],
      badCode: ["value import ทำให้ type-only กับ runtime dependency ปนกัน"],
    },
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
    codeComments: {
      goodCode: ["field status เลือก shape ที่ valid ของแต่ละ branch"],
      badCode: ["optional field เปิดทางให้ combination ที่เป็นไปไม่ได้ compile ผ่าน"],
    },
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
    codeComments: {
      goodCode: ["type guard สร้างความน่าเชื่อถือก่อนคืน Settings"],
      badCode: ["double cast ข้าม runtime proof ที่ unknown ต้องการ"],
    },
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
    codeComments: {
      goodCode: ["callback type จำกัด action และ argument ที่จำเป็น"],
      badCode: ["Function รับ call shape อะไรก็ได้ ทำให้ invalid call compile ผ่าน"],
    },
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
    codeComments: {
      goodCode: ["props ที่ชัดเจนทำให้ component ย้ายและทดสอบได้ง่าย"],
      badCode: ["การดึง state กว้าง ๆ จากแอปทำให้ component ผูกกับหลายอย่างเกินไป"],
    },
    title: "ส่งข้อมูลผ่าน props ให้ชัด",
    summary: "ให้ component รับเฉพาะข้อมูลที่ต้องใช้ผ่าน props แทนการไปดึง state กว้าง ๆ เอง.",
    takeaways: ["component ที่ดีควรเห็นข้อมูลที่ต้องใช้จาก props โดยไม่ต้องเดาจากข้างใน."],
    whatToReview: [
      "โค้ดที่ดีทำให้ component รับข้อมูลเท่าที่ต้องใช้ อ่านง่าย และทดสอบแยกได้.",
      "โค้ดที่ควรปรับให้ component ไปอ่าน state นอกขอบเขตของตัวเอง ทำให้นำไปใช้ซ้ำและ debug ยาก.",
    ],
    reviewNotes: [
      "ตอนรีวิว React ให้ดูว่า component นี้รู้มากเกินหน้าที่หรือไม่. ถ้าข้อมูลที่ใช้ถูกส่งผ่าน props ชัดเจน component จะย้ายที่ ใช้ซ้ำ และทดสอบได้ง่ายขึ้น.",
    ],
  },
  "react/stable-keys-lists": {
    codeComments: {
      goodCode: ["id ที่คงที่ช่วยให้ React จำ item เดิมได้เมื่อ list เปลี่ยน"],
      badCode: ["index key บอกแค่ตำแหน่ง ไม่ได้บอกว่าเป็น comment ตัวไหน"],
    },
    title: "ใช้ key ที่ไม่เปลี่ยนใน list",
    summary: "ใช้ id ของ item เป็น key เพื่อให้ React จำได้ว่า item ไหนคืออันเดิมเมื่อ list เปลี่ยน.",
    takeaways: ["หลีกเลี่ยงการใช้ index เป็น key เมื่อ list มีการเพิ่ม ลบ เรียงลำดับ หรือกรองข้อมูล."],
    whatToReview: [
      "โค้ดที่ดีใช้ id ของ comment เป็น key ทำให้ React จับคู่ DOM และ state กับ item เดิมได้.",
      "โค้ดที่ควรปรับใช้ตำแหน่งใน array เป็น key ซึ่งผิดพลาดง่ายเมื่อ list เปลี่ยนลำดับ.",
    ],
    reviewNotes: [
      "ตอนรีวิว list ให้ถามว่า key นี้ยังชี้ item เดิมอยู่ไหมหลังเพิ่ม ลบ หรือเรียงลำดับใหม่. bug จาก key ที่ไม่คงที่มักซ่อนอยู่จนข้อมูลเริ่มเปลี่ยนจริง.",
    ],
  },
  "react/derived-state": {
    codeComments: {
      goodCode: ["ค่าที่คำนวณได้จาก props ปัจจุบันไม่จำเป็นต้องเก็บเป็น state"],
      badCode: ["state ที่ซ้ำกับข้อมูลเดิมต้องใช้ effect มาคอย sync"],
    },
    title: "อย่าเก็บ state ซ้ำถ้าคำนวณได้",
    summary: "ค่าที่คำนวณจาก props หรือ state เดิมได้ ให้คำนวณตอน render แทนการเก็บซ้ำแล้ว sync ด้วย effect.",
    takeaways: ["อย่าเก็บ state ซ้ำถ้าคำนวณจาก props หรือ state เดิมได้."],
    whatToReview: [
      "โค้ดที่ดีคำนวณค่าจากข้อมูลปัจจุบัน ทำให้ไม่ต้องมี state สองชุดให้คอยทำให้ตรงกัน.",
      "โค้ดที่ควรปรับเก็บค่าซ้ำใน useState แล้วใช้ effect ตามแก้ ซึ่งเปิดทางให้ข้อมูลคลาดกัน.",
    ],
    reviewNotes: [
      "เวลาเห็น useEffect ที่มีไว้แค่ sync state จาก props หรือ state อื่น ให้ถามว่าคำนวณตรง ๆ ได้ไหม. การลด state ที่ไม่จำเป็นทำให้โค้ด React ง่ายขึ้นและมี bug น้อยลง.",
    ],
  },
  "react/updating-state-from-previous-state": {
    codeComments: {
      goodCode: ["functional update ให้ React ส่ง state ล่าสุดเข้ามาก่อนคำนวณ"],
      badCode: ["โค้ดนี้ใช้ selectedIds ที่จำไว้จาก render รอบนี้ ซึ่งอาจเก่าแล้ว"],
    },
    title: "อัปเดต state จากค่าล่าสุด",
    summary: "ถ้าค่า state ใหม่ต้องอ้างอิงค่าเดิม ให้ใช้ functional update เพื่อให้ React ส่งค่าล่าสุดมาให้.",
    takeaways: ["ถ้าค่าใหม่ต้องอ้างอิงค่าเดิม ให้ส่ง function เข้า setter แทนการอ่าน state ที่อาจเก่าแล้ว."],
    whatToReview: [
      "โค้ดที่ดีให้ React ส่งค่า state ล่าสุดเข้ามาก่อนคำนวณ selected ids ชุดใหม่.",
      "โค้ดที่ควรปรับคำนวณจาก selectedIds ที่ถูกจำไว้ตอน render ทำให้ update บางครั้งหายได้.",
    ],
    reviewNotes: [
      "เวลาเห็น setState ที่ใช้ state ตัวเดิมมาประกอบค่าใหม่ ให้พิจารณา functional update. เรื่องนี้สำคัญเมื่อมี event หลายครั้งติดกัน, batching หรือ callback ที่รันทีหลัง.",
    ],
  },
  "react/controlled-form-inputs": {
    codeComments: {
      goodCode: ["React state เป็นแหล่งข้อมูลหลักสำหรับ validate และ reset"],
      badCode: ["การ query DOM ทำให้ข้อมูลของ form หลุดจาก flow ของ React"],
    },
    title: "คุมค่า form ด้วย React state",
    summary: "ถ้า form ต้อง validate, reset หรือ submit ด้วย logic ของเรา ให้ React state เป็นแหล่งข้อมูลหลัก.",
    takeaways: ["controlled input ทำให้ค่าที่ผู้ใช้เห็นและค่าที่ submit มาจากแหล่งเดียวกัน."],
    whatToReview: [
      "โค้ดที่ดีผูก input กับ state และใช้ค่าเดียวกันตอน validate, submit และ reset.",
      "โค้ดที่ควรปรับ query DOM เพื่ออ่านและแก้ input เอง ทำให้ flow ของข้อมูลหลุดจาก React.",
    ],
    reviewNotes: [
      "ตอนรีวิว form ให้ดูว่าค่านี้มี logic มากกว่า submit ปกติไหม. ถ้ามี validation, disabled state หรือ error message การเก็บค่าใน React จะดูแลง่ายกว่า.",
    ],
  },
  "react/effect-dependencies": {
    codeComments: {
      goodCode: ["effect ทำงานตาม reviewId และยกเลิก request เก่าที่ไม่ใช้แล้ว"],
      badCode: ["dependency ว่างทำให้ effect ค้างกับ reviewId แรกที่เห็น"],
    },
    title: "ใส่ dependency ของ effect ให้ครบ",
    summary: "ถ้า effect ใช้ค่าใด ให้ใส่ค่านั้นใน dependency และ cleanup งาน async เมื่อค่านั้นเปลี่ยน.",
    takeaways: ["effect ควรบอกค่าที่พึ่งพาให้ครบ และ cleanup งานที่ไม่ต้องใช้แล้ว."],
    whatToReview: [
      "โค้ดที่ดีใส่ dependency ที่ใช้จริงและยกเลิก request เก่าเมื่อค่าเปลี่ยน.",
      "โค้ดที่ควรปรับปล่อย dependency ว่าง ทั้งที่ใช้ค่าจาก props ทำให้ข้อมูลที่แสดงอาจเก่า.",
    ],
    reviewNotes: [
      "ตอนรีวิว effect ให้ดูทั้ง dependency array และ cleanup. ถ้า effect ใช้ค่าใดใน scope ค่านั้นควรอยู่ใน dependency หรือมีเหตุผลที่ชัดเจนว่าทำไมไม่อยู่.",
    ],
  },
  "react/async-effect-cleanup": {
    codeComments: {
      goodCode: ["cleanup กัน response เก่ากลับมาแก้ state ของหน้าปัจจุบัน"],
      badCode: ["request เก่าอาจตอบกลับทีหลังและเขียนทับ state ใหม่"],
    },
    title: "cleanup งาน async ใน effect",
    summary: "กัน request เก่ากลับมาเขียนทับ state ของหน้าจอใหม่หลัง input เปลี่ยนหรือ component ถูกถอด.",
    takeaways: ["effect ที่เริ่มงาน async ควร cleanup เมื่อ input เปลี่ยนหรือเมื่อ component ถูกถอดออก."],
    whatToReview: [
      "โค้ดที่ดีตั้ง flag cleanup เพื่อไม่ให้ promise เก่าแก้ state หลังหน้าจอเปลี่ยนไปแล้ว.",
      "โค้ดที่ควรปรับเริ่ม request ใหม่ทุกครั้งแต่ยังปล่อยให้ response เก่ากลับมาเขียน state ได้.",
    ],
    reviewNotes: [
      "ตอนรีวิว async effect ให้ลองคิดกรณีผู้ใช้กดเปลี่ยนหน้าเร็ว ๆ หรือ request ตอบกลับคนละลำดับ. dependency ครบอย่างเดียวอาจยังไม่พอถ้าไม่มี cleanup.",
    ],
  },
  "react/context-boundaries": {
    codeComments: {
      goodCode: ["จำกัด context ให้แคบ และส่ง review data ผ่าน props ชัดเจน"],
      badCode: ["context ที่กว้างเกินไปทำให้ card ผูกกับ state ที่ไม่เกี่ยว"],
    },
    title: "จำกัดขอบเขตของ context",
    summary: "ใช้ context กับข้อมูลที่หลายส่วนต้องรู้จริง ๆ อย่าใช้แทน props ทุกอย่างจน component ผูกกับทั้งแอป.",
    takeaways: ["context ที่แคบช่วยให้ component ไม่ต้องรับรู้ state ที่ไม่เกี่ยวข้อง."],
    whatToReview: [
      "โค้ดที่ดีใช้ context เฉพาะ viewer และส่งข้อมูล review ผ่าน props ที่ชัดเจน.",
      "โค้ดที่ควรปรับใส่ state ทั้งแอปใน context เดียว ทำให้ component รู้เยอะและ rerender เกินจำเป็น.",
    ],
    reviewNotes: [
      "ตอนรีวิว component ที่ใช้ context ให้เทียบว่ามันรับข้อมูลมากแค่ไหนกับสิ่งที่ render จริง. context กว้างเกินไปทำให้ใช้ซ้ำยากและ performance คาดเดายาก.",
    ],
  },
  "react/memoization-when-it-helps": {
    codeComments: {
      goodCode: ["จำผลลัพธ์ไว้ใช้ซ้ำเฉพาะการคำนวณ list ที่หนักจริง"],
      badCode: ["dependency ว่างทำให้ list ค้างอยู่ที่ค่าแรกหลัง render"],
    },
    title: "ใช้ memoization ให้คุ้มจริง",
    summary: "จำผลลัพธ์ไว้ใช้ซ้ำเฉพาะตอนที่การคำนวณหนักจริง และใส่ dependencies ให้ครบ.",
    takeaways: ["memoization ควรมีเหตุผลเรื่องความเร็วจริง ๆ และต้องใส่ dependencies ให้ครบ."],
    whatToReview: [
      "โค้ดที่ดีจำผลลัพธ์การ filter ที่ขึ้นกับ reviews และ search อย่างชัดเจน.",
      "โค้ดที่ควรปรับใช้ dependency ว่างจนข้อมูลที่แสดงเก่า และ memoize ข้อความง่าย ๆ โดยไม่จำเป็น.",
    ],
    reviewNotes: [
      "ตอนรีวิว useMemo หรือ useCallback ให้ถามว่ามันช่วยเรื่อง performance ตรงไหน และใส่ dependencies ครบไหม. memo ที่ผิดอาจทำให้โค้ดดูเหมือนเร็วขึ้น แต่จริง ๆ แล้วค้างอยู่กับข้อมูลเก่า.",
    ],
  },
  "react/composition-over-prop-flags": {
    codeComments: {
      goodCode: ["slot ให้ผู้เรียกประกอบ UI ของแต่ละกรณีเอง"],
      badCode: ["boolean flag หลายตัวสร้างชุดค่าที่ component ต้องคุมเอง"],
    },
    title: "ใช้ composition แทน prop flag",
    summary: "ให้ผู้เรียกประกอบ UI ผ่าน children หรือ slot แทนการเพิ่ม boolean prop หลายตัวจนกรณีซับซ้อน.",
    takeaways: ["composition ช่วยลดชุด prop ที่ผสมกันผิดพลาดง่ายใน component ที่มีหลายรูปแบบ."],
    whatToReview: [
      "โค้ดที่ดีให้ผู้เรียกส่ง action และ content เข้ามาประกอบ panel ตาม use case.",
      "โค้ดที่ควรปรับมี mode และ boolean หลายตัว ทำให้เกิดชุดค่าที่ component ไม่ได้ตั้งใจรองรับ.",
    ],
    reviewNotes: [
      "ถ้าทุก requirement ใหม่ทำให้ component ต้องเพิ่ม flag อีกตัว ให้ลองมองหา composition. API แบบ slot ช่วยให้ผู้เรียกสร้าง UI ที่ต้องการ โดยไม่บังคับให้ component รู้ทุกกรณี.",
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
  "php/strict-types-and-return-types": {
    title: "strict type และ return type",
    summary: "ทำ contract ของ PHP function ให้ชัดด้วย strict scalar type และ return type เพื่อให้ reviewer จับ coercion bug ที่ boundary ได้.",
    takeaways: ["ไฟล์ PHP ที่ทำ business rule ควรทำให้ parameter และ return expectation เห็นได้ชัดที่ function boundary."],
    whatToReview: [
      "โค้ดที่ดีประกาศ strict typing ตั้งชื่อหน่วยของเงิน คืน type ชัด และ reject ค่าผิดก่อนคำนวณ.",
      "โค้ดที่ควรปรับพึ่ง PHP coercion และ request value ที่ยังไม่ typed ทำให้ต้องเดาว่า string, float, negative number หรือ field ที่หายไป valid ไหม.",
    ],
    reviewNotes: [
      "เวลารีวิว PHP ให้มองหา contract ที่ขอบของ function สำคัญ strict types ไม่ได้แทน validation แต่ช่วยให้ accidental coercion หลุดยากขึ้น.",
    ],
  },
  "php/input-validation-filtering": {
    title: "การ validate และ filter input",
    summary: "validate request input ที่ boundary ก่อนปล่อยเข้า query, domain หรือ template code.",
    takeaways: ["superglobal คือ untrusted boundary ควร normalize ให้เป็นค่าที่ชัดก่อนใช้งาน."],
    whatToReview: [
      "โค้ดที่ดีอ่าน request value ดิบ validate ว่าเป็น positive integer และหยุดเร็วด้วย HTTP response ที่ชัด.",
      "โค้ดที่ควรปรับดึงจาก $_GET โดยตรง แยก missing กับ invalid ไม่ชัด และส่ง raw boundary value ลึกเข้า application.",
    ],
    reviewNotes: [
      "validation ควรเกิดใกล้ boundary หนึ่งครั้ง หลังจากนั้น downstream code ควรได้รับ typed normalized value ไม่ใช่กลับไปอ่าน superglobal ซ้ำ.",
    ],
  },
  "php/output-escaping-xss": {
    title: "output escaping เพื่อกัน XSS",
    summary: "escape ค่าที่ไม่น่าไว้ใจตอน render HTML เพื่อไม่ให้ user content กลายเป็น markup หรือ script.",
    takeaways: ["prepared statement ป้องกัน SQL แต่ HTML output ยังต้อง escape ตาม context."],
    whatToReview: [
      "โค้ดที่ดีใช้ helper เล็ก ๆ สำหรับ escape text ที่ render เข้า HTML รวมถึง quote และ invalid byte substitution.",
      "โค้ดที่ควรปรับ output ค่า database และ request ตรง ๆ ถ้าค่านั้นมี HTML template จะตีความเป็น markup.",
    ],
    reviewNotes: [
      "รีวิว output ต้องดูตาม context text node ใช้ HTML escaping, attribute ต้อง escape ให้เหมาะกับ attribute และ JavaScript context ต้องใช้ strategy คนละแบบ.",
    ],
  },
  "php/pdo-prepared-statements": {
    title: "PDO prepared statement ที่ปลอดภัย",
    summary: "ใช้ prepared statement พร้อม bound value แทนการ interpolate request data เข้า SQL string.",
    takeaways: ["SQL structure กับ SQL value ควรถูกแยกกัน placeholder ของ PDO ทำให้ boundary นี้รีวิวได้ชัด."],
    whatToReview: [
      "โค้ดที่ดี prepare SQL, bind email เป็น data, เลือก column ชัด และ handle กรณีไม่เจอ row.",
      "โค้ดที่ควรปรับ interpolate request value เข้า SQL และ select ทุก column ทำให้ reviewer ไม่มั่นใจทั้ง query boundary และ response shape.",
    ],
    reviewNotes: [
      "prepared statement ไม่ใช่แค่นิสัยด้าน security แต่ทำให้ query intent, parameter name และ result handling อ่านง่ายขึ้นตอนรีวิว.",
    ],
  },
  "php/password-hashing-verification": {
    title: "password hashing และ verification",
    summary: "เก็บ password hash ด้วย PHP password API และ verify โดยไม่สร้างกฎ hashing เอง.",
    takeaways: ["password ควรผ่าน password_hash และ password_verify ไม่ใช่ fast general-purpose hash."],
    whatToReview: [
      "โค้ดที่ดีพึ่ง PHP password API ซึ่งเก็บ algorithm และ cost ไว้ใน hash และบอกได้เมื่อควร rehash.",
      "โค้ดที่ควรปรับใช้ fast hash ที่ไม่ได้ออกแบบมาสำหรับ password และผูก login success กับ session mutation โดยตรง.",
    ],
    reviewNotes: [
      "การรีวิว password ควรน่าเบื่อ ถ้าเจอ custom salt, fast hash, manual comparison หรือ homegrown upgrade logic ให้ชะลอแล้วถามเหตุผล.",
    ],
  },
  "php/session-handling-cookies": {
    title: "session และ cookie handling",
    summary: "ตั้งค่า session cookie อย่างตั้งใจ และ regenerate session ID เมื่อ authentication state เปลี่ยน.",
    takeaways: ["session code ควรทำให้ cookie flag และ identity transition เห็นชัดกับ reviewer."],
    whatToReview: [
      "โค้ดที่ดีตั้ง cookie flag ก่อน start session และ regenerate session ID เมื่อ user sign in.",
      "โค้ดที่ควรปรับใช้ค่า default ของ cookie ไม่ rotate session ID และเชื่อ request parameter สำหรับ authorization state.",
    ],
    reviewNotes: [
      "authentication change คือ session boundary change ให้รีวิว login, logout และ privilege change ว่ามี cookie flag, ID rotation และ source ของ session value ชัดไหม.",
    ],
  },
  "php/error-handling-exceptions": {
    title: "error handling และ exception",
    summary: "handle exception ที่ boundary ชัดเจน log context ที่มีประโยชน์ และคืน response ที่ปลอดภัยให้ผู้ใช้.",
    takeaways: ["error handling ที่ดีใน PHP แยก developer diagnostics ออกจาก user-facing response."],
    whatToReview: [
      "โค้ดที่ดี catch failure ที่ front controller boundary, log รายละเอียดภายใน และคืน generic response.",
      "โค้ดที่ควรปรับผสม routing กับ unsafe include และส่ง raw exception message ไปที่ browser.",
    ],
    reviewNotes: [
      "ให้รีวิวว่า exception ถูก catch ที่ไหน catch ต่ำเกินไปจะซ่อน failure แต่ catch ที่ boundary ทำให้ log context และป้องกัน user output ได้.",
    ],
  },
  "php/autoloading-and-namespaces": {
    title: "autoloading และ namespace",
    summary: "ใช้ namespace และ autoloaded class เพื่อให้ file structure, ownership และ dependency ชัดเจน.",
    takeaways: ["PHP สมัยใหม่ควรทำให้ class ownership เห็นผ่าน namespace แทนการตาม require chain."],
    whatToReview: [
      "โค้ดที่ดีให้ class มี namespace, inject dependency และให้ autoloading เชื่อม file กับ class name.",
      "โค้ดที่ควรปรับพึ่ง include order, global state และ free function ที่ตาม ownership ยาก.",
    ],
    reviewNotes: [
      "autoloading คือ maintainability boundary ถ้า reviewer ต้องตาม require_once หลายไฟล์เพื่อเข้าใจ dependency แปลว่า structure ช่วยน้อยไป.",
    ],
  },
  "php/configuration-and-secrets": {
    title: "configuration และ secret",
    summary: "โหลด configuration จาก environment และ fail ให้ชัดเมื่อ secret ที่จำเป็นหายไป.",
    takeaways: ["secret ควรเป็น runtime configuration ไม่ใช่ string ที่ commit อยู่ข้าง application logic."],
    whatToReview: [
      "โค้ดที่ดีอ่าน secret ที่จำเป็นจาก runtime environment และ fail ตอน startup ถ้าไม่มีค่า.",
      "โค้ดที่ควรปรับ commit credential และเปิดให้ request value เปลี่ยน infrastructure configuration.",
    ],
    reviewNotes: [
      "รีวิว config ควรตอบสองคำถามเร็ว ๆ ว่าค่านี้มาจากไหน และ user input เปลี่ยนมันได้หรือไม่.",
    ],
  },
  "php/separating-logic-from-templates": {
    title: "แยก logic ออกจาก template",
    summary: "แยก request handling และ data access ออกจาก template เพื่อให้ rendering code เล็กและรีวิวง่าย.",
    takeaways: ["template ควร render view model ที่เตรียมไว้แล้ว ไม่ใช่ query database หรือตัดสิน application flow."],
    whatToReview: [
      "โค้ดที่ดีเตรียม view model ก่อน render ทำให้ template โฟกัสที่ display และ escaping.",
      "โค้ดที่ควรปรับผสม request input, SQL, database access และ raw output ในไฟล์เดียว ทำให้ทุก change ต้องรีวิวหลาย concern พร้อมกัน.",
    ],
    reviewNotes: [
      "PHP embed HTML ได้สะดวก แต่ความสะดวกไม่ควรลบ boundary ถามว่าไฟล์นี้ handle request, fetch data หรือ render view ถ้าทำทั้งสามอย่างควรแยก.",
    ],
  },
  "java/null-handling-and-optional-boundaries": {
    title: "null และ Optional ที่ boundary",
    summary: "ทำให้กรณีไม่พบข้อมูลเห็นชัดผ่าน Optional หรือ exception แทนการคืน null แล้วปล่อยให้พังทีหลัง.",
    takeaways: ["method ที่อาจไม่พบข้อมูลควรบอกผ่าน return type หรือ exception ที่ชัดเจน ไม่ใช่ซ่อนด้วยค่า null."],
    whatToReview: [
      "โค้ดที่ดีให้ repository คืน Optional, เช็ก input และตั้งชื่อ failure path ให้ reviewer ตามเหตุผลได้ง่าย.",
      "โค้ดที่ควรปรับปล่อย null ไหลต่อไป ทำให้ต้องเดาว่า method อาจไม่เจอข้อมูลหรือไม่ และมักจบด้วย NullPointerException ที่บอกบริบทน้อย.",
    ],
    reviewNotes: [
      "เวลารีวิว Java ให้ถามเสมอว่าความว่างหรือการไม่พบข้อมูลถูกอนุญาตตรงไหน ถ้าอนุญาต ควรเห็นจาก contract ไม่ใช่จาก bug ตอน runtime.",
    ],
  },
  "java/immutable-data-and-defensive-copies": {
    title: "immutable data และ defensive copy",
    summary: "ป้องกัน object ที่เป็น snapshot ไม่ให้เปลี่ยนตาม mutable collection ที่ caller ยังถืออยู่.",
    takeaways: ["ข้อมูลที่แทนการตัดสินใจเสร็จแล้วควรนิ่ง ไม่ควรถูกแก้จาก reference ภายนอกได้ภายหลัง."],
    whatToReview: [
      "โค้ดที่ดี copy collection ตอนสร้าง object และเปิดเผยข้อมูลแบบ immutable ทำให้ state หลังสร้างคาดเดาได้.",
      "โค้ดที่ควรปรับเก็บและคืน list เดิม ทำให้ส่วนอื่น add, remove หรือ reorder item ได้โดย class นี้ไม่รู้ตัว.",
    ],
    reviewNotes: [
      "ให้ดู constructor และ getter ที่รับหรือคืน collection เป็นพิเศษ เพราะ defensive copy มักกัน bug ที่ตามยากมากในระบบจริง.",
    ],
  },
  "java/equals-hashcode-and-value-objects": {
    title: "equals/hashCode และ value object",
    summary: "ใช้ value object หรือ record เล็ก ๆ เพื่อให้ identity, validation, equality และ hash behavior อยู่ในที่เดียว.",
    takeaways: ["type ที่ใช้เป็น key ใน map หรือสมาชิกใน set ต้องมี equality และ hash behavior ที่ตั้งใจและสอดคล้องกัน."],
    whatToReview: [
      "โค้ดที่ดีแยก UserId เป็น record ทำให้ equality และ hashCode สอดคล้องโดยธรรมชาติ และ validate ค่าได้ตั้งแต่ต้น.",
      "โค้ดที่ควรปรับ override equals ด้วย field ที่ไม่ใช่ identity และไม่มี hashCode ทำให้ collection behavior เพี้ยนได้.",
    ],
    reviewNotes: [
      "เวลาเห็น equals ให้รีวิวทั้งความหมายทาง domain และ contract ของ Java ถ้า identity สำคัญ มักควรมี value object เฉพาะทาง.",
    ],
  },
  "java/exception-handling-boundaries": {
    title: "ขอบเขตของ exception",
    summary: "โยน exception ที่มีความหมายใน application แล้วค่อยแปลงเป็น response ที่ boundary ด้านนอก.",
    takeaways: ["exception ควรสื่อความหมายในระบบ และถูกแปลงเป็นข้อความหรือ response สำหรับผู้ใช้เฉพาะจุดที่เหมาะสม."],
    whatToReview: [
      "โค้ดที่ดีจับ domain exception ที่ controller boundary แล้ว map เป็น HTTP response ที่คาดเดาได้.",
      "โค้ดที่ควรปรับ catch Exception กว้างเกินไป, printStackTrace และคืน null ซึ่งซ่อน failure จริงไว้.",
    ],
    reviewNotes: [
      "ให้ถามว่า catch block อยู่ layer ที่ถูกไหม จับลึกเกินไปมักกลบ bug แต่จับที่ boundary ช่วยแปล failure โดยไม่เสียเจตนา.",
    ],
  },
  "java/try-with-resources-cleanup": {
    title: "try-with-resources และ cleanup",
    summary: "ใช้ try-with-resources กับ connection, statement, result set หรือ file เพื่อให้ cleanup เกิดทั้งตอนสำเร็จและล้มเหลว.",
    takeaways: ["resource ที่ต้อง close ควรมี owner และ path cleanup ที่ชัด แม้เกิด exception กลางทาง."],
    whatToReview: [
      "โค้ดที่ดีทำให้ ownership ของ resource เห็นชัด และปิด connection, statement, result set ได้ครบทุก path.",
      "โค้ดที่ควรปรับ close เองเฉพาะ happy path ทำให้ early return หรือ exception ทิ้ง resource ค้างไว้.",
    ],
    reviewNotes: [
      "resource leak มักดูไม่ออกจาก happy path ให้ไล่ทุก return และ exception path แล้วดูว่า closeable แต่ละตัวถูกจัดการโดยใคร.",
    ],
  },
  "java/generics-and-collection-types": {
    title: "generic และ collection type",
    summary: "ระบุชนิดข้อมูลใน collection ให้แม่น เพื่อลด cast, raw type และ ClassCastException ตอน runtime.",
    takeaways: ["collection type ใน Java ควรบอก reviewer ได้ว่าข้างในคืออะไร และ key/value มีรูปทรงแบบไหน."],
    whatToReview: [
      "โค้ดที่ดีระบุทั้ง key และ value type ชัดเจน ทำให้ caller ไม่ต้อง cast และ compiler ช่วยจับผิดได้.",
      "โค้ดที่ควรปรับใช้ raw List หรือ raw Map ทำให้ type error หลุดไป runtime และ reviewer ต้องเดาเอง.",
    ],
    reviewNotes: [
      "raw collection เป็น smell ใน Java สมัยใหม่ เพราะเหมือนถอด compiler ออกจากวงรีวิว แล้วให้คนไล่ type ด้วยตาแทน.",
    ],
  },
  "java/streams-vs-readable-loops": {
    title: "stream หรือ loop ที่อ่านง่าย",
    summary: "ใช้ stream กับ transformation ที่ชัด และใช้ loop เมื่อมี branching, validation หรือ step ที่ควรตั้งชื่อให้อ่านง่าย.",
    takeaways: ["รูปแบบ iteration ที่ดีคือแบบที่ทำให้เจตนาและจุดผิดพลาดรีวิวง่ายที่สุด ไม่ใช่แบบที่สั้นที่สุดเสมอ."],
    whatToReview: [
      "โค้ดที่ดีเลือก loop เพราะ rule มี branch และ accumulation ที่ควรเห็นเป็นขั้น ๆ.",
      "โค้ดที่ควรปรับซ่อน mutation และ side effect ใน stream pipeline ทำให้ดู functional แต่ reason ยากขึ้น.",
    ],
    reviewNotes: [
      "stream ไม่ได้ดีกว่า loop อัตโนมัติ ใช้ stream เมื่อ map/filter/collect ตรงไปตรงมา และใช้ loop เมื่อ business rule ต้องการชื่อและลำดับที่อ่านง่าย.",
    ],
  },
  "java/concurrency-and-shared-state": {
    title: "concurrency และ shared state",
    summary: "ใช้ primitive ที่ออกแบบมาสำหรับ concurrent access เพื่อกัน check-then-act race เมื่อมีหลาย thread.",
    takeaways: ["ถ้าหลาย thread แตะค่าเดียวกัน โค้ดควรบอกชัดว่าใครเป็นเจ้าของ synchronization."],
    whatToReview: [
      "โค้ดที่ดีใช้ ConcurrentHashMap และ computeIfAbsent เพื่อให้ operation สำคัญเป็น atomic.",
      "โค้ดที่ควรปรับใช้ HashMap ร่วมกันพร้อม containsKey แล้วค่อย put ทำให้เกิด race ภายใต้ load ได้.",
    ],
    reviewNotes: [
      "เวลารีวิว shared state ให้หา synchronization owner ถ้าคำตอบคือเวลาใช้งานจริงคงไม่ชนกัน แปลว่าควรเปลี่ยน primitive หรือจำกัด ownership ใหม่.",
    ],
  },
  "java/records-and-dto-boundaries": {
    title: "record และ DTO boundary",
    summary: "ใช้ record หรือ DTO ที่ชัดสำหรับ request/response แทน Map ที่ทำให้ error ไหลลึกเข้า application.",
    takeaways: ["ข้อมูลที่ข้าม boundary ควรมีชื่อ shape และ validation ใกล้ edge ของระบบ."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ request shape และ validate field ที่จำเป็นก่อนส่งเข้า service.",
      "โค้ดที่ควรปรับใช้ Map<String, Object> แล้ว cast เอง ทำให้ missing field หรือ key ผิดพังแบบตามยาก.",
    ],
    reviewNotes: [
      "DTO ไม่ใช่พิธีรีตองถ้ามันป้องกัน boundary ได้ มันทำให้ request shape, validation และ expectation ของ downstream เห็นในที่เดียว.",
    ],
  },
  "java/package-service-boundaries": {
    title: "package และ service boundary",
    summary: "แยก controller, service, repository และ package ให้แต่ละชั้นรับผิดชอบการตัดสินใจคนละแบบ.",
    takeaways: ["class ใน Java จะรีวิวง่ายขึ้นเมื่อ HTTP, business rule และ persistence ถูกแยกด้วย boundary ที่ชัด."],
    whatToReview: [
      "โค้ดที่ดีให้ service เป็นที่อยู่ของ business behavior ส่วน persistence และ email เป็น dependency ที่เห็นได้.",
      "โค้ดที่ควรปรับผสม request parsing, SQL, database connection, email และ HTTP response ไว้ใน controller เดียว.",
    ],
    reviewNotes: [
      "เวลารีวิว architecture ให้ trace หนึ่ง user action ผ่าน package ถ้า controller ตัดสินใจทุกอย่าง ควรแยก responsibility ก่อนเพิ่ม feature ใหม่.",
    ],
  },
  "git/status-before-work": {
    codeComments: {
      goodCode: ["เช็ก branch และ change ในเครื่องก่อนเริ่มแก้"],
      badCode: ["pull ก่อนอาจซ่อนว่า base เปลี่ยนไปแล้ว"],
    },
    title: "เช็ก status ก่อนเริ่มงาน",
    summary: "เริ่มทุกงานด้วยการดู branch, working tree และ upstream state เพื่อไม่ให้แก้บนฐานที่ผิด.",
    takeaways: ["workflow Git ที่ดีควรทำให้ branch และ uncommitted changes เห็นชัดก่อนเริ่มแก้ไฟล์."],
    whatToReview: [
      "โค้ดที่ดีเช็ก branch, working tree, remote state และ diff summary ก่อนตัดสินใจทำงานต่อ.",
      "โค้ดที่ควรปรับ pull ก่อนทันทีแล้วเริ่มแก้และ commit ทุกอย่าง โดยไม่รู้ว่าอยู่ branch ไหนหรือมีอะไรเปลี่ยนบ้าง.",
    ],
    reviewNotes: [
      "เวลารีวิว Git workflow ให้เริ่มจาก observability ถ้าคนทำงานตอบไม่ได้ว่าอยู่ branch ไหนและ tree สะอาดไหม คำสั่งถัดไปจะเสี่ยงขึ้นมาก.",
    ],
  },
  "git/interactive-staging-hunks": {
    codeComments: {
      goodCode: ["ดูก่อน แล้ว stage เฉพาะ hunk ที่เกี่ยวข้อง"],
      badCode: ["คำสั่งนี้ stage งานไม่เกี่ยว ไฟล์ generated และ debug change ได้"],
    },
    title: "stage hunk แบบตั้งใจ",
    summary: "stage เฉพาะส่วนที่เกี่ยวข้อง เพื่อให้แต่ละ commit มีเฉพาะ change ที่ควรอยู่ด้วยกัน.",
    takeaways: ["commit ที่รีวิวง่ายมาจาก staging ที่รีวิวง่าย ไม่ใช่จากการ add ทุกไฟล์ตามนิสัย."],
    whatToReview: [
      "โค้ดที่ดีดู unstaged diff, stage เฉพาะ hunk ที่เกี่ยวข้อง แล้วดู staged diff ก่อน commit.",
      "โค้ดที่ควรปรับ add ทุกอย่างและใช้ message กว้าง ๆ ทำให้ reviewer ไม่เห็น intent ของ change.",
    ],
    reviewNotes: [
      "git add -p ช่วยมากเมื่อมี formatting, debug และ feature work ปนกันในเครื่อง เพราะช่วยให้ commit เล่าเรื่องเดียว.",
    ],
  },
  "git/atomic-commits-messages": {
    codeComments: {
      goodCode: [
        "หนึ่ง commit ควรอธิบายหนึ่ง behavior change",
        "แยก commit test ช่วยให้รีวิว intent ได้ง่าย",
      ],
      badCode: ["reviewer จะไม่รู้ว่า commit นี้เป็นเจ้าของ concern ไหน"],
    },
    title: "atomic commit และข้อความ commit",
    summary: "ทำ commit ให้เล็กพอสำหรับรีวิว และเขียน message ที่บอกเหตุผลของ change ไม่ใช่แค่บอกว่าแก้อะไร.",
    takeaways: ["commit หนึ่งก้อนควรมีเหตุผลเดียวที่ชัด และอ่าน message แล้วพอเข้าใจ intent ได้ก่อนเปิด diff.",
    ],
    whatToReview: [
      "โค้ดที่ดีแยก UI behavior กับ test coverage และตั้งชื่อ commit ให้เห็นเหตุผลของแต่ละก้อน.",
      "โค้ดที่ควรปรับรวมทุกอย่างใน commit เดียว ทำให้ review, revert หรือ cherry-pick เฉพาะส่วนยากขึ้น.",
    ],
    reviewNotes: [
      "atomic ไม่ได้แปลว่าต้องเล็กที่สุด แต่แปลว่า commit นั้นมีเหตุผลเดียวและสามารถ review หรือ revert เป็นหน่วยเดียวได้.",
    ],
  },
  "git/branch-naming-upstream": {
    codeComments: {
      goodCode: ["ชื่อ topic branch บอกทีมว่างานนี้เกี่ยวกับอะไร"],
      badCode: ["commit ตรงบน main ทำให้ความผิดพลาดมีต้นทุนสูงขึ้น"],
    },
    title: "ชื่อ branch และ upstream",
    summary: "สร้าง topic branch ที่ชื่อชัด และตั้ง upstream เพื่อให้ push/pull ครั้งต่อไปไปยัง remote branch ที่ถูกต้อง.",
    takeaways: ["branch ควรบอกทีมได้ว่างานนี้เป็นงานประเภทไหน และ sync กับ remote branch ใดโดย default."],
    whatToReview: [
      "โค้ดที่ดีสร้าง topic branch, publish พร้อม upstream tracking และเช็ก branch state อีกครั้ง.",
      "โค้ดที่ควรปรับ commit บน main และ push HEAD แบบไม่ชัดเจน ทำให้ accidental push จับยาก.",
    ],
    reviewNotes: [
      "ชื่อ branch คือเอกสารแบบเบา ๆ ควรช่วยบอกว่าเป็น feature, fix, chore, spike หรือ release change.",
    ],
  },
  "git/fetch-pull-rebase-sync": {
    codeComments: {
      goodCode: ["fetch ทำให้เห็น upstream changes ก่อนรวมงาน"],
      badCode: ["pull โดยไม่ดู upstream ทำให้การรวมงานเกิดแบบไม่ชัด"],
    },
    title: "sync ด้วย fetch, pull และ rebase",
    summary: "fetch ก่อนรวมงานจาก upstream แล้วเลือก merge หรือ rebase อย่างตั้งใจตามชนิดของ branch.",
    takeaways: ["คำสั่ง sync ควรทำให้เห็น upstream changes ก่อนจะ merge หรือ rewrite local history."],
    whatToReview: [
      "โค้ดที่ดี fetch ก่อน, ดู commit ที่อยู่บน upstream, rebase feature branch อย่างตั้งใจ แล้วรัน test หลัง sync.",
      "โค้ดที่ควรปรับใช้ pull โดยไม่รู้ behavior แล้ว force push โดยไม่ตรวจว่ามีอะไรเปลี่ยนจาก upstream.",
    ],
    reviewNotes: [
      "git fetch คือขั้นตอนดูข้อมูลที่ค่อนข้างปลอดภัย ให้ถามว่า workflow ทำให้ upstream changes เห็นก่อนเปลี่ยน history หรือไม่.",
    ],
  },
  "git/reviewing-diffs-before-push": {
    codeComments: {
      goodCode: ["เช็กทั้งเนื้อหาไฟล์และ commit ที่กำลังออกจาก branch"],
      badCode: ["ถ้ารีวิวจริงครั้งแรกเกิดหลัง push ก็สายเกินไป"],
    },
    title: "รีวิว diff ก่อน push",
    summary: "ตรวจ unstaged, staged และ committed changes ก่อน push เพื่อกันไฟล์หลุด debug code และ change ที่ไม่ได้ตั้งใจ.",
    takeaways: ["push ควรเกิดหลัง local review pass ไม่ใช่เป็นครั้งแรกที่ใครเห็น final diff."],
    whatToReview: [
      "โค้ดที่ดีเช็ก whitespace, ดู diff ทั้ง unstaged และ staged และดู commit ที่กำลังจะออกจาก branch.",
      "โค้ดที่ควรปรับ add, commit, push ทันทีโดยไม่มี local review pass.",
    ],
    reviewNotes: [
      "ก่อน push ควรตอบได้ว่าอะไรจะออกจาก branch คำตอบควรมาจาก diff และ log ไม่ใช่จากความจำ.",
    ],
  },
  "git/conflict-resolution-without-overwriting": {
    codeComments: {
      goodCode: ["อ่านไฟล์ที่ conflict ก่อนเลือกวิธีแก้"],
      badCode: ["เลือกฝั่งเดียวทั้ง repo อาจลบ intent ในเครื่องได้"],
    },
    title: "แก้ conflict โดยไม่ทับงานคนอื่น",
    summary: "แก้ conflict ด้วยการเข้าใจทั้งสองฝั่ง แล้ว stage เฉพาะไฟล์ที่แก้แล้ว แทนการเลือก ours หรือ theirs แบบครอบจักรวาล.",
    takeaways: ["conflict คือจังหวะ review design การเลือกข้างแบบไม่อ่านอาจลบ intent ของคนอื่นได้."],
    whatToReview: [
      "โค้ดที่ดีดู conflicted files, เทียบทั้งสองฝั่ง, เปิดแก้ไฟล์, รัน test และ stage เฉพาะ resolution.",
      "โค้ดที่ควรปรับเลือก theirs ทั้ง repo แล้ว force push ทำให้ลบ local work หรือ domain decision ได้เงียบ ๆ.",
    ],
    reviewNotes: [
      "conflict resolution ควรรักษา intent ของทั้งสอง branch ถ้า workflow ไม่เคยเปิดไฟล์ที่ conflict เลย มัก mechanical เกินไป.",
    ],
  },
  "git/revert-vs-reset": {
    codeComments: {
      goodCode: ["revert รักษา shared history พร้อม undo behavior"],
      badCode: ["reset main ที่แชร์แล้วคือการ rewrite history ของทุกคน"],
    },
    title: "เลือก revert หรือ reset ให้ถูก",
    summary: "ใช้ revert กับ history ที่แชร์แล้ว และเก็บ reset ไว้สำหรับ cleanup ในเครื่องก่อน commit ถูก push.",
    takeaways: ["คำสั่งแก้ history ต้องขึ้นกับว่า commit นั้นถูกแชร์กับคนอื่นแล้วหรือยัง."],
    whatToReview: [
      "โค้ดที่ดีสร้าง commit ใหม่เพื่อ undo change ที่แชร์แล้ว จึงรักษา history ที่ teammate อาจมีอยู่.",
      "โค้ดที่ควรปรับ reset --hard บน main แล้ว force push ทำให้ทุกคนต้องจัดการ history ที่ถูก rewrite.",
    ],
    reviewNotes: [
      "คำถามแรกของ undo command คือ commit นี้ push แล้วหรือยัง ถ้า push แล้วให้เริ่มจาก revert เว้นแต่ทีมตกลงกันชัดว่าจะ rewrite history.",
    ],
  },
  "git/gitignore-and-secret-safety": {
    codeComments: {
      goodCode: ["กัน local secret และ generated output ไม่ให้ถูก stage"],
      badCode: ["add ทุกอย่างอาจ publish secret หรือ state ของเครื่องได้"],
    },
    title: ".gitignore และความปลอดภัยของ secret",
    summary: "กัน generated file และ secret ออกจาก version control และรีบเอา secret ที่ tracked แล้วออกจาก index.",
    takeaways: ["repo ควรทำให้การ commit secret หรือ build artifact โดยไม่ตั้งใจเกิดยาก และตรวจจับได้ง่าย."],
    whatToReview: [
      "โค้ดที่ดี ignore local secret file และ remove secret ที่ tracked แล้วออกจาก index ก่อน commit.",
      "โค้ดที่ควรปรับ add ทุกไฟล์ ทำให้ credential, generated artifact, editor file หรือ local env หลุดได้.",
    ],
    reviewNotes: [
      ".gitignore คือการป้องกัน ไม่ใช่การแก้หลังเหตุเกิด ถ้า secret ถูก commit แล้ว การลบใน commit ถัดไปอาจไม่พอและอาจต้อง rotate key.",
    ],
  },
  "git/tags-and-release-points": {
    codeComments: {
      goodCode: ["verify commit ที่แน่นอนก่อนสร้าง release tag"],
      badCode: ["tag กว้างและ push หลาย tag อาจ publish จุด release ผิดได้"],
    },
    title: "tag และจุด release",
    summary: "สร้าง annotated tag สำหรับ release point หลัง verify commit ที่ต้องการ ship ให้ชัดเจน.",
    takeaways: ["release tag ควรชี้ไปที่ commit ที่ verify แล้ว และมีความหมายตาม version ที่ชัด.",
    ],
    whatToReview: [
      "โค้ดที่ดีเช็ก working tree, รัน test, ดู commit ล่าสุด, สร้าง annotated version tag และ push เฉพาะ tag นั้น.",
      "โค้ดที่ควรปรับใช้ชื่อ tag กว้าง ๆ และ push ทุก tag ในเครื่อง ซึ่งอาจ publish tag ที่ยังไม่พร้อม.",
    ],
    reviewNotes: [
      "tag เป็นส่วนหนึ่งของ release contract ให้รีวิว commit ที่ชี้ไป, ชื่อ tag และคำสั่ง push ว่าส่งเฉพาะ release ที่ตั้งใจจริง.",
    ],
  },
  "fastapi/path-operation-order": {
    title: "ลำดับของ path operation",
    summary: "ประกาศ route ที่เฉพาะเจาะจงก่อน dynamic path parameter เพื่อให้ FastAPI match request ตามที่ตั้งใจ.",
    takeaways: ["FastAPI evaluate path operation ตามลำดับ ดังนั้นลำดับ route คือ behavior."],
    whatToReview: [
      "โค้ดที่ดีประกาศ route /me ที่เป็น fixed path ก่อน route /{user_id} ที่เป็น dynamic.",
      "โค้ดที่ควรปรับทำให้ /{user_id} match /me ก่อน FastAPI จึงพยายาม parse me เป็น integer และคืน validation error.",
    ],
    reviewNotes: [
      "เวลารีวิว routing ของ FastAPI ให้อ่านไฟล์จากบนลงล่าง route ที่เป็นคำตายตัวหรือเฉพาะเจาะจงควรมาก่อน route ที่กว้างกว่า.",
    ],
  },
  "fastapi/request-models-validation": {
    title: "request model และ validation",
    summary: "ใช้ Pydantic request model เพื่อให้ FastAPI parse, validate, document และ type request body ได้.",
    takeaways: ["request body ควรข้าม API boundary มาเป็น model ที่ validate แล้ว ไม่ใช่ raw dictionary."],
    whatToReview: [
      "โค้ดที่ดีให้ FastAPI และ Pydantic validate shape, type และความยาว title ก่อน business logic ทำงาน.",
      "โค้ดที่ควรปรับดึง raw JSON จาก request แล้วแปลงค่าเอง ทำให้ missing key, invalid type และ docs drift กลายเป็นปัญหาใน handler.",
    ],
    reviewNotes: [
      "ใน FastAPI function signature คือ API contract ถ้า body สำคัญพอให้รับเข้ามา ก็มักสำคัญพอให้สร้าง model.",
    ],
  },
  "fastapi/response-models-contracts": {
    title: "response model เป็น contract",
    summary: "คืน response model ที่บอก public API shape และกรอง field ภายในออก.",
    takeaways: ["response model เป็นทั้ง documentation และ guardrail ของข้อมูลที่ออกจาก service."],
    whatToReview: [
      "โค้ดที่ดีประกาศ response shape ที่เป็น public contract และให้ FastAPI serialize เฉพาะ field ที่ควรออกไป.",
      "โค้ดที่ควรปรับคืน object internals ทำให้ private field, database state หรือ attribute ที่ไม่คาดคิด leak ไปใน API ได้.",
    ],
    reviewNotes: [
      "ตอนรีวิว response ของ FastAPI ให้ถามว่า client contract คืออะไร ถ้าคำตอบคืออะไรก็ตามที่ object ตอนนี้มี API นั้นยัง accidental เกินไป.",
    ],
  },
  "fastapi/dependencies-boundaries": {
    title: "dependency เป็น boundary",
    summary: "ใช้ Depends เพื่อแชร์ request parsing, context และ collaborator โดยไม่ซ่อน setup ไว้ใน handler.",
    takeaways: ["FastAPI dependency ทำให้ request setup ที่ซ้ำกัน explicit, reuse ได้ และเห็นใน OpenAPI."],
    whatToReview: [
      "โค้ดที่ดีทำ pagination เป็น dependency ที่ reuse ได้ พร้อม validation และ documentation.",
      "โค้ดที่ควรปรับ parse query parameter เองใน route ทำให้ validation, default และ reuse กระจายไปตาม handler.",
    ],
    reviewNotes: [
      "dependency ควรทำให้ boundary ชัด ไม่ใช่ซ่อน business logic ถ้าเห็น parsing หรือ setup ซ้ำใน route ให้พิจารณาแยกเป็น dependency ที่โฟกัส.",
    ],
  },
  "fastapi/auth-security-dependencies": {
    title: "auth ด้วย security dependency",
    summary: "ใช้ FastAPI security dependency เพื่อให้ auth ถูกประกาศใน route contract และ OpenAPI schema.",
    takeaways: ["auth ควรเป็น dependency boundary ไม่ใช่การ parse header ซ้ำในทุก route."],
    whatToReview: [
      "โค้ดที่ดีรวมการดึง token และจัดการ invalid credential ไว้ใน security dependency.",
      "โค้ดที่ควรปรับ parse header เองใน route และ assume ว่ามี user ทำให้ auth drift ทีละ endpoint และ docs ไม่แสดง security scheme.",
    ],
    reviewNotes: [
      "FastAPI แสดง security dependency ใน OpenAPI ได้ ตอนรีวิวให้ prefer auth boundary เดียวที่ route ต่าง ๆ depend ได้.",
    ],
  },
  "fastapi/async-handler-boundaries": {
    title: "boundary ของ async handler",
    summary: "ทำให้ async route handler ไม่ block event loop และ await async collaborator โดยตรง.",
    takeaways: ["route ที่เป็น async def ไม่ควรซ่อน blocking I/O ไว้ใน event loop."],
    whatToReview: [
      "โค้ดที่ดี await async collaborator เพื่อให้ I/O yield control กลับไปที่ event loop.",
      "โค้ดที่ควรปรับเรียก HTTP client แบบ blocking ใน async route และลืม await งาน audit.",
    ],
    reviewNotes: [
      "FastAPI รองรับทั้ง def และ async def ตอนรีวิวให้เช็กว่า handler และ collaborator ตกลงกันชัดเจนเรื่อง blocking หรือ non-blocking work.",
    ],
  },
  "fastapi/http-exception-handling": {
    title: "การจัดการ HTTPException",
    summary: "raise HTTPException สำหรับ expected client-facing failure แทนการคืน success และ error shape ปนกัน.",
    takeaways: ["API failure ที่คาดไว้ควรมี HTTP status code และ response shape ที่ชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีคืน 404 จริงพร้อม detail ชัดเจนเมื่อ resource ไม่มีอยู่.",
      "โค้ดที่ควรปรับคืน error envelope พร้อม HTTP success status ทำให้ client, log และ monitoring อ่าน failure ผิดได้.",
    ],
    reviewNotes: [
      "ใช้ exception สำหรับ expected HTTP failure ที่ route boundary และแยก success response กับ error response ให้ client เชื่อ status code ได้.",
    ],
  },
  "fastapi/database-session-lifecycle": {
    title: "lifecycle ของ database session",
    summary: "ส่ง database session ผ่าน dependency เพื่อให้แต่ละ request มี unit of work ที่ชัด.",
    takeaways: ["database session ต้องมี ownership, cleanup และ transaction intent ตาม request ที่เห็นได้ชัด."],
    whatToReview: [
      "โค้ดที่ดีให้แต่ละ request ได้ session ผ่าน dependency และทำ commit/refresh เป็นส่วนหนึ่งของ workflow.",
      "โค้ดที่ควรปรับใช้ module-level session ร่วมกันหลาย request ทำให้ cleanup, transaction boundary และ concurrency ไม่ชัด.",
    ],
    reviewNotes: [
      "database dependency ควรมี lifecycle ที่มองเห็นได้ ตอนรีวิวให้หา module-level session, hidden commit และ handler ที่ test ด้วย replacement session ยาก.",
    ],
  },
  "fastapi/testing-dependency-overrides": {
    title: "test ด้วย dependency override",
    summary: "override dependency ใน test แทนการเรียก external service หรือ patch internals ลึก ๆ.",
    takeaways: ["FastAPI dependency override ทำให้ API test แบบ integration เร็วและโฟกัส behavior."],
    whatToReview: [
      "โค้ดที่ดีแทน auth dependency ด้วย test implementation และ reset override หลัง assertion.",
      "โค้ดที่ควรปรับพึ่ง production-like token และ auth service จริง ทำให้ test ช้า flaky และ reason ยาก.",
    ],
    reviewNotes: [
      "FastAPI มี app.dependency_overrides สำหรับ test ตอนรีวิวให้ prefer override dependency มากกว่า patch internals ลึก ๆ หรือเรียก external service จริง.",
    ],
  },
  "fastapi/app-structure-routers": {
    title: "โครงสร้าง app และ router",
    summary: "จัด feature router ให้เป็น module และให้ app creation โฟกัสการ wiring แทนการยัด route implementation ทั้งหมดไว้ที่เดียว.",
    takeaways: ["FastAPI app ควร wire router และ middleware ส่วน behavior ของ feature ควรอยู่ใน module ที่โฟกัส."],
    whatToReview: [
      "โค้ดที่ดีทำให้ app creation เป็น composition point และเก็บ route ของแต่ละ feature ไว้ใน module ของตัวเอง.",
      "โค้ดที่ควรปรับทำให้ main.py ปน app setup, route definition, business flow และ side effect จนอ่าน ownership ยาก.",
    ],
    reviewNotes: [
      "FastAPI เริ่มในไฟล์เดียวได้ง่ายมาก ตอนรีวิวให้จับจังหวะที่ไฟล์นั้นไม่ใช่ app entry point แล้ว แต่กลายเป็นทั้ง application.",
    ],
  },
  "django/url-pattern-order": {
    title: "ลำดับของ URL pattern",
    summary: "วาง URL ที่เฉพาะเจาะจงไว้ก่อน dynamic pattern ที่กว้างกว่า เพื่อให้ Django ส่ง request ไป view ที่ตั้งใจ.",
    takeaways: ["Django ไล่ตรวจ URL pattern ตามลำดับ ดังนั้นลำดับ route คือ behavior จริงของระบบ."],
    whatToReview: [
      "โค้ดที่ดีให้ route settings ที่เป็นคำตายตัว match ก่อน route profile ที่รับ slug กว้างกว่า.",
      "โค้ดที่ควรปรับทำให้ settings ถูกมองเป็น username ได้ ทำให้ view ทำงานด้วยสมมติฐานผิดและอ่าน route table ยากขึ้น.",
    ],
    reviewNotes: [
      "เวลารีวิว URLconf ให้อ่านจากบนลงล่าง route ที่เฉพาะเจาะจง คำสงวน หรือ action สำคัญควรมาก่อน dynamic pattern ที่กว้างกว่า.",
    ],
  },
  "django/models-fields-constraints": {
    title: "field และ constraint ของ model",
    summary: "ใช้ field, relationship และ database constraint ให้ชัด เพื่อให้ model ปกป้องกฎสำคัญของ domain ได้จริง.",
    takeaways: ["Django model ควรบอก invariant ของธุรกิจ ไม่ใช่เป็นแค่กล่องเก็บ column แบบหลวม ๆ."],
    whatToReview: [
      "โค้ดที่ดีเลือก field type ตรงกับข้อมูล ใช้ ForeignKey จริง และใส่ unique/check constraint สำหรับกฎที่ต้องจริงเสมอ.",
      "โค้ดที่ควรปรับเก็บข้อมูลสำคัญเป็น text หรือ raw id แบบ optional เกือบทั้งหมด ทำให้กฎกระจายไปอยู่ใน application code.",
    ],
    reviewNotes: [
      "ตอนรีวิว model ให้ถามว่าฐานข้อมูลควรช่วยกันอะไรได้บ้าง ถ้ากฎนั้นห้ามผิด ควรมี field, relationship หรือ constraint ที่มองเห็นได้.",
    ],
  },
  "django/querysets-lazy-evaluation": {
    title: "QuerySet และ lazy evaluation",
    summary: "ประกอบ QuerySet ก่อน evaluate และโหลด relationship อย่างตั้งใจ เพื่อลด hidden N+1 query.",
    takeaways: ["QuerySet เป็น lazy object ต้องรีวิวว่ามันถูกสร้าง slice และ evaluate ตรงไหน."],
    whatToReview: [
      "โค้ดที่ดี compose query ให้ครบ เลือก select_related/prefetch_related แล้วค่อย evaluate ตอนสร้างข้อมูลสำหรับแสดงผล.",
      "โค้ดที่ควรปรับดูสั้นแต่ซ่อน query เพิ่มใน loop ผ่านการเรียก author และ comments ของแต่ละ review.",
    ],
    reviewNotes: [
      "เวลาอ่าน ORM code ให้ตาม lifecycle ของ QuerySet ตั้งแต่ filter, order, slice, relationship loading จนถึงจุด evaluate เพราะ query plan สำคัญกว่าจำนวนบรรทัด.",
    ],
  },
  "django/model-manager-boundaries": {
    title: "model manager เป็น boundary",
    summary: "ย้ายกฎ query ที่ใช้ซ้ำไปไว้ใน QuerySet หรือ manager method เพื่อไม่ให้ view repeat filter สำคัญ.",
    takeaways: ["filter ที่ซ้ำหลายจุดคือสัญญาณว่าควรมีกฎ query ที่มีชื่อเรียกชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ visible_to และ with_author ให้ view ขอ query ตามภาษาของ domain ได้ตรง ๆ.",
      "โค้ดที่ควรปรับคัดลอก filter published/deleted ไปหลาย view เมื่อ rule เปลี่ยนจะมีบางทาง drift ได้ง่าย.",
    ],
    reviewNotes: [
      "manager และ custom QuerySet เป็นที่ดีสำหรับคำศัพท์ของระบบ เช่น visible, published, archived หรือ owned by user.",
    ],
  },
  "django/forms-and-validation": {
    title: "form และ validation",
    summary: "ใช้ Form หรือ ModelForm เพื่อตรวจ request data ก่อนสร้างหรือแก้ไข model instance.",
    takeaways: ["request data ควรถูก validate และกลายเป็น cleaned data ก่อนแตะฐานข้อมูล."],
    whatToReview: [
      "โค้ดที่ดีรวม validation ไว้ใน form ใช้ form.is_valid และเก็บ invalid submission ไว้ใน flow ที่มองเห็นได้.",
      "โค้ดที่ควรปรับอ่าน request.POST ตรง ๆ ทำให้ required field, trimming, error message และ domain validation หายไปจาก boundary.",
    ],
    reviewNotes: [
      "ใน Django form คือส่วนหนึ่งของ request boundary ตอนรีวิวให้ดูว่า invalid input ถูกออกแบบเป็น path ปกติ ไม่ใช่ปล่อยให้พังทีหลัง.",
    ],
  },
  "django/class-based-view-responsibilities": {
    title: "ความรับผิดชอบของ class-based view",
    summary: "ให้ class-based view โฟกัส HTTP orchestration และย้าย query หรือ side effect หนัก ๆ ไปหลัง method ที่มีชื่อชัด.",
    takeaways: ["class-based view ควรทำให้ request flow ชัดขึ้น ไม่ใช่กลายเป็นที่รวมทุก concern."],
    whatToReview: [
      "โค้ดที่ดีใช้ generic view สำหรับ list workflow และ override แค่ get_queryset ที่มีเหตุผลชัดเจน.",
      "โค้ดที่ควรปรับรวม query, report และการส่ง email ไว้ใน GET handler ทำให้ชื่อ class ซ่อนความซับซ้อนจริง.",
    ],
    reviewNotes: [
      "CBV อ่านง่ายเมื่อแต่ละ override มีเหตุผลเดียว ถ้า get หรือ post อ่านเหมือน service object ควรแยก behavior ออกไปตั้งชื่อ.",
    ],
  },
  "django/csrf-and-unsafe-methods": {
    title: "CSRF กับ unsafe method",
    summary: "ปกป้อง request ที่เปลี่ยน state ด้วย CSRF flow ของ Django แทนการ exempt view เพื่อความสะดวก.",
    takeaways: ["method ที่เปลี่ยน state เช่น POST ควรเก็บ CSRF protection ไว้ เว้นแต่มี API boundary ที่ตั้งใจจริง."],
    whatToReview: [
      "โค้ดที่ดี require POST, require login และปล่อยให้ CSRF middleware ทำงานกับ action สำคัญ.",
      "โค้ดที่ควรปรับปิด CSRF และไม่ตรวจ ownership ทำให้ action สำคัญถูกเรียกจากที่ที่ระบบไม่ได้ตั้งใจได้ง่าย.",
    ],
    reviewNotes: [
      "เมื่อเห็น csrf_exempt ให้ชะลอและถามเหตุผล อาจถูกต้องสำหรับ signed webhook แต่ไม่ควรเป็น quick fix ให้ form ที่พัง.",
    ],
  },
  "django/settings-environments": {
    title: "settings ตาม environment",
    summary: "โหลด secret และ setting ที่เปลี่ยนตาม environment จาก environment variable แทนการ hard-code พฤติกรรม production.",
    takeaways: ["Django settings คือ operational code จึงต้องรีวิวด้วยมุม security และ deployment."],
    whatToReview: [
      "โค้ดที่ดีทำให้ secret, DEBUG, allowed host และ CSRF origin ชัดตาม environment และ fail fast เมื่อค่าจำเป็นหาย.",
      "โค้ดที่ควรปรับฝังค่า permissive ไว้ใน source ทำให้ reviewer แยกไม่ออกว่าเป็น local-only หรือ production config.",
    ],
    reviewNotes: [
      "ตอนรีวิว settings ให้เช็ก SECRET_KEY, DEBUG, ALLOWED_HOSTS, CSRF origin, database URL, email backend และค่าที่ต่างกันระหว่าง local/staging/production.",
    ],
  },
  "django/transactions-and-side-effects": {
    title: "transaction และ side effect",
    summary: "รวม database write ที่เกี่ยวข้องไว้ใน atomic transaction และให้ external side effect ทำหลัง commit สำเร็จ.",
    takeaways: ["database change และ notification ภายนอกต้องมีข้อตกลงเรื่องลำดับการเกิดที่ชัดเจน."],
    whatToReview: [
      "โค้ดที่ดี lock row, บันทึก review กับ audit log ใน transaction เดียว และส่ง email หลัง commit ด้วย on_commit.",
      "โค้ดที่ควรปรับส่ง email ก่อนเขียน audit log ถ้า write สุดท้าย fail โลกภายนอกจะถูกบอกว่าเปลี่ยนสำเร็จไปแล้ว.",
    ],
    reviewNotes: [
      "รีวิว workflow หลายขั้นด้วยคำถามว่าถ้าพังกลางทางจะเกิดอะไร ถ้า user, email, queue, cache และ database ต้องเห็นตรงกัน transaction boundary ต้องชัด.",
    ],
  },
  "django/tests-client-and-fixtures": {
    title: "test client และ fixture",
    summary: "ใช้ Django test client พร้อมข้อมูลทดสอบที่สมจริง และ assert ทั้ง status, template และการเปลี่ยน database.",
    takeaways: ["view test ที่ดีพิสูจน์พฤติกรรมของ request ไม่ใช่แค่มีข้อความบางคำปรากฏบนหน้า."],
    whatToReview: [
      "โค้ดที่ดีสร้าง data เอง login user ส่ง method ที่ตั้งใจ และ refresh model เพื่อตรวจ state หลัง request.",
      "โค้ดที่ควรปรับพึ่ง magic ID ใช้ GET เปลี่ยน state และ assert แค่ข้อความ ทำให้ workflow จริงพังแต่ test ยังผ่านได้.",
    ],
    reviewNotes: [
      "Django test client มีค่ามากเมื่อ test เล่า behavior จากภายนอก ให้ชอบ setup, request และ observable assertion มากกว่าเช็ก implementation detail ลึก ๆ.",
    ],
  },
  "go/package-and-file-organization": {
    title: "การจัด package และไฟล์",
    summary: "จัด package ให้เล็ก ชัด และตั้งชื่อตามสิ่งที่ caller ต้องใช้ ไม่ใช่ตาม layer ทางเทคนิคภายใน.",
    takeaways: ["package ของ Go คือ API boundary ต้องรีวิวว่าชื่อและ exported surface บอกขอบเขตได้ชัดไหม."],
    whatToReview: [
      "โค้ดที่ดีใช้ชื่อ package ตาม domain ทำ dependency ให้ explicit และ export service boundary ที่เล็ก.",
      "โค้ดที่ควรปรับซ่อน behavior ไว้ใน utils พร้อม global database state ทำให้ caller ไม่รู้ว่า package นี้เป็นเจ้าของอะไร.",
    ],
    reviewNotes: [
      "ใน Go ชื่อ package โผล่ที่ call site เสมอ ควรเลือกชื่อที่อ่านแล้วเป็นธรรมชาติ และหลีกเลี่ยง package รวม helper ไม่เกี่ยวกัน.",
    ],
  },
  "go/naming-and-exported-api": {
    title: "การตั้งชื่อและ exported API",
    summary: "export เฉพาะชื่อที่ caller ต้องใช้ และอย่าใส่ชื่อ package ซ้ำใน exported identifier โดยไม่จำเป็น.",
    takeaways: ["ชื่อที่ export คือสัญญาของ package จึงควรน้อย ชัด และมองจากมุม caller."],
    whatToReview: [
      "โค้ดที่ดีใช้ชื่อ package ช่วยให้ caller อ่านเป็น reviews.Repository, reviews.Review และ reviews.Status ได้ชัด.",
      "โค้ดที่ควรปรับใส่คำว่า review และรายละเอียด implementation ซ้ำในทุกชื่อ ทำให้ API เสียงดังและเปลี่ยนยาก.",
    ],
    reviewNotes: [
      "เวลารีวิว Go API ให้อ่านจากฝั่ง caller ถ้า call site ฟังดูซ้ำหรือยาวเกินไป exported name อาจแบกคำที่ package name บอกอยู่แล้ว.",
    ],
  },
  "go/error-handling-wrapping": {
    title: "การจัดการ error และ wrapping",
    summary: "คืน error พร้อม context ที่ช่วย debug และ wrap underlying error เมื่อ caller ควร inspect ต่อได้.",
    takeaways: ["error ใน Go เป็น value ต้องรีวิวทั้งข้อความสำหรับคนอ่านและ wrapping contract สำหรับ caller."],
    whatToReview: [
      "โค้ดที่ดีเพิ่ม context ของ operation และเก็บ error chain ให้ caller ใช้ errors.Is หรือ errors.As ได้.",
      "โค้ดที่ควรปรับ log แล้วแทน error เดิมด้วยข้อความกว้าง ๆ ทำให้ caller เสียเหตุผลจริงและตัดสินใจต่อไม่ได้.",
    ],
    reviewNotes: [
      "อย่า wrap ทุก error แบบอัตโนมัติ ให้ wrap เมื่อการเปิดเผย error ต้นทางเป็นส่วนหนึ่งของ contract และไม่ทำให้รายละเอียดภายในรั่วเกินไป.",
    ],
  },
  "go/context-cancellation": {
    title: "context และ cancellation",
    summary: "รับ context ที่ API boundary และส่งต่อไปยัง I/O เพื่อให้ cancellation, deadline และ request scope ทำงานได้จริง.",
    takeaways: ["context ควรอยู่กับงานที่ block, รอ หรือออกไปนอก process."],
    whatToReview: [
      "โค้ดที่ดีรับ context จาก caller และผูกกับ outbound HTTP request เพื่อให้ timeout หรือ cancel หยุดงานทั้งสายได้.",
      "โค้ดที่ควรปรับสร้าง request แบบไม่มี lifetime จาก caller เมื่อ caller timeout หรือ disconnect งานอาจยังวิ่งต่อ.",
    ],
    reviewNotes: [
      "context ไม่ใช่ถุงใส่ optional parameter ตอนรีวิวให้หา database call, HTTP call, lock และ goroutine ที่ควรหยุดเมื่อ caller เลิกสนใจ.",
    ],
  },
  "go/interfaces-at-boundaries": {
    title: "interface ที่ boundary",
    summary: "นิยาม interface เล็ก ๆ ตรงฝั่งที่ consume behavior แทนการบังคับให้ producer ต้องรองรับ contract ใหญ่.",
    takeaways: ["interface ใน Go มีค่ามากเมื่อมันอธิบายสิ่งที่ caller ต้องใช้ในจุดนั้นจริง ๆ."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ behavior เดียวที่ service ต้องใช้ ทำให้ production client และ test fake ทำตามได้ง่าย.",
      "โค้ดที่ควรปรับทำให้ caller ที่ต้องส่ง email ต้อง depend กับ SMS, Slack และ lifecycle method ไปด้วย.",
    ],
    reviewNotes: [
      "interface เล็กทำให้ package boundary ยืดหยุ่น ถ้า function เรียกแค่ method เดียวแต่รับ interface สี่ method มักเป็นกลิ่น coupling.",
    ],
  },
  "go/struct-validation-zero-values": {
    title: "struct validation และ zero value",
    summary: "ออกแบบ struct ให้ zero value ใช้ได้จริง หรือ validate ก่อนที่ value จะข้าม boundary สำคัญ.",
    takeaways: ["zero value เป็นจุดแข็งของ Go ได้ แต่ domain object ยังต้องมีกฎ validity ที่ชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีทำให้ invalid construction มองเห็นได้ และคืน error ก่อนปล่อย value เข้าไปในระบบ.",
      "โค้ดที่ควรปรับยอมให้ ID และ title ว่างไหลผ่าน codebase เหมือนเป็น review ที่ valid.",
    ],
    reviewNotes: [
      "zero value เหมาะกับ infrastructure type หลายแบบ แต่สำหรับ domain type ต้องรีวิวว่า zero value valid จริงไหม และ enforce ที่ไหน.",
    ],
  },
  "go/goroutines-and-channel-ownership": {
    title: "goroutine และ channel ownership",
    summary: "ทำ lifetime ของ goroutine และ ownership ของการ close channel ให้ explicit เพื่อให้ concurrent code หยุดได้สะอาด.",
    takeaways: ["โค้ดที่เริ่ม goroutine ควรทำให้เห็น stop condition และ channel ownership ชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีบอกชัดว่าใครอ่าน ใครเขียน ใคร close output channel และ goroutine ออกเมื่อ context ถูก cancel อย่างไร.",
      "โค้ดที่ควรปรับปล่อย lifetime ให้ implicit และให้ function อื่น close channel ที่ตัวเองไม่ได้ own.",
    ],
    reviewNotes: [
      "ตอนรีวิว concurrency ใน Go ให้ถามว่าใคร start goroutine นี้ ใคร stop มัน ใคร close channel แต่ละตัว และถ้า receiver เลิกอ่านจะเกิดอะไร.",
    ],
  },
  "go/defer-resource-cleanup": {
    title: "defer และ resource cleanup",
    summary: "ใช้ defer close เพื่อให้ cleanup อยู่ใกล้จุด acquire resource และครอบคลุมทุก return path.",
    takeaways: ["cleanup ควรอยู่ใกล้ acquisition เพื่อให้ reviewer เห็นว่าทุก path ปล่อย resource จริง."],
    whatToReview: [
      "โค้ดที่ดี defer cleanup ทันทีหลังเปิดไฟล์สำเร็จ ทำให้ early return ยังปิด resource ได้.",
      "โค้ดที่ควรปรับ close เฉพาะ happy path ถ้า import line fail file handle จะ leak จน process cleanup เอง.",
    ],
    reviewNotes: [
      "defer แข็งแรงที่สุดเมื่อวางหลัง acquire สำเร็จทันที ตอนรีวิวให้ไล่ early return แล้วดูว่า cleanup ไม่ได้ขึ้นกับการวิ่งถึงท้าย function.",
    ],
  },
  "go/table-driven-tests": {
    title: "test แบบ table-driven",
    summary: "ใช้ table-driven test เพื่อทำให้เคสที่เกี่ยวข้องกันชัด โดยแต่ละเคสยังมีชื่อและ debug ได้ง่าย.",
    takeaways: ["test table ควรเพิ่ม coverage และ readability ไม่ใช่ซ่อนว่าเคสไหน fail."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อแต่ละเคส ใช้ subtest และให้ failure output พอรู้ input กับ expected value.",
      "โค้ดที่ควรปรับ assert ซ้ำ ๆ พร้อมข้อความกว้าง ๆ เมื่อ fail ต้องย้อนอ่านเองว่าเคสไหนพัง.",
    ],
    reviewNotes: [
      "table-driven test เหมาะเมื่อทุก row เป็น variation ของ behavior เดียว ถ้า setup หรือ assertion ต่างกันมาก ให้แยก test ดีกว่า.",
    ],
  },
  "go/json-http-handler-boundaries": {
    title: "boundary ของ JSON HTTP handler",
    summary: "ให้ HTTP handler โฟกัส method check, JSON decoding, validation, service call และ response shape ที่ชัด.",
    takeaways: ["HTTP handler ใน Go ควรทำ request parsing และ response writing ให้ explicit ที่ edge."],
    whatToReview: [
      "โค้ดที่ดีเช็ก method, close body, decode เข้า request type, reject unknown field, ส่ง r.Context และตั้ง status ชัด.",
      "โค้ดที่ควรปรับ ignore decode error ใช้ map หลวม ๆ ทิ้ง request cancellation และเขียน response เหมือน success เสมอ.",
    ],
    reviewNotes: [
      "HTTP handler คือ edge code ให้รีวิว method gate, request size, decoding, validation, context propagation, service boundary และ status consistency.",
    ],
  },
  "docker/build-context-dockerignore": {
    title: "build context และ .dockerignore",
    summary: "ทำให้ Docker build context เล็กและตั้งใจเลือกไฟล์ เพื่อให้ build เร็ว ปลอดภัย และ reproduce ได้ง่ายขึ้น.",
    takeaways: ["build context คือ input ของ image ดังนั้นต้องรีวิวว่าไฟล์อะไรถูกส่งเข้า builder ได้บ้าง."],
    whatToReview: [
      "โค้ดที่ดี exclude dependency folder, build output, secret, log และ metadata ของ repository ออกจาก build context.",
      "โค้ดที่ควรปรับส่งทั้ง repository เข้า builder ทำให้ cache invalidation วุ่นวาย และเสี่ยง copy ไฟล์ลับหรือไฟล์ไม่เกี่ยวข้องเข้า image.",
    ],
    reviewNotes: [
      "เริ่มรีวิว Docker จาก build context ก่อนเสมอ ถ้า .dockerignore หายหรือบางเกินไป Dockerfile ที่ดูสะอาดก็ยังช้า flaky หรือไม่ปลอดภัยได้.",
    ],
  },
  "docker/base-images-and-tag-pinning": {
    title: "base image และ tag pinning",
    summary: "เลือก base image ให้แคบและ pin version อย่างตั้งใจ เพื่อไม่ให้ rebuild แล้ว dependency เปลี่ยนเองโดยไม่มีรีวิว.",
    takeaways: ["base image คือ dependency ชนิดหนึ่ง จึงควรรีวิวด้วยความละเอียดใกล้เคียงกับ package version."],
    whatToReview: [
      "โค้ดที่ดีใช้ runtime base ที่เจาะจง และทำให้การติดตั้ง production dependency ชัดเจน.",
      "โค้ดที่ควรปรับพึ่ง latest ทำให้ rebuild commit เดิมแล้วได้ Node หรือ OS package คนละชุดแบบเงียบ ๆ.",
    ],
    reviewNotes: [
      "pinning ไม่ได้แปลว่าไม่อัปเดต แต่ทำให้อัปเดตกลายเป็น change ที่ CI, security scanner และ reviewer เห็นได้.",
    ],
  },
  "docker/layer-cache-dependency-order": {
    title: "layer cache และลำดับ dependency",
    summary: "เรียง instruction ใน Dockerfile เพื่อให้ dependency layer ใช้ cache ต่อได้เมื่อแก้ source file.",
    takeaways: ["Docker cache อิงลำดับ instruction ดังนั้นมักควร copy dependency file ก่อน application source."],
    whatToReview: [
      "โค้ดที่ดีทำให้ layer ติดตั้ง dependency ยังถูก cache เมื่อเปลี่ยนเฉพาะ source file.",
      "โค้ดที่ควรปรับ copy ทั้ง project ก่อน install dependency ทำให้ source edit เล็ก ๆ invalidate install layer ราคาแพง.",
    ],
    reviewNotes: [
      "Dockerfile ที่เป็นมิตรกับ cache มักเป็นมิตรกับ reviewer ด้วย ให้หา input ที่เล็กและเสถียรก่อน RUN step ที่แพง.",
    ],
  },
  "docker/multi-stage-builds": {
    title: "build แบบ multi-stage",
    summary: "แยก build tooling ออกจาก runtime image สุดท้าย เพื่อให้ production container มีเฉพาะสิ่งที่ต้องใช้ตอนรัน.",
    takeaways: ["multi-stage build ลดขนาด final image และแยก build concern ออกจาก runtime concern."],
    whatToReview: [
      "โค้ดที่ดีเก็บ install/build tooling ไว้ใน stage ก่อนหน้า แล้ว copy เฉพาะ runtime artifact ไป final image.",
      "โค้ดที่ควรปรับ ship source file, dev dependency และ build tool ไปใน image เดียวกับที่รัน production.",
    ],
    reviewNotes: [
      "สำหรับแอปที่ compile หรือ bundle ได้ ให้ถามว่า final stage ต้องการอะไรจริง ๆ สิ่งที่ใช้แค่ build ควรอยู่นอก runtime stage.",
    ],
  },
  "docker/copy-add-and-workdir": {
    title: "COPY, ADD และ WORKDIR",
    summary: "ใช้ WORKDIR และ COPY อย่างตั้งใจ เพื่อให้ path ชัด และไม่ซ่อน side effect จาก remote content ไว้ใน ADD.",
    takeaways: ["ควรให้ path และ download/extraction step ชัดเจน แทนการพึ่ง side effect ที่อ่านยากใน Dockerfile."],
    whatToReview: [
      "โค้ดที่ดีใช้ WORKDIR แบบ absolute, copy ไฟล์ที่รู้แน่ และทำให้ input ของการ install มองเห็นได้.",
      "โค้ดที่ควรปรับพึ่ง cd ใน RUN แต่ละ layer, ดึง remote content ผ่าน ADD และ copy repository ไป root ของ image.",
    ],
    reviewNotes: [
      "COPY มักเป็น default ที่อ่านง่ายกว่า ใช้ ADD เมื่อ behavior พิเศษของมันถูกตั้งใจและถูกรีวิวแล้วจริง ๆ.",
    ],
  },
  "docker/non-root-user-permissions": {
    title: "non-root user และ permission",
    summary: "รัน application process ด้วย user ที่ไม่ใช่ root และทำ ownership ของไฟล์ให้ตรงกับ runtime user.",
    takeaways: ["container ไม่ควรต้องใช้ root ตอน runtime ถ้า application ไม่มีเหตุผลเฉพาะที่ต้องใช้จริง ๆ."],
    whatToReview: [
      "โค้ดที่ดีสร้าง dedicated user, กำหนด ownership ตอน copy และ switch user ก่อน process เริ่ม.",
      "โค้ดที่ควรปรับรันด้วย root user ค่า default ทำให้ process ที่ถูก compromise มี privilege มากเกินจำเป็นใน container.",
    ],
    reviewNotes: [
      "เมื่อเพิ่ม USER ต้องรีวิว writable directory ด้วย container non-root ที่เขียน cache, temp หรือ upload path ที่ต้องใช้ไม่ได้จะพังตอน runtime.",
    ],
  },
  "docker/args-env-and-secrets": {
    title: "ARG, ENV และ secret",
    summary: "แยก build-time argument, runtime environment variable และ secret ออกจากกัน เพื่อไม่ให้ sensitive value ถูก bake เข้า image.",
    takeaways: ["secret ควรถูกส่งตอน runtime หรือผ่าน secret mount ไม่ใช่ถูกเก็บใน image layer."],
    whatToReview: [
      "โค้ดที่ดีแยก build args, runtime env และ secrets เป็นคนละ concern ที่อ่านได้ชัด.",
      "โค้ดที่ควรปรับส่ง secret ผ่าน ARG แล้วเก็บเป็น ENV ทำให้ค่าลับติด image configuration หรือ build history.",
    ],
    reviewNotes: [
      "ถ้าค่าเป็น secret ให้สมมติว่า image layer, log และ metadata อาจเปิดเผยได้ ควรใช้ Compose secrets, orchestrator secrets หรือ BuildKit secret mounts.",
    ],
  },
  "docker/entrypoint-cmd-and-signals": {
    title: "ENTRYPOINT, CMD และ signal",
    summary: "ใช้คำสั่งแบบ exec form และทำ startup wrapper ให้ปลอดภัยต่อ signal เพื่อให้ container stop ได้อย่าง graceful.",
    takeaways: ["process ที่ Docker เริ่มควรรับ signal โดยตรงและปิดตัวได้แบบคาดเดาได้."],
    whatToReview: [
      "โค้ดที่ดีใช้ exec form ทำให้ application process ได้รับ termination signal โดยตรง.",
      "โค้ดที่ควรปรับใช้ shell form ทำให้ shell กลายเป็น PID 1 และ signal forwarding หรือ graceful shutdown คาดเดายากขึ้น.",
    ],
    reviewNotes: [
      "ถ้าจำเป็นต้องใช้ entrypoint script ให้เช็กว่าจบด้วย exec \"$@\" เพื่อให้ script เตรียม environment แล้วส่งต่อให้ process จริง.",
    ],
  },
  "docker/healthchecks-and-runtime-config": {
    title: "healthcheck และ runtime config",
    summary: "อธิบาย health และ runtime config ให้ชัด เพื่อให้ operator รู้ว่า container พร้อมและ healthy จริงไหม.",
    takeaways: ["container ที่ running ไม่ได้แปลว่า application healthy เสมอ ต้องมี health signal ที่มีความหมาย."],
    whatToReview: [
      "โค้ดที่ดีประกาศ runtime default, expose port ที่คาดไว้ และผูก healthcheck กับ endpoint สุขภาพของแอป.",
      "โค้ดที่ควรปรับอาจ running อยู่แม้แอปไม่สามารถรับ request ได้ ทำให้ operator ได้ signal น้อยตอนมีปัญหา.",
    ],
    reviewNotes: [
      "healthcheck ควรถูกและมีความหมาย อย่าเช็กแค่ว่า process อยู่ ถ้า failure mode จริงคือ dependency พังหรือ HTTP server ตาย.",
    ],
  },
  "docker/compose-services-volumes-networks": {
    title: "Compose service, volume และ network",
    summary: "ใช้ Compose เพื่อกำหนด service boundary, persistent volume และ internal network โดยไม่เปิด port หรือ state เกินจำเป็น.",
    takeaways: ["Compose file ควรทำให้ความสัมพันธ์ของ service ชัด และทำให้ persistence กับ exposure เป็นเรื่องตั้งใจ."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ persistence, เก็บ service ไว้ใน internal network และ expose เฉพาะ app port ที่ host ต้องใช้.",
      "โค้ดที่ควรปรับใช้ host networking, mount host filesystem และเปิด database port โดยไม่มีเหตุผลชัดเจน.",
    ],
    reviewNotes: [
      "การรีวิว Compose คือการรีวิว boundary ให้ดูว่า service ไหน host เข้าถึงได้ ข้อมูลไหนรอดหลัง restart และ mount ไหนแก้เครื่อง dev ได้.",
    ],
  },
  "tailwindcss/utility-composition-readability": {
    title: "การจัด utility ให้อ่านง่าย",
    summary: "จัดกลุ่ม Tailwind utility ตามหน้าที่ เพื่อให้ reviewer เห็น layout, color, state และ motion โดยไม่ต้องแกะ string ยาว ๆ.",
    takeaways: ["class list แบบ utility-first ก็ยังต้องมีโครงสร้าง การจัดกลุ่มที่อ่านง่ายทำให้ design intent ถูกรีวิวได้."],
    whatToReview: [
      "โค้ดที่ดีแยก base structure, visual tone และ interaction state ทำให้มองหา utility ซ้ำหรือขัดกันได้เร็ว.",
      "โค้ดที่ควรปรับรวมทุก concern ไว้ใน class string เดียว และมี rounded value ซ้ำซ้อน แม้ UI render ได้ แต่ intent รีวิวได้ยาก.",
    ],
    reviewNotes: [
      "Tailwind ไม่ได้ทำให้เราเลิกตั้งชื่อ เวลา class list กลายเป็น decision ที่ใช้ซ้ำ ให้จัดกลุ่มตาม concern หรือดึงเป็น constant ระดับ component.",
    ],
  },
  "tailwindcss/responsive-breakpoints": {
    title: "breakpoint แบบ responsive",
    summary: "ใช้ breakpoint ของ Tailwind เป็น mobile-first override แทนการล็อก layout ไว้ที่ความกว้าง desktop.",
    takeaways: ["responsive utility ควรบอกว่า layout จอเล็กเติบโตอย่างไร ไม่ใช่บอกว่า layout desktop ถูกบีบลงอย่างไร."],
    whatToReview: [
      "โค้ดที่ดีเริ่มจากหนึ่งคอลัมน์ แล้วเพิ่มคอลัมน์ที่ sm และ lg พร้อม container ที่กว้างยืดหยุ่นและมี max width.",
      "โค้ดที่ควรปรับล็อก desktop width และจำนวนคอลัมน์ ทำให้จอเล็ก overflow หรือถูกบีบโดยที่โค้ดไม่ได้อธิบาย intent.",
    ],
    reviewNotes: [
      "เวลารีวิว responsive Tailwind ให้อ่านจากซ้ายไปขวา: base utility ก่อน แล้วค่อย breakpoint override ถ้า base ใช้บนมือถือไม่ได้ แปลว่า stack อาจกลับด้าน.",
    ],
  },
  "tailwindcss/state-variants-hover-focus-disabled": {
    title: "state variant สำหรับ hover focus disabled",
    summary: "รีวิว interactive utility เป็น state ครบชุด ไม่ใช่ดูแค่ hover ที่สวยตอนใช้เมาส์.",
    takeaways: ["button และ link ควรมี hover, focus-visible และ disabled state ที่ตั้งใจพอ ๆ กับ default style."],
    whatToReview: [
      "โค้ดที่ดีมี keyboard focus ที่เห็นชัด และ disabled style ที่เปลี่ยนทั้ง pointer behavior กับ visual affordance.",
      "โค้ดที่ควรปรับมีแค่ hover และลบ outline โดยไม่มี focus replacement ทำให้ผู้ใช้ keyboard หลงตำแหน่งได้.",
    ],
    reviewNotes: [
      "ถ้าเห็น hover: ในรีวิว ให้มองหา focus-visible: และ disabled: ด้วยเมื่อ element นั้น interactive state ที่หายไปมักเป็น UX bug ที่ซ่อนอยู่.",
    ],
  },
  "tailwindcss/spacing-layout-consistency": {
    title: "spacing และ layout ที่สม่ำเสมอ",
    summary: "ใช้ spacing scale และ layout rhythm ที่สม่ำเสมอ แทน one-off nudge ที่ทำให้แก้ในอนาคตเปราะ.",
    takeaways: ["utility ระยะห่างที่ซ้ำควรเผย rhythm ของ layout ถ้ามีค่าประหลาดหลายจุด มักเป็นการ patch ภาพเฉพาะหน้า."],
    whatToReview: [
      "โค้ดที่ดีใช้ padding ของ container และ space-y เพื่อทำให้จังหวะ vertical ชัดเจน.",
      "โค้ดที่ควรปรับใช้ pixel arbitrary เกือบทุก gap เป็นสัญญาณว่า code ถูกปรับจาก screenshot เดียว ไม่ใช่ reusable layout.",
    ],
    reviewNotes: [
      "arbitrary value หนึ่งจุดอาจสมเหตุสมผล แต่ถ้ามาเป็นกลุ่มใน component เดียว ให้ถามว่าควรกลับไปใช้ project spacing scale หรือไม่.",
    ],
  },
  "tailwindcss/theme-tokens-and-custom-values": {
    title: "theme token และ custom value",
    summary: "ใช้ named theme token สำหรับ decision ที่แชร์กัน และเก็บ custom value ไว้สำหรับ exception เฉพาะจุดจริง ๆ.",
    takeaways: ["สี ระยะ หรือ radius ที่ใช้ซ้ำมักควรถูกยกระดับเป็น token เพื่อให้ reviewer คุยกันด้วยชื่อเดียวกัน."],
    whatToReview: [
      "โค้ดที่ดีใช้ brand utility ที่ตั้งชื่อแล้ว ทำให้ design decision ที่ซ้ำถูกเปลี่ยนและรีวิวผ่าน theme ได้.",
      "โค้ดที่ควรปรับฝัง design system ไว้ใน component เดียวด้วย hex color, custom shadow และ pixel value ซึ่งมักถูก copy ต่อแบบไม่ตรงกัน.",
    ],
    reviewNotes: [
      "custom value ของ Tailwind มีประโยชน์ แต่ custom value ที่ซ้ำคือ design token ที่กำลังขอชื่อ เวลารีวิวให้ถามว่าค่านี้เป็นของ component หรือของ theme.",
    ],
  },
  "tailwindcss/dark-mode-variants": {
    title: "variant สำหรับ dark mode",
    summary: "วาง dark mode style คู่กับ base style เพื่อให้ทั้งสอง theme ถูกรีวิวได้ใน component เดียวกัน.",
    takeaways: ["dark mode ควรครอบคลุม background, text, border และ state color ไม่ใช่เปลี่ยนเฉพาะ foreground ที่เห็นชัดที่สุด."],
    whatToReview: [
      "โค้ดที่ดีจับคู่ light และ dark value สำหรับ surface, border, text hierarchy และ link state.",
      "โค้ดที่ควรปรับเปลี่ยนเฉพาะ heading ใน dark mode ทำให้ card ยังสว่างหรือ body text contrast ต่ำเมื่อทั้งหน้ามืด.",
    ],
    reviewNotes: [
      "รีวิว dark mode ไม่ใช่แค่ค้นหา dark: แต่ต้องดูว่าทุก layer ที่มีผลต่อ contrast มี dark variant ที่ตั้งใจแล้วหรือยัง.",
    ],
  },
  "tailwindcss/class-reuse-component-boundaries": {
    title: "reuse class และ component boundary",
    summary: "แยก class decision ที่ใช้ซ้ำไว้ที่ component boundary แทนการ copy class string ยาว ๆ หลายจุด.",
    takeaways: ["Tailwind string ที่ซ้ำก็คือ duplication เหมือนกัน ให้ extract เมื่อมันแทน UI concept เดียวกัน."],
    whatToReview: [
      "โค้ดที่ดีให้ badge มี component boundary และเก็บ variant class ไว้ใน typed map จุดเดียว.",
      "โค้ดที่ควรปรับทำซ้ำ structural utility ในหลาย branch เปลี่ยนหน้าตาเล็กน้อยครั้งเดียวจึงต้องแก้หลายที่และหวังว่าจะไม่หลุด.",
    ],
    reviewNotes: [
      "extract เมื่อ duplication แทน UI concept เดียวกัน ไม่ต้อง extract ทุก class list โดยอัตโนมัติ ให้ดูว่าคอมเมนต์รีวิวจะใช้ร่วมกันทุก copy หรือไม่.",
    ],
  },
  "tailwindcss/arbitrary-values-restraint": {
    title: "การใช้ arbitrary value อย่างพอดี",
    summary: "ใช้ arbitrary value สำหรับ constraint เฉพาะจริง ๆ ไม่ใช่ใช้แทน design scale ของโปรเจกต์.",
    takeaways: ["arbitrary value คือเครื่องมือ precision ถ้าใช้เกินไป design system จะหายไปจากสายตา reviewer."],
    whatToReview: [
      "โค้ดที่ดีใช้ arbitrary grid template เพียงจุดเดียว เพราะ layout ต้องการ text column ที่ยืดหยุ่นคู่กับ shortcut column แบบ auto.",
      "โค้ดที่ควรปรับใช้ arbitrary value เกือบทุก decision ทำให้ component จัดแนวกับ UI อื่นได้ยาก.",
    ],
    reviewNotes: [
      "ถามว่า arbitrary value แต่ละตัวมีเหตุผลอะไร ถ้าคำตอบคือดูแล้วใกล้เคียง ให้กลับไปใช้ scale ของ spacing, color, size หรือ radius.",
    ],
  },
  "tailwindcss/accessibility-contrast-focus": {
    title: "contrast และ focus สำหรับ accessibility",
    summary: "รีวิว Tailwind styling ให้มี focus ที่เห็นชัด contrast ที่อ่านได้ และ label ที่เข้าถึงได้สำหรับ icon-only control.",
    takeaways: ["utility class ทำให้ accessibility ชัดขึ้นได้ เมื่อ contrast, focus และ label อยู่ใน class list หรือ markup ให้เห็นตรง call site."],
    whatToReview: [
      "โค้ดที่ดีให้ icon-only button มี accessible text label, contrast เพียงพอ และ keyboard focus ring ที่เด่นชัด.",
      "โค้ดที่ควรปรับลบ outline ใช้ foreground contrast อ่อน และปล่อยให้ icon เป็นชื่อเดียวของ control.",
    ],
    reviewNotes: [
      "Tailwind ทำให้ accessibility รีวิวได้ง่ายขึ้น เพราะ focus ring, contrast choice และ sr-only label มองเห็นได้ตรง call site.",
    ],
  },
  "tailwindcss/conditional-classes-and-conflicts": {
    title: "conditional class และ conflict",
    summary: "สร้าง conditional class list ให้ state ที่ควร exclusive กันไม่สามารถปล่อย utility ที่ชนกันออกมาพร้อมกันโดยไม่ตั้งใจ.",
    takeaways: ["conditional Tailwind ควรทำให้ variant precedence ชัด ถ้ามี utility ขัดกัน การรีวิว state จะกลายเป็นการเดา."],
    whatToReview: [
      "โค้ดที่ดีทำให้ selected และ unselected style exclusive กัน แล้วค่อย layer disabled behavior อย่างตั้งใจ.",
      "โค้ดที่ควรปรับสามารถปล่อย background, text และ opacity utility ที่ขัดกันใน string เดียว ผลลัพธ์จึงขึ้นกับลำดับมากกว่า state logic.",
    ],
    reviewNotes: [
      "เวลารีวิว conditional Tailwind ให้หา pair ที่ไม่ควรอยู่ร่วมกัน เช่น background สองค่า opacity สองค่า หรือ disabled state ที่ยังเก็บ hover styling ไว้.",
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
