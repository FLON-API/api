var ffapi = {};
ffapi.formTemplate = 
[
	"name",
	"url", {
		"type": "fieldset",
		"title": "Location",
		"expanded": true,
		"items": [
			"location.city",{
				"key": "location.country"
			},
			"location.lat",
			"location.lon"
		]
	}, {
		"type": "fieldset",
		"expanded": true,
		"title": "Contact",
		"items": [
			"contact.email",
			"contact.phone",
		  "contact.jabber",
			"contact.irc",
			"contact.ml",
			"contact.identica",
			"contact.facebook",
			"contact.twitter",
			"contact.googleplus"
		]
  } ,
			"state.nodes", {
				"key": "state.description",
				"type": "textarea"
			}, {
				"key": "state.focus",
				"type": "checkboxes",
				"titleMap": {
					"infrastructure/backbone": "We build infrastructure or backbone connections",
					"Public Free Wifi": "We offer public free wifi",
					"Social Community Building": "We do local socical networking",
					"Local services and content": "We establish local services and provide local content",
					"Free internet access": "We provide internet access within our network"
				}
			}, {
		"type": "button",
		"onClick": function (evt) {
			evt.preventDefault();
			var r = confirm('Do you really want to only submit this simple version?\n\nThe advanced fields are used in several apps, i.e. to aggregate feeds or calendars, show more information on the comunity map, gather statistics data, creating timelines (to be continued). So if you have more pieces of information, please provide them with your API file');
			if (r === true) {
				$('form').submit();
			}
		},
		"title": "OK - generate that simple API file!"
	}, {
		"type": "help",
		"helpvalue": "<br/><div>The previous fields only contain a <strong>very reduced set</strong> of possible data fields. If you already know some details please take a look on the fields below to complete your file.</div><br/>"
	}, {
		"type": "fieldset",
		"title": "Advanced fields...",  
		// "expandable": true,
		"items": [
      {
				"type": "fieldset",
				"title": "Location Details",
				"expandable": true,
				"items": [
					"location.address"
				]
			}, {
				"type": "fieldset",
				"title": "Services",
				"expandable": true,
				"items": "services"
			}, {
				"type": "fieldset",
				"title": "Timeline",
				"expandable": true,
				"items": "timeline",
				"onInsert": function (evt, node) {
					$('a', node.el).click(function () {
						// alert('Ni!');

						setTimeout(function () {
							addDatepickerToTimeline();
						}, 500);

					});
				},
				"onChange": function (evt, node) {
					$('a', node.el).click(function () {
						// alert('Ni!');

						setTimeout(function () {
							addDatepickerToTimeline();
						}, 500);

					});
				}
			}, {
				"type": "fieldset",
				"title": "Feeds",
				"expandable": true,
				"items": "feeds"
			}, {
				"type": "fieldset",
				"title": "Node Maps",
				"expandable": true,
				"items": "nodeMaps"
			}, {
				"type": "fieldset",
				"title": "Technical Details",
				"expandable": true,
				"items": [
					{
						"type": "fieldset",
						"title": "Firmware",
						"items": [
							"techDetails.firmware.name",
							"techDetails.firmware.url",
							"techDetails.firmware.docs",
							]
					}, {
						"type": "fieldset",
						"title": "Domain Names",
						"items": "techDetails.dns"
					}, {
						"type": "fieldset",
						"title": "Networks in Use",
						"items": "techDetails.networks"
					}, {
						"type": "fieldset",
						"title": "Routing Protocols and Updates",
						"items": [ {
								"key": "techDetails.routing",
								"type": "checkboxes",
								"titleMap": {
									"802.11s": "802.11s",
									"Babel": "Babel",
									"batman-adv": "batman-adv",
									"bmx6": "bmx6",
									"bmxd": "bmxd",
									"cjdns": "cjdns",
									"OLSR": "OLSR",
									"OLSRv2": "OLSRv2"
								}
								
							}, {
								"key": "techDetails.updatemode",
								"type": "checkboxes",
								"titleMap": {
									"none": "No automatic updates",
									"manual": "Manual updates supported (e.g. via web interface)",
									"autoupdate": "We provide automatic updates"
								}
							} 
						]
					}
				]
			}, {
				"key": "state.lastchange",
				"type": "hidden"
			}, {
				"key": "api",
				"type": "hidden"
			}
		]
	}, {
		"type": "submit",
		"title": "OK - generate the full API file!"
	}
];

