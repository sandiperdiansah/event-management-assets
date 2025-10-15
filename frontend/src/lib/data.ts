import Box from '@/components/shared/icons/Box';
import ChartNoAccessCombined from '@/components/shared/icons/ChartNoAccessCombined';
import FileText from '@/components/shared/icons/FileText';
import Mail from '@/components/shared/icons/Mail';
import ScanLine from '@/components/shared/icons/ScanLine';

export const PRICINGS = [
    {
        level: 'Basic',
        description: 'Suitable for small events with limited asset needs.',
        price: '$0',
        features: [
            'Up to 25 asset items',
            'Up to 50 rental transactions per month',
            'Asset check-in & check-out tracking',
            'Reporting (PDF only)',
        ],
    },
    {
        level: 'Pro',
        description: 'Ideal for vendors or organizers managing many assets.',
        price: '$25',
        features: [
            'Up to 100 asset items',
            'Unlimited rental transactions',
            'QR Code tracking for assets',
            'Multi-user approval system',
            'Reporting (PDF & Excel)',
            'Export asset history',
        ],
    },
    {
        level: 'Unlimited',
        description: 'Designed for large-scale events with complex asset needs.',
        price: '$75',
        features: [
            'Unlimited asset items',
            'Unlimited rental transactions',
            'API access for system integration',
            'Multi-event asset management',
            'Custom workflows & user permissions',
            'Dedicated support team',
            'Onboarding & training sessions',
            'Reporting (PDF & Excel)',
        ],
    },
];

export const FEATURES = [
    {
        icon: Box,
        title: 'Comprehensive Asset Inventory',
        description:
            'Manage and categorize all your event assets efficiently in one centralized system.',
    },
    {
        icon: ChartNoAccessCombined,
        title: 'Real-Time Asset Tracking',
        description:
            'Monitor asset status and location instantly to prevent losses and streamline operations.',
    },
    {
        icon: ScanLine,
        title: 'QR Code Scanning',
        description:
            'Quickly check assets in and out using QR codes for faster and error-free transactions.',
    },
    {
        icon: Mail,
        title: 'Automated Notifications',
        description:
            'Get instant alerts on asset usage, approvals, and return deadlines via email.',
    },
    {
        icon: FileText,
        title: 'Detailed Reporting & Analytics',
        description:
            'Generate comprehensive reports in PDF or Excel to analyze asset utilization and rental history.',
    },
];
