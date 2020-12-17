const express = require("express")
const cors = require("cors")

const Footprint = require("../models/Footprint")

router = express()
router.use(express.json())
router.use(cors())
router.set('json spaces', 4)

/// GET ///