"use strict";

describe("how let works", function () {

	it("will provide block scoping, unlike var", function () {

		var doWork = function doWork(flag) {

			if (flag) {
				var x = 3;
				return x;
			}
		};

		var result = doWork(true);
		expect(result).toBe(3);
	});

	it("will provide block scoping with for", function () {

		var doWork = function doWork() {

			for (var i = 0; i < 10; i++) {}

			/* return i won't work */
			return 0;
		};

		var result = doWork();
		expect(result).toBe(0);
	});
});
//# sourceMappingURL=let.js.map