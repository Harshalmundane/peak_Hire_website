import { courseImages } from "./assets";
// Card fields (price/rating/enrolled/weeks) are MOCK values: replace with verified data.
// `page` holds the content of /training/[slug]. Replace PDFs in /public/syllabus/<slug>.pdf.
export const courses = [
  {
    slug: "workday-training", track: "Workday", eco: "Workday Ecosystem", ecoColor: "#0284c7", badge: "BESTSELLER", badgeColor: "#f59e0b", img: courseImages.workday,
    weeks: "8-10 Weeks", rating: "4.9", enrolled: "3,240", old: "₹45,000", price: "₹28,500", off: "35% Limited Offer",
    title: "Workday Training for Enterprise Technology Careers",
    desc: "Build foundational and practical knowledge of Workday enterprise applications, business processes and HCM or Finance topics.",
    page: {
      seoTitle: "Workday Training in Hyderabad & Online | Peakhire Solutions",
      metaDesc: "Build foundational and practical knowledge of Workday enterprise applications with Peakhire Solutions. Online learning options may be available across India and internationally.",
      intro: "Build foundational and practical knowledge of Workday enterprise applications with Peakhire Solutions. Our Workday learning pathway is intended for learners who want to understand Workday concepts, business processes and the topics included in the selected HCM, Finance or related course. Online learning options may be available for learners across India and internationally.",
      sections: [
        { icon: "journal-bookmark-fill", title: "What You Can Learn", text: "Course coverage may include an introduction to Workday, navigation and terminology, business process concepts, relevant functional areas and guided exercises. Specific topics depend on the selected program. Workday HCM, Workday Finance and integrations are separate areas of study; confirm the exact syllabus before joining." },
        { icon: "people-fill", title: "Who Should Consider This Course?", text: "Fresh graduates exploring enterprise technology, HR or finance professionals seeking systems knowledge, and IT professionals planning to develop Workday-related skills may find this pathway relevant. Any recommended prerequisites will be shared with the course outline." },
        { icon: "laptop", title: "Training Format & Learning Support", text: "Ask our team about live online sessions, recorded resources where available, course duration, batch schedule, trainer profile, practical exercises and any lab or project access included. Mock interviews and resume guidance may be offered as part of selected learning packages." },
        { icon: "briefcase-fill", title: "Career Preparation", text: "We can guide learners on preparing for relevant roles and understanding the skills employers may seek. Placement assistance, if included, is not a guarantee of interviews, job offers, salary or selection." },
      ],
      ctas: ["Request Workday Syllabus", "Enquire on WhatsApp"],
    },
  },
  {
    slug: "servicenow-training", track: "ServiceNow", eco: "ServiceNow Cloud", ecoColor: "#0284c7", badge: "HOT TRACK", badgeColor: "#6366f1", img: courseImages.servicenow,
    weeks: "8 Weeks", rating: "4.9", enrolled: "2,810", old: "₹42,000", price: "₹26,000", off: "38% Off",
    title: "ServiceNow Training to Build Platform Skills",
    desc: "Learn the concepts and workflows of the ServiceNow platform, including IT Service Management (ITSM), through a structured pathway.",
    page: {
      seoTitle: "ServiceNow Training in Hyderabad & Online | Peakhire Solutions",
      metaDesc: "Learn the concepts and workflows of the ServiceNow platform through a structured training pathway from Peakhire Solutions.",
      intro: "Learn the concepts and workflows of the ServiceNow platform through a structured training pathway from Peakhire Solutions. The program is intended for learners who want to understand enterprise service management and the topics covered in the selected ServiceNow course. Online training availability, schedule and syllabus can be confirmed with our team.",
      sections: [
        { icon: "list-check", title: "Course Topics", text: "Depending on the selected course, topics may include ServiceNow platform introduction, navigation, tables and forms, users and roles, service catalog concepts, workflows and IT Service Management (ITSM). Advanced areas such as ITOM, HRSD, CSM or Flow Designer should be included only where specified in the current syllabus." },
        { icon: "people-fill", title: "Who Is This Training For?", text: "The course may suit graduates, IT support professionals, system administrators, working professionals and career switchers who want to develop ServiceNow platform knowledge. Ask about prerequisites for the specific batch." },
        { icon: "tools", title: "Practical Learning", text: "Confirm whether your selected batch includes guided exercises, lab access, assignments, project work or interview preparation. Course structure and inclusions may vary." },
        { icon: "briefcase-fill", title: "Career Guidance", text: "We can provide guidance on preparing for ServiceNow-related opportunities and relevant interview topics. Training and placement assistance do not guarantee employment or selection." },
      ],
      ctas: ["Get ServiceNow Course Details", "WhatsApp Enquiry"],
    },
  },
  {
    slug: "sap-s4hana-training", track: "SAP S/4HANA", eco: "SAP ERP", ecoColor: "#0284c7", badge: "ENTERPRISE ERP", badgeColor: "#ea580c", img: courseImages.sap,
    weeks: "10-12 Weeks", rating: "4.8", enrolled: "2,450", old: "₹48,000", price: "₹29,999", off: "37% Off",
    title: "SAP S/4HANA Training for Enterprise Business Processes",
    desc: "Develop knowledge of SAP S/4HANA and enterprise business processes through a structured program. Module coverage depends on the selected track.",
    page: {
      seoTitle: "SAP S/4HANA Training in Hyderabad & Online | Peakhire Solutions",
      metaDesc: "Develop knowledge of SAP S/4HANA and enterprise business processes through a structured learning program from Peakhire Solutions.",
      intro: "Develop knowledge of SAP S/4HANA and enterprise business processes through a structured learning program from Peakhire Solutions. The course syllabus and module coverage depend on the selected training track. Contact us to confirm the functional or technical areas currently available.",
      sections: [
        { icon: "signpost-split-fill", title: "Understand the SAP Learning Path", text: "Training may introduce SAP S/4HANA concepts, enterprise process flows, system navigation and the selected module or functional area. SAP FICO or other module-specific content should be confirmed against the current batch syllabus before enrolment." },
        { icon: "people-fill", title: "Who Can Join?", text: "Graduates, commerce or business professionals, IT professionals and working professionals considering enterprise application skills may explore this course. Recommended background knowledge varies by module." },
        { icon: "laptop", title: "Training Delivery", text: "Ask about online instructor-led sessions, recorded resources where available, course duration, practical exercises, trainer profile and batch schedule. Any lab access, projects or interview support should be confirmed for the chosen program." },
        { icon: "briefcase-fill", title: "Career Preparation", text: "Our team can explain the types of skills commonly associated with the selected SAP learning path and provide guidance on preparation. We do not guarantee certification, job interviews or employment." },
      ],
      ctas: ["Request SAP Syllabus", "Speak to an Advisor"],
    },
  },
  {
    slug: "data-analytics-training", track: "Data Analytics", eco: "AI & Analytics", ecoColor: "#0284c7", badge: "TRENDING", badgeColor: "#6d28d9", img: courseImages.data,
    weeks: "10 Weeks", rating: "4.9", enrolled: "3,890", old: "₹38,000", price: "₹24,500", off: "35% Off",
    title: "Data Analytics Training with SQL, Python & Power BI",
    desc: "Build practical data analysis skills covering analytical concepts and tools such as SQL, Python and Power BI, per the selected syllabus.",
    page: {
      seoTitle: "Data Analytics Training in Hyderabad & Online | Peakhire Solutions",
      metaDesc: "Build practical data analysis skills with a learning pathway covering analytical concepts and tools such as SQL, Python and Power BI.",
      intro: "Build practical data analysis skills with a learning pathway covering analytical concepts and tools such as SQL, Python and Power BI, according to the selected course syllabus. Peakhire Solutions supports learners who want to understand data, work with datasets and communicate insights through reports and dashboards.",
      sections: [
        { icon: "bar-chart-line-fill", title: "What You May Learn", text: "Course topics may include data analysis fundamentals, data cleaning, SQL queries, spreadsheet-based analysis, Python fundamentals for analytics, Power BI reports and dashboards, data visualization and interpretation. Exact coverage varies by course." },
        { icon: "people-fill", title: "Who Should Enrol?", text: "This pathway may suit graduates, aspiring data analysts, working professionals and career switchers. Prior programming experience may not be required for every beginner-level batch; confirm the prerequisites for the program you are considering." },
        { icon: "tools", title: "Practical Exercises", text: "Ask whether the current batch includes datasets, assignments, dashboard exercises, case studies, project work or lab access. These inclusions should be confirmed before enrolment." },
        { icon: "briefcase-fill", title: "Career Preparation", text: "Learning support may include portfolio guidance, resume feedback and mock interviews where included. Completing a course does not guarantee a job, interview or salary outcome." },
      ],
      ctas: ["Get Data Analytics Syllabus", "Enquire on WhatsApp"],
    },
  },
  {
    slug: "hr-payroll-training", track: "HR & Payroll", eco: "HR Operations", ecoColor: "#0284c7", badge: "HR & PAYROLL", badgeColor: "#e11d48", img: courseImages.hr,
    weeks: "6-8 Weeks", rating: "4.8", enrolled: "1,020", old: "₹28,000", price: "₹18,000", off: "36% Off",
    title: "HR Operations & Payroll Training",
    desc: "Develop practical understanding of HR operations and payroll-related processes for HR administration and payroll roles.",
    page: {
      seoTitle: "HR & Payroll Training Online | Peakhire Solutions",
      metaDesc: "Develop practical understanding of HR operations and payroll-related processes through a structured learning program from Peakhire Solutions.",
      intro: "Develop practical understanding of HR operations and payroll-related processes through a structured learning program from Peakhire Solutions. The training is intended for learners interested in HR administration, payroll operations and related business functions. Contact us to confirm current topics, course format and batch availability.",
      sections: [
        { icon: "journal-check", title: "Course Coverage", text: "Depending on the selected program, topics may include HR operations, employee lifecycle processes, attendance and leave concepts, payroll fundamentals, HR documentation, HR reporting and introductory HR analytics. Confirm the exact syllabus before enrolment." },
        { icon: "people-fill", title: "Who Can Benefit?", text: "Fresh graduates, aspiring HR professionals, HR assistants, payroll administrators and working professionals seeking to strengthen their HR process knowledge may consider this pathway." },
        { icon: "laptop", title: "Learning Format", text: "Ask about instructor-led online sessions, recorded learning where available, duration, practical exercises and any included assignments or project work." },
        { icon: "briefcase-fill", title: "Career Support", text: "Selected programs may include resume guidance, interview preparation and career guidance. These services do not guarantee employment or selection." },
      ],
      ctas: ["Request HR & Payroll Syllabus", "Contact Us"],
    },
  },
];
export const getCourse = (slug) => courses.find((c) => c.slug === slug);
