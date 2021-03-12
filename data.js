var APP_DATA = {
  "scenes": [
    {
      "id": "0-da-tree-house-entry",
      "name": "Da Tree House Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.2825715667850321,
        "pitch": 0.04260802875108283,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -1.612967309424283,
          "pitch": 0.415740218506814,
          "rotation": 0,
          "target": "1-hotspot-1"
        },
        {
          "yaw": -1.9279745041506793,
          "pitch": 0.12685843221991,
          "rotation": 0,
          "target": "3-da-tree-house-roof-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.019971389290487807,
        "pitch": 0.22206855792346758,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.21506949308132306,
          "pitch": 0.5477113265068656,
          "rotation": 4.71238898038469,
          "target": "2-basement"
        },
        {
          "yaw": -2.6051217626364824,
          "pitch": 0.23607808133498587,
          "rotation": 1.5707963267948966,
          "target": "3-da-tree-house-roof-entry"
        },
        {
          "yaw": 3.0527051552042828,
          "pitch": 0.26392048061122253,
          "rotation": 4.71238898038469,
          "target": "0-da-tree-house-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.057593487323984505,
        "pitch": 0.2653263242016983,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 2.6016883991440345,
          "pitch": 0.14590855874492092,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-da-tree-house-roof-entry",
      "name": "Da Tree House Roof Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4118920473165932,
        "pitch": 0.19263060336393245,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 1.460334582131491,
          "pitch": 0.5043590898583563,
          "rotation": 0,
          "target": "4-roof-hotspot"
        },
        {
          "yaw": 3.1164711419038085,
          "pitch": 0.6165498663231617,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-roof-hotspot",
      "name": "Roof Hotspot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.18063547503158262,
        "pitch": 0.23270538779442873,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.017976300663551825,
          "pitch": 0.43967203870880134,
          "rotation": 0,
          "target": "5-roof-sitting-area"
        },
        {
          "yaw": -3.1368940020792913,
          "pitch": 0.31921721727719543,
          "rotation": 4.71238898038469,
          "target": "3-da-tree-house-roof-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-roof-sitting-area",
      "name": "Roof Sitting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.2563070929502125,
        "pitch": 0.5342391297252327,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.35127810489349187,
          "pitch": 0.50039279091569,
          "rotation": 0,
          "target": "4-roof-hotspot"
        },
        {
          "yaw": -0.32276338753993983,
          "pitch": 0.08060455430356761,
          "rotation": 4.71238898038469,
          "target": "3-da-tree-house-roof-entry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
