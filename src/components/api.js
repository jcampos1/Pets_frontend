let api = () =>{
	const api_food = "http://127.0.0.1:8000/api/foods/";
	return (
		{
			food: function( ) {
				return api_food;
			}
		})
}

export default api;