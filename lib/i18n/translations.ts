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
    reviewNotesSection: "ข้อควรสังเกตตอนรีวิว",
  },
} as const satisfies Record<Language, Record<string, string>>;

export const trackThaiTranslations = {
  html: {
    title: "HTML",
    description:
      "ฝึกรีวิวว่าโครงหน้าใช้แท็กถูกหน้าที่ไหม ฟอร์มอ่านออกไหม และผู้ใช้ที่ใช้ keyboard หรือ screen reader ยังใช้งานได้หรือเปล่า.",
  },
  css: {
    title: "CSS",
    description:
      "ฝึกรีวิว layout, responsive, สี และ selector ว่าอ่านง่าย แก้ต่อได้ และไม่พังเมื่อหน้าจอหรือ state เปลี่ยน.",
  },
  javascript: {
    title: "JavaScript",
    description:
      "ฝึกรีวิวลำดับการทำงาน งาน async การตั้งชื่อ และผลข้างเคียงที่ทำให้คนอ่านเข้าใจผิดหรือ debug ยาก.",
  },
  typescript: {
    title: "TypeScript",
    description:
      "ฝึกรีวิวจุดที่ข้อมูลเข้าออกฟังก์ชันหรือ API ว่า type ชัดพอไหม และโค้ดเช็กข้อมูลที่ยังไม่น่าเชื่อถือก่อนใช้หรือเปล่า.",
  },
  react: {
    title: "React",
    description:
      "ฝึกรีวิว component ว่าส่ง props ชัดไหม เก็บ state เท่าที่จำเป็นไหม และ effect/context ถูกใช้ในขอบเขตที่ควบคุมได้หรือเปล่า.",
  },
  nextjs: {
    title: "Next.js",
    description:
      "ฝึกรีวิว App Router ว่าไฟล์วางถูกที่ไหม งานไหนควรรันบน server หรือ browser และการดึงข้อมูล/cache อธิบายเจตนาชัดหรือเปล่า.",
  },
  nodejs: {
    title: "Node.js",
    description:
      "ฝึกรีวิวโค้ดฝั่ง server ว่าเริ่มระบบถูกจุดไหม งานอ่านเขียนไฟล์/network ไม่บล็อกกัน และปิด process โดยไม่ทำ request ค้าง.",
  },
  express: {
    title: "Express",
    description:
      "ฝึกรีวิว Express app ว่าแยก router ตามงานจริงไหม middleware เรียงถูกทางของ request ไหม และ error/auth อยู่จุดที่ควรอยู่หรือเปล่า.",
  },
  sql: {
    title: "SQL",
    description:
      "ฝึกรีวิว query และ schema ว่าคืนข้อมูลตรงคำถามไหม ใช้ index ได้ไหม และงานที่แตะหลายตารางปลอดภัยด้วย transaction หรือเปล่า.",
  },
  python: {
    title: "Python",
    description:
      "ฝึกรีวิว Python ให้ชื่ออ่านรู้เรื่อง แยก None จากค่าว่าง ระวัง default list/dict และทำให้ error, type และ test มองเห็นได้ชัด.",
  },
  php: {
    title: "PHP",
    description:
      "ฝึกรีวิว PHP ที่รับ request จริง: ตรวจ $_GET/$_POST, escape ตอนแสดงผล, query ด้วย PDO, เก็บ password/session ให้ปลอดภัย และไม่ยัด logic ไว้ใน template.",
  },
  java: {
    title: "Java",
    description:
      "ฝึกรีวิว Java ว่าจัดการ null ชัดไหม object ถูกแก้จากข้างนอกไม่ได้ไหม resource ถูกปิดแน่ไหม และแยก controller/service/repository อ่านง่ายหรือเปล่า.",
  },
  git: {
    title: "Git",
    description:
      "ฝึกรีวิวการใช้ Git ก่อนส่งงาน: ดู status, stage เฉพาะเรื่อง, เขียน commit เล่าเหตุผล, ดู diff ก่อน push และแก้ conflict โดยไม่กวาดทั้งไฟล์.",
  },
  fastapi: {
    title: "FastAPI",
    description:
      "ฝึกรีวิว FastAPI ว่า route ไม่ชนกัน request/response มี model ชัด งาน async ไม่บล็อก และ database session เปิดปิดตามอายุของ request.",
  },
  django: {
    title: "Django",
    description:
      "ฝึกรีวิว Django ว่า URL จับคู่ถูกลำดับ model กันข้อมูลผิดได้ QuerySet ไม่ยิง SQL เกินจำเป็น และ form/view/settings แยกหน้าที่ชัด.",
  },
  go: {
    title: "Go",
    description:
      "ฝึกรีวิว Go ว่า package ใช้งานจากข้างนอกอ่านดีไหม error ยังบอกสาเหตุเดิมไหม context ถูกส่งต่อ และ goroutine/resource มีทางหยุดหรือปิดชัดเจน.",
  },
  docker: {
    title: "Docker",
    description:
      "ฝึกรีวิว Docker ว่า build ส่งไฟล์เท่าที่จำเป็น image ล็อก version พอควร secret ไม่ติด image และ container มี user/healthcheck ที่ใช้ได้จริง.",
  },
  tailwindcss: {
    title: "Tailwind CSS",
    description:
      "ฝึกรีวิว Tailwind ว่า class เรียงเป็นระบบ responsive/state ครบ สีและระยะใช้ค่ากลางร่วมกัน และ class ตามเงื่อนไขไม่ชนกัน.",
  },
} as const satisfies Record<TrackSlug, TrackTranslation>;

export const lessonThaiTranslations = {
  "html/document-language-metadata": {
    codeComments: {
      goodCode: ["metadata บอกข้อมูลเริ่มต้นให้ browser และ screen reader"],
      badCode: ["ขาด lang และ viewport ทำให้ browser ต้องเดาเอง"],
    },
    title: "ข้อมูลพื้นฐานของหน้าเว็บ (metadata)",
    summary: "บอกภาษา ชุดตัวอักษร (charset), ขนาดหน้าจอ (viewport) และชื่อหน้า (title) ไว้ใน <head> เพื่อให้ browser จัดหน้าและ screen reader อ่านได้ถูกต้อง.",
    takeaways: ["ทุกหน้าควรมี lang, charset, viewport และ title เพราะนี่คือข้อมูลพื้นฐานที่ browser ใช้เข้าใจหน้าเว็บ."],
    whatToReview: [
      "โค้ดที่ดีบอกภาษา, charset, viewport และ title ตั้งแต่ใน <head> ทำให้ browser รู้วิธีจัดหน้าและรู้ว่าหน้านี้ชื่ออะไร.",
      "โค้ดที่ควรปรับปล่อยให้ browser เดาภาษาและขนาดหน้าจอเอง ทำให้การแสดงผลหรือการอ่านออกเสียงอาจไม่ตรงกับที่ตั้งใจ.",
    ],
    reviewNotes: [
      "เวลารีวิว HTML ให้เริ่มจาก <head> ก่อนเสมอ เพราะเนื้อหาใน body จะดีแค่ไหนก็ยังใช้งานยากได้ ถ้า lang, charset, viewport หรือ title ไม่ชัดตั้งแต่ต้น.",
    ],
  },
  "html/semantic-document-structure": {
    codeComments: {
      goodCode: ["semantic tags ทำให้รู้ว่าส่วนนี้คือเนื้อหาหลักและบทความ"],
      badCode: ["div ทั่วไปบอกไม่ได้ว่าส่วนนี้ทำหน้าที่อะไร"],
    },
    title: "โครงสร้างหน้าด้วย semantic tags",
    summary: "ใช้แท็กอย่าง main, nav, article และ heading เพื่อบอกว่าส่วนไหนคือเมนู เนื้อหาหลัก หรือบทความ (landmark/structure).",
    takeaways: ["เลือก semantic tag ที่บอกหน้าที่ของเนื้อหาก่อนใช้ div ครอบทุกอย่าง."],
    whatToReview: [
      "โค้ดที่ดีทำให้เห็นโครงสร้างหน้าได้จาก HTML เลย เช่น รู้ว่าส่วนไหนคือ main content และส่วนไหนคือ article.",
      "โค้ดที่ควรปรับอาจแสดงผลเหมือนกันบนหน้าจอ แต่ใช้ div ทั่วไปจน browser และ screen reader ไม่รู้ความหมายของแต่ละส่วน.",
    ],
    reviewNotes: [
      "เวลารีวิว ให้ถามว่าถ้าไม่ดู CSS เรายังเข้าใจหน้าไหมว่าอะไรคือเมนู เนื้อหาหลัก หรือบทความ Semantic HTML ช่วยให้ทั้งคนอ่านโค้ดและ screen reader เข้าใจโครงสร้างเดียวกัน.",
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
      goodCode: ["aria-describedby ผูกคำแนะนำและ error กับช่องกรอกนี้โดยตรง"],
      badCode: ["ข้อความที่อยู่ใกล้ช่องกรอกไม่ได้แปลว่า screen reader รู้ว่าเกี่ยวกัน"],
    },
    title: "คำแนะนำและ error ของช่องกรอก",
    summary: "เชื่อมคำแนะนำและข้อความผิดพลาด (error) เข้ากับช่องกรอก (field) เพื่อให้ผู้ใช้และ screen reader รู้ว่าข้อความนั้นอธิบายช่องไหน.",
    takeaways: ["ใช้ aria-describedby และ aria-invalid เพื่อผูกคำแนะนำและสถานะผิดพลาดเข้ากับ input ที่เกี่ยวข้องจริง ๆ."],
    whatToReview: [
      "โค้ดที่ดีทำให้ input รู้ว่าคำแนะนำและ error ข้อไหนเป็นของมัน และบอกสถานะผิดพลาดด้วย aria-invalid.",
      "โค้ดที่ควรปรับวางข้อความไว้ใกล้ input แค่ทางสายตา แต่ screen reader อาจไม่รู้ว่าข้อความนั้นเป็นของช่องกรอกไหน.",
    ],
    reviewNotes: [
      "ในการรีวิวฟอร์ม ความใกล้บนหน้าจอไม่พอ ให้เช็กว่า input, help text และ error message ถูกเชื่อมกันจริงด้วย id/aria ไม่ใช่แค่ดูเหมือนอยู่ด้วยกัน.",
    ],
  },
  "html/interactive-elements": {
    codeComments: {
      goodCode: ["button จริงมี keyboard และ focus behavior มาให้แล้ว"],
      badCode: ["div ที่คลิกได้ต้องสร้างพฤติกรรมแบบ button เองทั้งหมด"],
    },
    title: "ใช้ element ให้ตรงกับการกระทำ",
    summary: "ถ้าเป็นการกดหรือสั่งงาน ให้ใช้ button หรือ native element ที่มีพฤติกรรมมาให้ แทน div ที่ใส่ onClick เอง.",
    takeaways: ["ถ้าเป็น action ให้เริ่มจาก button หรือ native element ที่เหมาะสมก่อน."],
    whatToReview: [
      "โค้ดที่ดีใช้ button ทำให้ keyboard, focus และ role ทำงานตาม browser ให้ทันที.",
      "โค้ดที่ควรปรับทำ div ให้เหมือนปุ่ม ซึ่งมักต้องเขียนพฤติกรรมสำคัญเพิ่มเองและพลาดง่าย.",
    ],
    reviewNotes: [
      "เวลาเห็น div ที่คลิกได้ ให้ถามว่าทำไมไม่ใช้ button. ถ้าไม่มีเหตุผลชัดเจน native element มักปลอดภัยกว่า เพราะ browser ให้ keyboard, focus และ role มาพร้อมแล้ว.",
    ],
  },
  "html/tables-tabular-data": {
    codeComments: {
      goodCode: ["caption และ scope ช่วยเชื่อม header กับ cell ให้ถูกต้อง"],
      badCode: ["CSS ทำให้ div หน้าตาเหมือนตารางได้ แต่ browser ไม่รู้ความสัมพันธ์ของข้อมูล"],
    },
    title: "ใช้ table จริงกับข้อมูลแบบตาราง",
    summary: "เมื่อข้อมูลเป็นแถวและคอลัมน์ ให้ใช้แท็ก table จริง เพื่อให้ browser รู้ว่าหัวตาราง (header) เชื่อมกับค่าช่องไหน.",
    takeaways: ["ถ้าเนื้อหาเป็นข้อมูลแบบ row/column ให้ใช้ table, caption, th และ scope ก่อนสร้างหน้าตาตารางด้วย div."],
    whatToReview: [
      "โค้ดที่ดีเก็บความสัมพันธ์ระหว่าง header และ cell ไว้ใน HTML พร้อม caption ที่บอกว่าตารางนี้เกี่ยวกับอะไร.",
      "โค้ดที่ควรปรับทำให้ div ดูเหมือนตาราง แต่ความสัมพันธ์ของข้อมูลมีอยู่แค่จาก CSS และตำแหน่งบนหน้าจอ.",
    ],
    reviewNotes: [
      "ให้ถามว่าผู้ใช้ยังเข้าใจ cell หนึ่งช่องได้ไหมถ้าไม่ได้เห็น layout ถ้าต้องพึ่งตำแหน่งคอลัมน์บนหน้าจออย่างเดียว ควรใช้ table ที่มีความหมายจริง (semantic table).",
    ],
  },
  "html/aria-restraint": {
    codeComments: {
      goodCode: ["button มี role อยู่แล้ว ARIA แค่เติม label ที่ขาด"],
      badCode: ["ARIA ที่ใส่ผิดบอก screen reader ไม่ตรงกับพฤติกรรมจริง"],
    },
    title: "ใช้ ARIA เท่าที่จำเป็น",
    summary: "เริ่มจากแท็ก HTML ที่มีความหมายและพฤติกรรมมาให้ (native element) ก่อน แล้วใช้ ARIA เฉพาะตอนต้องเติมข้อมูลที่ HTML บอกเองไม่ได้.",
    takeaways: ["เลือก semantic HTML ก่อนเสมอ ARIA ควรใช้เติมความหมาย ไม่ใช่ใช้ซ่อมแท็กที่เลือกผิด."],
    whatToReview: [
      "โค้ดที่ดีใช้ native element ที่มี role และพฤติกรรม keyboard มาให้ แล้วเติม ARIA เฉพาะจุดที่จำเป็นจริง.",
      "โค้ดที่ควรปรับใส่ role หรือ state ที่ไม่ตรงกับพฤติกรรมจริง ทำให้ screen reader และเครื่องมือช่วยอ่านรับข้อมูลผิด.",
    ],
    reviewNotes: [
      "ARIA ช่วยได้มากเมื่อใช้ถูก แต่ถ้าใช้ผิดจะทำให้ผู้ใช้เครื่องมือช่วยอ่านได้ข้อมูลผิด เวลารีวิวให้ถามก่อนว่า native element ทำสิ่งนี้ให้เราอยู่แล้วหรือยัง.",
    ],
  },
  "css/flex-layout-boundaries": {
    codeComments: {
      goodCode: ["ตัวครอบ (container) คุมระยะห่าง ส่วน status จัดตำแหน่งเฉพาะตัวเอง"],
      badCode: ["selector ของ child ทำให้ทุก item ได้กฎ layout โดยไม่ตั้งใจ"],
    },
    title: "ให้ตัวครอบ (flex container) คุม layout",
    summary: "ให้ตัวครอบเป็นคนจัด layout และระยะห่างด้วย gap แทนการกระจาย margin ไปไว้ตาม child หลายตัว.",
    takeaways: ["ให้ container คุมระยะห่างด้วย gap มากกว่าดันระยะจาก child ทีละตัว."],
    whatToReview: [
      "โค้ดที่ดีให้ flex container เป็นเจ้าของ layout และใช้ gap เพื่อคุมระยะห่างอย่างชัดเจน.",
      "โค้ดที่ควรปรับพึ่ง selector กว้าง ๆ กับ margin ของ child ทำให้เพิ่ม item หรือเปลี่ยนโครงสร้างแล้ว layout เพี้ยนง่าย.",
    ],
    reviewNotes: [
      "ตอนรีวิว CSS ให้ดูว่าระยะห่างเป็นหน้าที่ของ container หรือกระจายอยู่ใน child หลายจุด ถ้า container คุม layout ชัด จะย้าย component และเพิ่ม item ได้มั่นใจกว่า.",
    ],
  },
  "css/color-contrast-states": {
    codeComments: {
      goodCode: ["สีพื้นฐานและสีของแต่ละ state ยังมี contrast พอให้อ่านได้"],
      badCode: ["state ที่ contrast ต่ำทำให้มองเห็นหรืออ่านข้อความได้ยาก"],
    },
    title: "สีและ contrast ของแต่ละ state",
    summary: "ทำ hover, focus และ state สำคัญให้เห็นชัด มี contrast เพียงพอ และไม่พึ่งสีจาง ๆ เพียงอย่างเดียว.",
    takeaways: ["state สำคัญต้องมองเห็นชัด ทั้งจาก contrast และ focus style."],
    whatToReview: [
      "โค้ดที่ดีระบุ hover และ focus state ที่เห็นได้จริง พร้อม focus ring สำหรับ keyboard.",
      "โค้ดที่ควรปรับเปลี่ยนแค่สีอ่อนมาก ๆ จนผู้ใช้แยก state ไม่ออก.",
    ],
    reviewNotes: [
      "อย่ารีวิวแค่ว่าสีสวยไหม ให้ลองคิดว่าผู้ใช้มองเห็น state ได้ชัดหรือเปล่า โดยเฉพาะปุ่มและลิงก์ที่เป็น action สำคัญ.",
    ],
  },
  "css/responsive-units": {
    codeComments: {
      goodCode: ["ค่าที่มีขอบเขตช่วยให้ขนาดยืดหยุ่นแต่ยังอ่านง่าย"],
      badCode: ["ผูกขนาดตัวอักษรกับ viewport ตรง ๆ ทำให้บางจออ่านยาก"],
    },
    title: "ขนาด responsive ที่ยังอ่านง่าย",
    summary: "ใช้ clamp เพื่อกำหนดขนาดต่ำสุด/สูงสุด และใช้ spacing ที่ยืดหยุ่น แทนการผูกตัวอักษรกับ viewport ตรง ๆ.",
    takeaways: ["อย่าให้ body text โตหรือเล็กตาม viewport จนเสียความอ่านง่าย."],
    whatToReview: [
      "โค้ดที่ดีใช้ clamp เพื่อกำหนดขนาดต่ำสุดและสูงสุดที่เหมาะกับหลายหน้าจอ.",
      "โค้ดที่ควรปรับใช้ vw กับตัวอักษรหลัก ทำให้จอเล็กตัวเล็กจนอ่านยาก และจอใหญ่ตัวโตเกินไป.",
    ],
    reviewNotes: [
      "เวลาเจอ responsive CSS ให้ดูว่าขนาดมีเพดานบนและล่างหรือไม่ Responsive ที่ดีควรปรับตามพื้นที่ แต่ยังรักษาความอ่านง่ายไว้.",
    ],
  },
  "css/box-model-sizing": {
    codeComments: {
      goodCode: ["border-box ทำให้ width ที่ประกาศรวม padding และ border แล้ว"],
      badCode: ["width ไม่รวม padding กับ border ทำให้กล่องจริงกว้างกว่าที่คิด"],
    },
    title: "คุมขนาดกล่อง (box model)",
    summary: "ทำให้ width, padding และ border คาดเดาได้ ด้วย box-sizing ที่ไม่ดัน layout ให้ล้น.",
    takeaways: ["ตั้ง box-sizing: border-box เพื่อให้ขนาด component ไม่ล้นเพราะ padding หรือ border."],
    whatToReview: [
      "โค้ดที่ดีทำให้ขนาดของการ์ดรวม padding และ border อยู่ในกรอบเดียวกัน จึงย้ายไปหลาย container ได้ง่าย.",
      "โค้ดที่ควรปรับกำหนด width คงที่แล้วเติม padding เพิ่ม ทำให้พื้นที่จริงกว้างกว่าที่คนอ่านคาดไว้.",
    ],
    reviewNotes: [
      "เวลารีวิว layout ให้ดูว่าความกว้างที่ประกาศคือความกว้างจริงของ component หรือยังต้องบวก padding และ border เพิ่มในหัวอีกชั้นหนึ่ง.",
    ],
  },
  "css/cascade-specificity": {
    codeComments: {
      goodCode: ["class ของ component ทำให้รู้ว่า rule นี้เป็นของใคร"],
      badCode: ["selector นี้ชนะด้วย specificity สูง แต่ไม่ได้บอกเจตนาของ component"],
    },
    title: "กฎ CSS ที่ชนะกัน (cascade/specificity)",
    summary: "เลือก selector ให้เฉพาะเท่าที่จำเป็น เพื่อให้รู้ว่ากฎไหนชนะ override ได้อย่างตั้งใจ และดูแลต่อได้ง่าย.",
    takeaways: ["เริ่มจาก class ที่มีขอบเขตชัด แล้วใช้ modifier แทน selector ยาวหรือ !important."],
    whatToReview: [
      "โค้ดที่ดีใช้ class ของ component และ modifier ทำให้เห็นชัดว่า rule ไหนรับผิดชอบ state ไหน.",
      "โค้ดที่ควรปรับพึ่ง selector ลึก, id และ !important จน component ที่ควรใช้ซ้ำได้ถูกผูกกับโครงสร้างหน้าเดียว.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่า selector นี้บอกว่าใครเป็นเจ้าของ style หรือแค่พยายามชนะกฎอื่นด้วย specificity เฉย ๆ selector ที่ชนะวันนี้อาจทำให้การแก้ครั้งถัดไปยากขึ้นมาก.",
    ],
  },
  "css/grid-layout-tracks": {
    codeComments: {
      goodCode: ["Grid อธิบายกฎคอลัมน์ responsive ไว้จุดเดียว"],
      badCode: ["float และ nth-child ฝังการคำนวณแถวที่เปราะบางไว้ใน CSS"],
    },
    title: "คอลัมน์ Grid ที่ยืดหยุ่น (grid tracks)",
    summary: "ใช้ CSS Grid บอกกฎของคอลัมน์ responsive ไว้ตรง ๆ แทนการคำนวณความกว้างและ margin เองด้วยมือ.",
    takeaways: ["ให้ Grid จัด track ด้วย minmax และ gap แทน float, percentage และ nth-child ที่เปราะบาง."],
    whatToReview: [
      "โค้ดที่ดีประกาศกติกา layout ครั้งเดียวว่า card ควรกว้างอย่างน้อยเท่าไร และเพิ่มคอลัมน์เมื่อพื้นที่พอ.",
      "โค้ดที่ควรปรับจำลองคอลัมน์ด้วย float และ selector ตามตำแหน่ง ทำให้เปลี่ยนจำนวนคอลัมน์หรือ gap แล้วพังง่าย.",
    ],
    reviewNotes: [
      "เวลาเจอ CSS ที่คำนวณแถวและคอลัมน์ด้วยมือ ให้ลองถามว่ากติกานั้นเขียนตรง ๆ ด้วย Grid ได้ไหม โค้ดจะอ่านง่ายขึ้นและมีเลขลับน้อยลง.",
    ],
  },
  "css/focus-visible-states": {
    codeComments: {
      goodCode: ["hover focus และ selected มีสัญญาณภาพแยกกันชัดเจน"],
      badCode: ["ลบ outline โดยไม่มี style แทน ทำให้ผู้ใช้ keyboard ไม่เห็นตำแหน่ง"],
    },
    title: "แยก state และ focus-visible ให้ชัด",
    summary: "แยก hover, active, selected และ keyboard focus ให้ชัด เพื่อให้รีวิวพฤติกรรมแต่ละแบบได้ง่าย.",
    takeaways: ["ใช้ :focus-visible สำหรับ keyboard focus และอย่าลบ outline ถ้ายังไม่มี style ทดแทนที่เห็นชัด."],
    whatToReview: [
      "โค้ดที่ดีแยก state ของเมาส์ keyboard และ selected ออกจากกัน ทำให้แต่ละ interaction มีสัญญาณที่ชัด.",
      "โค้ดที่ควรปรับลบ outline แล้วรวม focus กับ hover จนผู้ใช้ keyboard มองตำแหน่งปัจจุบันได้ยาก.",
    ],
    reviewNotes: [
      "อย่ารับ outline: none ผ่านง่าย ๆ ถ้าใน change เดียวกันไม่มี focus style ที่เห็นชัด เพราะ focus คือพฤติกรรมการใช้งาน ไม่ใช่แค่รายละเอียดความสวย.",
    ],
  },
  "css/logical-properties": {
    codeComments: {
      goodCode: ["logical properties วางระยะตามทิศทางการอ่าน"],
      badCode: ["left/right แบบตายตัวทำให้รองรับทิศทางภาษาอื่นยากขึ้น"],
    },
    title: "ระยะตามทิศทางภาษา (logical properties)",
    summary: "ใช้ logical properties เช่น block/inline/start/end เมื่อระยะหรือเส้นขอบควรตามทิศทางการอ่าน ไม่ใช่ซ้ายขวาแบบตายตัว.",
    takeaways: ["เลือก inline และ block properties เมื่อเจตนาจริงไม่ใช่ซ้าย ขวา บน หรือล่างแบบตายตัว."],
    whatToReview: [
      "โค้ดที่ดีบอกว่าเส้น accent อยู่ด้านเริ่มต้นของข้อความ และระยะห่างอยู่ตามแกน block หรือ inline.",
      "โค้ดที่ควรปรับ hard-code left/right ทั้งที่เจตนาคือ start/end ทำให้รองรับภาษาและ layout อื่นยากขึ้น.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าต้องระบุซ้ายขวาแบบตายตัวจริงไหม ถ้าดีไซน์หมายถึงจุดเริ่มข้อความหรือระยะบนล่าง logical properties จะสื่อเจตนาได้ตรงกว่า และรองรับภาษาที่อ่านคนละทิศทางได้ดีกว่า.",
    ],
  },
  "css/custom-properties-tokens": {
    codeComments: {
      goodCode: ["ค่าที่ตั้งชื่อเป็น token ทำให้คุยเรื่องดีไซน์ได้ชัด"],
      badCode: ["ค่าดิบที่ซ้ำกันซ่อนว่าค่าไหนควรเป็น token กลาง"],
    },
    title: "ตั้งชื่อค่าสีและระยะที่ใช้ซ้ำ (design tokens)",
    summary: "ใช้ custom properties ตั้งชื่อค่าสี ระยะ และ radius ที่ใช้ซ้ำ แทนการกระจายเลขกับสีแบบไม่มีชื่อ.",
    takeaways: ["ตั้งชื่อสี ระยะห่าง radius และ accent ที่ใช้ซ้ำ เพื่อให้เปลี่ยนระบบดีไซน์ได้ง่ายขึ้น."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อค่ากลางและให้ variant เปลี่ยนเฉพาะ token ที่ตัวเองเป็นเจ้าของ.",
      "โค้ดที่ควรปรับกระจายเลขและสีซ้ำหลายจุด ทำให้ดีไซน์เปลี่ยนทีต้องค้นหาและแก้หลายที่.",
    ],
    reviewNotes: [
      "มองหาค่าที่โผล่หลาย component หรือเป็นการตัดสินใจของระบบดีไซน์ ค่าเปล่า ๆ อย่าง #ffffff หรือ 16px คุยกันยากกว่าชื่อ token ที่บอกเจตนา.",
    ],
  },
  "css/reduced-motion": {
    codeComments: {
      goodCode: ["motion ที่ผูกกับ state สามารถลดลงตาม preference ของผู้ใช้"],
      badCode: ["animation รันกับทุกคนและไม่มีทางลด motion ให้ผู้ใช้ที่ต้องการ"],
    },
    title: "animation ที่ลด motion ได้",
    summary: "ทำ animation ให้มีเหตุผล และเคารพผู้ใช้ที่ตั้งค่าให้ลดการเคลื่อนไหว (reduced motion) ในระบบ.",
    takeaways: ["ทุก UI ที่เคลื่อนไหวควรมีทางเลือกสำหรับ prefers-reduced-motion ที่ยังสื่อ state ได้ชัด."],
    whatToReview: [
      "โค้ดที่ดีทำให้ state เปลี่ยนชัดเหมือนเดิม แต่ลดระยะเวลาการเคลื่อนไหวเมื่อผู้ใช้ขอลด motion.",
      "โค้ดที่ควรปรับบังคับ animation แบบเดียวกับทุกคน และซ่อนความหมายของ state ไว้ในการเคลื่อนไหวที่ลดไม่ได้.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่า motion สื่ออะไร และเมื่อปิดหรือลด motion แล้วยังเข้าใจ state ไหม animation ที่ดีควรช่วยอธิบาย ไม่ใช่เป็นทางเดียวที่ทำให้เข้าใจ.",
    ],
  },
  "javascript/strict-equality-nullish-checks": {
    codeComments: {
      goodCode: ["ใช้ === เพื่อไม่ให้ JavaScript แปลงค่าก่อนเทียบจนผลผิด"],
      badCode: ["== และ || ทำให้ค่าที่ไม่มีจริงปนกับค่าอย่าง 0 หรือ false ที่ตั้งใจใช้"],
    },
    title: "เทียบค่าให้ชัด และใช้ค่าสำรองให้ถูกกรณี",
    summary: "ใช้ === เมื่ออยากเทียบค่าแบบตรงตัว และใช้ ?? เมื่ออยากใส่ค่าสำรองเฉพาะตอนค่าเป็น null หรือ undefined.",
    takeaways: ["อย่าใช้ || แทน default ถ้า 0, false หรือ empty string ยังเป็นค่าที่ถูกต้องของระบบ."],
    whatToReview: [
      "โค้ดที่ดีเทียบค่าตรงตัว และให้ retryCount ใช้ค่าสำรองเฉพาะตอนไม่มีค่าจริง ๆ จึงไม่ทำให้ 0 หายไป.",
      "โค้ดที่ควรปรับปล่อยให้ JavaScript แปลงค่าตอนเทียบ และใช้ || จนค่าอย่าง 0 ถูกมองว่าไม่มีค่า ทั้งที่อาจเป็น config ที่ถูกต้อง.",
    ],
    reviewNotes: [
      "เวลารีวิวให้ถามว่าไม่มีค่าหมายถึง null/undefined เท่านั้น หรือรวม 0/false/empty string ด้วย ถ้าคำตอบไม่เหมือนกัน ควรใช้ ?? แทน ||.",
    ],
  },
  "javascript/data-boundary-validation": {
    codeComments: {
      goodCode: ["ตรวจข้อมูลจากภายนอกที่จุดรับเข้า ก่อนอ่าน field ข้างใน"],
      badCode: ["เชื่อหน้าตาข้อมูล (shape) ก่อนตรวจว่ามีจริง"],
    },
    title: "ตรวจข้อมูลจากภายนอกก่อนใช้",
    summary: "ข้อมูลจาก API, storage หรือ message อาจไม่ตรงที่คิด ให้ตรวจที่จุดรับเข้า (boundary) ก่อนส่งต่อให้ logic ด้านในใช้.",
    takeaways: ["ทำให้ข้อมูลน่าเชื่อถือที่ boundary ก่อนอ่าน field ซ้อนหรือส่งต่อให้โค้ดส่วนอื่น."],
    whatToReview: [
      "โค้ดที่ดีถือว่า payload จากข้างนอกยังไม่น่าเชื่อถือ และคืน error ที่อ่านเข้าใจก่อนแตะ field ซ้อน.",
      "โค้ดที่ควรปรับสมมติว่าหน้าตาข้อมูลถูกต้องเสมอ ทำให้ข้อมูลผิดรูปกลายเป็น runtime error ที่เดายาก.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้หาบรรทัดแรกที่ข้อมูลจากข้างนอกเข้าระบบ จุดนั้นควรเป็นที่จัดการความไม่แน่นอน ไม่ใช่ปล่อยให้ caller ทุกจุดต้องเดาเองว่าข้อมูลปลอดภัยหรือยัง.",
    ],
  },
  "javascript/array-transformations": {
    codeComments: {
      goodCode: ["แปลงข้อมูลเป็นลำดับขั้น และคืน object ใหม่แทนการแก้ของเดิม"],
      badCode: ["sort และเติม field ลงของเดิม ทำให้โค้ดอื่นที่ถือข้อมูลชุดเดียวกันถูกกระทบ"],
    },
    title: "แปลง array ให้อ่านเป็นขั้นตอน",
    summary: "ใช้ array methods เพื่อให้เห็นขั้นตอนว่า กรองอะไร แปลงอะไร และเรียงผลอย่างไร โดยไม่แก้ input เดิมแบบไม่ตั้งใจ.",
    takeaways: ["ใช้ filter, map และ reduce เมื่อมันทำให้การแปลงข้อมูลอ่านเป็นลำดับ และไม่ต้องแก้ object หรือ array ต้นทาง."],
    whatToReview: [
      "โค้ดที่ดีอ่านเหมือน pipeline: กรองไฟล์ที่ไม่ต้องการ แปลงรูปร่างข้อมูล แล้วค่อยเรียงผลลัพธ์ใหม่.",
      "โค้ดที่ควรปรับ sort array เดิมและเติม field ลง object เดิม ทำให้โค้ดอื่นที่ถือ reference เดียวกันเห็นข้อมูลเปลี่ยนตามไปด้วย.",
    ],
    reviewNotes: [
      "เวลารีวิว logic ที่จัดการ collection ให้ถามว่าฟังก์ชันนี้เปลี่ยน input เดิมหรือคืนข้อมูลชุดใหม่. การ mutate ที่ซ่อนอยู่ใน loop มักดูไม่อันตรายตอนแรก แต่ทำให้ bug ไล่ยากเมื่อมีคนถือข้อมูลชุดเดิมอยู่.",
    ],
  },
  "javascript/promise-concurrency": {
    codeComments: {
      goodCode: ["request ที่ไม่พึ่งกันถูกเริ่มพร้อมกัน แล้วรอผลรวมครั้งเดียว"],
      badCode: ["await ทีละขั้นเพิ่มเวลารอ ทั้งที่ข้อมูลไม่ได้พึ่งกัน"],
    },
    title: "รันงาน async พร้อมกันเมื่อไม่พึ่งกัน",
    summary: "ถ้า request หลายตัวไม่ต้องใช้ผลลัพธ์ของกันและกัน ให้เริ่มพร้อมกัน แล้วค่อยรอด้วย Promise.all.",
    takeaways: ["ใช้ Promise.all กับงานที่เป็นอิสระต่อกัน และใช้ await แบบเรียงลำดับเฉพาะเมื่อขั้นถัดไปต้องใช้ผลของขั้นก่อนจริง ๆ."],
    whatToReview: [
      "โค้ดที่ดีเริ่ม request อิสระหลายตัวพร้อมกัน แล้วรอผลรวมครั้งเดียว.",
      "โค้ดที่ควรปรับทำให้ request แต่ละตัวรอตัวก่อนหน้า ทั้งที่ไม่มีตัวไหนใช้ผลของกันและกัน ทำให้หน้าช้าลงโดยไม่จำเป็น.",
    ],
    reviewNotes: [
      "อย่าสมมติว่า await ที่เรียงกันจำเป็นเสมอ ให้ถามว่างานไหนต้องใช้ผลลัพธ์ก่อนหน้า และงานไหนเริ่มพร้อมกันได้.",
    ],
  },
  "javascript/event-listener-cleanup": {
    codeComments: {
      goodCode: ["เก็บ function handler ไว้ชัดเจน ทำให้ remove listener ทีหลังได้"],
      badCode: ["ใช้ anonymous listener แล้วไม่มี reference สำหรับถอดออก"],
    },
    title: "ถอด event listener ให้ครบ",
    summary: "ทุก listener ควรมีทางถอดออก เพื่อไม่ให้ setup ซ้ำแล้ว event เดิมทำงานซ้อนกันหลายรอบ.",
    takeaways: ["เก็บ reference ของ handler ให้คงที่ และคืน cleanup function เมื่อติด event listener."],
    whatToReview: [
      "โค้ดที่ดีเก็บ reference ของ handler และคืน function สำหรับ remove listener เมื่อ UI ถูกถอดหรือเลิกใช้งาน.",
      "โค้ดที่ควรปรับใช้ anonymous listener แล้ว caller ไม่มีทางถอดออกได้จริง ทำให้ shortcut หรือ handler ซ้ำหลัง setup หลายรอบ.",
    ],
    reviewNotes: [
      "เวลาเห็น listener, subscription, timer หรือ observer ให้ถามเหมือนกันเสมอว่า cleanup อยู่ตรงไหน ถ้าตอบไม่ได้ behavior อาจเพิ่มขึ้นเรื่อย ๆ ทุกครั้งที่ setup ใหม่.",
    ],
  },
  "javascript/module-boundaries-globals": {
    codeComments: {
      goodCode: ["ส่ง storage เข้ามาเป็น dependency แทนการหยิบ global state เอง"],
      badCode: ["อ่านเขียน global โดยตรง ทำให้โค้ดอื่นข้าม API ของ module ได้"],
    },
    title: "คุมขอบเขต module และ global state",
    summary: "ให้ module บอกชัดว่าคนอื่นควรเรียกใช้อย่างไร แทนการให้หลายไฟล์อ่านเขียนค่ากลาง (global state) ได้เอง.",
    takeaways: ["เปิดเผย function เล็ก ๆ จาก module และส่ง dependency เข้ามาเมื่อโค้ดต้องใช้ storage, network หรือ browser API."],
    whatToReview: [
      "โค้ดที่ดีซ่อน storage key ไว้ใน module และรับ storage เป็น dependency ทำให้ทดสอบและใช้ซ้ำง่ายขึ้น.",
      "โค้ดที่ควรปรับเขียนลง window และ localStorage ตรง ๆ ทำให้โค้ดที่ไม่เกี่ยวข้องเปลี่ยน state ได้โดยไม่ผ่าน API ที่ชัดเจน.",
    ],
    reviewNotes: [
      "global ไม่ได้ผิดเสมอ แต่ควรตั้งใจใช้ ขอบเขต module ที่ดีควรบอก caller ว่าต้องเรียก function ไหน โดยไม่ต้องรู้ว่าค่าข้างในถูกเก็บไว้ที่ window, localStorage หรือที่อื่น.",
    ],
  },
  "javascript/dates-time-zones": {
    codeComments: {
      goodCode: ["ส่ง locale และ time zone เข้าไปชัดเจนก่อนจัดรูปแบบวันที่"],
      badCode: ["ประกอบวันที่เอง ทำให้ผลลัพธ์ผูกกับ time zone ของเครื่องที่รันแบบไม่รู้ตัว"],
    },
    title: "วันที่และเขตเวลา (time zone)",
    summary: "จัดรูปแบบวันที่ด้วย locale และ time zone ที่ตั้งใจ แทนการต่อวันเดือนปีเองจากสภาพแวดล้อมตอนรัน (runtime).",
    takeaways: ["ใช้ Intl สำหรับการจัดรูปแบบวันที่ และส่ง time zone ให้ชัดเมื่อวันที่ที่แสดงมีผลกับผู้ใช้."],
    whatToReview: [
      "โค้ดที่ดีทำให้ locale และ time zone เป็น input ชัดเจน จึงแสดง timestamp เดียวกันได้ถูกต้องตามกลุ่มผู้ใช้.",
      "โค้ดที่ควรปรับต่อวันที่เองด้วย time zone ของเครื่องที่รัน ทำให้วันที่อาจเลื่อนสำหรับผู้ใช้คนละประเทศหรือคนละเขตเวลา.",
    ],
    reviewNotes: [
      "วันที่ควรถูกรีวิวด้วยความระวังเป็นพิเศษ เพราะมักใช้ได้บนเครื่องเราแต่พังตอนข้ามวัน ข้ามเดือน หรือเจอผู้ใช้คนละ time zone การระบุ locale/time zone ชัดเจนปลอดภัยกว่า default ที่ซ่อนอยู่.",
    ],
  },
  "javascript/guard-clauses": {
    codeComments: {
      goodCode: ["guard clause แยกเคสที่ใช้ไม่ได้ออกจากทางหลักของ function"],
      badCode: ["if ที่ซ้อนกันทำให้ reviewer ต้องจำหลายเงื่อนไขพร้อมกัน"],
    },
    title: "ใช้ guard clause ลด if ซ้อน",
    summary: "คืนค่าเร็วเมื่อข้อมูลไม่พร้อม เพื่อให้ทางหลักของ function อ่านเป็นเส้นตรงและสั้นลง.",
    takeaways: ["ใช้ early return เพื่อให้เคสปกติอยู่ในระดับ indentation ที่อ่านง่าย."],
    whatToReview: [
      "โค้ดที่ดีจัดการเคสที่ใช้ไม่ได้ตั้งแต่ต้น แล้วปล่อยให้ logic หลักอยู่ในระดับ indentation เดียว.",
      "โค้ดที่ควรปรับซ้อน if หลายชั้น ทำให้คนรีวิวต้องจำเงื่อนไขในหัวตลอดเวลา.",
    ],
    reviewNotes: [
      "เวลารีวิว flow การทำงาน (control flow) ให้มองหาทางหลักของ function. ถ้าทางหลักถูกฝังอยู่ใน if หลายชั้น guard clause มักช่วยให้เจตนาชัดขึ้นมาก.",
    ],
  },
  "javascript/async-error-handling": {
    codeComments: {
      goodCode: ["เช็ก HTTP status ก่อน parse และมีทางจัดการ request ที่ล้มเหลว"],
      badCode: ["parse แบบคิดว่าจะสำเร็จเสมอ ทำให้ error หลุดโดยไม่มีทางจัดการ"],
    },
    title: "จัดการ error ของงาน async ให้ครบ",
    summary: "ตรวจ response และเตรียมทางกรณี request ล้มเหลว ก่อนสมมติว่าทุกอย่างเป็น JSON ที่ถูกต้อง.",
    takeaways: ["async code ควรมีทางสำหรับกรณีสำเร็จและกรณีล้มเหลวที่อ่านได้ชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีตรวจสถานะ response และแยก error path ก่อนใช้ข้อมูล.",
      "โค้ดที่ควรปรับสมมติว่า request สำเร็จเสมอ ทำให้ bug โผล่ตอน network หรือ server มีปัญหา.",
    ],
    reviewNotes: [
      "ตอนรีวิว async function ให้ถามว่าเกิดอะไรขึ้นเมื่อ request ล้ม, response ไม่ ok หรือ payload ไม่ตรงที่คิด. โค้ดที่ดีไม่ควรทำให้ error กลายเป็นปริศนา.",
    ],
  },
  "javascript/naming-side-effects": {
    codeComments: {
      goodCode: ["ชื่อบอกคนเรียกชัดว่า array เดิมจะถูกแก้"],
      badCode: ["ชื่อฟังเหมือนคืนค่าใหม่ แต่จริง ๆ แก้ input array เดิม"],
    },
    title: "ตั้งชื่อให้เห็นผลข้างเคียง (side effect)",
    summary: "ชื่อ function ควรบอกให้รู้ว่ามีการแก้ข้อมูลหรือเปลี่ยน state ไม่ใช่ทำเหมือนแค่อ่านค่า.",
    takeaways: ["ถ้า function เปลี่ยนข้อมูลเดิม ชื่อควรบอกให้คนเรียกรู้ทันที ไม่ให้เดาว่าได้ข้อมูลใหม่ที่ปลอดภัย."],
    whatToReview: [
      "โค้ดที่ดีใช้ชื่อที่บอกว่ามีการเปลี่ยนแปลงข้อมูล เช่น update หรือ apply.",
      "โค้ดที่ควรปรับใช้ชื่อที่ดูปลอดภัยเหมือนอ่านค่า แต่จริง ๆ ไปแก้ input เดิม.",
    ],
    reviewNotes: [
      "เวลารีวิวชื่อ function ให้ดู body ด้วยว่ามี side effect ไหม. ชื่อที่ไม่ตรงกับพฤติกรรมทำให้คนเรียกคาดหวังผิด และเกิด bug ได้ง่าย.",
    ],
  },
  "typescript/type-inference-boundaries": {
    codeComments: {
      goodCode: ["กำหนด type ที่จุดรับเข้า แล้วให้ TypeScript เดาชนิดข้างในจากค่าจริง"],
      badCode: ["ใส่ type ให้ตัวแปรข้างใน แต่ปล่อย input เป็น any จุดเสี่ยงจึงยังเปิดอยู่"],
    },
    title: "กำหนด type ที่จุดรับเข้า แล้วให้ TypeScript ช่วยต่อข้างใน",
    summary: "ระบุ type ตรงฟังก์ชันหรือ API ที่คนอื่นเรียกใช้ ส่วนตัวแปรข้างในให้ TypeScript เดาจากค่าจริงได้ ไม่ต้องใส่ซ้ำทุกบรรทัด.",
    takeaways: ["ใส่ type ที่ parameter, return value และ API ที่ export ส่วนค่าภายในให้ TypeScript เดาจากโค้ดจริงได้."],
    whatToReview: [
      "โค้ดที่ดีระบุ type ตรงจุดที่ข้อมูลเข้าฟังก์ชัน แล้วปล่อยให้ค่าภายในและ object ที่ return ถูกเดาจากค่าจริง.",
      "โค้ดที่ควรปรับใส่ type ให้ตัวแปรข้างใน แต่ปล่อย input ที่คนอื่นส่งเข้ามาเป็น any จุดเสี่ยงจึงยังเปิดอยู่.",
    ],
    reviewNotes: [
      "เวลารีวิวให้ดูว่า type อยู่ตรงจุดที่คนอื่นเรียกใช้หรือยัง เช่น exported function, ตัวแปลงข้อมูลจาก API, callback ที่ส่งข้าม component และข้อมูลจากไฟล์อื่น.",
    ],
  },
  "typescript/unsafe-assertions": {
    codeComments: {
      goodCode: ["ตรวจค่าตอนรันจริงก่อนยอมรับว่าเป็น Session"],
      badCode: ["บอกให้ TypeScript เชื่อว่า unknown เป็น Session โดยไม่มีหลักฐาน"],
    },
    title: "เลี่ยงการบังคับเชื่อ type ที่ไม่ปลอดภัย",
    summary: "ตรวจค่าจริงตอนรันก่อนบอก TypeScript ว่านี่คือข้อมูลชนิดนั้น อย่าใช้ as แค่เพื่อทำให้ error ใน editor หายไป.",
    takeaways: ["ใช้ as เฉพาะจุดที่มีเหตุผลรองรับ ไม่ใช่ทางลัดเพื่อข้ามการตรวจข้อมูล."],
    whatToReview: [
      "โค้ดที่ดีตรวจหน้าตาข้อมูลตอนรันจริงก่อนยอมรับว่าเป็น Session ของระบบ.",
      "โค้ดที่ควรปรับบอก TypeScript ให้เชื่อว่า value เป็น Session โดยไม่พิสูจน์อะไรเลย ทำให้ข้อมูลผิดรูปไหลผ่านระบบได้.",
    ],
    reviewNotes: [
      "เวลาเห็น assertion หรือ `as` ใกล้ข้อมูลจาก JSON, storage, network, URL params หรือ library ภายนอก ให้ถามว่ามีหลักฐานอะไรยืนยันชนิดนี้ไหม ยิ่งข้อมูลไม่น่าเชื่อถือเท่าไร ยิ่งควรตรวจตอนรันจริง.",
    ],
  },
  "typescript/exhaustive-never-checks": {
    codeComments: {
      goodCode: ["ใช้ never ทำให้ case ของ union ที่ลืมจัดการกลายเป็น compile error"],
      badCode: ["fallback กว้าง ๆ ซ่อน state ใหม่ที่โค้ดลืมรองรับ"],
    },
    title: "บังคับให้จัดการทุกสถานะด้วย never",
    summary: "ถ้า union มีหลายสถานะ ให้เขียนให้ครบทุกกรณี เมื่อเพิ่มสถานะใหม่แล้วลืมรองรับ TypeScript จะเตือนทันที.",
    takeaways: ["ใช้ never ใน branch สุดท้าย เพื่อให้สถานะของ union ที่ตกหล่นกลายเป็น type error."],
    whatToReview: [
      "โค้ดที่ดีทำให้ branch สุดท้ายเป็นไปไม่ได้เมื่อจัดการทุกสถานะครบ และจะเตือนทันทีเมื่อมีสถานะใหม่ถูกเพิ่มเข้ามา.",
      "โค้ดที่ควรปรับซ่อนกรณีที่ลืมไว้หลัง fallback กว้าง ๆ ทำให้สถานะใหม่ถูกแสดงเป็น Unknown แทนที่จะบังคับให้เขียนพฤติกรรมจริง.",
    ],
    reviewNotes: [
      "default branch ของ union อาจใจดีเกินไป ถ้าเรารู้ทุกสถานะอยู่แล้ว การเช็กด้วย never จะช่วยเตือนตอนแก้ในอนาคตได้ดีกว่า.",
    ],
  },
  "typescript/optional-vs-nullable": {
    codeComments: {
      goodCode: ["null แปลว่า avatar ว่างโดยตั้งใจ ไม่ใช่ field หายไป"],
      badCode: ["optional ปน null ทำให้คนเรียกต้องเดาเองว่าค่าว่างหมายถึงอะไร"],
    },
    title: "แยก field ที่หายไป กับค่าที่ตั้งใจว่าง",
    summary: "ใช้ ? เมื่อ field อาจไม่ถูกส่งมาเลย และใช้ null เมื่อ field มีอยู่แต่ตั้งใจให้ค่าว่าง เช่น ผู้ใช้ลบ avatar ออก.",
    takeaways: ["ใช้ ? เมื่อ property อาจไม่มีอยู่ และใช้ null เมื่อ property มีอยู่แต่ตั้งใจให้ว่างจริง ๆ."],
    whatToReview: [
      "โค้ดที่ดีแยก field ที่ยังไม่ถูกกรอกออกจาก field ที่ตั้งใจไม่มี avatar อย่างชัดเจน.",
      "โค้ดที่ควรปรับยอมทั้ง undefined และ null แทบทุกที่ ทำให้คนเรียกแยกไม่ออกว่าข้อมูลหาย ถูกล้าง หรือยังโหลดไม่เสร็จ.",
    ],
    reviewNotes: [
      "การไม่มีค่าเป็นกฎของระบบ ไม่ใช่รายละเอียดเล็ก ๆ optional กับ nullable หมายถึงคนละเรื่อง ถ้าปนกันง่ายเกินไป โค้ดทุกจุดที่ใช้ข้อมูลนี้ต้องเดาความหมายซ้ำเอง.",
    ],
  },
  "typescript/generic-constraints": {
    codeComments: {
      goodCode: ["constraint บอกเงื่อนไขขั้นต่ำว่า function ต้องใช้ field อะไร"],
      badCode: ["any ซ่อนเงื่อนไขที่หายไป จนไปพังตอนรันจริง"],
    },
    title: "บอกเงื่อนไขขั้นต่ำของ generic ให้ชัด",
    summary: "ถ้าฟังก์ชัน generic ต้องใช้บาง field เช่น updatedAt ให้บอกไว้ด้วย extends เพื่อให้รับข้อมูลได้หลายแบบแต่ยังปลอดภัย.",
    takeaways: ["ใช้ extends เพื่อให้ generic function รับข้อมูลได้หลายรูปแบบ แต่ยังรับประกัน field ที่โค้ดข้างในต้องใช้."],
    whatToReview: [
      "โค้ดที่ดียังยืดหยุ่นได้ แต่ระบุว่าของทุกชิ้นต้องมี updatedAt เป็นเงื่อนไขขั้นต่ำ.",
      "โค้ดที่ควรปรับรับ type อะไรก็ได้แล้วหนีด้วย any ข้างใน ทำให้เรียกผิดแล้วยัง compile ผ่าน ก่อนจะไปพังตอนรันจริง.",
    ],
    reviewNotes: [
      "Generic ที่ cast เป็น any ทันทีมักยังไม่ได้บอกเงื่อนไขขั้นต่ำให้ดีพอ ให้ถามว่าอะไรยืดหยุ่นได้ และ field ไหนที่ฟังก์ชันต้องมีแน่นอน.",
    ],
  },
  "typescript/utility-types-api-boundaries": {
    codeComments: {
      goodCode: ["Pick เปิดเผยเฉพาะ field ที่ API นี้สัญญาว่าจะให้ใช้"],
      badCode: ["คืน domain object ทั้งก้อน ทำให้ field ภายในรั่วออกไป"],
    },
    title: "เลือก field ที่ API ควรเปิดเผยด้วย utility types",
    summary: "สร้าง type สำหรับ request หรือ view จากข้อมูลหลักของระบบ แต่เลือกเฉพาะ field ที่ API นี้ตั้งใจให้คนอื่นใช้.",
    takeaways: ["ใช้ Pick, Omit, Partial และ Readonly เพื่อบอกว่าจุดนี้เปิดเผย field ไหน และ field ไหนไม่ควรถูกแก้."],
    whatToReview: [
      "โค้ดที่ดีเปิดเผยเฉพาะ field ที่ list API ต้องใช้ และยังผูก response type กับข้อมูลหลักของระบบเดิม.",
      "โค้ดที่ควรปรับคืน object ทั้งก้อน รวมถึง field ภายในที่ API ไม่ควรสัญญาว่าคนข้างนอกจะใช้ได้.",
    ],
    reviewNotes: [
      "Utility types มีประโยชน์เมื่อทำให้ข้อมูลที่เปิดเผยเล็กและชัดขึ้น มันควรสื่อว่า API ให้ข้อมูลอะไร ไม่ใช่แค่ย่อ type ซับซ้อนให้ดูสั้น.",
    ],
  },
  "typescript/type-only-imports-module-boundaries": {
    codeComments: {
      goodCode: ["import type บอกว่า PullRequest ใช้เฉพาะตอนเช็ก type ไม่ได้ใช้ตอนรัน"],
      badCode: ["import ปกติทำให้ dependency ตอนเช็ก type กับตอนรันจริงปนกัน"],
    },
    title: "แยก import ที่ใช้เฉพาะ type ออกจาก code ที่รันจริง",
    summary: "ใช้ import type เมื่อเอามาใช้แค่ตอนเช็ก type และใช้ import ปกติเมื่อค่าหรือฟังก์ชันนั้นต้องมีตอนโปรแกรมรันจริง.",
    takeaways: ["แยก dependency ที่ใช้แค่เช็ก type ออกจาก dependency ที่ต้องใช้ตอนรันจริง เพื่อให้อ่านความสัมพันธ์ของไฟล์ได้ชัด."],
    whatToReview: [
      "โค้ดที่ดีบอกชัดว่า PullRequest ใช้แค่ตอนเช็ก type ส่วน formatAuthorName เป็นฟังก์ชันที่ต้องมีตอนรันจริง.",
      "โค้ดที่ควรปรับ import type เหมือนค่าที่ใช้ตอนรัน ทำให้ความสัมพันธ์ของไฟล์ไม่ชัด และอาจดึง code เข้ามาโดยไม่จำเป็นตาม config ของ compiler.",
    ],
    reviewNotes: [
      "Import เล่าเรื่องว่าไฟล์นี้พึ่งอะไร ถ้าใช้แค่รูปข้อมูล ให้ใช้ import type เพื่อแยกสิ่งที่ใช้ตอนเช็ก type ออกจากฟังก์ชันหรือค่าที่ต้องมีตอนรัน.",
    ],
  },
  "typescript/discriminated-unions": {
    codeComments: {
      goodCode: ["field status บอกว่า branch นี้ใช้ข้อมูลชุดไหนได้"],
      badCode: ["optional field หลายตัวเปิดทางให้ state ที่เป็นไปไม่ได้ compile ผ่าน"],
    },
    title: "ใช้ union ที่มี field บอกสถานะชัดเจน",
    summary: "ใช้ field กลาง เช่น status เพื่อบอกว่า object ตอนนี้อยู่กรณีไหน และ field ไหนอ่านได้จริงในกรณีนั้น.",
    takeaways: ["ทำให้สถานะที่เป็นไปไม่ได้เขียนยากขึ้น ด้วย union ที่แยกกรณีชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีมี field กลางสำหรับบอกสถานะ ทำให้แต่ละ branch รู้ว่าข้อมูลชุดไหนใช้ได้แน่นอน.",
      "โค้ดที่ควรปรับใช้ optional field หลายตัวจนต้องเดาเองว่า field ไหนควรมาคู่กับ field ไหน.",
    ],
    reviewNotes: [
      "เวลารีวิว type ให้ถามว่า object นี้มีสถานะที่ไม่ควรเกิดขึ้นแต่ type ยังยอมไหม union ที่มี status ช่วยปิดช่องนั้น เพราะ TypeScript จะรู้รูปข้อมูลที่ถูกต้องของแต่ละกรณี.",
    ],
  },
  "typescript/narrowing-unknown": {
    codeComments: {
      goodCode: ["type guard ตรวจค่าก่อนยอมรับว่าเป็น Settings"],
      badCode: ["double cast ข้ามการพิสูจน์ค่าที่ unknown ต้องการ"],
    },
    title: "ตรวจ unknown ให้แคบลงก่อนใช้งาน",
    summary: "unknown คือค่าที่ยังไม่รู้ชนิดแน่ชัด ให้ตรวจรูปข้อมูลก่อนใช้ แทนการ cast เป็น any แล้วหวังว่าข้อมูลถูก.",
    takeaways: ["unknown บังคับให้เราพิสูจน์ข้อมูลก่อนใช้ จึงปลอดภัยกว่า any ในจุดที่ข้อมูลมาจากภายนอก."],
    whatToReview: [
      "โค้ดที่ดีตรวจ type และ property สำคัญก่อนนำข้อมูลไปใช้ต่อ.",
      "โค้ดที่ควรปรับ cast เป็น any ทำให้ TypeScript หยุดช่วยเราในจุดที่เสี่ยงที่สุด.",
    ],
    reviewNotes: [
      "ข้อมูลจาก API, localStorage หรือ message event ควรถูกมองว่ายังไม่น่าเชื่อถือก่อนเสมอ. การตรวจ unknown ให้แคบลงทำให้ error ถูกจับใกล้จุดรับข้อมูลมากขึ้น.",
    ],
  },
  "typescript/precise-function-types": {
    codeComments: {
      goodCode: ["callback type บอก action และ argument ที่เรียกได้ชัดเจน"],
      badCode: ["Function กว้างเกินไป ใครเรียกด้วยรูปแบบผิดก็ยัง compile ผ่าน"],
    },
    title: "กำหนดรูปแบบ function ให้ชัด",
    summary: "ระบุรูปแบบของ callback ว่ารับอะไรและคืนอะไร แทนการใช้ Function กว้าง ๆ ที่แทบไม่ช่วยตรวจการเรียกผิด.",
    takeaways: ["callback type ที่ชัดทำให้เรียกผิดยากขึ้น และทำให้คนรีวิวเห็นเจตนาของ API ได้ง่ายขึ้น."],
    whatToReview: [
      "โค้ดที่ดีบอก parameter และ return type ของ callback ชัดเจน.",
      "โค้ดที่ควรปรับใช้ Function ทำให้ใครส่งอะไรก็ได้ และ compiler ช่วยจับผิดไม่ได้.",
    ],
    reviewNotes: [
      "เวลาเห็น Function ใน TypeScript ให้ถือเป็นกลิ่นที่ควรถามต่อ. ส่วนใหญ่เรารู้รูปแบบที่ต้องการอยู่แล้ว และควรเขียนให้ TypeScript ช่วยกันการเรียกผิด.",
    ],
  },
  "react/props-component-boundaries": {
    codeComments: {
      goodCode: ["props ที่ชัดเจนบอกว่า component ต้องใช้ข้อมูลอะไรบ้าง"],
      badCode: ["component ไปหยิบข้อมูลจาก store/context ทั้งก้อน ทำให้ผูกกับหลายเรื่องเกินไป"],
    },
    title: "ส่งข้อมูลผ่าน props ให้ชัด",
    summary: "ให้ component รับข้อมูลที่ต้องใช้ผ่าน props ให้เห็นตรงหน้า แทนการไปหยิบข้อมูลจาก store หรือ context ทั้งก้อนเอง.",
    takeaways: ["component ที่ดีควรเห็นข้อมูลที่ต้องใช้จาก props โดยไม่ต้องเดาว่าข้างในไปหยิบข้อมูลจากที่อื่น."],
    whatToReview: [
      "โค้ดที่ดีทำให้ component รับข้อมูลเท่าที่ต้องใช้ อ่านง่าย และทดสอบแยกได้.",
      "โค้ดที่ควรปรับให้ component ไปอ่าน state นอกขอบเขตของตัวเอง เช่น store/context ทั้งก้อน ทำให้นำไปใช้ซ้ำและไล่บั๊กยาก.",
    ],
    reviewNotes: [
      "ตอนรีวิว React ให้ดูว่า component นี้รู้มากเกินหน้าที่หรือไม่. ถ้าข้อมูลที่ใช้ถูกส่งผ่าน props ชัดเจน component จะย้ายที่ ใช้ซ้ำ และทดสอบได้ง่ายขึ้น เพราะไม่ต้องพึ่งข้อมูลที่ซ่อนอยู่ใน store/context.",
    ],
  },
  "react/stable-keys-lists": {
    codeComments: {
      goodCode: ["id ที่คงที่ช่วยให้ React จำ item เดิมได้แม้ list เปลี่ยนลำดับ"],
      badCode: ["index key บอกแค่ตำแหน่ง ไม่ได้บอกว่าเป็น comment ตัวไหนจริง ๆ"],
    },
    title: "ใช้ key ที่ชี้ item เดิมได้เสมอ",
    summary: "ใช้ id ของ item เป็น key เพื่อให้ React จำได้ว่า item ไหนคืออันเดิมเมื่อ list มีการเพิ่ม ลบ หรือเรียงใหม่.",
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
      badCode: ["state ที่ซ้ำกับข้อมูลเดิมต้องใช้ effect มาคอยตามแก้ให้ตรงกัน"],
    },
    title: "อย่าเก็บ state ซ้ำถ้าคำนวณได้",
    summary: "ค่าที่คำนวณจาก props หรือ state เดิมได้ ให้คำนวณตอน React วาดหน้าจอ (render) แทนการเก็บซ้ำแล้วคอยทำให้ตรงกันด้วย effect.",
    takeaways: ["อย่าเก็บ state ซ้ำถ้าคำนวณจาก props หรือ state เดิมได้."],
    whatToReview: [
      "โค้ดที่ดีคำนวณค่าจากข้อมูลปัจจุบัน ทำให้ไม่ต้องมี state สองชุดให้คอยทำให้ตรงกัน.",
      "โค้ดที่ควรปรับเก็บค่าซ้ำใน useState แล้วใช้ effect ตามแก้ ซึ่งเปิดทางให้ข้อมูลคลาดกัน.",
    ],
    reviewNotes: [
      "เวลาเห็น useEffect ที่มีไว้แค่ทำให้ state สองชุดตรงกัน ให้ถามว่าคำนวณตรง ๆ ตอน render ได้ไหม. การลด state ที่ไม่จำเป็นทำให้โค้ด React ง่ายขึ้นและมี bug น้อยลง.",
    ],
  },
  "react/updating-state-from-previous-state": {
    codeComments: {
      goodCode: ["functional update ให้ React ส่ง state ล่าสุดเข้ามาก่อนคำนวณค่าใหม่"],
      badCode: ["โค้ดนี้ใช้ selectedIds จากรอบ render เดิม ซึ่งอาจเก่าแล้ว"],
    },
    title: "อัปเดต state จากค่าก่อนหน้าอย่างปลอดภัย",
    summary: "ถ้าค่า state ใหม่ต้องใช้ค่าเดิมในการคำนวณ ให้ใช้ functional update เพื่อให้ React ส่งค่าล่าสุดมาให้.",
    takeaways: ["ถ้าค่าใหม่ต้องอ้างอิงค่าเดิม ให้ส่ง function เข้า setter แทนการอ่าน state จาก render รอบที่อาจเก่าแล้ว."],
    whatToReview: [
      "โค้ดที่ดีให้ React ส่งค่า state ล่าสุดเข้ามาก่อนคำนวณ selected ids ชุดใหม่.",
      "โค้ดที่ควรปรับคำนวณจาก selectedIds ที่ถูกจำไว้ตอน render ทำให้ update บางครั้งหายได้.",
    ],
    reviewNotes: [
      "เวลาเห็น setState ที่ใช้ state ตัวเดิมมาประกอบค่าใหม่ ให้พิจารณา functional update. เรื่องนี้สำคัญเมื่อมี event หลายครั้งติดกัน, React รวมหลาย update เข้าด้วยกัน (batching) หรือ callback ที่รันทีหลัง.",
    ],
  },
  "react/controlled-form-inputs": {
    codeComments: {
      goodCode: ["React state เป็นแหล่งข้อมูลหลักสำหรับ validate, submit และ reset"],
      badCode: ["การ query DOM ทำให้ค่าฟอร์มไม่ผ่าน React state"],
    },
    title: "คุมค่าฟอร์มด้วย React state",
    summary: "ถ้าฟอร์มต้อง validate, reset หรือ submit ด้วย logic ของเรา ให้ค่าที่ผู้ใช้กรอกอยู่ใน React state เป็นแหล่งข้อมูลหลัก.",
    takeaways: ["controlled input ทำให้ค่าที่ผู้ใช้เห็นและค่าที่ submit มาจากแหล่งเดียวกัน."],
    whatToReview: [
      "โค้ดที่ดีผูก input กับ state และใช้ค่าเดียวกันตอน validate, submit และ reset.",
      "โค้ดที่ควรปรับ query DOM เพื่ออ่านและแก้ input เอง ทำให้ validate, reset และ submit ใช้ข้อมูลคนละทางกับ React state.",
    ],
    reviewNotes: [
      "ตอนรีวิวฟอร์ม ให้ดูว่าค่านี้มี logic มากกว่า submit ปกติไหม. ถ้ามี validation, disabled state หรือ error message การเก็บค่าใน React state จะดูแลง่ายกว่า.",
    ],
  },
  "react/effect-dependencies": {
    codeComments: {
      goodCode: ["effect ทำงานตาม reviewId ล่าสุด และยกเลิก request เก่าที่ไม่ใช้แล้ว"],
      badCode: ["ใส่ [] ทำให้ effect จำ reviewId แรกไว้และไม่ตามค่าที่เปลี่ยน"],
    },
    title: "ใส่ dependency ของ effect ให้ครบ",
    summary: "ถ้า effect อ่านค่าอย่าง `reviewId` ให้ใส่ค่านั้นใน dependency array และยกเลิกงานเก่า (cleanup) เมื่อค่านั้นเปลี่ยน.",
    takeaways: ["dependency array คือรายชื่อค่าที่ effect ต้องตามให้ทัน และ cleanup คือการยกเลิกงานเก่าที่ไม่ต้องใช้แล้ว."],
    whatToReview: [
      "โค้ดที่ดีใส่ค่าที่ effect ใช้จริงใน dependency array และยกเลิก request เก่าเมื่อค่าเปลี่ยน.",
      "โค้ดที่ควรปรับใส่ `[]` ทั้งที่ใช้ค่าจาก props ทำให้ข้อมูลที่แสดงอาจค้างอยู่กับค่าแรก.",
    ],
    reviewNotes: [
      "ตอนรีวิว effect ให้ดูทั้ง dependency array และ cleanup. ถ้า effect ใช้ค่าใดจาก props, state หรือ function ใน component ค่านั้นควรอยู่ใน dependency หรือมีเหตุผลที่ชัดเจนว่าทำไมไม่อยู่.",
    ],
  },
  "react/async-effect-cleanup": {
    codeComments: {
      goodCode: ["cleanup กัน response เก่าไม่ให้กลับมาแก้ state ของหน้าจอปัจจุบัน"],
      badCode: ["request เก่าอาจตอบกลับช้ากว่าและเขียนทับ state ใหม่"],
    },
    title: "กัน request เก่าเขียนทับหน้าจอใหม่",
    summary: "เมื่อ input เปลี่ยนหรือ component ถูกถอด ต้องกัน response เก่าที่ตอบกลับช้ากลับมาเขียน state ของหน้าจอปัจจุบัน.",
    takeaways: ["effect ที่เริ่มงาน async ควรมี cleanup เพื่อยกเลิกงานเก่าเมื่อ input เปลี่ยนหรือ component ถูกถอดออก."],
    whatToReview: [
      "โค้ดที่ดีตั้ง flag ใน cleanup เพื่อไม่ให้ promise เก่าแก้ state หลังหน้าจอเปลี่ยนไปแล้ว.",
      "โค้ดที่ควรปรับเริ่ม request ใหม่ทุกครั้งแต่ยังปล่อยให้ response เก่ากลับมาเขียน state ได้.",
    ],
    reviewNotes: [
      "ตอนรีวิว async effect ให้ลองคิดกรณีผู้ใช้กดเปลี่ยนหน้าเร็ว ๆ หรือ request ตอบกลับคนละลำดับ. dependency ครบอย่างเดียวอาจยังไม่พอถ้าไม่มี cleanup กัน response เก่า.",
    ],
  },
  "react/context-boundaries": {
    codeComments: {
      goodCode: ["จำกัด context ให้แคบ และส่งข้อมูล review ผ่าน props ที่เห็นชัด"],
      badCode: ["context ที่ใส่ state ทั้งแอปทำให้ card ผูกกับข้อมูลที่ไม่เกี่ยว"],
    },
    title: "จำกัดขอบเขตของ context",
    summary: "ใช้ context กับข้อมูลที่หลายส่วนต้องรู้จริง ๆ เช่น viewer/theme อย่าใช้แทน props ทุกอย่างจน component ผูกกับ state ทั้งแอป.",
    takeaways: ["context ที่แคบช่วยให้ component ไม่ต้องรับรู้หรือวาดใหม่เพราะ state ที่ไม่เกี่ยวกับหน้าที่ของตัวเอง."],
    whatToReview: [
      "โค้ดที่ดีใช้ context เฉพาะ viewer และส่งข้อมูล review ผ่าน props ที่ชัดเจน.",
      "โค้ดที่ควรปรับใส่ state ทั้งแอปใน context เดียว ทำให้ component รู้เยอะและอาจวาดใหม่ (rerender) เมื่อข้อมูลที่ไม่เกี่ยวเปลี่ยน.",
    ],
    reviewNotes: [
      "ตอนรีวิว component ที่ใช้ context ให้เทียบว่ามันรับข้อมูลมากแค่ไหนกับสิ่งที่ render จริง. context กว้างเกินไปทำให้ใช้ซ้ำยาก และทำให้จำนวนครั้งที่ component วาดใหม่คาดเดายาก.",
    ],
  },
  "react/memoization-when-it-helps": {
    codeComments: {
      goodCode: ["useMemo จำผลลัพธ์ไว้ใช้ซ้ำเฉพาะการคำนวณ list ที่หนักจริง"],
      badCode: ["ใส่ [] ทำให้ list ค้างอยู่กับค่าแรกหลัง render"],
    },
    title: "ใช้ memoization เมื่อช่วยลดงานจริง",
    summary: "ใช้ `useMemo` หรือ `useCallback` เมื่อมีงานคำนวณหนัก หรือต้องส่ง reference เดิมให้ child/memoized component จริง ๆ และต้องใส่ dependencies ให้ครบ.",
    takeaways: ["memoization ควรมีเหตุผลชัดว่าเลี่ยงงานแพงอะไร และต้องบอกค่าที่พึ่งพา (dependencies) ให้ครบ."],
    whatToReview: [
      "โค้ดที่ดีใช้ `useMemo` กับการ filter list ที่ขึ้นกับ reviews และ search อย่างชัดเจน.",
      "โค้ดที่ควรปรับใส่ `[]` จนข้อมูลที่แสดงเก่า และ memoize ข้อความง่าย ๆ ที่คำนวณใหม่ได้ถูกกว่า.",
    ],
    reviewNotes: [
      "ตอนรีวิว `useMemo` หรือ `useCallback` ให้ถามว่ามันช่วยลดงานแพงตรงไหน และใส่ dependencies ครบไหม. memo ที่ผิดอาจทำให้โค้ดดูเหมือนเร็วขึ้น แต่จริง ๆ แล้วค้างอยู่กับข้อมูลเก่า.",
    ],
  },
  "react/composition-over-prop-flags": {
    codeComments: {
      goodCode: ["Panel รับปุ่มและเนื้อหาจาก component ที่เอาไปใช้"],
      badCode: ["prop true/false หลายตัวสร้างชุดค่าที่ component ต้องคุมเอง"],
    },
    title: "ส่งปุ่มและเนื้อหาผ่าน children/actions",
    summary: "ถ้า component มีหลายรูปแบบ ให้ component ที่เอาไปใช้ส่งปุ่ม เนื้อหา หรือ action เข้ามาผ่าน children หรือ prop อย่าง actions แทนการเพิ่ม prop true/false หลายตัว.",
    takeaways: ["composition คือการให้ component ที่เอาไปใช้ส่ง UI บางส่วนเข้ามาเอง ช่วยลดชุด prop ที่ผสมกันผิดพลาดง่าย."],
    whatToReview: [
      "โค้ดที่ดีให้ component ที่เอา Panel ไปใช้ส่ง action และ content เข้ามาตามกรณีที่ต้องใช้.",
      "โค้ดที่ควรปรับมี mode และ prop true/false หลายตัว ทำให้เกิดชุดค่าที่ component ไม่ได้ตั้งใจรองรับ เช่น showFooter=false แต่ showDeleteButton=true.",
    ],
    reviewNotes: [
      "ถ้าความต้องการใหม่ทุกครั้งทำให้ component ต้องเพิ่ม prop true/false อีกตัว ให้ลองมองหา composition. children หรือ prop อย่าง actions ช่วยให้ component ที่เอาไปใช้ส่ง UI ที่ต้องการเข้ามา โดยไม่บังคับให้ component หลักรู้ทุกกรณีล่วงหน้า.",
    ],
  },
  "nextjs/app-router-file-conventions": {
    codeComments: {
      goodCode: ["อ่าน params จาก props ที่ Next.js ส่งให้ตามโครง route"],
      badCode: ["แกะ URL เอง ทำให้หลุดจากรูปแบบที่ App Router เตรียมไว้"],
    },
    title: "ให้ folder เป็นตัวบอก URL ของหน้า",
    summary: "ใน App Router โครง folder และไฟล์พิเศษอย่าง `page.tsx` กับ `[id]` เป็นตัวกำหนดหน้าและ URL ให้ Next.js เอง.",
    takeaways: ["ให้ folder path บอก route เสมอ อย่าสร้างชื่อไฟล์หรือแยก URL เองถ้า Next.js มี params ให้ใช้แล้ว."],
    whatToReview: [
      "โค้ดที่ดีใช้ `app/projects/[projectId]/page.tsx` เพื่อให้ชื่อ folder เป็น URL จริง และอ่าน `params` จาก props ที่ Next.js ส่งให้.",
      "โค้ดที่ควรปรับตั้งชื่อไฟล์เองแล้วไปแยก URL ใน browser ทำให้ Next.js ช่วยตรวจ route และ params ได้น้อยลง.",
    ],
    reviewNotes: [
      "ตอนรีวิว Next.js ให้เริ่มจากโครงไฟล์ก่อนเสมอ. ถ้า folder, ส่วน URL แบบ `[projectId]` หรือไฟล์ `page.tsx` ไม่ตรงรูปแบบของ App Router โค้ดอาจยังดูเป็น React ธรรมดาได้ แต่ Next.js จะช่วยเรื่อง routing และ type ของ params ได้น้อยลงมาก.",
    ],
  },
  "nextjs/layout-page-boundaries": {
    codeComments: {
      goodCode: ["layout คุม navigation ที่ใช้ร่วมกัน ส่วน page ลูกคุมเนื้อหาเฉพาะหน้า"],
      badCode: ["ดึงข้อมูลเฉพาะหน้าใน layout ทำให้หน้าลูกที่ไม่ใช้ต้องรอด้วย"],
    },
    title: "แยกหน้าที่ layout กับ page",
    summary: "ให้ layout ดูแล UI ที่ใช้ร่วมกัน เช่น navigation ส่วน page ดูแลข้อมูลและเนื้อหาเฉพาะหน้าของตัวเอง.",
    takeaways: ["layout ควรเบาและเป็นของใช้ร่วมกัน ไม่ควรเป็นที่รวมการดึงข้อมูลเฉพาะหน้าของทุก page."],
    whatToReview: [
      "โค้ดที่ดีวาง navigation ที่ใช้ร่วมกันไว้ใน layout แล้วปล่อยให้ `children` render เนื้อหาเฉพาะของแต่ละ page.",
      "โค้ดที่ควรปรับดึงข้อมูลเฉพาะหน้าลงใน layout ทำให้ page อื่นที่อยู่ใต้ layout เดียวกันต้องรอข้อมูลชุดนั้นไปด้วย.",
    ],
    reviewNotes: [
      "เวลาเห็น layout fetch ข้อมูล ให้ถามก่อนว่าทุก page ใต้ layout นั้นต้องใช้ข้อมูลนี้จริงไหม. เพราะ layout อยู่ค้างระหว่าง navigation ถ้าใส่ข้อมูลเฉพาะหน้ามากเกินไปจะทำให้หลาย page ช้าหรือผูกกันโดยไม่จำเป็น.",
    ],
  },
  "nextjs/server-client-components": {
    codeComments: {
      goodCode: ["Server Component ดึงข้อมูลก่อน แล้วส่งเฉพาะส่วนที่ต้องคลิกให้ Client Component เล็ก ๆ"],
      badCode: ["วาง `use client` สูงเกินไป ทำให้ทั้งหน้าต้องส่ง JavaScript ไป browser"],
    },
    title: "แยกส่วนที่รันบน server กับ browser",
    summary: "ใช้ Server Component สำหรับดึงข้อมูลและ render ส่วนที่ไม่ต้องโต้ตอบ แล้วแยก Client Component เฉพาะส่วนที่ต้องคลิกหรือใช้ state ใน browser.",
    takeaways: ["อย่าใส่ `use client` ให้ทั้งหน้า เพียงเพราะมี component เล็ก ๆ หนึ่งตัวที่ต้องใช้ state หรือ event handler."],
    whatToReview: [
      "โค้ดที่ดีดึง review ใน Server Component แล้วส่งเฉพาะข้อมูลที่ต้องคลิกหรือเปลี่ยน state ให้ Client Component เล็ก ๆ.",
      "โค้ดที่ควรปรับย้ายทั้ง page ไปเป็น client ทำให้ข้อมูลหลักถูกดึงใน browser แทนที่จะถูกเตรียมมาจาก server ตั้งแต่แรก.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้มองตำแหน่งของ `use client` ให้ดี. เมื่อใส่ไว้ที่ไฟล์ใหญ่ ไฟล์นั้นและ component ที่ import ต่อกันจะถูกส่ง JavaScript ไป browser มากขึ้น จึงควรวางไว้ใกล้ส่วนที่ต้องคลิกหรือใช้ state ที่สุด.",
    ],
  },
  "nextjs/small-client-islands": {
    codeComments: {
      goodCode: ["มีแค่ SearchBox ที่ต้องใช้ browser ส่วน root layout ยัง render บน server"],
      badCode: ["state ของ input เดียวทำให้ root layout ทั้งชุดกลายเป็น client"],
    },
    title: "แยกเฉพาะส่วนที่ต้องคลิกให้เป็น Client Component",
    summary: "แยกส่วนเล็ก ๆ ที่ต้องใช้ browser เช่น input หรือปุ่ม ออกมาเป็น Client Component เพื่อให้ layout และเนื้อหาหลักยัง render บน server ได้.",
    takeaways: ["Client Component ที่เล็กช่วยลด JavaScript ที่ส่งไป browser และลดงานที่ผู้ใช้ไม่จำเป็นต้องโหลด."],
    whatToReview: [
      "โค้ดที่ดีให้ root layout เป็น Server Component แล้วแยก `SearchBox` เป็น client เฉพาะจุดที่ต้องอ่าน input.",
      "โค้ดที่ควรปรับทำให้ root layout ทั้งไฟล์เป็น client เพียงเพื่อเก็บ state ของ input เดียว.",
    ],
    reviewNotes: [
      "ถ้าเห็น `useState` หรือ `useEffect` ในไฟล์ใหญ่ ให้ถามว่าสามารถแยกเฉพาะส่วนที่ต้องคลิกหรือใช้ state ออกมาเป็น Client Component เล็ก ๆ ได้ไหม. วิธีนี้ช่วยให้ UI ที่เป็นข้อความหรือ layout ธรรมดาไม่ต้องกลายเป็น JavaScript ฝั่ง browser โดยไม่จำเป็น.",
    ],
  },
  "nextjs/server-side-data-fetching": {
    codeComments: {
      goodCode: ["ดึงข้อมูลหลักบน server และใช้ notFound เมื่อ slug ไม่เจอ"],
      badCode: ["ดึงข้อมูลหลัง browser โหลด JavaScript แล้ว ทำให้ข้อมูลมาช้า"],
    },
    title: "ดึงข้อมูลหลักของหน้าบน server",
    summary: "ดึงข้อมูลที่จำเป็นต่อการแสดงหน้าใน Server Component เพื่อให้ HTML แรกมีข้อมูลสำคัญพร้อมตั้งแต่ server ส่งมา.",
    takeaways: ["ข้อมูลที่ต้องเห็นทันทีตอนเปิดหน้าควรถูก fetch ฝั่ง server ไม่ใช่รอไปดึงหลัง browser โหลด JavaScript แล้ว."],
    whatToReview: [
      "โค้ดที่ดี `await params` ตามรูปแบบของ Next.js แล้วดึง article ฝั่ง server พร้อมใช้ `notFound()` เมื่อไม่พบข้อมูล.",
      "โค้ดที่ควรปรับดึงข้อมูลหลักของหน้าผ่าน client effect ทำให้ผู้ใช้และ crawler เห็น loading ก่อนเสมอ.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้แยกข้อมูลที่จำเป็นต่อการเปิดหน้าออกจากข้อมูลที่ต้องใช้เฉพาะใน browser. ถ้าข้อมูลต้องมีตั้งแต่แรก การไป fetch หลัง browser โหลด JavaScript แล้วมักทำให้หน้าช้าลงและเพิ่มจุดที่ต้องดูแลโดยไม่จำเป็น.",
    ],
  },
  "nextjs/parallel-data-fetching": {
    codeComments: {
      goodCode: ["เริ่ม request สองตัวก่อน แล้วรอผลพร้อมกันทีเดียว"],
      badCode: ["รอ request แรกจบก่อนค่อยเริ่ม request ที่สอง ทั้งที่ไม่จำเป็น"],
    },
    title: "เริ่ม request พร้อมกันถ้าไม่ต้องรอกัน",
    summary: "ถ้า request สองตัวใช้ข้อมูลตั้งต้นเดียวกัน เช่น `projectId` และไม่ต้องใช้ผลลัพธ์ของกันและกัน ให้เริ่มทั้งคู่ก่อน แล้วรอพร้อมกันด้วย `Promise.all`.",
    takeaways: ["ถ้า request ไม่ต้องใช้ผลลัพธ์ของกันและกัน ให้เริ่มพร้อมกันแล้วค่อยรวมผลด้วย `Promise.all`."],
    whatToReview: [
      "โค้ดที่ดีเริ่ม `projectPromise` และ `summaryPromise` ก่อน แล้วค่อย await พร้อมกัน เพราะทั้งคู่ใช้แค่ `projectId`.",
      "โค้ดที่ควรปรับ await request แรกจนจบก่อนเริ่ม request ที่สอง ทั้งที่ request ที่สองไม่ได้ใช้ผลลัพธ์จาก request แรก.",
    ],
    reviewNotes: [
      "เวลารีวิว async Server Component ให้ถามว่า `await` ตัวถัดไปต้องใช้ผลลัพธ์จากตัวก่อนหน้าจริงไหม. ถ้าไม่ต้องใช้ แต่โค้ดรอทีละตัว หน้าเว็บจะช้าตามผลรวมของทุก request แทนที่จะรอแค่ตัวที่ช้าที่สุด.",
    ],
  },
  "nextjs/loading-error-boundaries": {
    codeComments: {
      goodCode: ["error.tsx ของ route log error แสดงหน้าสำรอง และให้ retry ได้"],
      badCode: ["catch error ทุกอย่างใน page ทำให้ระบบ error ของ Next.js ทำงานไม่ครบ"],
    },
    title: "เตรียมหน้าระหว่างโหลดและหน้า error",
    summary: "ใช้ `loading.tsx` แสดงสถานะระหว่างรอข้อมูล และใช้ `error.tsx` แสดงหน้าสำรองพร้อมปุ่ม retry เมื่อ route เกิด error.",
    takeaways: ["route ที่ดีควรมี UI ระหว่างโหลดและจุดจัดการ error ในตำแหน่งที่ผู้ใช้เจอจริง."],
    whatToReview: [
      "โค้ดที่ดีใช้ `error.tsx` เป็น Client Component สำหรับแสดงหน้าหรือข้อความสำรอง และมีปุ่ม retry เมื่อ route ล้มเหลว.",
      "โค้ดที่ควรปรับ catch error ทุกอย่างใน page แล้ว return ข้อความเอง ทำให้ Next.js จัดการ error ต่อไม่ได้และผู้ใช้ไม่มีทาง retry ที่ชัดเจน.",
    ],
    reviewNotes: [
      "ตอนรีวิว route ที่ fetch ข้อมูลหรือมีโอกาสล้มเหลว ให้มองหา loading state และ `error.tsx`. การ catch กว้าง ๆ ใน page มักซ่อน bug ทำให้ log แย่ลง และทำให้ประสบการณ์ตอน error ไม่ชัด.",
    ],
  },
  "nextjs/caching-revalidation-intent": {
    codeComments: {
      goodCode: ["ระบุ `use cache`, อายุ cache และ tag เพื่อบอกว่าข้อมูลสดแค่ไหน"],
      badCode: ["การดึงข้อมูลนี้ไม่บอกว่าต้องสดทุกครั้งหรือ cache ได้"],
    },
    title: "เขียนกติกา cache และ revalidate ให้ชัด",
    summary: "ประกาศให้ชัดว่าข้อมูลไหนเก็บไว้ใช้ซ้ำ (cache) ได้ นานแค่ไหน และจะสั่งอัปเดตใหม่ (revalidate) ด้วย tag อะไรเมื่อข้อมูลเปลี่ยน.",
    takeaways: ["อย่าคาดเดาว่า `fetch` จะ cache ให้เอง ถ้าข้อมูลควร cache ให้เขียนกติกาไว้ในโค้ด."],
    whatToReview: [
      "โค้ดที่ดีใช้ `use cache`, `cacheLife` และ `cacheTag` เพื่อบอกว่ารายการบทความเผยแพร่ cache ได้เป็นชั่วโมงและ revalidate เป็นกลุ่มได้.",
      "โค้ดที่ควรปรับดึงข้อมูลจาก CMS โดยไม่มีกติกา cache ทำให้ไม่รู้ว่าข้อมูลควรสดทุกครั้งหรือเก็บไว้ใช้ซ้ำได้.",
    ],
    reviewNotes: [
      "ใน Next.js รุ่นนี้ `fetch` ไม่ได้ cache เป็นค่าเริ่มต้น. ตอนรีวิวให้ถามเสมอว่าข้อมูลนี้ต้องสดแค่ไหน ใครเป็นคนเปลี่ยนข้อมูล และ action ไหนควร `revalidateTag` เพื่อไม่ให้ cache เก่าค้าง.",
    ],
  },
  "nextjs/metadata-per-route": {
    codeComments: {
      goodCode: ["generateMetadata สร้างข้อมูล head ฝั่ง server พร้อมหน้า route"],
      badCode: ["อัปเดต document.title หลัง browser โหลด JavaScript ช้าเกินไปสำหรับ SEO/social preview"],
    },
    title: "เตรียม metadata ให้แต่ละหน้าตั้งแต่ server",
    summary: "สร้าง title/description สำหรับ SEO และ social preview ด้วย Metadata API หรือ `generateMetadata` ฝั่ง server แทนการค่อยไปแก้ใน browser.",
    takeaways: ["metadata ของ route ควรถูกสร้างก่อนส่งหน้า ไม่ใช่รอให้ JavaScript ใน browser มาแก้ทีหลัง."],
    whatToReview: [
      "โค้ดที่ดีสร้าง title และ description จากข้อมูล article ใน `generateMetadata` เพื่อให้ head พร้อมตั้งแต่ฝั่ง server.",
      "โค้ดที่ควรปรับตั้ง `document.title` หลัง browser โหลด JavaScript แล้ว ทำให้ crawler หรือ social preview อาจพลาด metadata สำคัญ.",
    ],
    reviewNotes: [
      "ตอนรีวิว SEO ใน App Router ให้มองหา `metadata` export หรือ `generateMetadata`. ถ้า head ถูกแก้ใน `useEffect` แปลว่าข้อมูลสำคัญมาช้าเกินไปสำหรับ bot, preview และการแชร์ลิงก์.",
    ],
  },
  "nextjs/route-handlers-api-boundaries": {
    codeComments: {
      goodCode: ["Route Handler ตรวจผลลัพธ์และคืน HTTP status ให้ตรงกับกรณี"],
      badCode: ["ผสม API GET กับ page UI ทำให้หน้าที่ของไฟล์ใน App Router ไม่ชัด"],
    },
    title: "แยก route.ts สำหรับ API ออกจาก page.tsx สำหรับหน้าเว็บ",
    summary: "ใช้ `route.ts` เป็นไฟล์ API ของ Next.js แยกจาก `page.tsx` ที่ใช้แสดงหน้า และคืน response/status ให้ชัดว่าเกิดอะไรขึ้น.",
    takeaways: ["Route Handler ควร validate request และคืน `Response` ที่สื่อ status/error ชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีวาง API ไว้ใน `app/api/reviews/[id]/route.ts` และตอบ `404` เมื่อไม่พบ review.",
      "โค้ดที่ควรปรับพยายามผสม GET handler กับ page ในโฟลเดอร์ route เดียวกัน ทำให้ขอบเขตของหน้าเว็บกับ API สับสน.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าไฟล์นี้กำลังแสดงหน้า UI หรือกำลังคืนข้อมูล API. `page.tsx` ใช้ทำหน้าเว็บ ส่วน `route.ts` ใช้ทำ HTTP API ถ้าปนกันจะทำให้ routing, error handling และการอ่าน codebase ยากขึ้น.",
    ],
  },
  "nodejs/runtime-boundaries-entry-points": {
    codeComments: {
      goodCode: ["แยกจุดเริ่มโปรแกรมไว้ที่ entry point เท่านั้น"],
      badCode: ["แค่ import module นี้ก็เปิด server/port ทันที"],
    },
    title: "แยกไฟล์เริ่มระบบออกจากโค้ดประกอบ app",
    summary: "แยกโค้ดที่เริ่มโปรแกรม Node.js (process) ออกจากโค้ดประกอบ app เพื่อให้ module ถูก import ไป test หรือใช้ซ้ำได้โดยไม่เปิด server เอง.",
    takeaways: ["module ของ Node.js ควรถูก import ได้โดยไม่เริ่ม process, เปิด port/socket หรือเริ่มงานเบื้องหลังทันที."],
    whatToReview: [
      "โค้ดที่ดีให้ `server.ts` เป็น entry point ที่อ่าน config, สร้าง app และ `listen` port อย่างชัดเจน.",
      "โค้ดที่ควรปรับเริ่ม server ตั้งแต่ตอน import module ทำให้ test, worker หรือ script เปิด port โดยไม่ตั้งใจ.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าเกิดอะไรขึ้นถ้าไฟล์นี้ถูก import จาก test หรือ process อื่น. ถ้าแค่ import ก็เริ่มงานตอน runtime ทันที โค้ดจะประกอบใช้ซ้ำยาก test ยาก และ shutdown ให้สะอาดยากขึ้น.",
    ],
  },
  "nodejs/async-filesystem-without-blocking": {
    codeComments: {
      goodCode: ["async I/O ปล่อยให้คิวงานหลักของ Node.js รับ request อื่นต่อได้"],
      badCode: ["sync I/O ทำให้ทั้ง process หยุดรอระหว่าง request"],
    },
    title: "อ่านไฟล์แบบ async ตอนมี request",
    summary: "ใช้ filesystem API แบบ async ในโค้ดที่ทำงานตอน request เข้ามา เพื่อไม่ให้การอ่าน disk ครั้งหนึ่งบล็อก request อื่นทั้ง process.",
    takeaways: ["หลีกเลี่ยง filesystem sync call ใน HTTP handler หรือ hot path ที่อาจมีหลาย request พร้อมกัน."],
    whatToReview: [
      "โค้ดที่ดีใช้ `readFile` จาก `node:fs/promises` เพื่อให้ event loop ไปจัดการงานอื่นได้ระหว่างรอ disk.",
      "โค้ดที่ควรปรับใช้ `readFileSync` ใน request handler ทำให้ process หยุดรับงานอื่นจนอ่านไฟล์เสร็จ.",
    ],
    reviewNotes: [
      "sync filesystem API อาจยอมรับได้ตอน startup หรือใน build tooling แต่ถ้าอยู่ใน request handler ให้ตั้งคำถามทันที. ปัญหานี้มักไม่เห็นในเครื่อง local แต่จะทำให้เวลาตอบสนองพุ่งสูงเมื่อมี traffic พร้อมกัน.",
    ],
  },
  "nodejs/async-failure-boundaries": {
    codeComments: {
      goodCode: ["จุดรับ HTTP รับผิดชอบทั้ง response สำเร็จและล้มเหลว"],
      badCode: ["promise ที่ reject ไม่มีคนรับผิดชอบ client จึงอาจไม่ได้ response"],
    },
    title: "กำหนดจุดจัดการ error ของ async",
    summary: "เมื่อ promise ล้มเหลว ให้จัดการที่ขอบ HTTP ซึ่งยัง log บริบทและตอบ response ที่มีประโยชน์ให้ client ได้.",
    takeaways: ["โค้ดที่ทำงานตอน request เข้ามาแบบ async ควรมีทางล้มเหลวที่ชัดเจน และต้องส่ง response เพียงครั้งเดียว."],
    whatToReview: [
      "โค้ดที่ดี catch error ที่ HTTP boundary, log context และส่ง status 500 พร้อมข้อความที่เข้าใจได้.",
      "โค้ดที่ควรปรับสร้าง promise แล้วไม่จัดการ rejection ทำให้ client อาจค้างหรือ process เจอ unhandled rejection.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ไล่ทุก promise ใน request code ว่าถ้า reject แล้วใครรับผิดชอบ. happy path ที่ดูสะอาดอาจซ่อนพฤติกรรมตอนล้มเหลวที่ไม่มีใครนิยามไว้เลย.",
    ],
  },
  "nodejs/environment-configuration": {
    codeComments: {
      goodCode: ["ตรวจ config ก่อน app เริ่มรับ traffic"],
      badCode: ["ค่าสำรองที่ซ่อนอยู่พา production ไปผิด service ได้"],
    },
    title: "รวม config จาก environment ไว้จุดเดียว",
    summary: "อ่านและตรวจค่า environment configuration ครั้งเดียวตอน startup แล้วส่งต่อเป็น config object ที่มีหน้าตาชัดเจน.",
    takeaways: ["config ควร fail fast พร้อมข้อความชัดเจน ไม่ควรกระจาย `process.env` และ fallback เงียบ ๆ ไปทั่ว codebase."],
    whatToReview: [
      "โค้ดที่ดีแปลง env เป็น typed config object และตรวจ required value ก่อน app เริ่มรับ traffic.",
      "โค้ดที่ควรปรับอ่าน `process.env` ลึกใน infrastructure code พร้อม fallback ที่อาจชี้ production ไปผิด database.",
    ],
    reviewNotes: [
      "เวลาเห็น `process.env` กระจายหลายไฟล์ ให้ดึงกลับมาคิดเรื่องขอบเขต config. bug เรื่อง configuration ควรล้มตั้งแต่เริ่มระบบ ไม่ใช่ล้มตอนผู้ใช้ส่ง request หรือเงียบจนต่อ service ผิด.",
    ],
  },
  "nodejs/module-side-effects-startup": {
    codeComments: {
      goodCode: ["คนเรียกเป็นคนตัดสินใจว่าจะเริ่มและหยุด background job เมื่อไร"],
      badCode: ["import helper แล้วเริ่ม loop ถาวรไปด้วยทันที"],
    },
    title: "อย่าเริ่มงานตอน import module",
    summary: "อย่าเริ่ม timer, connection หรือ background job เพียงเพราะมีคน import module เพื่อใช้ function บางตัว.",
    takeaways: ["side effect ควรอยู่หลัง start function ที่เรียกชัดเจน หรืออยู่ใน entry point ที่ควบคุม lifecycle ได้."],
    whatToReview: [
      "โค้ดที่ดีมี `startCleanupJob` ที่เริ่มงานชัดเจนและคืน `stop` handle สำหรับ shutdown หรือ test.",
      "โค้ดที่ควรปรับเริ่ม `setInterval` ที่ top level ทำให้แค่ import เพื่อใช้ function เดียวก็เริ่ม background loop.",
    ],
    reviewNotes: [
      "ตอนรีวิว top-level code ให้มองหา timer, connection, subscription และ network call. การเริ่มงานเองแบบซ่อน ๆ ทำให้ test isolation, worker reuse และการคุม lifecycle เปราะมาก.",
    ],
  },
  "nodejs/streams-large-payloads": {
    codeComments: {
      goodCode: ["pipeline ช่วยทยอยส่งข้อมูลและจัดการ stream error"],
      badCode: ["โหลด export ทั้งก้อนเข้า memory ตามขนาดไฟล์"],
    },
    title: "ทยอยส่งข้อมูลใหญ่ด้วย stream",
    summary: "ส่งไฟล์หรือ response ขนาดใหญ่ด้วย stream เพื่อทยอยอ่านและทยอยส่ง แทนการโหลดทั้งหมดเข้า memory ก่อนส่ง.",
    takeaways: ["payload ใหญ่ควรใช้ streaming ผ่าน pipeline พร้อม error handling ไม่ใช่ `readFile` ทั้งก้อนเสมอไป."],
    whatToReview: [
      "โค้ดที่ดีใช้ `createReadStream` กับ `pipeline` เพื่อรองรับ backpressure หรือจังหวะที่ฝั่งรับตามไม่ทัน และจัดการ stream failure.",
      "โค้ดที่ควรปรับ `readFile` ทั้งไฟล์ก่อนส่ง response ทำให้ memory เพิ่มตามขนาดไฟล์และจำนวนผู้ใช้พร้อมกัน.",
    ],
    reviewNotes: [
      "ตอนรีวิว download หรือ export ให้ถามว่าข้อมูลใหญ่ได้แค่ไหนและมี request พร้อมกันได้กี่ชุด. การโหลดทั้งไฟล์เข้า memory อาจดูง่ายใน demo แต่เสี่ยงมากเมื่อไฟล์ใหญ่หรือผู้ใช้พร้อมกันหลายคน.",
    ],
  },
  "nodejs/http-request-lifecycle": {
    codeComments: {
      goodCode: ["ปฏิเสธ method ที่ไม่รองรับก่อนอ่าน body"],
      badCode: ["อ่าน body แบบไม่จำกัดก่อนเช็ก method ด้วยซ้ำ"],
    },
    title: "จัดลำดับชีวิตของ HTTP request",
    summary: "ตรวจ method, จำกัด body และ return หลังส่ง response ตามลำดับที่คาดเดาได้.",
    takeaways: ["handler ที่ดีควร validate ก่อน อ่าน input แบบมี limit และไม่เขียน response ซ้ำหลังส่ง error แล้ว."],
    whatToReview: [
      "โค้ดที่ดีปฏิเสธ method ที่ไม่รองรับก่อนอ่าน body และจำกัดขนาด input ก่อนใช้งาน.",
      "โค้ดที่ควรปรับอ่าน body แบบไม่จำกัดก่อนเช็ก method และยังอาจเขียน response ซ้ำหลังส่ง 405.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ไล่ request ตั้งแต่เข้ามาจนจบ response. bug ของ lifecycle มักโผล่กับ method ที่ไม่รองรับ, body ใหญ่ หรือ client ที่ตัดการเชื่อมต่อกลางทาง ไม่ใช่กับ happy path ปกติ.",
    ],
  },
  "nodejs/graceful-shutdown-signals": {
    codeComments: {
      goodCode: ["หยุดรับงานใหม่ก่อน แล้วค่อยปิด dependency ที่ใช้อยู่"],
      badCode: ["exit ทันทีอาจตัด request ที่ยังทำงานอยู่"],
    },
    title: "ปิด process แบบรอให้งานเดิมจบก่อน",
    summary: "เมื่อ process ได้รับสัญญาณ shutdown ให้หยุดรับงานใหม่ ปิด resource ที่ใช้อยู่ และมี timeout กันการปิดค้าง.",
    takeaways: ["Node process ใน production ควรรอให้ HTTP request เดิมจบ และปิด dependency connection ก่อน `exit`."],
    whatToReview: [
      "โค้ดที่ดีใช้ `server.close`, ปิด database และมี timeout กัน shutdown ค้าง.",
      "โค้ดที่ควรปรับ `process.exit` ทันทีเมื่อได้ `SIGTERM` หรือ `SIGINT` ทำให้ request ที่กำลังทำงานหลุดได้.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้คิดถึง deploy, container restart และ Ctrl+C ตอน local. signal handling เป็นความถูกต้องของ production เพราะมันกำหนดว่า request และ connection ที่ค้างอยู่จะถูกปิดอย่างไร.",
    ],
  },
  "nodejs/structured-logging": {
    codeComments: {
      goodCode: ["field ที่คงที่ทำให้ค้นหาและเชื่อมเหตุการณ์ใน log ได้"],
      badCode: ["secret ใน log จะกลายเป็นข้อมูลรั่วใน production"],
    },
    title: "ทำ log แบบมี field ให้ค้นหาได้",
    summary: "เขียน log เป็น event ที่ machine อ่านได้ มีบริบทของ request และไม่ใส่ secret หรือข้อมูลส่วนตัว.",
    takeaways: ["log ควรช่วยเชื่อมเหตุการณ์ของ request ได้ โดยไม่ทำให้ secret หรือข้อมูลผู้ใช้รั่วไปอยู่ในระบบ log."],
    whatToReview: [
      "โค้ดที่ดี log JSON ด้วย field ที่คงที่ เช่น `level`, `message`, `requestId` และ `durationMs`.",
      "โค้ดที่ควรปรับ log string อิสระและใส่ password ลง log ซึ่งกลายเป็นความเสี่ยงด้าน security ทันที.",
    ],
    reviewNotes: [
      "ตอนรีวิว log ให้ดู request id, event name, level และ field ที่อ่อนไหว. log เป็น production data จึงต้องค้นหาได้ เป็นระบบ และต้องไม่กลายเป็นที่เก็บ secret.",
    ],
  },
  "nodejs/input-validation-path-safety": {
    codeComments: {
      goodCode: ["ตรวจแล้ว resolve user input เทียบกับ root ที่อนุญาต"],
      badCode: ["user input อาจไต่ path ออกนอก directory ที่ตั้งใจ"],
    },
    title: "ตรวจ input ก่อนใช้กับ path ของไฟล์",
    summary: "ตรวจ user input ก่อนนำไปใช้กับ filesystem path หรือ operation ที่แตะ resource สำคัญ.",
    takeaways: ["path ที่มาจากผู้ใช้ควรถูก resolve เทียบกับ root ที่อนุญาต และต้องปฏิเสธความพยายามไต่ path ออกนอกพื้นที่."],
    whatToReview: [
      "โค้ดที่ดีตรวจ filename, resolve เทียบกับ upload root และป้องกัน path ที่หลุดออกนอก directory ที่อนุญาต.",
      "โค้ดที่ควรปรับ join user input เข้ากับ path ตรง ๆ ทำให้ path traversal ชี้ไปไฟล์นอกพื้นที่ที่ตั้งใจได้.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้มอง file path, shell argument, URL และ database filter เป็น boundary สำคัญ. helper สั้น ๆ อาจเป็นจุดที่ user input ข้ามเข้า operating system หรือ resource ที่ไม่ควรแตะ.",
    ],
  },
  "express/app-factory-server-startup": {
    codeComments: {
      goodCode: ["test สามารถ import ฟังก์ชันสร้าง app ได้โดยไม่เปิด port"],
      badCode: ["แค่ import ไฟล์นี้ก็เริ่ม listen port แล้ว"],
    },
    title: "แยกการสร้าง app ออกจากการเปิด server",
    summary: "เขียน function สำหรับสร้าง Express app แยกจากไฟล์ที่เรียก `listen()` เพื่อเปิด port จริง.",
    takeaways: ["test ควรสร้าง app ได้โดยไม่ต้องเปิด port จริงหรือเริ่ม server เอง."],
    whatToReview: [
      "โค้ดที่ดี export `createApp()` ทำให้ test, worker หรือ script สร้าง app ชุดเดียวกันได้โดยไม่เริ่ม server.",
      "โค้ดที่ควรปรับเรียก `app.listen()` ในไฟล์ app ทันที ทำให้แค่ import เพื่อ test ก็เปิด port โดยไม่ตั้งใจ.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่าไฟล์นี้แค่ประกอบ Express app หรือเริ่ม server จริงด้วย. ถ้า import แล้วเกิด side effect ทันที จะทำให้ test แยกยาก ปิด server ยาก และใช้ app ซ้ำในหลายบริบทยาก.",
    ],
  },
  "express/router-boundaries": {
    codeComments: {
      goodCode: ["router นี้ดูแล endpoint ของ reviews ชุดเดียว และรับ service ที่ต้องใช้ชัดเจน"],
      badCode: ["reviews, users และ billing ถูกกองไว้ใน app.ts พร้อม global service ร่วมกัน"],
    },
    title: "แยก route ตามกลุ่มงานของระบบ",
    summary: "รวม route ที่ดูแลงานกลุ่มเดียวกัน เช่น reviews, users หรือ billing ไว้ใน router ของตัวเอง และส่ง service ที่ต้องใช้เข้ามาอย่างชัดเจน.",
    takeaways: ["router ควรดูแลกลุ่มงานเดียว เช่น reviews และไม่ควรไปหยิบ global service เอง."],
    whatToReview: [
      "โค้ดที่ดีแยก route ของ reviews ไว้ใน router เฉพาะ และรับ service ของ reviews ผ่าน factory.",
      "โค้ดที่ควรปรับรวม reviews, users และ billing ไว้ใน `app.ts` ไฟล์เดียว จนดูไม่ออกว่าใครรับผิดชอบอะไร.",
    ],
    reviewNotes: [
      "Express เพิ่ม route ในไฟล์เดียวได้ง่ายมาก ตอนรีวิวให้ถามว่า router นี้ยังดูแลงานกลุ่มเดียวอยู่ไหม ถ้าเริ่มรวม reviews, users และ billing เข้าด้วยกัน การหา service ที่เกี่ยวข้องและเจ้าของโค้ดส่วนนั้นจะยากขึ้นเร็วมาก.",
    ],
  },
  "express/middleware-order": {
    codeComments: {
      goodCode: ["ตัวอ่าน JSON body และ auth มาก่อน route ส่วน 404/error อยู่ท้ายสุด"],
      badCode: ["middleware ที่วางผิดลำดับอาจไม่มีโอกาสทำงานกับ request นั้นแล้ว"],
    },
    title: "เรียง middleware ตามทางเดินของ request",
    summary: "อ่าน `app.use()` จากบนลงล่างเหมือนทางเดินของ request แล้ววาง body parser, auth, route, 404 และ error handler ตามลำดับการทำงานจริง.",
    takeaways: ["ใน Express ลำดับ middleware คือพฤติกรรมจริง ไม่ใช่แค่การจัดโค้ดให้สวย."],
    whatToReview: [
      "โค้ดที่ดีอ่าน JSON body ก่อนเข้า route, ใส่ auth ก่อน router ที่ต้องป้องกัน และวาง 404/error handler หลัง route.",
      "โค้ดที่ควรปรับวาง error handler ก่อน route, auth หลัง route และ body parser หลัง route ทำให้ body parser หรือ auth ไม่ทันทำงานกับ request นั้น.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้อ่าน `app.use()` เหมือนทางเดินของ request จากบนลงล่าง. ถ้าวางผิดลำดับ route อาจเห็น body ไม่ครบ, auth ไม่ทำงาน หรือ error handler จับ error ไม่ทัน.",
    ],
  },
  "express/request-validation": {
    codeComments: {
      goodCode: ["ตรวจ req.body ที่ route ก่อนส่งต่อให้งานหลักของแอป"],
      badCode: ["raw body ถูกส่งเข้า service ทั้งที่ยังไม่รู้ว่า field ครบและ format ถูกไหม"],
    },
    title: "ตรวจข้อมูลใน request ก่อนเรียก service",
    summary: "ข้อมูลจาก `req.body` เป็นข้อมูลจากผู้ใช้ ยังไม่น่าเชื่อถือ route จึงควรตรวจให้เรียบร้อยก่อนส่งเข้า service.",
    takeaways: ["route handler ควรส่งค่าที่ validate แล้วเข้า service ไม่ใช่ส่ง raw request body."],
    whatToReview: [
      "โค้ดที่ดีส่ง body เข้า validator ก่อน ถ้า input ไม่ถูกต้องก็ตอบ 400 ทันที.",
      "โค้ดที่ควรปรับส่ง `req.body` เข้า service ตรง ๆ ทำให้ field ที่ขาดหรือ format ผิดไปเจอ error ลึกใน service แทนที่จะตอบ 400 ตั้งแต่หน้า route.",
    ],
    reviewNotes: [
      "route คือด่านแรกของข้อมูลจากผู้ใช้ ตอนรีวิวให้ดูว่าข้อมูลถูก validate และแปลงเป็นค่าที่ app เชื่อถือได้แล้วหรือยัง ถ้าปล่อย raw body ผ่านไป สมมติฐาน (assumption) และ error response จะกระจายไปหลายชั้น.",
    ],
  },
  "express/async-route-error-forwarding": {
    codeComments: {
      goodCode: ["error ที่ throw จาก async handler จะถูกส่งต่อไป error handler กลาง"],
      badCode: ["promise ที่เริ่มไว้ไม่ได้ return หรือ catch ทำให้ Express ตาม error ไม่เจอ"],
    },
    title: "ส่ง error จาก async route ให้ถึง error handler",
    summary: "งาน async ที่ล้มเหลวต้อง `throw`, `return` หรือ `catch` ให้ชัด เพื่อให้ Express รู้ว่าจะจบ request อย่างไร.",
    takeaways: ["async route ต้องมีทางส่ง error ไปถึง error middleware เสมอ."],
    whatToReview: [
      "โค้ดที่ดีใช้ async handler และ throw error เพื่อให้ error handler กลางรับต่อ.",
      "โค้ดที่ควรปรับเริ่ม promise เองโดยไม่ return หรือ catch ทำให้ Express ไม่รู้ว่า error จาก service เกิดขึ้น และ request อาจค้าง.",
    ],
    reviewNotes: [
      "Express 5 ส่ง promise ที่ reject จาก async handler ไป error middleware ได้ แต่ promise ที่สร้างแล้วไม่ return ยังต้อง catch เอง. ตอนรีวิวให้ไล่ว่างาน async ทุกชิ้นมีทางจบทั้งสำเร็จและล้มเหลว.",
    ],
  },
  "express/central-error-handler": {
    codeComments: {
      goodCode: ["ถ้า headers ถูกส่งไปแล้ว อย่าส่ง response ซ้ำ"],
      badCode: ["แต่ละ route สร้างรูปแบบ error และ status code เอง"],
    },
    title: "รวม error handler ไว้จุดเดียว",
    summary: "รวมการแปลง error เป็น HTTP response ไว้ที่เดียว เพื่อให้ status code, log และ body สม่ำเสมอ.",
    takeaways: ["error handler กลางช่วยให้ client และคนอ่าน log คาดเดารูปแบบ error ได้ง่ายขึ้น."],
    whatToReview: [
      "โค้ดที่ดีมี `ErrorRequestHandler` ที่เช็ก `headersSent`, แปลง validation error และซ่อนรายละเอียด error ที่ไม่ควรส่งให้ client.",
      "โค้ดที่ควรปรับ catch error ซ้ำในหลาย route และตอบ status/body คนละแบบ ทั้งที่เป็นกรณีผิดพลาดคล้ายกัน.",
    ],
    reviewNotes: [
      "ถ้าเห็น catch block ซ้ำ ๆ ใน route หลายจุด มักแปลว่า error handler กลางยังไม่ชัดพอ ความไม่สม่ำเสมอทำให้ client เขียนยาก และเวลา production พังจะไล่สาเหตุยากขึ้น.",
    ],
  },
  "express/response-shape-consistency": {
    codeComments: {
      goodCode: ["helper เล็ก ๆ ทำให้รูปแบบ response คงที่"],
      badCode: ["endpoint ใน API เดียวกันบังคับให้ client อ่าน response คนละแบบ"],
    },
    title: "ตอบ response รูปแบบเดียวกัน",
    summary: "ตอบ success และ error ด้วยรูปแบบที่เดาได้ เช่น `{ data }` หรือ `{ error }` เหมือนกันทุก route.",
    takeaways: ["client ไม่ควรต้องจำวิธีอ่าน response แยกตามแต่ละ route."],
    whatToReview: [
      "โค้ดที่ดีมี helper สำหรับ `ok`, `created` และ `fail` ทำให้ response สำเร็จและ error มีหน้าตาคงที่.",
      "โค้ดที่ควรปรับตอบ array, object, string และ object ซ้อนคนละแบบใน endpoint ของ API ชุดเดียวกัน.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้เทียบ response body ของ endpoint ใกล้กัน ถ้าหน้าตา response เปลี่ยนไปเรื่อย ๆ ความซับซ้อนจะไปตกที่ client, test และเอกสาร API.",
    ],
  },
  "express/auth-middleware-boundaries": {
    codeComments: {
      goodCode: ["middleware แปลง credential (ข้อมูลยืนยันตัวตน) เป็นข้อมูลผู้ใช้ที่ route ใช้ต่อได้"],
      badCode: ["ตรวจตัวตน เช็กสิทธิ์ และงานหลักถูกปนอยู่ใน route เดียว"],
    },
    title: "แยกการตรวจตัวตน (auth) ไว้ใน middleware",
    summary: "ให้ middleware ตรวจ token/session ครั้งเดียว แล้วส่งข้อมูลผู้ใช้ที่ตรวจแล้วให้ route ใช้ต่อ.",
    takeaways: ["route ควรใช้ข้อมูลผู้ใช้ที่ตรวจแล้ว ไม่ควรอ่าน token/session ซ้ำเองทุก endpoint."],
    whatToReview: [
      "โค้ดที่ดีให้ `requireUser` อ่าน session แล้วเก็บ user id/role ใน `res.locals` ให้ route ถัดไปใช้.",
      "โค้ดที่ควรปรับอ่าน authorization header ใน route แล้วทำการตรวจตัวตน เช็กสิทธิ์ และงานหลักใน handler เดียว.",
    ],
    reviewNotes: [
      "การตรวจตัวตนควรมีที่อยู่ชัดเจนและตอบกรณีล้มเหลวแบบคงที่ ถ้าแต่ละ route เขียน auth เอง พฤติกรรม auth จะเพี้ยนจากกันง่ายและเพิ่มความเสี่ยงด้าน security.",
    ],
  },
  "express/rate-limiting-trust-proxy": {
    title: "จำกัด request และตั้งค่า trust proxy ให้ตรง deployment",
    codeComments: {
      goodCode: ["เชื่อ proxy ตามจำนวนชั้นที่ deployment ใช้จริง"],
      badCode: ["เชื่อ proxy ทุกชั้น (hop) ทำให้ปลอม IP เพื่อเลี่ยง limit ได้ง่ายขึ้น"],
    },
    summary: "ถ้าจำกัดจำนวน request ด้วย IP ต้องบอก Express ว่าควรเชื่อ proxy กี่ชั้น (`trust proxy`) ตามระบบที่ deploy จริง ไม่อย่างนั้น IP ที่เห็นอาจไม่น่าเชื่อถือ.",
    takeaways: ["rate limiting ควรอิง IP/client ที่เชื่อถือได้ โดยเฉพาะแอปที่อยู่หลัง proxy."],
    whatToReview: [
      "โค้ดที่ดีตั้ง `trust proxy` เป็นจำนวนชั้น proxy ที่ชัดเจน และกำหนด rate limit ที่มีผลจริง.",
      "โค้ดที่ควรปรับ trust proxy ทุกชั้น และตั้ง limit สูงมากจน rate limit นี้แทบไม่ช่วยป้องกันอะไร.",
    ],
    reviewNotes: [
      "security middleware ต้องดูคู่กับวิธี deploy เสมอ ตอนรีวิวให้ถามว่า Express เห็น IP ของผู้ใช้จริงหรือ IP ของ proxy และกติกานี้กันการยิง request เกินได้จริงไหม.",
    ],
  },
  "express/business-logic-out-of-routes": {
    codeComments: {
      goodCode: ["route แค่แปลงข้อมูล HTTP ไปเรียกขั้นตอน approve"],
      badCode: ["การอ่าน database, กฎ approve และ notification ถูกซ่อนไว้ใน handler เดียว"],
    },
    title: "อย่าให้ route แบก logic งานหลักทั้งหมด",
    summary: "route handler ควรรับ request และส่ง response ส่วนกฎของระบบ เช่น ใคร approve ได้ ต้อง update database อะไร และต้องส่ง notification ไหม ควรอยู่ใน service หรือ workflow.",
    takeaways: ["route ควรแปลง HTTP เป็นการเรียกงานหลักของแอป ไม่ใช่เก็บขั้นตอนทั้งหมดไว้ใน handler."],
    whatToReview: [
      "โค้ดที่ดีให้ route ส่ง reviewId และ approverId ไปเรียก workflow ที่รับผิดชอบขั้นตอน approve.",
      "โค้ดที่ควรปรับให้ route อ่าน database, เช็กกฎว่า approve ได้ไหม, update และส่ง notification เองทั้งหมด.",
    ],
    reviewNotes: [
      "route handler ควรอ่านคร่าว ๆ แล้วเข้าใจเร็ว แม้งานหลักจะซับซ้อน ถ้ากฎของระบบซ่อนอยู่ใน Express handler จะใช้ซ้ำยาก test ยาก และจัด transaction ให้ถูกต้องยาก.",
    ],
  },
  "sql/schema-keys-constraints": {
    codeComments: {
      goodCode: ["key และ constraint ให้ database ช่วยคุมกฎข้อมูลหลัก"],
      badCode: ["ขาด constraint ทำให้ข้อมูลผิดหลุดเข้า database ได้"],
    },
    title: "ให้ database ช่วยกันข้อมูลผิด",
    summary: "ใช้ key และ constraint ให้ database ช่วยกันข้อมูลซ้ำ ข้อมูลกำพร้า และสถานะที่ผิด เช่น primary key, foreign key, UNIQUE, NOT NULL และ CHECK.",
    takeaways: ["กฎข้อมูลที่แอปพึ่งพาควรมี constraint ใน database ช่วยคุม ไม่ใช่หวังให้โค้ดทุกจุดจำได้."],
    whatToReview: [
      "โค้ดที่ดีบอก id ของแถว, email ที่ห้ามซ้ำ, ความสัมพันธ์ระหว่าง user กับ review, field ที่ต้องมี และ status ที่อนุญาตไว้ใน database ชัดเจน.",
      "โค้ดที่ควรปรับปล่อยให้ข้อมูลสำคัญหลุดได้ง่าย เช่น user ซ้ำ, review ไม่มีเจ้าของ, status แปลก ๆ หรือวันที่เก็บคนละ format.",
    ],
    reviewNotes: [
      "เวลารีวิว SQL ให้เริ่มจาก schema ก่อน ถ้าแอปถือว่าค่าหนึ่งต้องมีหรือความสัมพันธ์หนึ่งต้องมีอยู่ database ก็ควรช่วย enforce ด้วย constraint ไม่ใช่ปล่อยให้เป็นความหวังในโค้ดฝั่งแอป.",
    ],
  },
  "sql/explicit-select-columns": {
    codeComments: {
      goodCode: ["คืนเฉพาะ field ที่หน้าจอหรือ API นี้ต้องใช้"],
      badCode: ["SELECT * ทำให้รูปร่าง table และชื่อ column ที่ชนกันหลุดออกมา"],
    },
    title: "ระบุ column ใน SELECT ให้ชัด",
    summary: "เลือกเฉพาะ column ที่โค้ดฝั่งเรียกใช้ต้องใช้ แทนการ `SELECT *` แล้วเอาทุกอย่างจาก table ออกมา.",
    takeaways: ["ผลลัพธ์ของ query คือสัญญากับโค้ดที่เอาไปใช้ (API contract) รูปร่างของมันจึงควรถูกเลือกอย่างตั้งใจ."],
    whatToReview: [
      "โค้ดที่ดีระบุ column และ alias ที่ต้องส่งกลับ ทำให้โค้ดที่อ่านผลลัพธ์รู้แน่ว่าจะได้ field อะไร.",
      "โค้ดที่ควรปรับใช้ `SELECT *` จน column จากหลาย table หลุดออกมา เสี่ยงชื่อ column ชนกัน และพังง่ายเมื่อ schema เปลี่ยน.",
    ],
    reviewNotes: [
      "`SELECT *` เหมาะกับการลองสำรวจข้อมูล แต่ไม่เหมาะเป็น contract ใน production ตอนรีวิวให้ถามว่าทุก column ที่ส่งกลับจำเป็นจริงไหม และถ้า table เพิ่ม column ใหม่ โค้ดที่อ่านผลลัพธ์จะได้รับผลกระทบหรือเปล่า.",
    ],
  },
  "sql/filtering-null-handling": {
    codeComments: {
      goodCode: ["IS NULL และวงเล็บทำให้ filter ของข้อมูล nullable ชัดเจน"],
      badCode: ["= NULL และ OR ที่ไม่ครอบวงเล็บไม่ตรงกับข้อมูล nullable"],
    },
    title: "เช็ก NULL ใน WHERE ให้ถูก",
    summary: "ใช้ `IS NULL` / `IS NOT NULL` แทน `=` หรือ `!=` และใส่วงเล็บกับ AND/OR ให้ชัด เพื่อให้ filter ตรงกับข้อมูลจริง.",
    takeaways: ["NULL ไม่เท่ากับอะไรเลย แม้แต่ NULL ด้วยกัน ดังนั้นเงื่อนไขที่เกี่ยวกับ nullable column ต้องรีวิวละเอียดเป็นพิเศษ."],
    whatToReview: [
      "โค้ดที่ดีใช้ `IS NULL` และครอบ OR ด้วยวงเล็บ ทำให้ row ที่ถูกลบไม่หลุดเข้ามาในผลลัพธ์.",
      "โค้ดที่ควรปรับเทียบ NULL ด้วย `=` หรือ `!=` และพึ่งลำดับ AND/OR ที่อ่านยาก ทำให้ได้ row ผิดหรือไม่ได้ row เลย.",
    ],
    reviewNotes: [
      "nullable column เปลี่ยนพฤติกรรมของ WHERE ได้มาก ตอนรีวิวให้ไล่ AND/OR พร้อมวงเล็บ และถามให้ชัดว่า NULL ควรถูกรวมเข้ามาหรือถูกตัดออกจากผลลัพธ์.",
    ],
  },
  "sql/join-cardinality": {
    codeComments: {
      goodCode: ["นับ comment ก่อน เพื่อให้ review หนึ่งรายการยังออกมาหนึ่งแถว"],
      badCode: ["JOIN comment ตรง ๆ ทำให้หนึ่ง review กลายเป็นหลายแถว"],
    },
    title: "JOIN แล้วจำนวนแถวอาจเปลี่ยน",
    summary: "ก่อนเชื่อผลลัพธ์ ให้เช็คว่า JOIN นี้ควรได้หนึ่งแถวต่อหนึ่ง review หรือจะทำให้แถวเพิ่ม/หายได้.",
    takeaways: ["JOIN เปลี่ยนจำนวน row ได้ จึงต้องรีวิวความสัมพันธ์ก่อนดู column ที่ SELECT."],
    whatToReview: [
      "โค้ดที่ดีสรุปจำนวน comment ก่อน แล้วใช้ LEFT JOIN เพื่อให้ review ที่ไม่มี comment ยังออกมาหนึ่งแถว.",
      "โค้ดที่ควรปรับ JOIN ไปที่ table ฝั่ง many ตรง ๆ ทำให้ review หนึ่งรายการกลายเป็นหลายแถวตามจำนวน comment และ review ที่ไม่มี comment หายไป.",
    ],
    reviewNotes: [
      "ก่อน approve JOIN ให้ถามก่อนว่าผลลัพธ์ควรมีกี่ row ต่อ review ถ้าหน้าจอคาดหวังหนึ่งแถวต่อหนึ่ง review แต่ query JOIN ฝั่ง many ตรง ๆ นั่นคือจุดที่ควรหยุดดู.",
    ],
  },
  "sql/aggregation-grouping": {
    codeComments: {
      goodCode: ["มิติที่ SELECT ตรงกับคำถามที่ GROUP BY ต้องตอบ"],
      badCode: ["submitted_at ถูก SELECT แต่ไม่ใช่ส่วนหนึ่งของการ group"],
    },
    title: "สรุปข้อมูลด้วย GROUP BY ให้ตรงคำถาม",
    summary: "ก่อน GROUP BY ให้พูดคำถามเป็นภาษาคน เช่น “นับ review รายวันแยกตาม status” แล้ว group ตามวันและ status จริง ๆ.",
    takeaways: ["ค่าที่ SELECT แต่ไม่ได้ aggregate ควรเป็นส่วนหนึ่งของคำถามที่ต้องการสรุปผล."],
    whatToReview: [
      "โค้ดที่ดีนับจำนวนตามวันและ status ดังนั้นทั้งวันและ status จึงอยู่ใน SELECT, GROUP BY และ ORDER BY อย่างตั้งใจ.",
      "โค้ดที่ควรปรับผสม timestamp ดิบกับ count ที่ group แค่ status ซึ่งบาง database จะ error และบางกรณีอาจให้ค่าที่ทำให้เข้าใจผิด.",
    ],
    reviewNotes: [
      "aggregation ควรตอบคำถามที่ชัดเจน ตอนรีวิวให้เขียนคำถามนั้นเป็นภาษาคนก่อน แล้วเช็กว่า GROUP BY ตรงกับคำถามจริงไหม ถ้าคำถามคือรายวันแยก status ทั้งสองอย่างต้องอยู่ใน group.",
    ],
  },
  "sql/index-friendly-predicates": {
    codeComments: {
      goodCode: ["เงื่อนไขแบบช่วงเวลายังเปิดทางให้ใช้ index บน submitted_at"],
      badCode: ["การ format column บังคับให้ database ทำงานกับทุก row"],
    },
    title: "เขียน WHERE ให้ database ใช้ index ได้",
    summary: "หลีกเลี่ยงการเอา function ไปครอบ column ที่มี index ถ้าไม่จำเป็น เพราะ database อาจต้องไล่อ่านทุก row.",
    takeaways: ["query ที่ให้ผลถูกต้องยังควรถูกรีวิว ถ้ามันทำให้ database ใช้ index สำคัญไม่ได้."],
    whatToReview: [
      "โค้ดที่ดีเขียนช่วงเวลาแบบ `>= start` และ `< nextStart` (half-open range) ทำให้ index บน submitted_at ยังช่วยค้นหาได้.",
      "โค้ดที่ควรปรับ format column ทุก row ก่อนเทียบค่า ถึงจะอ่านง่ายแต่โดยมากทำให้ database ใช้ index ปกติไม่ได้.",
    ],
    reviewNotes: [
      "performance review เริ่มจากรูปทรง query ไม่ใช่การเดา ถ้า WHERE แตะข้อมูลเยอะ ให้ดูว่าเงื่อนไขยังเปิดทางให้ database วิ่งผ่าน index ได้ไหม หรือบังคับให้ไล่อ่านทั้ง table.",
    ],
  },
  "sql/transactions-atomic-workflows": {
    codeComments: {
      goodCode: ["ทั้งสอง write ต้องสำเร็จหรือล้มไปพร้อมกัน"],
      badCode: ["ถ้าไม่มี transaction อาจ approve สำเร็จแต่บันทึก audit event ล้มเหลว"],
    },
    title: "ใช้ transaction กับงานที่ต้องสำเร็จพร้อมกัน",
    summary: "ครอบการเขียนหลาย step ด้วย transaction เพื่อให้งานที่เกี่ยวข้องกัน เช่น approve review และบันทึก audit log สำเร็จพร้อมกันหรือล้มพร้อมกัน.",
    takeaways: ["ถ้างานหนึ่งเขียนหลาย row เช่น approve review แล้วบันทึก audit log ต้องรีวิวว่า transaction เริ่มและจบตรงไหน."],
    whatToReview: [
      "โค้ดที่ดีมองการเปลี่ยน status และการบันทึก audit event เป็นงานเดียวกัน จึงอยู่ใน transaction เดียวกัน.",
      "โค้ดที่ควรปรับอาจ approve review แล้วบันทึก event ไม่สำเร็จ ทำให้ระบบมี review ที่ approved แต่ไม่มีประวัติอธิบายว่าเกิดอะไรขึ้น.",
    ],
    reviewNotes: [
      "transaction คือวิธีบอก database ว่างานชุดนี้ต้องสำเร็จหรือล้มเป็นก้อนเดียวกัน ตอนรีวิวให้ถามว่าถ้า query กลางทาง fail ระบบจะเหลือข้อมูลครึ่ง ๆ กลาง ๆ อะไรไว้.",
    ],
  },
  "sql/migration-backfills": {
    codeComments: {
      goodCode: ["เพิ่ม column ก่อน เติมข้อมูล row เก่า แล้วค่อยบังคับ NOT NULL"],
      badCode: ["ตั้ง NOT NULL ก่อน backfill อาจ fail กับ row ที่มีอยู่แล้ว"],
    },
    title: "เติมข้อมูลย้อนหลัง (backfill) ใน migration",
    summary: "แยกการเปลี่ยน schema, การเติมข้อมูลให้ row เดิม (backfill) และการใส่ constraint ที่เข้มขึ้นออกเป็น step ที่ปลอดภัย.",
    takeaways: ["migration ที่ดีต้องเคารพข้อมูลที่มีอยู่แล้ว ไม่ใช่คิดแค่ข้อมูลใหม่."],
    whatToReview: [
      "โค้ดที่ดีเพิ่ม column ก่อน เติมค่าของ row เดิม (backfill) แล้วค่อยตั้ง NOT NULL เมื่อข้อมูลพร้อม.",
      "โค้ดที่ควรปรับเพิ่ม column ที่ต้องมีค่า (required) ทันทีทั้งที่ row เดิมยังไม่มีค่า ทำให้ migration fail หรือถูกบังคับใช้ default ที่ไม่ปลอดภัย.",
    ],
    reviewNotes: [
      "รีวิว migration ไม่ใช่รีวิว syntax อย่างเดียว ต้องดูข้อมูลปัจจุบัน ขนาด table แผนย้อนกลับ (rollback) และแอปจะอยู่ได้ไหมระหว่างแต่ละ step.",
    ],
  },
  "sql/parameterized-queries": {
    codeComments: {
      goodCode: ["parameter ที่ bind แยกไว้กัน input ผู้ใช้ไม่ให้กลายเป็น SQL text"],
      badCode: ["การต่อ string ทำให้ input ผู้ใช้กลายเป็นข้อความ SQL"],
    },
    title: "ใช้ parameterized query แทนการต่อ string",
    summary: "ส่ง input ของผู้ใช้เป็น parameter ที่ bind แยกจาก SQL text แทนการเอาค่าที่ไม่น่าเชื่อถือไปต่อเป็น string SQL.",
    takeaways: ["input ของผู้ใช้ควรเป็นข้อมูลของ query ไม่ใช่กลายเป็นข้อความ SQL."],
    whatToReview: [
      "โค้ดที่ดีทำให้ SQL text คงที่ แล้วส่ง email เป็น parameter ที่ database bind แยกต่างหาก.",
      "โค้ดที่ควรปรับเอา input ไปต่อใน query string โดยตรง ทำให้ค่าที่มี quote หรือ SQL syntax เปลี่ยนคำสั่งที่ database รันได้.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้มองหา string concatenation, template interpolation และ manual escaping รอบ SQL ก่อนเลย การ bind parameter ควรเป็นนิสัยพื้นฐาน.",
    ],
  },
  "sql/stable-pagination": {
    codeComments: {
      goodCode: ["cursor ใช้ทั้งเวลาและ id เพื่อเริ่มหน้าถัดไปได้มั่นคง"],
      badCode: ["OFFSET อาจเลื่อนเมื่อมี row ใหม่เข้ามาระหว่างโหลดหน้า"],
    },
    title: "แบ่งหน้าให้เลื่อนต่อแล้วรายการไม่ซ้ำ/ไม่หาย",
    summary: "เวลาโหลดหน้าถัดไป ต้องมีลำดับที่แน่นอนและ cursor บอกตำแหน่งต่อ เพื่อให้รายการไม่ซ้ำหรือหาย แม้มี row ใหม่เพิ่มเข้ามาระหว่างที่ผู้ใช้กำลังเลื่อนดู.",
    takeaways: ["pagination ต้องมี order ที่แน่นอนและใช้ต่อหน้าเดิมได้ ไม่ใช่มีแค่ LIMIT."],
    whatToReview: [
      "โค้ดที่ดีใช้ cursor จาก submitted_at และ id ทำให้ database รู้ว่าหน้าถัดไปต้องเริ่มต่อจากรายการไหน.",
      "โค้ดที่ควรปรับใช้ OFFSET กับ order ที่ไม่ unique เมื่อมี row ใหม่ page ก่อนหน้าจะเลื่อน ทำให้หน้าถัดไปอาจเห็นรายการเดิมซ้ำหรือข้ามบางรายการไป.",
    ],
    reviewNotes: [
      "OFFSET pagination อาจพอใช้กับหน้า admin เล็ก ๆ ที่ข้อมูลไม่ค่อยเปลี่ยน แต่ feed หรือรายการที่มีข้อมูลใหม่เข้ามาบ่อยควรถูกรีวิวเข้มกว่า ปกติ order ที่แน่นอนร่วมกับ cursor จะทนกว่า.",
    ],
  },
  "python/naming-and-readability": {
    title: "ตั้งชื่อให้บอกเจตนาของโค้ด",
    summary: "ใช้ชื่อฟังก์ชันและชื่อตัวแปรที่บอกงานจริง เช่น คิดคะแนน review หรือรวมสถานะ แทนตัวย่อที่ต้องเดา.",
    takeaways: ["ชื่อที่ดีทำให้คนรีวิวเข้าใจเจตนาก่อนอ่านรายละเอียดข้างใน."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อฟังก์ชันและค่ากลางให้บอกว่ากำลังคิดคะแนน review จากจำนวน comment และ approval.",
      "โค้ดที่ควรปรับใช้ชื่อสั้นอย่าง calc, x, a, b ทำให้ต้องไล่อ่านทุกบรรทัดก่อนรู้ว่าคำนวณอะไร.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ถามว่า teammate ใหม่พอเดาหน้าที่ของฟังก์ชันจากชื่อได้ไหม ถ้าต้องเปิดหลายบรรทัดเพื่อแปลชื่อตัวแปร แปลว่าชื่อยังช่วยไม่พอ.",
    ],
    codeComments: {
      goodCode: ["ชื่อบอกว่าคะแนน review คิดจากสัญญาณอะไรบ้าง."],
      badCode: ["ชื่อสั้นทำให้ reviewer ต้องแปลความหมายของงานก่อน."],
    },
  },
  "python/truthy-falsy-none-checks": {
    title: "แยก None ออกจากค่าว่างที่ตั้งใจส่งมา",
    summary: "ถ้า None แปลว่าไม่มีค่า แต่ \"\" หรือ 0 ยังเป็นค่าที่ผู้ใช้ตั้งใจส่งมา ให้เช็กด้วย is None ไม่ใช่ if value.",
    takeaways: ["ใช้ is None เมื่อ “ไม่ได้ส่งค่า” ต่างจาก “ส่งค่าว่าง”."],
    whatToReview: [
      "โค้ดที่ดีมอง None เป็นกรณีไม่มี nickname และยังเก็บ nickname ว่างที่ผู้ใช้ตั้งใจส่งมาได้.",
      "โค้ดที่ควรปรับมองทุกค่า falsy เป็น missing ทำให้ empty string, 0, empty list หรือ False ถูกเปลี่ยนเป็นค่า fallback โดยไม่ตั้งใจ.",
    ],
    reviewNotes: [
      "truthy check ใช้ได้เมื่อค่าว่างแปลว่าใช้ไม่ได้จริง ๆ แต่ถ้าต้องแยก “ไม่ได้ส่งมา” ออกจาก “ส่งค่าว่างมา” ให้ใช้ is None หรือ is not None ให้ชัด.",
    ],
    codeComments: {
      goodCode: ["None แปลว่า caller ไม่ได้ส่ง nickname มา."],
      badCode: [
        "เงื่อนไขนี้ทำให้ \"\", 0, False และ None กลายเป็นกรณีเดียวกัน.",
      ],
    },
  },
  "python/mutable-default-arguments": {
    title: "อย่าใช้ list/dict เป็นค่า default ของฟังก์ชัน",
    summary: "ใน Python ค่า default ถูกสร้างครั้งเดียว ถ้า default เป็น list/dict เดิม ข้อมูลจาก call ก่อนอาจปนมารอบถัดไป.",
    takeaways: ["ถ้าต้องเริ่มด้วย list/dict ว่าง ให้ใช้ None แล้วสร้าง list/dict ใหม่ในฟังก์ชัน."],
    whatToReview: [
      "โค้ดที่ดีสร้าง list ใหม่เฉพาะตอน caller ไม่ได้ส่ง tags มา.",
      "โค้ดที่ควรปรับใช้ list default เดียวกันซ้ำทุก call ทำให้ tag จาก request หรือ test ก่อนหน้าปนเข้ามาได้.",
    ],
    reviewNotes: [
      "ตอนรีวิว signature ให้มองหา [], {} หรือ set() เป็น default ก่อนอ่าน body เพราะเป็นจุดที่ทำให้ state รั่วข้าม call ได้ง่าย.",
    ],
    codeComments: {
      goodCode: ["สร้าง list ใหม่เฉพาะตอน caller ไม่ได้ส่ง tags มา."],
      badCode: ["list default นี้ถูกใช้ซ้ำทุกครั้งที่เรียกฟังก์ชัน."],
    },
  },
  "python/list-dict-comprehensions": {
    title: "ใช้ comprehension เมื่ออ่านได้ในบรรทัดเดียว",
    summary: "ใช้ list/dict comprehension กับการ filter/map ที่ตรงไปตรงมา แต่ถ้ามี if ซ้อนหลายชั้นหรือ side effect ให้ใช้ loop ที่ตั้งชื่อดี.",
    takeaways: ["comprehension ควรทำให้อ่านเร็วขึ้น ไม่ใช่บีบ logic ซับซ้อนให้อยู่บรรทัดเดียว."],
    whatToReview: [
      "โค้ดที่ดีกรอง user ที่ active และมี email แล้วแปลง email เป็นตัวพิมพ์เล็กในรูปที่อ่านได้ทันที.",
      "โค้ดที่ควรปรับซ่อนงานง่าย ๆ ไว้ใน if ซ้อนหลายชั้น จนต้องไล่อ่านโครงสร้างก่อนเห็นว่าต้องการ list ของ email.",
    ],
    reviewNotes: [
      "ถ้าอ่าน comprehension แล้วพูดเป็นประโยคง่าย ๆ ได้ว่า “กรองอะไร แล้วแปลงเป็นอะไร” ถือว่าเหมาะ ถ้าเริ่มมีหลายเงื่อนไขหรือมี side effect ให้แตกเป็น loop จะรีวิวง่ายกว่า.",
    ],
    codeComments: {
      goodCode: [
        "มีแค่หนึ่งเงื่อนไขกรองและหนึ่งการแปลงค่า จึงเหมาะกับ comprehension.",
      ],
      badCode: ["if ที่ซ้อนกันทำให้งาน filter-and-map ง่าย ๆ ดูซับซ้อนขึ้น."],
    },
  },
  "python/exception-boundaries": {
    title: "จับ error ที่คาดไว้ อย่ากลืนทุก error",
    summary: "จับเฉพาะ error ที่รู้ว่าจะเกิด เช่น ไฟล์หายหรือ JSON พัง แล้ว raise error ที่อ่านง่ายโดยเก็บ error เดิมไว้.",
    takeaways: ["except Exception กว้างเกินไป มักซ่อน bug ที่ควรเห็นตอนรีวิว."],
    whatToReview: [
      "โค้ดที่ดีจับ FileNotFoundError และ JSONDecodeError แล้ว raise SettingsError พร้อมสาเหตุเดิม เพื่อให้รู้ว่าโหลด config ไม่ได้เพราะอะไร.",
      "โค้ดที่ควรปรับ catch ทุกอย่างแล้วคืน config ว่าง ทำให้ permission error, bug ของโปรแกรม และ JSON พังเงียบหายเหมือนเป็น default ปกติ.",
    ],
    reviewNotes: [
      "เมื่อเห็น except Exception ให้ถามว่า error ไหนที่คาดไว้จริง ๆ ถ้าต้องการข้อความที่อ่านง่าย ให้ wrap เป็น error เฉพาะของงานนั้น พร้อมเก็บ original exception ไว้ด้วย from error.",
    ],
    codeComments: {
      goodCode: ["จุดนี้จับเฉพาะ error เรื่องไฟล์และ JSON ที่คาดไว้."],
      badCode: [
        "file handle ไม่ได้ถูกครอบด้วย with และ encoding ก็ไม่ชัด.",
        "การ catch ทุกอย่างทำให้ error จริงกลายเป็น default เงียบ ๆ.",
      ],
    },
  },
  "python/context-managers-files": {
    title: "เปิดไฟล์ด้วย with เพื่อให้ปิดไฟล์เสมอ",
    summary: "ใช้ context manager อย่าง with open(...) เพื่อให้ไฟล์หรือ resource ถูกปิด แม้งานข้างในจะเกิด error.",
    takeaways: ["โค้ดที่เปิดไฟล์ควรทำให้เห็นชัดว่าไฟล์จะถูกปิดทุก path."],
    whatToReview: [
      "โค้ดที่ดีใช้ with เพื่อกำหนดขอบเขตของไฟล์ ใส่ encoding และปิดไฟล์แม้การเขียน row ใด row หนึ่งจะล้ม.",
      "โค้ดที่ควรปรับพึ่ง close() เอง ถ้าเกิด exception ใน loop ไฟล์อาจค้างเปิด และ encoding จะขึ้นกับเครื่องที่รัน.",
    ],
    reviewNotes: [
      "context manager ไม่ใช่แค่ style แต่เป็นวิธีทำให้ cleanup เห็นชัดในโค้ด คนรีวิวจึงมั่นใจได้ว่าไฟล์จะถูกปิดแม้งานตรงกลางล้ม.",
    ],
    codeComments: {
      goodCode: ["with จะปิดไฟล์ให้เสมอ แม้เขียน row แล้วเกิด error."],
      badCode: ["ถ้าเกิด exception ก่อน close ไฟล์อาจค้างเปิดอยู่."],
    },
  },
  "python/dataclasses-data-shapes": {
    title: "ใช้ dataclass แทน dict ที่ key กำกวม",
    summary: "เมื่อข้อมูลภายในแอปมี field คงที่ ให้ใช้ dataclass เพื่อเห็นชื่อ field, default และการเปรียบเทียบชัดกว่า dict หลวม ๆ.",
    takeaways: ["รูปข้อมูลที่มีชื่อช่วยให้คนรีวิวรู้ว่า object นี้ควรมี field อะไร."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ ReviewSummary และประกาศทุก field ชัดเจนว่า review_id, title และ approved คืออะไร.",
      "โค้ดที่ควรปรับคืน dict ที่ key กำกวม ทำให้ caller ต้องจำเองว่า name และ ok หมายถึงอะไร และพิมพ์ key ผิดจะเจอช้า.",
    ],
    reviewNotes: [
      "dict เหมาะกับจุดรับส่ง JSON แต่ข้อมูลภายในแอปที่ใช้ซ้ำหลายจุดมักอ่านง่ายกว่าเมื่อเป็น dataclass เพราะชื่อ field และ default อยู่ตรงหน้า.",
    ],
    codeComments: {
      goodCode: ["รูปข้อมูลที่มีชื่อทำให้เห็น field ที่คืนออกมาชัดเจน."],
      badCode: ["key ของ dict ที่กำกวมทำให้ caller เข้าใจรูปข้อมูลผิดได้ง่าย."],
    },
  },
  "python/type-hints-boundaries": {
    title: "ใส่ type hint ตรงจุดรับเข้าและส่งออก",
    summary: "ใส่ type hint ที่ parameter, return value และ shared model เพื่อให้คนรีวิวเห็นว่าข้อมูลเข้าออกควรเป็นชนิดไหน.",
    takeaways: ["type hint มีค่าที่สุดตรงจุดที่โค้ดอื่นเรียกใช้ ไม่ใช่ใส่ทุก local variable."],
    whatToReview: [
      "โค้ดที่ดีบอกชนิด payload ที่รับและคืน object ที่มีชื่อพร้อม field ที่ typed.",
      "โค้ดที่ควรปรับรับและคืนอะไรก็ได้ ทำให้คนรีวิวไม่เห็นว่า author_id ควรเป็น string, number หรือ optional.",
    ],
    reviewNotes: [
      "ไม่จำเป็นต้อง type ทุกบรรทัดเพื่อให้ได้ประโยชน์ ให้รีวิวจุดที่ข้อมูลข้ามจากฟังก์ชันหนึ่งไปอีกฟังก์ชันหนึ่งก่อน เช่น parameter, return value และ shared data model.",
    ],
    codeComments: {
      goodCode: ["type ตรง boundary บอก caller ว่ารับอะไรและคืนอะไร."],
      badCode: ["input และ output ที่ไม่ typed ทำให้ caller ต้องเดาสัญญาของฟังก์ชัน."],
    },
  },
  "python/dependency-injection-testability": {
    title: "ส่ง dependency เข้ามาเพื่อให้ test ใส่ fake ได้",
    summary: "ส่ง mailer หรือ API client เข้ามาเป็น argument แทนการ import global ตรง ๆ เพื่อให้ test ใส่ fake แล้วตรวจ behavior ได้.",
    takeaways: ["dependency ที่ส่งเข้ามาชัดเจนทำให้ side effect เห็นได้ และ test ไม่ต้อง patch global module."],
    whatToReview: [
      "โค้ดที่ดีรับ mailer เป็น dependency test จึงส่ง fake mailer แล้วตรวจได้ว่ามีการส่งอีเมลถูกคน ถูกหัวข้อ และถูกข้อความ.",
      "โค้ดที่ควรปรับ import function ที่ส่งอีเมลตรง ๆ ทำให้ test ต้อง patch path ให้ถูก และการพึ่งพาใน production ถูกซ่อนอยู่.",
    ],
    reviewNotes: [
      "dependency injection ไม่จำเป็นต้องเป็น framework ใน Python แค่ส่ง object ที่ต้องใช้งานจริง เช่น mailer หรือ client เป็น argument ก็มักพอให้โค้ด test ง่ายขึ้น.",
    ],
    codeComments: {
      goodCode: ["test ส่ง fake mailer เข้ามาแล้วตรวจข้อความได้."],
      badCode: ["sender แบบ global ทำให้ test ต้อง patch import path ให้ถูก."],
    },
  },
  "python/async-await-boundaries": {
    title: "เรียก async แล้วต้อง await ให้ได้ข้อมูลจริง",
    summary: "การเรียก async function จะได้ coroutine ที่ยังไม่เสร็จ ต้อง await หรือ gather ให้ชัด ไม่อย่างนั้น caller อาจได้ object ที่ไม่ใช่ข้อมูลจริง.",
    takeaways: ["async function ไม่ได้ทำงานจนเสร็จเอง แค่สร้างงานที่ต้อง await."],
    whatToReview: [
      "โค้ดที่ดีรวบรวม async call ที่เป็นอิสระ แล้ว await พร้อมกันด้วย asyncio.gather เพื่อได้ profile data จริง.",
      "โค้ดที่ควรปรับคืน coroutine object แทน profile data ทำให้ caller ได้ค่าที่งง และ I/O ที่ตั้งใจไว้อาจไม่เสร็จเลย.",
    ],
    reviewNotes: [
      "เวลารีวิว async Python ให้ไล่ทุก coroutine ว่าถูก await, ถูก return อย่างตั้งใจให้ caller await ต่อ หรือถูก schedule โดยมี owner ชัดเจน.",
    ],
    codeComments: {
      goodCode: ["รวม async call ที่ไม่พึ่งกัน เพื่อให้ผลลัพธ์เป็นข้อมูลจริง."],
      badCode: ["ตรงนี้เก็บ coroutine object ไม่ใช่ profile ที่ดึงมาแล้ว."],
    },
  },
  "php/strict-types-and-return-types": {
    title: "ระบุ type ของฟังก์ชันให้ชัด",
    summary: "ใช้ declare(strict_types=1), parameter type และ return type เพื่อให้ฟังก์ชันบอกชัดว่ารับจำนวนเงินเป็น int และคืน int ไม่ปล่อยให้ string จาก form ถูกบวกแบบเดา.",
    takeaways: ["strict_types ช่วยจับการแปลง type ที่ไม่ตั้งใจ แต่ยังต้อง validate ค่าธุรกิจ เช่น ห้ามจำนวนเงินติดลบ."],
    whatToReview: [
      "โค้ดที่ดีประกาศ strict typing ตั้งชื่อหน่วยเงินเป็น cents คืน int ชัดเจน และ reject ค่าติดลบก่อนคำนวณ.",
      "โค้ดที่ควรปรับปล่อยค่า $_POST ที่ยังเป็น string เข้า function ที่ไม่มี type ทำให้ต้องเดาว่า string, float, ค่าติดลบ หรือ field ที่หายไป valid ไหม.",
    ],
    reviewNotes: [
      "เวลารีวิวฟังก์ชัน PHP สำคัญ ให้ดูจาก signature ก่อนว่าอ่านรู้ไหมว่ารับอะไร คืนอะไร แล้วค่อยดู validation ใน body.",
    ],
    codeComments: {
      goodCode: ["strict types ทำให้ค่า cents ยังเป็น int ที่ขอบฟังก์ชัน."],
      badCode: ["ค่าจาก request ที่ไม่ typed เปิดทางให้ PHP แปลง string ตอนคำนวณ."],
    },
  },
  "php/input-validation-filtering": {
    title: "ตรวจ $_GET/$_POST ก่อนใช้ต่อ",
    summary: "ค่าจาก request เช่น $_GET และ $_POST เป็นค่าดิบจากผู้ใช้ ต้อง validate และแปลงเป็นชนิดที่ใช้ได้ก่อนส่งเข้า query/service/template.",
    takeaways: ["หลังผ่านจุดรับข้อมูลแล้ว โค้ดด้านในควรได้ค่าที่ตรวจแล้ว ไม่ต้องกลับไปอ่าน $_GET/$_POST ซ้ำ."],
    whatToReview: [
      "โค้ดที่ดีอ่านค่า order_id จาก request แล้วตรวจว่าเป็น positive integer ถ้าไม่ผ่านก็หยุดด้วย HTTP 400 ที่ชัดเจน.",
      "โค้ดที่ควรปรับดึงจาก $_GET โดยตรง แยก missing กับ invalid ไม่ชัด และส่งค่าดิบลึกเข้าไปใน application.",
    ],
    reviewNotes: [
      "ให้ถามว่าค่านี้มาจาก user หรือไม่ ถ้าใช่ควรเห็น check ใกล้จุดรับ request ว่า missing, invalid และ valid แยกกันชัด.",
    ],
    codeComments: {
      goodCode: ["ตรวจและแปลงค่าที่ขอบระบบก่อนนำไปใช้ต่อ."],
      badCode: ["ค่า $_GET ดิบทำให้ missing, invalid และ empty ปนกัน."],
    },
  },
  "php/output-escaping-xss": {
    title: "escape ตอน echo เพื่อกัน XSS",
    summary: "ค่าจาก user หรือ database ถ้าจะ render ลง HTML ต้อง escape ก่อน ไม่อย่างนั้นข้อความธรรมดาอาจถูก browser ตีเป็น tag หรือ script.",
    takeaways: ["prepared statement กัน SQL injection แต่ไม่ได้กัน XSS ตอนแสดงผล HTML."],
    whatToReview: [
      "โค้ดที่ดีใช้ helper e() ครอบ htmlspecialchars เพื่อ escape text ที่จะใส่ลง HTML รวมถึง quote และ byte ที่ไม่ถูกต้อง.",
      "โค้ดที่ควรปรับ echo ค่า database หรือ $_GET ตรง ๆ ถ้าค่านั้นมี HTML หรือ script browser จะตีความเป็น markup.",
    ],
    reviewNotes: [
      "ดูตำแหน่งที่ค่าถูกใส่ลง HTML ด้วย: text ใช้ htmlspecialchars, attribute ต้อง escape ให้เหมาะกับ attribute และ JavaScript context ต้องใช้วิธีอีกแบบ.",
    ],
    codeComments: {
      goodCode: ["escape ข้อความก่อนให้ browser ตีความเป็น HTML."],
      badCode: ["การ echo ตรง ๆ เท่ากับเชื่อว่า user content เป็น HTML ที่ปลอดภัย."],
    },
  },
  "php/pdo-prepared-statements": {
    title: "ใช้ PDO prepared statement แทนต่อ SQL เอง",
    summary: "ให้ SQL เป็นโครงคำสั่งเดิม และ bind ค่าจากผู้ใช้เป็น data ผ่าน placeholder ไม่เอา string จาก request ไปต่อใน SQL โดยตรง.",
    takeaways: ["prepared statement ทำให้เห็นชัดว่าอะไรคือ SQL และอะไรคือข้อมูลที่ผู้ใช้ส่งมา."],
    whatToReview: [
      "โค้ดที่ดี prepare SQL, bind email เป็น data, เลือก column ชัด และจัดการกรณีไม่เจอ row.",
      "โค้ดที่ควรปรับเอา email จาก $_GET ไปต่อใน SQL string และ SELECT * ทำให้ไม่มั่นใจทั้งความปลอดภัยและรูปข้อมูลที่ส่งกลับ.",
    ],
    reviewNotes: [
      "ตอนรีวิว query ให้มองหา placeholder เช่น :email และดูว่า execute ส่งค่าเข้าไปเป็น data หรือไม่ ถ้าเห็น '$email' อยู่ใน SQL string ให้ระวังทันที.",
    ],
    codeComments: {
      goodCode: ["placeholder แยกโครง SQL ออกจากข้อมูลของผู้ใช้."],
      badCode: ["การต่อค่าจาก request เข้า SQL ทำให้ขอบ query ไม่น่าไว้ใจ."],
    },
  },
  "php/password-hashing-verification": {
    title: "ใช้ password_hash/password_verify กับรหัสผ่าน",
    summary: "รหัสผ่านต้องใช้ API ที่ออกแบบมาเพื่อ password เช่น password_hash และ password_verify อย่าใช้ md5/sha1 หรือกฎ hash ที่เขียนเอง.",
    takeaways: ["hash สำหรับ password ต้องช้าและอัปเกรดได้ ไม่ใช่ fast hash ทั่วไป."],
    whatToReview: [
      "โค้ดที่ดีพึ่ง PHP password API ซึ่งเก็บ algorithm และ cost ไว้ใน hash และบอกได้เมื่อควร rehash.",
      "โค้ดที่ควรปรับใช้ md5 กับ password ซึ่งเร็วเกินไปและไม่ได้ออกแบบมาสำหรับการเก็บรหัสผ่าน.",
    ],
    reviewNotes: [
      "การรีวิว password ควรน่าเบื่อ ถ้าเจอ custom salt, md5, sha1, manual compare หรือ logic อัปเกรดเอง ให้หยุดถามเหตุผลก่อน.",
    ],
    codeComments: {
      goodCode: ["ให้ PHP เลือก algorithm และ cost ที่เหมาะกับ password ปัจจุบัน."],
      badCode: ["md5 เร็วเกินไปและไม่ได้ออกแบบมาเพื่อเก็บรหัสผ่าน."],
    },
  },
  "php/session-handling-cookies": {
    title: "ตั้ง session cookie และเปลี่ยน session id ตอน login",
    summary: "ตั้ง flag ของ session cookie ก่อน session_start และเรียก session_regenerate_id(true) ตอนผู้ใช้ login เพื่อไม่ใช้ session id เดิมต่อ.",
    takeaways: ["role หรือสิทธิ์ของผู้ใช้ต้องมาจากฝั่ง server ไม่ใช่ค่าที่ส่งมากับ request."],
    whatToReview: [
      "โค้ดที่ดีตั้ง cookie flag ก่อน start session และ regenerate session ID เมื่อ user sign in.",
      "โค้ดที่ควรปรับใช้ค่า default ของ cookie ไม่ rotate session ID และเชื่อ role จาก $_GET ซึ่งผู้ใช้แก้เองได้.",
    ],
    reviewNotes: [
      "ตอนรีวิว login/logout ให้ดู 3 จุด: cookie flag, การ rotate session id และค่าที่เขียนลง $_SESSION มาจากแหล่งที่เชื่อถือได้หรือไม่.",
    ],
    codeComments: {
      goodCode: ["ตั้งค่า cookie flag ก่อนเริ่ม session เสมอ."],
      badCode: ["role ที่ user ส่งมากับ request ไม่ควรถูกใช้เป็นสิทธิ์ใน session."],
    },
  },
  "php/error-handling-exceptions": {
    title: "จับ error ชั้นนอกสุด แล้วไม่โชว์ error ดิบ",
    summary: "จับ exception ที่ชั้นนอกสุดของ request, log รายละเอียดให้ developer ดู และตอบผู้ใช้ด้วยข้อความปลอดภัยแทนการส่ง stack/message จริงออกไป.",
    takeaways: ["ผู้ใช้ควรเห็นข้อความทั่วไป ส่วนรายละเอียด error ควรอยู่ใน log."],
    whatToReview: [
      "โค้ดที่ดีจับ failure ที่ชั้นนอกของ request, log path กับ exception และคืน HTTP 500 พร้อมข้อความทั่วไป.",
      "โค้ดที่ควรปรับผสม routing กับ include จาก $_GET และส่ง raw exception message ไปที่ browser.",
    ],
    reviewNotes: [
      "อย่าจับ error ลึกจนกลบสาเหตุ และอย่าโชว์ raw exception ให้ browser เห็น ถ้าจะจับที่ index/front controller ให้ log ให้พอ debug ได้.",
    ],
    codeComments: {
      goodCode: ["log รายละเอียดให้ developer แต่ตอบผู้ใช้ด้วยข้อความปลอดภัย."],
      badCode: ["request เลือกไฟล์ที่จะ include ได้ และ error ดิบถูกโชว์ออกไป."],
    },
  },
  "php/autoloading-and-namespaces": {
    title: "ใช้ namespace/autoload แทนไล่ require_once",
    summary: "ให้ class อยู่ใน namespace ที่บอกหมวดงาน และให้ autoload หาไฟล์ให้ แทนการพึ่งลำดับ require_once กับ global state.",
    takeaways: ["namespace ที่ดีช่วยให้เห็นว่า class นี้อยู่ส่วนไหนของระบบ และต้องพึ่ง class อะไร."],
    whatToReview: [
      "โค้ดที่ดีให้ class มี namespace, รับ UserRepository ผ่าน constructor และให้ autoloading เชื่อม file กับ class name.",
      "โค้ดที่ควรปรับพึ่งลำดับ include, global $db และ function ลอย ๆ ที่ตามยากว่ามาจากไฟล์ไหน.",
    ],
    reviewNotes: [
      "ถ้าคนรีวิวต้องไล่เปิด require_once หลายไฟล์เพื่อรู้ว่าฟังก์ชันมาจากไหน โครงสร้างยังช่วยไม่พอ.",
    ],
    codeComments: {
      goodCode: ["namespace และ constructor injection ทำให้เห็นเจ้าของโค้ดและ dependency."],
      badCode: ["manual include กับ global ซ่อนว่า dependency มาจากไหน."],
    },
  },
  "php/configuration-and-secrets": {
    title: "เก็บ secret ไว้ใน environment",
    summary: "รหัสผ่าน DB, token และค่า secret ควรมาจาก environment ตอนรัน ไม่ควร commit ลงไฟล์ config และไม่ควรถูกเปลี่ยนด้วยค่าจาก request.",
    takeaways: ["config ที่เป็น secret ต้องตอบได้ว่ามาจากไหน และหายไปแล้วแอป fail แบบชัดเจนไหม."],
    whatToReview: [
      "โค้ดที่ดีอ่าน DATABASE_URL จาก environment และ fail ตอน startup ถ้าไม่มีค่า.",
      "โค้ดที่ควรปรับ commit credential ลงไฟล์ และเปิดให้ $_GET เปลี่ยนค่า config ระดับระบบ.",
    ],
    reviewNotes: [
      "รีวิว config ด้วยสองคำถาม: ค่านี้มาจากแหล่งที่ควบคุมได้ไหม และ user input เปลี่ยนค่าระดับระบบได้หรือเปล่า.",
    ],
    codeComments: {
      goodCode: ["secret ที่จำเป็นควร fail เร็วเมื่อ environment ไม่มีค่า."],
      badCode: ["credential ใน code และ config ที่เปลี่ยนด้วย request ไม่ปลอดภัยทั้งคู่."],
    },
  },
  "php/separating-logic-from-templates": {
    title: "แยก logic ออกจาก template",
    summary: "เตรียมข้อมูล, อ่าน request และ query database ก่อนเข้า template ให้ template ทำหน้าที่แสดงผลและ escape ค่าเป็นหลัก.",
    takeaways: ["ไฟล์ template ไม่ควรทั้งอ่าน $_GET, query database และ echo HTML ดิบในที่เดียว."],
    whatToReview: [
      "โค้ดที่ดีเตรียมข้อมูลก่อน render ทำให้ template โฟกัสที่การแสดงผลและการ escape ค่า.",
      "โค้ดที่ควรปรับผสม request input, SQL, database access และ raw output ในไฟล์เดียว ทำให้ทุก change ต้องรีวิวหลายเรื่องพร้อมกัน.",
    ],
    reviewNotes: [
      "PHP เขียนปน HTML ได้ง่าย แต่ตอนรีวิวให้ถามว่าไฟล์นี้กำลังรับ request, ดึงข้อมูล หรือแสดงผล ถ้าทำครบสามอย่างควรแยก.",
    ],
    codeComments: {
      goodCode: ["controller เตรียมข้อมูลก่อนให้ template แสดงผล."],
      badCode: ["request input, SQL และ output ถูกผสมอยู่ใน template เดียว."],
    },
  },
  "java/null-handling-and-optional-boundaries": {
    title: "บอกกรณีหาไม่เจอด้วย Optional หรือ exception",
    summary: "ถ้า method อาจหา user ไม่เจอ ให้บอกด้วย Optional หรือ exception ที่ชัดเจน อย่าคืน null แล้วปล่อยให้โค้ดถัดไปพังเป็น NullPointerException.",
    takeaways: ["อย่าปล่อย null ไหลต่อ ถ้าหาไม่เจอเป็นกรณีที่เกิดได้จริง ให้ทำให้ caller เห็นตั้งแต่จุดเรียก method."],
    whatToReview: [
      "โค้ดที่ดีให้ repository คืน Optional, เช็ก id ที่รับเข้ามา และโยน UserNotFoundException เมื่อไม่พบ user.",
      "โค้ดที่ควรปรับปล่อย null ไหลต่อไป ทำให้คนรีวิวต้องเดาว่า findById อาจไม่เจอข้อมูลไหม และมักพังทีหลังด้วย NullPointerException ที่บอกสาเหตุน้อย.",
    ],
    reviewNotes: [
      "เวลารีวิว Java ให้ถามเสมอว่า “ไม่พบข้อมูล” เป็นกรณีปกติหรือเป็น error ถ้าเป็นกรณีปกติควรเห็น Optional ถ้าเป็น error ควรเห็น exception ที่ตั้งชื่อชัด.",
    ],
    codeComments: {
      goodCode: ["Optional ทำให้ path กรณีไม่พบ user เห็นชัด."],
      badCode: ["user ที่อาจเป็น null มักไปพังทีหลังเป็น NullPointerException."],
    },
  },
  "java/immutable-data-and-defensive-copies": {
    title: "copy List เพื่อให้ object ไม่เปลี่ยนทีหลัง",
    summary: "ถ้า constructor รับ List แล้วเก็บ reference เดิม คนที่ถือ List นั้นอยู่ยังแก้ข้อมูลได้ ทำให้ object ที่ควรเป็น snapshot เปลี่ยนหลังสร้าง.",
    takeaways: ["ข้อมูลที่สร้างเสร็จแล้วควรนิ่ง ถ้ารับ collection เข้ามา ให้ copy ก่อนเก็บไว้ใน object."],
    whatToReview: [
      "โค้ดที่ดีใช้ List.copyOf ตอนสร้าง OrderSnapshot ทำให้รายการสินค้าไม่เปลี่ยนตาม List เดิมที่ caller ยังถืออยู่.",
      "โค้ดที่ควรปรับเก็บและคืน List เดิม ทำให้ส่วนอื่น add, remove หรือ reorder item ได้โดย class นี้ไม่รู้ตัว.",
    ],
    reviewNotes: [
      "ให้ดู constructor และ getter ที่รับหรือคืน collection เป็นพิเศษ เพราะ bug แบบ List ถูกแก้จากข้างนอกมักตามยากมากในระบบจริง.",
    ],
    codeComments: {
      goodCode: ["copy List ที่รับเข้ามา เพื่อไม่ให้โค้ดข้างนอกแก้ snapshot นี้ได้."],
      badCode: ["โค้ดนี้เก็บ reference ของ List ที่ caller ยังแก้ได้อยู่."],
    },
  },
  "java/equals-hashcode-and-value-objects": {
    title: "ให้ equals/hashCode ตรงกับ id ที่แท้จริง",
    summary: "ถ้า object ต้องใช้เทียบกันหรือใส่ใน HashMap/HashSet ให้กฎ equals และ hashCode อิงค่าที่เป็นตัวตนจริง เช่น UserId ไม่ใช่ชื่อที่ซ้ำได้.",
    takeaways: ["ถ้า override equals ต้องคิดถึง hashCode ด้วย ไม่อย่างนั้น collection อย่าง HashSet หรือ HashMap อาจทำงานเพี้ยน."],
    whatToReview: [
      "โค้ดที่ดีแยก UserId เป็น record ทำให้ equals และ hashCode สอดคล้องกันเอง และ validate ค่าได้ตั้งแต่ต้น.",
      "โค้ดที่ควรปรับเทียบ User ด้วย displayName ซึ่งคนซ้ำชื่อได้ และยัง override equals โดยไม่มี hashCode ทำให้ HashSet/HashMap อาจหาของไม่เจอหรือเก็บซ้ำผิด.",
    ],
    reviewNotes: [
      "เวลาเห็น equals ให้ถามว่า “สอง object นี้ถือว่าเท่ากันเพราะอะไร” ถ้าคำตอบคือ id ให้พิจารณาแยกเป็น value object หรือ record เล็ก ๆ.",
    ],
    codeComments: {
      goodCode: ["record ทำให้ equals และ hashCode ผูกกับค่านี้โดยตรง."],
      badCode: ["displayName ไม่ใช่ตัวตนที่มั่นคง และยังไม่มี hashCode คู่กัน."],
    },
  },
  "java/exception-handling-boundaries": {
    title: "แปลง exception เป็น HTTP response ที่ controller",
    summary: "ให้ service โยน exception ที่บอกปัญหาจริง เช่น UserNotFoundException แล้วให้ controller แปลงเป็น HTTP response เช่น 404.",
    takeaways: ["อย่า catch Exception กว้าง ๆ แล้ว return null เพราะจะซ่อน error เดิมและสร้าง error ใหม่ให้ caller."],
    whatToReview: [
      "โค้ดที่ดีจับ UserNotFoundException ที่ controller แล้วตอบ notFound ทำให้ response คาดเดาได้.",
      "โค้ดที่ควรปรับ catch Exception กว้างเกินไป, printStackTrace และคืน null ซึ่งซ่อนปัญหาจริงไว้.",
    ],
    reviewNotes: [
      "ให้ถามว่า catch block อยู่ชั้นที่ถูกไหม ถ้าจับลึกเกินไปมักกลบ bug แต่ถ้าจับที่ controller จะช่วยแปล error เป็น response โดยไม่ทิ้งความหมาย.",
    ],
    codeComments: {
      goodCode: ["แปลง domain exception เป็น HTTP response ที่ขอบ controller."],
      badCode: ["การ catch ทุกอย่างทำให้ path ของ error จริงถูกซ่อนไว้."],
    },
  },
  "java/try-with-resources-cleanup": {
    title: "ปิด resource ด้วย try-with-resources",
    summary: "ใช้ try-with-resources กับ connection, statement, result set หรือ file เพื่อให้ปิดทุกทาง ทั้งตอนสำเร็จ, return ก่อน และเกิด exception.",
    takeaways: ["resource ที่ต้อง close ไม่ควรพึ่ง close() เฉพาะทางที่ทุกอย่างสำเร็จ."],
    whatToReview: [
      "โค้ดที่ดีครอบ connection, statement และ result set ด้วย try-with-resources ทำให้ปิดครบแม้ query หรือ mapping จะล้ม.",
      "โค้ดที่ควรปรับ close เองเฉพาะทางที่เจอ row แล้วสำเร็จ ทำให้ early return หรือ exception ทิ้ง resource ค้างไว้.",
    ],
    reviewNotes: [
      "resource leak มักดูไม่ออกจากทางที่สำเร็จ ให้ไล่ทุก return และจุดที่อาจ throw แล้วดูว่า closeable แต่ละตัวถูกปิดแน่ไหม.",
    ],
    codeComments: {
      goodCode: ["try-with-resources เป็นเจ้าของ cleanup ของ closeable ทุกตัวตรงนี้."],
      badCode: ["return ก่อนกำหนดทำให้การ close แบบ manual ถูกข้าม."],
    },
  },
  "java/generics-and-collection-types": {
    title: "ระบุชนิดใน List/Map ให้ compiler ช่วย",
    summary: "ใช้ generics ให้ชัด เช่น Map<UserId, List<OrderSummary>> เพื่อให้รู้ว่า key/value คืออะไร ไม่ต้อง cast เองแล้วไปพังตอนรัน.",
    takeaways: ["raw List หรือ raw Map ทำให้ compiler ช่วยจับ type ผิดไม่ได้ คนรีวิวต้องเดาเองว่าข้างในคืออะไร."],
    whatToReview: [
      "โค้ดที่ดีระบุทั้ง key และ value type ชัดเจน ทำให้ caller ไม่ต้อง cast และ compiler ช่วยจับผิดได้.",
      "โค้ดที่ควรปรับใช้ raw List หรือ raw Map, cast Object เอง และเก็บ order แค่ตัวเดียวต่อผู้ใช้เจ้าของ ทั้งที่ควรเป็น list.",
    ],
    reviewNotes: [
      "ถ้าเห็น raw collection ใน Java สมัยใหม่ ให้ถือเป็นกลิ่นที่ควรถาม เพราะเหมือนปิดตา compiler แล้วให้คนไล่ type ด้วยตาแทน.",
    ],
    codeComments: {
      goodCode: ["type บอกชัดว่า owner หนึ่งคนมี summary ได้หลายรายการ."],
      badCode: ["raw collection ผลัก type error ไปเจอตอน cast ระหว่างรัน."],
    },
  },
  "java/streams-vs-readable-loops": {
    title: "เลือก stream หรือ loop ตามความอ่านง่าย",
    summary: "ใช้ stream เมื่อเป็น filter/map/collect ที่ตรงไปตรงมา แต่ถ้ากฎมีหลายขั้น, มี branch หรือมี side effect ให้ loop ที่ตั้งชื่อค่ากลางมักรีวิวง่ายกว่า.",
    takeaways: ["รูปแบบที่ดีที่สุดไม่ใช่สั้นที่สุด แต่คือรูปแบบที่ทำให้เจตนาและจุดผิดพลาดเห็นชัดที่สุด."],
    whatToReview: [
      "โค้ดที่ดีเลือก loop เพราะกฎคิดส่วนลดมี branch และมีค่ากลางชื่อ lineDiscount ให้รีวิวทีละขั้นได้.",
      "โค้ดที่ควรปรับซ่อนการแก้ค่า discount และ audit.log ไว้ใน stream pipeline ทำให้ดู functional แต่ตามเหตุผลยากขึ้น.",
    ],
    reviewNotes: [
      "stream ไม่ได้ดีกว่า loop อัตโนมัติ ใช้ stream เมื่อ map/filter/collect ตรงไปตรงมา และใช้ loop เมื่อกฎงานต้องการชื่อและลำดับที่อ่านง่าย.",
    ],
    codeComments: {
      goodCode: ["loop ทำให้ branch และตัวสะสมค่ามีชื่อที่อ่านตามได้."],
      badCode: ["side effect ใน stream ทำให้ pipeline ตามเหตุผลยากขึ้น."],
    },
  },
  "java/concurrency-and-shared-state": {
    title: "กัน race เมื่อหลาย thread ใช้ค่าเดียวกัน",
    summary: "ถ้าหลาย thread อ่านเขียน cache เดียวกัน ให้ใช้ ConcurrentHashMap และ operation อย่าง computeIfAbsent แทน HashMap + containsKey + put.",
    takeaways: ["ถ้าหลาย thread แตะค่าเดียวกัน โค้ดต้องบอกชัดว่าอะไรเป็นตัวกันชนกัน ไม่ใช่หวังว่า timing จะไม่ชน."],
    whatToReview: [
      "โค้ดที่ดีใช้ ConcurrentHashMap และ computeIfAbsent ทำให้การเช็กว่าไม่มีค่าแล้วโหลดเข้า cache เกิดเป็นขั้นตอนเดียว.",
      "โค้ดที่ควรปรับใช้ HashMap ร่วมกันและ containsKey แล้วค่อย put สอง thread อาจเห็นว่าไม่มีค่าเหมือนกัน, load ซ้ำ หรือทำให้ map อยู่ในสภาพไม่สอดคล้อง.",
    ],
    reviewNotes: [
      "เวลารีวิว state ที่ใช้ร่วมกัน ให้ถามว่าอะไรป้องกันการชนกัน ถ้าคำตอบคือ “ปกติคงไม่เกิดพร้อมกัน” แปลว่าควรใช้ data structure ที่ปลอดภัยกว่า.",
    ],
    codeComments: {
      goodCode: ["computeIfAbsent ทำให้ load และเก็บ cache เป็นขั้นตอน atomic เดียว."],
      badCode: ["containsKey แล้วค่อย put เป็น race บน HashMap ที่ถูกใช้ร่วมกัน."],
    },
  },
  "java/records-and-dto-boundaries": {
    title: "ใช้ record/DTO แทน Map ของ request",
    summary: "request body ควรมี record หรือ DTO ที่บอกชื่อ field ชัดและ validate ตั้งแต่ต้น แทน Map<String, Object> ที่ต้อง cast แล้วค่อยพังทีหลัง.",
    takeaways: ["record/DTO ไม่ใช่พิธีรีตอง ถ้ามันทำให้ field ที่ต้องมีและ validation อยู่ในที่เดียว."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ CreateUserRequest และ validate email กับ displayName ก่อนส่งเข้า service.",
      "โค้ดที่ควรปรับใช้ Map<String, Object> แล้ว cast เอง ถ้า key หาย, key ชื่อไม่ตรง หรือค่าเป็น null จะพังลึกกว่าและอ่านยากกว่า.",
    ],
    reviewNotes: [
      "ถ้า request สำคัญพอให้ service ใช้ต่อ มักสำคัญพอให้มี type ชัด ไม่ควรฝากความถูกต้องไว้กับ string key ใน Map.",
    ],
    codeComments: {
      goodCode: ["รูป request ตรวจความถูกต้องเองก่อนถึง service."],
      badCode: ["string key กับ cast ทำให้ความผิดของ request shape ไปโผล่ตอน runtime."],
    },
  },
  "java/package-service-boundaries": {
    title: "แยก controller, service และ repository",
    summary: "controller ไม่ควรทั้งอ่าน request, ต่อ SQL, เปิด database connection, ส่ง email และตอบ HTTP ใน class เดียว ให้ service ถือกฎงาน ส่วน repository จัดการ database.",
    takeaways: ["class จะรีวิวง่ายขึ้นเมื่อ HTTP, กฎงาน และ database แยกกันชัด."],
    whatToReview: [
      "โค้ดที่ดีให้ UserService เป็นที่อยู่ของกฎสมัครสมาชิก ส่วน UserRepository และ WelcomeEmail ถูกส่งเข้ามาเป็น dependency ที่เห็นได้.",
      "โค้ดที่ควรปรับผสม request parsing, SQL, database connection, email และ HTTP response ไว้ใน controller เดียว.",
    ],
    reviewNotes: [
      "เวลารีวิว flow หนึ่งอย่าง ให้ไล่ว่า request เข้า controller แล้วงานย้ายไป service/repository ชัดไหม ถ้า controller ตัดสินใจทุกอย่าง ควรแยกก่อนเพิ่ม feature ใหม่.",
    ],
    codeComments: {
      goodCode: ["service เป็นเจ้าของ flow ของงาน และเรียก dependency ที่ต้องใช้."],
      badCode: ["HTTP, SQL, การเปิด connection และ email ถูกผสมไว้ใน controller เดียว."],
    },
  },
  "git/status-before-work": {
    codeComments: {
      goodCode: ["ดู branch และไฟล์ค้างในเครื่องก่อนเริ่มแก้"],
      badCode: ["pull ก่อนดู status ทำให้ไม่รู้ว่า base เปลี่ยนอะไร"],
    },
    title: "เช็ก branch และไฟล์ค้างก่อนเริ่มงาน",
    summary: "ก่อนแก้โค้ด ให้รู้ว่าอยู่ branch ไหน มีไฟล์แก้ค้างไหม และ remote มี commit ใหม่หรือเปล่า เพื่อไม่เริ่มบนฐานผิด.",
    takeaways: ["เริ่มงาน Git ด้วย git status --short --branch และ fetch เพื่อเห็นสภาพเครื่องกับ remote ก่อนแก้ไฟล์."],
    whatToReview: [
      "โค้ดที่ดีเช็ก branch, ไฟล์ที่ยังไม่ commit, fetch remote และดู diff summary ก่อนตัดสินใจทำงานต่อ.",
      "โค้ดที่ควรปรับ pull ทันทีแล้วเริ่มแก้และ commit ทุกอย่าง โดยไม่รู้ว่าอยู่ branch ไหนหรือมีอะไรเปลี่ยนบ้าง.",
    ],
    reviewNotes: [
      "ถ้าคนทำงานตอบไม่ได้ว่าอยู่ branch ไหนหรือมีไฟล์ค้างอะไร คำสั่งถัดไปอาจพางานปนกันหรือแก้บนฐานที่ผิด.",
    ],
  },
  "git/interactive-staging-hunks": {
    codeComments: {
      goodCode: ["ดูก่อน แล้ว stage เฉพาะช่วง diff ที่เกี่ยวกับงานนี้"],
      badCode: ["git add . อาจลากไฟล์ debug, generated และงานไม่เกี่ยวเข้ามา"],
    },
    title: "stage เฉพาะส่วนที่เกี่ยวกับงานนี้",
    summary: "ใช้ git add -p เลือก stage เป็นช่วง ๆ ของ diff (hunk) เพื่อให้ commit มีเฉพาะการแก้ที่อยู่เรื่องเดียวกัน.",
    takeaways: ["commit ที่รีวิวง่ายเริ่มจากการ stage เฉพาะไฟล์หรือช่วง diff ที่เกี่ยวข้อง."],
    whatToReview: [
      "โค้ดที่ดีดู git diff, ใช้ git add -p กับไฟล์เป้าหมาย แล้วดู git diff --staged ก่อน commit.",
      "โค้ดที่ควรปรับ add ทุกอย่างและใช้ message กว้าง ๆ ทำให้คนรีวิวไม่รู้ว่า change นี้ตั้งใจแก้อะไร.",
    ],
    reviewNotes: [
      "hunk คือช่วงหนึ่งของ diff เครื่องมือนี้ช่วยมากเมื่อ formatting, debug และ feature work ปนกันในเครื่อง เพราะช่วยให้ commit เล่าเรื่องเดียว.",
    ],
  },
  "git/atomic-commits-messages": {
    codeComments: {
      goodCode: [
        "หนึ่ง commit ควรเล่า behavior change เรื่องเดียว",
        "แยก test เป็น commit อีกก้อนเมื่อช่วยให้รีวิวชัด",
      ],
      badCode: ["reviewer จะไม่รู้ว่า commit นี้เปลี่ยนเรื่องไหน"],
    },
    title: "commit หนึ่งก้อนควรเล่าเรื่องเดียว",
    summary: "ทำ commit ให้เล็กพอรีวิวได้ และเขียน message ที่บอกเหตุผล เช่น ปรับ navigation หรือเพิ่ม test ไม่ใช่แค่ work.",
    takeaways: ["atomic commit แปลว่า commit มีเหตุผลเดียว ไม่ใช่รวม UI, test, formatting และ debug ไว้ก้อนเดียว.",
    ],
    whatToReview: [
      "โค้ดที่ดีแยกการปรับ UI ออกจาก test coverage และตั้งชื่อ commit ให้เห็นเหตุผลของแต่ละก้อน.",
      "โค้ดที่ควรปรับรวมทุกอย่างใน commit เดียว ทำให้ review, revert หรือ cherry-pick เฉพาะส่วนยากขึ้น.",
    ],
    reviewNotes: [
      "atomic ไม่ได้แปลว่าต้องเล็กที่สุด แต่แปลว่าถ้าต้อง review, revert หรือ cherry-pick ก็ยก commit นั้นเป็นก้อนเดียวได้โดยไม่พางานอื่นติดไป.",
    ],
  },
  "git/branch-naming-upstream": {
    codeComments: {
      goodCode: ["ชื่อ topic branch บอกทีมว่างานนี้เกี่ยวกับอะไร"],
      badCode: ["commit ตรงบน main ทำให้ความผิดพลาดมีต้นทุนสูงขึ้น"],
    },
    title: "ตั้งชื่อ branch และผูก upstream ให้ชัด",
    summary: "สร้าง branch สำหรับงานนั้น ๆ และใช้ git push -u ให้ branch นี้รู้ว่า push/pull จะคุยกับ remote branch ไหน.",
    takeaways: ["upstream คือ remote branch ค่าเริ่มต้นของ branch นี้ ทำให้ push/pull ครั้งต่อไปไปถูกที่."],
    whatToReview: [
      "โค้ดที่ดีสร้าง branch ชื่อ feature/git-track-lessons, push -u ไป remote และเช็ก branch state อีกครั้ง.",
      "โค้ดที่ควรปรับ commit บน main และ push HEAD แบบไม่ชัดเจน ทำให้ accidental push จับยาก.",
    ],
    reviewNotes: [
      "ชื่อ branch คือเอกสารแบบเบา ๆ ควรช่วยบอกว่าเป็น feature, fix, chore, spike หรือ release change.",
    ],
  },
  "git/fetch-pull-rebase-sync": {
    codeComments: {
      goodCode: ["fetch ทำให้เห็น commit ใหม่จาก remote ก่อนรวมงาน"],
      badCode: ["pull โดยไม่ดูก่อนทำให้ไม่รู้ว่ารวมอะไรเข้ามา"],
    },
    title: "fetch ก่อนรวมงานจาก remote",
    summary: "ใช้ git fetch เพื่อดูว่า remote เปลี่ยนอะไร แล้วค่อยเลือก rebase หรือ merge ให้เหมาะกับ branch ที่ทำงานอยู่.",
    takeaways: ["fetch คือขั้นดูข้อมูล ส่วน pull, rebase และ merge คือขั้นเปลี่ยน branch ของเรา."],
    whatToReview: [
      "โค้ดที่ดี fetch ก่อน, ดู commit ใหม่บน origin/main, rebase feature branch อย่างตั้งใจ แล้วรัน test หลังรวมงาน.",
      "โค้ดที่ควรปรับ pull ทันที แล้ว force push โดยไม่ดูว่า base เปลี่ยนอะไรจาก remote.",
    ],
    reviewNotes: [
      "ก่อน rebase หรือ merge ควรรู้ว่า commit จาก remote คืออะไร ถ้าลำดับคำสั่งไม่ทำให้เห็นก่อนรวมงาน จะรีวิวความเสี่ยงยากขึ้น.",
    ],
  },
  "git/reviewing-diffs-before-push": {
    codeComments: {
      goodCode: ["เช็กทั้ง diff และ commit ที่กำลังจะ push"],
      badCode: ["ถ้ารีวิวจริงครั้งแรกเกิดหลัง push ก็แก้ช้าไป"],
    },
    title: "ดู diff ก่อน push ออกจากเครื่อง",
    summary: "ก่อน push ให้เช็ก unstaged, staged และ commit ที่จะออกจาก branch เพื่อกัน debug code, ไฟล์หลุด หรือ commit เกิน.",
    takeaways: ["push ควรเกิดหลังเช็กในเครื่องแล้วว่าไฟล์และ commit ที่จะออกไปคือสิ่งที่ตั้งใจ."],
    whatToReview: [
      "โค้ดที่ดีเช็ก whitespace, ดู diff ทั้ง unstaged และ staged และดู commit ที่กำลังจะออกจาก branch.",
      "โค้ดที่ควรปรับ add, commit, push ทันทีโดยไม่เช็กในเครื่องก่อนว่าอะไรจะออกไป.",
    ],
    reviewNotes: [
      "ก่อน push ควรตอบได้ว่า “อะไรจะออกจาก branch” คำตอบควรมาจาก diff และ log ไม่ใช่จากความจำ.",
    ],
  },
  "git/conflict-resolution-without-overwriting": {
    codeComments: {
      goodCode: ["อ่านไฟล์ที่ conflict ก่อนเลือกวิธีแก้"],
      badCode: ["เลือก theirs ทั้ง repo อาจทับงานฝั่งเรา"],
    },
    title: "แก้ conflict โดยอ่านทั้งสองฝั่ง",
    summary: "ตอน conflict ให้เปิดไฟล์ที่ชน ดูทั้งฝั่งเราและฝั่งเขา แล้วแก้เฉพาะจุด ไม่เลือก ours/theirs ทั้ง repo แบบไม่อ่าน.",
    takeaways: ["conflict คือจุดที่สองงานแตะที่เดียวกัน ต้องรักษาความตั้งใจของทั้งสองฝั่งเท่าที่ทำได้."],
    whatToReview: [
      "โค้ดที่ดีดู conflicted files, ใช้ git diff --merge, เปิดไฟล์แก้, รัน test และ stage เฉพาะไฟล์ที่แก้แล้ว.",
      "โค้ดที่ควรปรับเลือก theirs ทั้ง repo แล้ว force push ทำให้ลบ local work หรือการตัดสินใจของอีกฝั่งได้เงียบ ๆ.",
    ],
    reviewNotes: [
      "ถ้าลำดับแก้ conflict ไม่เคยเปิดไฟล์ที่ชนเลย เสี่ยงเป็นการเลือกข้างแบบกลไกมากกว่าการรวมงานจริง.",
    ],
  },
  "git/revert-vs-reset": {
    codeComments: {
      goodCode: ["revert เพิ่ม commit ใหม่เพื่อ undo โดยไม่เปลี่ยน history ที่แชร์แล้ว"],
      badCode: ["reset main ที่แชร์แล้วเปลี่ยนประวัติของทุกคน"],
    },
    title: "ใช้ revert กับ commit ที่ push แล้ว",
    summary: "revert สร้าง commit ใหม่เพื่อย้อนผลของ commit เดิม ส่วน reset --hard เหมาะกับการเก็บกวาดในเครื่องก่อน push ไม่ใช่บน main ที่คนอื่นใช้แล้ว.",
    takeaways: ["คำถามแรกคือ commit นี้ push หรือแชร์แล้วหรือยัง ถ้าแชร์แล้วให้เริ่มจาก revert."],
    whatToReview: [
      "โค้ดที่ดี fetch, switch main, pull แบบ fast-forward, revert commit ที่มีปัญหา แล้ว push commit ใหม่ออกไป.",
      "โค้ดที่ควรปรับ reset --hard บน main แล้ว force push ทำให้ทุกคนต้องจัดการ history ที่ถูกเปลี่ยน.",
    ],
    reviewNotes: [
      "reset + force push เปลี่ยน history ที่คนอื่นอาจมีอยู่แล้ว ใช้เฉพาะเมื่อทีมตกลงกันชัด ไม่ใช่ใช้เป็นปุ่ม undo ปกติ.",
    ],
  },
  "git/gitignore-and-secret-safety": {
    codeComments: {
      goodCode: ["กัน local secret และ generated output ไม่ให้ถูก stage"],
      badCode: ["add ทุกอย่างอาจ publish secret หรือ state ของเครื่องได้"],
    },
    title: ".gitignore กัน secret และไฟล์ที่ไม่ควรเข้าระบบ",
    summary: "ใส่ไฟล์ลับและ generated output เช่น .env, dist, node_modules ลง .gitignore และถ้า secret เคยถูก track แล้วให้เอาออกจาก index ด้วย git rm --cached.",
    takeaways: [".gitignore กันไฟล์ใหม่ไม่ให้เผลอ commit แต่ถ้า secret เคย commit ไปแล้ว อาจต้อง rotate key ด้วย."],
    whatToReview: [
      "โค้ดที่ดี ignore local secret file, เอา .env ที่เคยถูก track ออกจาก index แล้วเช็ก status ก่อน commit.",
      "โค้ดที่ควรปรับ add ทุกไฟล์ ทำให้ credential, build output, editor file หรือ local env หลุดได้.",
    ],
    reviewNotes: [
      "index คือพื้นที่ที่ Git track หรือ stage แล้ว ถ้าไฟล์ลับเคยเข้าไปแล้ว .gitignore อย่างเดียวไม่พอ ต้องเอาออกจาก index และจัดการ secret ที่หลุดไปแล้ว.",
    ],
  },
  "git/tags-and-release-points": {
    codeComments: {
      goodCode: ["verify commit ที่แน่นอนก่อนสร้าง release tag"],
      badCode: ["tag กว้างและ push --tags อาจปล่อย tag ผิด"],
    },
    title: "สร้าง tag ให้ชี้ commit ที่จะปล่อยจริง",
    summary: "tag คือหมุดบอกว่า commit นี้คือเวอร์ชันที่จะ release ต้องเช็กสถานะไฟล์ในเครื่อง, รัน test, ดู commit ล่าสุด แล้ว push เฉพาะ tag นั้น.",
    takeaways: ["release tag ควรชี้ commit ที่ verify แล้วและชื่อ version ชัด เช่น v1.4.0.",
    ],
    whatToReview: [
      "โค้ดที่ดีเช็ก status, รัน test, ดู commit ล่าสุด, สร้าง annotated version tag และ push เฉพาะ v1.4.0.",
      "โค้ดที่ควรปรับใช้ tag ชื่อ latest และ push --tags ซึ่งอาจ publish tag local ที่ยังไม่พร้อม.",
    ],
    reviewNotes: [
      "เวลารีวิว release ให้ดูสามอย่าง: tag ชี้ commit ไหน, ชื่อ tag บอก version ชัดไหม และคำสั่ง push ส่งเฉพาะ tag ที่ตั้งใจหรือเปล่า.",
    ],
  },
  "fastapi/path-operation-order": {
    codeComments: {
      goodCode: ["วาง path ที่เป็นคำตายตัวไว้ก่อน path ที่รับค่า"],
      badCode: ["path รับค่าที่อยู่ก่อนจะจับคำอย่าง /me ไปเป็น user_id"],
    },
    title: "วาง route เฉพาะก่อน route รับค่า",
    summary: "ถ้ามี `/me` และ `/{user_id}` ให้ประกาศ `/me` ก่อน เพราะ FastAPI อ่าน route จากบนลงล่างและจับคู่ตัวแรกที่ตรง.",
    takeaways: ["ลำดับ route มีผลต่อ behavior: path แบบคำตายตัวควรมาก่อน path ที่รับค่าอย่าง `/{id}`."],
    whatToReview: [
      "โค้ดที่ดีวาง route `/me` ก่อน `/{user_id}` ทำให้คำว่า me ไม่ถูกตีความเป็นเลข user_id.",
      "โค้ดที่ควรปรับวาง `/{user_id}` ก่อน `/me` FastAPI จึงลองแปลง `me` เป็น integer แล้วคืน validation error.",
    ],
    reviewNotes: [
      "เวลารีวิว routing ให้อ่านจากบนลงล่างก่อนเสมอ ถ้า route กว้างกว่าอยู่ก่อน route เฉพาะ อาจแย่ง request ไปก่อน.",
    ],
  },
  "fastapi/request-models-validation": {
    codeComments: {
      goodCode: ["Pydantic ตรวจ body ก่อน logic ของ route ทำงาน"],
      badCode: ["การแกะ JSON เองทำให้ validation ไปกองอยู่ใน handler"],
    },
    title: "ใช้ Pydantic model ตรวจ request body",
    summary: "ให้ FastAPI รับ body ผ่าน Pydantic model เพื่อเช็ก field, type และ validation rule ก่อน logic ของ route ทำงาน.",
    takeaways: ["ข้อมูลจาก request ควรเข้ามาเป็น model ที่ตรวจแล้ว ไม่ใช่ dict ดิบที่ route ต้องค่อยแกะเอง."],
    whatToReview: [
      "โค้ดที่ดีให้ `CreateReviewRequest` บอกชัดว่า body ต้องมี `title` และ `author_id` พร้อมกฎความยาวของ title.",
      "โค้ดที่ควรปรับดึง JSON ดิบแล้วแปลงค่าเอง ถ้า key หายหรือ type ผิด ปัญหาจะไปแตกใน handler และเอกสาร API อาจไม่ตรง.",
    ],
    reviewNotes: [
      "ใน FastAPI function signature คือสัญญาหน้า API ถ้า route รับ body ที่สำคัญ ควรมี model ชัด ๆ ให้ทั้งคนและ docs อ่านได้.",
    ],
  },
  "fastapi/response-models-contracts": {
    codeComments: {
      goodCode: ["response_model ระบุรูปข้อมูลที่ client จะได้รับ"],
      badCode: ["__dict__ อาจพา field ภายในหลุดออกไปใน response"],
    },
    title: "กำหนด response_model ให้ชัด",
    summary: "ใช้ `response_model` เพื่อบอกว่า API จะส่ง field อะไรกลับ และกัน field ภายในหรือข้อมูลลับหลุดออกไป.",
    takeaways: ["`response_model` เป็นทั้งเอกสารให้ client และตัวกรองข้อมูลก่อนออกจาก API."],
    whatToReview: [
      "โค้ดที่ดีประกาศ `ReviewResponse` ชัดเจน client จึงรู้ว่าจะได้ `id`, `title`, `status` เท่านั้น.",
      "โค้ดที่ควรปรับคืน `review.__dict__` ทำให้ field ภายใน, state ของ database หรือ attribute ที่ไม่ได้ตั้งใจอาจหลุดออกไป.",
    ],
    reviewNotes: [
      "ตอนรีวิว response ให้ถามว่า client ควรเห็น field ไหน ถ้าคำตอบคือ object มีอะไรตอนนี้ก็ส่งหมด API ยังเสี่ยงเกินไป.",
    ],
  },
  "fastapi/dependencies-boundaries": {
    codeComments: {
      goodCode: ["Depends ทำให้ pagination ใช้ซ้ำและมี validation ในที่เดียว"],
      badCode: ["แกะ query params เองทำให้ default และ validation กระจาย"],
    },
    title: "ใช้ Depends แยกงานเตรียม request ที่ใช้ซ้ำ",
    summary: "`Depends` เหมาะกับงานเตรียมข้อมูลก่อนเข้า route เช่น pagination, user ปัจจุบัน หรือ database session เพื่อไม่ให้ handler ต้องแกะซ้ำเอง.",
    takeaways: ["dependency ที่ดีทำให้ validation, default และการใช้ซ้ำอยู่จุดเดียว และยังไปแสดงใน OpenAPI ได้."],
    whatToReview: [
      "โค้ดที่ดีแยก pagination เป็น dependency ที่ใช้ซ้ำได้ และให้ `Query(le=100)` จำกัดค่าไว้ตรงจุดเดียว.",
      "โค้ดที่ควรปรับ parse query parameter เองใน route ทำให้ default, validation และ logic ใช้ซ้ำกระจายไปตาม handler.",
    ],
    reviewNotes: [
      "ใช้ dependency เพื่อทำให้ขอบเขตงานของ route ชัด แต่ไม่ควรยัด business logic หนักเข้าไปซ่อนใน dependency.",
    ],
  },
  "fastapi/auth-security-dependencies": {
    codeComments: {
      goodCode: ["ตัวนี้อ่าน Bearer token และบอก OpenAPI ว่า route ใช้ auth"],
      badCode: ["parse header เองทุก route ทำให้ auth หลุดมาตรฐานได้"],
    },
    title: "ประกาศ auth ด้วย security dependency",
    summary: "ใช้ security dependency เช่น `OAuth2PasswordBearer` เพื่อให้การอ่าน token, ตรวจ user และเอกสาร OpenAPI อยู่ในทางเดียวกัน.",
    takeaways: ["auth ควรอยู่ในจุดกลางที่ route ต่าง ๆ เรียกใช้ ไม่ใช่ให้แต่ละ route parse header เอง."],
    whatToReview: [
      "โค้ดที่ดีรวมการอ่าน Bearer token และการจัดการ token ไม่ถูกต้องไว้ใน `current_user` จุดเดียว.",
      "โค้ดที่ควรปรับ parse header เองใน route และเดาว่าต้องมี user เสมอ ทำให้แต่ละ endpoint มีพฤติกรรม auth ไม่เหมือนกัน.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้มองหา endpoint ที่ตรวจ token เอง ถ้ามีหลายแบบในโปรเจกต์เดียวกัน docs, error และ security behavior จะ drift ง่าย.",
    ],
  },
  "fastapi/async-handler-boundaries": {
    codeComments: {
      goodCode: ["await งาน I/O เพื่อคืนคิวให้ event loop ระหว่างรอ"],
      badCode: [
        "requests.get เป็น blocking call จึงค้าง event loop ได้",
        "ลืม await ทำให้งานบันทึก audit อาจไม่เสร็จตามที่คิด",
      ],
    },
    title: "อย่าให้ async route ไป block event loop",
    summary: "ใน `async def` ให้ใช้ async client และ `await` งาน I/O ให้ครบ เพื่อไม่ให้ request อื่นติดคิวรอนานโดยไม่จำเป็น.",
    takeaways: ["`async def` ไม่ได้ทำให้โค้ด non-blocking อัตโนมัติ งาน I/O ข้างในต้องเป็น async และถูก `await` ด้วย."],
    whatToReview: [
      "โค้ดที่ดี `await` service ที่ทำ I/O ทำให้ event loop ไปดูแล request อื่นได้ระหว่างรอผลลัพธ์.",
      "โค้ดที่ควรปรับใช้ `requests.get` ใน async route ซึ่งเป็น blocking call และยังลืม `await` งาน audit.",
    ],
    reviewNotes: [
      "FastAPI ใช้ได้ทั้ง `def` และ `async def` ตอนรีวิวให้ดูให้ตรงกัน: ถ้า handler เป็น async งานที่เรียกต่อควรไม่ block หรือมีเหตุผลชัดเจน.",
    ],
  },
  "fastapi/http-exception-handling": {
    codeComments: {
      goodCode: ["ไม่เจอข้อมูลคือ 404 จริง ไม่ใช่ response สำเร็จ"],
      badCode: ["คืน 200 พร้อม error ทำให้ client อ่านสถานะผิดได้"],
    },
    title: "ใช้ HTTPException กับ error ที่คาดไว้",
    summary: "กรณีอย่างหา resource ไม่เจอหรือไม่มีสิทธิ์ ควร `raise HTTPException` พร้อม status code ที่ถูก แทนการคืน 200 แล้วใส่ error ใน body.",
    takeaways: ["client, log และ monitoring ควรเชื่อ HTTP status ได้ว่า request สำเร็จหรือล้มเหลว."],
    whatToReview: [
      "โค้ดที่ดีใช้ 404 จริงพร้อม `detail` ชัดเจนเมื่อ review ที่ขอไม่มีอยู่.",
      "โค้ดที่ควรปรับคืน `{ ok: false }` แต่ HTTP status ยังสำเร็จ ทำให้ client, log และ monitoring อ่านสถานะผิด.",
    ],
    reviewNotes: [
      "แยก success response กับ error response ให้ชัด ถ้าเป็น failure ที่คาดไว้ในระดับ HTTP ให้ status code เล่าเรื่องแทน boolean ใน body.",
    ],
  },
  "fastapi/database-session-lifecycle": {
    codeComments: {
      goodCode: [
        "dependency นี้สร้าง session ต่อ request และปิดให้เมื่อจบงาน",
        "commit/refresh อยู่ใน flow ที่รีวิวเห็นได้",
      ],
      badCode: ["session global ถูกใช้ร่วมกันหลาย request และ cleanup ไม่ชัด"],
    },
    title: "เปิดและปิด database session ตาม request",
    summary: "ส่ง database session ผ่าน dependency เพื่อให้แต่ละ request มี session ของตัวเอง ปิด resource ได้ และเห็นจุด commit ชัด.",
    takeaways: ["DB session ไม่ควรเป็น global ที่ใช้ร่วมกันหลาย request ควรเห็นว่าใครสร้าง ใครปิด และ commit ตอนไหน."],
    whatToReview: [
      "โค้ดที่ดีให้แต่ละ request ได้ session ผ่าน `get_session` และทำ `commit/refresh` ใน flow ที่คนรีวิวมองเห็น.",
      "โค้ดที่ควรปรับสร้าง session ระดับ module แล้วใช้ร่วมกันหลาย request ทำให้การปิด session, transaction และ concurrency ไม่ชัด.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้ระวัง module-level session, commit ที่ซ่อนอยู่ใน helper และ handler ที่ใส่ test session แทนได้ยาก.",
    ],
  },
  "fastapi/testing-dependency-overrides": {
    codeComments: {
      goodCode: [
        "แทน current_user จริงด้วย fake user สำหรับ test นี้",
        "ล้าง override เพื่อไม่ให้กระทบ test ถัดไป",
      ],
      badCode: ["ใช้ token เหมือน production ทำให้ test ไปผูกกับ auth จริง"],
    },
    title: "แทน dependency จริงด้วย fake ใน test",
    summary: "ใช้ `app.dependency_overrides` เพื่อแทน auth, database หรือ external service ด้วยของปลอมใน test แล้วล้าง override หลังจบ.",
    takeaways: ["dependency override ทำให้ API test วิ่งเร็วและควบคุมเงื่อนไขได้ โดยไม่ต้องเรียก service จริง."],
    whatToReview: [
      "โค้ดที่ดีแทน `current_user` จริงด้วย fake user ที่ test ควบคุมได้ แล้วล้าง override หลัง assertion.",
      "โค้ดที่ควรปรับใช้ production-like token และ auth service จริง ทำให้ test ช้า flaky และหาสาเหตุยากเมื่อพัง.",
    ],
    reviewNotes: [
      "ถ้า test ต้องพึ่ง token จริงหรือ service จริง ให้ถามว่าควร override dependency แทนไหม test ที่ดีควรล้มเพราะ behavior ของ endpoint ไม่ใช่เพราะระบบข้างนอกแกว่ง.",
    ],
  },
  "fastapi/app-structure-routers": {
    codeComments: {
      goodCode: ["main.py มีหน้าที่ประกอบ router จาก feature ต่าง ๆ"],
      badCode: ["route และ logic เริ่มไหลมากองใน main.py"],
    },
    title: "ให้ main.py ประกอบ app ไม่ใช่รวมทุก logic",
    summary: "แยก route เป็น router ตาม feature แล้วให้ `main.py` มีหน้าที่สร้าง app และ include router ไม่ใช่ใส่ handler ทุกอย่างไว้ในไฟล์เดียว.",
    takeaways: ["`main.py` ควรเป็นจุดประกอบ app ส่วน logic ของ users, reviews หรือ health ควรอยู่ใน module ของตัวเอง."],
    whatToReview: [
      "โค้ดที่ดีให้ `main.py` สร้าง app และ include router จาก `health`, `users`, `reviews` โดยไม่ต้องรู้ logic ข้างในแต่ละ feature.",
      "โค้ดที่ควรปรับทำให้ `main.py` ปน app setup, route handler, business flow และ side effect จนไฟล์เดียวเริ่มรับผิดชอบทั้งระบบ.",
    ],
    reviewNotes: [
      "FastAPI เริ่มไฟล์เดียวได้ง่าย แต่เมื่อไฟล์เริ่มมีหลาย feature ให้แยก router ก่อนที่ `main.py` จะกลายเป็นไฟล์รวมทั้งระบบ.",
    ],
  },
  "django/url-pattern-order": {
    codeComments: {
      goodCode: ["วาง path คำสงวนไว้ก่อน path ที่รับ slug กว้าง ๆ"],
      badCode: ["slug ที่กว้างเกินไปอาจจับ path คำสงวนไปก่อน"],
    },
    title: "วาง URL เฉพาะก่อน URL ที่รับค่า",
    summary: "ถ้ามี `settings/` และ `<slug:username>/` ให้วาง `settings/` ก่อน เพราะ Django อ่าน URL pattern จากบนลงล่างและใช้ตัวแรกที่ตรง.",
    takeaways: ["ลำดับ URL pattern มีผลต่อ behavior จริงของระบบ: path คำตายตัวควรมาก่อน path ที่รับค่าตัวแปร."],
    whatToReview: [
      "โค้ดที่ดีให้ `settings/` match ก่อน route profile ที่รับ `<slug:username>` กว้างกว่า.",
      "โค้ดที่ควรปรับทำให้ `settings/` ถูกมองเป็น username ได้ view จึงอาจทำงานด้วยสมมติฐานผิด.",
    ],
    reviewNotes: [
      "เวลารีวิว URLconf ให้อ่านจากบนลงล่างก่อนเสมอ path เฉพาะ, คำสงวน หรือ action สำคัญควรมาก่อน pattern ที่รับค่ากว้าง ๆ.",
    ],
  },
  "django/models-fields-constraints": {
    codeComments: {
      goodCode: ["constraint ใน database กันกฎสำคัญแม้โค้ดส่วนอื่นเขียนพลาด"],
      badCode: ["field ที่กว้างและ nullable เกินไปทำให้กฎข้อมูลหลุดจาก model"],
    },
    title: "ให้ model ปกป้องกฎข้อมูลสำคัญ",
    summary: "เลือก field ให้ตรงกับข้อมูล ใช้ `ForeignKey`, `choices` และ constraint เพื่อให้ database ช่วยกันกฎที่ห้ามผิด.",
    takeaways: ["Django model ควรบอกกฎข้อมูลที่ต้องจริงเสมอ เช่น slug ห้ามซ้ำต่อ author หรือ published แล้วต้องมีวันที่ publish."],
    whatToReview: [
      "โค้ดที่ดีใช้ field type เฉพาะเจาะจง, `ForeignKey` จริง และ `UniqueConstraint`/`CheckConstraint` สำหรับกฎที่ห้ามผิด.",
      "โค้ดที่ควรปรับเก็บข้อมูลสำคัญเป็น text หรือ raw id แบบ optional เกือบทั้งหมด ทำให้กฎต้องไปกระจายอยู่ในโค้ดส่วนอื่น.",
    ],
    reviewNotes: [
      "ตอนรีวิว model ให้ถามว่า database ควรช่วยกันอะไรได้บ้าง ถ้ากฎนั้นต้องจริงเสมอ ควรเห็นได้จาก field, relationship หรือ constraint ไม่ใช่อยู่แค่ใน comment.",
    ],
  },
  "django/querysets-lazy-evaluation": {
    codeComments: {
      goodCode: [
        "ประกอบ QuerySet ให้ครบก่อนถึงจุดที่ query ถูกยิงจริง",
        "ข้อมูล related ถูกโหลดไว้แล้วก่อนเข้า loop",
      ],
      badCode: ["การอ่าน author/comments ใน loop อาจยิง query เพิ่มทีละ review"],
    },
    title: "รู้ว่า QuerySet ยิง SQL ตอนไหน",
    summary: "QuerySet ยังไม่ query database ทันที ให้ประกอบ filter, order, limit และโหลด relation ให้ครบก่อนวน loop หรือสร้างข้อมูลแสดงผล.",
    takeaways: ["เวลารีวิว ORM ให้ดูทั้งจุดที่สร้าง QuerySet และจุดที่มันถูก evaluate จริง โดยเฉพาะใน loop ที่เสี่ยง N+1 query."],
    whatToReview: [
      "โค้ดที่ดีประกอบ query ให้ครบ ใช้ `select_related` กับ author และ `prefetch_related` กับ comments ก่อนนำผลลัพธ์ไปสร้าง card.",
      "โค้ดที่ควรปรับดูสั้น แต่การเรียก `review.author` และ `review.comments.count()` ใน loop อาจยิง query เพิ่มสำหรับแต่ละ review.",
    ],
    reviewNotes: [
      "อย่าตัดสิน ORM จากจำนวนบรรทัดอย่างเดียว ให้ไล่ว่า filter/order/slice อยู่ตรงไหน โหลด relation หรือยัง และ query ถูกยิงจริงตอนใด.",
    ],
  },
  "django/model-manager-boundaries": {
    codeComments: {
      goodCode: [
        "ตั้งชื่อกฎ visible_to ไว้จุดเดียว ไม่ให้ view copy filter เอง",
        "ซ่อน select_related ไว้หลังชื่อ query ที่อ่านง่าย",
      ],
      badCode: ["filter ที่ copy ซ้ำหลาย view มักแก้ไม่ครบเมื่อกฎเปลี่ยน"],
    },
    title: "แยกกฎ query ที่ใช้ซ้ำไว้ใน manager",
    summary: "ย้าย filter ที่เป็นกฎของระบบไปไว้ใน custom QuerySet หรือ manager method เพื่อให้ view เรียกใช้ด้วยชื่อเดียวกัน.",
    takeaways: ["ถ้า filter เดียวกันโผล่หลาย view ควรตั้งชื่อเป็น query method เช่น `visible_to()` หรือ `with_author()`."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ `visible_to` และ `with_author` ให้ view ขอ query ตามภาษาของระบบได้ตรง ๆ.",
      "โค้ดที่ควรปรับ copy filter `published`/`deleted` ไปหลาย view เมื่อกฎการมองเห็นเปลี่ยน อาจแก้ไม่ครบทุกทาง.",
    ],
    reviewNotes: [
      "manager และ custom QuerySet เป็นที่ดีสำหรับคำศัพท์ของระบบ เช่น visible, published, archived หรือ owned by user เพราะชื่อเหล่านี้ช่วยให้ reviewer เห็นเจตนาเร็ว.",
    ],
  },
  "django/forms-and-validation": {
    codeComments: {
      goodCode: [
        "ModelForm กำหนดว่า field ไหนส่งเข้ามาได้",
        "POST ที่ไม่ผ่าน validation กลับไปหน้า form พร้อม error",
      ],
      badCode: ["อ่าน request.POST ตรง ๆ ทำให้ข้าม validation ของ form"],
    },
    title: "ให้ Form/ModelForm ตรวจข้อมูลก่อนบันทึก",
    summary: "ใช้ `Form` หรือ `ModelForm` ตรวจ `request.POST` ก่อนสร้างหรือแก้ไข model เพื่อให้ field, error และ validation อยู่ในทางเดียวกัน.",
    takeaways: ["ข้อมูลจาก request ควรถูก validate เป็น `cleaned_data` หรือผ่าน `form.save()` ก่อนแตะ database."],
    whatToReview: [
      "โค้ดที่ดีรวม validation ไว้ใน `ReviewForm`, ใช้ `form.is_valid()` และให้ POST ที่ผิดกลับไปหน้า form พร้อม error.",
      "โค้ดที่ควรปรับอ่าน `request.POST` ตรง ๆ ทำให้ required field, trimming, error message และกฎของข้อมูลหายไปจากจุดรับ request.",
    ],
    reviewNotes: [
      "ใน Django form คือด่านตรวจข้อมูลจากผู้ใช้ ตอนรีวิวให้ดูว่า invalid input ถูกออกแบบเป็น flow ปกติ ไม่ใช่ปล่อยให้พังตอน save.",
    ],
  },
  "django/class-based-view-responsibilities": {
    codeComments: {
      goodCode: ["override นี้เปลี่ยนเฉพาะ query ของหน้า list"],
      badCode: ["GET เริ่มส่ง email และสร้างรายงาน ไม่ได้แค่ตอบ request แล้ว"],
    },
    title: "ให้ class-based view จัด request ไม่ใช่แบกทุก logic",
    summary: "class-based view ควรทำให้ flow request/response ชัด ส่วน query หนัก รายงาน หรือการส่ง email ควรแยกไป method/function ที่ตั้งชื่อชัด.",
    takeaways: ["CBV ที่ดีควรบอกว่า request ไหลอย่างไร ไม่ใช่กลายเป็นไฟล์รวม query, report และ side effect ทุกอย่าง."],
    whatToReview: [
      "โค้ดที่ดีใช้ `ListView` สำหรับ flow หน้า list และ override แค่ `get_queryset()` เพื่อบอกว่าต้องเห็น review ชุดไหน.",
      "โค้ดที่ควรปรับเอา query, report และการส่ง email ไปไว้ใน `get()` จนชื่อ view บอกความซับซ้อนจริงไม่หมด.",
    ],
    reviewNotes: [
      "CBV อ่านง่ายเมื่อแต่ละ override มีเหตุผลเดียว ถ้า `get()` หรือ `post()` ยาวจนเหมือน service ให้แยก behavior ออกไปตั้งชื่อก่อน.",
    ],
  },
  "django/csrf-and-unsafe-methods": {
    codeComments: {
      goodCode: ["ใช้ POST และ login เพื่อป้องกัน action ที่เปลี่ยนข้อมูล"],
      badCode: ["csrf_exempt เอาเกราะสำคัญฝั่ง browser ออก"],
    },
    title: "อย่าปิด CSRF กับ request ที่เปลี่ยนข้อมูล",
    summary: "action ที่เปลี่ยนข้อมูล เช่น publish review ควรใช้ POST, login และ CSRF protection ของ Django ไม่ใช่ปิด CSRF เพื่อให้ form ผ่านง่าย.",
    takeaways: ["request ที่เปลี่ยนข้อมูลควรมี CSRF protection เว้นแต่เป็น API/webhook ที่มีระบบ auth หรือ signature ชัดเจนแทน."],
    whatToReview: [
      "โค้ดที่ดีบังคับ POST, บังคับ login และค้นหา review เฉพาะของ user คนนั้น โดยปล่อยให้ CSRF middleware ทำงาน.",
      "โค้ดที่ควรปรับใช้ `csrf_exempt` และไม่ตรวจ ownership ทำให้ action สำคัญถูกเรียกจากที่ที่ระบบไม่ได้ตั้งใจได้ง่าย.",
    ],
    reviewNotes: [
      "เมื่อเห็น `csrf_exempt` ให้ชะลอและถามเหตุผล อาจถูกต้องสำหรับ signed webhook แต่ไม่ควรเป็นทางลัดเพื่อแก้ form ที่พัง.",
    ],
  },
  "django/settings-environments": {
    codeComments: {
      goodCode: [
        "secret ที่จำเป็นหาย ให้พังตั้งแต่ตอนเริ่ม app",
        "host และ CSRF rule มาจาก environment ของแต่ละที่",
      ],
      badCode: ["ค่า wildcard เปิดกว้างเกินไปสำหรับ production"],
    },
    title: "แยก settings ตาม environment ให้ปลอดภัย",
    summary: "โหลด secret, DEBUG, allowed hosts และ CSRF origins จาก environment variable เพื่อให้ local, staging และ production ตั้งค่าแยกกันได้.",
    takeaways: ["Django settings คือโค้ดฝั่ง operation และ security จึงควรรีวิวเหมือนโค้ด production ไม่ใช่ไฟล์ config ธรรมดา."],
    whatToReview: [
      "โค้ดที่ดีทำให้ secret, DEBUG, allowed hosts และ CSRF origins มาจาก environment และค่าจำเป็นหายจะพังตั้งแต่เริ่ม app.",
      "โค้ดที่ควรปรับฝังค่าเปิดกว้างอย่าง `DEBUG = True`, `ALLOWED_HOSTS = [\"*\"]` ไว้ใน source ทำให้เสี่ยงหลุดไป production.",
    ],
    reviewNotes: [
      "ตอนรีวิว settings ให้เช็ก `SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS`, CSRF origins, database URL, email backend และค่าที่ต่างกันระหว่าง local/staging/production.",
    ],
  },
  "django/transactions-and-side-effects": {
    codeComments: {
      goodCode: [
        "ล็อก row ระหว่างบันทึก approval นี้",
        "ส่ง email หลัง transaction commit สำเร็จเท่านั้น",
      ],
      badCode: ["email อาจถูกส่งก่อนงาน database สำเร็จครบ"],
    },
    title: "เขียน DB ให้สำเร็จก่อนค่อยส่ง side effect",
    summary: "ใส่ database write ที่ต้องไปด้วยกันใน `transaction.atomic()` และใช้ `on_commit` กับ email/queue เพื่อไม่แจ้งภายนอกก่อน commit สำเร็จ.",
    takeaways: ["ถ้า database, email, queue หรือ cache ต้องเล่าเรื่องเดียวกัน ลำดับ write และ side effect ต้องชัดเจน."],
    whatToReview: [
      "โค้ดที่ดีล็อก row, บันทึก review กับ audit log ใน transaction เดียว และส่ง email หลัง commit สำเร็จด้วย `on_commit`.",
      "โค้ดที่ควรปรับส่ง email ก่อนเขียน audit log ถ้า write สุดท้าย fail ภายนอกจะถูกบอกว่า approve สำเร็จไปแล้วทั้งที่ข้อมูลไม่ครบ.",
    ],
    reviewNotes: [
      "รีวิว workflow หลายขั้นด้วยคำถามว่า ถ้าพังกลางทางจะเกิดอะไร สิ่งที่ user เห็น, email ที่ส่ง และข้อมูลใน database จะยังตรงกันไหม.",
    ],
  },
  "django/tests-client-and-fixtures": {
    codeComments: {
      goodCode: [
        "สร้างข้อมูลที่ request นี้ต้องใช้ไว้ใน test เอง",
        "หลังยิง request ให้เช็กทั้ง database และ response ที่ render",
      ],
      badCode: ["id ที่ hard-code และ GET ที่เปลี่ยนข้อมูลซ่อนช่องโหว่ของ workflow"],
    },
    title: "เขียน view test ที่พิสูจน์ workflow จริง",
    summary: "ใช้ Django test client กับข้อมูลทดสอบที่สร้างเอง แล้ว assert ทั้ง status, template และ state ใน database หลัง request.",
    takeaways: ["view test ที่ดีพิสูจน์ว่า request หนึ่งทำงานถูกจริง ไม่ใช่แค่มีข้อความบางคำขึ้นบนหน้า."],
    whatToReview: [
      "โค้ดที่ดีสร้าง user/review เอง, login user, ส่ง POST ไป URL จาก `reverse()` และ refresh model เพื่อตรวจ state หลัง request.",
      "โค้ดที่ควรปรับพึ่ง id 1 ที่อาจไม่มีจริง ใช้ GET เพื่อเปลี่ยนข้อมูล และ assert แค่ข้อความ ทำให้ workflow จริงพังแต่ test ยังผ่านได้.",
    ],
    reviewNotes: [
      "Django test client มีค่ามากเมื่อ test เล่าพฤติกรรมจากมุมผู้ใช้: เตรียมข้อมูล, ยิง request, แล้วเช็กผลที่ response และ database แสดงออกมาจริง.",
    ],
  },
  "go/package-and-file-organization": {
    codeComments: {
      goodCode: ["รับ dependency ผ่าน constructor ทำให้ฝั่งที่เรียกใช้เห็นว่าต้องเตรียมอะไร"],
      badCode: ["database global ซ่อน dependency ที่ฟังก์ชันต้องใช้จริง"],
    },
    title: "จัด package ให้บอกหน้าที่ของโค้ด",
    summary: "วาง package ตามหน้าที่ของระบบ เช่น `reviews` หรือ `users` แทนการรวมทุกอย่างไว้ใน `utils` เพื่อให้คนอ่านรู้ว่าโค้ดชุดนี้ดูแลเรื่องอะไร.",
    takeaways: ["ใน Go ชื่อ package จะโผล่ตรงจุดที่เรียกใช้เสมอ จึงควรทำให้คนอ่านเดาได้ทันทีว่า dependency นี้รับผิดชอบงานส่วนไหน."],
    whatToReview: [
      "โค้ดที่ดีใช้ package `reviews`, ส่ง `Repository` เข้ามาชัดเจน และ export แค่ `Service` กับ method ที่ฝั่งเรียกใช้ต้องใช้จริง.",
      "โค้ดที่ควรปรับซ่อนงาน publish review ไว้ใน `utils` และใช้ database global ทำให้คนอ่านไม่รู้ว่า function นี้แตะ database หรือ dependency อะไรบ้าง.",
    ],
    reviewNotes: [
      "เวลารีวิว package ให้ลองอ่านจากไฟล์ที่เรียกใช้ ถ้าเห็น `utils.PublishReview()` แล้วไม่รู้ว่า `utils` ดูแลเรื่องอะไร นั่นคือสัญญาณว่าควรแยก package ให้เฉพาะเรื่องขึ้น.",
    ],
  },
  "go/naming-and-exported-api": {
    codeComments: {
      goodCode: ["ฝั่งที่เรียกใช้จะเห็นชื่อนี้เป็น reviews.Repository"],
      badCode: ["ชื่อ exported ซ้ำคำที่ package name บอกไปแล้ว"],
    },
    title: "ตั้งชื่อ API ที่ export ให้อ่านดีจากฝั่งเรียกใช้",
    summary: "ใน Go ชื่อที่ขึ้นต้นตัวใหญ่คือชื่อที่ package อื่นเรียกได้ ควร export เท่าที่จำเป็น และไม่ใส่คำที่ชื่อ package บอกอยู่แล้วซ้ำอีก.",
    takeaways: ["คนใช้จะเห็นชื่อพร้อม package เสมอ เช่น `reviews.Repository` จึงควรตั้งชื่อให้สั้น ชัด และไม่ซ้ำคำเดิม."],
    whatToReview: [
      "โค้ดที่ดีทำให้ฝั่งที่เรียกใช้อ่านเป็น `reviews.Repository`, `reviews.Review` และ `reviews.Status` ได้สั้นและชัด.",
      "โค้ดที่ควรปรับใช้ชื่ออย่าง `ReviewsRepositoryInterface` และ `ReviewObject` ที่ซ้ำคำว่า review จน API ยาวและอ่านรก.",
    ],
    reviewNotes: [
      "เวลารีวิว Go API ให้อ่านจากจุดที่เรียกใช้จริง ถ้าชื่อฟังดูซ้ำ เช่น `reviews.ReviewObject` หรือยาวเพราะเล่ารายละเอียดข้างในมากไป ชื่อนั้นอาจควรสั้นลง.",
    ],
  },
  "go/error-handling-wrapping": {
    codeComments: {
      goodCode: [
        "sentinel error คือ error ที่ตั้งชื่อไว้ให้เช็กเคสเฉพาะ เช่น not found",
        "%w เก็บ error เดิมไว้ให้ errors.Is/errors.As เช็กต่อได้",
      ],
      badCode: ["เหตุผลจริงหายไปหลัง error กว้าง ๆ"],
    },
    title: "คืน error ที่บอกเหตุผลและยังเช็กต่อได้",
    summary: "error ควรบอกว่างานไหนพัง และถ้าโค้ดที่เรียกใช้ต้องแยกเคส เช่น not found ให้ wrap ด้วย `%w` เพื่อใช้ `errors.Is` หรือ `errors.As` ได้.",
    takeaways: ["อย่าคืนแค่ `failed` เพราะคนอ่านและโค้ดที่เรียกใช้จะไม่รู้ว่าเป็น not found, timeout หรือปัญหาอื่นที่ควรจัดการต่างกัน."],
    whatToReview: [
      "โค้ดที่ดีแปลง not found จาก store เป็น `ErrReviewNotFound` ที่ฝั่งเรียกใช้เช็กได้ และใส่ `find review <id>` เพื่อช่วย debug.",
      "โค้ดที่ควรปรับ log error เดิมแล้วคืน `errors.New(\"failed\")` ทำให้ฝั่งเรียกใช้ไม่รู้ว่าเป็น not found, timeout หรือ error อื่น.",
    ],
    reviewNotes: [
      "ไม่จำเป็นต้อง wrap ทุก error เสมอ ให้ wrap เมื่อฝั่งที่เรียกใช้ควรรู้ชนิด error เดิมเพื่อจัดการต่อ และไม่ทำให้รายละเอียดภายในรั่วเกินไป.",
    ],
  },
  "go/context-cancellation": {
    codeComments: {
      goodCode: ["ผูก HTTP request ขาออกกับ timeout/cancel จาก request ต้นทาง"],
      badCode: ["http.Get ไม่มีสัญญาณบอกว่าควรหยุดงานเมื่อไร"],
    },
    title: "ส่ง context ต่อไปยังงาน I/O เพื่อหยุดงานได้",
    summary: "รับ `context.Context` จากฝั่งที่เรียกใช้ แล้วส่งต่อให้ HTTP, database หรือ goroutine เพื่อให้ timeout/cancel หยุดงานทั้งสายได้.",
    takeaways: ["context คือสัญญาณว่า request ยังรอผลอยู่ไหม ไม่ใช่ถุงใส่ option ทั่วไป."],
    whatToReview: [
      "โค้ดที่ดีรับ `ctx` และใช้ `http.NewRequestWithContext` ทำให้ timeout หรือ cancel จาก request ต้นทางไปถึง request ขาออก.",
      "โค้ดที่ควรปรับใช้ `http.Get` ตรง ๆ ถ้า request ต้นทาง timeout หรือผู้ใช้ disconnect งานอาจยังวิ่งต่อโดยไม่มีใครรอผล.",
    ],
    reviewNotes: [
      "ตอนรีวิวให้มองหา HTTP call, database call, lock และ goroutine ที่ควรหยุดเมื่อ request ถูกยกเลิก ถ้าไม่มี context ส่งต่อไปถึงจุดนั้น งานอาจค้างโดยเปล่าประโยชน์.",
    ],
  },
  "go/interfaces-at-boundaries": {
    codeComments: {
      goodCode: ["service ต้องการความสามารถเดียวคือส่งอีเมล"],
      badCode: ["บังคับโค้ดส่งอีเมลให้พึ่ง method ที่ไม่เกี่ยวกับงานนี้"],
    },
    title: "ให้ฝั่งที่ใช้งานประกาศ interface เล็กพอดี",
    summary: "ให้ฝั่งที่ใช้งานประกาศ interface เฉพาะ method ที่ต้องใช้จริง เช่น service ต้องส่งอีเมลก็รับแค่ `Mailer.Send`.",
    takeaways: ["interface ใน Go ควรเล็กพอดีกับงานที่เรียกใช้ ไม่ควรบังคับให้โค้ดจริงทุกตัวรองรับ method ชุดใหญ่เกินจำเป็น."],
    whatToReview: [
      "โค้ดที่ดีให้ service พึ่งแค่ `Mailer` ที่มี `Send` method เดียว ทำให้ production client และ test fake ทำตามได้ง่าย.",
      "โค้ดที่ควรปรับบังคับให้ function ที่ส่งอีเมลต้องรู้จัก SMS, Slack และ `Close()` ทั้งที่ไม่ได้ใช้.",
    ],
    reviewNotes: [
      "ถ้า function เรียก method เดียวแต่รับ interface สี่ method ให้ถามว่ากำลังผูก dependency กว้างเกินไปไหม interface เล็กมัก test และเปลี่ยนง่ายกว่า.",
    ],
  },
  "go/struct-validation-zero-values": {
    codeComments: {
      goodCode: ["constructor ตรวจ field ที่ห้ามว่างตั้งแต่ต้น"],
      badCode: ["ID และ title ว่างอาจกลายเป็น Review ที่ดูเหมือน valid"],
    },
    title: "กันค่าว่างที่ไม่ควรเป็น Review",
    summary: "`zero value` คือค่าเริ่มต้นของ type เช่น string ว่างหรือเลข 0 ถ้า `Review` ห้าม id/title ว่าง ให้ตรวจตั้งแต่ตอนสร้าง.",
    takeaways: ["zero value มีประโยชน์กับหลาย type แต่ object ของงานจริงอย่าง `Review` ยังต้องมีกฎชัดว่า field ไหนห้ามว่าง."],
    whatToReview: [
      "โค้ดที่ดีใช้ `NewReview` trim title และคืน error ถ้า id หรือ title ว่าง ก่อนสร้าง `Review` ให้ส่วนอื่นใช้.",
      "โค้ดที่ควรปรับสร้าง `Review` ได้ทันทีแม้ id/title ว่าง ทำให้ค่าที่ผิดกฎไหลผ่าน codebase เหมือนเป็นข้อมูลถูกต้อง.",
    ],
    reviewNotes: [
      "ตอนรีวิว struct ให้ถามว่า zero value ใช้งานได้จริงไหม ถ้าไม่ได้ ต้องเห็นจุดตรวจข้อมูลที่ชัด เช่น constructor, parser หรือ boundary ก่อน save.",
    ],
  },
  "go/goroutines-and-channel-ownership": {
    codeComments: {
      goodCode: [
        "goroutine ฝั่งส่งเป็นเจ้าของการ close output channel",
        "context cancellation ทำให้ goroutine หยุดได้สะอาด",
      ],
      badCode: [
        "ไม่มีทาง cancel จึงต้องหวังว่า jobs จะถูก close",
        "close channel จากข้างนอกอาจชนกับ sender ที่กำลังส่งอยู่",
      ],
    },
    title: "บอกให้ชัดว่า goroutine หยุดเมื่อไรและใครปิด channel",
    summary: "เมื่อเริ่ม goroutine ต้องเห็นทางหยุดงาน และต้องรู้ว่าใครเป็นเจ้าของการปิด channel เพื่อไม่ให้ค้างหรือ panic.",
    takeaways: ["คนที่ส่งค่าเข้า channel มักควรเป็นคนปิด channel และ goroutine ควรมีทางหยุดเมื่อ context ถูก cancel."],
    whatToReview: [
      "โค้ดที่ดีใช้ทิศทาง channel (`<-chan`, `chan<-`), close `results` จาก goroutine ที่ส่งค่า และออกเมื่อ `ctx.Done()` หรือ `jobs` ถูกปิด.",
      "โค้ดที่ควรปรับไม่มีทาง cancel และมี `StopWorker` ที่ close `results` จากข้างนอก ทั้งที่อาจยังมี goroutine ส่งค่าอยู่.",
    ],
    reviewNotes: [
      "ตอนรีวิว concurrency ให้ถามสี่ข้อ: ใครเริ่ม goroutine, ใครสั่งหยุด, ใครปิด channel, และถ้าฝั่งรับเลิกอ่านจะเกิดอะไร.",
    ],
  },
  "go/defer-resource-cleanup": {
    codeComments: {
      goodCode: ["วาง cleanup ไว้ติดกับจุดเปิดไฟล์สำเร็จ"],
      badCode: ["return ก่อนหน้านี้จะข้าม cleanup ตรงท้าย function"],
    },
    title: "วาง defer close ทันทีหลังเปิด resource สำเร็จ",
    summary: "เมื่อเปิดไฟล์ connection หรือ resource สำเร็จ ให้วาง `defer Close()` ใกล้จุดเปิด เพื่อให้ทุก return path ปิด resource ได้.",
    takeaways: ["cleanup ควรอยู่ใกล้จุดเปิดไฟล์/connection เพื่อให้ reviewer เห็นทันทีว่าแม้ return กลางทางก็ไม่รั่ว."],
    whatToReview: [
      "โค้ดที่ดี `defer file.Close()` ทันทีหลัง `os.Open` สำเร็จ ทำให้ error กลาง loop ก็ยังปิดไฟล์.",
      "โค้ดที่ควรปรับเรียก `file.Close()` แค่ท้าย function ถ้า `importLine` fail แล้ว return ก่อน file handle จะรั่วจน process จัดการเอง.",
    ],
    reviewNotes: [
      "`defer` แข็งแรงที่สุดเมื่อวางหลังเปิด resource สำเร็จทันที ตอนรีวิวให้ไล่ early return แล้วดูว่า cleanup ไม่ได้พึ่งการวิ่งถึงท้าย function.",
    ],
  },
  "go/table-driven-tests": {
    codeComments: {
      goodCode: [
        "แต่ละ row ตั้งชื่อ variation หนึ่งของ behavior เดียวกัน",
        "subtest ทำให้ failure ชี้ไปที่เคสที่พัง",
      ],
      badCode: ["assert ซ้ำ ๆ ให้ failure message กว้างเกินไป"],
    },
    title: "ทำ table-driven test ให้รู้ว่าเคสไหนพัง",
    summary: "รวมเคสทดสอบที่รูปแบบเหมือนกันไว้ในตาราง input/expected/name เพื่อให้รู้ว่าเคสไหนพังและเพิ่มเคสใหม่ง่าย.",
    takeaways: ["test table ควรช่วยเพิ่ม coverage และความอ่านง่าย ไม่ใช่ซ่อนว่า row ไหน fail."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อแต่ละเคส ใช้ `t.Run` และให้ failure message บอก input, actual และ expected value.",
      "โค้ดที่ควรปรับ assert ซ้ำ ๆ ด้วยข้อความ `bad slug` เมื่อ fail ต้องย้อนอ่านเองว่า input ไหนพัง.",
    ],
    reviewNotes: [
      "table-driven test เหมาะเมื่อทุก row เป็นเคสย่อยของพฤติกรรมเดียวกัน ถ้า setup หรือ assertion ของแต่ละ row ต่างกันมาก แยก test จะอ่านง่ายกว่า.",
    ],
  },
  "go/json-http-handler-boundaries": {
    codeComments: {
      goodCode: [
        "ปฏิเสธ field แปลก ๆ ใน JSON แทนที่จะรับ typo เงียบ ๆ",
        "ส่ง request context ต่อให้ service เพื่อให้ cancel ได้",
      ],
      badCode: [
        "ละเลย error ตอนอ่าน/แปลง JSON ทำให้ input พังกลายเป็นข้อมูลปกติ",
        "Background context ทำให้ timeout/disconnect จาก request หายไป",
      ],
    },
    title: "ให้ HTTP handler อ่าน request และตอบ response ชัด",
    summary: "HTTP handler ควรเช็ก method, decode JSON, validate, ส่ง `r.Context()` เข้า service และตอบ status/JSON ให้ตรงกับผลลัพธ์.",
    takeaways: ["handler คือจุดรับ request ด่านหน้าของระบบ จึงควรทำให้การอ่าน request, error และ status อ่านได้ตรงไปตรงมา."],
    whatToReview: [
      "โค้ดที่ดีเช็ก POST, ปิด body, decode เข้า `createReviewRequest`, reject field แปลก, ส่ง `r.Context()` และตอบ `201 Created`.",
      "โค้ดที่ควรปรับ ignore error จาก `ReadAll`/`Unmarshal`, ใช้ `map[string]string` หลวม ๆ, ใช้ `context.Background()` และตอบเหมือน success เสมอ.",
    ],
    reviewNotes: [
      "ตอนรีวิว handler ให้ไล่ flow จากขอบระบบ: method ถูกไหม, body ถูกปิดไหม, JSON ผิดแล้วตอบอะไร, context ไปถึง service ไหม และ status ตรงกับผลลัพธ์ไหม.",
    ],
  },
  "docker/build-context-dockerignore": {
    codeComments: {
      goodCode: [
        "ส่งเข้า Docker เฉพาะไฟล์ที่จำเป็นต่อการ build image",
        "ตัดไฟล์ของเครื่องเราออก ไม่ให้ปนเข้า image โดยไม่ตั้งใจ",
      ],
      badCode: ["ไม่มี rule แปลว่า Docker ส่งทั้งโปรเจกต์เข้า builder"],
    },
    title: "คุมไฟล์ที่ส่งเข้า Docker ตอน build",
    summary: "`build context` คือชุดไฟล์ที่ Docker ส่งเข้าไปตอน build image ควรกำหนดด้วย `.dockerignore` ให้เหลือเฉพาะไฟล์ที่ต้องใช้จริง.",
    takeaways: ["รีวิว `.dockerignore` เหมือนด่านแรกของ Docker เพราะไฟล์ที่หลุดเข้า build context อาจทำให้ build ช้า cache พัง หรือมี secret ติดเข้า image."],
    whatToReview: [
      "โค้ดที่ดีตัด dependency folder, output จากการ build, secret, log และ metadata ของ repo ออกจากชุดไฟล์ที่ Docker จะส่งเข้า builder.",
      "โค้ดที่ควรปรับปล่อยให้ Docker ส่งทั้ง repository เข้า builder ทำให้ build ช้า cache พังง่าย และเสี่ยงมีไฟล์ลับหรือไฟล์ใหญ่ติดเข้า image.",
    ],
    reviewNotes: [
      "เวลารีวิว Docker ให้เริ่มจาก `.dockerignore` ก่อนเสมอ เพราะ Dockerfile ที่ดูดีอาจยัง build ช้า หรือไม่ปลอดภัย ถ้าไฟล์ที่ถูกส่งเข้าไปเยอะและคุมไม่อยู่.",
    ],
  },
  "docker/base-images-and-tag-pinning": {
    codeComments: {
      goodCode: [
        "ระบุ version ของ Node และ Alpine ให้ชัด เพื่อให้ rebuild ได้ผลเดิม",
        "ติดตั้งเฉพาะ dependency ที่ต้องใช้ตอนรัน production",
      ],
      badCode: [
        "latest อาจเปลี่ยนเป็น Node หรือ OS package คนละชุดในอนาคต",
        "npm install อาจทำให้ dependency เปลี่ยนตอน build image",
      ],
    },
    title: "image ตั้งต้นและการล็อก version",
    summary: "`base image` คือฐานของ container เช่น Node และ OS เลือก tag ที่เจาะจงเพื่อไม่ให้ rebuild วันหลังแล้วได้ runtime คนละชุดแบบไม่รู้ตัว.",
    takeaways: ["base image คือ dependency ตัวแรกของ image จึงควรถูกรีวิวเหมือน package version ตัวหนึ่ง ไม่ใช่ปล่อยให้ `latest` เปลี่ยนเอง."],
    whatToReview: [
      "โค้ดที่ดีใช้ image ตั้งต้นที่เจาะจง เช่นระบุ version ของ runtime และ OS base แล้วติดตั้งเฉพาะ dependency ที่ต้องใช้ตอนรันจริง.",
      "โค้ดที่ควรปรับใช้ `latest` ทำให้ commit เดิมอาจ rebuild แล้วได้ runtime หรือ OS package คนละชุด โดยไม่มีใครเห็นใน review.",
    ],
    reviewNotes: [
      "การล็อก version ไม่ได้แปลว่าห้ามอัปเดต แต่ทำให้การอัปเดตเป็นการเปลี่ยนแปลงที่ CI, security scanner และ reviewer มองเห็นได้.",
    ],
  },
  "docker/layer-cache-dependency-order": {
    codeComments: {
      goodCode: [
        "copy ไฟล์ dependency ก่อน เพื่อให้ npm ci ใช้ cache เดิมได้",
        "ค่อย copy source code ทีหลัง เมื่อแก้โค้ดจะไม่ทำให้ install ใหม่หมด",
      ],
      badCode: ["copy ทั้งโปรเจกต์ก่อน ทำให้แก้ไฟล์เล็กนิดเดียวก็ทำลาย cache ของ install"],
    },
    title: "จัดลำดับ Dockerfile ให้ cache ไม่พังง่าย",
    summary: "วางคำสั่งใน Dockerfile ให้ไฟล์ dependency ถูก copy และติดตั้งก่อน source code เพื่อให้แก้โค้ดแล้วไม่ต้อง install ใหม่ทุกครั้ง.",
    takeaways: ["Docker cache ทำงานตามลำดับ layer ถ้า layer ก่อนหน้าเปลี่ยน layer ถัดไปจะต้อง build ใหม่ทั้งหมด."],
    whatToReview: [
      "โค้ดที่ดี copy เฉพาะ `package.json` และ lockfile ก่อนติดตั้ง dependency ทำให้แก้ source code แล้ว Docker ยังใช้ cache ของ `npm ci` ได้.",
      "โค้ดที่ควรปรับ copy ทั้ง project ก่อน install dependency ทำให้แก้ไฟล์เล็ก ๆ ก็ทำให้ต้องติดตั้ง dependency ใหม่ทั้งชุด.",
    ],
    reviewNotes: [
      "เวลารีวิวให้มองหา `RUN` step ที่ใช้เวลานาน เช่น install dependency แล้วดูว่ามีไฟล์ที่เปลี่ยนบ่อยถูก copy มาก่อนหน้านั้นหรือไม่.",
    ],
  },
  "docker/multi-stage-builds": {
    codeComments: {
      goodCode: [
        "stage แรกใช้สำหรับติดตั้งและ build เท่านั้น ไม่ต้องถูกส่งไปรันจริง",
        "stage สุดท้ายรับเฉพาะไฟล์ที่ต้องใช้ตอนรันแอป",
      ],
      badCode: ["stage เดียวทำให้ source, dev dependency และ build tool ติดไป production"],
    },
    title: "แยกของที่ใช้ build ออกจากของที่ใช้รันจริง",
    summary: "ใช้ multi-stage build เพื่อให้ stage แรกใช้ติดตั้งและ build ส่วน image สุดท้ายมีเฉพาะไฟล์ที่แอปต้องใช้ตอนรัน production.",
    takeaways: ["multi-stage build ช่วยลดขนาด image และลดเครื่องมือ build, source file หรือ dev dependency ที่ไม่ควรติดไป production."],
    whatToReview: [
      "โค้ดที่ดีเก็บเครื่องมือ install/build ไว้ใน stage ก่อนหน้า แล้ว copy เฉพาะไฟล์ที่ต้องใช้ตอนรันเข้า image สุดท้าย.",
      "โค้ดที่ควรปรับใช้ stage เดียว ทำให้ source file, dev dependency และ build tool ติดไปกับ image ที่รัน production.",
    ],
    reviewNotes: [
      "สำหรับแอปที่ต้อง compile หรือ bundle ให้ถามเสมอว่า image สุดท้ายต้องใช้อะไรจริง ๆ ของที่ใช้แค่ตอน build ไม่ควรติดไปตอนรัน.",
    ],
  },
  "docker/copy-add-and-workdir": {
    title: "COPY, ADD และ WORKDIR",
    codeComments: {
      goodCode: [
        "WORKDIR ทำให้ path ถัดจากนี้อิงจาก /app ชัดเจน",
        "copy ไฟล์ที่รู้แน่ก่อน install เพื่อให้รีวิว input ได้ง่าย",
      ],
      badCode: [
        "cd ใน RUN มีผลแค่บรรทัดนั้น ไม่ได้ตั้ง working directory ให้ layer ถัดไป",
        "ADD อาจดาวน์โหลดหรือแตกไฟล์ให้เอง ทำให้พฤติกรรมซ่อนอยู่ในบรรทัดเดียว",
      ],
    },
    summary: "ใช้ `WORKDIR` เพื่อกำหนด path ทำงานให้ชัด ใช้ `COPY` สำหรับไฟล์ในโปรเจกต์ และใช้ `ADD` เฉพาะเมื่ออยากได้ความสามารถพิเศษของมันจริง ๆ.",
    takeaways: ["ทำให้ path, ไฟล์ที่ copy และขั้นตอนดาวน์โหลด/แตกไฟล์ชัดเจน อย่าซ่อนพฤติกรรมสำคัญไว้ใน Dockerfile บรรทัดเดียว."],
    whatToReview: [
      "โค้ดที่ดีใช้ `WORKDIR` แบบ absolute และ copy ไฟล์ที่ตั้งใจใช้จริง ทำให้รู้ว่า install อาศัย input อะไรบ้าง.",
      "โค้ดที่ควรปรับพึ่ง `cd` ใน `RUN` แต่ละบรรทัด ดึงไฟล์จากอินเทอร์เน็ตผ่าน `ADD` และ copy ทั้ง repository ไปไว้ที่ root ของ image.",
    ],
    reviewNotes: [
      "โดยทั่วไป `COPY` อ่านง่ายกว่า `ADD` เพราะทำหน้าที่ตรงตัวกว่า ใช้ `ADD` เมื่ออยากได้ความสามารถพิเศษ เช่นแตก archive และควรเห็นเหตุผลนั้นใน review.",
    ],
  },
  "docker/non-root-user-permissions": {
    codeComments: {
      goodCode: [
        "สร้าง user เฉพาะสำหรับ process ของแอป",
        "กำหนด owner ของไฟล์ให้ตรงกับ user ที่จะรันจริง",
        "สลับออกจาก root ก่อนเริ่ม process ของแอป",
      ],
      badCode: ["ถ้าไม่กำหนด USER แอปจะรันด้วย root ตามค่า default"],
    },
    title: "รัน container ด้วย user ที่ไม่ใช่ root",
    summary: "สร้าง user สำหรับแอป กำหนด owner ของไฟล์ให้ถูกต้อง และสลับไปใช้ user นั้นก่อนเริ่ม process เพื่อลดสิทธิ์ใน container.",
    takeaways: ["container ไม่ควรรันแอปด้วย root ถ้าแอปไม่มีเหตุผลชัดเจนว่าจำเป็นต้องใช้สิทธิ์สูงขนาดนั้น."],
    whatToReview: [
      "โค้ดที่ดีสร้าง user เฉพาะของแอป กำหนด owner ตอน copy ไฟล์ และสลับไปใช้ user นั้นก่อนเริ่ม process.",
      "โค้ดที่ควรปรับปล่อยให้แอปรันด้วย root ตามค่า default ถ้า process ถูกเจาะ สิทธิ์ที่ได้ใน container จะมากเกินจำเป็น.",
    ],
    reviewNotes: [
      "เมื่อเพิ่ม `USER` แล้วต้องรีวิว directory ที่แอปต้องเขียนด้วย เช่น cache, temp หรือ upload path ไม่อย่างนั้น container อาจ start ได้แต่พังตอนใช้งานจริง.",
    ],
  },
  "docker/args-env-and-secrets": {
    title: "ARG, ENV และ secret",
    codeComments: {
      goodCode: [
        "build args ใช้กับตัวเลือกตอน build ไม่ใช่ที่เก็บ secret",
        "secret ถูก mount ตอน runtime แทนการฝังลงใน image",
      ],
      badCode: [
        "secret ที่ส่งผ่าน ARG อาจติดอยู่ใน build history",
        "ENV ทำให้ค่าลับกลายเป็นส่วนหนึ่งของ config ใน image",
      ],
    },
    summary: "แยก `ARG` ที่ใช้ตอน build, `ENV` ที่เป็น config ตอนรัน และ secret ที่เป็นค่าลับออกจากกัน เพื่อไม่ให้ secret ถูกฝังเข้า image.",
    takeaways: ["secret ควรถูกส่งเข้ามาตอน runtime หรือผ่าน secret mount ไม่ใช่ถูกเก็บไว้ใน image layer, build history หรือ config ของ image."],
    whatToReview: [
      "โค้ดที่ดีแยก build args, runtime env และ secrets ออกจากกัน ทำให้รู้ว่าค่าไหนใช้ตอน build ค่าไหนเป็น config ตอนรัน และค่าไหนเป็นความลับ.",
      "โค้ดที่ควรปรับส่ง secret ผ่าน `ARG` แล้วเก็บเป็น `ENV` ทำให้ค่าลับอาจติดอยู่ใน image configuration หรือ build history.",
    ],
    reviewNotes: [
      "ถ้าค่าเป็น secret ให้คิดไว้ก่อนว่า image layer, log, metadata หรือ build history อาจถูกเปิดดูได้ ควรใช้ Compose secrets, orchestrator secrets หรือ BuildKit secret mounts.",
    ],
  },
  "docker/entrypoint-cmd-and-signals": {
    title: "ENTRYPOINT, CMD และ signal",
    codeComments: {
      goodCode: ["exec form ทำให้ node ได้รับสัญญาณหยุดจาก Docker โดยตรง"],
      badCode: ["shell form ครอบแอปด้วย shell ทำให้รับสัญญาณหยุดยากขึ้น"],
    },
    summary: "ใช้คำสั่งแบบ exec form เพื่อให้ process หลักของแอปรับสัญญาณหยุดจาก Docker ได้ตรงและปิดตัวได้เรียบร้อย.",
    takeaways: ["signal คือสัญญาณที่ Docker ส่งมาตอนสั่งหยุด container เช่น `SIGTERM` process หลักควรรับสัญญาณนี้โดยตรง."],
    whatToReview: [
      "โค้ดที่ดีใช้ exec form ทำให้ process ของแอปได้รับสัญญาณหยุดจาก Docker โดยตรง.",
      "โค้ดที่ควรปรับใช้ shell form ทำให้ shell กลายเป็น process หลักของ container แล้วการส่งต่อสัญญาณหยุดไปหาแอปคาดเดายากขึ้น.",
    ],
    reviewNotes: [
      "ถ้าจำเป็นต้องใช้ entrypoint script ให้เช็กว่าท้าย script ใช้ `exec \"$@\"` เพื่อให้ script เตรียม environment แล้วส่งต่อไปยัง process จริงของแอป.",
    ],
  },
  "docker/healthchecks-and-runtime-config": {
    codeComments: {
      goodCode: [
        "ประกาศ port ที่แอปควรรับ request",
        "ตรวจ endpoint ของแอปจริง ไม่ใช่แค่เช็กว่า process ยังอยู่",
      ],
      badCode: ["EXPOSE บอกแค่ port ที่ตั้งใจใช้ ไม่ได้บอกว่าแอปยังทำงานปกติ"],
    },
    title: "healthcheck และ config ตอนรันจริง",
    summary: "บอกให้ชัดว่า container ต้องรันด้วย config อะไร เปิด port ไหน และมี healthcheck ที่พิสูจน์ว่าแอปรับงานได้จริง.",
    takeaways: ["container ที่ยัง running อยู่ไม่ได้แปลว่าแอป healthy เสมอ ต้องมี healthcheck ที่ตรวจสิ่งที่ผู้ใช้หรือระบบอื่นต้องพึ่งจริง ๆ."],
    whatToReview: [
      "โค้ดที่ดีประกาศค่า default ตอนรันจริง เปิด port ที่คาดไว้ และผูก healthcheck กับ endpoint ที่บอกว่าแอปพร้อมรับ request.",
      "โค้ดที่ควรปรับอาจยัง running อยู่แม้แอปรับ request ไม่ได้ ทำให้คนดูแลระบบรู้ช้าเมื่อมีปัญหา.",
    ],
    reviewNotes: [
      "healthcheck ควรเร็วและมีความหมาย อย่าเช็กแค่ว่า process ยังอยู่ ถ้าปัญหาจริงคือ database พังหรือ HTTP server รับ request ไม่ได้.",
    ],
  },
  "docker/compose-services-volumes-networks": {
    codeComments: {
      goodCode: [
        "เปิดออก host เฉพาะ port ของแอปที่ต้องเรียกจากข้างนอก",
        "ใช้ named volume เพื่อให้ข้อมูล database ยังอยู่หลัง restart",
        "ให้ service คุยกันผ่าน network ภายในเท่านั้น",
      ],
      badCode: [
        "host networking ทำให้ boundary ระหว่าง container กับเครื่อง host หายไป",
        "mount / เปิด filesystem ของเครื่อง host ให้ container เห็น",
        "เปิด database port ออก host ทั้งที่แอปอาจเป็นคนเดียวที่ต้องใช้",
      ],
    },
    title: "Compose: service, volume และ network",
    summary: "ใช้ Compose ให้เห็นชัดว่า service ไหนคุยกับใครได้ port ไหนเปิดออกเครื่อง host และข้อมูลไหนต้องอยู่รอดหลัง restart.",
    takeaways: ["Compose file ที่ดีทำให้ความสัมพันธ์ของ service, การเก็บข้อมูล และการเปิด port เป็นเรื่องที่ตั้งใจ ไม่ใช่เปิดทุกอย่างไว้ก่อนแล้วค่อยแก้ทีหลัง."],
    whatToReview: [
      "โค้ดที่ดีตั้งชื่อ volume สำหรับข้อมูลถาวร ให้ service คุยกันผ่าน network ภายใน และเปิดออก host เฉพาะ port ของแอปที่ต้องใช้.",
      "โค้ดที่ควรปรับใช้ host networking, mount filesystem ของเครื่อง host และเปิด database port ออกมาทั้งที่ไม่มีเหตุผลชัดเจน.",
    ],
    reviewNotes: [
      "เวลารีวิว Compose ให้ถาม 3 อย่าง: host เข้าถึง service ไหนได้บ้าง, ข้อมูลไหนยังอยู่หลัง restart, และ mount ไหนอาจไปแก้ไฟล์บนเครื่อง dev หรือ production ได้.",
    ],
  },
  "tailwindcss/utility-composition-readability": {
    codeComments: {
      goodCode: [
        "กลุ่มนี้คุมโครงสร้างและขนาดของปุ่ม",
        "กลุ่มนี้คุมสี เงา และสีตอน hover",
        "กลุ่มนี้คุม focus และ disabled state",
      ],
      badCode: ["className ยาวก้อนเดียวทำให้ layout, สี และ state ปนกัน"],
    },
    title: "จัดกลุ่ม utility class ตามหน้าที่",
    summary: "แยก Tailwind class ตามหน้าที่ เช่น โครงสร้าง สี และสถานะ เพื่อให้คนรีวิวอ่าน `className` ยาว ๆ แล้วเห็นเจตนาของ UI.",
    takeaways: ["ถึง Tailwind จะเขียน style ด้วย utility class แต่ class ที่ใช้ในงานจริงยังควรถูกจัดกลุ่มให้อ่านออกว่าแต่ละชุดทำหน้าที่อะไร."],
    whatToReview: [
      "โค้ดที่ดีแยก class กลุ่มโครงสร้าง กลุ่มสี และกลุ่มสถานะการโต้ตอบ ทำให้หา class ซ้ำหรือ class ที่ชนกันได้เร็ว.",
      "โค้ดที่ควรปรับยัดทุกอย่างไว้ใน `className` ก้อนเดียว และมี `rounded` ซ้ำกัน ทำให้ UI แสดงผลได้แต่คนรีวิวอ่านเจตนาได้ยาก.",
    ],
    reviewNotes: [
      "Tailwind ไม่ได้แปลว่าต้องเลิกจัดระเบียบทั้งหมด ถ้า class ชุดหนึ่งกลายเป็นรูปแบบ UI ที่ใช้ซ้ำ ให้จัดกลุ่มหรือดึงเป็น constant ระดับ component เพื่อให้รีวิวได้ง่าย.",
    ],
  },
  "tailwindcss/responsive-breakpoints": {
    codeComments: {
      goodCode: ["เริ่มจาก layout จอเล็ก แล้วค่อยเพิ่มคอลัมน์เมื่อจอกว้างขึ้น"],
      badCode: ["ล็อกขนาด desktop ทำให้จอเล็กต้องเลื่อนหรือถูกบีบ"],
    },
    title: "เริ่มจากจอเล็ก แล้วค่อยเพิ่ม breakpoint",
    summary: "ให้ class พื้นฐานใช้ได้บนมือถือก่อน แล้วใช้ breakpoint อย่าง `sm`, `md`, `lg` เพิ่ม layout สำหรับจอใหญ่ แทนการล็อกหน้าจอแบบ desktop.",
    takeaways: ["responsive ใน Tailwind เป็นแนว mobile-first: class ปกติคือจอเล็ก ส่วน `sm:` หรือ `lg:` คือการเพิ่มกฎเมื่อจอกว้างขึ้น."],
    whatToReview: [
      "โค้ดที่ดีเริ่มจากหนึ่งคอลัมน์บนจอเล็ก แล้วเพิ่มเป็นสองหรือสามคอลัมน์ด้วย `sm` และ `lg` พร้อม container ที่ยืดหยุ่น.",
      "โค้ดที่ควรปรับล็อกความกว้างและจำนวนคอลัมน์แบบ desktop ทำให้จอเล็ก overflow หรือถูกบีบโดยไม่มี class อธิบายพฤติกรรม responsive.",
    ],
    reviewNotes: [
      "เวลารีวิว responsive Tailwind ให้อ่าน class พื้นฐานก่อน แล้วค่อยดู `sm`, `md`, `lg` ถ้า class พื้นฐานใช้บนมือถือไม่ได้ แปลว่าโค้ดอาจคิดจาก desktop ก่อนแล้วค่อยบีบลง.",
    ],
  },
  "tailwindcss/state-variants-hover-focus-disabled": {
    codeComments: {
      goodCode: ["ปุ่มบอกครบทั้ง hover, keyboard focus และ disabled state"],
      badCode: ["outline-none ลบ focus ของ keyboard แต่ไม่มี style ใหม่มาทดแทน"],
    },
    title: "สถานะของปุ่ม: hover, focus และ disabled",
    summary: "รีวิวปุ่มและ link ให้ครบทั้งตอน hover, ตอนใช้ keyboard focus และตอน disabled ไม่ใช่ดูแค่ตอนเอาเมาส์ชี้แล้วสวย.",
    takeaways: ["ปุ่มและ link ควรบอกสถานะชัดเจนทั้งตอนปกติ, hover, keyboard focus และ disabled เพราะผู้ใช้ไม่ได้ใช้งานด้วยเมาส์เสมอไป."],
    whatToReview: [
      "โค้ดที่ดีมี focus ring ที่เห็นชัดสำหรับผู้ใช้ keyboard และมี disabled style ที่บอกว่าปุ่มกดไม่ได้จริง.",
      "โค้ดที่ควรปรับมีแค่ hover และลบ outline โดยไม่มี focus style ใหม่ ทำให้ผู้ใช้ keyboard ไม่รู้ว่าตอนนี้ focus อยู่ตรงไหน.",
    ],
    reviewNotes: [
      "ถ้าเห็น `hover:` ใน element ที่กดได้ ให้มองหา `focus-visible:` และ `disabled:` ด้วย state ที่หายไปมักกลายเป็น UX bug ตอนใช้งานจริง.",
    ],
  },
  "tailwindcss/spacing-layout-consistency": {
    codeComments: {
      goodCode: ["ใช้ spacing scale เดียวกัน ทำให้ระยะใน panel อ่านเป็นระบบ"],
      badCode: ["ค่าระยะเฉพาะจุดหลายตัวมักเกิดจากการขยับให้เหมือน screenshot"],
    },
    title: "ใช้ spacing scale แทนตัวเลขเฉพาะหน้า",
    summary: "ใช้ spacing scale ของโปรเจกต์ให้สม่ำเสมอ แทนการใส่ค่าพิกเซลเฉพาะจุดหลายตัวที่ทำให้ layout แก้ต่อยาก.",
    takeaways: ["ระยะห่างใน component ควรดูเป็นระบบ ถ้ามีค่าประหลาดหลายจุดมักแปลว่าโค้ดถูกขยับตาม screenshot เฉพาะหน้า."],
    whatToReview: [
      "โค้ดที่ดีใช้ padding ของ container และ `space-y` เพื่อให้ระยะห่างแนวตั้งอ่านง่ายและเปลี่ยนพร้อมกันได้.",
      "โค้ดที่ควรปรับใช้ค่าพิกเซลในวงเล็บเหลี่ยมเกือบทุก gap เป็นสัญญาณว่า layout ถูกจูนตาม screenshot เดียวมากกว่าวางเป็นระบบ.",
    ],
    reviewNotes: [
      "ค่ากำหนดเองหนึ่งจุดอาจสมเหตุสมผล แต่ถ้ามาเป็นกลุ่มใน component เดียว ให้ถามว่าควรกลับไปใช้ spacing scale ของโปรเจกต์หรือไม่ เพื่อให้ UI ส่วนอื่นจัดแนวกันได้.",
    ],
  },
  "tailwindcss/theme-tokens-and-custom-values": {
    codeComments: {
      goodCode: ["ใช้ชื่อจาก theme ทำให้สีแบรนด์เปลี่ยนและรีวิวได้จากจุดกลาง"],
      badCode: ["hex และ pixel value ซ่อนค่าสำคัญไว้ใน component เดียว"],
    },
    title: "ค่ากลางของดีไซน์ (theme tokens)",
    summary: "สี ระยะ หรือขนาดที่ใช้ซ้ำควรมีชื่อกลางใน theme เช่น brand color หรือ radius ส่วนค่าที่เขียนเองเฉพาะจุดควรใช้เมื่อมีเหตุผลจริง ๆ.",
    takeaways: ["theme token คือค่ากลางที่ทีมเรียกด้วยชื่อเดียวกัน ถ้าค่าสี ระยะ หรือ radius ถูกใช้ซ้ำหลายที่ มักควรย้ายไปอยู่ใน theme."],
    whatToReview: [
      "โค้ดที่ดีใช้ utility ที่ตั้งชื่อจาก theme เช่นสีแบรนด์ ทำให้ค่าที่ใช้ซ้ำถูกเปลี่ยนและรีวิวจากจุดกลางได้.",
      "โค้ดที่ควรปรับฝังสี hex, shadow และ pixel value ไว้ใน component เดียว ทำให้มีโอกาสถูก copy ไปใช้ต่อแบบไม่ตรงกัน.",
    ],
    reviewNotes: [
      "custom value ของ Tailwind มีประโยชน์ แต่ถ้าค่าเดิมซ้ำหลายที่ มันอาจเป็น theme token ที่ยังไม่มีชื่อ เวลารีวิวให้ถามว่าค่านี้ควรเป็นค่าของ component นี้เท่านั้น หรือควรเป็นค่ากลางของระบบ.",
    ],
  },
  "tailwindcss/dark-mode-variants": {
    codeComments: {
      goodCode: ["จับคู่สี light/dark ของพื้น ขอบ ตัวอักษร และ link ไว้ในที่เดียว"],
      badCode: ["เปลี่ยนเฉพาะหัวข้อ แต่พื้น card และข้อความส่วนอื่นยังเป็นชุดสีสว่าง"],
    },
    title: "ปรับ dark mode ให้ครบทั้ง component",
    summary: "จับคู่ style โหมดสว่างและโหมดมืดไว้ใน component เดียวกัน ทั้งพื้นหลัง ขอบ ตัวอักษร และ state ของ link.",
    takeaways: ["dark mode ไม่ควรเปลี่ยนแค่ตัวอักษรที่เห็นชัด แต่ต้องดูพื้นหลัง ขอบ ข้อความรอง และ state สีด้วย ไม่อย่างนั้นบางส่วนจะอ่านยาก."],
    whatToReview: [
      "โค้ดที่ดีจับคู่ค่าสีโหมดสว่างและโหมดมืดให้ครบทั้งพื้น card, border, ลำดับข้อความ และ link state.",
      "โค้ดที่ควรปรับเปลี่ยนเฉพาะ heading ใน dark mode ทำให้ card ยังสว่างหรือข้อความรองอ่านยากเมื่อทั้งหน้ากลายเป็นโหมดมืด.",
    ],
    reviewNotes: [
      "รีวิว dark mode ไม่ใช่แค่ค้นหา `dark:` แต่ต้องดูว่าชั้นที่มีผลต่อ contrast เช่นพื้น ขอบ ข้อความ และ link มีค่าของโหมดมืดครบหรือยัง.",
    ],
  },
  "tailwindcss/class-reuse-component-boundaries": {
    codeComments: {
      goodCode: [
        "map จุดเดียวเป็นเจ้าของสีของแต่ละสถานะ",
        "โครง badge อยู่ใน component เดียว ไม่ต้อง copy หลายที่",
      ],
      badCode: ["แต่ละ branch copy โครง badge เดิม ทำให้แก้ style แล้วหลุดง่าย"],
    },
    title: "แยก class ที่ซ้ำเป็น component หรือ map",
    summary: "ถ้า class ชุดเดิมแทน UI แบบเดียวกัน ให้ย้ายไปอยู่ใน component หรือ map จุดเดียว แทนการ copy `className` ยาว ๆ หลายที่.",
    takeaways: ["Tailwind string ที่ซ้ำกันก็คือ duplication ให้ดึงออกเมื่อมันแทน UI concept เดียวกันจริง ๆ เช่น badge, alert หรือ button variant."],
    whatToReview: [
      "โค้ดที่ดีให้ badge component เป็นเจ้าของโครงสร้างของ badge และเก็บ class ของแต่ละสถานะไว้ใน map จุดเดียว.",
      "โค้ดที่ควรปรับ copy class โครงสร้าง badge ซ้ำในหลาย branch ทำให้เปลี่ยนหน้าตาเล็กน้อยครั้งเดียวต้องแก้หลายจุดและเสี่ยงหลุด.",
    ],
    reviewNotes: [
      "ไม่ต้องดึงทุก className ออกมาเสมอ ให้ดึงเมื่อ class ที่ซ้ำแทน UI เรื่องเดียวกัน และถ้า reviewer จะคอมเมนต์เหมือนกันทุกจุด นั่นคือสัญญาณว่าควรรวมไว้ที่เดียว.",
    ],
  },
  "tailwindcss/arbitrary-values-restraint": {
    codeComments: {
      goodCode: ["ใช้ arbitrary value จุดเดียวเพื่อบอกคอลัมน์ที่ต้องยืดหยุ่นจริง ๆ"],
      badCode: ["ค่ากำหนดเองเต็ม component ทำให้หลุดจาก scale กลางของโปรเจกต์"],
    },
    title: "ใช้ arbitrary value เฉพาะจุดที่มีเหตุผล",
    summary: "ใช้ arbitrary value เช่น `w-[417px]` เฉพาะตอน layout ต้องการค่าพิเศษจริง ๆ ไม่ใช่ใช้แทน scale กลางของโปรเจกต์.",
    takeaways: ["arbitrary value เหมาะกับข้อจำกัดเฉพาะจุด ถ้าใช้เต็ม component ระบบ design จะหายไปจากสายตาคนรีวิว."],
    whatToReview: [
      "โค้ดที่ดีใช้ arbitrary grid template เพียงจุดเดียว เพราะ layout ต้องการคอลัมน์ข้อความที่ยืดหยุ่นคู่กับคอลัมน์ shortcut แบบ auto.",
      "โค้ดที่ควรปรับใช้ค่ากำหนดเองเกือบทุกอย่าง ทั้ง gap, radius, padding, font size และสี ทำให้ component จัดแนวกับ UI อื่นได้ยาก.",
    ],
    reviewNotes: [
      "เวลาเจอค่ากำหนดเองในวงเล็บเหลี่ยม ให้ถามว่ามีเหตุผลเฉพาะอะไร ถ้าคำตอบคือแค่ดูใกล้เคียง ควรกลับไปใช้ scale ของ spacing, color, size หรือ radius.",
    ],
  },
  "tailwindcss/accessibility-contrast-focus": {
    codeComments: {
      goodCode: ["ปุ่มไอคอนต้องมี contrast, focus ring และชื่อที่ screen reader อ่านได้"],
      badCode: ["ไม่มี label และลบ outline ทำให้ปุ่มไอคอนใช้งานยากขึ้น"],
    },
    title: "contrast, focus ring และ label ของปุ่มไอคอน",
    summary: "รีวิวปุ่มไอคอนให้มีสีที่มองเห็นพอ, focus ring ที่ชัดเมื่อใช้ keyboard และ label สำหรับ screen reader.",
    takeaways: ["Tailwind ช่วยให้ accessibility เห็นได้ตรงหน้า เมื่อ contrast, focus และ label อยู่ใน `className` หรือ markup ที่รีวิวได้."],
    whatToReview: [
      "โค้ดที่ดีให้ปุ่มที่มีแต่ไอคอนมี label สำหรับ screen reader, contrast ที่อ่านได้ และ focus ring ที่เห็นชัดเมื่อใช้ keyboard.",
      "โค้ดที่ควรปรับลบ outline ใช้สีไอคอนที่จางเกินไป และไม่มีข้อความบอกว่าปุ่มนี้ทำอะไร.",
    ],
    reviewNotes: [
      "Tailwind ทำให้ accessibility รีวิวได้ง่ายขึ้น เพราะ focus ring, สีที่เลือก และ sr-only label อยู่ในโค้ดจุดที่เรียกใช้ component ให้เห็นเลย.",
    ],
  },
  "tailwindcss/conditional-classes-and-conflicts": {
    codeComments: {
      goodCode: ["selected กับ unselected ถูกเลือกคนละทาง จึงไม่ปล่อยสีพื้นชนกัน"],
      badCode: ["เงื่อนไขหลายตัวอาจปล่อย bg/text/opacity ที่ชนกันใน className เดียว"],
    },
    title: "กัน conditional class ไม่ให้ชนกัน",
    summary: "เขียน conditional class ให้สถานะที่ไม่ควรเกิดพร้อมกัน เช่น selected/unselected หรือ enabled/disabled ไม่ปล่อย class ที่ขัดกันออกมาพร้อมกัน.",
    takeaways: ["class ตามเงื่อนไขควรทำให้รู้ชัดว่าสถานะไหนชนะ ถ้ามี utility ที่ชนกัน คนรีวิวจะต้องเดาผลลัพธ์จากลำดับ class."],
    whatToReview: [
      "โค้ดที่ดีแยก selected กับ unselected ออกจากกันชัดเจน แล้วค่อยเพิ่ม disabled state ทับอย่างตั้งใจ.",
      "โค้ดที่ควรปรับอาจปล่อย class สีพื้น สีตัวอักษร และ opacity ที่ขัดกันอยู่ใน className เดียว ทำให้ผลลัพธ์ขึ้นกับลำดับมากกว่าเงื่อนไขที่อ่านเข้าใจ.",
    ],
    reviewNotes: [
      "เวลารีวิว conditional Tailwind ให้หาคู่ที่ไม่ควรอยู่พร้อมกัน เช่น background สองค่า, opacity สองค่า หรือ disabled แล้วแต่ยังมี hover style เหมือนกดได้.",
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
