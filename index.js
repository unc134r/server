const fs = require('fs')
const express = require('express')
const cors = require('cors')
const path = require('path')
const cache = require('memory-cache')
const app = express();
const axios = require('axios');

app.use(cors())

app.use(express.json({limit: '100mb'}))

// set the view engine to ejs
app.set('view engine', 'ejs');
var methods = ['get', 'post', 'put', 'patch', 'delete']
var server = {
	path: './',
	routes: [],
	upload: {},
	storageEnabled: false,
	timezone: "America/New_York",
	http: axios,
	timezone(timezone) {
		this.timezone = timezone
	},
	time(int, string) {
		var ms
		if (string === 'seconds' || string === 'second') {
			ms = int * 1000
		}
		if (string === 'minutes' || string === 'minute') {
			ms = int * 60000
		}
		if (string === 'hours' || string === 'hour') {
			ms = int * 3600000
		}
		return ms
	},
	timestamp(format) {
		require('moment-timezone')
		var moment = require('moment')
		var timestamp = moment()
		if (typeof this.timezone === "string") {
			return timestamp.clone().tz(this.timezone).format(format || 'LLLL')
		}
		return timestamp.format(format || 'LLLL')
	},
	cron(action, interval) {

		var phrase = interval.split(' ')

		var repeat = phrase[0]
		var int = phrase[1]
		var rate = phrase[2]

		interval = this.time(int, rate)

		setInterval(() => {
			action()
		}, interval)

	},
	uuid() {
		return 'xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		})
	},
	start(port, path) {

		if (path) this.path = path

		var views = this.path ? this.path + '/views' : 'views'
		var public = this.path ? this.path + '/public' : 'public'
		var uploads = this.path ? this.path + '/uploads' : 'uploads'

		app.set('views', views);
		app.use(express.static(public))

		port = port || 80

		this.routes.map(route => {
			// console.log(route.path)
			if (route.middleware) {
				app[route.method](route.path, route.middleware, function(req, res) {
					route.action(req, res)
				})
				return
			}
			app[route.method](route.path, function(req, res) {
				route.action(req, res)
			})
		})
		console.log("localhost:" + port)
		app.listen(port)
	},
	use(plugin) {
		app.use(plugin)
	},
	log(message) {
		if (!message) {
			return server.cache('server_logs') 
		}
		if (server.cache('server_logs')) {
			var logs = server.cache('server_logs')
				logs.push(message)
			server.cache('server_logs', logs, 86400000) // 24 hour retention
			return
		}
		var logs = []
			logs.push(message)
			server.cache('server_logs', logs, 86400000) // 24 hour retention
	},
	cache(key, value, exp) {
		if (key && value) {
			cache.put(key, JSON.stringify(value), exp, function(key, value) {}) // Time in ms
			return
		}
		if (key && !value) {
			return JSON.parse(cache.get(key))
		}
	},
	config(key, value) {
		server.cache(key, value)
	},
}
methods.map((method) => {
	server[method] = function(path, action) {
		this.routes.push({
			method: method,
			path: path,
			action: action
		})
	}
})
module.exports = server