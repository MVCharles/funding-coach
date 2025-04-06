'use client';
import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Copy } from 'lucide-react';

const tools = [
  {
    title: 'Fundraising Strategy Playbook',
    audience: 'Founders',
    prompt: `Build me a fundraising strategy for the next 18 months.

Instructions:
Ask clarifying questions about burn, milestones, product stage, and investor type. Output recommended round size, timing, instrument, and pitch focus.`
  },
  {
    title: 'Cap Table Simulator',
    audience: 'Founders',
    prompt: \`I’m the founder with 100% equity. I’m raising $500K on a $5M post-money SAFE. I’ll raise another $2M in a priced round at $10M pre in a year. Show me how my equity changes over time.\`
  },
  {
    title: 'Investor Q&A Generator',
    audience: 'Founders',
    prompt: \`Generate 10 realistic investor questions based on this pitch: [paste pitch]. Focus on business model, traction, risk, and impact.\`
  },
  {
    title: 'Return Forecast Calculator',
    audience: 'Angels',
    prompt: \`I’m investing $25K into a startup’s $500K SAFE on a $5M post. They’re targeting a $50M exit in 5 years. What’s my potential return?\`
  },
  {
    title: 'Fundraising Readiness Checklist',
    audience: 'Founders',
    prompt: \`Help me understand if I’m ready to fundraise. Ask me questions to test readiness.\`
  }
];

export default function ImpactCoachToolkit() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tools.map((tool, index) => (
        <Card key={index} className="rounded-2xl shadow-md">
          <CardContent className="p-4 space-y-4">
            <div className="text-xl font-semibold">{tool.title}</div>
            <div className="text-sm text-muted-foreground">For {tool.audience}</div>
            <Button
              variant="outline"
              className="flex items-center space-x-2"
              onClick={() => handleCopy(tool.prompt, index)}
            >
              <Copy className="w-4 h-4" />
              <span>{copiedIndex === index ? 'Copied!' : 'Copy Prompt'}</span>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}