import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';

const SERVICES_DATA = [
	{
		id: 1,
		title: 'Web & App Development',
		imageUrl: service1,
		description: 'Design and update your web and/or app with the latest trends in technology',
		activities: [
			{
				id: 1,
				name:'Web Design: Modern and Responsive designs',
				description: 'Modern trends on design for your business website'
			},
			{
				id: 2,
				name: 'Web Development: Security and performance',
				description: 'Develop evolving with the high standar of security and performance'
			},
			{
				id: 3,
				name: 'e-commerce: Your store on-line',
				description: 'Develop and update according to the platform'
			},
			{
				id: 4,
				name:'Hosting and Deploy: Managing the base of your website',
				description: 'Host it is important to take care for your website'
			},
			{
				id: 5,
				name: 'Web App and Mobile: All what you need in your mobile',
				description: 'Technology has to be accesible and secure'
			}
		]
	},
	{
		id: 2,
		title: 'Digital Marketing',
		imageUrl: service2,
		description: 'All tools for be on the clients are looking for your products / services',
		activities: [
			{
				id: 1,
				name:'SEO',
				description: 'Optimization to your business be positioned in the internet searchs'
			},
			{
				id: 2,
				name: 'Social Media Strategy',
				description: 'Creating value through your social media platforms'
			},
			{
				id: 3,
				name: 'Content Creation and Photography',
				description: 'The best content will be created according to your needs and strategy'
			},
			{
				id: 4,
				name:'Video Marketing',
				description: 'Your products and services are sell better when clients see how that works'
			},
			{
				id: 5,
				name: 'Marketing Strategy',
				description: 'Your business strategy is special and needs to be showed to your prospect clients'
			}
		]
	},
	{
		id: 3,
		title: 'Data Management',
		imageUrl: service3,
		description: 'The data you know is important to measure for improve your business',
		activities: [
			{
				id: 1,
				name:'Database creation and optimization',
				description: 'Design of all important data your business require for a performed access'
			},
			{
				id: 2,
				name: 'Data Analisys',
				description: 'Reports and important data that you need to watch'
			},
			{
				id: 3,
				name: 'Business Intelligence',
				description: 'Better decision making with data for improve your business'
			},
			{
				id: 4,
				name:'Security',
				description: 'Top Priority for Data Management'
			},
			{
				id: 5,
				name: 'Machine Learning',
				description: 'Automate the data collection and analysis tools'
			}
		]
	}
]

export default SERVICES_DATA;