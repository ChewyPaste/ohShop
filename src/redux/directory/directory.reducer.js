const INITIAL_STATE = {
	sections: [
		{
			title: 'headwear',
			imageUrl:
				'https://images.pexels.com/photos/1078975/pexels-photo-1078975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			id: 1,
			linkUrl: 'shop/hats'
		},
		{
			title: 'outerwear',
			imageUrl:
				'https://images.pexels.com/photos/1572868/pexels-photo-1572868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			id: 2,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'footwear',
			imageUrl:
				'https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			id: 3,
			linkUrl: 'shop/sneakers'
		},
		{
			title: 'dudes',
			imageUrl:
				'https://cdn.stocksnap.io/img-thumbs/960w/beanie-scarf_M2U9VL0ZWG.jpg',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens'
		},
		{
			title: 'dudettes',
			imageUrl:
				'https://cdn.stocksnap.io/img-thumbs/960w/people-woman_YXR4DJ0MFG.jpg',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens'
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
