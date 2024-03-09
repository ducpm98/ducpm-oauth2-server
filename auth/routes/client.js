const path = require('path') // has path and __dirname
const express = require('express')
const router = express.Router()

router.get('/', (req,res) => res.sendFile(path.join(__dirname, '../public/clientAuthenticate.html')))

router.get('/app', (req,res) => res.sendFile(path.join(__dirname, '../public/clientApp.html')))

router.get('/user', (req, res) => {
	//DebugControl.log.variable({name: 'res.locals.oauth.token', value: res.locals.oauth.token})
	res.json({
		"Id": 100001,
		"Level": 10,
		"CapitalId": 61,
		"Mobile": "0900000000",
		"Fullname": "Mr Testing"
	})
})
router.get('/info', (req, res) => {
	//DebugControl.log.variable({name: 'res.locals.oauth.token', value: res.locals.oauth.token})
	res.json({
		"Id": 100001,
		"Mobile": "0900000000",
		"CCCD": "12345678",
		"Email": "Quang94.thienkhoi@gmail.com",
		"FullName": "Anh Quang CN",
		"BornYear": "1994-03-08T00:00:00",
		"Gender": "Nam",
		"Academic": "Dai Hoc",
		"Province": "Hà Nội",
		"Address": "Minh Khai, Hai Ba Trung",
		"Team": "Thư Ký",
		"Capital": "Tổng kho Hà Nội",
		"Linkfb": "1234",
		"ContractEndDate": "2023-12-31T00:00:00",
		"Bod": "BAN SAO HOA",
		"Status": null,
		"Level": "Quản trị",
		"Roles": [
			"Quản trị",
			"Giám đốc Khối",
			"Trợ lý Khối",
			"Trợ lý"
		]
	})
})

module.exports = router
