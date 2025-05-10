const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/user.model');
const Job = require('../models/job.model');

// Load environment variables
dotenv.config();

const jobs = [
  {
    title: 'Fundraiser',
    type: 'Full-time',
    location: 'Andheri, Mumbai',
    department: 'Sales',
    experience: '0-2 years',
    salary: '15,000 - 25,000',
    description: 'We are looking for enthusiastic fundraisers to join our team. The ideal candidate should have excellent communication skills and a passion for social causes.',
    requirements: [
      'Excellent communication skills',
      'Ability to work under pressure',
      'Strong negotiation skills',
      'Previous fundraising experience preferred'
    ],
    responsibilities: [
      'Develop and implement fundraising strategies',
      'Build and maintain relationships with donors',
      'Organize fundraising events',
      'Meet fundraising targets'
    ]
  },
  {
    title: 'Debt Collection Agent',
    type: 'Full-time',
    location: 'Thane, Mumbai',
    department: 'Finance',
    experience: '1-3 years',
    salary: 'Up to 35,000',
    description: 'We are seeking experienced debt collection agents to join our finance team. The role involves managing and recovering outstanding debts while maintaining professional relationships with clients.',
    requirements: [
      'Experience in debt collection',
      'Strong negotiation skills',
      'Knowledge of financial regulations',
      'Excellent communication skills'
    ],
    responsibilities: [
      'Contact debtors to arrange payment',
      'Maintain accurate records of collection activities',
      'Follow up on payment arrangements',
      'Handle customer queries professionally'
    ]
  },
  {
    title: 'PHP Laravel Developer',
    type: 'Full-time',
    location: 'Pune',
    department: 'Technology',
    experience: '2-4 years',
    salary: 'Up to 35,000',
    description: 'We are looking for a skilled PHP Laravel developer to join our development team. The ideal candidate should have strong experience in building web applications using Laravel framework.',
    requirements: [
      'Strong experience with PHP and Laravel',
      'Knowledge of MySQL/MariaDB',
      'Understanding of MVC architecture',
      'Experience with RESTful APIs'
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Write clean, maintainable code',
      'Collaborate with frontend developers',
      'Debug and fix issues'
    ]
  },
  {
    title: 'HR Recruiter (Freelance)',
    type: 'Contract',
    location: 'Remote',
    department: 'Human Resources',
    experience: '2+ years',
    salary: 'Pay in proportion to placements',
    description: 'We are looking for experienced HR recruiters to join our team on a freelance basis. The role involves sourcing, screening, and placing candidates for various positions.',
    requirements: [
      'Proven recruitment experience',
      'Strong network of candidates',
      'Excellent communication skills',
      'Understanding of recruitment processes'
    ],
    responsibilities: [
      'Source and screen candidates',
      'Conduct initial interviews',
      'Coordinate with hiring managers',
      'Manage candidate relationships'
    ]
  },
  {
    title: 'Marketing Intern',
    type: 'Internship',
    location: 'Remote',
    department: 'Marketing',
    experience: '0-1 year',
    salary: 'Pay in proportion to performance',
    description: 'We are offering an exciting opportunity for marketing interns to gain hands-on experience in digital marketing, content creation, and campaign management.',
    requirements: [
      'Currently pursuing marketing degree',
      'Basic understanding of digital marketing',
      'Good communication skills',
      'Creative mindset'
    ],
    responsibilities: [
      'Assist in social media management',
      'Create marketing content',
      'Support campaign execution',
      'Analyze marketing metrics'
    ]
  },
  {
    title: 'SaaS Intern',
    type: 'Internship',
    location: 'Remote',
    department: 'Technology',
    experience: '0-1 year',
    salary: 'Pay in proportion to performance',
    description: 'We are looking for enthusiastic interns to join our SaaS team. This is a great opportunity to learn about software-as-a-service products and gain practical experience.',
    requirements: [
      'Basic understanding of software development',
      'Interest in SaaS products',
      'Good problem-solving skills',
      'Eagerness to learn'
    ],
    responsibilities: [
      'Assist in product testing',
      'Support customer onboarding',
      'Help with documentation',
      'Participate in product development'
    ]
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Create admin user if not exists
    const adminEmail = 'admin@dazzlo.com';
    let admin = await User.findOne({ email: adminEmail });

    if (!admin) {
      admin = await User.create({
        name: 'Admin User',
        email: adminEmail,
        password: 'admin123',
        role: 'admin'
      });
      console.log('Admin user created');
    }

    // Create jobs
    for (const jobData of jobs) {
      const existingJob = await Job.findOne({ title: jobData.title });
      if (!existingJob) {
        await Job.create({
          ...jobData,
          postedBy: admin._id,
          status: 'active'
        });
        console.log(`Created job: ${jobData.title}`);
      }
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 