export interface PageData {
  slug: string
  iconName: string
  badge: string
  title: string
  subtitle: string
  description: string
  features: string[]
  relatedSlugs: { type: "software" | "industries"; slug: string }[]
  metadata: { title: string; description: string }
}

export const softwarePages: PageData[] = [
  {
    slug: "eam",
    iconName: "Monitor",
    badge: "Software",
    title: "EAM & Asset Management",
    subtitle:
      "Track, maintain, and optimize every asset across your organization with enterprise-grade lifecycle management.",
    description:
      "Track, maintain, and optimize every asset across your organization. Full lifecycle management with preventive maintenance, compliance tracking, and real-time visibility — deployed and supported locally in Mongolia.",
    features: [
      "Complete asset lifecycle management from procurement to disposal",
      "CMMS with automated work order generation and tracking",
      "Preventive and predictive maintenance scheduling",
      "Regulatory compliance tracking and audit-ready reporting",
      "Real-time asset visibility across all operational sites",
    ],
    relatedSlugs: [
      { type: "industries", slug: "mining" },
      { type: "industries", slug: "energy" },
    ],
    metadata: {
      title: "EAM & Asset Management | Data Resources LLC",
      description:
        "Enterprise asset management platforms deployed and supported locally in Mongolia. Full lifecycle management, CMMS, and preventive maintenance.",
    },
  },
  {
    slug: "fleet",
    iconName: "Truck",
    badge: "Software",
    title: "Fleet & Logistics",
    subtitle:
      "Real-time GPS tracking, dispatch optimization, and fuel management for fleets of any size.",
    description:
      "Real-time GPS tracking, dispatch optimization, and fuel management for fleets of any size. Deployed and supported locally across Mongolia's vast operational distances.",
    features: [
      "Real-time GPS tracking with geofencing and alerts",
      "Intelligent dispatch and route optimization",
      "Fuel consumption monitoring and theft prevention",
      "Driver behavior scoring and safety management",
      "Maintenance scheduling integrated with fleet operations",
    ],
    relatedSlugs: [
      { type: "industries", slug: "mining" },
      { type: "industries", slug: "logistics" },
    ],
    metadata: {
      title: "Fleet & Logistics | Data Resources LLC",
      description:
        "Fleet management systems with GPS tracking, dispatch optimization, and fuel management. Deployed locally in Mongolia.",
    },
  },
  {
    slug: "analytics",
    iconName: "BarChart3",
    badge: "Software",
    title: "Business Intelligence",
    subtitle:
      "Transform operational data into actionable insights with dashboards, predictive analytics, and custom reports.",
    description:
      "Transform operational data into actionable insights. Business intelligence dashboards, predictive analytics, and custom reports for every stakeholder — giving your leadership team the visibility they need.",
    features: [
      "Interactive dashboards with real-time data visualization",
      "Predictive analytics and trend forecasting",
      "Custom report builder for every stakeholder level",
      "Data integration across all enterprise systems",
      "KPI tracking with automated alerts and notifications",
    ],
    relatedSlugs: [
      { type: "industries", slug: "mining" },
      { type: "industries", slug: "construction" },
    ],
    metadata: {
      title: "Business Intelligence | Data Resources LLC",
      description:
        "Analytics, reporting, and data visualization platforms for Mongolian enterprises. Dashboards, predictive analytics, and KPI tracking.",
    },
  },
  {
    slug: "erp",
    iconName: "Cpu",
    badge: "Software",
    title: "ERP & Operations",
    subtitle:
      "Integrated enterprise resource planning platforms connecting finance, procurement, inventory, and operations.",
    description:
      "Integrated enterprise resource planning platforms that connect finance, procurement, inventory, and operations into a single system of record — streamlining your entire organization.",
    features: [
      "Financial management with multi-currency support",
      "Procurement and vendor management workflows",
      "Inventory tracking and warehouse management",
      "HR and workforce management integration",
      "Integrated planning and budgeting tools",
    ],
    relatedSlugs: [
      { type: "industries", slug: "construction" },
      { type: "industries", slug: "logistics" },
    ],
    metadata: {
      title: "ERP & Operations | Data Resources LLC",
      description:
        "Enterprise resource planning systems for Mongolian businesses. Finance, procurement, inventory, and HR in one integrated platform.",
    },
  },
]

export const industryPages: PageData[] = [
  {
    slug: "mining",
    iconName: "Mountain",
    badge: "Industries",
    title: "Mining & Resources",
    subtitle:
      "Enterprise software for open-pit, underground, and remote mining operations across Mongolia.",
    description:
      "From open-pit to underground operations, we deploy enterprise asset management, fleet tracking, and predictive maintenance platforms trusted by Mongolia's leading mining companies.",
    features: [
      "Real-time GPS tracking for fleets of any size",
      "Predictive maintenance reducing unplanned downtime",
      "Haul road optimization and dispatch systems",
      "Environmental monitoring and compliance reporting",
      "Offline-capable deployments for remote mine sites",
    ],
    relatedSlugs: [
      { type: "software", slug: "eam" },
      { type: "software", slug: "fleet" },
    ],
    metadata: {
      title: "Mining & Resources | Data Resources LLC",
      description:
        "Enterprise software solutions for Mongolia's mining industry. Asset management, fleet tracking, and predictive maintenance for mining operations.",
    },
  },
  {
    slug: "construction",
    iconName: "HardHat",
    badge: "Industries",
    title: "Construction & Infrastructure",
    subtitle:
      "Fleet management, project tracking, and equipment utilization platforms for heavy civil projects.",
    description:
      "Heavy civil projects demand precise coordination across multiple sites. We deploy fleet management, project tracking, and equipment utilization platforms built for Mongolia's construction sector.",
    features: [
      "Multi-site fleet and equipment tracking",
      "Project delivery timeline management",
      "Equipment utilization and idle-time reduction",
      "Fuel management and cost allocation per project",
      "Safety compliance and incident tracking",
    ],
    relatedSlugs: [
      { type: "software", slug: "erp" },
      { type: "software", slug: "analytics" },
    ],
    metadata: {
      title: "Construction & Infrastructure | Data Resources LLC",
      description:
        "Enterprise software for Mongolia's construction industry. Fleet management, project tracking, and equipment utilization platforms.",
    },
  },
  {
    slug: "energy",
    iconName: "Zap",
    badge: "Industries",
    title: "Energy & Utilities",
    subtitle:
      "Complete asset lifecycle visibility for power generation, distribution, and renewable energy operations.",
    description:
      "Power generation and distribution networks require complete asset lifecycle visibility. We deploy platforms that give energy companies full control over maintenance, compliance, and operations.",
    features: [
      "Asset lifecycle management for distributed networks",
      "Preventive maintenance scheduling and tracking",
      "Outage response and resolution management",
      "Regulatory compliance and audit-ready reporting",
      "SCADA and control system integration",
    ],
    relatedSlugs: [
      { type: "software", slug: "eam" },
      { type: "software", slug: "analytics" },
    ],
    metadata: {
      title: "Energy & Utilities | Data Resources LLC",
      description:
        "Enterprise software for Mongolia's energy sector. Asset management, maintenance, and compliance platforms for power and utilities.",
    },
  },
  {
    slug: "logistics",
    iconName: "Truck",
    badge: "Industries",
    title: "Logistics & Supply Chain",
    subtitle:
      "Route optimization, fleet tracking, and supply chain visibility for Mongolia's vast operational distances.",
    description:
      "Mongolia's vast distances demand intelligent logistics. We deploy route optimization, fleet tracking, and supply chain visibility platforms that keep goods moving efficiently.",
    features: [
      "Route optimization across Mongolia's road network",
      "Real-time fleet tracking and driver management",
      "Warehouse and inventory management integration",
      "Fuel consumption monitoring and optimization",
      "Cross-border logistics and customs documentation",
    ],
    relatedSlugs: [
      { type: "software", slug: "fleet" },
      { type: "software", slug: "erp" },
    ],
    metadata: {
      title: "Logistics & Supply Chain | Data Resources LLC",
      description:
        "Enterprise software for Mongolia's logistics industry. Route optimization, fleet tracking, and supply chain management platforms.",
    },
  },
]
