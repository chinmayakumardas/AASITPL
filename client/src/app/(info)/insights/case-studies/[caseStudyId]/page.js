'use client';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const caseStudyDetails = {
  'ecommerce-growth': {
    title: 'E-commerce Growth Strategies',
    description: 'A deep dive into how we helped an e-commerce business scale 3x in 6 months.',
    solution: 'Optimized SEO, improved UI/UX, and data-driven marketing strategies.',
    result: '300% increase in sales and 2x higher customer retention rate.',
  },
  'ai-in-healthcare': {
    title: 'AI in Healthcare',
    description: 'Implementing AI for better diagnosis and treatment planning.',
    solution: 'AI-based diagnostic tools and patient monitoring systems.',
    result: '20% faster diagnosis with 95% accuracy.',
  },
  'fintech-security': {
    title: 'Fintech Security Solutions',
    description: 'Strengthening security in fintech applications.',
    solution: 'Implemented blockchain-based authentication and enhanced encryption.',
    result: 'Reduced fraud cases by 50% and improved transaction security.',
  },
};

export default function CaseStudyViewPage() {
  const { caseStudyId } = useParams();
  const router = useRouter();
  const study = caseStudyDetails[caseStudyId];

  if (!study) {
    return <p className="text-center text-gray-500">Case Study Not Found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{study.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{study.description}</p>
          <p className="mt-4 font-semibold">Solution:</p>
          <p className="text-gray-600">{study.solution}</p>
          <p className="mt-4 font-semibold">Results:</p>
          <p className="text-gray-600">{study.result}</p>
          <div className="mt-6">
            <Button onClick={() => router.push('/insights/case-study')}>Back to Case Studies</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
