
import { DashboardStat } from '../types';

export const DASHBOARD_STATS: DashboardStat[] = [
  { label: 'Saved Projects', value: '12', icon: 'Folder', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Weekly Activity', value: '+24%', icon: 'TrendingUp', color: 'text-green-500', bg: 'bg-green-500/10' },
  { label: 'Network', value: '158', icon: 'Users', color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { label: 'API Usage', value: '4.2k', icon: 'Zap', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
];

export const RECENT_ACTIVITY = [
  { id: 1, text: 'Updated project "Nebula Dashboard"', time: '2 hours ago' },
  { id: 2, text: 'New API Key generated for AI-Flow', time: '5 hours ago' },
  { id: 3, text: 'Mobile port build successful', time: '1 day ago' }
];
