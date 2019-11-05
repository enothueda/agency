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
				name:'HTML, CSS and JS',
				description: 'Design in HTML, CSS and JS for your website'
			},
			{
				id: 2,
				name: 'WordPress',
				description: 'Design in WordPress'
			},
			{
				id: 3,
				name: 'ecommerce',
				description: 'develop and update according to the platform'
			}
		]
	},
	{
		id: 2,
		title: 'Digital Marketing',
		imageUrl: service2,
		description: 'All tools for be on the clients are looking for your products or services',
		activities: [
			{
				id: 1,
				name:'SEO',
				description: 'Optimization in searchers and positioning your website'
			},
			{
				id: 2,
				name: 'Social Network Strategy',
				description: 'Creating value through your social media platforms'
			},
			{
				id: 3,
				name: 'Content Creation',
				description: 'The best content will be created according to your needs and strategy'
			}
		]
	},
	{
		id: 3,
		title: 'Data Management',
		imageUrl: service3,
		description: 'The data you need to measure for improve your business',
		activities: [
			{
				id: 1,
				name:'Database creation and optimization',
				description: 'Design of all important data your business require'
			},
			{
				id: 2,
				name: 'Data Analisys',
				description: 'Reports and important data will be created for you'
			},
			{
				id: 3,
				name: 'Business Inteligence',
				description: 'Best strategies for improve your business will be created and gathered'
			}
		]
	}
]

export default SERVICES_DATA;