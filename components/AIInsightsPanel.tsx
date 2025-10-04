'use client';

import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X, Sparkles, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { useTaskStore } from '@/lib/store/taskStore';
import { generateInsights } from '@/lib/ai/insights';

interface AIInsightsPanelProps {
  onClose: () => void;
}

export function AIInsightsPanel({ onClose }: AIInsightsPanelProps) {
  const tasks = useTaskStore((state) => state.tasks);
  const insights = generateInsights(tasks);

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          AI Insights
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <h3 className="font-medium text-sm">Focus Recommendations</h3>
          </div>
          <ul className="space-y-2">
            {insights.focusRecommendations.map((rec, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">{i + 1}</Badge>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {insights.bottlenecks.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <h3 className="font-medium text-sm">Potential Bottlenecks</h3>
            </div>
            <ul className="space-y-1">
              {insights.bottlenecks.map((bottleneck, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  • {bottleneck}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-primary" />
            <h3 className="font-medium text-sm">Time Insights</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            {insights.timeInsight}
          </p>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            💡 These insights are AI-generated based on your task patterns.
            Real AI integration coming soon!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}