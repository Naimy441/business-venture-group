export const services = [
  {
    id: "general-contracting",
    title: "General contracting",
    short: "A clear plan. A coordinated site.",
    image: "construction",
    description:
      "From site preparation to final handover, keep the work moving with coordinated trades, practical schedules, and clear responsibility.",
    details: [
      "Site development and foundations",
      "Structural construction and building systems",
      "Subcontractor coordination",
      "Schedule, cost, and change management",
    ],
  },
  {
    id: "design-build",
    title: "Design-build & preconstruction",
    short: "Make the right decisions early.",
    image: "plans",
    description:
      "Bring design, estimating, and construction planning into the same conversation. Resolve scope, access, and procurement questions before they become field problems.",
    details: [
      "Conceptual estimating and scope development",
      "Constructability and design coordination",
      "Procurement and long-lead planning",
      "Project sequencing and scheduling",
    ],
  },
  {
    id: "mechanical-fabrication",
    title: "Mechanical & fabrication",
    short: "Built to fit. Planned to install.",
    image: "welding",
    description:
      "Connect shop planning with field requirements for process piping, structural assemblies, and equipment installation. Define inspection and turnover requirements before work begins.",
    details: [
      "Process piping and mechanical installation",
      "Structural steel and support assemblies",
      "Equipment setting and installation planning",
      "Inspection coordination and turnover",
    ],
  },
  {
    id: "maintenance-turnarounds",
    title: "Maintenance & turnarounds",
    short: "Every shutdown needs a sound plan.",
    image: "plant",
    description:
      "Plan maintenance and outage work around the realities of an operating facility: access, isolation, crew coordination, and a controlled return to service.",
    details: [
      "Maintenance scope development",
      "Shutdown and turnaround planning",
      "Multi-trade field coordination",
      "Closeout and return-to-service support",
    ],
  },
  {
    id: "facility-improvements",
    title: "Facility improvements",
    short: "Adapt the facility. Respect the operation.",
    image: "warehouse",
    description:
      "Make room for the next stage of your business. Plan renovations, fit-outs, and upgrades with attention to existing systems and ongoing operations.",
    details: [
      "Industrial fit-outs and interior alterations",
      "Production and logistics space upgrades",
      "Equipment foundations and structural modifications",
      "Phased execution in occupied facilities",
    ],
  },
  {
    id: "safety-quality",
    title: "Safety & quality coordination",
    short: "The standard runs through the work.",
    image: "craft",
    description:
      "Build site-specific safety planning, inspection requirements, and documentation into the execution plan. Make expectations clear to every trade before the work starts.",
    details: [
      "Site-specific work planning",
      "Trade and contractor coordination",
      "Inspection and hold-point planning",
      "Documentation and project closeout",
    ],
  },
];
export const industries = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    image: "plant",
    text: "Production space has to work as hard as the people inside it. We plan construction and improvements around equipment, utilities, material flow, and the operating schedule.",
    scopes: [
      "Production and assembly facilities",
      "Equipment installation and foundations",
      "Utility and process system upgrades",
    ],
  },
  {
    id: "logistics",
    title: "Warehousing & logistics",
    image: "warehouse",
    text: "A facility is only useful when goods can move through it. We coordinate building work, interior improvements, and infrastructure with the way your operation receives, stores, and ships.",
    scopes: [
      "Distribution and storage facilities",
      "Interior fit-outs and space reconfiguration",
      "Building and infrastructure improvements",
    ],
  },
  {
    id: "process",
    title: "Process & industrial facilities",
    image: "refinery",
    text: "Complex facilities call for careful sequencing. We bring construction planning, mechanical scopes, and maintenance coordination together around access, inspection, and handover requirements.",
    scopes: [
      "Mechanical and piping scopes",
      "Structural and equipment support",
      "Planned maintenance and turnaround work",
    ],
  },
];
export const articles = [
  {
    slug: "before-construction-starts",
    category: "Project planning",
    title: "The best time to solve a field problem is before mobilization.",
    image: "plans",
    excerpt:
      "Five conversations that make the transition from planning to construction more productive.",
    sections: [
      [
        "Start with the operating constraints.",
        "An industrial project begins with the facility, not the schedule template. Establish when work can take place, which areas must stay accessible, and what operations must remain live. Those constraints should shape the construction sequence from the outset.",
      ],
      [
        "Define the boundaries of the scope.",
        "Discuss where each trade starts and stops. Equipment connections, temporary services, access provisions, and final testing can fall between packages unless responsibility is made explicit. Document these interfaces before pricing and procurement.",
      ],
      [
        "Put long-lead items on the table.",
        "Identify equipment, fabricated assemblies, and materials that could govern the start or finish of a work package. Link purchasing decisions to the installation sequence and agree who will track approvals and delivery.",
      ],
      [
        "Agree how decisions will be made.",
        "A clear point of contact and a practical change process keep small questions from becoming site delays. Agree what needs approval, who can give it, and how the effect on cost and timing will be recorded.",
      ],
      [
        "Plan the handover before the first day.",
        "Establish inspection records, testing requirements, operating information, and the acceptance process early. A defined finish gives the team something concrete to build toward.",
      ],
    ],
  },
  {
    slug: "planning-work-in-an-operating-facility",
    category: "Field execution",
    title: "Building around a facility that cannot stop.",
    image: "plant",
    excerpt:
      "Why access, isolation, and communication belong at the center of a phased construction plan.",
    sections: [
      [
        "Treat operations as part of the project team.",
        "The people running a facility understand the daily movements that drawings cannot fully capture. Involve them in planning access, deliveries, work zones, and shutdown windows.",
      ],
      [
        "Make the work boundaries visible.",
        "A phased plan needs more than dates. Define occupied areas, construction zones, pedestrian routes, and material handling arrangements. Review how these boundaries will change as work progresses.",
      ],
      [
        "Coordinate tie-ins and isolations.",
        "Identify existing services and discuss the approvals required to work around them. Build verification, isolation, testing, and reinstatement into the sequence with the facility team and responsible specialists.",
      ],
      [
        "Communicate the next change.",
        "Regular, focused look-ahead conversations help operations prepare for the next stage. Make changes to access, noise, utilities, and working hours clear before they affect the people using the building.",
      ],
    ],
  },
  {
    slug: "a-better-project-handover",
    category: "Quality & closeout",
    title: "A project is finished when it is ready to use.",
    image: "craft",
    excerpt:
      "Treating inspection, documentation, and closeout as part of the work from day one.",
    sections: [
      [
        "Define what completion means.",
        "Physical installation is one part of completion. Agree on the inspections, testing, records, and client acceptance required for each work package.",
      ],
      [
        "Collect records as the work progresses.",
        "Inspection reports, equipment information, approved changes, and test results are easier to organize when they are gathered alongside the work. Assign responsibility for each record rather than leaving a general task for the end.",
      ],
      [
        "Close issues in manageable stages.",
        "Review completed areas and systems as they become available. A short, clearly assigned list of outstanding items is easier to resolve than a large list compiled at the final walk-through.",
      ],
      [
        "Hand over useful information.",
        "Organize the final package for the people who will operate and maintain the facility. Clear labels, accessible files, and a documented acceptance process make the transition more practical.",
      ],
    ],
  },
];
