// 'use client';
// import { useParams } from 'next/navigation';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';

// const serviceDetails = {
//   'web-development': { name: 'Web Development', description: 'We build modern and scalable web applications.', price: 'Starts from ₹50,000' },
//   'mobile-development': { name: 'Mobile Development', description: 'Custom Android and iOS applications tailored to your needs.', price: 'Starts from ₹75,000' },
//   'ui-ux': { name: 'UI/UX Design', description: 'Creating user-friendly and beautiful designs.', price: 'Starts from ₹30,000' },
// };

// export default function ServiceViewPage() {
//   const { serviceId } = useParams();
//   const router = useRouter();
//   const service = serviceDetails[serviceId];

//   if (!service) {
//     return <p className="text-center text-gray-500">Service Not Found</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl">{service.name}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-600">{service.description}</p>
//           <p className="mt-4 font-semibold">Pricing: {service.price}</p>
//           <div className="mt-6">
//             <Button onClick={() => router.push('/contact')}>Get a Quote</Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const serviceDetails = {
  'web-development': {
    name: 'Web Development',
    description: 'We build modern and scalable web applications using cutting-edge technologies.',
    banner: '/assets/web-dev.jpg',
    //price: 'Starts from ₹50,000',
    features: [
      'Custom Web Application Development',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Database Design & Optimization',
      'Web Security Implementation'
    ],
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'AWS'],
    process: [
      'Requirement Analysis',
      'Design & Architecture',
      'Development',
      'Testing & QA',
      'Deployment',
      'Maintenance & Support'
    ]
  },
  'mobile-development': {
    name: 'Mobile Development',
    description: 'Custom Android and iOS applications tailored to your business needs with native performance.',
    //price: 'Starts from ₹75,000',
    banner: '/assets/mobile-dev.jpg',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Solutions',
      'Mobile App UI/UX Design',
      'App Store Optimization',
      'Push Notifications Integration'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    process: [
      'Market Research',
      'UI/UX Design',
      'App Development',
      'Testing',
      'App Store Submission',
      'Post-launch Support'
    ]
  },
  'ui-ux': {
    name: 'UI/UX Design',
    description: 'Creating user-friendly and beautiful designs that enhance user engagement and satisfaction.',
    //price: 'Starts from ₹30,000',
    banner: '/assets/ui-ux.jpg',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems Creation'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin'],
    process: [
      'User Research',
      'Information Architecture',
      'Wireframing',
      'Visual Design',
      'Prototyping',
      'User Testing'
    ]
  }
};

export default function ServiceViewPage() {
  const { serviceId } = useParams();
  const router = useRouter();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <p className="text-center text-gray-500">Service Not Found</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={service.banner}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto p-6 py-16"
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="text-gray-700" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faArrowRight} className="text-gray-700" />
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-8">
              {/* <p className="text-2xl font-semibold text-gray-900 mb-8">Pricing: {service.price}</p> */}
              <div className="flex space-x-4">
                <button 
                  onClick={() => router.push('/contact')}
                  className="px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300"
                >
                  Get a Quote
                </button>
                <button 
                  onClick={() => router.back()}
                  className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  Back to Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
