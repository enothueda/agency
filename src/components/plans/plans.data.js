import plan1 from '../../assets/plan1.jpg';
import plan2 from '../../assets/plan2.jpg';
import plan3 from '../../assets/plan3.jpg';

const PLANS_DATA = [
	{
		id: 1,
		title: 'Professional',
		imageUrl: plan1,
		description: 'Ideal for profesionals and small business that starting on digital services',
		service1: 'Social Media Marketing',
		activities1: [
			{
				id: 1,
				activity: 'Set up/Optimization of key social media platforms'
			},
			{
				id: 2,
				activity: 'Maintance of profile'
			},
			{
				id: 3,
				activity: 'Post key content (frequency based on platform)'
			},
			{
				id: 4,
				activity: 'Custom Video and Photography'
			}
		],
		service2: 'Search Engine Optimization (SEO)',
		activities2: [
			{
				id: 1,
				activity: 'Keyword Analysis'
			},
			{
				id: 2,
				activity: 'Monthly Search Audit'
			},
			{
				id: 3,
				activity: 'Local Search Optimization'
			},
			{
				id: 4,
				activity: 'Keyword Optimization on Website'
			},
			{
				id: 5,
				activity: 'Google Analytics Report'
			}
		],
		service3: 'Blog, Website and Content Creation',
		activities3: [
			{
				id: 1,
				activity: 'Content Design and review'
			},
			{
				id: 2,
				activity: 'Website/Blog Design and Framework'
			},
			{
				id: 3,
				activity: 'Custom blog posting for industry'
			},
			{
				id: 4,
				activity: 'Content Analysis (in all platforms)'
			},
			{
				id: 5,
				activity: 'Monthly Updates'
			}
		]
	},
	{
		id: 2,
		title: 'Business',
		imageUrl: plan2,
		description: 'A company or professional who wants to increase the customers base',
		service1: 'Social Media Marketing',
		activities1: [
			{
				id: 1,
				activity: 'Include all Professional plan +'
			},
			{
				id: 2,
				activity: 'Content Distribution to Social Media Platforms'
			},
			{
				id: 3,
				activity: 'Engage with audience'
			},
			{
				id: 4,
				activity: 'Manage and Report Reviews & Rating'
			}
		],
		service2: 'Search Engine Optimization (SEO)',
		activities2: [
			{
				id: 1,
				activity: 'Include all Professional plan +'
			},
			{
				id: 2,
				activity: 'Targeted Backlinks'
			},
			{
				id: 3,
				activity: 'Site Submission to Search Engines'
			},
			{
				id: 4,
				activity: 'Up to 30 Keywords Tracked'
			}
		],
		service3: 'Blog, Website and Content Creation',
		activities3: [
			{
				id: 1,
				activity: 'Include all Professional plan +'
			},
			{
				id: 2,
				activity: 'Keyword Tagging with Metadata Included'
			},
			{
				id: 3,
				activity: 'Website Optimization and Updates'
			},
			{
				id: 4,
				activity: 'Online Support and Performance Tracking'
			}
		]	
	},
	{
		id: 3,
		title: 'Enterprise',
		imageUrl: plan3,
		description: 'Business that want some support for increase capacity on Digital Technology',
		service1: 'Social Media Marketing',
		activities1: [
			{
				id: 1,
				activity: 'Includes Business Plan +'
			},
			{
				id: 2,
				activity: 'Upload to YouTube Fully Keyword Optimized'
			},
			{
				id: 3,
				activity: 'Key Annotation on Video'
			},
			{
				id: 4,
				activity: 'Create / Clean up Company Profile on Citation Sites'
			}
		],
		service2: 'Search Engine Optimization (SEO)',
		activities2: [
			{
				id: 1,
				activity: 'Includes Business Plan +'
			},
			{
				id: 2,
				activity: 'Up to 100 Keywords Tracked'
			},
			{
				id: 3,
				activity: 'Social Bookmarking of Key Content'
			},
			{
				id: 4,
				activity: 'Keyword Analysis and Targeted Backlinks'
			}
		],
		service3: 'Blog, Website and Content Creation',
		activities3: [
			{
				id: 1,
				activity: 'Includes Business Plan +'
			},
			{
				id: 2,
				activity: 'Daily Content Update'
			},
			{
				id: 3,
				activity: 'Ping Key sites to new Content'
			},
			{
				id: 4,
				activity: 'Testing and Maintance of Webpage'
			}
		]
	}
]

export default PLANS_DATA;