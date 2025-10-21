import { Project } from '@/types'

export const projects: Project[] = [
  // HACKATHON WINNER - FIRST PRIORITY
  {
    _id: 'edgecompress',
    title: 'EdgeCompress - Foundation Model Compression',
    projectType: 'hackathon-winner',
    description: 'AI/ML Fusion National Hackathon Winner! 🏆 EdgeCompress is an AI model compression framework designed for edge deployment. Won 10K cash prize, trip to Malvan, and Reliance goodies. Combines quantization, pruning, and knowledge distillation to shrink large models by 5-10x while keeping accuracy loss under 3%.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&w=800',
    liveUrl: undefined,
    githubUrl: undefined,
    tags: ['Hackathon Winner', 'Model Compression', 'Edge AI', 'Quantization', 'Deep Learning', 'AI/ML Fusion', 'Prize Winner'],
    featured: true,
    isHackathon: true,
    prize: 'AI/ML Fusion National Hackathon Winner - 10K Prize',
    publishedAt: '2024-12-01'
  },

  // Featured Projects with Awards
  {
    _id: 'forest-fire-detection',
    title: 'Forest Fire Detection using Machine Learning',
    projectType: 'machine-learning',
    description: 'Best Project Award winner! Developed ML-based model for detecting forest fires using advanced algorithms. Awarded Best Project at competition held by Binghamton University. Implements real-time detection for early warning systems.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&w=800',
    liveUrl: undefined,
    githubUrl: undefined,
    tags: ['Machine Learning', 'Forest Fire', 'Best Project Award', 'Binghamton University', 'Python', 'Real-time Detection'],
    featured: true,
    isHackathon: true,
    prize: 'Best Project Award',
    publishedAt: '2024-11-01'
  },

  // Machine Learning Projects
  {
    _id: 'smart-iot-device-identification',
    title: 'Smart IoT Device Identification',
    projectType: 'machine-learning',
    description: 'Advanced machine learning system to identify IoT devices based on their network traffic patterns. Enhances network security and device management capabilities with high accuracy identification.',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&w=800',
    liveUrl: 'https://bhushancharpe15.github.io/iot-device-identification',
    githubUrl: 'https://github.com/bhushancharpe15/iot-device-identification',
    tags: ['Machine Learning', 'IoT', 'Network Security', 'Device Management', 'Python', 'Traffic Analysis'],
    featured: true,
    publishedAt: '2024-10-15'
  },

  {
    _id: 'emotion-detection',
    title: 'Emotion Detection Using Machine Learning',
    projectType: 'computer-vision',
    description: 'Developed a real-time emotion recognition system using facial expression analysis powered by deep learning. Utilizes CNNs for accurate emotion classification from facial features.',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&w=800',
    liveUrl: undefined,
    githubUrl: undefined,
    tags: ['Deep Learning', 'Computer Vision', 'Emotion Recognition', 'CNN', 'Real-time Analysis', 'OpenCV'],
    featured: true,
    publishedAt: '2024-09-20'
  },

  {
    _id: 'power-fault-prediction',
    title: 'Power Fault Prediction System',
    projectType: 'machine-learning',
    description: 'AI-powered electrical grid monitoring and fault prediction system with real-time monitoring capabilities. Features predictive analytics for preventing power failures.',
    coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&w=800',
    liveUrl: 'https://tusharnd12.github.io/Power_Fault_Detection/',
    githubUrl: undefined,
    tags: ['Machine Learning', 'IoT', 'Predictive Analytics', 'Real-time Monitoring', 'Power Systems', 'Python'],
    featured: true,
    publishedAt: '2024-07-15'
  },

  // Web Development Projects
  {
    _id: 'bigbuddie-platform',
    title: 'BigBuddie Platform',
    projectType: 'web-development',
    description: 'Comprehensive web platform featuring dynamic content management and a modern, user-friendly interface. Built with focus on scalability and performance.',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=800',
    liveUrl: 'https://skullfire-2710.github.io/bigbuddie/',
    githubUrl: 'https://github.com/skullfire-2710/bigbuddie',
    tags: ['Web Development', 'Platform Development', 'Dynamic Content', 'Modern UI/UX', 'Responsive Design'],
    featured: true,
    publishedAt: '2024-06-10'
  },

  // Healthcare AI Project
  {
    _id: 'ulcerative-colitis-detection',
    title: 'Ulcerative Colitis Detection and Prevention using ML',
    projectType: 'machine-learning',
    description: 'Worked with a team to build ML models for healthcare innovation. Focuses on early detection and prevention of Ulcerative Colitis using machine learning algorithms.',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=800',
    liveUrl: undefined,
    githubUrl: undefined,
    tags: ['Healthcare AI', 'Machine Learning', 'Medical Diagnosis', 'Team Project', 'Python', 'Disease Detection'],
    featured: true,
    publishedAt: '2024-05-20'
  }
]
