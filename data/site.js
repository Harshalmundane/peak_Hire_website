// Configurable mock content. Statistics are taken from the design screenshots, not verified facts.
export const site = {
  name: "PeakHire",
  tagline: "Solutions",
  topbarText: "Peakhire Solutions",
  phone: "+91 76708 20107",
  phoneHref: "tel:+917670820107",
  whatsappHref: "https://wa.me/917670820107",
  stats: { rating: "4.9/5", alumni: "18,500+", lab: "100%", placement: "14 Days" },
  google: { rating: "4.9", count: "420+" },
  address: "Survey No.64, SBR CV Towers, Unit No. 203, 2nd Floor Suit No 438, Sector - 1, HUDA Techno Enclave, Madhapur, Hyderabad, Telangana 500081",
};
export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Recruitment", href: "/#recruitment" },
  { label: "Courses", href: "/#courses" },
  { label: "Career Builder", href: "/#career-builder" },
  { label: "About Us", href: "/#about" },
];
export const featuredBatch = {
  title: "Workday HCM & Integration Masterclass",
  desc: "Comprehensive end-to-end implementation, EIBs, Core Connectors, Studio & Calculated Fields.",
  seats: 4,
  highlights: [
    { value: "8–10", label: "Weeks" },
    { value: "Live", label: "Format" },
    { value: "Real-time", label: "Tenant" },
    { value: "100+", label: "Scenarios" },
  ],
  perks: ["Includes Official Workday Real-Time Tenant Access", "100+ Real-Time Interview Scenarios & Dumps", "Direct Line to Mentor: +91 76708 20107"],
};
export const sectors = [
  { icon: "bank", title: "Global FinTech & Banking", sub: "Tier-1 Capability Centers", color: "#0d6efd" },
  { icon: "diagram-3", title: "Enterprise Cloud SaaS", sub: "HCM & ERP Implementations", color: "#6f42c1" },
  { icon: "shield-fill-plus", title: "Healthcare IT & Systems", sub: "Clinical Data & Compliance", color: "#dc3545" },
  { icon: "robot", title: "AI & Big Data Hubs", sub: "GenAI & Automation Labs", color: "#6f42c1" },
  { icon: "boxes", title: "Supply Chain & ERP", sub: "SAP S/4HANA Ecosystems", color: "#198754" },
  { icon: "briefcase-fill", title: "Global IT Consulting", sub: "System Integration Leads", color: "#0d6efd" },
];
export const filters = ["All Tracks", "Workday", "ServiceNow", "SAP S/4HANA", "Data Analytics", "HR & Payroll"];
export const pillars = [
  { icon: "terminal", title: "Real-Time Server & Tenant Access", desc: "Work on genuine cloud instances (Workday, ServiceNow, SAP GUI). Experience genuine production configuration issues rather than simulated slides.", bg: "#e0f2fe", fg: "#0284c7" },
  { icon: "diagram-2-fill", title: "Live Implementation Capstones", desc: "Complete real end-to-end client implementation projects including architecture documentation, BRD creation, and test run sign-offs.", bg: "#e0f2fe", fg: "#0369a1" },
  { icon: "file-earmark-text-fill", title: "AI Resume & LinkedIn Optimization", desc: "Our HR placement specialists rebuild your resume targeting specific high-paying keywords, ATS compatibility, and executive profile presence.", bg: "#dcfce7", fg: "#16a34a" },
  { icon: "person-video3", title: "1-on-1 Mock Technical Interviews", desc: "Engage in thorough mock video panels with active Lead Architects. Receive structured evaluation rubrics and instant tactical correction.", bg: "#f3e8ff", fg: "#9333ea" },
  { icon: "cloud-arrow-down-fill", title: "Lifetime LMS Portal Access", desc: "Missed a class? Revisit HD session recordings, updated question banks, certification practice exams, and code repositories anytime for life.", bg: "#fee2e2", fg: "#dc2626" },
  { icon: "people-fill", title: "Direct Placement Drive Access", desc: "Gain exclusive entry to PeakHire's student-only job board, hiring drives, and internal partner interview referrals across tech firms.", bg: "#ffedd5", fg: "#ea580c" },
];
export const plans = [
  { key: "recorded", eyebrow: "Self-Paced Learning", name: "Recorded Master Pack", summary: "Learn on your own schedule with an on-demand video library and course resources.", features: [
    { t: "Full HD Recorded Video Library (60+ Hours)", on: true }, { t: "Lifetime LMS Access & Free Updates", on: true },
    { t: "Certification Practice Exam Dumps", on: true }, { t: "No Live Instructor Doubt Sessions", on: false }, { t: "No 1-on-1 Placement Interview Coaching", on: false }],
    cta: "Select Recorded Pack", variant: "light" },
  { key: "live", eyebrow: "Instructor-Led", name: "Live Interactive Cohort", summary: "Build practical skills with live teaching, guided labs, and instructor support.", popular: true, features: [
    { t: "Live Interactive Weekend / Weekday Zoom Batches", on: true }, { t: "60 Days Dedicated Cloud Tenant / Sandbox Access", on: true },
    { t: "Real-time Client Implementation Project", on: true }, { t: "Weekly Technical Doubt Clearing with Architect", on: true },
    { t: "PeakHire Course Completion Certificate & Credential", on: true }],
    cta: "Join Live Cohort", variant: "primary" },
  { key: "placement", eyebrow: "Career Preparation", name: "Placement Career Masterclass", summary: "Add focused interview practice, resume support, and career guidance to live training.", features: [
    { t: "Everything in Live Interactive Cohort", on: true }, { t: "3 Comprehensive 1-on-1 Technical Mock Interviews", on: true },
    { t: "Customized ATS Resume & LinkedIn Makeover", on: true }, { t: "Direct Job Board Referrals & Interview Schedules", on: true },
    { t: "Unlimited Doubt Resolution Support till Placement", on: true }],
    cta: "Apply for Placement Track", variant: "dark" },
];
export const reviews = [
  { i: "SS", c: "#4f46e5", name: "Sneha Sharma", meta: "Local Guide · 14 reviews", time: "2 weeks ago", course: "Workday HCM & Integrations", text: "I was working in traditional HR operations and wanted to switch into Workday HCM. PeakHire's trainer explained every core concept—EIB, Studio, and Calculated Fields—using live tenant practice rather than slides. Cleared two technical rounds and received a 90% salary hike! The mock interviews at the Hyderabad center made all the difference.", place: "Hyderabad Batch" },
  { i: "VM", c: "#7c3aed", name: "Vikram Malhotra", meta: "Local Guide · 28 reviews", time: "1 month ago", course: "ServiceNow CSA, CAD & ITSM", text: "The ServiceNow ITSM and CAD course at PeakHire is outstanding. Hands-on coding with GlideRecord API, Script Includes, and Client Scripts prepared me for complex business rule challenges that came up in my technical rounds. Passed my CAD certification on the first attempt with 88% score. Highly recommend!", place: "Weekend Cohort" },
  { i: "AV", c: "#16a34a", name: "Ananya Verma", meta: "Verified Learner · 6 reviews", time: "1 month ago", course: "QA Automation (Selenium + API)", text: "I was stuck in manual testing for almost 4 years. PeakHire taught framework construction from scratch: Cucumber BDD, TestNG, and RestAssured. The resume team optimized my profile for senior QA roles, and I cracked two offers within 3 weeks of batch completion. Genuine mentors!", place: "Online Live" },
  { i: "RK", c: "#ea580c", name: "Rohan Kulkarni", meta: "Local Guide · 19 reviews", time: "2 months ago", course: "SAP S/4HANA FICO Financials", text: "The SAP S/4HANA FICO training is completely project-centric. Real GUI & Fiori sandbox access was provided from day one. GL, AP, AR, and Cost Center accounting were taught with end-to-end integration mapping. The mentor has 12+ years of enterprise consulting experience and solves doubts directly on WhatsApp.", place: "Hyderabad Campus" },
  { i: "DR", c: "#be185d", name: "Deepa Rao", meta: "Local Guide · 35 reviews", time: "3 months ago", course: "Data Analytics & Generative AI", text: "The curriculum is very updated with modern industry requirements—covering advanced SQL window functions, Power BI DAX queries, and LLM prompt engineering. PeakHire's support team is prompt, and recording sessions were available immediately on the portal.", place: "Weekday Cohort" },
  { i: "PS", c: "#0891b2", name: "Prateek Srivastava", meta: "Verified Learner · 11 reviews", time: "3 months ago", course: "Workday Studio & Advanced Integrations", text: "The Workday Studio sessions were phenomenal. Writing XSLT stylesheets, handling WSDL payloads, and setting up error handling gave me real architect confidence. PeakHire helped me transition from a support role into a pure integration developer role with a 15 LPA offer.", place: "Weekend Cohort" },
];
export const footer = {
  courses: [{ l: "Workday Training", h: "/training/workday-training" }, { l: "ServiceNow Training", h: "/training/servicenow-training" }, { l: "SAP S/4HANA Training", h: "/training/sap-s4hana-training" }, { l: "Data Analytics Training", h: "/training/data-analytics-training" }, { l: "HR & Payroll Training", h: "/training/hr-payroll-training" }],
  links: [{ l: "Home", h: "/#home" }, { l: "Recruitment", h: "/#recruitment" }, { l: "Courses", h: "/#courses" }, { l: "About Us", h: "/#about" }, { l: "Corporate Training", h: "/#contact" }, { l: "Fee Payment Gateway", h: "/#pricing" }],
};
