

model.Product.events.init = function() {
	this.myBoolean = true;
};


model.Product.events.clientrefresh = function() {
	if (!this.name) {
	  this.name = "Unnamed product";
	}
};
