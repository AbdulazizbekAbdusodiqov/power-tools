const router = require("express").Router()

const clientRouter = require('./client.routes')
const ownerRouter = require('./owner.routes')
const districtRouter = require('./district.routes')
const toolRouter = require('./tool.routes')
const adminRouter = require('./admin.routes')

router.use('/client', clientRouter)
router.use('/owner', ownerRouter)
router.use('/admin', adminRouter)
router.use('/district', districtRouter)
router.use('/tool', toolRouter)

module.exports = router;