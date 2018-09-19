function clearDB() {
	ds.Employee.remove();
	ds.Company.remove();
	ds.Product.remove();
}

function initPublicationCatalogFiles() {
	let oldBooks = require('/PROJECT/models/publication/books');
	let oldAuthors = require('/PROJECT/models/publication/authors');
	let size = {
		before: {
			authors: oldAuthors ? Object.keys(oldAuthors).length : 0,
			books: oldBooks ? Object.keys(oldBooks).length : 0
		}
	};

	let authors = require('import-data/contents/authors');
	saveText(JSON.stringify(authors), '/PROJECT/models/publication/authors.json');

	let books = require('import-data/contents/books');
	saveText(JSON.stringify(books), '/PROJECT/models/publication/books.json');

	let newBooks = require('/PROJECT/models/publication/books');
	let newAuthors = require('/PROJECT/models/publication/authors');

	size.after = {
		authors: Object.keys(newAuthors).length,
		books: Object.keys(newBooks).length
	};

	return size;
}

function doImportProducts() {
	/*	The doc. to import is in the solution folder, in a subfolder
		named "Import". We load the full document in one shot
		(loadText) and split it in an array (one line = one element).
	*/
	let productNames = {};
	let entries = loadText('/PROJECT/modules/import-data/contents/products.txt')
		.split('\n')
		.map(line => {
			return line.split('\t');
		})
		.filter(entry => {
			if (productNames[entry[0]]) {
				return false;
			}

			productNames[entry[0]] = true;

			return true;
		});

	entries
		.forEach(entry => {
			// let p = ds.Product.find("name = :1", columns[0]);
			// if (p == null) { // Not found => create it
			let p = new ds.Product({
				name: entry[0],
				myBoolean: entry[1],
				spec: {
					name: entry[0],
					myObject: {
						myBoolean: entry[1],
						myArray: [{ foo: 'bar' }, 'tata']
					},
					myArray: [{ foo: 'bar' }, 'tata']
				},
				photo: '/PROJECT/Images/' + (entry[1] ? 'apple.jpg' : 'lemon.jpg')
			});
			// Save it
			p.save();
			// } else {
			// 	console.log('WARNING: PRODUCT FOUND!');
			// }
		});
}

function doImportEmpsAndComps() {
	/*	The doc. to import is in the solution folder, in a subfolder
		named "Import". We load the full document in one shot
		(loadText) and split it in an array (one line = one element).
	*/
	let entries = loadText('/PROJECT/modules/import-data/contents/emps_comps.txt')
		.split('\n')
		.map(line => {
			return line.split('\t');
		});

	entries.forEach(entry => {
		/*
				entry[0]		Name of the company
				entry[1]		Last name of the employee
				entry[2]		First name
				entry[3]		Salary
				entry[4]      birth Date
				entry[5]		hiring Date 
		*/

		// Get the company. Create it if needed.
		let comp = ds.Company.find("name = :1", entry[0]);
		if (comp === null) { // Not found => create it
			comp = new ds.Company({
				name: entry[0]
			});
			// Save it
			comp.save();
		}

		// Get the employee. Create it if needed.
		// let emp = ds.Employee.find("lastName = :1 and firstName = :2", entry[1], entry[2]);
		// if (emp == null) {
		let emp = new ds.Employee({
			lastName: entry[1],
			firstName: entry[2],
			salary: entry[3],
			employer: comp,	// This is how you bind two entities with Wakanda!
			birthDate: new Date(entry[4]),
			hiringDate: new Date(entry[5])
		});
		emp.save();
		// } else {
		// 	console.log('WARNING: EMPLOYEE FOUND!');
		// }
	});
}

let testHelpers = {
	db: {
		clear: function () {
			let result = {};
			let publicationSize = initPublicationCatalogFiles();

			result.before = {
				'employees': ds.Employee.length,
				'companies': ds.Company.length,
				'products': ds.Product.length,
				'authors': publicationSize.before.authors,
				'books': publicationSize.before.books
			};

			clearDB();

			result.after = {
				'employees': ds.Employee.length,
				'companies': ds.Company.length,
				'products': ds.Product.length,
				'authors': publicationSize.after.authors,
				'books': publicationSize.after.books
			};

			return result;
		},
		fill: function () {
			let result = {};
			let publicationSize = initPublicationCatalogFiles();

			result.before = {
				'employees': ds.Employee.length,
				'companies': ds.Company.length,
				'products': ds.Product.length,
				'authors': publicationSize.before.authors,
				'books': publicationSize.before.books
			};

			doImportEmpsAndComps();
			doImportProducts();

			result.after = {
				'employees': ds.Employee.length,
				'companies': ds.Company.length,
				'products': ds.Product.length,
				'authors': publicationSize.after.authors,
				'books': publicationSize.after.books
			};

			return result;
		},
		reset: function () {
			let clearResult = testHelpers.db.clear();
			let fillResult = testHelpers.db.fill();
			let result = {
				'before': clearResult.before,
				'afterClear': clearResult.after,
				'after': fillResult.after
			};

			return result;
		},
		state: function () {
			let result = {
				'employees': ds.Employee.length,
				'companies': ds.Company.length,
				'products': ds.Product.length
			};

			return result;
		}
	}
};

module.exports = testHelpers;
