'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const caseStudies = [
  { id: 'ecommerce-growth', title: 'E-commerce Growth Strategies', description: 'How we helped an online store increase sales by 300%' },
  { id: 'ai-in-healthcare', title: 'AI in Healthcare', description: 'Implementing AI solutions for better diagnostics' },
  { id: 'fintech-security', title: 'Fintech Security Solutions', description: 'Enhancing cybersecurity in the fintech sector' },
];

export default function CaseStudyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Case Studies</h1>
      <div className="grid gap-4">
        {caseStudies.map((study) => (
          <Link key={study.id} href={`/insights/case-study/${study.id}`} className="block">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{study.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
