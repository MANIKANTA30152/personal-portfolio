const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Complete bilingual resume data with your contact information
const resumeData = {
  name: {
    english: "Bollapalli Manikanta",
    telugu: "బొల్లపల్లి మణికాంత"
  },
  summary: {
    english: "B.Tech in CSE student specializing in Software Modeling and DevOps. Passionate about building innovative solutions.",
    telugu: "సాఫ్ట్వేర్ మోడలింగ్ మరియు డెవ్‌ఆప్‌స్ లో ప్రత్యేకత కలిగిన సీఎస్ఈ బీటెక్ విద్యార్థి. వినూత్న పరిష్కారాలను రూపొందించడంపై ఆసక్తి."
  },
  education: [
    {
      english: "B.Tech in CSE at KL University (2022-2026) - CGPA: 8.56",
      telugu: "కెఎల్ యూనివర్శిటీలో సీఎస్ఈలో బీటెక్ (2022-2026) - సీజీపీఎ: 8.56"
    },
    {
      english: "Intermediate, MPC at Sri Chaitanya Junior College - CGPA: 6.92",
      telugu: "శ్రీ చైతన్య జూనియర్ కళాశాలలో ఇంటర్మీడియట్, ఎంపీసి - సీజీపీఎ: 6.92"
    },
    {
      english: "10th Grade at Nirmala High School - CGPA: 10",
      telugu: "నిర్మల హైస్కూల్ వద్ద 10వ తరగతి - సీజీపీఎ: 10"
    }
  ],
  skills: {
    languages: ["C", "Java", "Python", "SQL", "NoSQL"],
    web: ["HTML", "CSS", "JavaScript", "React", "Spring Boot", "Django", "Node.js", "Express.js"],
    tools: ["Git", "GitHub", "AWS", "Docker"]
  },
  certifications: [
    {
      english: "AWS Certified Cloud Practitioner",
      telugu: "AWS ధృవీకరించిన క్లౌడ్ ప్రాక్టీషనర్"
    },
    {
      english: "Certified AI Associate, Salesforce Trailhead",
      telugu: "ధృవీకరించిన AI అసోసియేట్, సేల్స్‌ఫోర్స్ ట్రైల్‌హెడ్"
    }
  ],
  projects: [
    {
      english: "Indian Culture System: Web app promoting cultural heritage with virtual tours",
      telugu: "భారతీయ సంస్కృతి వ్యవస్థ: వర్చువల్ టూర్లతో సాంస్కృతిక వారసత్వాన్ని ప్రోత్సహించే వెబ్ అనువర్తనం"
    },
    {
      english: "Student Course Management System: MERN stack application for academic management",
      telugu: "విద్యార్థి కోర్సు నిర్వహణ వ్యవస్థ: ఎకాడెమిక్ నిర్వహణ కోసం MERN స్టాక్ అనువర్తనం"
    }
  ],
  experience: [
    {
      english: "AI-ML Virtual Intern: Deployed serverless architecture on AWS achieving 30% cost reduction",
      telugu: "AI-ML వర్చువల్ ఇంటర్న్: AWSపై సర్వర్‌లెస్ ఆర్కిటెక్చర్‌ను అమలు చేయడం ద్వారా 30% ఖర్చు తగ్గింపు సాధించడం"
    }
  ],
  contact: {
    email: "bvrknpandu@gmail.com",
    phone: "+91 9059421974",
    linkedin: "https://www.linkedin.com/in/bollapalli-manikanta-67935b28b/",
    github: "https://github.com/MANIKANTA30152",
    telugu: {
      email: "ఇమెయిల్",
      phone: "ఫోన్ నంబర్",
      linkedin: "లింక్డ్ఇన్",
      github: "గిట్‌హబ్"
    }
  }
};

app.use(cors());
app.use(express.json());

// Enhanced language detection with mixed language support
function detectLanguage(text) {
  const teluguChars = text.match(/[\u0C00-\u0C7F]/g) || [];
  const englishChars = text.match(/[a-zA-Z]/g) || [];
  
  if (teluguChars.length > englishChars.length) return 'telugu';
  if (englishChars.length > teluguChars.length) return 'english';
  return 'mixed';
}

// Smart response generator with context awareness
function generateResponse(question) {
  const language = detectLanguage(question);
  const lang = (data) => {
    if (typeof data === 'string') return data;
    if (language === 'telugu' && data.telugu) return data.telugu;
    return data.english || data;
  };

  // Normalize and tokenize question
  const normalizedQ = question.toLowerCase()
    .replace(/[^\w\s\u0C00-\u0C7F]/g, '')
    .split(/\s+/);

  // Context mapping
  const contexts = {
    education: ['educat', 'degree', 'college', 'university', 'school', 'study', 
               'chaduvu', 'vidya', 'btech', 'inter', '10th', 'cgpa'],
    skills: ['skill', 'tech', 'language', 'program', 'kousalam', 'sampadam', 
             'html', 'java', 'python', 'react'],
    projects: ['project', 'build', 'create', 'develop', 'pani', 'nirmaanam',
               'application', 'system'],
    experience: ['experience', 'work', 'job', 'intern', 'anubhavam', 'pani'],
    contact: ['contact', 'reach', 'email', 'phone', 'number', 'dhoraku', 
              'samparkinchukundam', 'gmail', 'linkedin', 'github']
  };

  // Determine context
  let context = null;
  for (const [ctx, keywords] of Object.entries(contexts)) {
    if (keywords.some(keyword => 
      normalizedQ.some(word => word.includes(keyword)))) {
      context = ctx;
      break;
    }
  }

  // Generate appropriate response
  switch(context) {
    case 'education':
      return `${lang('📚 EDUCATION DETAILS:')}\n\n` +
             resumeData.education.map(edu => `• ${lang(edu)}`).join('\n') +
             `\n\n${lang('Want details about any specific institution?')}`;

    case 'skills':
      return `${lang('🛠️ SKILLS:')}\n` +
             `${lang('Languages:')} ${resumeData.skills.languages.join(', ')}\n` +
             `${lang('Web Technologies:')} ${resumeData.skills.web.join(', ')}\n` +
             `${lang('Tools:')} ${resumeData.skills.tools.join(', ')}`;

    case 'projects':
      return `${lang('🚀 PROJECTS:')}\n` +
             resumeData.projects.map(proj => `• ${lang(proj)}`).join('\n');

    case 'experience':
      return `${lang('💼 EXPERIENCE:')}\n` +
             resumeData.experience.map(exp => `• ${lang(exp)}`).join('\n');

    case 'contact':
      return `${lang('📞 CONTACT INFORMATION:')}\n\n` +
             `${language === 'telugu' ? resumeData.contact.telugu.email : 'Email:'} ${resumeData.contact.email}\n` +
             `${language === 'telugu' ? resumeData.contact.telugu.phone : 'Phone:'} ${resumeData.contact.phone}\n` +
             `${language === 'telugu' ? resumeData.contact.telugu.linkedin : 'LinkedIn:'} ${resumeData.contact.linkedin}\n` +
             `${language === 'telugu' ? resumeData.contact.telugu.github : 'GitHub:'} ${resumeData.contact.github}`;

    default:
      return `${lang(`Hello! I'm ${resumeData.name.english}. `)}${lang('You can ask me about:')}\n` +
             `• ${lang('Education')}\n` +
             `• ${lang('Skills')}\n` +
             `• ${lang('Projects')}\n` +
             `• ${lang('Experience')}\n` +
             `• ${lang('Contact Information')}`;
  }
}

// API endpoint with error handling
app.post('/api/chat', (req, res) => {
  try {
    const { question } = req.body;
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: "Please provide a valid question" });
    }
    
    const reply = generateResponse(question);
    res.json({ reply });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: "An error occurred while processing your question" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Resume AI server running on http://localhost:${PORT}`);
  console.log(`Try these example queries:`);
  console.log(`- "Tell me about your education"`);
  console.log(`- "మీ నైపుణ్యాలు ఏమిటి?"`);
  console.log(`- "What's your contact information?"`);
  console.log(`- "మీ లింక్డ్ఇన్ ప్రొఫైల్ ఏమిటి?"`);
});