function placeAnOrder(OrderNumber) {
	console.log("Customer Order", OrderNumber);

	cookAndDeliverFood(function () {
		console.log("Delivered food order:", OrderNumber);
	});
}

// Simulate a 5 sec operation.
function cookAndDeliverFood(callback) {
	setTimeout(callback, 5000); // 5 secs.
}

// Simulate user's web requests.
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);