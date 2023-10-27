const mongoose = require("mongoose");
const { Medicine } = require("./Medicine");

(async () => {
    await mongoose.connect(`mongodb://127.0.0.1:27017/pharmacy`);
})();

module.exports = {
    Medicine
};
