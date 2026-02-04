// // import isAuthenticated from "../middlewares/isAuthenticated.js";
// // import express from "express"
// // import {register , login , updateProfile , logout} from "../controllers/user.controller.js"
// // const router = express.Router()
// // import { singleUpload } from "../middlewares/multer.js";

  
// // router.route("/register").post(singleUpload,register);
// // router.route("/login").post(login);
// // router.route("/logout").get(logout)
// // router.route("/profile/update").post(isAuthenticated,updateProfile);

// // export default router


// import express from "express";
// import { register, login, updateProfile, logout } from "../controllers/user.controller.js";
// import { singleUpload } from "../middlewares/multer.js";
// import isAuthenticated from "../middlewares/isAuthenticated.js";

// const router = express.Router();

// // Multer single file upload
// router.route("/register").post(singleUpload, register);
// router.route("/login").post(login);
// router.route("/logout").get(logout);
// router.route("/profile/update").post(isAuthenticated, updateProfile);

// export default router;

import express from "express";
import { register, login, logout, updateProfile } from "../controllers/user.controller.js";
import { singleUpload } from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/login", login);
router.get("/logout", logout);
// routes/user.route.js


// ✅ multer MUST be before controller
router.post("/profile/update", isAuthenticated, singleUpload, updateProfile);

export default router;
